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
  registerLocale('nl', {
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
    cp: '¤ #,##0.00;¤ -#,##0.00',
    ap: '¤ #,##0.00;(¤ #,##0.00)',
    cs: {
      AUD: 'AU$',
      BRL: 'R$',
      CAD: 'C$',
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
      XPF: 'XPF',
      XXX: '¤',
      FJD: 'FJ$',
      SBD: 'SI$',
      THB: '฿'
    },
    cn: {
      AED: 'Verenigde Arabische Emiraten-dirham',
      AFN: 'Afghaanse afghani',
      ALL: 'Albanese lek',
      AMD: 'Armeense dram',
      ANG: 'Nederlands-Antilliaanse gulden',
      AOA: 'Angolese kwanza',
      ARS: 'Argentijnse peso',
      AUD: 'Australische dollar',
      AWG: 'Arubaanse gulden',
      AZN: 'Azerbeidzjaanse manat',
      BAM: 'Bosnische convertibele mark',
      BBD: 'Barbadaanse dollar',
      BDT: 'Bengalese taka',
      BGN: 'Bulgaarse lev',
      BHD: 'Bahreinse dinar',
      BIF: 'Burundese frank',
      BMD: 'Bermuda-dollar',
      BND: 'Bruneise dollar',
      BOB: 'Boliviaanse boliviano',
      BRL: 'Braziliaanse real',
      BSD: 'Bahamaanse dollar',
      BTN: 'Bhutaanse ngultrum',
      BWP: 'Botswaanse pula',
      BYN: 'Wit-Russische roebel',
      BZD: 'Belizaanse dollar',
      CAD: 'Canadese dollar',
      CDF: 'Congolese frank',
      CHF: 'Zwitserse frank',
      CLP: 'Chileense peso',
      CNY: 'Chinese yuan',
      COP: 'Colombiaanse peso',
      CRC: 'Costa Ricaanse colon',
      CUC: 'Cubaanse convertibele peso',
      CUP: 'Cubaanse peso',
      CVE: 'Kaapverdische escudo',
      CZK: 'Tsjechische kroon',
      DJF: 'Djiboutiaanse frank',
      DKK: 'Deense kroon',
      DOP: 'Dominicaanse peso',
      DZD: 'Algerijnse dinar',
      EGP: 'Egyptisch pond',
      ERN: 'Eritrese nakfa',
      ETB: 'Ethiopische birr',
      EUR: 'Euro',
      FJD: 'Fiji-dollar',
      FKP: 'Falklandeilands pond',
      GBP: 'Brits pond',
      GEL: 'Georgische lari',
      GHS: 'Ghanese cedi',
      GIP: 'Gibraltarees pond',
      GMD: 'Gambiaanse dalasi',
      GNF: 'Guinese frank',
      GTQ: 'Guatemalteekse quetzal',
      GYD: 'Guyaanse dollar',
      HKD: 'Hongkongse dollar',
      HNL: 'Hondurese lempira',
      HRK: 'Kroatische kuna',
      HTG: 'Haïtiaanse gourde',
      HUF: 'Hongaarse forint',
      IDR: 'Indonesische roepia',
      ILS: 'Israëlische nieuwe shekel',
      INR: 'Indiase roepie',
      IQD: 'Iraakse dinar',
      IRR: 'Iraanse rial',
      ISK: 'IJslandse kroon',
      JMD: 'Jamaicaanse dollar',
      JOD: 'Jordaanse dinar',
      JPY: 'Japanse yen',
      KES: 'Keniaanse shilling',
      KGS: 'Kirgizische som',
      KHR: 'Cambodjaanse riel',
      KMF: 'Comorese frank',
      KPW: 'Noord-Koreaanse won',
      KRW: 'Zuid-Koreaanse won',
      KWD: 'Koeweitse dinar',
      KYD: 'Kaaimaneilandse dollar',
      KZT: 'Kazachse tenge',
      LAK: 'Laotiaanse kip',
      LBP: 'Libanees pond',
      LKR: 'Sri Lankaanse roepie',
      LRD: 'Liberiaanse dollar',
      LSL: 'Lesothaanse loti',
      LYD: 'Libische dinar',
      MAD: 'Marokkaanse dirham',
      MDL: 'Moldavische leu',
      MGA: 'Malagassische ariary',
      MKD: 'Macedonische denar',
      MMK: 'Myanmarese kyat',
      MNT: 'Mongoolse tugrik',
      MOP: 'Macause pataca',
      MRU: 'Mauritaanse ouguiya',
      MUR: 'Mauritiaanse roepie',
      MVR: 'Maldivische rufiyaa',
      MWK: 'Malawische kwacha',
      MXN: 'Mexicaanse peso',
      MYR: 'Maleisische ringgit',
      MZN: 'Mozambikaanse metical',
      NAD: 'Namibische dollar',
      NGN: 'Nigeriaanse naira',
      NIO: 'Nicaraguaanse córdoba',
      NOK: 'Noorse kroon',
      NPR: 'Nepalese roepie',
      NZD: 'Nieuw-Zeelandse dollar',
      OMR: 'Omaanse rial',
      PAB: 'Panamese balboa',
      PEN: 'Peruaanse sol',
      PGK: 'Papoea-Nieuw-Guinese kina',
      PHP: 'Filipijnse peso',
      PKR: 'Pakistaanse roepie',
      PLN: 'Poolse zloty',
      PYG: 'Paraguayaanse guarani',
      QAR: 'Qatarese rial',
      RON: 'Roemeense leu',
      RSD: 'Servische dinar',
      RUB: 'Russische roebel',
      RWF: 'Rwandese frank',
      SAR: 'Saoedi-Arabische riyal',
      SBD: 'Salomon-dollar',
      SCR: 'Seychelse roepie',
      SDG: 'Soedanees pond',
      SEK: 'Zweedse kroon',
      SGD: 'Singaporese dollar',
      SHP: 'Sint-Heleens pond',
      SLL: 'Sierraleoonse leone',
      SOS: 'Somalische shilling',
      SRD: 'Surinaamse dollar',
      STN: 'Santomese dobra',
      SVC: 'Salvadoraanse colón',
      SYP: 'Syrisch pond',
      SZL: 'Swazische lilangeni',
      THB: 'Thaise baht',
      TJS: 'Tadzjiekse somoni',
      TMT: 'Turkmeense manat',
      TND: 'Tunesische dinar',
      TOP: 'Tongaanse paʻanga',
      TRY: 'Turkse lira',
      TTD: 'Trinidad en Tobago-dollar',
      TWD: 'Nieuwe Taiwanese dollar',
      TZS: 'Tanzaniaanse shilling',
      UAH: 'Oekraïense hryvnia',
      UGX: 'Oegandese shilling',
      USD: 'Amerikaanse dollar',
      UYU: 'Uruguayaanse peso',
      UZS: 'Oezbeekse sum',
      VND: 'Vietnamese dong',
      VUV: 'Vanuatuaanse vatu',
      WST: 'Samoaanse tala',
      XAF: 'CFA-frank',
      XCD: 'Oost-Caribische dollar',
      XDR: 'Special Drawing Rights',
      XOF: 'CFA-franc BCEAO',
      XPF: 'CFP-frank',
      XXX: 'onbekende munteenheid',
      YER: 'Jemenitische rial',
      ZAR: 'Zuid-Afrikaanse rand',
      ZMW: 'Zambiaanse kwacha'
    }
  });

  registerLocale('nl_AW', {
    cs: {
      AWG: 'Afl.'
    }
  });

  registerLocale('nl_BQ', {
    cs: {
      USD: '$'
    }
  });

  registerLocale('nl_CW', {
    cs: {
      ANG: 'NAf.'
    }
  });

  registerLocale('nl_NL', {});

  registerLocale('nl_SR', {
    cs: {
      SRD: '$'
    }
  });
})();
