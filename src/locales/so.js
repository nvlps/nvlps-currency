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

const SO = {
  so: {
    d: '.',
    g: ',',
    p: '+',
    m: '-',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'MaL',
    np: '#,##0.###',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00;(¤#,##0.00)',
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
      SOS: 'S',
    },
    cn: {
      AED: 'Dirhamka Isutaga Imaaraatka Carabta',
      AFN: 'Afgan Afgani',
      ALL: 'Lekta Albaniya',
      AMD: 'Daraamka Armeniya',
      ANG: 'Galdarka Nadarlaan Antiliyaan',
      AOA: 'Kawansada Angola',
      ARS: 'Beesada Arjentiin',
      AUD: 'Doolarka Astaraaliya',
      AWG: 'Foloorinta Aruban',
      AZN: 'Manaata Asarbeyjan',
      BAM: 'Konfatibal Maakta Bosnia-Hersogofina',
      BBD: 'Doolarka Barbaadiyaan',
      BDT: 'Taka Bangledesh',
      BGN: 'Lefta Bulgariya',
      BHD: 'Dinaarka Baxreyn',
      BIF: 'Faranka Burundi',
      BMD: 'Doolarka Barmuuda',
      BND: 'Doolarka Buruney',
      BOB: 'Bolifiyanada Bolifiya',
      BRL: 'Realka Barasil',
      BSD: 'Doolarka Bahamaas',
      BTN: 'Nugultaramta Butan',
      BWP: 'Buulada Botswana',
      BYN: 'Rubalka Belarus',
      BZD: 'Doolarka Beelisa',
      CAD: 'Doolarka Kanada',
      CDF: 'Faranka Kongo',
      CHF: 'Faranka Iswiska',
      CLP: 'Beesada Jili',
      CNY: 'Yuwanta Shiinaha',
      COP: 'Beesada Kolombiya',
      CRC: 'Kolonka Kosta Riika',
      CUC: 'Beesada Konfatibal ee Kuuba',
      CUP: 'Beesada Kuuba',
      CVE: 'Eskudo Keyb Farde',
      CZK: 'Korunada Jeek',
      DJF: 'Faran Jabuuti',
      DKK: 'Koronka Danishka',
      DOP: 'Beesada Dominiika',
      DZD: 'Dinaarka Aljeriya',
      EGP: 'Bowndka Masar',
      ERN: 'Nakfada Eritriya',
      ETB: 'Birta Itoobbiya',
      EUR: 'Yuuroo',
      FJD: 'Doolarka Fiji',
      FKP: 'Bowndka Faalklaan Aylaanis',
      GBP: 'Bowndka Biritishka',
      GEL: 'Laariga Joorjiya',
      GHS: 'Sedida Gana',
      GIP: 'Bowndka Gibraltar',
      GMD: 'Dalasida Gambiya',
      GNF: 'Faranka Gini',
      GTQ: 'Kuwestalka Guwatemala',
      GYD: 'Doolarka Guyanes',
      HKD: 'Doolarka Hoon Koon',
      HNL: 'Lembirada Honduras',
      HRK: 'Kunada Korooshiya',
      HTG: 'Goordada Hiyati',
      HUF: 'Forintiska Hangari',
      IDR: 'Rubiah Indonesiya',
      ILS: 'Niyuu Shekelka Israaiil',
      INR: 'Rubiga Hindiya',
      IQD: 'Dinaarka Ciraaq',
      IRR: 'Riyaalka Iran',
      ISK: 'Koronada Eysland',
      JMD: 'Doolarka Jamayka',
      JOD: 'Dinaarka Urdun',
      JPY: 'Yenta Jabaan',
      KES: 'Shilingka Kenya',
      KGS: 'Somta Kiyrgiystan',
      KHR: 'Riyf kambodiya',
      KMF: 'Faranka Komoros',
      KPW: 'Wonka Waqooyiga Kuuriya',
      KRW: 'Wonka Koonfur Kuuriya',
      KWD: 'Dinaarka Kuweyt',
      KYD: 'Doolarka Kayman Aylaanis',
      KZT: 'Tengeda Kasakhstan',
      LAK: 'Kib Laoti',
      LBP: 'Bowndka Lubnaan',
      LKR: 'Rubiga Siri lanka',
      LRD: 'Doolarka Liberiya',
      LYD: 'Dinaarka Libya',
      MAD: 'Dirhamka Moroko',
      MDL: 'Leeyuuda Moldofa',
      MGA: 'Arayrida Madagaskar',
      MKD: 'Denaarka Masedoniya',
      MMK: 'Kayatda Mayanmaar',
      MNT: 'Tugrikta Mongoliya',
      MOP: 'Bataka Makana',
      MRU: 'Oogiyada Mawritaaniya',
      MUR: 'Rubiga Mowrishiya',
      MVR: 'Rufiyada Maldifiya',
      MWK: 'Kawajada Malawi',
      MXN: 'Beesada Meksiko',
      MYR: 'Ringitda Malayshiya',
      MZN: 'Metikalka Mosambik',
      NAD: 'Doolarka Namibiya',
      NGN: 'Nairada Neyjeeriya',
      NIO: 'Kordobada Nikargow',
      NOK: 'Koronka Norway',
      NPR: 'Rubiga Nebal',
      NZD: 'Doolarka Niyuu Siyalaan',
      OMR: 'Riyaalka Cumaan',
      PAB: 'Balbow Banama',
      PEN: 'Solsha Beeru',
      PGK: 'Kinada Babua Niyuu Gini',
      PHP: 'Biso Filibin',
      PKR: 'Rubiga Bakistan',
      PLN: 'Solotida Bolaan',
      PYG: 'Guranida Baraguway',
      QAR: 'Riyaalka Qatar',
      RON: 'Liyuuda Romaniya',
      RSD: 'Dinaarka Serbiya',
      RUB: 'Rubalka Ruushka',
      RWF: 'Faranka Ruwanda',
      SAR: 'Riyaalka Sacuudiga',
      SBD: 'Doolarka Solomon Aylaanis',
      SCR: 'Rubiga Siisalis',
      SDG: 'Bowndka Suudaan',
      SEK: 'Koronka Isweden',
      SGD: 'Doolarka Singabuur',
      SHP: 'Bowndka St Helen',
      SLL: 'Leonka Sira Leon',
      SOS: 'Shilingka Soomaaliya',
      SRD: 'Doolarka Surinamees',
      STN: 'Dobra Sao Tome & Birinsibi',
      SYP: 'Bowndka Suuriya',
      SZL: 'Lilangeenida iswaasi',
      THB: 'Baatka Taylaan',
      TJS: 'Somoonida Tajikistan',
      TMT: 'Manaata Turkmenistan',
      TND: 'Dinaarka Tunisiya',
      TOP: 'Ba’angada Tonga',
      TRY: 'Liirada Turkiga',
      TTD: 'Doolarka Tirinidad iyo Tobago',
      TWD: 'Doolarka Taywaanta Cusub',
      TZS: 'Shilingka Tansaaniya',
      UAH: 'Hirfiniyada Yukreeyn',
      UGX: 'Shilingka Yugandha',
      USD: 'Doolarka Mareeykanka',
      UYU: 'Beesada Urugway',
      UZS: 'Somta Usbekistan',
      VND: 'Dongta Fitnaam',
      VUV: 'Fatu Fanuatu',
      WST: 'Tala Samao',
      XAF: 'Faranka CFA ee Bartamaha Afrika',
      XCD: 'Doolarka Iist Kaaribyan',
      XOF: 'Faranka CFA Galbeedka Afrika',
      XPF: 'Faranka CFP',
      XXX: 'Lacag aan la aqoon',
      YER: 'Riyaalka Yemen',
      ZAR: 'Randka Koonfur Afrika',
      ZMW: 'Kawajada Sambiya',
    },
  },

  so_DJ: {
    cs: {
      DJF: 'Fdj',
    },
  },

  so_SO: {},
};

export default SO;
