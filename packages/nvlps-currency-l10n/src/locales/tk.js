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

const TK = {
  tk: {
    d: ',',
    g: ' ',
    p: '+',
    m: '-',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'san däl',
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
      USD: 'US$',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
    },
    cn: {
      AED: 'BAE dirhemi',
      AFN: 'Owgan afganisi',
      ALL: 'Alban leki',
      AMD: 'Ermeni dramy',
      ANG: 'Niderland antil guldeni',
      AOA: 'Angola kwanzasy',
      ARS: 'Argentin pesosy',
      AUD: 'Awstraliýa dollary',
      AWG: 'Aruba florini',
      AZN: 'Azerbaýjan manady',
      BAM: 'Konwertirlenýän Bosniýa we Gersegowina markasy',
      BBD: 'Barbados dollary',
      BDT: 'Bangladeş takasy',
      BGN: 'Bolgar lewi',
      BHD: 'Bahreýn dinary',
      BIF: 'Burundi franky',
      BMD: 'Bermuda dollary',
      BND: 'Bruneý dollary',
      BOB: 'Boliwiýa boliwianosy',
      BRL: 'Brazil realy',
      BSD: 'Bagama dollary',
      BTN: 'Butan ngultrumy',
      BWP: 'Botswana pulasy',
      BYN: 'Belarus rubly',
      BZD: 'Beliz dollary',
      CAD: 'Kanada dollary',
      CDF: 'Kongo franky',
      CHF: 'Şweýsar franky',
      CLP: 'Çili pesosy',
      CNY: 'Hytaý ýuany',
      COP: 'Kolumbiýa pesosy',
      CRC: 'Kosta-Rika kolony',
      CUC: 'Konwertirlenýän kuba pesosy',
      CUP: 'Kuba pesosy',
      CVE: 'Kabo-Werde eskudosy',
      CZK: 'Çeh kronasy',
      DJF: 'Jibuti franky',
      DKK: 'Daniýa kronasy',
      DOP: 'Dominikan pesosy',
      DZD: 'Alžir dinary',
      EGP: 'Müsür funty',
      ERN: 'Eritreýa nakfasy',
      ETB: 'Efiopiýa byry',
      EUR: 'Ýewro',
      FJD: 'Fiji dollary',
      FKP: 'Folklend adalarynyň funty',
      GBP: 'Britan funt sterlingi',
      GEL: 'Gruzin larisi',
      GHS: 'Gano sedisi',
      GIP: 'Gibraltar funty',
      GMD: 'Gambiýa dalasisi',
      GNF: 'Gwineý franky',
      GTQ: 'Gwatemala ketsaly',
      GYD: 'Gaýana dollary',
      HKD: 'Gonkong dollary',
      HNL: 'Gonduras lempirasy',
      HRK: 'Horwat kunasy',
      HTG: 'Gaiti gurdy',
      HUF: 'Wenger forinti',
      IDR: 'Indoneziýa rupiýasy',
      ILS: 'Täze Ysraýyl şekeli',
      INR: 'Hindi rupiýasy',
      IQD: 'Yrak dinary',
      IRR: 'Eýran rialy',
      ISK: 'Islandiýa kronasy',
      JMD: 'Ýamaýka dollary',
      JOD: 'Iordan dinary',
      JPY: 'Ýapon ýeni',
      KES: 'Keniýa şillingi',
      KGS: 'Gyrgyz somy',
      KHR: 'Kamboja riýeli',
      KMF: 'Komor adalarynyň franky',
      KPW: 'Demirgazyk Koreý wony',
      KRW: 'Günorta Koreý wony',
      KWD: 'Kuweýt dinary',
      KYD: 'Kaýman adalarynyň dollary',
      KZT: 'Gazak teňňesi',
      LAK: 'Laos kipi',
      LBP: 'Liwan funty',
      LKR: 'Şri-Lanka rupiýasy',
      LRD: 'Liberiýa dollary',
      LYD: 'Liwiýa dinary',
      MAD: 'Marokko dirhamy',
      MDL: 'Moldaw leýi',
      MGA: 'Malagasiý ariarisi',
      MKD: 'Makedon dinary',
      MMK: 'Mýanma kýaty',
      MNT: 'Mongol tugrigi',
      MOP: 'Makao patakasy',
      MRU: 'Mawritan ugiýasy',
      MUR: 'Mawrikiý rupiýasy',
      MVR: 'Maldiw rufiýasy',
      MWK: 'Malawi kwaçasy',
      MXN: 'Meksikan pesosy',
      MYR: 'Malaýziýa ringgiti',
      MZN: 'Mozambik metikaly',
      NAD: 'Namibiýa dollary',
      NGN: 'Nigeriýa naýrasy',
      NIO: 'Nikaragua kordobasy',
      NOK: 'Norwegiýa kronasy',
      NPR: 'Nepal rupiýasy',
      NZD: 'Täze Zelandiýa dollary',
      OMR: 'Oman rialy',
      PAB: 'Panama balboasy',
      PEN: 'Peru soly',
      PGK: 'Papua - Täze Gwineýa kinasy',
      PHP: 'Filippin pesosy',
      PKR: 'Päkistan rupiýasy',
      PLN: 'Polýak zlotysy',
      PYG: 'Paragwaý guaranisi',
      QAR: 'Katar rialy',
      RON: 'Rumyn leýi',
      RSD: 'Serb dinary',
      RUB: 'Rus rubly',
      RWF: 'Ruanda franky',
      SAR: 'Saud rialy',
      SBD: 'Solomon adalarynyň dollary',
      SCR: 'Seýşel rupiýasy',
      SDG: 'Sudan funty',
      SEK: 'Şwed kronasy',
      SGD: 'Singapur dollary',
      SHP: 'Keramatly Ýelena adasynyň funty',
      SLL: 'Sýerra-Leone leony',
      SOS: 'Somali şillingi',
      SRD: 'Surinam dollary',
      STN: 'San-Tome we Prinsipi dobrasy',
      SYP: 'Siriýa funty',
      SZL: 'Swazi lilangeni',
      THB: 'Taýland baty',
      TJS: 'Täjik somonisi',
      TMT: 'Türkmen manady',
      TND: 'Tunis dinary',
      TOP: 'Tonga paangasy',
      TRY: 'Türk lirasy',
      TTD: 'Trininad we Tobago dollary',
      TWD: 'Täze Taýwan dollary',
      TZS: 'Tanzaniýa şillingi',
      UAH: 'Ukrain griwnasy',
      UGX: 'Uganda şillingi',
      USD: 'ABŞ dollary',
      UYU: 'Urugwaý pesosy',
      UZS: 'Özbek somy',
      VND: 'Wýetnam dongy',
      VUV: 'Wanuatu watusy',
      WST: 'Samoa talasy',
      XAF: 'KFA BEAC franky',
      XCD: 'Gündogar karib dollary',
      XOF: 'KFA BCEAO franky',
      XPF: 'Fransuz ýuwaş umman franky',
      XXX: 'Näbelli pul birligi',
      YER: 'Ýemen rialy',
      ZAR: 'Günorta Afrika rendi',
      ZMW: 'Zambiýa kwaçasy',
    },
  },

  tk_TM: {
    c: 'TMT',
  },
};

registerLocales(TK);

export { TK };
