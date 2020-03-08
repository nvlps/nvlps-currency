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
  registerLocale('bm', {
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
    ap: '¤#,##0.00;(¤#,##0.00)',
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
      XXX: '¤'
    },
    cn: {
      AED: 'arabu mara kafoli Diram',
      AOA: 'angola Kwanza',
      AUD: 'ositirali Dolar',
      BHD: 'bareyini Dinar',
      BIF: 'burundi Fraŋ',
      BWP: 'bɔtisiwana Pula',
      CAD: 'kanada Dolar',
      CDF: 'kongole Fraŋ',
      CHF: 'suwisi Fraŋ',
      CNY: 'siniwa Yuwan',
      CVE: 'capivɛrdi Esekudo',
      DJF: 'jibuti Fraŋ',
      DZD: 'alizeri Dinar',
      EGP: 'eziputi Livri',
      ERN: 'eritere Nafika',
      ETB: 'etiopi Bir',
      EUR: 'ero',
      GBP: 'angilɛ Livri',
      GMD: 'gambi Dalasi',
      INR: 'Ɛndu Rupi',
      JPY: 'zapɔne Yɛn',
      KES: 'keniya Siling',
      KMF: 'komɔri Fraŋ',
      LRD: 'liberiya Dolar',
      LSL: 'lesoto Loti',
      LYD: 'libi Dinar',
      MAD: 'marɔku Diram',
      MGA: 'madagasikari Fraŋ',
      MRU: 'mɔritani Uguwiya',
      MUR: 'morisi Rupi',
      MWK: 'malawi Kwaca',
      NAD: 'namibi Dolar',
      NGN: 'nizeriya Nɛra',
      RWF: 'ruwanda Fraŋ',
      SAR: 'sawudiya Riyal',
      SCR: 'sesɛli Rupi',
      SDG: 'sudani Dinar',
      SHP: 'Ɛlɛni-Senu Livri',
      SLL: 'siyeralewɔni Lewɔni',
      SOS: 'somali Siling',
      STN: 'sawotome Dobra',
      SZL: 'swazilandi Lilangeni',
      TND: 'tunizi Dinar',
      TZS: 'tanzani Siling',
      UGX: 'uganda Siling',
      USD: 'ameriki Dolar',
      XAF: 'sefa Fraŋ (BEAC)',
      XOF: 'sefa Fraŋ (BCEAO)',
      ZAR: 'sudafriki Randi',
      ZMW: 'zambi Kwaca'
    }
  });

  registerLocale('bm_ML', {});
})();
