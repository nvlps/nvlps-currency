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
  registerLocale('ak', {
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
      GHS: 'GH₵'
    },
    cn: {
      AED: 'Ɛmirete Arab Nkabɔmu Deram',
      AOA: 'Angola Kwanza',
      AUD: 'Ɔstrelia Dɔla',
      BHD: 'Baren Dina',
      BIF: 'Burundi Frank',
      BWP: 'Botswana Pula',
      CAD: 'Kanada Dɔla',
      CDF: 'Kongo Frank',
      CNY: 'Yuan',
      CVE: 'Ɛskudo',
      DJF: 'Gyebuti Frank',
      DZD: 'Ɔlgyeria Dina',
      EGP: 'Egypt Pɔn',
      ERN: 'Ɛretereya Nakfa',
      ETB: 'Itiopia Bir',
      EUR: 'Iro',
      GBP: 'Breten Pɔn',
      GHS: 'Ghana Sidi',
      GMD: 'Gambia Dalasi',
      INR: 'India Rupi',
      JPY: 'Gyapan Yɛn',
      KES: 'Kenya Hyelen',
      KMF: 'Komoro Frank',
      LRD: 'Laeberia Dɔla',
      LSL: 'Lesoto Loti',
      LYD: 'Libya Dina',
      MAD: 'Moroko Diram',
      MGA: 'Madagasi Frank',
      MRU: 'Mɔretenia Ouguiya',
      MUR: 'Mɔrehyeɔs Rupi',
      MWK: 'Malawi Kwacha',
      NAD: 'Namibia Dɔla',
      NGN: 'Naegyeria Naira',
      RWF: 'Rewanda Frank',
      SAR: 'Saudi Riyal',
      SCR: 'Seyhyɛls Rupi',
      SDG: 'Sudan Dina',
      SHP: 'St Helena Pɔn',
      SLL: 'Leone',
      SOS: 'Somailia Hyelen',
      STN: 'Sao Tome ne Principe Dobra',
      SZL: 'Lilangeni',
      TND: 'Tunisia Dina',
      TZS: 'Tanzania Hyelen',
      UGX: 'Uganda Hyelen',
      USD: 'Amɛrika Dɔla',
      XAF: 'Sefa',
      ZAR: 'Afrika Anaafo Rand',
      ZMW: 'Zambia Kwacha'
    }
  });

  registerLocale('ak_GH', {});
})();
