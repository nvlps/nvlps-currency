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
 */

import Decimal from 'decimal.js-light';
import Currency from './currency';
import NumberPattern from './numpattern';

// Default English-Language Data
import posixData from './posix';

/* eslint-disable */
// Language Aliases
const LOCALE_ALIASES = {
  'ar': 'ar_SY', 'bg': 'bg_BG', 'bs': 'bs_BA', 'ca': 'ca_ES', 'cs': 'cs_CZ',
  'da': 'da_DK', 'de': 'de_DE', 'el': 'el_GR', 'en': 'en_US', 'es': 'es_ES',
  'et': 'et_EE', 'fa': 'fa_IR', 'fi': 'fi_FI', 'fr': 'fr_FR', 'gl': 'gl_ES',
  'he': 'he_IL', 'hu': 'hu_HU', 'id': 'id_ID', 'is': 'is_IS', 'it': 'it_IT',
  'ja': 'ja_JP', 'km': 'km_KH', 'ko': 'ko_KR', 'lt': 'lt_LT', 'lv': 'lv_LV',
  'mk': 'mk_MK', 'nl': 'nl_NL', 'nn': 'nn_NO', 'no': 'nb_NO', 'pl': 'pl_PL',
  'pt': 'pt_PT', 'ro': 'ro_RO', 'ru': 'ru_RU', 'sk': 'sk_SK', 'sl': 'sl_SI',
  'sv': 'sv_SE', 'th': 'th_TH', 'tr': 'tr_TR', 'uk': 'uk_UA'
};
/* eslint-enable */

// String Shims
const isalpha = (s) => (s.match(/^[A-Za-z]+$/) !== null);
const isdigit = (s) => (s.match(/^\d+$/) !== null);

/**
 * Parse a Locale Identifier into its parts
 * @param {String} identifier locale identifier
 * @param {String} separator separator character (defaults to "_")
 * @return {Object} object with language, territory, script, and variant keys
 */
export function parseLocale(identifier, sep = '_') {
  let ident = identifier;
  let script = null;
  let territory = null;
  let variant = null;

  if (ident.indexOf('.') !== -1) {
    // this is probably the charset/encoding, which we don't care about
    [ ident ] = ident.split('.', 1);
  }

  if (ident.indexOf('@') !== -1) {
    // this is a locale modifier such as @euro, which we don't care about either
    [ ident ] = ident.split('@', 1);
  }

  const parts = ident.split(sep);
  const language = parts.shift().toLowerCase();

  if (! isalpha(language)) {
    throw new Error(`Invalid locale language "${language}"`);
  }

  if (parts.length > 0) {
    // Parse script to Title Case
    if ((parts[0].length === 4) && isalpha(parts[0])) {
      script = parts.shift().toLowerCase();
      script = script[0].toUpperCase() + script.substr(1);
    }
  }

  if (parts.length > 0) {
    // Parse territory
    if ((parts[0].length === 2) && isalpha(parts[0])) {
      territory = parts.shift().toUpperCase();
    }
    else if ((parts[0].length === 3) && isdigit(parts[0])) {
      territory = parts.shift();
    }
  }

  if (parts.length > 0) {
    // Parse variant
    if (((parts[0].length === 4) && isdigit(parts[0][0]))
      || ((parts[0].length >= 5) && isalpha(parts[0][0]))) {
      variant = parts.shift();
    }
  }

  if (parts.length > 0) {
    throw new Error(`Invalid locale identifier "${identifier}"`);
  }

  // eslint-disable-next-line no-alert, object-curly-newline
  return { language, territory, script, variant };
}

/**
 * Generate a Locale Identifier from its parts
 * @param {Object} parts object with language, territory, script, and variant keys
 * @param {String} sep separator character (defaults to "_")
 * @return {String} locale identifier
 */
export function generateLocale(parts, sep = '_') {
  const {
    language,
    territory,
    script,
    variant,
  } = parts;

  if (typeof language !== 'string') {
    throw new Error('"language" key must be provided');
  }

  return [ language, script, territory, variant ].filter((x) => (x)).join(sep);
}

/**
 * Find the best match between available and requested locale strings.
 * @param {Array} preferred the list of locale strings preferred by the user
 * @param {Array} available the list of locale strings available
 * @param {String} sep character that separates the different parts of the locale strings
 * @param {Object} aliases a dictionary of aliases for locale identifiers
 *
 * {@example
 * // returns 'de_DE'
 * negotiate_locale(['de_DE', 'en_US'], ['de_DE', 'de_AT'])}
 *
 * {@example
 * // returns 'de'
 * negotiate_locale(['de_DE', 'en_US'], ['en', 'de'])}
 *
 * Case is ignored by the algorithm, the result uses the case of the preferred
 * locale identifier:
 * {@example
 * // returns 'de_DE'
 * negotiate_locale(['de_DE', 'en_US'], ['de_de', 'de_at'])
 * }
 *
 * By default, some web browsers unfortunately do not include the territory
 * in the locale identifier for many locales, and some don't even allow the
 * user to easily add the territory. So while you may prefer using qualified
 * locale identifiers in your web-application, they would not normally match
 * the language-only locale sent by such browsers. To workaround that, this
 * function uses a default mapping of commonly used langauge-only locale
 * identifiers to identifiers including the territory:
 * {@example
 * // returns 'ja_JP'
 * negotiate_locale(['ja', 'en_US'], ['ja_JP', 'en_US'])
 * }
 *
 * Some browsers even use an incorrect or outdated language code, such as "no"
 * for Norwegian, where the correct locale identifier would actually be "nb_NO"
 * (Bokmål) or "nn_NO" (Nynorsk). The aliases are intended to take care of
 * such cases, too:
 * {@example
 * // returns 'nb_NO'
 * negotiate_locale(['no', 'sv'], ['nb_NO', 'sv_SE'])
 * }
 *
 * You can override this default mapping by passing a different `aliases`
 * dictionary to this function, or you can bypass the behavior althogher by
 * setting the `aliases` parameter to `null`.
 */
export function negotiateLocale(preferred, available, sep = '_', aliases = LOCALE_ALIASES) {
  const avail = available.map((s) => s.toLowerCase());
  for (let i = 0; i < preferred.length; i += 1) {
    const locale = preferred[i];
    const ll = locale.toLowerCase();
    if (avail.indexOf(ll) !== -1) {
      return locale;
    }

    if (aliases) {
      if (Object.prototype.hasOwnProperty.call(aliases, ll)) {
        let alias = aliases[ll];
        if (alias) {
          alias = alias.split('_').join(sep);
          if (avail.indexOf(alias.toLowerCase()) !== -1) {
            return alias;
          }
        }
      }
    }

    const parts = locale.split(sep);
    if (parts && (avail.indexOf(parts[0].toLowerCase()) !== -1)) {
      return parts[0];
    }
  }

  return null;
}

// Get the Global Object
function getGlobal() {
  /* eslint-disable */
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  /* eslint-enable */
  /* istanbul ignore next this is exceptional and too difficult to mock */
  throw new Error('unable to locate global object');
}

/**
 * Returns the default locale for a given category
 * @param {String} category one of the "LC_XXX" environment variable names
 * @param {Array} aliases a dictionary of aliases for locale identifiers
 *
 * This function is intended to load the default locale from either the
 * browser via {navigator.language}, or if that is not defined, from the
 * operating system environment variables. Note that if this is used from a
 * web server, the operating system environment variables will return the
 * default locale of the server, not the client.
 *
 * The "C" or "POSIX" pseudo-locales are treated as aliases for the
 * "en_US_POSIX" locale:
 * {@example
 * // returns en_US_POSIX
 * process.env['LC_MESSAGES'] = 'POSIX';
 * default_locale('LC_MESSAGES');
 * }
 *
 * The following fallbacks to the variable are always considered:
 * - `LANGUAGE`
 * - `LC_ALL`
 * - `LC_CTYPE`
 * - `LANG'`
 */
export function defaultLocale(category = null, aliases = LOCALE_ALIASES) {
  const varnames = [category, 'LANGUAGE', 'LC_ALL', 'LC_CTYPE', 'LANG'];
  const globals = getGlobal();
  // This has method seems more reliable than hasOwnProperty for builtins
  const has = (o, k) => typeof o[k] !== 'undefined';
  let locale;

  // Try and load the browser language, if set
  if (has(globals, 'navigator') && has(navigator, 'language')) {
    locale = navigator.language;

    // Parse using BCF47 style with dash separators
    return generateLocale(parseLocale(locale, '-'));
  }

  // Check if we are running in node.js
  if (! has(globals, 'process') || ! has(process, 'env')) {
    /* istanbul ignore next this is exceptional and difficult to mock */
    return null;
  }

  // Load from environment variables
  const filtered = varnames.filter((x) => (x));
  for (let i = 0; i < filtered.length; i += 1) {
    const name = filtered[i];

    locale = process.env[name];
    if (locale) {
      if ((name === 'LANGUAGE') && (locale.indexOf(':') !== -1)) {
        // the LANGUAGE variable may contain a colon-separated list of
        // language codes; we just pick the language on the list
        [ locale ] = locale.split(':', 1);
      }

      const [ tryDefaultLocale ] = locale.split('.', 1);
      if ((tryDefaultLocale === 'C') || (tryDefaultLocale === 'POSIX')) {
        locale = 'en_US_POSIX';
      }
      else if (aliases && has(aliases, locale)) {
        locale = aliases[locale];
      }

      try {
        return generateLocale(parseLocale(locale));
      }
      catch (err) {
        /* Continue to next locale */
      }
    }
  }

  return null;
}

/**
 * Registry of Locale Objects
 * @private
 */
const localeRegistry = Object.create(null);

// Shim for Object.hasOwnProperty
const hasOwnProperty = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

// Private Method Function for Locale.getField
const getField = Symbol('getField');
const getDictField = Symbol('getDictField');

/**
 *
 */
export class Locale {
  /**
   * Class Constructor
   * @param {String} tag IETF BCP 47 language tag string
   * @return {Locale} the Locale instance for the given locale tag
   */
  constructor(tag) {
    const tagItems = parseLocale(tag.split('-').join('_'));
    const normTag = generateLocale(tagItems);
    let lang;

    // Lookup Locale and Parent Language from Registry
    if (! hasOwnProperty(localeRegistry, normTag)) {
      throw new Error(`Locale '${normTag}' is not defined`);
    }

    const loc = localeRegistry[normTag];
    if ((loc.lang !== null) && (loc.lang !== normTag)) {
      if (! hasOwnProperty(localeRegistry, loc.lang)) {
        /* istanbul ignore next
           this should never occur unless someone messes with localeRegistry
        */
        throw new Error(`Internal Error: Language '${loc.lang}' is not defined`);
      }

      lang = localeRegistry[loc.lang];
    }

    // Return Singleton if Present
    if (loc.singleton !== null) {
      return loc.singleton;
    }

    // Store this as Singleton
    loc.singleton = this;
    this.tag = normTag;
    this.m_data = loc.data;
    this.m_lang = lang ? lang.data : null;

    this.language = tagItems.language;
    this.territory = tagItems.territory;
    this.script = tagItems.script;
    this.variant = tagItems.variant;

    // Load Number Patterns
    const np = this[getField]('np');
    const cp = this[getField]('cp');
    const ap = this[getField]('ap');
    this.m_np = np !== null ? new NumberPattern(np) : null;
    this.m_cp = cp !== null ? new NumberPattern(cp) : null;
    this.m_ap = ap !== null ? new NumberPattern(ap) : null;

    // Freeze Object
    Object.freeze(loc);
    Object.freeze(this);
    Object.freeze(this.m_ap);
    Object.freeze(this.m_cp);
    Object.freeze(this.m_np);
  }

  /** @private Get Field from Data or Parent Language */
  [getField](key) {
    if (hasOwnProperty(this.m_data, key)) {
      return this.m_data[key];
    }

    if ((this.m_lang !== null) && hasOwnProperty(this.m_lang, key)) {
      return this.m_lang[key];
    }

    /* istanbul ignore next cannot mock with private method */
    return null;
  }

  /** @private Get a Dictionary Item from Data or Parent Language */
  [getDictField](dataKey, dictKey) {
    if (hasOwnProperty(this.m_data, dataKey)) {
      if (hasOwnProperty(this.m_data[dataKey], dictKey)) {
        return this.m_data[dataKey][dictKey];
      }
    }

    if ((this.m_lang !== null) && (hasOwnProperty(this.m_lang, dataKey))) {
      if (hasOwnProperty(this.m_lang[dataKey], dictKey)) {
        return this.m_lang[dataKey][dictKey];
      }
    }

    return null;
  }

  /** Decimal Point Symbol */
  get decimal() {
    return this[getField]('d');
  }

  /** Digit Grouping Symbol */
  get group() {
    return this[getField]('g');
  }

  /** Plus Sign */
  get plusSign() {
    return this[getField]('p');
  }

  /** Minus Sign */
  get minusSign() {
    return this[getField]('m');
  }

  /** Percent Sign */
  get percentSign() {
    return this[getField]('pc');
  }

  /** Permille Sign */
  get permilleSign() {
    return this[getField]('pm');
  }

  /** Exponential Sign */
  get exponential() {
    return this[getField]('e');
  }

  /** Superscripting Exponent */
  get superscriptingExponent() {
    return this[getField]('x');
  }

  /** Infinity String */
  get inf() {
    return this[getField]('inf');
  }

  /** Not-a-Number String */
  get nan() {
    return this[getField]('nan');
  }

  /** Default Currency */
  get currency() {
    // eslint is confused when a destructure includes both constant and
    // re-assigned variables
    let {
      language, // eslint-disable-line prefer-const
      territory,
    } = parseLocale(this.tag);

    if (territory === null) {
      if (! hasOwnProperty(LOCALE_ALIASES, language)) {
        return Currency('XXX');
      }
      ({ territory } = parseLocale(LOCALE_ALIASES[language]));
    }

    return Currency.forCountry(territory);
  }

  /**
   * Look up the localized Currency Symbol
   * @param {String|Currency} ccy Currency Object or ISO 4217 Currency Code
   * @return {String} Currency Symbol
   *
   * If the locale provides a symbol for the currency, it is returned,
   * otherwise the three-character currency code is returned in upper case.
   *
   * // Returns '$'
   * (new Locale('en_US')).currencySymbol('USD');
   *
   * // Returns 'CA$'
   * (new Locale('en_US')).currencySymbol(Currency('CAD'));
   *
   * // Returns 'CHF'
   * (new Locale('en_US')).currencySymbol('CHF');
   */
  currencySymbol(ccy) {
    let ccyObj = ccy;

    // Ensure we have a normalized Currency Code
    if (! (ccy instanceof Currency)) {
      ccyObj = Currency(ccy);
    }
    const ccyCode = ccyObj.currencyCode;
    const ccySym = this[getDictField]('cs', ccyCode);

    if (ccySym !== null) {
      return ccySym;
    }

    // Fallback is Upper-Case Currency Code
    return ccyCode;
  }

  /**
   * Look up the localized Currency Name
   * @param {String|Currency} ccy Currency Object or ISO 4217 Currency Code
   * @param {Numeric} count Number of items (for pluralization)
   * @return {String} Currency Name
   *
   * If the locale provides a name for the currency, it is returned, otherwise
   * the three-character currency code is returned in upper case.
   *
   * // Returns 'US Dollar'
   * (new Locale('en_US')).currencySymbol('USD');
   *
   * // Returns 'Kanadischer Dollar'
   * (new Locale('de_DE')).currencySymbol(Currency('CAD'));
   */
  currencyName(ccy) {
    // TODO: Add Pluralization

    let ccyObj = ccy;

    // Ensure we have a normalized Currency Code
    if (! (ccy instanceof Currency)) {
      ccyObj = Currency(ccy);
    }
    const ccyCode = ccyObj.currencyCode;
    const ccyName = this[getDictField]('cn', ccyCode);

    if (ccyName !== null) {
      return ccyName;
    }

    // Fallback is Upper-Case Currency Code
    return ccyCode;
  }

  /**
   * Format a Number with a given Number Pattern
   * @param {Numeric|String|Decimal} number number to format
   * @param {String} pattern pattern to use for formatting
   * @param {String|Currency} currency currency to format as
   * @param {Boolean} currencyDigits whether or not to use the currency's
   *                                 precision. If false, the pattern's
   *                                 precision will be used.
   * @param {Boolean} quantize whether to truncate and round high-precision
   *                           numbers to the format pattern (default: true)
   * @return {String} formatted string
   */
  formatNumberWithPattern(number, pattern, currency = null,
    currencyDigits = true, quantize = true)
  {
    return (new NumberPattern(pattern)).apply(
      number,
      this,
      currency,
      currencyDigits,
      quantize,
    );
  }

  /**
   * Return the given decimal number formatted for this locale
   * @param {Numeric|String|Decimal} number number to format
   * @param {Boolean} quantize whether to truncate and round high-precision
   *                           numbers to the format pattern (default: true)
   * @return {String} formatted string
   */
  formatNumber(number, quantize = true) {
    return this.m_np.apply(number, this, null, true, quantize);
  }

  /**
   * Return the given decimal number formatted as currency for this locale
   * @param {Numeric|String|Decimal} number number to format
   * @param {String|Currency} currency currency to format as
   * @param {Boolean} currencyDigits whether or not to use the currency's
   *                                 precision. If false, the pattern's
   *                                 precision will be used.
   * @param {String} formatType either 'standard' or 'accounting'
   * @param {Boolean} quantize whether decimal numbers should be forcibly
   *                           quantized to produce a formatted output strictly
   *                           matching the CLDR definition for the locale
   */
  formatCurrency(number, currency, currencyDigits = true,
    formatType = 'standard', quantize = true)
  {
    if ((typeof formatType !== 'string')
      || ((formatType !== 'standard')
      && (formatType !== 'accounting'))) {
      throw new Error(`Unknown currency formatting type ${formatType.toString()}`);
    }

    if (formatType === 'accounting') {
      return this.m_ap.apply(number, this, currency, currencyDigits, quantize);
    }

    return this.m_cp.apply(number, this, currency, currencyDigits, quantize);
  }

  /**
   * Parse a String into a Numeric Decimal value
   * @param {String} string string to Parse
   * @param {Boolean} strict controls whether numbers formatted in a weird way
   *                         are accepted or rejected
   * @return {Decimal} fixed-point number
   *
   * Parses a string representation of a number into a numeric value, using the
   * number formatting rules of this locale (specifically decimal and grouping
   * symbols). When the given string cannot be parsed, an error is thrown.
   *
   * @example
   * // Returns Decimal(1099.98)
   * (new Locale('en_US')).parseNumber('1,099.98');
   * // Returns Decimal(1099.98)
   * (new Locale('de_DE')).parseNumber('1.099,98');
   * // Returns Decimal(12345.12)
   * (new Locale('ru')).parseNumber('12 345,12');
   *
   * When the given string cannot be parsed, an exception is raised:
   * @example
   * // Error('2,109,998 is not a properly formatted decimal number')
   *
   */
  parseNumber(string, strict = false) {
    let s = string;
    let parsedAlt;
    const d = this.decimal;
    const g = this.group;

    if ((! strict)
      && ((g === '\u00a0') // if the grouping symbol is U+00A0 NO-BREAK SPACE,
       || (g === '\u202f')) // or U+202F NARROW NO-BREAK SPACE
      && (string.indexOf(g) === -1) // and the string to be parsed does not contain it
      && (string.indexOf(' ') !== -1)) { // but instead contains a space
      // then it's reasonable to assume it is taking the place of the
      // grouping symbol
      s = s.split(' ').join(g);
    }

    // Try to parse as a POSIX number
    const parsed = new Decimal(s.split(g).join('').split(d).join('.'));

    // Check that the number can be re-formatted to original
    if (strict && (s.indexOf(g) !== -1)) {
      const proper = this.formatNumber(parsed, false);
      if ((string !== proper) && (string.replace(/0*$/, '') !== proper + d)) {
        try {
          parsedAlt = new Decimal(s.split(d).join('').split(g).join('.'));
        }
        catch (e) {
          if (e instanceof Error && /DecimalError/.test(e.message)) {
            throw new Error(`${string} is not a properly formatted decimal number. Did you mean ${proper}?`);
          }
        }

        const properAlt = this.formatNumber(parsedAlt, false);
        if (properAlt === proper) {
          throw new Error(`${string} is not a properly formatted decimal number. Did you mean ${proper}?`);
        }
        else {
          throw new Error(`${string} is not a properly formatted decimal number. Did you mean ${proper} or ${properAlt}?`);
        }
      }
    }

    // Return Parsed Number
    return parsed;
  }
}

/**
 * Define a new Locale Object
 * @param {String} tag IETF BCP 47 language tag string
 * @param {Object} data Locale Data
 */
export function registerLocale(tag, data) {
  // Normalize Tag String
  const tagItems = parseLocale(tag.split('-').join('_'));
  const normTag = generateLocale(tagItems);

  // Check if the Locale has been defined already
  if (Object.prototype.hasOwnProperty.call(localeRegistry, normTag)) {
    throw new Error(`Locale '${normTag}' has already been defined`);
  }

  const {
    language: lang, territory, script, variant,
  } = tagItems;

  if ((territory === null) && (script === null) && (variant === null)) {
    // Ensure all properties are defined if this is a Language
    const needed = [
      'd', 'g', 'p', 'm', 'pc', 'pm', 'e', 'x',
      'inf', 'nan',
      'np', 'cp', 'ap',
      'cs', 'cn',
    ];

    needed.forEach((i) => {
      if (! Object.prototype.hasOwnProperty.call(data, i)) {
        throw new Error(`Locale Data for ${normTag} is missing key ${i}`);
      }
    });
  }
  else if (! Object.prototype.hasOwnProperty.call(localeRegistry, lang)) {
    // Ensure the Parent Language exists if this is a Territory
    throw new Error(`Locale '${lang}' was not registered before '${normTag}'`);
  }

  // Add new Locale Data to the Registry
  localeRegistry[normTag] = {
    data,
    lang,
    singleton: null,
  };

  // Freeze Symbol List, Name List, and Data Object
  if (hasOwnProperty(data, 'cs')) {
    Object.freeze(data.cs);
  }
  if (hasOwnProperty(data, 'cn')) {
    Object.freeze(data.cn);
  }

  Object.freeze(localeRegistry[normTag].data);

  // Return Locale Object
  return new Locale(normTag);
}

/**
 * Register Multiple Locales
 * @param {Object} localeData
 */
export function registerLocales(localeData) {
  Object.keys(localeData).forEach((k) => {
    registerLocale(k, localeData[k]);
  });
}


/**
 * Gets the set of available (loaded) locales.
 * @static
 * @return {Array} Array of locale tags
 */
export function availableLocales() {
  return Object.keys(localeRegistry);
}

// Load Posix Localization Data
registerLocales(posixData);

// Export POSIX Locale
export const POSIX = new Locale('en_US_POSIX');
