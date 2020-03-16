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

/* Generated by gen_ccy_l10n.py */

// Find nvlps if it was loaded into the root namespace
if (
  typeof window.nvlps === 'undefined' ||
  typeof window.nvlps.registerLocales !== 'function'
) {
  throw 'The nvlps-currency library must be imported into the "nvlps" namespace prior to including this localization module';
}

// Locale Data for PL
var PL = {
  pl: {
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
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
    cs: {
      AUD: 'AUD',
      BRL: 'R$',
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
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      PLN: 'zł',
    },
    cn: {
      AED: 'dirham ZEA',
      AFN: 'afgani afgańskie',
      ALL: 'lek albański',
      AMD: 'dram armeński',
      ANG: 'gulden antylski',
      AOA: 'kwanza angolska',
      ARS: 'peso argentyńskie',
      AUD: 'dolar australijski',
      AWG: 'florin arubański',
      AZN: 'manat azerski',
      BAM: 'marka zamienna Bośni i Hercegowiny',
      BBD: 'dolar Barbadosu',
      BDT: 'taka bengalska',
      BGN: 'lew bułgarski',
      BHD: 'dinar bahrański',
      BIF: 'frank burundyjski',
      BMD: 'dolar bermudzki',
      BND: 'dolar brunejski',
      BOB: 'boliviano boliwijskie',
      BRL: 'real brazylijski',
      BSD: 'dolar bahamski',
      BTN: 'ngultrum bhutański',
      BWP: 'pula botswańska',
      BYN: 'rubel białoruski',
      BZD: 'dolar belizeński',
      CAD: 'dolar kanadyjski',
      CDF: 'frank kongijski',
      CHF: 'frank szwajcarski',
      CLP: 'peso chilijskie',
      CNY: 'juan chiński',
      COP: 'peso kolumbijskie',
      CRC: 'colon kostarykański',
      CUC: 'peso kubańskie wymienialne',
      CUP: 'peso kubańskie',
      CVE: 'escudo zielonoprzylądkowe',
      CZK: 'korona czeska',
      DJF: 'frank dżibutyjski',
      DKK: 'korona duńska',
      DOP: 'peso dominikańskie',
      DZD: 'dinar algierski',
      EGP: 'funt egipski',
      ERN: 'nakfa erytrejska',
      ETB: 'birr etiopski',
      EUR: 'euro',
      FJD: 'dolar fidżyjski',
      FKP: 'funt falklandzki',
      GBP: 'funt szterling',
      GEL: 'lari gruzińskie',
      GHS: 'cedi ghańskie',
      GIP: 'funt gibraltarski',
      GMD: 'dalasi gambijskie',
      GNF: 'frank gwinejski',
      GTQ: 'quetzal gwatemalski',
      GYD: 'dolar gujański',
      HKD: 'dolar hongkoński',
      HNL: 'lempira honduraska',
      HRK: 'kuna chorwacka',
      HTG: 'gourde haitański',
      HUF: 'forint węgierski',
      IDR: 'rupia indonezyjska',
      ILS: 'nowy szekel izraelski',
      INR: 'rupia indyjska',
      IQD: 'dinar iracki',
      IRR: 'rial irański',
      ISK: 'korona islandzka',
      JMD: 'dolar jamajski',
      JOD: 'dinar jordański',
      JPY: 'jen japoński',
      KES: 'szyling kenijski',
      KGS: 'som kirgiski',
      KHR: 'riel kambodżański',
      KMF: 'frank komoryjski',
      KPW: 'won północnokoreański',
      KRW: 'won południowokoreański',
      KWD: 'dinar kuwejcki',
      KYD: 'dolar kajmański',
      KZT: 'tenge kazachskie',
      LAK: 'kip laotański',
      LBP: 'funt libański',
      LKR: 'rupia lankijska',
      LRD: 'dolar liberyjski',
      LSL: 'loti Lesoto',
      LYD: 'dinar libijski',
      MAD: 'dirham marokański',
      MDL: 'lej mołdawski',
      MGA: 'ariary malgaski',
      MKD: 'denar macedoński',
      MMK: 'kiat birmański',
      MNT: 'tugrik mongolski',
      MOP: 'pataca Makau',
      MRU: 'ugija mauretańska',
      MUR: 'rupia maurytyjska',
      MVR: 'rupia malediwska',
      MWK: 'kwacha malawijska',
      MXN: 'peso meksykańskie',
      MYR: 'ringgit malezyjski',
      MZN: 'metical mozambicki',
      NAD: 'dolar namibijski',
      NGN: 'naira nigeryjska',
      NIO: 'cordoba nikaraguańska',
      NOK: 'korona norweska',
      NPR: 'rupia nepalska',
      NZD: 'dolar nowozelandzki',
      OMR: 'rial omański',
      PAB: 'balboa panamski',
      PEN: 'sol peruwiański',
      PGK: 'kina papuańska',
      PHP: 'peso filipińskie',
      PKR: 'rupia pakistańska',
      PLN: 'złoty polski',
      PYG: 'guarani paragwajskie',
      QAR: 'rial katarski',
      RON: 'lej rumuński',
      RSD: 'dinar serbski',
      RUB: 'rubel rosyjski',
      RWF: 'frank ruandyjski',
      SAR: 'rial saudyjski',
      SBD: 'dolar Wysp Salomona',
      SCR: 'rupia seszelska',
      SDG: 'funt sudański',
      SEK: 'korona szwedzka',
      SGD: 'dolar singapurski',
      SHP: 'funt Świętej Heleny',
      SLL: 'leone sierraleoński',
      SOS: 'szyling somalijski',
      SRD: 'dolar surinamski',
      STN: 'dobra Wysp Świętego Tomasza i Książęcej',
      SVC: 'colon salwadorski',
      SYP: 'funt syryjski',
      SZL: 'lilangeni Suazi',
      THB: 'baht tajski',
      TJS: 'somoni tadżyckie',
      TMT: 'manat turkmeński',
      TND: 'dinar tunezyjski',
      TOP: 'pa’anga tongijska',
      TRY: 'lira turecka',
      TTD: 'dolar Trynidadu i Tobago',
      TWD: 'nowy dolar tajwański',
      TZS: 'szyling tanzański',
      UAH: 'hrywna ukraińska',
      UGX: 'szyling ugandyjski',
      USD: 'dolar amerykański',
      UYU: 'peso urugwajskie',
      UZS: 'som uzbecki',
      VND: 'dong wietnamski',
      VUV: 'vatu wanuackie',
      WST: 'tala samoańskie',
      XAF: 'frank CFA BEAC',
      XCD: 'dolar wschodniokaraibski',
      XDR: 'specjalne prawa ciągnienia',
      XOF: 'frank CFA',
      XPF: 'frank CFP',
      XXX: 'nieznana waluta',
      YER: 'rial jemeński',
      ZAR: 'rand południowoafrykański',
      ZMW: 'kwacha zambijska',
    },
  },

  pl_PL: {},
};

// Register the Locale Data with nvlps-currency
window.nvlps.registerLocales(PL);
