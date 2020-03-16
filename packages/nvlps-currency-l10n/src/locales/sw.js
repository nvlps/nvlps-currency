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

const SW = {
  sw: {
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
    cp: '¤ #,##0.00',
    ap: '¤ #,##0.00',
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
      KES: 'Ksh',
      THB: '฿',
      TZS: 'TSh',
    },
    cn: {
      AED: 'Dirham ya Falme za Kiarabu',
      AFN: 'Afghani ya Afghanistan',
      ALL: 'Lek ya Albania',
      AMD: 'Dram ya Armenia',
      ANG: 'Guilder ya Antili za Kiholanzi',
      AOA: 'Kwanza ya Angola',
      ARS: 'Peso ya Argentina',
      AUD: 'Dola ya Australia',
      AWG: 'Florin ya Aruba',
      AZN: 'Manat ya Azerbaijan',
      BAM: 'Convertible Mark ya Bosnia na Hezegovina',
      BBD: 'Dola ya Barbados',
      BDT: 'Taka ya Bangladesh',
      BGN: 'Lev ya Bulgaria',
      BHD: 'Dinar ya Bahrain',
      BIF: 'Faranga ya Burundi',
      BMD: 'Dola ya Bermuda',
      BND: 'Dola ya Brunei',
      BOB: 'Boliviano ya Bolivia',
      BRL: 'Real ya Brazil',
      BSD: 'Dola ya Bahamas',
      BTN: 'Ngultrum ya Bhutan',
      BWP: 'Pula ya Botswana',
      BYN: 'Ruble ya Belarus',
      BZD: 'Dola ya Belize',
      CAD: 'Dola ya Canada',
      CDF: 'Faranga ya Kongo',
      CHF: 'Faranga ya Uswisi',
      CLP: 'Peso ya Chile',
      CNY: 'Yuan ya Uchina',
      COP: 'Peso ya Colombia',
      CRC: 'Colon ya Costa Rica',
      CUC: 'Peso ya Cuba Inayoweza Kubadilishwa',
      CUP: 'Peso ya Cuba',
      CVE: 'Eskudo ya Cape Verde',
      CZK: 'CZK',
      DJF: 'Faranga ya Djibouti',
      DKK: 'Krone ya Denmark',
      DOP: 'Peso ya Dominica',
      DZD: 'Dinar ya Aljeria',
      EGP: 'Pauni ya Misri',
      ERN: 'Nakfa ya Eritrea',
      ETB: 'Birr ya Uhabeshi',
      EUR: 'Yuro',
      FJD: 'Dola ya Fiji',
      FKP: 'Pauni ya Visiwa vya Falkland',
      GBP: 'Pauni ya Uingereza',
      GEL: 'Lari ya Georgia',
      GHS: 'Cedi ya Ghana',
      GIP: 'Pauni ya Gibraltar',
      GMD: 'Dalasi ya Gambia',
      GNF: 'Faranga ya Guinea',
      GTQ: 'Quetzal ya Guatemala',
      GYD: 'Dola ya Guyana',
      HKD: 'Dola ya Hong Kong',
      HNL: 'Lempira ya Hondurasi',
      HRK: 'Kuna ya Croatia',
      HTG: 'Gourde ya Haiti',
      HUF: 'Forint ya Hungaria',
      IDR: 'Rupiah ya Indonesia',
      ILS: 'Shekeli Mpya ya Israel',
      INR: 'Rupia ya India',
      IQD: 'Dinar ya Iraq',
      IRR: 'Rial ya Iran',
      ISK: 'Krona ya Aisilandi',
      JMD: 'Dola ya Jamaica',
      JOD: 'Dinar ya Jordan',
      JPY: 'Yen ya Ujapani',
      KES: 'Shilingi ya Kenya',
      KGS: 'Som ya Kyrgystan',
      KHR: 'Riel ya Cambodia',
      KMF: 'Faranga ya Comoros',
      KPW: 'Won ya Korea Kaskazini',
      KRW: 'Won ya Korea Kusini',
      KWD: 'Dinar ya Kuwait',
      KYD: 'Dola ya Visiwa vya Cayman',
      KZT: 'Tenge ya Kazakhstan',
      LAK: 'Kip ya Laosi',
      LBP: 'Pauni ya Lebanon',
      LKR: 'Rupia ya Sri Lanka',
      LRD: 'Dola ya Liberia',
      LSL: 'Loti ya Lesoto',
      LYD: 'Dinari ya Libya',
      MAD: 'Dirham ya Morocco',
      MDL: 'Leu ya Moldova',
      MGA: 'Ariari ya Madagascar',
      MKD: 'Denar ya Macedonia',
      MMK: 'Kyat ya Myanmar',
      MNT: 'Tugrik ya Mongolia',
      MOP: 'Pataca ya Macau',
      MRU: 'Ouguiya ya Mauritania',
      MUR: 'Rupia ya Mauritius',
      MVR: 'Rufiyaa ya Maldives',
      MWK: 'Kwacha ya Malawi',
      MXN: 'Peso ya Mexico',
      MYR: 'Ringgit ya Malaysia',
      MZN: 'Metikali ya Msumbiji',
      NAD: 'Dola ya Namibia',
      NGN: 'Naira ya Nigeria',
      NIO: 'Cordoba ya Nicaragua',
      NOK: 'Krone ya Norway',
      NPR: 'Rupia ya Nepal',
      NZD: 'Dola ya New Zealand',
      OMR: 'Rial ya Omani',
      PAB: 'Balboa ya Panama',
      PEN: 'Sol ya Peru',
      PGK: 'Kina ya Papua New Guinea',
      PHP: 'Peso ya Ufilipino',
      PKR: 'Rupia ya Pakistan',
      PLN: 'Zloty ya Poland',
      PYG: 'Guarani ya Paraguay',
      QAR: 'Rial ya Qatar',
      RON: 'Leu ya Romania',
      RSD: 'Dinar ya Serbia',
      RUB: 'Ruble ya Urusi',
      RWF: 'Faranga ya Rwanda',
      SAR: 'Riyal ya Saudia',
      SBD: 'Dola ya Visiwa vya Solomon',
      SCR: 'Rupia ya Ushelisheli',
      SDG: 'Pauni ya Sudan',
      SEK: 'Krona ya Uswidi',
      SGD: 'Dola ya Singapore',
      SHP: 'Pauni ya St. Helena',
      SLL: 'Leone',
      SOS: 'Shilingi ya Somalia',
      SRD: 'Dola ya Suriname',
      STN: 'Dobra ya Sao Tome na Principe',
      SYP: 'Pauni ya Syria',
      SZL: 'Lilangeni',
      THB: 'Baht ya Tailandi',
      TJS: 'Somoni ya Tajikistan',
      TMT: 'Manat ya Turkmenistan',
      TND: 'Dinari ya Tunisia',
      TOP: 'Paʻanga ya Tonga',
      TRY: 'Lira ya Uturuki',
      TTD: 'Dola ya Trinidad na Tobago',
      TWD: 'Dola ya Taiwan',
      TZS: 'Shilingi ya Tanzania',
      UAH: 'Hryvnia ya Ukraine',
      UGX: 'Shilingi ya Uganda',
      USD: 'Dola ya Marekani',
      UYU: 'Peso ya Uruguay',
      UZS: 'Som ya Uzbekistan',
      VND: 'Dong ya Vietnam',
      VUV: 'Vatu ya Vanuatu',
      WST: 'Tala ya Samoa',
      XAF: 'Faranga ya Afrika ya Kati CFA',
      XCD: 'Dola ya Caribbean Mashariki',
      XOF: 'Faranga ya Afrika Magharibi CFA',
      XPF: 'Faranga ya CFP',
      XXX: 'Sarafu isiyojulikana',
      YER: 'Rial ya Yemen',
      ZAR: 'Randi ya Afrika Kusini',
      ZMW: 'Kwacha ya Zambia',
    },
  },

  sw_CD: {
    d: ',',
    g: '.',
    cs: {
      CDF: 'FC',
    },
    cn: {
      CNY: 'Yuan Renminbi ya China',
      ETB: 'Bir ya Uhabeshi',
      JPY: 'Sarafu ya Kijapani',
      MGA: 'Ariary ya Bukini',
      MRU: 'Ugwiya ya Moritania',
      SCR: 'Rupia ya Shelisheli',
      XAF: 'Faranga CFA BEAC',
      XOF: 'Faranga CFA BCEAO',
    },
    c: 'CDF',
  },

  sw_KE: {
    cn: {
      AED: 'Diramu ya Falme za Kiarabu',
      AFN: 'Afghani ya Afghanistani',
      ANG: 'Gilda ya Antili ya Uholanzi',
      ARS: 'Peso ya Ajentina',
      AZN: 'Manati ya Azabajani',
      BAM: 'Maki ya Bosnia na Hezegovina Inayoweza Kubadilishwa',
      BBD: 'Dola ya Babadosi',
      BDT: 'Taka ya Bangladeshi',
      BHD: 'Dinari ya Bahareni',
      BMD: 'Dola ya Bamuda',
      BRL: 'Reale ya Brazili',
      BSD: 'Dola ya Bahama',
      BTN: 'Ngultrumi ya Bhutani',
      BYN: 'Ruble ya Belarusi',
      CAD: 'Dola ya Kanada',
      CNY: 'Yuan ya China',
      COP: 'Peso ya Kolombia',
      CRC: 'Colon ya Kostarika',
      CUC: 'Peso ya Kuba Inayoweza Kubadilishwa',
      CUP: 'Peso ya Kuba',
      CVE: 'Eskudo ya Kepuvede',
      CZK: 'Koruna ya Cheki',
      DJF: 'Faranga ya Jibuti',
      DKK: 'Kroni ya Denmaki',
      DOP: 'Peso ya Dominika',
      DZD: 'Dinari ya Aljeria',
      GEL: 'Lari ya Jiojia',
      GHS: 'Sidi ya Ghana',
      GIP: 'Pauni ya Jibrata',
      HRK: 'Kuna ya Kroeshia',
      HTG: 'Godi ya Haiti',
      HUF: 'Forinti ya Hungaria',
      IDR: 'Rupia ya Indonesia',
      IQD: 'Dinari ya Iraki',
      IRR: 'Riali ya Irani',
      JMD: 'Dola ya Jamaika',
      JOD: 'Dinari ya Yordani',
      JPY: 'Yeni ya Japani',
      KHR: 'Rieli ya Kambodia',
      KMF: 'Faranga ya Komoro',
      KWD: 'Dinari ya Kuwait',
      KZT: 'Tenge ya Kazakistani',
      LBP: 'Pauni ya Lebanoni',
      MAD: 'Diramu ya Moroko',
      MGA: 'Ariari ya Madagaska',
      MKD: 'Dinari ya Masedonia',
      MMK: 'Kiati ya Myama',
      MOP: 'Pataka ya Macau',
      MVR: 'Rufiyaa ya Maldivi',
      MXN: 'Peso ya Meksiko',
      MYR: 'Ringgiti ya Malesia',
      NGN: 'Naira ya Naijeria',
      NIO: 'Cordoba ya Nikaragwa',
      NOK: 'Kroni ya Norwe',
      NPR: 'Rupia ya Nepali',
      NZD: 'Dola ya Nyuzilandi',
      OMR: 'Riali ya Omani',
      PKR: 'Rupia ya Pakistani',
      PLN: 'Zloti ya Polandi',
      PYG: 'Guarani ya Paragwai',
      QAR: 'Riali ya Katari',
      RSD: 'Dinari ya Serbia',
      SAR: 'Riyali ya Saudia',
      SBD: 'Dola ya Visiwa vya Solomoni',
      SDG: 'Pauni ya Sudani',
      SGD: 'Dola ya Singapoo',
      SLL: 'Leoni ya Siera Leoni',
      SZL: 'Lilangeni ya Uswazi',
      THB: 'Bahti ya Tailandi',
      TJS: 'Somoni ya Tajikistani',
      TMT: 'Manati ya Turkmenistani',
      TTD: 'Dola ya Trinidadi na Tobago',
      TWD: 'Dola ya Taiwani',
      UAH: 'Hryvnia ya Ukraini',
      UYU: 'Peso ya Urugwai',
      UZS: 'Som ya Uzbekistani',
      VND: 'Dong ya Vietnamu',
      XAF: 'Faranga ya CFA ya Afrika ya Kati',
      XCD: 'Dola ya Karibi Mashariki',
      XOF: 'Faranga ya CFA ya Afrika Magharibi',
      XXX: 'Sarafu Isiyojulikana',
      YER: 'Riali ya Yemeni',
    },
    c: 'KES',
  },

  sw_TZ: {
    c: 'TZS',
  },

  sw_UG: {
    cs: {
      UGX: 'USh',
    },
    c: 'UGX',
  },
};

registerLocales(SW);

export default SW;