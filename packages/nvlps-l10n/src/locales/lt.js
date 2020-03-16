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

import { registerLocales } from '@nvlps/currency';

const LT = {
  lt: {
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
    ap: '#,##0.00 ¤',
    cs: {
      AUD: 'AUD',
      BRL: 'BRL',
      CAD: 'CAD',
      CNY: 'CNY',
      EUR: '€',
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
      XAF: 'XAF',
      XCD: 'XCD',
      XOF: 'XOF',
      XPF: 'XPF',
      XXX: '¤',
    },
    cn: {
      AED: 'Jungtinių Arabų Emyratų dirhamas',
      AFN: 'Afganistano afganis',
      ALL: 'Albanijos lekas',
      AMD: 'Armėnijos dramas',
      ANG: 'Olandijos Antilų guldenas',
      AOA: 'Angolos kvanza',
      ARS: 'Argentinos pesas',
      AUD: 'Australijos doleris',
      AWG: 'Arubos guldenas',
      AZN: 'Azerbaidžano manatas',
      BAM: 'Bosnijos ir Hercegovinos konvertuojamoji markė',
      BBD: 'Barbadoso doleris',
      BDT: 'Bangladešo taka',
      BGN: 'Bulgarijos levas',
      BHD: 'Bahreino dinaras',
      BIF: 'Burundžio frankas',
      BMD: 'Bermudos doleris',
      BND: 'Brunėjaus doleris',
      BOB: 'Bolivijos bolivijanas',
      BRL: 'Brazilijos realas',
      BSD: 'Bahamų doleris',
      BTN: 'Butano ngultrumas',
      BWP: 'Botsvanos pula',
      BYN: 'Baltarusijos rublis',
      BZD: 'Belizo doleris',
      CAD: 'Kanados doleris',
      CDF: 'Kongo frankas',
      CHF: 'Šveicarijos frankas',
      CLP: 'Čilės pesas',
      CNY: 'Kinijos ženminbi juanis',
      COP: 'Kolumbijos pesas',
      CRC: 'Kosta Rikos kolonas',
      CUC: 'Kubos konvertuojamasis pesas',
      CUP: 'Kubos pesas',
      CVE: 'Žaliojo Kyšulio eskudas',
      CZK: 'Čekijos krona',
      DJF: 'Džibučio frankas',
      DKK: 'Danijos krona',
      DOP: 'Dominikos pesas',
      DZD: 'Alžyro dinaras',
      EGP: 'Egipto svaras',
      ERN: 'Eritrėjos nakfa',
      ETB: 'Etiopijos biras',
      EUR: 'Euras',
      FJD: 'Fidžio doleris',
      FKP: 'Falklando salų svaras',
      GBP: 'Didžiosios Britanijos svaras',
      GEL: 'Gruzijos laris',
      GHS: 'Ganos sedis',
      GIP: 'Gibraltaro svaras',
      GMD: 'Gambijos dalasis',
      GNF: 'Gvinėjos frankas',
      GTQ: 'Gvatemalos ketcalis',
      GYD: 'Gajanos doleris',
      HKD: 'Honkongo doleris',
      HNL: 'Hondūro lempira',
      HRK: 'Kroatijos kuna',
      HTG: 'Haičio gurdas',
      HUF: 'Vengrijos forintas',
      IDR: 'Indonezijos rupija',
      ILS: 'Izraelio naujasis šekelis',
      INR: 'Indijos rupija',
      IQD: 'Irako dinaras',
      IRR: 'Irano rialas',
      ISK: 'Islandijos krona',
      JMD: 'Jamaikos doleris',
      JOD: 'Jordanijos dinaras',
      JPY: 'Japonijos jena',
      KES: 'Kenijos šilingas',
      KGS: 'Kirgizijos somas',
      KHR: 'Kambodžos rielis',
      KMF: 'Komoro frankas',
      KPW: 'Šiaurės Korėjos vonas',
      KRW: 'Pietų Korėjos vonas',
      KWD: 'Kuveito dinaras',
      KYD: 'Kaimanų salų doleris',
      KZT: 'Kazachstano tengė',
      LAK: 'Laoso kipas',
      LBP: 'Libano svaras',
      LKR: 'Šri Lankos rupija',
      LRD: 'Liberijos doleris',
      LSL: 'Lesoto lotis',
      LYD: 'Libijos dinaras',
      MAD: 'Maroko dirhamas',
      MDL: 'Moldovos lėja',
      MGA: 'Madagaskaro ariaris',
      MKD: 'Makedonijos denaras',
      MMK: 'Mianmaro kijatas',
      MNT: 'Mongolijos tugrikas',
      MOP: 'Makao pataka',
      MRU: 'Mauritanijos ugija',
      MUR: 'Mauricijaus rupija',
      MVR: 'Maldyvų rufija',
      MWK: 'Malavio kvača',
      MXN: 'Meksikos pesas',
      MYR: 'Malaizijos ringitas',
      MZN: 'Mozambiko metikalis',
      NAD: 'Namibijos doleris',
      NGN: 'Nigerijos naira',
      NIO: 'Nikaragvos kordoba',
      NOK: 'Norvegijos krona',
      NPR: 'Nepalo rupija',
      NZD: 'Naujosios Zelandijos doleris',
      OMR: 'Omano rialas',
      PAB: 'Panamos balboja',
      PEN: 'Peru solis',
      PGK: 'Papua Naujosios Gvinėjos kina',
      PHP: 'Filipinų pesas',
      PKR: 'Pakistano rupija',
      PLN: 'Lenkijos zlotas',
      PYG: 'Paragvajaus guaranis',
      QAR: 'Kataro rialas',
      RON: 'Rumunijos lėja',
      RSD: 'Serbijos dinaras',
      RUB: 'Rusijos rublis',
      RWF: 'Ruandos frankas',
      SAR: 'Saudo Arabijos rijalas',
      SBD: 'Saliamono salų doleris',
      SCR: 'Seišelių rupija',
      SDG: 'Sudano svaras',
      SEK: 'Švedijos krona',
      SGD: 'Singapūro doleris',
      SHP: 'Šv. Elenos salų svaras',
      SLL: 'Siera Leonės leonė',
      SOS: 'Somalio šilingas',
      SRD: 'Surimano doleris',
      STN: 'San Tomės ir Principės dobra',
      SVC: 'Salvadoro kolonas',
      SYP: 'Sirijos svaras',
      SZL: 'Svazilando lilangenis',
      THB: 'Tailando batas',
      TJS: 'Tadžikistano somonis',
      TMT: 'Turkmėnistano manatas',
      TND: 'Tuniso dinaras',
      TOP: 'Tongo paanga',
      TRY: 'Turkijos lira',
      TTD: 'Trinidado ir Tobago doleris',
      TWD: 'Taivano naujasis doleris',
      TZS: 'Tanzanijos šilingas',
      UAH: 'Ukrainos grivina',
      UGX: 'Ugandos šilingas',
      USD: 'JAV doleris',
      UYU: 'Urugvajaus pesas',
      UZS: 'Uzbekistano sumas',
      VND: 'Vietnamo dongas',
      VUV: 'Vanuatu vatas',
      WST: 'Samoa tala',
      XAF: 'CFA BEAC frankas',
      XCD: 'Rytų Karibų doleris',
      XDR: 'SDR tarptautinis valiutos fondas',
      XOF: 'CFA BCEAO frankas',
      XPF: 'CFP frankas',
      XXX: 'nežinoma valiuta',
      YER: 'Jemeno rialas',
      ZAR: 'Pietų Afrikos Respublikos randas',
      ZMW: 'Zambijos kvača',
    },
    c: 'EUR',
  },

  lt_LT: {},
};

registerLocales(LT);

export { LT };
