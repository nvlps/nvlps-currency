/**
 * nvlps-currency Currency Library for nvlps.io
 *
 *   Copyright (c) 2020 Asymworks, LLC.
 *
 *   The nvlps-currency library may be freely distributed under the terms of
 *   the BSD license.  For all licensing information, details and documentation:
 *   https://nvlps.io/nvlps-currency
 *
 * nvlps-currency contains currency and money handling routines for the
 * nvlps.io budgeting software package.  It includes currency information for
 * most world currencies as well as localized formatting, currency symbols, and
 * currency names.
 *
 * Portions of this module are adapted from the python-babel library
 * :copyright: (c) 2020 by Asymworks, LLC.
 * :copyright: (c) 2013-2019 by the Babel Team.
 */

import Decimal from 'decimal.js-light';
import Currency from './currency';

/**
 * Splits a string into a list, starting from the right.
 * @param  {String} str String to Split
 * @param  {String} sep Optional. Specifies the character, or the regular
 *                      expression, to use for splitting the string. If
 *                      omitted, the entire string will be returned (an array
 *                      with only one item)
 * @param  {Number} maxsplit Optional. An integer that specifies the number of
 *                           splits, items after the split limit will not be
 *                           included in the array
 * @return {Array}
 */
function rsplit(str, sep, maxsplit) {
  const split = str.split(sep);
  return maxsplit
    ? [split.slice(0, -maxsplit).join(sep)].concat(split.slice(-maxsplit))
    : split;
}

/**
 * @typedef {NumberFormatRegEx}
 * @type {object}
 * @property {String} prefix Number Prefix String
 * @property {String} number Number Pattern
 * @property {String} suffix Number Suffix String
 */

/**
 * @typedef {PrecisionLimits}
 * @type {object}
 * @property {Number} min Minimum Allowed Digits
 * @property {Number} max Maximum Allowed Digits
 */

/**
 * @typedef {GroupingSizes}
 * @type {object}
 * @property {Number} primary Number of Digits in Primary Groups
 * @property {Number} secondary Number of Digits in each Secondary Group
 */

/**
 * @typedef {NumberFormatParseResults}
 * @type {object}
 * @property {String} pattern Number Pattern which was Parsed
 * @property {String} pPrefix Positive Number Prefix String
 * @property {String} pSuffix Positive Number Suffix String
 * @property {String} nPrefix Negative Number Prefix String
 * @property {String} nSuffix Negative Number Suffix String
 * @property {GroupingSizes} grouping Number Grouping Sizes
 * @property {PrecisionLimits} iPrec Integer Part Precision Limits
 * @property {PrecisionLimits} fPrec Fractional Part Precision Limits
 * @property {PrecisionLimits} ePrec Exponent Part Precision Limits
 * @property {Boolean} ePlus Exponent Part requires a Plus Sign
 */

/**
 * @constant Unicode CLDR Number Pattern Regular Expression
 * @type {NumberFormatRegEx}
 */
const RE_NUMBER_FORMAT = /(?<prefix>(?:'[^']*'|[^0-9@#.,])*)(?<number>[0-9@#.,E+]*)(?<suffix>.*)/;

/**
 * Match a Unicode CLDR Number Format Pattern
 * @param  {String} pattern Unicode CLDR Number Pattern
 * @return {NumberFormatRegEx} Pattern Parts
 *
 * Each Unicode CLDR Number Format is expected to be formatted as an optional
 * prefix string, the number format itself, and an optional suffix string.
 */
function matchNumber(pattern) {
  const rv = pattern.match(RE_NUMBER_FORMAT);
  if (rv == null) {
    /* istanbul ignore next
        invalid patterns get turned into prefixes in parsePattern
     */
    throw new Error(`Invalid number pattern '${pattern}'`);
  }

  return rv.groups;
}

/**
 * Calculate the Minimum and Maximum Allowed Digits in a Number
 * @param  {String} p Number Format String
 * @return {PrecisionLimits} Calculated Precision Limits
 */
function parsePrecision(p) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < p.length; i += 1) {
    const c = p[i];
    if (c === '@' || c === '0') {
      min += 1;
      max += 1;
    } else if (c === '#') {
      max += 1;
    } else if (c !== ',') {
      /* istanbul ignore next unclear how to test this */
      break;
    }
  }

  return { min, max };
}

/**
 * Calculate Primary and Secondary Grouping Lengths
 * @param  {String} p Number Format String
 * @return {GroupingSizes} Calculated Grouping Sizes
 *
 * @example <caption>Default or Invalid Grouping</caption>
 * // returns { primary: 1000, secondary: 1000 }
 * _parse_grouping('##')
 * @example <caption>Thousands-based Grouping</caption>
 * // returns { primary: 3, secondary: 3 }
 * _parse_grouping('#,##0')
 * @example <caption>Indian Vedic Grouping</caption>
 * // returns { primary: 2, secondary: 2 }
 * _parse_grouping('#,##,##0')
 */
function parseGrouping(p) {
  const width = p.length;
  let g1 = p.lastIndexOf(',');
  let g2;
  if (g1 === -1) {
    // Default is no grouping (1000 digits)
    return { primary: 1000, secondary: 1000 };
  }

  g1 = width - g1 - 1;
  g2 = p.substring(0, width - g1 - 1).lastIndexOf(',');
  if (g2 === -1) {
    // No Secondary Grouping
    return { primary: g1, secondary: g1 };
  }

  g2 = width - g1 - g2 - 2;
  return { primary: g1, secondary: g2 };
}

/**
 * Parse a Unicode CLDR Number or Currency Format String
 * @param  {String} pattern Number Pattern String
 * @return {NumberFormatParseResults}
 *
 * Parses a Unicode CLDR Number Format string into its component parts
 */
function parsePattern(pattern) {
  // Parser Results
  let pPrefix;
  let pSuffix;
  let nPrefix;
  let nSuffix;

  let ePrec;
  let ePlus;

  // Internal Variables
  let number;
  let integer;
  let fraction;
  let exp;

  // Parse Positive (and possibly Negative) Patterns
  if (pattern.indexOf(';') !== -1) {
    const [pPattern, nPattern] = pattern.split(';', 2);
    ({ prefix: pPrefix, number, suffix: pSuffix } = matchNumber(pPattern));
    ({ prefix: nPrefix, suffix: nSuffix } = matchNumber(nPattern));
  } else {
    ({ prefix: pPrefix, number, suffix: pSuffix } = matchNumber(pattern));
    nPrefix = `-${pPrefix}`;
    nSuffix = pSuffix;
  }

  // Parse Exponent
  if (number.indexOf('E') !== -1) {
    [number, exp] = number.split('E', 2);
  } else {
    exp = null;
  }

  // Parse Integer and Decimal Part
  if (number.indexOf('@') !== -1) {
    if (number.indexOf('.') !== -1 || number.indexOf('0') !== -1) {
      throw new Error('Significant digit patterns may not contain "." or "0"');
    }
  }

  if (number.indexOf('.') !== -1) {
    [integer, fraction] = rsplit(number, '.', 1);
  } else {
    integer = number;
    fraction = '';
  }

  // Parse Precisions
  const iPrec = parsePrecision(integer);
  const fPrec = parsePrecision(fraction);

  if (exp) {
    ePlus = false;
    if (exp[0] === '+') {
      ePlus = true;
      exp = exp.substring(1);
    }

    ePrec = parsePrecision(exp);
  } else {
    ePlus = false;
    ePrec = null;
  }

  // Parse Groupings
  const grouping = parseGrouping(integer);

  // Return NumberPattern
  return {
    pPrefix,
    pSuffix,
    nPrefix,
    nSuffix,
    grouping,
    iPrec,
    fPrec,
    ePrec,
    ePlus,
  };
}

/**
 * Format a Number with a set number of Significant Digits
 * @param {Decimal} value Number to Format
 * @param {Number} min Minimum Number of Significant Digits
 * @param {Number} max Maximum Number of Significant Digits
 *
 * Conceptually, the implementation of this method can be summarized in the
 * following steps:
 *
 *   - Move or shift the decimal point (i.e. the exponent) so the maximum
 *     amount of significant digits fall into the integer part (i.e. to the
 *     left of the decimal point)
 *
 *   - Round the number to the nearest integer, discarding all the fractional
 *     part which contained extra digits to be eliminated
 *
 *   - Convert the rounded integer to a string, that will contain the final
 *     sequence of significant digits already trimmed to the maximum
 *
 *   - Restore the original position of the decimal point, potentially
 *     padding with zeroes on either side
 */
function formatSignificant(value, min, max) {
  const exp = value.exponent();
  const scale = max - 1 - exp;
  const digits = String(value.times(new Decimal(10).pow(scale)).toDecimalPlaces(0));
  let result;

  if (scale <= 0) {
    // Initial value had too much precision; pad with zeros to get to
    // original number of integer digits.
    result = digits + '0'.repeat(-scale);
  }
  else {
    // Initial value did not have enough digits, so pad the fractional part
    // with zeros to achieve the correct number of significant digits.
    const intpart = digits.substr(0, digits.length - scale);
    const i = intpart.length;
    const j = i + Math.max(min - 1, 0);
    result = [
      intpart || '0',
      '.',
      '0'.repeat(-Math.min(exp + 1, 0)),
      digits.substr(i, j),
      digits.substr(j).replace(/0*$/g, ''),
    ].join('').replace(/\.*$/g, '');
  }

  return result;
}

/**
 * Number Pattern Class
 */
export default class NumberPattern {
  /**
   * Class Constructor
   * @param {String} pattern Pattern String
   */
  constructor(pattern) {
    this.pattern = pattern;
    this.parsed = parsePattern(pattern);
    this.scale = this.computeScale();
  }

  /**
   * Return the scaling factor to apply to the number before rendering.
   *
   * Auto-set to a factor of 2 or 3 if presence of a "%" or "‰" sign is
   * detected in the prefix or suffix of the pattern. Default is to not mess
   * with the scale at all and keep it to 0.
   */
  computeScale() {
    const {
      pPrefix, nPrefix, pSuffix, nSuffix,
    } = this.parsed;
    const fixes = `${pPrefix}${pSuffix}${nPrefix}${nSuffix}`;
    if (fixes.indexOf('%') !== -1) {
      return 2;
    }
    if (fixes.indexOf('‰') !== -1) {
      return 3;
    }
    return 0;
  }

  /**
   * Returns normalized scientific notation components of a value.
   */
  scientificNotationElements(value, locale) {
    // Adjust Value to have exactly one leading digit
    let exp = value.exponent();
    let svalue = value.times(new Decimal(10).pow(-exp));
    if (svalue.exponent() !== 0) {
      /* istanbul ignore next */
      throw new Error('Assertion Failed: svalue.exponent() != 0');
    }

    /*
     * Shift Exponent and Value by minimum number of digits required by the
     * rendering pattern (at least 1).
     */
    const leadShift = Math.max(1, this.parsed.iPrec.min) - 1;
    exp -= leadShift;
    svalue = svalue.times(new Decimal(10).pow(leadShift));

    // Get Exponent Sign Symbol
    let expSign = '';
    if (exp < 0) {
      expSign = locale.minusSign;
    }
    else if (this.parsed.ePlus) {
      expSign = locale.plusSign;
    }

    // Normalize Exponent Sign
    exp = Math.abs(exp);

    // Return Elements
    return { value: svalue, exp, expSign };
  }

  /**
   * Format an Integer Part
   * @private
   * @param {String} value
   * @param {Number} min Minimum Number of Characters
   * @param {Number} max Maximum Number of Characters
   * @param {String} locale Locale
   * @return {String} Integer Part
   */
  formatInt(value, min, max, locale) {
    let svalue = value;
    const width = value.length;
    const symbol = locale.group;
    let gsize = this.parsed.grouping.primary;
    let ret = '';

    if (width < min) {
      svalue = '0'.repeat(min - width) + svalue;
    }

    while (svalue.length > gsize) {
      ret = symbol + svalue.substr(svalue.length - gsize) + ret;
      svalue = svalue.substr(0, svalue.length - gsize);
      gsize = this.parsed.grouping.secondary;
    }

    return svalue + ret;
  }

  /**
   * Format a Fraction Part
   * @private
   * @param {String} value Fractional Part as a String
   * @param {String} locale Locale
   * @param {PrecisionLimits} force_prec Force Precision Limits
   * @return {String} Decimal Part
   *
   * Zero-pad the right side of the string to meet the minumum number of
   * digits specified in the precision.  Extra trailing zeros are removed,
   * but the string is otherwise not truncated.  The decimal symbol is added
   * to the returned string.
   */
  formatFrac(value, locale, forceFrac = null) {
    let svalue = value;
    const { min, max } = forceFrac || this.parsed.fPrec;
    /* istanbul ignore if
     * this seems to not get called due to quantizeValue pre-formatting the
     * value to the maximum allowed fractional precision
     */
    if (svalue.length < min) {
      svalue += '0'.repeat(min - svalue.length);
    }
    if ((max === 0) || ((min === 0) && (parseInt(svalue, 10) === 0))) {
      return '';
    }
    while ((svalue.length > min) && (svalue.charAt(svalue.length - 1) === '0')) {
      svalue = svalue.substring(0, svalue.length - 1);
    }
    return locale.decimal + svalue;
  }

  /**
   * @private
   * @param {Decimal} value value to quantize
   * @param {String} locale locale object
   * @param {PrecisionLimits} frac_prec fractional part precision limits
   *
   * This method handles the main legwork of formatting the number part of the
   * pattern into a string which has the correct minimum precision on both
   * integer and fractional parts, with the localized decimal and grouping
   * symbols.
   */
  quantizeValue(value, locale, fracPrec) {
    const [int, frac] = value.toFixed(fracPrec.max).split('.', 2);
    const intPart = this.formatInt(int, this.parsed.iPrec.min, this.parsed.iPrec.max, locale);
    const fracPart = this.formatFrac(frac, locale, fracPrec);
    return intPart + fracPart;
  }

  /**
   * Apply the Number Format to a Number
   * @param {Numeric|Decimal} value numeric value to format. If this is not a
   *                                Decimal object, it will be cast to one.
   * @param {Locale} locale locale to use for number symbols
   * @param {Currency} currency currency, if any, to format as
   * @param {Boolean} currencyDigits whether or not to use the currency's
   *                                 precision. If false, the pattern's
   *                                 precision will be used.
   * @param {Boolean} quantize whether decimal numbers should be forcibly
   *                           quantized to produce a formatted output strictly
   *                           matching the CLDR definition for the locale
   * @return {String} formatted decimal string
   */
  apply(value, locale, currency = null,
    currencyDigits = true, quantize = true)
  {
    let dval;
    let exp;
    let expSign;
    let fracPrec = this.parsed.fPrec;
    let number;
    let retval;

    // Generate a Decimal value to work on
    if (value instanceof Decimal) {
      dval = value;
    }
    else if (typeof value === 'number') {
      dval = new Decimal(value);
    }
    else {
      dval = new Decimal(String(value));
    }

    // Force Scaling if required
    dval = dval.times(new Decimal(10).pow(this.scale));

    // Separate the Sign and Absolute Value
    const isNegative = dval.isNegative() ? 1 : 0;
    dval = dval.abs();

    // Prepare Scientific Notation Metadata
    if (this.parsed.ePrec != null) {
      ({ value: dval, exp, expSign } = this.scientificNotationElements(dval, locale));
    }

    // Force fractional precision based on currency defaults
    if (Currency.isCurrency(currency) && currencyDigits) {
      fracPrec = { min: currency.precision, max: currency.precision };
    }

    // Bump decimal precision to the natural precision of the number if it
    // exceeds the one we're about to use. This adaptative precision is only
    // triggered if the decimal quantization is disabled or if a scientific
    // notation pattern has a missing mandatory fractional part (as in the
    // default '#E0' pattern). This special case has been extensively
    // discussed at https://github.com/python-babel/babel/pull/494#issuecomment-307649969 .
    if ((! quantize)
      || ((this.parsed.ePrec !== null)
      && (fracPrec.min === 0 && fracPrec.max === 0))) {
      fracPrec = {
        min: fracPrec.min,
        max: Math.max(fracPrec.max, dval.dp()),
      };
    }

    // Render Scientific Notation
    if (this.parsed.ePrec != null) {
      number = [
        this.quantizeValue(dval, locale, fracPrec),
        locale.exponential,
        expSign,
        this.formatInt(
          String(exp),
          this.parsed.ePrec.min,
          this.parsed.ePrec.max,
          locale,
        ),
      ].join('');
    }

    // Render a Significant Digits Pattern
    else if (this.pattern.indexOf('@') !== -1) {
      const text = formatSignificant(
        dval,
        this.parsed.iPrec.min,
        this.parsed.iPrec.max,
      );
      const [ int, frac ] = text.split('.', 2);
      number = this.formatInt(int, 0, 1000, locale);
      if (frac) {
        number += locale.decimal + frac;
      }
    }

    // Normal Number Pattern
    else {
      number = this.quantizeValue(dval, locale, fracPrec);
    }

    // Apply Prefix and Suffix
    retval = [
      isNegative ? this.parsed.nPrefix : this.parsed.pPrefix,
      number,
      isNegative ? this.parsed.nSuffix : this.parsed.pSuffix,
    ].join('');

    // Apply Currency Symbol
    if (retval.indexOf('¤') !== -1) {
      let ccyCode;
      if (Currency.isCurrency(currency)) {
        ccyCode = currency.currencyCode;
      }
      else {
        const c = Currency(currency);
        ccyCode = c.currencyCode;
      }

      retval = retval.replace('¤¤¤', locale.currencyName(currency, value));
      retval = retval.replace('¤¤', ccyCode);
      retval = retval.replace('¤', locale.currencySymbol(currency));
    }

    // Return Formatted Value
    return retval;
  }
}
