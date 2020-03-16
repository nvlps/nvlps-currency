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

const AM = {
  am: {
    d: '.',
    g: ',',
    p: '+',
    m: '-',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'NaN',
    np: '#,##0.###',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00;(¤#,##0.00)',
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
      ETB: 'ብር',
      THB: '฿',
    },
    cn: {
      AED: 'የተባበሩት የአረብ ኤምሬትስ ድርሀም',
      AFN: 'የአፍጋን አፍጋኒ',
      ALL: 'የአልባንያ ሌክ',
      AMD: 'የአርመን ድራም',
      ANG: 'ኔዘርላንድስ አንቲሊአን ጊልደር',
      AOA: 'የአንጎላ ኩዋንዛ',
      ARS: 'የአርጀንቲና ፔሶ',
      AUD: 'የአውስትራሊያ ዶላር',
      AWG: 'አሩባን ፍሎሪን',
      AZN: 'የአዛርባጃን ማናት',
      BAM: 'የቦስኒያ ሄርዞጎቪና የሚመነዘር ማርክ',
      BBD: 'የባርቤዶስ ዶላር',
      BDT: 'የባንግላዲሽ ታካ',
      BGN: 'የቡልጋሪያ ሌቭ',
      BHD: 'የባኽሬን ዲናር',
      BIF: 'የብሩንዲ ፍራንክ',
      BMD: 'የቤርሙዳ ዶላር',
      BND: 'የብሩኔ ዶላር',
      BOB: 'የቦሊቪያ ቦሊቪያኖ',
      BRL: 'የብራዚል ሪል',
      BSD: 'የባሃማስ ዶላር',
      BTN: 'ብሁታኒዝ ንጉልትረም',
      BWP: 'የቦትስዋና ፑላ',
      BYN: 'የቤላሩስያ ሩብል',
      BZD: 'የቤሊዝ ዶላር',
      CAD: 'የካናዳ ዶላር',
      CDF: 'የኮንጐ ፍራንክ ኮንጐሌዝ',
      CHF: 'የስዊስ ፍራንክ',
      CLP: 'የቺሊ ፔሶ',
      CNY: 'የቻይና የን',
      COP: 'የኮሎምቢያ ፔሶ',
      CRC: 'የኮስታሪካ ኮሎን',
      CUC: 'የኩባ የሚመነዘር ፔሶ',
      CUP: 'የኩባ ፔሶ',
      CVE: 'የኬፕ ቫርዲ ኤስኩዶ',
      CZK: 'ቼክ ሪፐብሊክ ኮሩና',
      DJF: 'የጅቡቲ ፍራንክ',
      DKK: 'የዴንማርክ ክሮን',
      DOP: 'የዶሚኒክ ፔሶ',
      DZD: 'የአልጄሪያ ዲናር',
      EGP: 'የግብጽ ፓውንድ',
      ERN: 'የኤርትራ ናቅፋ',
      ETB: 'የኢትዮጵያ ብር',
      EUR: 'ዩሮ',
      FJD: 'የፊጂ ዶላር',
      FKP: 'የፎክላንድ ደሴቶች ፓውንድ',
      GBP: 'የእንግሊዝ ፓውንድ ስተርሊንግ',
      GEL: 'የጆርጅያ ላሪ',
      GHS: 'የጋና ሲዲ',
      GIP: 'ጂብራልተር ፓውንድ',
      GMD: 'የጋምቢያ ዳላሲ',
      GNF: 'የጊኒ ፍራንክ',
      GTQ: 'ጓቲማላን ኩቲዛል',
      GYD: 'የጉየና ዶላር',
      HKD: 'የሆንግኮንግ ዶላር',
      HNL: 'የሃንዱራ ሌምፓአይራ',
      HTG: 'የሃያቲ ጓርዴ',
      HUF: 'የሃንጋሪያን ፎሪንት',
      IDR: 'የኢንዶኔዥያ ሩፒሃ',
      ILS: 'የእስራኤል አዲስ ሽቅል',
      INR: 'የሕንድ ሩፒ',
      IQD: 'የኢራቅ ዲናር',
      IRR: 'የኢራን ሪአል',
      ISK: 'የአይስላንድ ክሮና',
      JMD: 'የጃማይካ ዶላር',
      JOD: 'የጆርዳን ዲናር',
      JPY: 'የጃፓን የን',
      KES: 'የኬኒያ ሺሊንግ',
      KGS: 'የኪርጊስታን ሶም',
      KHR: 'የካምቦዲያ ሬል',
      KMF: 'የኮሞሮ ፍራንክ',
      KPW: 'የሰሜን ኮሪያ ዎን',
      KRW: 'የደቡብ ኮሪያ ዎን',
      KWD: 'የኩዌት ዲናር',
      KYD: 'የካይማን ደሴቶች ዶላር',
      KZT: 'የካዛኪስታን ተንጌ',
      LAK: 'የላኦቲ ኪፕ',
      LBP: 'የሊባኖስ ፓውንድ',
      LKR: 'የሲሪላንካ ሩፒ',
      LRD: 'የላይቤሪያ ዶላር',
      LSL: 'የሌሶቶ ሎቲ',
      LYD: 'የሊቢያ ዲናር',
      MAD: 'የሞሮኮ ዲርሀም',
      MDL: 'ሞልዶቫን ሊኡ',
      MGA: 'የማደጋስካር ማላጋስይ አሪያርይ',
      MKD: 'የሜቆድንያ ዲናር',
      MMK: 'የማያናማር ክያት',
      MNT: 'የሞንጎሊያን ቱግሪክ',
      MOP: 'የማካኔዝ ፓታካ',
      MRU: 'የሞሪቴኒያ ኦውጉያ',
      MUR: 'የሞሪሸስ ሩፒ',
      MVR: 'የማልዲቫ ሩፊያ',
      MWK: 'የማላዊ ኩዋቻ',
      MXN: 'የሜክሲኮ ፔሶ',
      MYR: 'የማሌዥያ ሪንጊት',
      MZN: 'የሞዛምቢክ ሜቲካል',
      NAD: 'የናሚቢያ ዶላር',
      NGN: 'የናይጄሪያ ናይራ',
      NIO: 'የኒካራጓ ኮርዶባ',
      NOK: 'የኖርዌይ ክሮን',
      NPR: 'የኔፓል ሩፒ',
      NZD: 'የኒውዚላንድ ዶላር',
      OMR: 'የኦማን ሪአል',
      PAB: 'ፓናማኒአን ባልቦአ',
      PEN: 'የፔሩቪያ ሶል',
      PGK: 'የፓፕዋ ኒው ጊኒ ኪና',
      PHP: 'የፊሊፒንስ ፔሶ',
      PKR: 'የፓኪስታን ሩፒ',
      PLN: 'የፖላንድ ዝሎቲ',
      PYG: 'የፓራጓይ ጉአራኒ',
      QAR: 'የኳታር ሪአል',
      RON: 'የሮማኒያ ለው',
      RSD: 'የሰርቢያ ዲናር',
      RUB: 'የሩስያ ሩብል',
      RWF: 'የሩዋንዳ ፍራንክ',
      SAR: 'የሳውዲ ሪያል',
      SBD: 'የሰለሞን ደሴቶች ዶላር',
      SCR: 'የሲሼል ሩፒ',
      SDG: 'የሱዳን ፓውንድ',
      SEK: 'የስዊድን ክሮና',
      SGD: 'የሲንጋፖር ዶላር',
      SHP: 'የሴይንት ሔሌና ፓውንድ',
      SLL: 'የሴራሊዎን ሊዎን',
      SOS: 'የሶማሌ ሺሊንግ',
      SRD: 'የሰርናሜዝ ዶላር',
      STN: 'የሳኦ ቶሜ እና ፕሪንሲፔ ዶብራ',
      SYP: 'የሲሪያ ፓውንድ',
      SZL: 'የስዋዚላንድ ሊላንገኒ',
      THB: 'የታይላንድ ባህት',
      TJS: 'የታጂክስታን ሶሞኒ',
      TMT: 'ቱርክሜኒስታኒ ማናት',
      TND: 'የቱኒዚያ ዲናር',
      TOP: 'ቶንጋን ፓ’አንጋ',
      TRY: 'የቱርክ ሊራ',
      TTD: 'የትሪንዳድ እና ቶቤጎዶላር',
      TWD: 'የአዲሷ ታይዋን ዶላር',
      TZS: 'የታንዛኒያ ሺሊንግ',
      UAH: 'የዩክሬን ሀሪይቭኒአ',
      UGX: 'የዩጋንዳ ሺሊንግ',
      USD: 'የአሜሪካን ዶላር',
      UYU: 'የኡራጓይ ፔሶ',
      UZS: 'የኡዝፔኪስታን ሶም',
      VND: 'የቭየትናም ዶንግ',
      VUV: 'የቫንዋንቱ ቫቱ',
      WST: 'ሳሞአን ታላ',
      XAF: 'የመካከለኛው አፍሪካ ሴፋ ፍራንክ',
      XCD: 'የምዕራብ ካሪብያን ዶላር',
      XOF: 'የምዕራብ አፍሪካ ሴፋ ፍራንክ',
      XPF: 'ሲ ኤፍ ፒ ፍራንክ',
      XXX: 'ያልታወቀ ገንዘብ',
      YER: 'የየመን ሪአል',
      ZAR: 'የደቡብ አፍሪካ ራንድ',
      ZMW: 'የዛምቢያ ክዋቻ',
    },
  },

  am_ET: {
    c: 'ETB',
  },
};

registerLocales(AM);

export default AM;
