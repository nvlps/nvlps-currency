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

// Currency Data
import ccyData from './ccy-data';

/**
 * Registry of Currency Objects
 * @private
 */
const ccyRegistry = Object.create(null);

/**
 * ISO 4127 Currency Class
 * @typedef Currency
 * @type {Object}
 * @property {String} currencyCode ISO 4127 Currency Code
 * @property {Number} numericCode  ISO 4127 Numeric Code
 * @property {Number} precision    Number of Fractional Digits
 *
 * Represents a currency. Currencies are identified by their ISO 4217 currency
 * codes. Visit the ISO web site for more information.
 *
 * This class is designed so that there is never more than one Currency
 * instance for any given currency. A Currency instance may be obtained by
 * passing a Currency Code to the Currency constructor, or using the
 * Currency.getCurrency static class method.
 */
export class Currency {
  /**
   * Class Constructor
   * @param {String|Number} isoCode ISO 4127 Currency Code (string or numeric)
   * @return {Currency} the Currency instance for the given currency code
   */
  constructor(isoCode) {
    let ccy = null;

    if (typeof isoCode === 'string') {
      // Direct Lookup from Registry
      if (! Object.prototype.hasOwnProperty.call(ccyRegistry, isoCode.toUpperCase())) {
        throw new Error(`Currency '${isoCode}' is not defined`);
      }

      ccy = ccyRegistry[isoCode.toUpperCase()];
    }

    if (typeof isoCode === 'number') {
      // Iterate Registry to find Numeric Code
      Object.keys(ccyRegistry).forEach((code) => {
        if (ccyRegistry[code].data.numericCode === isoCode) {
          ccy = ccyRegistry[code];
        }
      });
    }

    // Currency is not registered
    if (ccy === null) {
      throw new Error(`Currency with code ${isoCode} is not defined`);
    }

    // Return Singleton if Present
    if (ccy.singleton !== null) {
      return ccy.singleton;
    }

    // Store this as Singleton
    ccy.singleton = this;
    this.m_ccy = ccy.data;
    Object.freeze(this);
  }

  /** ISO 4217 Currency Code */
  get currencyCode() {
    return this.m_ccy.isoCode;
  }

  /** ISO 4217 Numeric Code */
  get numericCode() {
    return this.m_ccy.numericCode;
  }

  /** Number of Fractional Digits */
  get precision() {
    return this.m_ccy.precision;
  }

  /** ISO 3166 Country Code for the currency's home country */
  get country() {
    return this.m_ccy.country;
  }

  /**
   * @return {String} String Representation of the Currency
   *
   * Returns a string representation of the currency of the form
   * "<Currency 'XXX'>" where "XXX" is the three-letter ISO 4127 Currency Code.
   */
  toString() {
    return `<Currency '${this.m_ccy.isoCode}'>`;
  }

  /**
   * Get the default Currency for a Country
   * @param {String} countryCode ISO 3166 Country Code
   * @return {Currency} default currency for the country
   *
   * Iterates through all registered Currency items to find the first one which
   * matches the given country. If no currencies match, the Unknown Currency
   * is returned.
   */
  static forCountry(countryCode) {
    let ccy = new Currency('XXX');
    const ucCode = countryCode.toUpperCase();

    // Iterate Registry to find Country Code
    Object.keys(ccyRegistry).forEach((code) => {
      if (ccyRegistry[code].data.country === ucCode) {
        ccy = new Currency(code);
      }
    });

    // Nothing Found
    return ccy;
  }
}

/**
 * Define a new Currency Object
 * @param {String} isoCode      ISO 4127 Currency Code
 * @param {Number} numericCode  ISO 4127 Numeric Code
 * @param {Number} precision    Number of Fractional Digits
 * @param {String} country   ISO 3166 Country Code for the Currency's Home
 * @return {Currency} New Currency Object
 *
 * This function defines a new {Currency} object if it does not already exist
 * and enters it into the runtime currency registry, after which it can be
 * accessed using {Currency.getCurrency}.
 *
 * If the currency already exists, an Error will be thrown.
 */
export function registerCurrency(isoCode, numericCode, precision, country) {
  const ucCode = isoCode.toUpperCase();
  if (Object.prototype.hasOwnProperty.call(ccyRegistry, ucCode)) {
    throw new Error(`Currency '${isoCode}' has already been defined`);
  }

  // Add new Currency Data to the Registry
  ccyRegistry[ucCode] = {
    data: {
      isoCode: ucCode, numericCode, precision, country,
    },
    singleton: null,
  };

  Object.freeze(ccyRegistry[ucCode].data);

  // This will set the 'singleton' field in the registry and freeze it
  return new Currency(ucCode);
}

/**
 * Gets the set of available currencies.
 * @static
 * @return {Array} Array of {Currency} objects
 */
export function availableCurrencies() {
  const ccys = [];
  Object.keys(ccyRegistry).forEach((code) => {
    ccys.push(ccyRegistry[code].singleton);
  });

  return ccys;
}

// Load Currency Data
(function loadCurrencyData() {
  Object.keys(ccyData).forEach((ccy) => {
    const {
      n, p, c,
    } = ccyData[ccy];

    registerCurrency(ccy, n, p, c);
  });
}());
