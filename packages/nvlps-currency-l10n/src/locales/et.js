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

import { registerLocales } from 'nvlps-currency-core';

const ET = {
  et: {
    d: ',',
    g: ' ',
    p: '+',
    m: '−',
    pc: '%',
    pm: '‰',
    e: '×10^',
    x: '×',
    inf: '∞',
    nan: 'NaN',
    np: '#,##0.###',
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
    cs: {
      AUD: 'AU$',
      BRL: 'R$',
      CAD: 'CA$',
      CNY: 'CN¥',
      EUR: '€',
      GBP: '£',
      HKD: 'HK$',
      ILS: '₪',
      INR: '₹',
      JPY: '¥',
      KRW: '₩',
      MXN: 'MX$',
      NZD: 'NZ$',
      TWD: 'NT$',
      USD: '$',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      THB: '฿',
    },
    cn: {
      AED: 'Araabia Ühendemiraatide dirhem',
      AFN: 'Afganistani afgaani',
      ALL: 'Albaania lekk',
      AMD: 'Armeenia dramm',
      ANG: 'Hollandi Antillide kulden',
      AOA: 'Angola kvanza',
      ARS: 'Argentina peeso',
      AUD: 'Austraalia dollar',
      AWG: 'Aruba kulden',
      AZN: 'Aserbaidžaani manat',
      BAM: 'Bosnia ja Hertsegoviina konverteeritav mark',
      BBD: 'Barbadose dollar',
      BDT: 'Bangladeshi taka',
      BGN: 'Bulgaaria leev',
      BHD: 'Bahreini dinaar',
      BIF: 'Burundi frank',
      BMD: 'Bermuda dollar',
      BND: 'Brunei dollar',
      BOB: 'Boliivia boliviaano',
      BRL: 'Brasiilia reaal',
      BSD: 'Bahama dollar',
      BTN: 'Bhutani ngultrum',
      BWP: 'Botswana pula',
      BYN: 'Valgevene rubla',
      BZD: 'Belize’i dollar',
      CAD: 'Kanada dollar',
      CDF: 'Kongo frank',
      CHF: 'Šveitsi frank',
      CLP: 'Tšiili peeso',
      CNY: 'Hiina jüaan',
      COP: 'Colombia peeso',
      CRC: 'Costa Rica koloon',
      CUC: 'Kuuba konverteeritav peeso',
      CUP: 'Kuuba peeso',
      CVE: 'Cabo Verde eskuudo',
      CZK: 'Tšehhi kroon',
      DJF: 'Djibouti frank',
      DKK: 'Taani kroon',
      DOP: 'Dominikaani peeso',
      DZD: 'Alžeeria dinaar',
      EGP: 'Egiptuse nael',
      ERN: 'Eritrea nakfa',
      ETB: 'Etioopia birr',
      EUR: 'euro',
      FJD: 'Fidži dollar',
      FKP: 'Falklandi saarte nael',
      GBP: 'Suurbritannia naelsterling',
      GEL: 'Gruusia lari',
      GHS: 'Ghana sedi',
      GIP: 'Gibraltari nael',
      GMD: 'Gambia dalasi',
      GNF: 'Guinea frank',
      GTQ: 'Guatemala ketsaal',
      GYD: 'Guyana dollar',
      HKD: 'Hongkongi dollar',
      HNL: 'Hondurase lempiira',
      HRK: 'Horvaatia kuna',
      HTG: 'Haiti gurd',
      HUF: 'Ungari forint',
      IDR: 'Indoneesia ruupia',
      ILS: 'Iisraeli uus seekel',
      INR: 'India ruupia',
      IQD: 'Iraagi dinaar',
      IRR: 'Iraani riaal',
      ISK: 'Islandi kroon',
      JMD: 'Jamaica dollar',
      JOD: 'Jordaania dinaar',
      JPY: 'Jaapani jeen',
      KES: 'Keenia šilling',
      KGS: 'Kõrgõzstani somm',
      KHR: 'Kambodža riaal',
      KMF: 'Komoori frank',
      KPW: 'Põhja-Korea vonn',
      KRW: 'Lõuna-Korea vonn',
      KWD: 'Kuveidi dinaar',
      KYD: 'Kaimanisaarte dollar',
      KZT: 'Kasahstani tenge',
      LAK: 'Laose kiip',
      LBP: 'Liibanoni nael',
      LKR: 'Sri Lanka ruupia',
      LRD: 'Libeeria dollar',
      LSL: 'Lesotho loti',
      LYD: 'Liibüa dinaar',
      MAD: 'Maroko dirhem',
      MDL: 'Moldova leu',
      MGA: 'Madagaskari ariari',
      MKD: 'Makedoonia dinaar',
      MMK: 'Myanmari kjatt',
      MNT: 'Mongoolia tugrik',
      MOP: 'Macau pataaka',
      MRU: 'Mauritaania ugia',
      MUR: 'Mauritiuse ruupia',
      MVR: 'Maldiivi ruupia',
      MWK: 'Malawi kvatša',
      MXN: 'Mehhiko peeso',
      MYR: 'Malaisia ringgit',
      MZN: 'Mosambiigi metikal',
      NAD: 'Namiibia dollar',
      NGN: 'Nigeeria naira',
      NIO: 'Nicaragua kordoba',
      NOK: 'Norra kroon',
      NPR: 'Nepali ruupia',
      NZD: 'Uus-Meremaa dollar',
      OMR: 'Omaani riaal',
      PAB: 'Panama balboa',
      PEN: 'Peruu soll',
      PGK: 'Paapua Uus-Guinea kina',
      PHP: 'Filipiini peeso',
      PKR: 'Pakistani ruupia',
      PLN: 'Poola zlott',
      PYG: 'Paraguay guaranii',
      QAR: 'Katari riaal',
      RON: 'Rumeenia leu',
      RSD: 'Serbia dinaar',
      RUB: 'Venemaa rubla',
      RWF: 'Rwanda frank',
      SAR: 'Saudi Araabia riaal',
      SBD: 'Saalomoni Saarte dollar',
      SCR: 'Seišelli ruupia',
      SDG: 'Sudaani nael',
      SEK: 'Rootsi kroon',
      SGD: 'Singapuri dollar',
      SHP: 'Saint Helena nael',
      SLL: 'Sierra Leone leoone',
      SOS: 'Somaalia šilling',
      SRD: 'Suriname dollar',
      STN: 'São Tomé ja Príncipe dobra',
      SVC: 'El Salvadori koloon',
      SYP: 'Süüria nael',
      SZL: 'Svaasimaa lilangeni',
      THB: 'Tai baat',
      TJS: 'Tadžikistani somoni',
      TMT: 'Türkmenistani manat',
      TND: 'Tuneesia dinaar',
      TOP: 'Tonga pa’anga',
      TRY: 'Türgi liir',
      TTD: 'Trinidadi ja Tobago dollar',
      TWD: 'uus Taiwani dollar',
      TZS: 'Tansaania šilling',
      UAH: 'Ukraina grivna',
      UGX: 'Uganda šilling',
      USD: 'USA dollar',
      UYU: 'Uruguay peeso',
      UZS: 'Usbekistani somm',
      VND: 'Vietnami dong',
      VUV: 'Vanuatu vatu',
      WST: 'Samoa taala',
      XAF: 'Kesk-Aafrika CFA frank',
      XCD: 'Ida-Kariibi dollar',
      XDR: 'Rahvusvahelise Valuutafondi arvestusühik',
      XOF: 'Lääne-Aafrika CFA frank',
      XPF: 'CFP frank',
      XXX: 'määramata rahaühik',
      YER: 'Jeemeni riaal',
      ZAR: 'Lõuna-Aafrika rand',
      ZMW: 'Sambia kvatša',
    },
    c: 'EUR',
  },

  et_EE: {},
};

registerLocales(ET);

export default ET;