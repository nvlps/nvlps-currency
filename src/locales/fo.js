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

const FO = {
  fo: {
    d: ',',
    g: '.',
    p: '+',
    m: '−',
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
      DKK: 'kr',
    },
    cn: {
      AED: 'Sameindu Emirríkini dirham',
      AFN: 'Afganistan afghani',
      ALL: 'Albania lek',
      AMD: 'Armenia dram',
      ANG: 'Niðurlonds Karibia gyllin',
      AOA: 'Angola kwanza',
      ARS: 'Argentina peso',
      AUD: 'Avstralskur dollari',
      AWG: 'Aruba florin',
      AZN: 'Aserbadjan manat',
      BAM: 'Bosnia-Hersegovina mark (kann vekslast)',
      BBD: 'Barbados dollari',
      BDT: 'Bangladesj taka',
      BGN: 'Bulgaria lev',
      BHD: 'Barein dinar',
      BIF: 'Burundi frankur',
      BMD: 'Bermuda dollari',
      BND: 'Brunei dollari',
      BOB: 'Bolivia boliviano',
      BRL: 'Brasilianskur real',
      BSD: 'Bahamaoyggjar dollari',
      BTN: 'Butan ngultrum',
      BWP: 'Botsvana pula',
      BYN: 'Hvítarussland ruble',
      BZD: 'Belis dollari',
      CAD: 'Kanada dollari',
      CDF: 'Kongo frankur',
      CHF: 'sveisiskur frankur',
      CLP: 'Kili peso',
      CNY: 'kinesiskur yuan',
      COP: 'Kolombia peso',
      CRC: 'Kosta Rika colón',
      CUC: 'Kuba peso (sum kann vekslast)',
      CUP: 'Kuba peso',
      CVE: 'Grønhøvdaoyggjar escudo',
      CZK: 'Kekkia koruna',
      DJF: 'Djibuti frankur',
      DKK: 'donsk króna',
      DOP: 'Dominika peso',
      DZD: 'Algeria dinar',
      EGP: 'Egyptaland pund',
      ERN: 'Eritrea nakfa',
      ETB: 'Etiopia birr',
      EUR: 'Evra',
      FJD: 'Fiji dollari',
      FKP: 'Falklandsoyggjar pund',
      GBP: 'bretsk pund',
      GEL: 'Georgia lari',
      GHS: 'Gana cedi',
      GIP: 'Gibraltar pund',
      GMD: 'Gambia dalasi',
      GNF: 'Guinea frankur',
      GTQ: 'Guatemala quetzal',
      GYD: 'Gujana dollari',
      HKD: 'Hong Kong dollari',
      HNL: 'Honduras lempira',
      HRK: 'Kroatia kuna',
      HTG: 'Haiti gourde',
      HUF: 'Ungarn forint',
      IDR: 'Indonesia rupiah',
      ILS: 'Ísrael new shekel',
      INR: 'indiskir rupis',
      IQD: 'Irak dinar',
      IRR: 'iranskir rials',
      ISK: 'íslendsk króna',
      JMD: 'Jamaika dollari',
      JOD: 'Jordan dinar',
      JPY: 'japanskur yen',
      KES: 'kenjanskur skillingur',
      KGS: 'Kirgisia som',
      KHR: 'Kambodja riel',
      KMF: 'Komoroyggjar frankur',
      KPW: 'Norðurkorea won',
      KRW: 'Suðurkorea won',
      KWD: 'Kuvait dinar',
      KYD: 'Caymanoyggjar dollari',
      KZT: 'Kasakstan tenge',
      LAK: 'Laos kip',
      LBP: 'Libanon pund',
      LKR: 'Sri Lanka rupi',
      LRD: 'Liberia dollari',
      LYD: 'Libya dinar',
      MAD: 'Marokko dirham',
      MDL: 'Moldova leu',
      MGA: 'Madagaskar ariary',
      MKD: 'Makedónia denar',
      MMK: 'Myanmar (Burma) kyat',
      MNT: 'Mongolia tugrik',
      MOP: 'Makao pataca',
      MRU: 'Móritania ouguiya',
      MUR: 'Móritius rupi',
      MVR: 'Maldivoyggjar rufiyaa',
      MWK: 'Malavi kwacha',
      MXN: 'Meksiko peso',
      MYR: 'Malaisia ringgit',
      MZN: 'Mosambik metical',
      NAD: 'Namibia dollari',
      NGN: 'Nigeria naira',
      NIO: 'Nikaragua córdoba',
      NOK: 'norsk króna',
      NPR: 'Nepal rupi',
      NZD: 'Nýsæland dollari',
      OMR: 'Oman rial',
      PAB: 'Panama balboa',
      PEN: 'Peru sol',
      PGK: 'Papua Nýguinea kina',
      PHP: 'Filipsoyggjar peso',
      PKR: 'Pakistan rupi',
      PLN: 'Pólland zloty',
      PYG: 'Paraguai guarani',
      QAR: 'Katar rial',
      RON: 'Rumenia leu',
      RSD: 'Serbia dinar',
      RUB: 'Russland ruble',
      RWF: 'Ruanda frankur',
      SAR: 'Saudiarabia riyal',
      SBD: 'Salomonoyggjar dollari',
      SCR: 'Seyskelloyggjar rupi',
      SDG: 'Sudan pund',
      SEK: 'svensk króna',
      SGD: 'Singapor dollari',
      SHP: 'St. Helena pund',
      SLL: 'Sierra Leona leone',
      SOS: 'Somalia skillingur',
      SRD: 'Surinam dollari',
      STN: 'Sao Tome & Prinsipi dobra',
      SYP: 'Sýria pund',
      SZL: 'Svasiland lilangeni',
      THB: 'Tailand baht',
      TJS: 'Tadsjikistan somoni',
      TMT: 'Turkmenistan manat',
      TND: 'Tunesia dinar',
      TOP: 'Tonga paʻanga',
      TRY: 'Turkaland liri',
      TTD: 'Trinidad & Tobago dollari',
      TWD: 'Taivan new dollari',
      TZS: 'Tansania skillingur',
      UAH: 'Ukraina hryvnia',
      UGX: 'Uganda skillingur',
      USD: 'US dollari',
      UYU: 'Uruguai peso',
      UZS: 'Usbekistan som',
      VND: 'Vjetnam dong',
      VUV: 'Vanuatu vatu',
      WST: 'Samoa tala',
      XAF: 'Miðafrika CFA frankur',
      XCD: 'Eystur Karibia dollari',
      XOF: 'Vesturafrika CFA frankur',
      XPF: 'CFP frankur',
      XXX: 'ókent gjaldoyra',
      YER: 'Jemen rial',
      ZAR: 'Suðurafrika rand',
      ZMW: 'Sambia kwacha',
    },
  },

  fo_FO: {},
};

(function register() {
  Object.keys(FO).forEach((k) => {
    registerLocale(k, FO[k]);
  });
})();
