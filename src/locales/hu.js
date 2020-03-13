/* eslint object-curly-newline: 0, wrap-iife: 0 */
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
import { registerLocale } from '../locale';

const HU = {
  hu: {
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
      AUD: 'AUD',
      BRL: 'BRL',
      CAD: 'CAD',
      CNY: 'CNY',
      EUR: 'EUR',
      GBP: 'GBP',
      HKD: 'HKD',
      ILS: 'ILS',
      INR: 'INR',
      JPY: '¥',
      KRW: 'KRW',
      MXN: 'MXN',
      NZD: 'NZD',
      TWD: 'TWD',
      USD: 'USD',
      VND: 'VND',
      XAF: 'FCFA',
      XCD: 'XCD',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      HUF: 'Ft',
    },
    cn: {
      AED: 'EAE-dirham',
      AFN: 'afgán afghani',
      ALL: 'albán lek',
      AMD: 'örmény dram',
      ANG: 'holland antilláki forint',
      AOA: 'angolai kwanza',
      ARS: 'argentin peso',
      AUD: 'ausztrál dollár',
      AWG: 'arubai florin',
      AZN: 'azerbajdzsáni manat',
      BAM: 'bosznia-hercegovinai konvertibilis márka',
      BBD: 'barbadosi dollár',
      BDT: 'bangladesi taka',
      BGN: 'bolgár új leva',
      BHD: 'bahreini dinár',
      BIF: 'burundi frank',
      BMD: 'bermudai dollár',
      BND: 'brunei dollár',
      BOB: 'bolíviai boliviano',
      BRL: 'brazil real',
      BSD: 'bahamai dollár',
      BTN: 'bhutáni ngultrum',
      BWP: 'botswanai pula',
      BYN: 'belarusz rubel',
      BZD: 'belize-i dollár',
      CAD: 'kanadai dollár',
      CDF: 'kongói frank',
      CHF: 'svájci frank',
      CLP: 'chilei peso',
      CNY: 'kínai jüan',
      COP: 'kolumbiai peso',
      CRC: 'Costa Rica-i colon',
      CUC: 'kubai konvertibilis peso',
      CUP: 'kubai peso',
      CVE: 'Cape Verde-i escudo',
      CZK: 'cseh korona',
      DJF: 'dzsibuti frank',
      DKK: 'dán korona',
      DOP: 'dominikai peso',
      DZD: 'algériai dínár',
      EGP: 'egyiptomi font',
      ERN: 'eritreai nakfa',
      ETB: 'etiópiai birr',
      EUR: 'euró',
      FJD: 'fidzsi dollár',
      FKP: 'falkland-szigeteki font',
      GBP: 'angol font',
      GEL: 'grúz lari',
      GHS: 'ghánai cedi',
      GIP: 'gibraltári font',
      GMD: 'gambiai dalasi',
      GNF: 'guineai frank',
      GTQ: 'guatemalai quetzal',
      GYD: 'guyanai dollár',
      HKD: 'hongkongi dollár',
      HNL: 'hodurasi lempira',
      HRK: 'horvát kuna',
      HTG: 'haiti gourde',
      HUF: 'magyar forint',
      IDR: 'indonéz rúpia',
      ILS: 'izraeli új sékel',
      INR: 'indiai rúpia',
      IQD: 'iraki dínár',
      IRR: 'iráni rial',
      ISK: 'izlandi korona',
      JMD: 'jamaicai dollár',
      JOD: 'jordániai dínár',
      JPY: 'japán jen',
      KES: 'kenyai shilling',
      KGS: 'kirgizisztáni szom',
      KHR: 'kambodzsai riel',
      KMF: 'comorei frank',
      KPW: 'észak-koreai won',
      KRW: 'dél-koreai won',
      KWD: 'kuvaiti dínár',
      KYD: 'kajmán-szigeteki dollár',
      KZT: 'kazahsztáni tenge',
      LAK: 'laoszi kip',
      LBP: 'libanoni font',
      LKR: 'Srí Lanka-i rúpia',
      LRD: 'libériai dollár',
      LSL: 'Lesothoi loti',
      LYD: 'líbiai dínár',
      MAD: 'marokkói dirham',
      MDL: 'moldován lei',
      MGA: 'madagaszkári ariary',
      MKD: 'macedon dínár',
      MMK: 'mianmari kyat',
      MNT: 'mongóliai tugrik',
      MOP: 'makaói pataca',
      MRU: 'mauritániai ouguiya',
      MUR: 'mauritiusi rúpia',
      MVR: 'maldív-szigeteki rufiyaa',
      MWK: 'malawi kwacha',
      MXN: 'mexikói peso',
      MYR: 'malajziai ringgit',
      MZN: 'mozambiki metikális',
      NAD: 'namíbiai dollár',
      NGN: 'nigériai naira',
      NIO: 'nicaraguai córdoba',
      NOK: 'norvég korona',
      NPR: 'nepáli rúpia',
      NZD: 'új-zélandi dollár',
      OMR: 'ománi rial',
      PAB: 'panamai balboa',
      PEN: 'perui sol',
      PGK: 'pápua új-guineai kina',
      PHP: 'fülöp-szigeteki peso',
      PKR: 'pakisztáni rúpia',
      PLN: 'lengyel zloty',
      PYG: 'paraguayi guarani',
      QAR: 'katari rial',
      RON: 'román lej',
      RSD: 'szerb dínár',
      RUB: 'orosz rubel',
      RWF: 'ruandai frank',
      SAR: 'szaúdi riyal',
      SBD: 'salamon-szigeteki dollár',
      SCR: 'seychelle-szigeteki rúpia',
      SDG: 'szudáni font',
      SEK: 'svéd korona',
      SGD: 'szingapúri dollár',
      SHP: 'Szent Ilona-i font',
      SLL: 'Sierra Leone-i leone',
      SOS: 'szomáli shilling',
      SRD: 'suriname-i dollár',
      STN: 'São Tomé és Príncipe-i dobra',
      SVC: 'Salvadori colón',
      SYP: 'szíriai font',
      SZL: 'szvázi lilangeni',
      THB: 'thai baht',
      TJS: 'tádzsikisztáni somoni',
      TMT: 'türkmenisztáni manat',
      TND: 'tunéziai dínár',
      TOP: 'tongai paanga',
      TRY: 'török líra',
      TTD: 'Trinidad és Tobago-i dollár',
      TWD: 'tajvani új dollár',
      TZS: 'tanzániai shilling',
      UAH: 'ukrán hrivnya',
      UGX: 'ugandai shilling',
      USD: 'USA-dollár',
      UYU: 'uruguay-i peso',
      UZS: 'üzbegisztáni szum',
      VND: 'vietnámi dong',
      VUV: 'vanuatui vatu',
      WST: 'nyugat-szamoai tala',
      XAF: 'CFA frank BEAC',
      XCD: 'kelet-karibi dollár',
      XDR: 'Special Drawing Rights',
      XOF: 'CFA frank BCEAO',
      XPF: 'csendes-óceáni valutaközösségi frank',
      XXX: 'ismeretlen pénznem',
      YER: 'jemeni rial',
      ZAR: 'dél-afrikai rand',
      ZMW: 'zambiai kwacha',
    },
  },

  hu_HU: {},
};

(function register() {
  Object.keys(HU).forEach((k) => {
    registerLocale(k, HU[k]);
  });
})();
