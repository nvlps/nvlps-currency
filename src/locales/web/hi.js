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

// Locale Data for HI
var HI = {
  hi: {
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
    np: '#,##,##0.###',
    cp: '¤#,##,##0.00',
    ap: '¤#,##,##0.00',
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
      THB: '฿',
    },
    cn: {
      AED: 'संयुक्त अरब अमीरात दिरहाम',
      AFN: 'अफ़गान अफ़गानी',
      ALL: 'अल्बानियाई लेक',
      AMD: 'आर्मेनियाई द्राम',
      ANG: 'नीदरलैंड एंटीलियन गिल्डर',
      AOA: 'अंगोला क्वांज़ा',
      ARS: 'अर्जेंटीनी पेसो',
      AUD: 'ऑस्ट्रेलियाई डॉलर',
      AWG: 'अरूबाई फ़्लोरिन',
      AZN: 'अज़रबैजानी मैनेट',
      BAM: 'बोस्निया हर्ज़ेगोविना परिवर्तनीय मार्क',
      BBD: 'बार्बेडियन डॉलर',
      BDT: 'बांग्लादेशी टका',
      BGN: 'बुल्गारियाई लेव',
      BHD: 'बहरीनी दिनार',
      BIF: 'बुरूंडी फ़्रैंक',
      BMD: 'बरमूडा डॉलर',
      BND: 'ब्रूनेई डॉलर',
      BOB: 'बोलिवियाई बोलिवियानो',
      BRL: 'ब्राज़ीली रियाल',
      BSD: 'बहामाई डॉलर',
      BTN: 'भूटानी नंगलट्रम',
      BWP: 'बोत्सवानियाई पुला',
      BYN: 'बेलारूसी रूबल',
      BZD: 'बेलीज़ डॉलर',
      CAD: 'कनाडाई डॉलर',
      CDF: 'कोंगोली फ़्रैंक',
      CHF: 'स्विस फ़्रैंक',
      CLP: 'चिली पेसो',
      CNY: 'चीनी युआन',
      COP: 'कोलंबियाई पेसो',
      CRC: 'कोस्टा रिका कोलोन',
      CUC: 'क्यूबाई परिवर्तनीय पेसो',
      CUP: 'क्यूबाई पेसो',
      CVE: 'केप वर्ड एस्कूडो',
      CZK: 'चेक गणराज्य कोरुना',
      DJF: 'जिबूती फ़्रैंक',
      DKK: 'डैनिश क्रोन',
      DOP: 'डोमिनिकन पेसो',
      DZD: 'अल्जीरियाई दिनार',
      EGP: 'मिस्र पाउंड',
      ERN: 'इरीट्रियन नाक्फ़ा',
      ETB: 'इथियोपियन बिर',
      EUR: 'यूरो',
      FJD: 'फ़िजी डॉलर',
      FKP: 'फ़ॉकलैंड द्वीपसमूह पाउंड',
      GBP: 'ब्रिटिश पाउंड स्टर्लिंग',
      GEL: 'जॉर्जियन लारी',
      GHS: 'घानियन सेडी',
      GIP: 'जिब्राल्टर पाउंड',
      GMD: 'गैंबियन डलासी',
      GNF: 'गिनीयन फ़्रैंक',
      GTQ: 'ग्वाटेमाला क्वेटज़ल',
      GYD: 'गयानीज़ डॉलर',
      HKD: 'हाँगकाँग डॉलर',
      HNL: 'होंडुरन लेम्पिरा',
      HRK: 'क्रोएशियाई कुना',
      HTG: 'हैतियाई गर्ड',
      HUF: 'हंगेरियन फ़ोरिंट',
      IDR: 'इंडोनेशियाई रुपिया',
      ILS: 'इज़राइली न्यू शेकेल',
      INR: 'भारतीय रुपया',
      IQD: 'इराकी दिनार',
      IRR: 'ईरानी रियाल',
      ISK: 'आइसलैंडिक क्रोना',
      JMD: 'जमैकन डॉलर',
      JOD: 'जॉर्डनियन दिनार',
      JPY: 'जापानी येन',
      KES: 'केन्याई शिलिंग',
      KGS: 'किर्गिस्तानी सोम',
      KHR: 'कंबोडियाई रियाल',
      KMF: 'कोमोरियन फ़्रैंक',
      KPW: 'उत्तर कोरियाई वॉन',
      KRW: 'दक्षिण कोरियाई वॉन',
      KWD: 'कुवैती दिनार',
      KYD: 'कैमेन द्वीपसमूह डॉलर',
      KZT: 'कज़ाखिस्तानी टेंज़',
      LAK: 'लाओशियन किप',
      LBP: 'लेबनानी पाउंड',
      LKR: 'श्रीलंकाई रुपया',
      LRD: 'लाइबेरियाई डॉलर',
      LSL: 'लेसोथो लोटी',
      LYD: 'लीबियाई दिनार',
      MAD: 'मोरक्को दिरहम',
      MDL: 'मोल्डोवन लियू',
      MGA: 'मालागासी आरियरी',
      MKD: 'मैसीडोनियन दिनार',
      MMK: 'म्यांमार क्याट',
      MNT: 'मंगोलियाई टगरिक',
      MOP: 'मेकानीज़ पाटाका',
      MRU: 'मॉरीटेनियन ओगुइया',
      MUR: 'मॉरिशियन रुपया',
      MVR: 'मालदीवी रुफ़िया',
      MWK: 'मालावियन क्वाचा',
      MXN: 'मैक्सिकन पेसो',
      MYR: 'मलेशियाई रिंगित',
      MZN: 'मोज़ाम्बिकन मेटिकल',
      NAD: 'नामीबियाई डॉलर',
      NGN: 'नाइजीरियाई नाइरा',
      NIO: 'निकारागुअन कोरडोबा',
      NOK: 'नॉर्वेजियन क्रोन',
      NPR: 'नेपाली रुपया',
      NZD: 'न्यूज़ीलैंड डॉलर',
      OMR: 'ओमानी रियाल',
      PAB: 'पनामेनियन बैल्बोआ',
      PEN: 'पेरूवियन सोल',
      PGK: 'पापुआ न्यू गिनीयन किना',
      PHP: 'फ़िलिपीनी पेसो',
      PKR: 'पाकिस्तानी रुपया',
      PLN: 'पोलिश ज़्लॉटी',
      PYG: 'पैराग्वियन गुआरानी',
      QAR: 'क़तरी रियाल',
      RON: 'रोमानियाई ल्यू',
      RSD: 'सर्बियन दिनार',
      RUB: 'रूसी रूबल',
      RWF: 'रवांडाई फ़्रैंक',
      SAR: 'सउदी रियाल',
      SBD: 'सोलोमन द्वीपसमूह डॉलर',
      SCR: 'सेशेल्सियाई रुपया',
      SDG: 'सूडानी पाउंड',
      SEK: 'स्वीडीश क्रोना',
      SGD: 'सिंगापुर डॉलर',
      SHP: 'सेंट हेलेना पाउंड',
      SLL: 'सिएरा लियोनियन लियोन',
      SOS: 'सोमाली शिलिंग',
      SRD: 'सूरीनामी डॉलर',
      STN: 'साओ टोम और प्रिंसिपे डोबरा',
      SYP: 'सीरियाई पाउंड',
      SZL: 'स्वाज़ी लिलांजेनी',
      THB: 'थाई बहत',
      TJS: 'ताजिकिस्तानी सोमोनी',
      TMT: 'तुर्कमेनिस्तानी मैनत',
      TND: 'ट्यूनीशियाई दिनार',
      TOP: 'टोंगन पांगा',
      TRY: 'तुर्की लीरा',
      TTD: 'त्रिनिदाद और टोबैगो डॉलर',
      TWD: 'नया ताईवानी डॉलर',
      TZS: 'तंज़ानियाई शिलिंग',
      UAH: 'यूक्रेनियन रिव्निया',
      UGX: 'युगांडाई शिलिंग',
      USD: 'यूएस डॉलर',
      UYU: 'उरुग्वियन पेसो',
      UZS: 'उज़्बेकिस्तानी सोम',
      VND: 'वियतनामी डोंग',
      VUV: 'वनुआतू वातू',
      WST: 'समोआई ताला',
      XAF: 'केंद्रीय अफ़्रीकी CFA फ़्रैंक',
      XCD: 'पूर्वी कैरिबियाई डॉलर',
      XOF: 'पश्चिमी अफ़्रीकी CFA फ़्रैंक',
      XPF: '[CFP] फ़्रैंक',
      XXX: 'अज्ञात मुद्रा',
      YER: 'यमनी रियाल',
      ZAR: 'दक्षिण अफ़्रीकी रैंड',
      ZMW: 'ज़ाम्बियन क्वाचा',
    },
  },

  hi_IN: {},
};

// Register the Locale Data with nvlps-currency
window.nvlps.registerLocales(HI);
