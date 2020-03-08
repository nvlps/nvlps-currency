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
  registerLocale('ar', {
    d: '.',
    g: ',',
    p: '‎+',
    m: '‎-',
    pc: '‎%‎',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'ليس رقمًا',
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
      USD: 'US$',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '***',
      AED: 'د.إ.‏',
      BHD: 'د.ب.‏',
      DZD: 'د.ج.‏',
      EGP: 'ج.م.‏',
      FKP: 'FKP',
      IQD: 'د.ع.‏',
      JOD: 'د.أ.‏',
      KPW: 'KPW',
      KWD: 'د.ك.‏',
      LBP: 'ل.ل.‏',
      LYD: 'د.ل.‏',
      MAD: 'د.م.‏',
      MRU: 'أ.م.',
      OMR: 'ر.ع.‏',
      QAR: 'ر.ق.‏',
      SAR: 'ر.س.‏',
      SHP: 'SHP',
      SYP: 'ل.س.‏',
      TND: 'د.ت.‏',
      YER: 'ر.ي.‏'
    },
    cn: {
      AED: 'درهم إماراتي',
      AFN: 'أفغاني',
      ALL: 'ليك ألباني',
      AMD: 'درام أرميني',
      ANG: 'غيلدر أنتيلي هولندي',
      AOA: 'كوانزا أنغولي',
      ARS: 'بيزو أرجنتيني',
      AUD: 'دولار أسترالي',
      AWG: 'فلورن أروبي',
      AZN: 'مانات أذربيجان',
      BAM: 'مارك البوسنة والهرسك قابل للتحويل',
      BBD: 'دولار بربادوسي',
      BDT: 'تاكا بنغلاديشي',
      BGN: 'ليف بلغاري',
      BHD: 'دينار بحريني',
      BIF: 'فرنك بروندي',
      BMD: 'دولار برمودي',
      BND: 'دولار بروناي',
      BOB: 'بوليفيانو بوليفي',
      BRL: 'ريال برازيلي',
      BSD: 'دولار باهامي',
      BTN: 'نولتوم بوتاني',
      BWP: 'بولا بتسواني',
      BYN: 'روبل بيلاروسي',
      BZD: 'دولار بليزي',
      CAD: 'دولار كندي',
      CDF: 'فرنك كونغولي',
      CHF: 'فرنك سويسري',
      CLP: 'بيزو تشيلي',
      CNY: 'يوان صيني',
      COP: 'بيزو كولومبي',
      CRC: 'كولن كوستاريكي',
      CUC: 'بيزو كوبي قابل للتحويل',
      CUP: 'بيزو كوبي',
      CVE: 'اسكودو الرأس الأخضر',
      CZK: 'كرونة تشيكية',
      DJF: 'فرنك جيبوتي',
      DKK: 'كرونة دنماركية',
      DOP: 'بيزو الدومنيكان',
      DZD: 'دينار جزائري',
      EGP: 'جنيه مصري',
      ERN: 'ناكفا أريتري',
      ETB: 'بير أثيوبي',
      EUR: 'يورو',
      FJD: 'دولار فيجي',
      FKP: 'جنيه جزر فوكلاند',
      GBP: 'جنيه إسترليني',
      GEL: 'لارى جورجي',
      GHS: 'سيدي غانا',
      GIP: 'جنيه جبل طارق',
      GMD: 'دلاسي غامبي',
      GNF: 'فرنك غينيا',
      GTQ: 'كوتزال غواتيمالا',
      GYD: 'دولار غيانا',
      HKD: 'دولار هونغ كونغ',
      HNL: 'ليمبيرا هنداروس',
      HRK: 'كونا كرواتي',
      HTG: 'جوردى هايتي',
      HUF: 'فورينت هنغاري',
      IDR: 'روبية إندونيسية',
      ILS: 'شيكل إسرائيلي جديد',
      INR: 'روبية هندي',
      IQD: 'دينار عراقي',
      IRR: 'ريال إيراني',
      ISK: 'كرونة أيسلندية',
      JMD: 'دولار جامايكي',
      JOD: 'دينار أردني',
      JPY: 'ين ياباني',
      KES: 'شلن كينيي',
      KGS: 'سوم قيرغستاني',
      KHR: 'رييال كمبودي',
      KMF: 'فرنك جزر القمر',
      KPW: 'وون كوريا الشمالية',
      KRW: 'وون كوريا الجنوبية',
      KWD: 'دينار كويتي',
      KYD: 'دولار جزر كيمن',
      KZT: 'تينغ كازاخستاني',
      LAK: 'كيب لاوسي',
      LBP: 'جنيه لبناني',
      LKR: 'روبية سريلانكية',
      LRD: 'دولار ليبيري',
      LSL: 'لوتي ليسوتو',
      LYD: 'دينار ليبي',
      MAD: 'درهم مغربي',
      MDL: 'ليو مولدوفي',
      MGA: 'أرياري مدغشقر',
      MKD: 'دينار مقدوني',
      MMK: 'كيات ميانمار',
      MNT: 'توغروغ منغولي',
      MOP: 'باتاكا ماكاوي',
      MRU: 'أوقية موريتانية',
      MUR: 'روبية موريشيوسية',
      MVR: 'روفيه جزر المالديف',
      MWK: 'كواشا مالاوي',
      MXN: 'بيزو مكسيكي',
      MYR: 'رينغيت ماليزي',
      MZN: 'متكال موزمبيقي',
      NAD: 'دولار ناميبي',
      NGN: 'نايرا نيجيري',
      NIO: 'قرطبة نيكاراغوا',
      NOK: 'كرونة نرويجية',
      NPR: 'روبية نيبالي',
      NZD: 'دولار نيوزيلندي',
      OMR: 'ريال عماني',
      PAB: 'بالبوا بنمي',
      PEN: 'سول بيروفي',
      PGK: 'كينا بابوا غينيا الجديدة',
      PHP: 'بيزو فلبيني',
      PKR: 'روبية باكستاني',
      PLN: 'زلوتي بولندي',
      PYG: 'غواراني باراغواي',
      QAR: 'ريال قطري',
      RON: 'ليو روماني',
      RSD: 'دينار صربي',
      RUB: 'روبل روسي',
      RWF: 'فرنك رواندي',
      SAR: 'ريال سعودي',
      SBD: 'دولار جزر سليمان',
      SCR: 'روبية سيشيلية',
      SDG: 'جنيه سوداني',
      SEK: 'كرونة سويدية',
      SGD: 'دولار سنغافوري',
      SHP: 'جنيه سانت هيلين',
      SLL: 'ليون سيراليوني',
      SOS: 'شلن صومالي',
      SRD: 'دولار سورينامي',
      STN: 'دوبرا ساو تومي وبرينسيبي',
      SVC: 'كولون سلفادوري',
      SYP: 'ليرة سورية',
      SZL: 'ليلانجيني سوازيلندي',
      THB: 'باخت تايلاندي',
      TJS: 'سوموني طاجيكستاني',
      TMT: 'مانات تركمانستان',
      TND: 'دينار تونسي',
      TOP: 'بانغا تونغا',
      TRY: 'ليرة تركية',
      TTD: 'دولار ترينداد وتوباغو',
      TWD: 'دولار تايواني',
      TZS: 'شلن تنزاني',
      UAH: 'هريفنيا أوكراني',
      UGX: 'شلن أوغندي',
      USD: 'دولار أمريكي',
      UYU: 'بيزو اوروغواي',
      UZS: 'سوم أوزبكستاني',
      VND: 'دونج فيتنامي',
      VUV: 'فاتو فانواتو',
      WST: 'تالا ساموا',
      XAF: 'فرنك وسط أفريقي',
      XCD: 'دولار شرق الكاريبي',
      XDR: 'حقوق السحب الخاصة',
      XOF: 'فرنك غرب أفريقي',
      XPF: 'فرنك سي إف بي',
      XXX: 'عملة غير معروفة',
      YER: 'ريال يمني',
      ZAR: 'راند جنوب أفريقيا',
      ZMW: 'كواشا زامبي'
    }
  });

  registerLocale('ar_AE', {});

  registerLocale('ar_BH', {});

  registerLocale('ar_DZ', {
    d: ',',
    g: '.'
  });

  registerLocale('ar_EG', {});

  registerLocale('ar_EH', {});

  registerLocale('ar_IQ', {});

  registerLocale('ar_JO', {});

  registerLocale('ar_KM', {
    cs: {
      KMF: 'CF'
    }
  });

  registerLocale('ar_KW', {});

  registerLocale('ar_LB', {
    d: ',',
    g: '.'
  });

  registerLocale('ar_LY', {
    d: ',',
    g: '.'
  });

  registerLocale('ar_MA', {
    d: ',',
    g: '.'
  });

  registerLocale('ar_MR', {
    d: ',',
    g: '.'
  });

  registerLocale('ar_OM', {});

  registerLocale('ar_PS', {});

  registerLocale('ar_QA', {});

  registerLocale('ar_SA', {});

  registerLocale('ar_SD', {});

  registerLocale('ar_SS', {
    cs: {
      GBP: 'GB£'
    }
  });

  registerLocale('ar_SY', {});

  registerLocale('ar_TN', {
    d: ',',
    g: '.'
  });

  registerLocale('ar_YE', {});
})();
