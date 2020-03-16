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

const CS = {
  cs: {
    d: ',',
    g: ' ',
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
      AUD: 'AU$',
      BRL: 'R$',
      CAD: 'CA$',
      CNY: 'CN¥',
      EUR: '€',
      GBP: '£',
      HKD: 'HK$',
      ILS: 'ILS',
      INR: 'INR',
      JPY: 'JP¥',
      KRW: '₩',
      MXN: 'MX$',
      NZD: 'NZ$',
      TWD: 'NT$',
      USD: 'US$',
      VND: 'VND',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: 'XXX',
      CZK: 'Kč',
    },
    cn: {
      AED: 'SAE dirham',
      AFN: 'afghánský afghán',
      ALL: 'albánský lek',
      AMD: 'arménský dram',
      ANG: 'nizozemskoantilský gulden',
      AOA: 'angolská kwanza',
      ARS: 'argentinské peso',
      AUD: 'australský dolar',
      AWG: 'arubský zlatý',
      AZN: 'ázerbájdžánský manat',
      BAM: 'bosenská konvertibilní marka',
      BBD: 'barbadoský dolar',
      BDT: 'bangladéšská taka',
      BGN: 'bulharský leva',
      BHD: 'bahrajnský dinár',
      BIF: 'burundský frank',
      BMD: 'bermudský dolar',
      BND: 'brunejský dolar',
      BOB: 'bolivijský boliviano',
      BRL: 'brazilský real',
      BSD: 'bahamský dolar',
      BTN: 'bhútánský ngultrum',
      BWP: 'botswanská pula',
      BYN: 'běloruský rubl',
      BZD: 'belizský dolar',
      CAD: 'kanadský dolar',
      CDF: 'konžský frank',
      CHF: 'švýcarský frank',
      CLP: 'chilské peso',
      CNY: 'čínský jüan',
      COP: 'kolumbijské peso',
      CRC: 'kostarický colón',
      CUC: 'kubánské konvertibilní peso',
      CUP: 'kubánské peso',
      CVE: 'kapverdské escudo',
      CZK: 'česká koruna',
      DJF: 'džibutský frank',
      DKK: 'dánská koruna',
      DOP: 'dominikánské peso',
      DZD: 'alžírský dinár',
      EGP: 'egyptská libra',
      ERN: 'eritrejská nakfa',
      ETB: 'etiopský birr',
      EUR: 'euro',
      FJD: 'fidžijský dolar',
      FKP: 'falklandská libra',
      GBP: 'britská libra',
      GEL: 'gruzínské lari',
      GHS: 'ghanský cedi',
      GIP: 'gibraltarská libra',
      GMD: 'gambijský dalasi',
      GNF: 'guinejský frank',
      GTQ: 'guatemalský quetzal',
      GYD: 'guyanský dolar',
      HKD: 'hongkongský dolar',
      HNL: 'honduraská lempira',
      HRK: 'chorvatská kuna',
      HTG: 'haitský gourde',
      HUF: 'maďarský forint',
      IDR: 'indonéská rupie',
      ILS: 'izraelský nový šekel',
      INR: 'indická rupie',
      IQD: 'irácký dinár',
      IRR: 'íránský rijál',
      ISK: 'islandská koruna',
      JMD: 'jamajský dolar',
      JOD: 'jordánský dinár',
      JPY: 'japonský jen',
      KES: 'keňský šilink',
      KGS: 'kyrgyzský som',
      KHR: 'kambodžský riel',
      KMF: 'komorský frank',
      KPW: 'severokorejský won',
      KRW: 'jihokorejský won',
      KWD: 'kuvajtský dinár',
      KYD: 'kajmanský dolar',
      KZT: 'kazašské tenge',
      LAK: 'laoský kip',
      LBP: 'libanonská libra',
      LKR: 'srílanská rupie',
      LRD: 'liberijský dolar',
      LSL: 'lesothský loti',
      LYD: 'libyjský dinár',
      MAD: 'marocký dinár',
      MDL: 'moldavský leu',
      MGA: 'madagaskarský ariary',
      MKD: 'makedonský denár',
      MMK: 'myanmarský kyat',
      MNT: 'mongolský tugrik',
      MOP: 'macajská pataca',
      MRU: 'mauritánská ouguiya',
      MUR: 'mauricijská rupie',
      MVR: 'maledivská rupie',
      MWK: 'malawijská kwacha',
      MXN: 'mexické peso',
      MYR: 'malajsijský ringgit',
      MZN: 'mozambický metical',
      NAD: 'namibijský dolar',
      NGN: 'nigerijská naira',
      NIO: 'nikaragujská córdoba',
      NOK: 'norská koruna',
      NPR: 'nepálská rupie',
      NZD: 'novozélandský dolar',
      OMR: 'ománský rijál',
      PAB: 'panamská balboa',
      PEN: 'peruánský sol',
      PGK: 'papuánská nová kina',
      PHP: 'filipínské peso',
      PKR: 'pákistánská rupie',
      PLN: 'polský zlotý',
      PYG: 'paraguajské guarani',
      QAR: 'katarský rijál',
      RON: 'rumunský leu',
      RSD: 'srbský dinár',
      RUB: 'ruský rubl',
      RWF: 'rwandský frank',
      SAR: 'saúdský rijál',
      SBD: 'šalamounský dolar',
      SCR: 'seychelská rupie',
      SDG: 'súdánská libra',
      SEK: 'švédská koruna',
      SGD: 'singapurský dolar',
      SHP: 'svatohelenská libra',
      SLL: 'sierro-leonský leone',
      SOS: 'somálský šilink',
      SRD: 'surinamský dolar',
      STN: 'svatotomášská dobra',
      SVC: 'salvadorský colón',
      SYP: 'syrská libra',
      SZL: 'svazijský lilangeni',
      THB: 'thajský baht',
      TJS: 'tádžické somoni',
      TMT: 'turkmenský manat',
      TND: 'tuniský dinár',
      TOP: 'tonžská paanga',
      TRY: 'turecká lira',
      TTD: 'trinidadský dolar',
      TWD: 'tchajwanský dolar',
      TZS: 'tanzanský šilink',
      UAH: 'ukrajinská hřivna',
      UGX: 'ugandský šilink',
      USD: 'americký dolar',
      UYU: 'uruguayské peso',
      UZS: 'uzbecký sum',
      VND: 'vietnamský dong',
      VUV: 'vanuatský vatu',
      WST: 'samojská tala',
      XAF: 'CFA/BEAC frank',
      XCD: 'východokaribský dolar',
      XDR: 'SDR',
      XOF: 'CFA/BCEAO frank',
      XPF: 'CFP frank',
      XXX: 'neznámá měna',
      YER: 'jemenský rijál',
      ZAR: 'jihoafrický rand',
      ZMW: 'zambijská kwacha',
    },
    c: 'CZK',
  },

  cs_CZ: {},
};

registerLocales(CS);

export { CS };
