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
import { Locale, POSIX } from './locale';
import Currency from './currency';

/**
 *
 */
export default class Money {
  /**
   *
   */
  constructor(amt, ccy = null, locale = POSIX) {
    if (amt instanceof Money) {
      // Copy Constructor semantics
      return new Money(amt.amt, amt.ccy);
    }

    // Load Amount, using localized parser if not a Numeric or Currency value
    if (amt instanceof Decimal) {
      this.amt = amt;
    }
    else if (typeof amt === 'number') {
      this.amt = new Decimal(amt);
    }
    else if (typeof amt === 'string') {
      this.amt = new Decimal(locale.parseNumber(amt));
    }
    else {
      throw new Error(`Failed to parse amount of type ${typeof amt}`);
    }

    // Load Currency (defaults to Unknown Currency)
    if (ccy === null) {
      this.ccy = Currency('XXX');
    }
    else if (ccy instanceof Locale) {
      this.ccy = ccy.currency;
    }
    else if (! Currency.isCurrency(ccy)) {
      this.ccy = Currency(ccy);
    }
    else {
      this.ccy = ccy;
    }

    // Freeze Object
    Object.freeze(this);
  }

  /**
   * Compare two Money Values
   * @param {Money|Decimal|Numeric|String} otherAmt amount to compare
   * @return {Numeric} result
   *
   * Returns 0 if the money values are equal and have the same currency.
   * Returns 1 if the value of this Money is greater than otherAmt.
   * Returns -1 if the value of this Money is less than otherAmt.
   *
   * If the otherAmt has a different currency than this, an exception is
   * raised.
   */
  cmp(otherAmt) {
    if (otherAmt instanceof Money) {
      if (otherAmt.currency !== this.currency) {
        throw new Error(`Cannot compare money of currency ${otherAmt.currency.currencyCode} to currency ${this.currency.currencyCode}`);
      }
      return this.amt.cmp(otherAmt.amt);
    }
    return this.amt.cmp(new Decimal(otherAmt));
  }

  /**
   * Return true if the other Money is equal to this. Equivalent to
   * (this.cmp(otherAmt) === 0)
   */
  eq(otherAmt) {
    return this.cmp(otherAmt) === 0;
  }

  /**
   * Return true if the other Money is not equal to this. Equivalent to
   * (this.cmp(otherAmt) === 0)
   */
  ne(otherAmt) {
    return this.cmp(otherAmt) !== 0;
  }

  /**
   * Return true if the this Money is greater than the other. Equivalent to
   * (this.cmp(otherAmt) > 0)
   */
  gt(otherAmt) {
    return this.cmp(otherAmt) > 0;
  }

  /**
   * Return true if the this Money is greater than or equal to the other.
   * Equivalent to (this.cmp(otherAmt) >= 0)
   */
  ge(otherAmt) {
    return this.cmp(otherAmt) >= 0;
  }

  /**
   * Return true if the this Money is less than the other. Equivalent to
   * (this.cmp(otherAmt) > 0)
   */
  lt(otherAmt) {
    return this.cmp(otherAmt) < 0;
  }

  /**
   * Return true if the this Money is less than or equal to the other.
   * Equivalent to (this.cmp(otherAmt) <= 0)
   */
  le(otherAmt) {
    return this.cmp(otherAmt) <= 0;
  }

  /**
   * Add a Money Value to this Money Value
   * @param {Money|Decimal|Numeric|String} otherAmt amount to add
   * @return {Money} new Money object
   *
   * Adds the other money amount to this money amount and returns a new Money
   * object with the result. If the other money amount has no currency value
   * (or is a Decimal or plain numeric value), the resulting money will have
   * the same currency as this. If the other money amount has a currency which
   * is different than this, an exception is raised.
   */
  add(otherAmt) {
    if (otherAmt instanceof Money) {
      if (otherAmt.currency !== this.currency) {
        throw new Error(`Cannot add money of currency ${otherAmt.currency.currencyCode} to currency ${this.currency.currencyCode}`);
      }
      return new Money(this.amt.plus(otherAmt.amt), this.currency);
    }
    return new Money(this.amt.plus(new Decimal(otherAmt)), this.currency);
  }

  /**
   * Subtract a Money Value to this Money Value
   * @param {Money|Decimal|Numeric|String} otherAmt amount to subtract
   * @return {Money} new Money object
   *
   * Subtracts the other money amount to this money amount and returns a new
   * Money object with the result. If the other money amount has no currency
   * value (or is a Decimal or plain numeric value), the resulting money will
   * have the same currency as this. If the other money amount has a currency
   * which is different than this, an exception is raised.
   */
  subtract(otherAmt) {
    if (otherAmt instanceof Money) {
      if (otherAmt.currency !== this.currency) {
        throw new Error(`Cannot subtract money of currency ${otherAmt.currency.currencyCode} from currency ${this.currency.currencyCode}`);
      }
      return new Money(this.amt.minus(otherAmt.amt), this.currency);
    }
    return new Money(this.amt.minus(new Decimal(otherAmt)), this.currency);
  }

  /**
   * Multiply a Money Value with a Number
   * @param {Decimal|Numeric|String} factor amount by which to multiply
   * @param {Number} roundingMode Decimal Rounding Mode
   * @return {Money} new Money object
   *
   * Multiplies ththis money amount by a factor and returns a new Money object
   * with the result. The other amount must be a plain number (or Decimal)
   * object; it does not make sense to multiply currencies.
   *
   * Results are rounded to the nearest minor currency unit.  By default, this
   * uses half-up rounding (i.e. towards nearest neighbor, with half values
   * rounding away from zero). This can be overridden using Decimal rounding
   * constants (e.g. Decimal.ROUND_HALF_EVEN).
   */
  multiply(factor, roundingMode = Decimal.ROUND_HALF_UP) {
    if (factor instanceof Money) {
      throw new Error('Cannot multiply two Money objects together');
    }
    return new Money(
      this.amt.times(
        new Decimal(factor),
      ).todp(
        this.ccy.precision,
        roundingMode,
      ),
    );
  }

  /**
   * Allocate Money Evenly into Groups
   * @param {Array} ratios ratios to allocate
   * @return {Array} array of allocated values
   */
  distributeRatios(ratios) {
    if (! ((typeof ratios === 'object') && Array.isArray(ratios) && ratios.length > 0)) {
      throw new Error('Money objects must be distributed by an array of ratios');
    }

    const amtCents = this.amount.times(new Decimal(10).pow(this.currency.precision)).toint();
    const results = [];
    let remainder = amtCents;
    let total = 0;

    // Calculate Total
    ratios.map((x) => {
      total += x;
      return null;
    });

    // Allocate Money
    for (let i = 0; i < ratios.length; i += 1) {
      // ROUND_FLOOR is important here to ensure remainder stays positive
      const cents = new Decimal(amtCents).times(ratios[i]).div(total).todp(0, Decimal.ROUND_FLOOR);
      results[i] = new Money(
        cents.times(new Decimal(10).pow(-this.currency.precision)),
        this.currency,
      );
      remainder -= cents;
    }

    // Allocate Remainder
    const cent = (new Decimal(10)).pow(-this.currency.precision);
    for (let i = 0; i < remainder; i += 1) {
      results[i] = results[i].add(cent);
    }

    // Return Results
    return results;
  }

  /**
   * Allocate Money into multiple groups
   * @param {Number|Array} n number of groups among which to allocate, or array
   *                         of ratios.
   * @return {Array} array of allocated values
   *
   */
  distribute(n) {
    if (typeof n === 'number') {
      return this.distributeRatios(Array(n).fill(1));
    }
    if (typeof n === 'object') {
      return this.distributeRatios(n);
    }
    throw new Error('Money must be allocated into a number of groups or by an array of ratios');
  }

  /** Currency Object */
  get currency() {
    return this.ccy;
  }

  /** Decimal value */
  get amount() {
    return this.amt.todp(this.ccy.precision);
  }

  /**
   * Format the Money as a localized currency string
   * @param {Locale} locale locale to use for formatting (defaults to POSIX)
   * @param {String} formatType either 'standard' or 'accounting'
   */
  format(locale = POSIX, formatType = 'standard') {
    return locale.formatCurrency(
      this.amt,
      this.ccy,
      true,
      formatType,
      true,
    );
  }

  /**
   * @return {String} String Representation of the Money
   *
   * Returns a string representation of the money of the form
   * "<XXX ##.###>" where "XXX" is the three-letter ISO 4127 Currency Code.
   */
  toString() {
    const amtStr = POSIX.formatNumberWithPattern(
      this.amount,
      '#,##0.00 ¤¤',
      this.ccy,
      true,
      'standard',
      true,
    );
    return `<${amtStr}>`;
  }
}
