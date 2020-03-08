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
  registerLocale('ms', {
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
      CAD: 'CAD',
      CNY: 'CN¥',
      EUR: '€',
      GBP: '£',
      HKD: 'HK$',
      ILS: '₪',
      INR: '₹',
      JPY: 'JP¥',
      KRW: '₩',
      MXN: 'MXN',
      NZD: 'NZ$',
      TWD: 'NT$',
      USD: 'USD',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      MYR: 'RM'
    },
    cn: {
      AED: 'Dirham Emiriah Arab Bersatu',
      AFN: 'Afghani Afghanistan',
      ALL: 'Lek Albania',
      AMD: 'Dram Armenia',
      ANG: 'Guilder Antillen Belanda',
      AOA: 'Kwanza Angola',
      ARS: 'Peso Argentina',
      AUD: 'Dolar Australia',
      AWG: 'Florin Aruba',
      AZN: 'Manat Azerbaijan',
      BAM: 'Mark Boleh Tukar Bosnia-Herzegovina',
      BBD: 'Dolar Barbados',
      BDT: 'Taka Bangladesh',
      BGN: 'Lev Bulgaria',
      BHD: 'Dinar Bahrain',
      BIF: 'Franc Burundi',
      BMD: 'Dolar Bermuda',
      BND: 'Dolar Brunei',
      BOB: 'Boliviano Bolivia',
      BRL: 'Real Brazil',
      BSD: 'Dolar Bahamas',
      BTN: 'Ngultrum Bhutan',
      BWP: 'Pula Botswana',
      BYN: 'Rubel Belarus baharu',
      BZD: 'Dolar Belize',
      CAD: 'Dolar Kanada',
      CDF: 'Franc Congo',
      CHF: 'Franc Switzerland',
      CLP: 'Peso Chile',
      CNY: 'Yuan Cina',
      COP: 'Peso Colombia',
      CRC: 'Colon Costa Rica',
      CUC: 'Peso Boleh Tukar Cuba',
      CUP: 'Peso Cuba',
      CVE: 'Escudo Tanjung Verde',
      CZK: 'Koruna Republik Czech',
      DJF: 'Franc Djibouti',
      DKK: 'Krone Denmark',
      DOP: 'Peso Dominican',
      DZD: 'Dinar Algeria',
      EGP: 'Paun Mesir',
      ERN: 'ERN',
      ETB: 'Birr Ethiopia',
      EUR: 'Euro',
      FJD: 'Dolar Fiji',
      FKP: 'Paun Kepulauan Falkland',
      GBP: 'Paun British',
      GEL: 'Lari Georgia',
      GHS: 'Cedi Ghana',
      GIP: 'Paun Gibraltar',
      GMD: 'Dalasi Gambia',
      GNF: 'Franc Guinea',
      GTQ: 'Quetzal Guatemala',
      GYD: 'Dolar Guyana',
      HKD: 'Dolar Hong Kong',
      HNL: 'Lempira Honduras',
      HRK: 'Kuna Croatia',
      HTG: 'Gourde Haiti',
      HUF: 'Forint Hungary',
      IDR: 'Rupiah Indonesia',
      ILS: 'Syekel Baharu Israel',
      INR: 'Rupee India',
      IQD: 'Dinar Iraq',
      IRR: 'Rial Iran',
      ISK: 'Krona Iceland',
      JMD: 'Dolar Jamaica',
      JOD: 'Dinar Jordan',
      JPY: 'Yen Jepun',
      KES: 'Syiling Kenya',
      KGS: 'Som Kyrgystani',
      KHR: 'Riel Kemboja',
      KMF: 'Franc Comoria',
      KPW: 'Won Korea Utara',
      KRW: 'Won Korea Selatan',
      KWD: 'Dinar Kuwait',
      KYD: 'Dolar Kepulauan Cayman',
      KZT: 'Tenge Kazakhstan',
      LAK: 'Kip Laos',
      LBP: 'Paun Lubnan',
      LKR: 'Rupee Sri Lanka',
      LRD: 'Dolar Liberia',
      LSL: 'Loti Lesotho',
      LYD: 'Dinar Libya',
      MAD: 'Dirham Maghribi',
      MDL: 'Leu Moldova',
      MGA: 'Ariary Malagasy',
      MKD: 'Denar Macedonia',
      MMK: 'Kyat Myanma',
      MNT: 'Tugrik Mongolia',
      MOP: 'Pataca Macau',
      MRU: 'Ouguiya Mauritania',
      MUR: 'Rupee Mauritius',
      MVR: 'Rufiyaa Maldives',
      MWK: 'Kwacha Malawi',
      MXN: 'Peso Mexico',
      MYR: 'Ringgit Malaysia',
      MZN: 'Metikal Mozambique',
      NAD: 'Dolar Namibia',
      NGN: 'Naira Nigeria',
      NIO: 'Cordoba Nicaragua',
      NOK: 'Krone Norway',
      NPR: 'Rupee Nepal',
      NZD: 'Dolar New Zealand',
      OMR: 'Rial Oman',
      PAB: 'Balboa Panama',
      PEN: 'Sol Peru',
      PGK: 'Kina Papua New Guinea',
      PHP: 'Peso Filipina',
      PKR: 'Rupee Pakistan',
      PLN: 'Zloty Poland',
      PYG: 'Guarani Paraguay',
      QAR: 'Rial Qatar',
      RON: 'Leu Romania',
      RSD: 'Dinar Serbia',
      RUB: 'Rubel Rusia',
      RWF: 'Franc Rwanda',
      SAR: 'Riyal Saudi',
      SBD: 'Dolar Kepulauan Solomon',
      SCR: 'Rupee Seychelles',
      SDG: 'Paun Sudan',
      SEK: 'Krona Sweden',
      SGD: 'Dolar Singapura',
      SHP: 'Paun Saint Helena',
      SLL: 'Leone Sierra Leone',
      SOS: 'Syiling Somali',
      SRD: 'Dolar Surinam',
      STN: 'Dobra Sao Tome dan Principe',
      SYP: 'Paun Syria',
      SZL: 'Lilangeni Swazi',
      THB: 'Baht Thai',
      TJS: 'Somoni Tajikistan',
      TMT: 'Manat Turkmenistan',
      TND: 'Dinar Tunisia',
      TOP: 'Pa’anga Tonga',
      TRY: 'Lira Turki',
      TTD: 'Dolar Trinidad dan Tobago',
      TWD: 'Dolar Taiwan Baru',
      TZS: 'Syiling Tanzania',
      UAH: 'Hryvnia Ukraine',
      UGX: 'Syiling Uganda',
      USD: 'Dolar AS',
      UYU: 'Peso Uruguay',
      UZS: 'Som Uzbekistan',
      VND: 'Dong Vietnam',
      VUV: 'Vatu Vanuatu',
      WST: 'Tala Samoa',
      XAF: 'Franc CFA BEAC',
      XCD: 'Dolar Caribbean Timur',
      XOF: 'Franc CFA BCEAO',
      XPF: 'Franc CFP',
      XXX: 'Mata Wang Tidak Diketahui',
      YER: 'Rial Yaman',
      ZAR: 'Rand Afrika Selatan',
      ZMW: 'Kwacha Zambia'
    }
  });

  registerLocale('ms_BN', {
    d: ',',
    g: '.',
    cp: '¤ #,##0.00',
    cs: {
      BND: '$'
    }
  });

  registerLocale('ms_MY', {});
})();
