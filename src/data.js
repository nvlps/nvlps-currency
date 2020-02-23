/**
 * Locale Handling Library for Nvlps
 *
 * Import locale data generated from gen_currency_data.py into the
 * nvlps-currency package. Includes helper functions to resolve locale data
 * with territory-specific overrides.
 *
 * Intended for use with babel-plugin-inline-json-import
 *
 * Copyright (c) 2020 Asymworks, LLC.  All Rights Reserved.
 */

import _ from 'lodash';

import nvLocaleDataJson from '../data/nvlps-locale-data.json';
import nvCurrencyDataJson from '../data/nvlps-currency-data.json';

/** @todo Not sure why this is needed */
const nvLocaleData = nvLocaleDataJson.default;
const nvCurrencyData = nvCurrencyDataJson.default;

/**
 * @typedef {nvLocaleData}
 * @type {Object}
 * @property {String} d Decimal Point Symbol
 * @property {String} g Digit Grouping Symbol
 * @property {String} np General Number Formatting Pattern
 * @property {String} cp Currency Formatting Pattern
 * @property {String} ap Accounting Formatting Pattern
 * @property {String} p Plus Sign Symbol
 * @property {String} m Minus Sign Symbol
 * @property {String} pc Percent Symbol
 * @property {String} pm Permille Symbol
 * @property {String} e Exponential Symbol
 * @property {String} x Superscripting Exponent
 * @property {String} inf Inifinity Symbol
 * @property {String} nan Not-a-Number Symbol
 * @property {String} c Default Currency for the Locale (ISO 4127 Code)
 */

/**
 * @typedef {nvCurrencyData}
 * @type {Object}
 * @property {String} n Currency Name in en_US Language
 * @property {Number} i ISO 4127 Currency Number
 * @property {Number} p Currency Precision (if not the default)
 * @property {String} l Currency Home Locale
 * @property {String} s Currency Symbol (not localized)
 */

/**
 * Return list of all Locales bundled by nvlps-currency
 * @return {Array} Array of Locale identifiers
 *
 * This can be passed to {negotiateLocale} to find a locale that nvlps-currency
 * supports given a list of possible user locales.
 */
export function allLocales() {
  return _.keys(nvLocaleData);
}

function loadLocaleChain(locale, cur) {
  if (! _.has(nvLocaleData, locale)
   || ! _.has(nvLocaleData[locale], 'h')) {
    return cur;
  }
  return [ nvLocaleData[locale].h, ...cur ];
}

/**
* Load Locale Data for the given locale identifier, including parents
* @param {String} locale Locale Identifier
* @return {nvLocaleData} Locale Data or null
*
* This function does not call {negotiateLocale} so if the desired locale is not
* in the nvlps-currency data bundle, the function returns null. The caller
* should call {negotiateLocale} first to ensure that there is a valid locale
* available for use.
*/
export function loadLocale(locale) {
  const localeData = {};

  if (! _.has(nvLocaleData, locale)) {
    return null;
  }

  const localeChain = loadLocaleChain(locale, [ locale ]);
  _.forEach(localeChain, (l) => {
    _.forIn(nvLocaleData[l], (value, key) => {
      if (key === 'h') {
        return;
      }

      localeData[key] = value;
    });
  });

  return localeData;
}

/**
 * Load Currency Data for the given currency
 * @param {String} currency ISO 4217 Currency Code
 * @return {nvCurrencyData} Currency Data or null
 */
export function loadCurrency(currency) {
  const ccyData = {};
  if (! _.has(nvCurrencyData, currency)) {
    return null;
  }

  const ccyChain = [
    // eslint-disable-next-line no-underscore-dangle
    nvCurrencyData.__d,
    nvCurrencyData[currency],
  ];

  _.forEach(ccyChain, (ccy) => {
    _.forIn(ccy, (value, key) => {
      ccyData[key] = value;
    });
  });

  return ccyData;
}

// Export Locale Data
export { nvLocaleData, nvCurrencyData };
