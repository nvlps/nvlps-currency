/* eslint object-curly-newline: 0, import/prefer-default-export: 0 */
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

/* Generated by gen_ccy_l10n.py */

import { registerLocales } from '@nvlps/currency';

const TO = {
  to: {
    d: '.',
    g: ',',
    p: '+',
    m: '-',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'TF',
    np: '#,##0.###',
    cp: '¤ #,##0.00',
    ap: '¤ #,##0.00',
    cs: {
      AUD: 'AUD$',
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
      NZD: 'NZD$',
      TWD: 'NT$',
      USD: 'US$',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      TOP: 'T$',
    },
    cn: {
      AUD: 'Tola fakaʻaositelēlia',
      BRL: 'BRL',
      FJD: 'Tola fakafisi',
      NZD: 'Tola fakanuʻusila',
      PGK: 'Kina fakapapuaniukini',
      SBD: 'Tola fakaʻotusolomone',
      TOP: 'Paʻanga fakatonga',
      VUV: 'Vatu fakavanuatu',
      WST: 'Tala fakahaʻamoa',
      XPF: 'Falaniki fakapasifika',
      XXX: 'Pa’anga Ta’e’ilo',
    },
  },

  to_TO: {
    c: 'TOP',
  },
};

registerLocales(TO);

export { TO };
