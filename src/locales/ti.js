/* eslint-disable */

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
import { registerLocale } from '../locale';
(function() {
  registerLocale('ti', {
    d: '.',
    g: ',',
    p: '+',
    m: '-',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'NaN',
    np: '#,##0.###',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      AUD: 'A$',
      BRL: 'R$',
      CAD: 'CA$',
      CNY: 'CN¥',
      EUR: '€',
      GBP: '£',
      HKD: 'HK$',
      ILS: '₪',
      INR: '₹',
      JPY: 'JP¥',
      KRW: '₩',
      MXN: 'MX$',
      NZD: 'NZ$',
      TWD: 'NT$',
      USD: 'US$',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      ETB: 'Br'
    },
    cn: {
      BRL: 'የብራዚል ሪል',
      CNY: 'የቻይና ዩአን ረንሚንቢ',
      ETB: 'የኢትዮጵያ ብር',
      EUR: 'አውሮ',
      GBP: 'የእንግሊዝ ፓውንድ ስተርሊንግ',
      INR: 'የሕንድ ሩፒ',
      JPY: 'የጃፓን የን',
      RUB: 'የራሻ ሩብል',
      USD: 'የአሜሪካን ዶላር'
    }
  });

  registerLocale('ti_ER', {
    cs: {
      ERN: 'Nfk'
    }
  });
})();
