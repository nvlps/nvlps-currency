/* eslint object-curly-newline: 0, wrap-iife: 0 */
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
import { registerLocale } from '../locale';

const IT = {
  it: {
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
    ap: '#,##0.00 ¤',
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
      USD: 'USD',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      THB: '฿',
    },
    cn: {
      AED: 'dirham degli Emirati Arabi Uniti',
      AFN: 'afghani',
      ALL: 'lek albanese',
      AMD: 'dram armeno',
      ANG: 'fiorino delle Antille olandesi',
      AOA: 'kwanza angolano',
      ARS: 'peso argentino',
      AUD: 'dollaro australiano',
      AWG: 'fiorino di Aruba',
      AZN: 'manat azero',
      BAM: 'marco convertibile della Bosnia-Herzegovina',
      BBD: 'dollaro di Barbados',
      BDT: 'taka bangladese',
      BGN: 'lev bulgaro',
      BHD: 'dinaro del Bahrein',
      BIF: 'franco del Burundi',
      BMD: 'dollaro delle Bermuda',
      BND: 'dollaro del Brunei',
      BOB: 'boliviano',
      BRL: 'real brasiliano',
      BSD: 'dollaro delle Bahamas',
      BTN: 'ngultrum bhutanese',
      BWP: 'pula del Botswana',
      BYN: 'rublo bielorusso',
      BZD: 'dollaro del Belize',
      CAD: 'dollaro canadese',
      CDF: 'franco congolese',
      CHF: 'franco svizzero',
      CLP: 'peso cileno',
      CNY: 'renminbi cinese',
      COP: 'peso colombiano',
      CRC: 'colón costaricano',
      CUC: 'peso cubano convertibile',
      CUP: 'peso cubano',
      CVE: 'escudo capoverdiano',
      CZK: 'corona ceca',
      DJF: 'franco di Gibuti',
      DKK: 'corona danese',
      DOP: 'peso dominicano',
      DZD: 'dinaro algerino',
      EGP: 'sterlina egiziana',
      ERN: 'nakfa eritreo',
      ETB: 'birr etiope',
      EUR: 'euro',
      FJD: 'dollaro delle Figi',
      FKP: 'sterlina delle Falkland',
      GBP: 'sterlina britannica',
      GEL: 'lari georgiano',
      GHS: 'cedi ghanese',
      GIP: 'sterlina di Gibilterra',
      GMD: 'dalasi gambiano',
      GNF: 'franco della Guinea',
      GTQ: 'quetzal guatemalteco',
      GYD: 'dollaro della Guyana',
      HKD: 'dollaro di Hong Kong',
      HNL: 'lempira honduregna',
      HRK: 'kuna croata',
      HTG: 'gourde haitiano',
      HUF: 'fiorino ungherese',
      IDR: 'rupia indonesiana',
      ILS: 'nuovo siclo israeliano',
      INR: 'rupia indiana',
      IQD: 'dinaro iracheno',
      IRR: 'rial iraniano',
      ISK: 'corona islandese',
      JMD: 'dollaro giamaicano',
      JOD: 'dinaro giordano',
      JPY: 'yen giapponese',
      KES: 'scellino keniota',
      KGS: 'som kirghiso',
      KHR: 'riel cambogiano',
      KMF: 'franco comoriano',
      KPW: 'won nordcoreano',
      KRW: 'won sudcoreano',
      KWD: 'dinaro kuwaitiano',
      KYD: 'dollaro delle Isole Cayman',
      KZT: 'tenge kazako',
      LAK: 'kip laotiano',
      LBP: 'lira libanese',
      LKR: 'rupia di Sri Lanka',
      LRD: 'dollaro liberiano',
      LSL: 'loti del Lesotho',
      LYD: 'dinaro libico',
      MAD: 'dirham marocchino',
      MDL: 'leu moldavo',
      MGA: 'ariary malgascio',
      MKD: 'denar macedone',
      MMK: 'kyat di Myanmar',
      MNT: 'tugrik mongolo',
      MOP: 'pataca di Macao',
      MRU: 'ouguiya della Mauritania',
      MUR: 'rupia mauriziana',
      MVR: 'rufiyaa delle Maldive',
      MWK: 'kwacha malawiano',
      MXN: 'peso messicano',
      MYR: 'ringgit malese',
      MZN: 'metical mozambicano',
      NAD: 'dollaro namibiano',
      NGN: 'naira nigeriana',
      NIO: 'córdoba nicaraguense',
      NOK: 'corona norvegese',
      NPR: 'rupia nepalese',
      NZD: 'dollaro neozelandese',
      OMR: 'rial omanita',
      PAB: 'balboa panamense',
      PEN: 'sol peruviano',
      PGK: 'kina papuana',
      PHP: 'peso filippino',
      PKR: 'rupia pakistana',
      PLN: 'złoty polacco',
      PYG: 'guaraní paraguayano',
      QAR: 'rial qatariano',
      RON: 'leu rumeno',
      RSD: 'dinaro serbo',
      RUB: 'rublo russo',
      RWF: 'franco ruandese',
      SAR: 'riyal saudita',
      SBD: 'dollaro delle Isole Salomone',
      SCR: 'rupia delle Seychelles',
      SDG: 'sterlina sudanese',
      SEK: 'corona svedese',
      SGD: 'dollaro di Singapore',
      SHP: 'sterlina di Sant’Elena',
      SLL: 'leone della Sierra Leone',
      SOS: 'scellino somalo',
      SRD: 'dollaro del Suriname',
      STN: 'dobra di Sao Tomé e Príncipe',
      SVC: 'colón salvadoregno',
      SYP: 'lira siriana',
      SZL: 'lilangeni dello Swaziland',
      THB: 'baht thailandese',
      TJS: 'somoni tagiko',
      TMT: 'manat turkmeno',
      TND: 'dinaro tunisino',
      TOP: 'paʻanga tongano',
      TRY: 'lira turca',
      TTD: 'dollaro di Trinidad e Tobago',
      TWD: 'nuovo dollaro taiwanese',
      TZS: 'scellino della Tanzania',
      UAH: 'grivnia ucraina',
      UGX: 'scellino ugandese',
      USD: 'dollaro statunitense',
      UYU: 'peso uruguayano',
      UZS: 'sum uzbeco',
      VND: 'dong vietnamita',
      VUV: 'vatu di Vanuatu',
      WST: 'tala samoano',
      XAF: 'franco CFA BEAC',
      XCD: 'dollaro dei Caraibi orientali',
      XDR: 'diritti speciali di incasso',
      XOF: 'franco CFA BCEAO',
      XPF: 'franco CFP',
      XXX: 'valuta sconosciuta',
      YER: 'riyal yemenita',
      ZAR: 'rand sudafricano',
      ZMW: 'kwacha dello Zambia',
    },
  },

  it_IT: {},

  it_SM: {},

  it_VA: {},
};

(function register() {
  Object.keys(IT).forEach((k) => {
    registerLocale(k, IT[k]);
  });
})();
