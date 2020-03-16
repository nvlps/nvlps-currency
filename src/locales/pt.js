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

import { registerLocales } from '../lib/locale';

const PT = {
  pt: {
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
    cp: '¤ #,##0.00',
    ap: '¤ #,##0.00',
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
      THB: '฿',
    },
    cn: {
      AED: 'Dirham dos Emirados Árabes Unidos',
      AFN: 'Afegane afegão',
      ALL: 'Lek albanês',
      AMD: 'Dram armênio',
      ANG: 'Florim das Antilhas Holandesas',
      AOA: 'Kwanza angolano',
      ARS: 'Peso argentino',
      AUD: 'Dólar australiano',
      AWG: 'Florim arubano',
      AZN: 'Manat azeri',
      BAM: 'Marco conversível da Bósnia e Herzegovina',
      BBD: 'Dólar barbadense',
      BDT: 'Taka bengali',
      BGN: 'Lev búlgaro',
      BHD: 'Dinar bareinita',
      BIF: 'Franco burundiano',
      BMD: 'Dólar bermudense',
      BND: 'Dólar bruneano',
      BOB: 'Boliviano da Bolívia',
      BRL: 'Real brasileiro',
      BSD: 'Dólar bahamense',
      BTN: 'Ngultrum butanês',
      BWP: 'Pula botsuanesa',
      BYN: 'Rublo bielorrusso',
      BZD: 'Dólar belizenho',
      CAD: 'Dólar canadense',
      CDF: 'Franco congolês',
      CHF: 'Franco suíço',
      CLP: 'Peso chileno',
      CNY: 'Yuan chinês',
      COP: 'Peso colombiano',
      CRC: 'Colón costarriquenho',
      CUC: 'Peso cubano conversível',
      CUP: 'Peso cubano',
      CVE: 'Escudo cabo-verdiano',
      CZK: 'Coroa tcheca',
      DJF: 'Franco djiboutiano',
      DKK: 'Coroa dinamarquesa',
      DOP: 'Peso dominicano',
      DZD: 'Dinar argelino',
      EGP: 'Libra egípcia',
      ERN: 'Nakfa da Eritreia',
      ETB: 'Birr etíope',
      EUR: 'Euro',
      FJD: 'Dólar fijiano',
      FKP: 'Libra malvinense',
      GBP: 'Libra esterlina',
      GEL: 'Lari georgiano',
      GHS: 'Cedi ganês',
      GIP: 'Libra de Gibraltar',
      GMD: 'Dalasi gambiano',
      GNF: 'Franco guineano',
      GTQ: 'Quetzal guatemalteco',
      GYD: 'Dólar guianense',
      HKD: 'Dólar de Hong Kong',
      HNL: 'Lempira hondurenha',
      HRK: 'Kuna croata',
      HTG: 'Gourde haitiano',
      HUF: 'Florim húngaro',
      IDR: 'Rupia indonésia',
      ILS: 'Novo shekel israelense',
      INR: 'Rupia indiana',
      IQD: 'Dinar iraquiano',
      IRR: 'Rial iraniano',
      ISK: 'Coroa islandesa',
      JMD: 'Dólar jamaicano',
      JOD: 'Dinar jordaniano',
      JPY: 'Iene japonês',
      KES: 'Xelim queniano',
      KGS: 'Som quirguiz',
      KHR: 'Riel cambojano',
      KMF: 'Franco comoriano',
      KPW: 'Won norte-coreano',
      KRW: 'Won sul-coreano',
      KWD: 'Dinar kuwaitiano',
      KYD: 'Dólar das Ilhas Cayman',
      KZT: 'Tenge cazaque',
      LAK: 'Kip laosiano',
      LBP: 'Libra libanesa',
      LKR: 'Rupia do Sri Lanka',
      LRD: 'Dólar liberiano',
      LSL: 'Loti do Lesoto',
      LYD: 'Dinar líbio',
      MAD: 'Dirham marroquino',
      MDL: 'Leu moldávio',
      MGA: 'Ariary malgaxe',
      MKD: 'Dinar macedônio',
      MMK: 'Quiat de Myanmar',
      MNT: 'Tugrik mongol',
      MOP: 'Pataca de Macau',
      MRU: 'Ouguiya mauritana',
      MUR: 'Rupia mauriciana',
      MVR: 'Rupia maldivana',
      MWK: 'Kwacha malauiana',
      MXN: 'Peso mexicano',
      MYR: 'Ringgit malaio',
      MZN: 'Metical moçambicano',
      NAD: 'Dólar namibiano',
      NGN: 'Naira nigeriana',
      NIO: 'Córdoba nicaraguense',
      NOK: 'Coroa norueguesa',
      NPR: 'Rupia nepalesa',
      NZD: 'Dólar neozelandês',
      OMR: 'Rial omanense',
      PAB: 'Balboa panamenho',
      PEN: 'Novo sol peruano',
      PGK: 'Kina papuásia',
      PHP: 'Peso filipino',
      PKR: 'Rupia paquistanesa',
      PLN: 'Zloty polonês',
      PYG: 'Guarani paraguaio',
      QAR: 'Rial catariano',
      RON: 'Leu romeno',
      RSD: 'Dinar sérvio',
      RUB: 'Rublo russo',
      RWF: 'Franco ruandês',
      SAR: 'Riyal saudita',
      SBD: 'Dólar das Ilhas Salomão',
      SCR: 'Rupia seichelense',
      SDG: 'Libra sudanesa',
      SEK: 'Coroa sueca',
      SGD: 'Dólar singapuriano',
      SHP: 'Libra de Santa Helena',
      SLL: 'Leone de Serra Leoa',
      SOS: 'Xelim somali',
      SRD: 'Dólar surinamês',
      STN: 'Dobra de São Tomé e Príncipe',
      SVC: 'Colom salvadorenho',
      SYP: 'Libra síria',
      SZL: 'Lilangeni suazi',
      THB: 'Baht tailandês',
      TJS: 'Somoni tadjique',
      TMT: 'Manat turcomeno',
      TND: 'Dinar tunisiano',
      TOP: 'Paʻanga tonganesa',
      TRY: 'Lira turca',
      TTD: 'Dólar de Trinidad e Tobago',
      TWD: 'Novo dólar taiwanês',
      TZS: 'Xelim tanzaniano',
      UAH: 'Hryvnia ucraniano',
      UGX: 'Xelim ugandense',
      USD: 'Dólar americano',
      UYU: 'Peso uruguaio',
      UZS: 'Som uzbeque',
      VND: 'Dong vietnamita',
      VUV: 'Vatu de Vanuatu',
      WST: 'Tala samoano',
      XAF: 'Franco CFA de BEAC',
      XCD: 'Dólar do Caribe Oriental',
      XDR: 'Direitos Especiais de Giro',
      XOF: 'Franco CFA de BCEAO',
      XPF: 'Franco CFP',
      XXX: 'Moeda desconhecida',
      YER: 'Rial iemenita',
      ZAR: 'Rand sul-africano',
      ZMW: 'Kwacha zambiano',
    },
    c: 'EUR',
  },

  pt_AO: {
    g: ' ',
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
    cs: {
      AOA: 'Kz',
    },
    cn: {
      AED: 'dirham dos Emirados Árabes Unidos',
      AFN: 'afegâni afegão',
      ALL: 'lek albanês',
      AMD: 'dram arménio',
      ANG: 'florim das Antilhas Holandesas',
      AOA: 'kwanza angolano',
      ARS: 'peso argentino',
      AUD: 'dólar australiano',
      AWG: 'florim de Aruba',
      AZN: 'manat azeri',
      BAM: 'marco bósnio-herzegóvino conversível',
      BBD: 'dólar barbadense',
      BDT: 'taka bengali',
      BGN: 'lev búlgaro',
      BHD: 'dinar baremita',
      BIF: 'franco burundiano',
      BMD: 'dólar bermudense',
      BND: 'dólar bruneano',
      BOB: 'boliviano',
      BRL: 'real brasileiro',
      BSD: 'dólar das Bahamas',
      BTN: 'ngultrum butanês',
      BWP: 'pula de Botswana',
      BYN: 'rublo bielorrusso',
      BZD: 'dólar belizense',
      CAD: 'dólar canadiano',
      CDF: 'franco congolês',
      CHF: 'franco suíço',
      CLP: 'peso chileno',
      CNY: 'yuan',
      COP: 'peso colombiano',
      CRC: 'colon costa-riquenho',
      CUC: 'peso cubano conversível',
      CUP: 'peso cubano',
      CVE: 'escudo cabo-verdiano',
      CZK: 'coroa checa',
      DJF: 'franco jibutiano',
      DKK: 'coroa dinamarquesa',
      DOP: 'peso dominicano',
      DZD: 'dinar argelino',
      EGP: 'libra egípcia',
      ERN: 'nakfa eritreia',
      ETB: 'birr etíope',
      EUR: 'euro',
      FJD: 'dólar fijiano',
      FKP: 'libra das Ilhas Falkland',
      GBP: 'libra esterlina britânica',
      GEL: 'lari georgiano',
      GHS: 'cedi ganês',
      GIP: 'libra de Gibraltar',
      GMD: 'dalasi gambiano',
      GNF: 'franco guineense',
      GTQ: 'quetzal da Guatemala',
      GYD: 'dólar da Guiana',
      HKD: 'dólar de Hong Kong',
      HNL: 'lempira das Honduras',
      HRK: 'kuna croata',
      HTG: 'gourde haitiano',
      HUF: 'forint húngaro',
      IDR: 'rupia indonésia',
      ILS: 'sheqel novo israelita',
      INR: 'rupia indiana',
      IQD: 'dinar iraquiano',
      IRR: 'rial iraniano',
      ISK: 'coroa islandesa',
      JMD: 'dólar jamaicano',
      JOD: 'dinar jordaniano',
      JPY: 'iene japonês',
      KES: 'xelim queniano',
      KGS: 'som quirguiz',
      KHR: 'riel cambojano',
      KMF: 'franco comoriano',
      KPW: 'won norte-coreano',
      KRW: 'won sul-coreano',
      KWD: 'dinar kuwaitiano',
      KYD: 'dólar das Ilhas Caimão',
      KZT: 'tenge cazaque',
      LAK: 'kip laosiano',
      LBP: 'libra libanesa',
      LKR: 'rupia do Sri Lanka',
      LRD: 'dólar liberiano',
      LYD: 'dinar líbio',
      MAD: 'dirham marroquino',
      MDL: 'leu moldavo',
      MGA: 'ariari malgaxe',
      MKD: 'dinar macedónio',
      MMK: 'kyat de Mianmar',
      MNT: 'tugrik mongol',
      MOP: 'pataca macaense',
      MRU: 'ouguiya mauritana',
      MUR: 'rupia mauriciana',
      MVR: 'rupia maldivana',
      MWK: 'kwacha malauiano',
      MXN: 'peso mexicano',
      MYR: 'ringgit malaio',
      MZN: 'metical moçambicano',
      NAD: 'dólar namibiano',
      NGN: 'naira nigeriana',
      NIO: 'córdoba nicaraguano',
      NOK: 'coroa norueguesa',
      NPR: 'rupia nepalesa',
      NZD: 'dólar neozelandês',
      OMR: 'rial omanense',
      PAB: 'balboa do Panamá',
      PEN: 'sol peruano',
      PGK: 'kina papuásia',
      PHP: 'peso filipino',
      PKR: 'rupia paquistanesa',
      PLN: 'zloti polaco',
      PYG: 'guarani paraguaio',
      QAR: 'rial catarense',
      RON: 'leu romeno',
      RSD: 'dinar sérvio',
      RUB: 'rublo russo',
      RWF: 'franco ruandês',
      SAR: 'rial saudita',
      SBD: 'dólar das Ilhas Salomão',
      SCR: 'rupia seichelense',
      SDG: 'libra sudanesa',
      SEK: 'coroa sueca',
      SGD: 'dólar singapuriano',
      SHP: 'libra santa-helenense',
      SLL: 'leone de Serra Leoa',
      SOS: 'xelim somali',
      SRD: 'dólar do Suriname',
      STN: 'dobra de São Tomé e Príncipe',
      SYP: 'libra síria',
      SZL: 'lilangeni suázi',
      THB: 'baht tailandês',
      TJS: 'somoni tajique',
      TMT: 'manat turcomeno',
      TND: 'dinar tunisino',
      TOP: 'paʻanga tonganesa',
      TRY: 'lira turca',
      TTD: 'dólar de Trindade e Tobago',
      TWD: 'novo dólar taiwanês',
      TZS: 'xelim tanzaniano',
      UAH: 'hryvnia ucraniano',
      UGX: 'xelim ugandense',
      USD: 'dólar dos Estados Unidos',
      UYU: 'peso uruguaio',
      UZS: 'som uzbeque',
      VND: 'dong vietnamita',
      VUV: 'vatu de Vanuatu',
      WST: 'tala samoano',
      XAF: 'franco CFA (BEAC)',
      XCD: 'dólar das Caraíbas Orientais',
      XOF: 'franco CFA (BCEAO)',
      XPF: 'franco CFP',
      XXX: 'moeda desconhecida',
      YER: 'rial iemenita',
      ZAR: 'rand sul-africano',
      ZMW: 'kwacha zambiano',
    },
    c: 'AOA',
  },

  pt_BR: {
    c: 'BRL',
  },

  pt_GW: {
    g: ' ',
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
    cn: {
      AED: 'dirham dos Emirados Árabes Unidos',
      AFN: 'afegâni afegão',
      ALL: 'lek albanês',
      AMD: 'dram arménio',
      ANG: 'florim das Antilhas Holandesas',
      AOA: 'kwanza angolano',
      ARS: 'peso argentino',
      AUD: 'dólar australiano',
      AWG: 'florim de Aruba',
      AZN: 'manat azeri',
      BAM: 'marco bósnio-herzegóvino conversível',
      BBD: 'dólar barbadense',
      BDT: 'taka bengali',
      BGN: 'lev búlgaro',
      BHD: 'dinar baremita',
      BIF: 'franco burundiano',
      BMD: 'dólar bermudense',
      BND: 'dólar bruneano',
      BOB: 'boliviano',
      BRL: 'real brasileiro',
      BSD: 'dólar das Bahamas',
      BTN: 'ngultrum butanês',
      BWP: 'pula de Botswana',
      BYN: 'rublo bielorrusso',
      BZD: 'dólar belizense',
      CAD: 'dólar canadiano',
      CDF: 'franco congolês',
      CHF: 'franco suíço',
      CLP: 'peso chileno',
      CNY: 'yuan',
      COP: 'peso colombiano',
      CRC: 'colon costa-riquenho',
      CUC: 'peso cubano conversível',
      CUP: 'peso cubano',
      CVE: 'escudo cabo-verdiano',
      CZK: 'coroa checa',
      DJF: 'franco jibutiano',
      DKK: 'coroa dinamarquesa',
      DOP: 'peso dominicano',
      DZD: 'dinar argelino',
      EGP: 'libra egípcia',
      ERN: 'nakfa eritreia',
      ETB: 'birr etíope',
      EUR: 'euro',
      FJD: 'dólar fijiano',
      FKP: 'libra das Ilhas Falkland',
      GBP: 'libra esterlina britânica',
      GEL: 'lari georgiano',
      GHS: 'cedi ganês',
      GIP: 'libra de Gibraltar',
      GMD: 'dalasi gambiano',
      GNF: 'franco guineense',
      GTQ: 'quetzal da Guatemala',
      GYD: 'dólar da Guiana',
      HKD: 'dólar de Hong Kong',
      HNL: 'lempira das Honduras',
      HRK: 'kuna croata',
      HTG: 'gourde haitiano',
      HUF: 'forint húngaro',
      IDR: 'rupia indonésia',
      ILS: 'sheqel novo israelita',
      INR: 'rupia indiana',
      IQD: 'dinar iraquiano',
      IRR: 'rial iraniano',
      ISK: 'coroa islandesa',
      JMD: 'dólar jamaicano',
      JOD: 'dinar jordaniano',
      JPY: 'iene japonês',
      KES: 'xelim queniano',
      KGS: 'som quirguiz',
      KHR: 'riel cambojano',
      KMF: 'franco comoriano',
      KPW: 'won norte-coreano',
      KRW: 'won sul-coreano',
      KWD: 'dinar kuwaitiano',
      KYD: 'dólar das Ilhas Caimão',
      KZT: 'tenge cazaque',
      LAK: 'kip laosiano',
      LBP: 'libra libanesa',
      LKR: 'rupia do Sri Lanka',
      LRD: 'dólar liberiano',
      LYD: 'dinar líbio',
      MAD: 'dirham marroquino',
      MDL: 'leu moldavo',
      MGA: 'ariari malgaxe',
      MKD: 'dinar macedónio',
      MMK: 'kyat de Mianmar',
      MNT: 'tugrik mongol',
      MOP: 'pataca macaense',
      MRU: 'ouguiya mauritana',
      MUR: 'rupia mauriciana',
      MVR: 'rupia maldivana',
      MWK: 'kwacha malauiano',
      MXN: 'peso mexicano',
      MYR: 'ringgit malaio',
      MZN: 'metical moçambicano',
      NAD: 'dólar namibiano',
      NGN: 'naira nigeriana',
      NIO: 'córdoba nicaraguano',
      NOK: 'coroa norueguesa',
      NPR: 'rupia nepalesa',
      NZD: 'dólar neozelandês',
      OMR: 'rial omanense',
      PAB: 'balboa do Panamá',
      PEN: 'sol peruano',
      PGK: 'kina papuásia',
      PHP: 'peso filipino',
      PKR: 'rupia paquistanesa',
      PLN: 'zloti polaco',
      PYG: 'guarani paraguaio',
      QAR: 'rial catarense',
      RON: 'leu romeno',
      RSD: 'dinar sérvio',
      RUB: 'rublo russo',
      RWF: 'franco ruandês',
      SAR: 'rial saudita',
      SBD: 'dólar das Ilhas Salomão',
      SCR: 'rupia seichelense',
      SDG: 'libra sudanesa',
      SEK: 'coroa sueca',
      SGD: 'dólar singapuriano',
      SHP: 'libra santa-helenense',
      SLL: 'leone de Serra Leoa',
      SOS: 'xelim somali',
      SRD: 'dólar do Suriname',
      STN: 'dobra de São Tomé e Príncipe',
      SYP: 'libra síria',
      SZL: 'lilangeni suázi',
      THB: 'baht tailandês',
      TJS: 'somoni tajique',
      TMT: 'manat turcomeno',
      TND: 'dinar tunisino',
      TOP: 'paʻanga tonganesa',
      TRY: 'lira turca',
      TTD: 'dólar de Trindade e Tobago',
      TWD: 'novo dólar taiwanês',
      TZS: 'xelim tanzaniano',
      UAH: 'hryvnia ucraniano',
      UGX: 'xelim ugandense',
      USD: 'dólar dos Estados Unidos',
      UYU: 'peso uruguaio',
      UZS: 'som uzbeque',
      VND: 'dong vietnamita',
      VUV: 'vatu de Vanuatu',
      WST: 'tala samoano',
      XAF: 'franco CFA (BEAC)',
      XCD: 'dólar das Caraíbas Orientais',
      XOF: 'franco CFA (BCEAO)',
      XPF: 'franco CFP',
      XXX: 'moeda desconhecida',
      YER: 'rial iemenita',
      ZAR: 'rand sul-africano',
      ZMW: 'kwacha zambiano',
    },
    c: 'XOF',
  },

  pt_MZ: {
    g: ' ',
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
    cs: {
      MZN: 'MTn',
    },
    cn: {
      AED: 'dirham dos Emirados Árabes Unidos',
      AFN: 'afegâni afegão',
      ALL: 'lek albanês',
      AMD: 'dram arménio',
      ANG: 'florim das Antilhas Holandesas',
      AOA: 'kwanza angolano',
      ARS: 'peso argentino',
      AUD: 'dólar australiano',
      AWG: 'florim de Aruba',
      AZN: 'manat azeri',
      BAM: 'marco bósnio-herzegóvino conversível',
      BBD: 'dólar barbadense',
      BDT: 'taka bengali',
      BGN: 'lev búlgaro',
      BHD: 'dinar baremita',
      BIF: 'franco burundiano',
      BMD: 'dólar bermudense',
      BND: 'dólar bruneano',
      BOB: 'boliviano',
      BRL: 'real brasileiro',
      BSD: 'dólar das Bahamas',
      BTN: 'ngultrum butanês',
      BWP: 'pula de Botswana',
      BYN: 'rublo bielorrusso',
      BZD: 'dólar belizense',
      CAD: 'dólar canadiano',
      CDF: 'franco congolês',
      CHF: 'franco suíço',
      CLP: 'peso chileno',
      CNY: 'yuan',
      COP: 'peso colombiano',
      CRC: 'colon costa-riquenho',
      CUC: 'peso cubano conversível',
      CUP: 'peso cubano',
      CVE: 'escudo cabo-verdiano',
      CZK: 'coroa checa',
      DJF: 'franco jibutiano',
      DKK: 'coroa dinamarquesa',
      DOP: 'peso dominicano',
      DZD: 'dinar argelino',
      EGP: 'libra egípcia',
      ERN: 'nakfa eritreia',
      ETB: 'birr etíope',
      EUR: 'euro',
      FJD: 'dólar fijiano',
      FKP: 'libra das Ilhas Falkland',
      GBP: 'libra esterlina britânica',
      GEL: 'lari georgiano',
      GHS: 'cedi ganês',
      GIP: 'libra de Gibraltar',
      GMD: 'dalasi gambiano',
      GNF: 'franco guineense',
      GTQ: 'quetzal da Guatemala',
      GYD: 'dólar da Guiana',
      HKD: 'dólar de Hong Kong',
      HNL: 'lempira das Honduras',
      HRK: 'kuna croata',
      HTG: 'gourde haitiano',
      HUF: 'forint húngaro',
      IDR: 'rupia indonésia',
      ILS: 'sheqel novo israelita',
      INR: 'rupia indiana',
      IQD: 'dinar iraquiano',
      IRR: 'rial iraniano',
      ISK: 'coroa islandesa',
      JMD: 'dólar jamaicano',
      JOD: 'dinar jordaniano',
      JPY: 'iene japonês',
      KES: 'xelim queniano',
      KGS: 'som quirguiz',
      KHR: 'riel cambojano',
      KMF: 'franco comoriano',
      KPW: 'won norte-coreano',
      KRW: 'won sul-coreano',
      KWD: 'dinar kuwaitiano',
      KYD: 'dólar das Ilhas Caimão',
      KZT: 'tenge cazaque',
      LAK: 'kip laosiano',
      LBP: 'libra libanesa',
      LKR: 'rupia do Sri Lanka',
      LRD: 'dólar liberiano',
      LYD: 'dinar líbio',
      MAD: 'dirham marroquino',
      MDL: 'leu moldavo',
      MGA: 'ariari malgaxe',
      MKD: 'dinar macedónio',
      MMK: 'kyat de Mianmar',
      MNT: 'tugrik mongol',
      MOP: 'pataca macaense',
      MRU: 'ouguiya mauritana',
      MUR: 'rupia mauriciana',
      MVR: 'rupia maldivana',
      MWK: 'kwacha malauiano',
      MXN: 'peso mexicano',
      MYR: 'ringgit malaio',
      MZN: 'metical moçambicano',
      NAD: 'dólar namibiano',
      NGN: 'naira nigeriana',
      NIO: 'córdoba nicaraguano',
      NOK: 'coroa norueguesa',
      NPR: 'rupia nepalesa',
      NZD: 'dólar neozelandês',
      OMR: 'rial omanense',
      PAB: 'balboa do Panamá',
      PEN: 'sol peruano',
      PGK: 'kina papuásia',
      PHP: 'peso filipino',
      PKR: 'rupia paquistanesa',
      PLN: 'zloti polaco',
      PYG: 'guarani paraguaio',
      QAR: 'rial catarense',
      RON: 'leu romeno',
      RSD: 'dinar sérvio',
      RUB: 'rublo russo',
      RWF: 'franco ruandês',
      SAR: 'rial saudita',
      SBD: 'dólar das Ilhas Salomão',
      SCR: 'rupia seichelense',
      SDG: 'libra sudanesa',
      SEK: 'coroa sueca',
      SGD: 'dólar singapuriano',
      SHP: 'libra santa-helenense',
      SLL: 'leone de Serra Leoa',
      SOS: 'xelim somali',
      SRD: 'dólar do Suriname',
      STN: 'dobra de São Tomé e Príncipe',
      SYP: 'libra síria',
      SZL: 'lilangeni suázi',
      THB: 'baht tailandês',
      TJS: 'somoni tajique',
      TMT: 'manat turcomeno',
      TND: 'dinar tunisino',
      TOP: 'paʻanga tonganesa',
      TRY: 'lira turca',
      TTD: 'dólar de Trindade e Tobago',
      TWD: 'novo dólar taiwanês',
      TZS: 'xelim tanzaniano',
      UAH: 'hryvnia ucraniano',
      UGX: 'xelim ugandense',
      USD: 'dólar dos Estados Unidos',
      UYU: 'peso uruguaio',
      UZS: 'som uzbeque',
      VND: 'dong vietnamita',
      VUV: 'vatu de Vanuatu',
      WST: 'tala samoano',
      XAF: 'franco CFA (BEAC)',
      XCD: 'dólar das Caraíbas Orientais',
      XOF: 'franco CFA (BCEAO)',
      XPF: 'franco CFP',
      XXX: 'moeda desconhecida',
      YER: 'rial iemenita',
      ZAR: 'rand sul-africano',
      ZMW: 'kwacha zambiano',
    },
    c: 'MZN',
  },

  pt_PT: {
    g: ' ',
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
    cn: {
      AED: 'dirham dos Emirados Árabes Unidos',
      AFN: 'afegâni afegão',
      ALL: 'lek albanês',
      AMD: 'dram arménio',
      ANG: 'florim das Antilhas Holandesas',
      AOA: 'kwanza angolano',
      ARS: 'peso argentino',
      AUD: 'dólar australiano',
      AWG: 'florim de Aruba',
      AZN: 'manat azeri',
      BAM: 'marco bósnio-herzegóvino conversível',
      BBD: 'dólar barbadense',
      BDT: 'taka bengali',
      BGN: 'lev búlgaro',
      BHD: 'dinar baremita',
      BIF: 'franco burundiano',
      BMD: 'dólar bermudense',
      BND: 'dólar bruneano',
      BOB: 'boliviano',
      BRL: 'real brasileiro',
      BSD: 'dólar das Bahamas',
      BTN: 'ngultrum butanês',
      BWP: 'pula de Botswana',
      BYN: 'rublo bielorrusso',
      BZD: 'dólar belizense',
      CAD: 'dólar canadiano',
      CDF: 'franco congolês',
      CHF: 'franco suíço',
      CLP: 'peso chileno',
      CNY: 'yuan',
      COP: 'peso colombiano',
      CRC: 'colon costa-riquenho',
      CUC: 'peso cubano conversível',
      CUP: 'peso cubano',
      CVE: 'escudo cabo-verdiano',
      CZK: 'coroa checa',
      DJF: 'franco jibutiano',
      DKK: 'coroa dinamarquesa',
      DOP: 'peso dominicano',
      DZD: 'dinar argelino',
      EGP: 'libra egípcia',
      ERN: 'nakfa eritreia',
      ETB: 'birr etíope',
      EUR: 'euro',
      FJD: 'dólar fijiano',
      FKP: 'libra das Ilhas Falkland',
      GBP: 'libra esterlina britânica',
      GEL: 'lari georgiano',
      GHS: 'cedi ganês',
      GIP: 'libra de Gibraltar',
      GMD: 'dalasi gambiano',
      GNF: 'franco guineense',
      GTQ: 'quetzal da Guatemala',
      GYD: 'dólar da Guiana',
      HKD: 'dólar de Hong Kong',
      HNL: 'lempira das Honduras',
      HRK: 'kuna croata',
      HTG: 'gourde haitiano',
      HUF: 'forint húngaro',
      IDR: 'rupia indonésia',
      ILS: 'sheqel novo israelita',
      INR: 'rupia indiana',
      IQD: 'dinar iraquiano',
      IRR: 'rial iraniano',
      ISK: 'coroa islandesa',
      JMD: 'dólar jamaicano',
      JOD: 'dinar jordaniano',
      JPY: 'iene japonês',
      KES: 'xelim queniano',
      KGS: 'som quirguiz',
      KHR: 'riel cambojano',
      KMF: 'franco comoriano',
      KPW: 'won norte-coreano',
      KRW: 'won sul-coreano',
      KWD: 'dinar kuwaitiano',
      KYD: 'dólar das Ilhas Caimão',
      KZT: 'tenge cazaque',
      LAK: 'kip laosiano',
      LBP: 'libra libanesa',
      LKR: 'rupia do Sri Lanka',
      LRD: 'dólar liberiano',
      LYD: 'dinar líbio',
      MAD: 'dirham marroquino',
      MDL: 'leu moldavo',
      MGA: 'ariari malgaxe',
      MKD: 'dinar macedónio',
      MMK: 'kyat de Mianmar',
      MNT: 'tugrik mongol',
      MOP: 'pataca macaense',
      MRU: 'ouguiya mauritana',
      MUR: 'rupia mauriciana',
      MVR: 'rupia maldivana',
      MWK: 'kwacha malauiano',
      MXN: 'peso mexicano',
      MYR: 'ringgit malaio',
      MZN: 'metical moçambicano',
      NAD: 'dólar namibiano',
      NGN: 'naira nigeriana',
      NIO: 'córdoba nicaraguano',
      NOK: 'coroa norueguesa',
      NPR: 'rupia nepalesa',
      NZD: 'dólar neozelandês',
      OMR: 'rial omanense',
      PAB: 'balboa do Panamá',
      PEN: 'sol peruano',
      PGK: 'kina papuásia',
      PHP: 'peso filipino',
      PKR: 'rupia paquistanesa',
      PLN: 'zloti polaco',
      PYG: 'guarani paraguaio',
      QAR: 'rial catarense',
      RON: 'leu romeno',
      RSD: 'dinar sérvio',
      RUB: 'rublo russo',
      RWF: 'franco ruandês',
      SAR: 'rial saudita',
      SBD: 'dólar das Ilhas Salomão',
      SCR: 'rupia seichelense',
      SDG: 'libra sudanesa',
      SEK: 'coroa sueca',
      SGD: 'dólar singapuriano',
      SHP: 'libra santa-helenense',
      SLL: 'leone de Serra Leoa',
      SOS: 'xelim somali',
      SRD: 'dólar do Suriname',
      STN: 'dobra de São Tomé e Príncipe',
      SYP: 'libra síria',
      SZL: 'lilangeni suázi',
      THB: 'baht tailandês',
      TJS: 'somoni tajique',
      TMT: 'manat turcomeno',
      TND: 'dinar tunisino',
      TOP: 'paʻanga tonganesa',
      TRY: 'lira turca',
      TTD: 'dólar de Trindade e Tobago',
      TWD: 'novo dólar taiwanês',
      TZS: 'xelim tanzaniano',
      UAH: 'hryvnia ucraniano',
      UGX: 'xelim ugandense',
      USD: 'dólar dos Estados Unidos',
      UYU: 'peso uruguaio',
      UZS: 'som uzbeque',
      VND: 'dong vietnamita',
      VUV: 'vatu de Vanuatu',
      WST: 'tala samoano',
      XAF: 'franco CFA (BEAC)',
      XCD: 'dólar das Caraíbas Orientais',
      XOF: 'franco CFA (BCEAO)',
      XPF: 'franco CFP',
      XXX: 'moeda desconhecida',
      YER: 'rial iemenita',
      ZAR: 'rand sul-africano',
      ZMW: 'kwacha zambiano',
    },
  },

  pt_ST: {
    g: ' ',
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
    cs: {
      STN: 'Db',
    },
    cn: {
      AED: 'dirham dos Emirados Árabes Unidos',
      AFN: 'afegâni afegão',
      ALL: 'lek albanês',
      AMD: 'dram arménio',
      ANG: 'florim das Antilhas Holandesas',
      AOA: 'kwanza angolano',
      ARS: 'peso argentino',
      AUD: 'dólar australiano',
      AWG: 'florim de Aruba',
      AZN: 'manat azeri',
      BAM: 'marco bósnio-herzegóvino conversível',
      BBD: 'dólar barbadense',
      BDT: 'taka bengali',
      BGN: 'lev búlgaro',
      BHD: 'dinar baremita',
      BIF: 'franco burundiano',
      BMD: 'dólar bermudense',
      BND: 'dólar bruneano',
      BOB: 'boliviano',
      BRL: 'real brasileiro',
      BSD: 'dólar das Bahamas',
      BTN: 'ngultrum butanês',
      BWP: 'pula de Botswana',
      BYN: 'rublo bielorrusso',
      BZD: 'dólar belizense',
      CAD: 'dólar canadiano',
      CDF: 'franco congolês',
      CHF: 'franco suíço',
      CLP: 'peso chileno',
      CNY: 'yuan',
      COP: 'peso colombiano',
      CRC: 'colon costa-riquenho',
      CUC: 'peso cubano conversível',
      CUP: 'peso cubano',
      CVE: 'escudo cabo-verdiano',
      CZK: 'coroa checa',
      DJF: 'franco jibutiano',
      DKK: 'coroa dinamarquesa',
      DOP: 'peso dominicano',
      DZD: 'dinar argelino',
      EGP: 'libra egípcia',
      ERN: 'nakfa eritreia',
      ETB: 'birr etíope',
      EUR: 'euro',
      FJD: 'dólar fijiano',
      FKP: 'libra das Ilhas Falkland',
      GBP: 'libra esterlina britânica',
      GEL: 'lari georgiano',
      GHS: 'cedi ganês',
      GIP: 'libra de Gibraltar',
      GMD: 'dalasi gambiano',
      GNF: 'franco guineense',
      GTQ: 'quetzal da Guatemala',
      GYD: 'dólar da Guiana',
      HKD: 'dólar de Hong Kong',
      HNL: 'lempira das Honduras',
      HRK: 'kuna croata',
      HTG: 'gourde haitiano',
      HUF: 'forint húngaro',
      IDR: 'rupia indonésia',
      ILS: 'sheqel novo israelita',
      INR: 'rupia indiana',
      IQD: 'dinar iraquiano',
      IRR: 'rial iraniano',
      ISK: 'coroa islandesa',
      JMD: 'dólar jamaicano',
      JOD: 'dinar jordaniano',
      JPY: 'iene japonês',
      KES: 'xelim queniano',
      KGS: 'som quirguiz',
      KHR: 'riel cambojano',
      KMF: 'franco comoriano',
      KPW: 'won norte-coreano',
      KRW: 'won sul-coreano',
      KWD: 'dinar kuwaitiano',
      KYD: 'dólar das Ilhas Caimão',
      KZT: 'tenge cazaque',
      LAK: 'kip laosiano',
      LBP: 'libra libanesa',
      LKR: 'rupia do Sri Lanka',
      LRD: 'dólar liberiano',
      LYD: 'dinar líbio',
      MAD: 'dirham marroquino',
      MDL: 'leu moldavo',
      MGA: 'ariari malgaxe',
      MKD: 'dinar macedónio',
      MMK: 'kyat de Mianmar',
      MNT: 'tugrik mongol',
      MOP: 'pataca macaense',
      MRU: 'ouguiya mauritana',
      MUR: 'rupia mauriciana',
      MVR: 'rupia maldivana',
      MWK: 'kwacha malauiano',
      MXN: 'peso mexicano',
      MYR: 'ringgit malaio',
      MZN: 'metical moçambicano',
      NAD: 'dólar namibiano',
      NGN: 'naira nigeriana',
      NIO: 'córdoba nicaraguano',
      NOK: 'coroa norueguesa',
      NPR: 'rupia nepalesa',
      NZD: 'dólar neozelandês',
      OMR: 'rial omanense',
      PAB: 'balboa do Panamá',
      PEN: 'sol peruano',
      PGK: 'kina papuásia',
      PHP: 'peso filipino',
      PKR: 'rupia paquistanesa',
      PLN: 'zloti polaco',
      PYG: 'guarani paraguaio',
      QAR: 'rial catarense',
      RON: 'leu romeno',
      RSD: 'dinar sérvio',
      RUB: 'rublo russo',
      RWF: 'franco ruandês',
      SAR: 'rial saudita',
      SBD: 'dólar das Ilhas Salomão',
      SCR: 'rupia seichelense',
      SDG: 'libra sudanesa',
      SEK: 'coroa sueca',
      SGD: 'dólar singapuriano',
      SHP: 'libra santa-helenense',
      SLL: 'leone de Serra Leoa',
      SOS: 'xelim somali',
      SRD: 'dólar do Suriname',
      STN: 'dobra de São Tomé e Príncipe',
      SYP: 'libra síria',
      SZL: 'lilangeni suázi',
      THB: 'baht tailandês',
      TJS: 'somoni tajique',
      TMT: 'manat turcomeno',
      TND: 'dinar tunisino',
      TOP: 'paʻanga tonganesa',
      TRY: 'lira turca',
      TTD: 'dólar de Trindade e Tobago',
      TWD: 'novo dólar taiwanês',
      TZS: 'xelim tanzaniano',
      UAH: 'hryvnia ucraniano',
      UGX: 'xelim ugandense',
      USD: 'dólar dos Estados Unidos',
      UYU: 'peso uruguaio',
      UZS: 'som uzbeque',
      VND: 'dong vietnamita',
      VUV: 'vatu de Vanuatu',
      WST: 'tala samoano',
      XAF: 'franco CFA (BEAC)',
      XCD: 'dólar das Caraíbas Orientais',
      XOF: 'franco CFA (BCEAO)',
      XPF: 'franco CFP',
      XXX: 'moeda desconhecida',
      YER: 'rial iemenita',
      ZAR: 'rand sul-africano',
      ZMW: 'kwacha zambiano',
    },
    c: 'STN',
  },

  pt_TL: {
    g: ' ',
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
    cn: {
      AED: 'dirham dos Emirados Árabes Unidos',
      AFN: 'afegâni afegão',
      ALL: 'lek albanês',
      AMD: 'dram arménio',
      ANG: 'florim das Antilhas Holandesas',
      AOA: 'kwanza angolano',
      ARS: 'peso argentino',
      AUD: 'dólar australiano',
      AWG: 'florim de Aruba',
      AZN: 'manat azeri',
      BAM: 'marco bósnio-herzegóvino conversível',
      BBD: 'dólar barbadense',
      BDT: 'taka bengali',
      BGN: 'lev búlgaro',
      BHD: 'dinar baremita',
      BIF: 'franco burundiano',
      BMD: 'dólar bermudense',
      BND: 'dólar bruneano',
      BOB: 'boliviano',
      BRL: 'real brasileiro',
      BSD: 'dólar das Bahamas',
      BTN: 'ngultrum butanês',
      BWP: 'pula de Botswana',
      BYN: 'rublo bielorrusso',
      BZD: 'dólar belizense',
      CAD: 'dólar canadiano',
      CDF: 'franco congolês',
      CHF: 'franco suíço',
      CLP: 'peso chileno',
      CNY: 'yuan',
      COP: 'peso colombiano',
      CRC: 'colon costa-riquenho',
      CUC: 'peso cubano conversível',
      CUP: 'peso cubano',
      CVE: 'escudo cabo-verdiano',
      CZK: 'coroa checa',
      DJF: 'franco jibutiano',
      DKK: 'coroa dinamarquesa',
      DOP: 'peso dominicano',
      DZD: 'dinar argelino',
      EGP: 'libra egípcia',
      ERN: 'nakfa eritreia',
      ETB: 'birr etíope',
      EUR: 'euro',
      FJD: 'dólar fijiano',
      FKP: 'libra das Ilhas Falkland',
      GBP: 'libra esterlina britânica',
      GEL: 'lari georgiano',
      GHS: 'cedi ganês',
      GIP: 'libra de Gibraltar',
      GMD: 'dalasi gambiano',
      GNF: 'franco guineense',
      GTQ: 'quetzal da Guatemala',
      GYD: 'dólar da Guiana',
      HKD: 'dólar de Hong Kong',
      HNL: 'lempira das Honduras',
      HRK: 'kuna croata',
      HTG: 'gourde haitiano',
      HUF: 'forint húngaro',
      IDR: 'rupia indonésia',
      ILS: 'sheqel novo israelita',
      INR: 'rupia indiana',
      IQD: 'dinar iraquiano',
      IRR: 'rial iraniano',
      ISK: 'coroa islandesa',
      JMD: 'dólar jamaicano',
      JOD: 'dinar jordaniano',
      JPY: 'iene japonês',
      KES: 'xelim queniano',
      KGS: 'som quirguiz',
      KHR: 'riel cambojano',
      KMF: 'franco comoriano',
      KPW: 'won norte-coreano',
      KRW: 'won sul-coreano',
      KWD: 'dinar kuwaitiano',
      KYD: 'dólar das Ilhas Caimão',
      KZT: 'tenge cazaque',
      LAK: 'kip laosiano',
      LBP: 'libra libanesa',
      LKR: 'rupia do Sri Lanka',
      LRD: 'dólar liberiano',
      LYD: 'dinar líbio',
      MAD: 'dirham marroquino',
      MDL: 'leu moldavo',
      MGA: 'ariari malgaxe',
      MKD: 'dinar macedónio',
      MMK: 'kyat de Mianmar',
      MNT: 'tugrik mongol',
      MOP: 'pataca macaense',
      MRU: 'ouguiya mauritana',
      MUR: 'rupia mauriciana',
      MVR: 'rupia maldivana',
      MWK: 'kwacha malauiano',
      MXN: 'peso mexicano',
      MYR: 'ringgit malaio',
      MZN: 'metical moçambicano',
      NAD: 'dólar namibiano',
      NGN: 'naira nigeriana',
      NIO: 'córdoba nicaraguano',
      NOK: 'coroa norueguesa',
      NPR: 'rupia nepalesa',
      NZD: 'dólar neozelandês',
      OMR: 'rial omanense',
      PAB: 'balboa do Panamá',
      PEN: 'sol peruano',
      PGK: 'kina papuásia',
      PHP: 'peso filipino',
      PKR: 'rupia paquistanesa',
      PLN: 'zloti polaco',
      PYG: 'guarani paraguaio',
      QAR: 'rial catarense',
      RON: 'leu romeno',
      RSD: 'dinar sérvio',
      RUB: 'rublo russo',
      RWF: 'franco ruandês',
      SAR: 'rial saudita',
      SBD: 'dólar das Ilhas Salomão',
      SCR: 'rupia seichelense',
      SDG: 'libra sudanesa',
      SEK: 'coroa sueca',
      SGD: 'dólar singapuriano',
      SHP: 'libra santa-helenense',
      SLL: 'leone de Serra Leoa',
      SOS: 'xelim somali',
      SRD: 'dólar do Suriname',
      STN: 'dobra de São Tomé e Príncipe',
      SYP: 'libra síria',
      SZL: 'lilangeni suázi',
      THB: 'baht tailandês',
      TJS: 'somoni tajique',
      TMT: 'manat turcomeno',
      TND: 'dinar tunisino',
      TOP: 'paʻanga tonganesa',
      TRY: 'lira turca',
      TTD: 'dólar de Trindade e Tobago',
      TWD: 'novo dólar taiwanês',
      TZS: 'xelim tanzaniano',
      UAH: 'hryvnia ucraniano',
      UGX: 'xelim ugandense',
      USD: 'dólar dos Estados Unidos',
      UYU: 'peso uruguaio',
      UZS: 'som uzbeque',
      VND: 'dong vietnamita',
      VUV: 'vatu de Vanuatu',
      WST: 'tala samoano',
      XAF: 'franco CFA (BEAC)',
      XCD: 'dólar das Caraíbas Orientais',
      XOF: 'franco CFA (BCEAO)',
      XPF: 'franco CFP',
      XXX: 'moeda desconhecida',
      YER: 'rial iemenita',
      ZAR: 'rand sul-africano',
      ZMW: 'kwacha zambiano',
    },
    c: 'USD',
  },
};

registerLocales(PT);

export default PT;
