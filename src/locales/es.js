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
  registerLocale('es', {
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
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤',
    cs: {
      AUD: 'AUD',
      BRL: 'BRL',
      CAD: 'CA$',
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
      USD: 'US$',
      VND: '₫',
      XAF: 'XAF',
      XCD: 'XCD',
      XOF: 'XOF',
      XPF: 'CFPF',
      XXX: '¤',
      THB: '฿'
    },
    cn: {
      AED: 'dírham de los Emiratos Árabes Unidos',
      AFN: 'afgani',
      ALL: 'lek',
      AMD: 'dram',
      ANG: 'florín de las Antillas Neerlandesas',
      AOA: 'kuanza',
      ARS: 'peso argentino',
      AUD: 'dólar australiano',
      AWG: 'florín arubeño',
      AZN: 'manat azerbaiyano',
      BAM: 'marco convertible de Bosnia y Herzegovina',
      BBD: 'dólar barbadense',
      BDT: 'taka',
      BGN: 'lev búlgaro',
      BHD: 'dinar bahreiní',
      BIF: 'franco burundés',
      BMD: 'dólar de Bermudas',
      BND: 'dólar bruneano',
      BOB: 'boliviano',
      BRL: 'real brasileño',
      BSD: 'dólar bahameño',
      BTN: 'gultrum',
      BWP: 'pula',
      BYN: 'rublo bielorruso',
      BZD: 'dólar beliceño',
      CAD: 'dólar canadiense',
      CDF: 'franco congoleño',
      CHF: 'franco suizo',
      CLP: 'peso chileno',
      CNY: 'yuan',
      COP: 'peso colombiano',
      CRC: 'colón costarricense',
      CUC: 'peso cubano convertible',
      CUP: 'peso cubano',
      CVE: 'escudo de Cabo Verde',
      CZK: 'corona checa',
      DJF: 'franco yibutiano',
      DKK: 'corona danesa',
      DOP: 'peso dominicano',
      DZD: 'dinar argelino',
      EGP: 'libra egipcia',
      ERN: 'nakfa',
      ETB: 'bir',
      EUR: 'euro',
      FJD: 'dólar fiyiano',
      FKP: 'libra malvinense',
      GBP: 'libra esterlina',
      GEL: 'lari',
      GHS: 'cedi',
      GIP: 'libra gibraltareña',
      GMD: 'dalasi',
      GNF: 'franco guineano',
      GTQ: 'quetzal guatemalteco',
      GYD: 'dólar guyanés',
      HKD: 'dólar hongkonés',
      HNL: 'lempira hondureño',
      HRK: 'kuna',
      HTG: 'gourde haitiano',
      HUF: 'forinto húngaro',
      IDR: 'rupia indonesia',
      ILS: 'nuevo séquel israelí',
      INR: 'rupia india',
      IQD: 'dinar iraquí',
      IRR: 'rial iraní',
      ISK: 'corona islandesa',
      JMD: 'dólar jamaicano',
      JOD: 'dinar jordano',
      JPY: 'yen',
      KES: 'chelín keniano',
      KGS: 'som',
      KHR: 'riel',
      KMF: 'franco comorense',
      KPW: 'won norcoreano',
      KRW: 'won surcoreano',
      KWD: 'dinar kuwaití',
      KYD: 'dólar de las Islas Caimán',
      KZT: 'tenge kazako',
      LAK: 'kip',
      LBP: 'libra libanesa',
      LKR: 'rupia esrilanquesa',
      LRD: 'dólar liberiano',
      LSL: 'loti lesothense',
      LYD: 'dinar libio',
      MAD: 'dírham marroquí',
      MDL: 'leu moldavo',
      MGA: 'ariari',
      MKD: 'dinar macedonio',
      MMK: 'kiat',
      MNT: 'tugrik',
      MOP: 'pataca de Macao',
      MRU: 'uguiya',
      MUR: 'rupia mauriciana',
      MVR: 'rufiya',
      MWK: 'kuacha malauí',
      MXN: 'peso mexicano',
      MYR: 'ringit',
      MZN: 'metical',
      NAD: 'dólar namibio',
      NGN: 'naira',
      NIO: 'córdoba nicaragüense',
      NOK: 'corona noruega',
      NPR: 'rupia nepalí',
      NZD: 'dólar neozelandés',
      OMR: 'rial omaní',
      PAB: 'balboa panameño',
      PEN: 'sol peruano',
      PGK: 'kina',
      PHP: 'peso filipino',
      PKR: 'rupia pakistaní',
      PLN: 'esloti',
      PYG: 'guaraní paraguayo',
      QAR: 'rial catarí',
      RON: 'leu rumano',
      RSD: 'dinar serbio',
      RUB: 'rublo ruso',
      RWF: 'franco ruandés',
      SAR: 'rial saudí',
      SBD: 'dólar salomonense',
      SCR: 'rupia seychellense',
      SDG: 'libra sudanesa',
      SEK: 'corona sueca',
      SGD: 'dólar singapurense',
      SHP: 'libra de Santa Elena',
      SLL: 'leona',
      SOS: 'chelín somalí',
      SRD: 'dólar surinamés',
      STN: 'dobra',
      SVC: 'colón salvadoreño',
      SYP: 'libra siria',
      SZL: 'lilangeni',
      THB: 'bat',
      TJS: 'somoni tayiko',
      TMT: 'manat turcomano',
      TND: 'dinar tunecino',
      TOP: 'paanga',
      TRY: 'lira turca',
      TTD: 'dólar de Trinidad y Tobago',
      TWD: 'nuevo dólar taiwanés',
      TZS: 'chelín tanzano',
      UAH: 'grivna',
      UGX: 'chelín ugandés',
      USD: 'dólar estadounidense',
      UYU: 'peso uruguayo',
      UZS: 'sum',
      VND: 'dong',
      VUV: 'vatu',
      WST: 'tala',
      XAF: 'franco CFA de África Central',
      XCD: 'dólar del Caribe Oriental',
      XDR: 'derechos especiales de giro',
      XOF: 'franco CFA de África Occidental',
      XPF: 'franco CFP',
      XXX: 'moneda desconocida',
      YER: 'rial yemení',
      ZAR: 'rand',
      ZMW: 'kuacha zambiano'
    }
  });

  registerLocale('es_AR', {
    cp: '¤ #,##0.00',
    ap: '¤ #,##0.00;(¤ #,##0.00)',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      VND: 'VND',
      THB: 'THB',
      ARS: '$'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_BO', {
    cp: '¤#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      USD: 'USD',
      VND: 'VND',
      THB: 'THB',
      BOB: 'Bs'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_CL', {
    cp: '¤#,##0.00;¤-#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      VND: 'VND',
      THB: 'THB',
      CLP: '$'
    },
    cn: {
      CLP: 'Peso chileno',
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_CO', {
    cp: '¤ #,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      VND: 'VND',
      THB: 'THB',
      COP: '$'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_CR', {
    g: ' ',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      USD: 'USD',
      VND: 'VND',
      THB: 'THB',
      CRC: '₡'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_CU', {
    d: '.',
    g: ',',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      VND: 'VND',
      THB: 'THB',
      CUP: '$'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_DO', {
    d: '.',
    g: ',',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00;(¤#,##0.00)',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      VND: 'VND',
      THB: 'THB',
      DOP: 'RD$'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_EA', {});

  registerLocale('es_EC', {
    cp: '¤#,##0.00;¤-#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      USD: '$',
      VND: 'VND',
      THB: 'THB'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_ES', {});

  registerLocale('es_GQ', {
    cp: '¤#,##0.00',
    cs: {
      XAF: 'FCFA'
    }
  });

  registerLocale('es_GT', {
    d: '.',
    g: ',',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      USD: 'USD',
      VND: 'VND',
      THB: 'THB',
      GTQ: 'Q'
    },
    cn: {
      GTQ: 'quetzal',
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_HN', {
    d: '.',
    g: ',',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      USD: 'USD',
      VND: 'VND',
      THB: 'THB',
      HNL: 'L'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_IC', {});

  registerLocale('es_MX', {
    d: '.',
    g: ',',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      MXN: '$',
      USD: 'USD',
      VND: 'VND',
      THB: 'THB'
    },
    cn: {
      BDT: 'taka bangladesí',
      BTN: 'ngultrum butanés',
      KGS: 'som kirguís',
      KHR: 'riel camboyano',
      LAK: 'kip laosiano',
      MVR: 'rupia de Maldivas',
      MWK: 'kwacha malauí',
      STN: 'dobra santotomense',
      THB: 'baht tailandés',
      UZS: 'som uzbeko',
      VND: 'dong vietnamita',
      ZMW: 'kwacha zambiano'
    }
  });

  registerLocale('es_NI', {
    d: '.',
    g: ',',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      USD: 'USD',
      VND: 'VND',
      THB: 'THB',
      NIO: 'C$'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_PA', {
    d: '.',
    g: ',',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      USD: 'USD',
      VND: 'VND',
      THB: 'THB',
      PAB: 'B/.'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_PE', {
    d: '.',
    g: ',',
    cp: '¤ #,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      USD: 'USD',
      VND: 'VND',
      THB: 'THB',
      PEN: 'S/'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_PR', {
    d: '.',
    g: ',',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      USD: '$',
      VND: 'VND',
      THB: 'THB'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_PY', {
    cp: '¤ #,##0.00;¤ -#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      USD: 'USD',
      VND: 'VND',
      THB: 'THB',
      PYG: 'Gs.'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_SV', {
    d: '.',
    g: ',',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      USD: '$',
      VND: 'VND',
      THB: 'THB'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_UY', {
    cp: '¤ #,##0.00',
    ap: '¤ #,##0.00;(¤ #,##0.00)',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      VND: 'VND',
      THB: 'THB',
      UYU: '$'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });

  registerLocale('es_VE', {
    cp: '¤#,##0.00;¤-#,##0.00',
    ap: '¤#,##0.00',
    cs: {
      CAD: 'CAD',
      EUR: 'EUR',
      USD: 'USD',
      VND: 'VND',
      THB: 'THB'
    },
    cn: {
      MWK: 'kwacha malauí',
      THB: 'baht tailandes',
      UZS: 'som uzbeko'
    }
  });
})();
