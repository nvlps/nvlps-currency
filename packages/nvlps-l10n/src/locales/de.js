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

const DE = {
  de: {
    d: ',',
    g: '.',
    p: '+',
    m: '-',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '·',
    inf: '∞',
    nan: 'NaN',
    np: '#,##0.###',
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤',
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
      AED: 'VAE-Dirham',
      AFN: 'Afghanischer Afghani',
      ALL: 'Albanischer Lek',
      AMD: 'Armenischer Dram',
      ANG: 'Niederländische-Antillen-Gulden',
      AOA: 'Angolanischer Kwanza',
      ARS: 'Argentinischer Peso',
      AUD: 'Australischer Dollar',
      AWG: 'Aruba-Florin',
      AZN: 'Aserbaidschan-Manat',
      BAM: 'Bosnien und Herzegowina Konvertierbare Mark',
      BBD: 'Barbados-Dollar',
      BDT: 'Bangladesch-Taka',
      BGN: 'Bulgarischer Lew',
      BHD: 'Bahrain-Dinar',
      BIF: 'Burundi-Franc',
      BMD: 'Bermuda-Dollar',
      BND: 'Brunei-Dollar',
      BOB: 'Bolivianischer Boliviano',
      BRL: 'Brasilianischer Real',
      BSD: 'Bahamas-Dollar',
      BTN: 'Bhutan-Ngultrum',
      BWP: 'Botswanischer Pula',
      BYN: 'Weißrussischer Rubel',
      BZD: 'Belize-Dollar',
      CAD: 'Kanadischer Dollar',
      CDF: 'Kongo-Franc',
      CHF: 'Schweizer Franken',
      CLP: 'Chilenischer Peso',
      CNY: 'Renminbi Yuan',
      COP: 'Kolumbianischer Peso',
      CRC: 'Costa-Rica-Colón',
      CUC: 'Kubanischer Peso (konvertibel)',
      CUP: 'Kubanischer Peso',
      CVE: 'Cabo-Verde-Escudo',
      CZK: 'Tschechische Krone',
      DJF: 'Dschibuti-Franc',
      DKK: 'Dänische Krone',
      DOP: 'Dominikanischer Peso',
      DZD: 'Algerischer Dinar',
      EGP: 'Ägyptisches Pfund',
      ERN: 'Eritreischer Nakfa',
      ETB: 'Äthiopischer Birr',
      EUR: 'Euro',
      FJD: 'Fidschi-Dollar',
      FKP: 'Falkland-Pfund',
      GBP: 'Britisches Pfund',
      GEL: 'Georgischer Lari',
      GHS: 'Ghanaischer Cedi',
      GIP: 'Gibraltar-Pfund',
      GMD: 'Gambia-Dalasi',
      GNF: 'Guinea-Franc',
      GTQ: 'Guatemaltekischer Quetzal',
      GYD: 'Guyana-Dollar',
      HKD: 'Hongkong-Dollar',
      HNL: 'Honduras-Lempira',
      HRK: 'Kroatischer Kuna',
      HTG: 'Haitianische Gourde',
      HUF: 'Ungarischer Forint',
      IDR: 'Indonesische Rupiah',
      ILS: 'Israelischer Neuer Schekel',
      INR: 'Indische Rupie',
      IQD: 'Irakischer Dinar',
      IRR: 'Iranischer Rial',
      ISK: 'Isländische Krone',
      JMD: 'Jamaika-Dollar',
      JOD: 'Jordanischer Dinar',
      JPY: 'Japanischer Yen',
      KES: 'Kenia-Schilling',
      KGS: 'Kirgisischer Som',
      KHR: 'Kambodschanischer Riel',
      KMF: 'Komoren-Franc',
      KPW: 'Nordkoreanischer Won',
      KRW: 'Südkoreanischer Won',
      KWD: 'Kuwait-Dinar',
      KYD: 'Kaiman-Dollar',
      KZT: 'Kasachischer Tenge',
      LAK: 'Laotischer Kip',
      LBP: 'Libanesisches Pfund',
      LKR: 'Sri-Lanka-Rupie',
      LRD: 'Liberianischer Dollar',
      LSL: 'Loti',
      LYD: 'Libyscher Dinar',
      MAD: 'Marokkanischer Dirham',
      MDL: 'Moldau-Leu',
      MGA: 'Madagaskar-Ariary',
      MKD: 'Mazedonischer Denar',
      MMK: 'Myanmarischer Kyat',
      MNT: 'Mongolischer Tögrög',
      MOP: 'Macao-Pataca',
      MRU: 'Mauretanischer Ouguiya',
      MUR: 'Mauritius-Rupie',
      MVR: 'Malediven-Rufiyaa',
      MWK: 'Malawi-Kwacha',
      MXN: 'Mexikanischer Peso',
      MYR: 'Malaysischer Ringgit',
      MZN: 'Mosambikanischer Metical',
      NAD: 'Namibia-Dollar',
      NGN: 'Nigerianischer Naira',
      NIO: 'Nicaragua-Córdoba',
      NOK: 'Norwegische Krone',
      NPR: 'Nepalesische Rupie',
      NZD: 'Neuseeland-Dollar',
      OMR: 'Omanischer Rial',
      PAB: 'Panamaischer Balboa',
      PEN: 'Peruanischer Sol',
      PGK: 'Papua-Neuguineischer Kina',
      PHP: 'Philippinischer Peso',
      PKR: 'Pakistanische Rupie',
      PLN: 'Polnischer Złoty',
      PYG: 'Paraguayischer Guaraní',
      QAR: 'Katar-Riyal',
      RON: 'Rumänischer Leu',
      RSD: 'Serbischer Dinar',
      RUB: 'Russischer Rubel',
      RWF: 'Ruanda-Franc',
      SAR: 'Saudi-Rial',
      SBD: 'Salomonen-Dollar',
      SCR: 'Seychellen-Rupie',
      SDG: 'Sudanesisches Pfund',
      SEK: 'Schwedische Krone',
      SGD: 'Singapur-Dollar',
      SHP: 'St. Helena-Pfund',
      SLL: 'Sierra-leonischer Leone',
      SOS: 'Somalia-Schilling',
      SRD: 'Suriname-Dollar',
      STN: 'São-toméischer Dobra',
      SVC: 'El Salvador Colon',
      SYP: 'Syrisches Pfund',
      SZL: 'Swasiländischer Lilangeni',
      THB: 'Thailändischer Baht',
      TJS: 'Tadschikistan-Somoni',
      TMT: 'Turkmenistan-Manat',
      TND: 'Tunesischer Dinar',
      TOP: 'Tongaischer Paʻanga',
      TRY: 'Türkische Lira',
      TTD: 'Trinidad und Tobago-Dollar',
      TWD: 'Neuer Taiwan-Dollar',
      TZS: 'Tansania-Schilling',
      UAH: 'Ukrainische Hrywnja',
      UGX: 'Uganda-Schilling',
      USD: 'US-Dollar',
      UYU: 'Uruguayischer Peso',
      UZS: 'Usbekistan-Sum',
      VND: 'Vietnamesischer Dong',
      VUV: 'Vanuatu-Vatu',
      WST: 'Samoanischer Tala',
      XAF: 'CFA-Franc (BEAC)',
      XCD: 'Ostkaribischer Dollar',
      XDR: 'Sonderziehungsrechte',
      XOF: 'CFA-Franc (BCEAO)',
      XPF: 'CFP-Franc',
      XXX: 'Unbekannte Währung',
      YER: 'Jemen-Rial',
      ZAR: 'Südafrikanischer Rand',
      ZMW: 'Kwacha',
    },
    c: 'EUR',
  },

  de_AT: {
    cp: '¤ #,##0.00',
  },

  de_CH: {
    d: '.',
    g: '’',
    cp: '¤ #,##0.00;¤-#,##0.00',
    cn: {
      BYN: 'Weissrussischer Rubel',
      STN: 'São-toméischer Dobra (2018)',
    },
    c: 'CHF',
  },

  de_DE: {},

  de_LI: {
    d: '.',
    g: '’',
    cp: '¤ #,##0.00',
    c: 'CHF',
  },
};

registerLocales(DE);

export { DE };