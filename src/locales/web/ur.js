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

// Locale Data for UR
var UR = {
  ur: {
    d: '.',
    g: ',',
    p: '‎+',
    m: '‎-',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'NaN',
    np: '#,##0.###',
    cp: '¤ #,##0.00',
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
      USD: '$',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      PKR: 'Rs',
      THB: '฿',
    },
    cn: {
      AED: 'متحدہ عرب اماراتی درہم',
      AFN: 'افغان افغانی',
      ALL: 'البانیا کا لیک',
      AMD: 'آرمینیائی ڈرم',
      ANG: 'نیدر لینڈز انٹیلیئن گلڈر',
      AOA: 'انگولا کا کوانزا',
      ARS: 'ارجنٹائن پیسہ',
      AUD: 'آسٹریلین ڈالر',
      AWG: 'اروبن فلورِن',
      AZN: 'آذربائجانی منات',
      BAM: 'بوسنیا ہرزیگووینا کا قابل منتقلی نشان',
      BBD: 'باربیڈین ڈالر',
      BDT: 'بنگلہ دیشی ٹکا',
      BGN: 'بلغارین لیو',
      BHD: 'بحرینی دینار',
      BIF: 'برونڈیئن فرانک',
      BMD: 'برموڈا ڈالر',
      BND: 'برونئی ڈالر',
      BOB: 'بولیوین بولیویانو',
      BRL: 'برازیلی ریئل',
      BSD: 'بہامانی ڈالر',
      BTN: 'بھوٹانی گُلٹرم',
      BWP: 'بوتسوانا کا پولا',
      BYN: 'بیلاروسی روبل',
      BZD: 'بیلیز ڈالر',
      CAD: 'کنیڈین ڈالر',
      CDF: 'کانگولیز فرانک',
      CHF: 'سوئس فرانکس',
      CLP: 'چلّین پیسہ',
      CNY: 'چینی یوآن',
      COP: 'کولمبین پیسہ',
      CRC: 'کوسٹا ریکا کا کولن',
      CUC: 'کیوبا کا قابل منتقلی پیسو',
      CUP: 'کیوبا کا پیسو',
      CVE: 'کیپ ورڈی کا اسکیوڈو',
      CZK: 'چیک کرونا',
      DJF: 'جبوتی فرانک',
      DKK: 'ڈنمارک کرون',
      DOP: 'ڈومنیکن پیسو',
      DZD: 'الجیریائی دینار',
      EGP: 'مصری پاؤنڈ',
      ERN: 'اریٹیریا کا نافکا',
      ETB: 'ایتھوپیائی بِرّ',
      EUR: 'یورو',
      FJD: 'فجی کا ڈالر',
      FKP: 'فاکلینڈ آئلینڈز پونڈ',
      GBP: 'برطانوی پاؤنڈ',
      GEL: 'جارجیائی لاری',
      GHS: 'گھانا کا سیڈی',
      GIP: 'جبل الطارق پونڈ',
      GMD: 'گامبیا کا ڈلاسی',
      GNF: 'گنی فرانک',
      GTQ: 'گواٹے مالا کا کوئٹزل',
      GYD: 'گویانیز ڈالر',
      HKD: 'ھانگ کانگ ڈالر',
      HNL: 'ہونڈوران لیمپیرا',
      HRK: 'کروشین کونا',
      HTG: 'ہیتی کا گؤرڈی',
      HUF: 'ہنگرین فورنٹ',
      IDR: 'انڈونیشین روپیہ',
      ILS: 'اسرائیلی نیا شیکل',
      INR: 'بھارتی روپیہ',
      IQD: 'عراقی دینار',
      IRR: 'ایرانی ریال',
      ISK: 'آئس لينڈی کرونا',
      JMD: 'جمائیکن ڈالر',
      JOD: 'اردنی دینار',
      JPY: 'جاپانی ین',
      KES: 'کینیائی شلنگ',
      KGS: 'کرغستانی سوم',
      KHR: 'کمبوڈیائی ریئل',
      KMF: 'کوموریئن فرانک',
      KPW: 'شمالی کوریائی وون',
      KRW: 'جنوبی کوریائی وون',
      KWD: 'کویتی دینار',
      KYD: 'کیمین آئلینڈز ڈالر',
      KZT: 'قزاخستانی ٹینگ',
      LAK: 'لاؤشیائی کِپ',
      LBP: 'لبنانی پونڈ',
      LKR: 'سری لنکائی روپیہ',
      LRD: 'لائبریائی ڈالر',
      LSL: 'لیسوتھو لوٹی',
      LYD: 'لیبیائی دینار',
      MAD: 'مراکشی درہم',
      MDL: 'مالدووی لیو',
      MGA: 'ملاگاسی اریاری',
      MKD: 'مقدونیائی دینار',
      MMK: 'میانمار کیاٹ',
      MNT: 'منگولیائی ٹگرِ',
      MOP: 'میکانیز پٹاکا',
      MRU: 'موریطانیائی اوگوئیا',
      MUR: 'ماریشس کا روپیہ',
      MVR: 'مالدیپ کا روفیہ',
      MWK: 'ملاوی کواچا',
      MXN: 'میکسیکی پیسہ',
      MYR: 'ملیشیائی رنگِٹ',
      MZN: 'موزامبیقی میٹیکل',
      NAD: 'نامیبیائی ڈالر',
      NGN: 'نائیجیریائی نائرا',
      NIO: 'نکارا گوا کا کورڈوبا',
      NOK: 'ناروے کرون',
      NPR: 'نیپالی روپیہ',
      NZD: 'نیوزی لینڈ ڈالر',
      OMR: 'عمانی ریال',
      PAB: 'پنامہ کا بالبوآ',
      PEN: 'پیروویئن سول',
      PGK: 'پاپوآ نیو گنی کا کینا',
      PHP: 'فلپائینی پیسہ',
      PKR: 'پاکستانی روپیہ',
      PLN: 'پولش زلوٹی',
      PYG: 'پیراگوئے کا گوآرنی',
      QAR: 'قطری ریال',
      RON: 'رومانیائی لیو',
      RSD: 'سربین دینار',
      RUB: 'روسی روبل',
      RWF: 'روانڈا کا فرانک',
      SAR: 'سعودی ریال',
      SBD: 'سولومن آئلینڈز ڈالر',
      SCR: 'سشلی کا روپیہ',
      SDG: 'سوڈانی پاؤنڈ',
      SEK: 'سویڈن کرونا',
      SGD: 'سنگا پور ڈالر',
      SHP: 'سینٹ ہیلینا پاؤنڈ',
      SLL: 'سیئرا لیون لیون',
      SOS: 'صومالی شلنگ',
      SRD: 'سورینامی ڈالر',
      STN: 'ساؤ ٹومے اور پرنسپے ڈوبرا',
      SYP: 'شامی پونڈ',
      SZL: 'سوازی لیلانجینی',
      THB: 'تھائی باہت',
      TJS: 'تاجکستانی سومونی',
      TMT: 'ترکمانستانی منات',
      TND: 'تیونیسیائی دینار',
      TOP: 'ٹونگن پانگا',
      TRY: 'ترکی لیرا',
      TTD: 'ترینیداد اور ٹوباگو کا ڈالر',
      TWD: 'نیو تائیوان ڈالر',
      TZS: 'تنزانیائی شلنگ',
      UAH: 'یوکرینیائی ہریونیا',
      UGX: 'یوگانڈا شلنگ',
      USD: 'امریکی ڈالر',
      UYU: 'یوروگویان پیسو',
      UZS: 'ازبکستانی سوم',
      VND: 'ویتنامی ڈانگ',
      VUV: 'وینوواتو واتو',
      WST: 'ساموآ کا ٹالا',
      XAF: 'وسطی افریقی [CFA] فرانک',
      XCD: 'مشرقی کریبیا کا ڈالر',
      XOF: 'مغربی افریقی [CFA] فرانک',
      XPF: 'CFP فرانک',
      XXX: 'نامعلوم کرنسی',
      YER: 'یمنی ریال',
      ZAR: 'جنوبی افریقی رانڈ',
      ZMW: 'زامبیائی کواچا',
    },
  },

  ur_PK: {},
};

// Register the Locale Data with nvlps-currency
window.nvlps.registerLocales(UR);
