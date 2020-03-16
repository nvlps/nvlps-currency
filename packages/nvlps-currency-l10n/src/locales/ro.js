/* eslint object-curly-newline: 0 */
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

import { registerLocales } from 'nvlps-currency';

const RO = {
  ro: {
    d: ',',
    g: '.',
    p: '+',
    m: '-',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'NaN',
    np: '#,##0.###',
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
    cs: {
      AUD: 'AUD',
      BRL: 'BRL',
      CAD: 'CAD',
      CNY: 'CNY',
      EUR: 'EUR',
      GBP: 'GBP',
      HKD: 'HKD',
      ILS: 'ILS',
      INR: 'INR',
      JPY: 'JPY',
      KRW: 'KRW',
      MXN: 'MXN',
      NZD: 'NZD',
      TWD: 'TWD',
      USD: 'USD',
      VND: 'VND',
      XAF: 'FCFA',
      XCD: 'XCD',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
    },
    cn: {
      AED: 'dirham din Emiratele Arabe Unite',
      AFN: 'afgani afgan',
      ALL: 'leka albaneză',
      AMD: 'dram armenesc',
      ANG: 'gulden din Antilele Olandeze',
      AOA: 'kwanza angoleză',
      ARS: 'peso argentinian',
      AUD: 'dolar australian',
      AWG: 'florin aruban',
      AZN: 'manat azer',
      BAM: 'marcă convertibilă din Bosnia și Herțegovina',
      BBD: 'dolar din Barbados',
      BDT: 'taka din Bangladesh',
      BGN: 'leva bulgărească',
      BHD: 'dinar din Bahrain',
      BIF: 'franc burundez',
      BMD: 'dolar din Bermuda',
      BND: 'dolar din Brunei',
      BOB: 'boliviano bolivian',
      BRL: 'real brazilian',
      BSD: 'dolar din Bahamas',
      BTN: 'ngultrum din Bhutan',
      BWP: 'pula Botswana',
      BYN: 'rublă belarusă',
      BZD: 'dolar din Belize',
      CAD: 'dolar canadian',
      CDF: 'franc congolez',
      CHF: 'franc elvețian',
      CLP: 'peso chilian',
      CNY: 'yuan chinezesc',
      COP: 'peso columbian',
      CRC: 'colon costarican',
      CUC: 'peso cubanez convertibil',
      CUP: 'peso cubanez',
      CVE: 'escudo din Capul Verde',
      CZK: 'coroană cehă',
      DJF: 'franc djiboutian',
      DKK: 'coroană daneză',
      DOP: 'peso dominican',
      DZD: 'dinar algerian',
      EGP: 'liră egipteană',
      ERN: 'nakfa eritreeană',
      ETB: 'birr etiopian',
      EUR: 'euro',
      FJD: 'dolar fijian',
      FKP: 'liră din Insulele Falkland',
      GBP: 'liră sterlină',
      GEL: 'lari georgian',
      GHS: 'cedi ghanez',
      GIP: 'liră din Gibraltar',
      GMD: 'dalasi din Gambia',
      GNF: 'franc guineean',
      GTQ: 'quetzal guatemalez',
      GYD: 'dolar guyanez',
      HKD: 'dolar din Hong Kong',
      HNL: 'lempira honduriană',
      HRK: 'kuna croată',
      HTG: 'gourde din Haiti',
      HUF: 'forint maghiar',
      IDR: 'rupie indoneziană',
      ILS: 'șechel israelian nou',
      INR: 'rupie indiană',
      IQD: 'dinar irakian',
      IRR: 'rial iranian',
      ISK: 'coroană islandeză',
      JMD: 'dolar jamaican',
      JOD: 'dinar iordanian',
      JPY: 'yen japonez',
      KES: 'șiling kenyan',
      KGS: 'som kârgâz',
      KHR: 'riel cambodgian',
      KMF: 'franc comorian',
      KPW: 'won nord-coreean',
      KRW: 'won sud-coreean',
      KWD: 'dinar kuweitian',
      KYD: 'dolar din Insulele Cayman',
      KZT: 'tenge kazahă',
      LAK: 'kip laoțian',
      LBP: 'liră libaneză',
      LKR: 'rupie srilankeză',
      LRD: 'dolar liberian',
      LSL: 'loti lesothian',
      LYD: 'dinar libian',
      MAD: 'dirham marocan',
      MDL: 'leu moldovenesc',
      MGA: 'ariary malgaș',
      MKD: 'dinar macedonean',
      MMK: 'kyat din Myanmar',
      MNT: 'tugrik mongol',
      MOP: 'pataca din Macao',
      MRU: 'ouguiya mauritană',
      MUR: 'rupie mauritiană',
      MVR: 'rufiyaa maldiviană',
      MWK: 'kwacha malawiană',
      MXN: 'peso mexican',
      MYR: 'ringgit malaiezian',
      MZN: 'metical mozambican',
      NAD: 'dolar namibian',
      NGN: 'naira nigeriană',
      NIO: 'cordoba nicaraguană',
      NOK: 'coroană norvegiană',
      NPR: 'rupie nepaleză',
      NZD: 'dolar neozeelandez',
      OMR: 'rial omanez',
      PAB: 'balboa panameză',
      PEN: 'sol peruvian',
      PGK: 'kina din Papua-Noua Guinee',
      PHP: 'peso filipinez',
      PKR: 'rupie pakistaneză',
      PLN: 'zlot polonez',
      PYG: 'guarani paraguayan',
      QAR: 'rial qatarian',
      RON: 'leu românesc',
      RSD: 'dinar sârbesc',
      RUB: 'rublă rusească',
      RWF: 'franc rwandez',
      SAR: 'rial saudit',
      SBD: 'dolar din Insulele Solomon',
      SCR: 'rupie din Seychelles',
      SDG: 'liră sudaneză',
      SEK: 'coroană suedeză',
      SGD: 'dolar singaporez',
      SHP: 'liră Insula Sf. Elena',
      SLL: 'leone din Sierra Leone',
      SOS: 'șiling somalez',
      SRD: 'dolar surinamez',
      STN: 'dobra Sao Tome și Principe',
      SVC: 'colon El Salvador',
      SYP: 'liră siriană',
      SZL: 'lilangeni din Swaziland',
      THB: 'baht thailandez',
      TJS: 'somoni tadjic',
      TMT: 'manat turkmen',
      TND: 'dinar tunisian',
      TOP: 'pa’anga tongană',
      TRY: 'liră turcească',
      TTD: 'dolar din Trinidad-Tobago',
      TWD: 'dolar nou din Taiwan',
      TZS: 'șiling tanzanian',
      UAH: 'hryvna ucraineană',
      UGX: 'șiling ugandez',
      USD: 'dolar american',
      UYU: 'peso uruguayan',
      UZS: 'sum Uzbekistan',
      VND: 'dong vietnamez',
      VUV: 'vatu din Vanuatu',
      WST: 'tala samoană',
      XAF: 'franc CFA BEAC',
      XCD: 'dolar din Caraibele de Est',
      XDR: 'drepturi speciale de tragere',
      XOF: 'franc CFA BCEAO',
      XPF: 'franc CFP',
      XXX: 'monedă necunoscută',
      YER: 'rial yemenit',
      ZAR: 'rand sud-african',
      ZMW: 'kwacha zambian',
    },
    c: 'RON',
  },

  ro_MD: {
    cs: {
      MDL: 'L',
    },
    c: 'MDL',
  },

  ro_RO: {},
};

registerLocales(RO);

export { RO };
