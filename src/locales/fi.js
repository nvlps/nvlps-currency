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
  registerLocale('fi', {
    d: ',',
    g: ' ',
    p: '+',
    m: '−',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'epäluku',
    np: '#,##0.###',
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤',
    cs: {
      AUD: 'AUD',
      BRL: 'BRL',
      CAD: 'CAD',
      CNY: 'CNY',
      EUR: '€',
      GBP: '£',
      HKD: 'HKD',
      ILS: 'ILS',
      INR: 'INR',
      JPY: '¥',
      KRW: 'KRW',
      MXN: 'MXN',
      NZD: 'NZD',
      TWD: 'TWD',
      USD: '$',
      VND: 'VND',
      XAF: 'FCFA',
      XCD: 'XCD',
      XOF: 'CFA',
      XPF: 'XPF',
      XXX: 'XXX',
      LSL: 'LSL',
      SVC: 'SVC',
      XDR: 'XDR'
    },
    cn: {
      AED: 'Arabiemiirikuntien dirhami',
      AFN: 'Afganistanin afgaani',
      ALL: 'Albanian lek',
      AMD: 'Armenian dram',
      ANG: 'Alankomaiden Antillien guldeni',
      AOA: 'Angolan kwanza',
      ARS: 'Argentiinan peso',
      AUD: 'Australian dollari',
      AWG: 'Aruban floriini',
      AZN: 'Azerbaidžanin manat',
      BAM: 'Bosnia-Hertsegovinan vaihdettava markka',
      BBD: 'Barbadosin dollari',
      BDT: 'Bangladeshin taka',
      BGN: 'Bulgarian lev',
      BHD: 'Bahrainin dinaari',
      BIF: 'Burundin frangi',
      BMD: 'Bermudan dollari',
      BND: 'Brunein dollari',
      BOB: 'Bolivian boliviano',
      BRL: 'Brasilian real',
      BSD: 'Bahaman dollari',
      BTN: 'Bhutanin ngultrum',
      BWP: 'Botswanan pula',
      BYN: 'Valko-Venäjän rupla',
      BZD: 'Belizen dollari',
      CAD: 'Kanadan dollari',
      CDF: 'Kongon frangi',
      CHF: 'Sveitsin frangi',
      CLP: 'Chilen peso',
      CNY: 'Kiinan juan',
      COP: 'Kolumbian peso',
      CRC: 'Costa Rican colón',
      CUC: 'Kuuban vaihdettava peso',
      CUP: 'Kuuban peso',
      CVE: 'Kap Verden escudo',
      CZK: 'Tšekin koruna',
      DJF: 'Djiboutin frangi',
      DKK: 'Tanskan kruunu',
      DOP: 'Dominikaanisen tasavallan peso',
      DZD: 'Algerian dinaari',
      EGP: 'Egyptin punta',
      ERN: 'Eritrean nakfa',
      ETB: 'Etiopian birr',
      EUR: 'euro',
      FJD: 'Fidžin dollari',
      FKP: 'Falklandinsaarten punta',
      GBP: 'Englannin punta',
      GEL: 'Georgian lari',
      GHS: 'Ghanan cedi',
      GIP: 'Gibraltarin punta',
      GMD: 'Gambian dalasi',
      GNF: 'Guinean frangi',
      GTQ: 'Guatemalan quetzal',
      GYD: 'Guyanan dollari',
      HKD: 'Hongkongin dollari',
      HNL: 'Hondurasin lempira',
      HRK: 'Kroatian kuna',
      HTG: 'Haitin gourde',
      HUF: 'Unkarin forintti',
      IDR: 'Indonesian rupia',
      ILS: 'Israelin uusi sekeli',
      INR: 'Intian rupia',
      IQD: 'Irakin dinaari',
      IRR: 'Iranin rial',
      ISK: 'Islannin kruunu',
      JMD: 'Jamaikan dollari',
      JOD: 'Jordanian dinaari',
      JPY: 'Japanin jeni',
      KES: 'Kenian šillinki',
      KGS: 'Kirgisian som',
      KHR: 'Kambodžan riel',
      KMF: 'Komorien frangi',
      KPW: 'Pohjois-Korean won',
      KRW: 'Etelä-Korean won',
      KWD: 'Kuwaitin dinaari',
      KYD: 'Caymansaarten dollari',
      KZT: 'Kazakstanin tenge',
      LAK: 'Laosin kip',
      LBP: 'Libanonin punta',
      LKR: 'Sri Lankan rupia',
      LRD: 'Liberian dollari',
      LSL: 'Lesothon loti',
      LYD: 'Libyan dinaari',
      MAD: 'Marokon dirhami',
      MDL: 'Moldovan leu',
      MGA: 'Madagaskarin ariary',
      MKD: 'Makedonian denaari',
      MMK: 'Myanmarin kyat',
      MNT: 'Mongolian tugrik',
      MOP: 'Macaon pataca',
      MRU: 'Mauritanian ouguiya',
      MUR: 'Mauritiuksen rupia',
      MVR: 'Malediivien rufiyaa',
      MWK: 'Malawin kwacha',
      MXN: 'Meksikon peso',
      MYR: 'Malesian ringgit',
      MZN: 'Mosambikin metical',
      NAD: 'Namibian dollari',
      NGN: 'Nigerian naira',
      NIO: 'Nicaraguan córdoba',
      NOK: 'Norjan kruunu',
      NPR: 'Nepalin rupia',
      NZD: 'Uuden-Seelannin dollari',
      OMR: 'Omanin rial',
      PAB: 'Panaman balboa',
      PEN: 'Perun sol',
      PGK: 'Papua-Uuden-Guinean kina',
      PHP: 'Filippiinien peso',
      PKR: 'Pakistanin rupia',
      PLN: 'Puolan złoty',
      PYG: 'Paraguayn guarani',
      QAR: 'Qatarin rial',
      RON: 'Romanian leu',
      RSD: 'Serbian dinaari',
      RUB: 'Venäjän rupla',
      RWF: 'Ruandan frangi',
      SAR: 'Saudi-Arabian rial',
      SBD: 'Salomonsaarten dollari',
      SCR: 'Seychellien rupia',
      SDG: 'Sudanin punta',
      SEK: 'Ruotsin kruunu',
      SGD: 'Singaporen dollari',
      SHP: 'Saint Helenan punta',
      SLL: 'Sierra Leonen leone',
      SOS: 'Somalian šillinki',
      SRD: 'Surinamen dollari',
      STN: 'São Tomén ja Príncipen dobra',
      SVC: 'El Salvadorin colón',
      SYP: 'Syyrian punta',
      SZL: 'Swazimaan lilangeni',
      THB: 'Thaimaan baht',
      TJS: 'Tadžikistanin somoni',
      TMT: 'Turkmenistanin manat',
      TND: 'Tunisian dinaari',
      TOP: 'Tongan pa’anga',
      TRY: 'Turkin liira',
      TTD: 'Trinidadin ja Tobagon dollari',
      TWD: 'Taiwanin uusi dollari',
      TZS: 'Tansanian šillinki',
      UAH: 'Ukrainan hryvnia',
      UGX: 'Ugandan šillinki',
      USD: 'Yhdysvaltain dollari',
      UYU: 'Uruguayn peso',
      UZS: 'Uzbekistanin som',
      VND: 'Vietnamin dong',
      VUV: 'Vanuatun vatu',
      WST: 'Samoan tala',
      XAF: 'CFA-frangi BEAC',
      XCD: 'Itä-Karibian dollari',
      XDR: 'erityisnosto-oikeus (SDR)',
      XOF: 'CFA-frangi BCEAO',
      XPF: 'CFP-frangi',
      XXX: 'tuntematon rahayksikkö',
      YER: 'Jemenin rial',
      ZAR: 'Etelä-Afrikan randi',
      ZMW: 'Sambian kwacha'
    }
  });

  registerLocale('fi_FI', {});
})();
