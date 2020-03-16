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

import { registerLocales } from 'nvlps-currency-core';

const LO = {
  lo: {
    d: ',',
    g: '.',
    p: '+',
    m: '-',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'ບໍ່​ແມ່ນ​ໂຕ​ເລກ',
    np: '#,##0.###',
    cp: '¤#,##0.00;¤-#,##0.00',
    ap: '¤#,##0.00;¤-#,##0.00',
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
      XXX: '¤',
      AED: 'AED',
      AFN: 'AFN',
      ALL: 'ALL',
      AMD: 'AMD',
      ANG: 'ANG',
      AOA: 'AOA',
      ARS: 'ARS',
      AWG: 'AWG',
      AZN: 'AZN',
      BAM: 'BAM',
      BBD: 'BBD',
      BDT: 'BDT',
      BGN: 'BGN',
      BHD: 'BHD',
      BIF: 'BIF',
      BMD: 'BMD',
      BND: 'BND',
      BOB: 'BOB',
      BSD: 'BSD',
      BTN: 'BTN',
      BWP: 'BWP',
      BYN: 'BYN',
      BZD: 'BZD',
      CDF: 'CDF',
      CHF: 'CHF',
      CLP: 'CLP',
      CRC: 'CRC',
      CUC: 'CUC',
      CUP: 'CUP',
      CVE: 'CVE',
      CZK: 'CZK',
      DJF: 'DJF',
      DKK: 'DKK',
      DOP: 'DOP',
      DZD: 'DZD',
      EGP: 'EGP',
      ERN: 'ERN',
      ETB: 'ETB',
      FKP: 'FKP',
      GEL: 'GEL',
      GHS: 'GHS',
      GIP: 'GIP',
      GMD: 'GMD',
      GNF: 'GNF',
      GTQ: 'GTQ',
      GYD: 'GYD',
      HNL: 'HNL',
      HRK: 'HRK',
      HTG: 'HTG',
      HUF: 'HUF',
      IDR: 'IDR',
      IQD: 'IQD',
      IRR: 'IRR',
      ISK: 'ISK',
      JMD: 'JMD',
      JOD: 'JOD',
      KES: 'KES',
      KGS: 'KGS',
      KHR: 'KHR',
      KMF: 'KMF',
      KPW: 'KPW',
      KWD: 'KWD',
      KYD: 'KYD',
      KZT: 'KZT',
      LAK: '₭',
      LBP: 'LBP',
      LKR: 'LKR',
      LRD: 'LRD',
      LYD: 'LYD',
      MAD: 'MAD',
      MDL: 'MDL',
      MGA: 'MGA',
      MKD: 'MKD',
      MMK: 'MMK',
      MNT: 'MNT',
      MOP: 'MOP',
      MUR: 'MUR',
      MVR: 'MVR',
      MWK: 'MWK',
      MYR: 'MYR',
      MZN: 'MZN',
      NAD: 'NAD',
      NGN: 'NGN',
      NIO: 'NIO',
      NOK: 'NOK',
      NPR: 'NPR',
      OMR: 'OMR',
      PAB: 'PAB',
      PEN: 'PEN',
      PGK: 'PGK',
      PHP: 'PHP',
      PKR: 'PKR',
      PLN: 'PLN',
      PYG: 'PYG',
      QAR: 'QAR',
      RON: 'RON',
      RSD: 'RSD',
      RUB: 'RUB',
      RWF: 'RWF',
      SAR: 'SAR',
      SBD: 'SBD',
      SCR: 'SCR',
      SDG: 'SDG',
      SEK: 'SEK',
      SGD: 'SGD',
      SHP: 'SHP',
      SLL: 'SLL',
      SOS: 'SOS',
      SRD: 'SRD',
      SYP: 'SYP',
      SZL: 'SZL',
      THB: '฿',
      TJS: 'TJS',
      TMT: 'TMT',
      TND: 'TND',
      TOP: 'TOP',
      TRY: 'TRY',
      TTD: 'TTD',
      TZS: 'TZS',
      UAH: 'UAH',
      UGX: 'UGX',
      UYU: 'UYU',
      UZS: 'UZS',
      VUV: 'VUV',
      WST: 'WST',
      YER: 'YER',
      ZAR: 'ZAR',
      ZMW: 'ZMW',
    },
    cn: {
      AED: 'ສະ​ຫະ​ລັດ​ອາ​ຣັບ​ອາ​ມິ​ເຣດ ເດີ​ແຮມ',
      AFN: 'ອັຟ​ກັນ ອັຟ​ກາ​ນິ',
      ALL: 'ອັລ​ບາ​ນຽນ ເລກ',
      AMD: 'ອາ​ເມ​ນຽນ ແດຣມ',
      ANG: 'ເນ​ເທີ​ແລນ ແອນ​ຕິ​ລຽນ ກິວ​ເດີ',
      AOA: 'ແອງ​ໂກ​ລັນ ຄວນ​ຊາ',
      ARS: 'ອາ​ເຈນ​ທິ​ນາ ເປ​ໂຊ',
      AUD: 'ອອສ​ເຕຣ​ລຽນ ໂດ​ລ່າ',
      AWG: 'ອະຣູແບນ ຟລໍຣິນ',
      AZN: 'ອາ​ເຊີ​ໄບ​ຈາ​ນິ ມາ​ນັດ',
      BAM: 'ບອ​ສ​ເນຍ-ເຮີ​ເຊ​ໂກວິ​ນາ ຄອນ​ເວີດ​ຕິ​ໂບ ມາກ',
      BBD: 'ໂດລ່າ ບາບາດຽນ',
      BDT: 'ບັງ​ຄລາ​ເທດ ຕາ​ກາ',
      BGN: 'ບັງ​ກາ​ຣຽນ ເລບ',
      BHD: 'ບາ​ໄຣ​ນິ ດິ​ນາ',
      BIF: 'ບຸ​ຣັນ​ດຽນ ຟຣັງ',
      BMD: 'ໂດ​ລ່າ​ເບີ​ມິວ​ດາ',
      BND: 'ບຣູ​ໄນ ໂດ​ລ່າ',
      BOB: 'ໂບ​ລິ​ວຽນ ໂບ​ລິ​ເວຍ​ໂນ',
      BRL: 'ບຣາ​ຊິ​ລຽນ ຣຽວ',
      BSD: 'ໂດລ່າ ບາຮາມຽນ',
      BTN: 'ພູ​ຖານ ງຸນດຣັມ',
      BWP: 'ບອດ​ສະ​ວາ​ນານ ພູ​ລາ',
      BYN: 'ເບ​ລາ​ຣຸ​ສ​ຊຽນ ຣູ​ເບິນ',
      BZD: 'ໂດ​ລ່າ​ເບ​ລີຊ',
      CAD: 'ໂດລ່າແຄນາດາ',
      CDF: 'ຄອງ​ໂກ​ລີສ ຟຣັງ',
      CHF: 'ສະ​ວິ​ສ ຟ​ຣັງ',
      CLP: 'ຊິ​ລຽນ ເປ​ໂຊ',
      CNY: 'ຈີນ ຢວນ',
      COP: 'ໂຄ​ລົມ​ບຽນ ເປ​ໂຊ',
      CRC: 'ໂຄສຕາ ຣິກັນ ໂຄລອນ',
      CUC: 'ຄິວແບນ ຄອນເວີດຕິໂບ ເປໂຊ',
      CUP: 'ຄິວແບນ ເປໂຊ',
      CVE: 'ເຄບ ເວີດ​ດີນ ເອ​ສ​ຄູ​ໂດ',
      CZK: 'ເຊກ ໂຄ​ຣູ​ນາ',
      DJF: '​ດິ​ບູ​ຈຽນ ຟຣັງ',
      DKK: 'ແດນ​ນິ​ຊ ໂຄຣນ',
      DOP: 'ໂດ​ມິ​ນິ​ກັນ ເປ​ໂຊ',
      DZD: 'ອັລ​ເຈີ​ຣຽນ ດິ​ນາ',
      EGP: 'ອີ​ຢິບ​ທຽນ ພາວດ໌',
      ERN: 'ອິ​ຣິ​ທຣຽນ ແນກ​ຟ​າ',
      ETB: 'ເອ​ທິ​ໂອ​ປຽນ ເບີ​ຣ໌',
      EUR: 'ຢູ​ໂຣ',
      FJD: 'ຟິ​ຈຽນ ໂດ​ລ່າ',
      FKP: 'ຟອ​ລ໌ກ​ແລນ ໄອ​ແລນ​ສ໌ ພາວ​ດ໌',
      GBP: 'ອັງກິດ ປອນ',
      GEL: 'ຈໍ​ຈຽນ ລາ​ຣິ',
      GHS: 'ກາ​ນາ​ອຽນ ເຊ​ດິ',
      GIP: 'ກິບ​ຣາ​ທາ ພາ​ວດ໌',
      GMD: '​ແກມ​ບຽນ ດາ​ລາ​ຊິ',
      GNF: 'ກິ​ນຽນ ຟຣັງ',
      GTQ: 'ກົວເຕມາລານ ເຄັດຊອນ',
      GYD: 'ກາຍ​ຢາ​ນີ​ສ ໂດ​ລ່າ',
      HKD: 'ຮອງ​ກົງ ໂດ​ລ່າ',
      HNL: 'ຮອນດູແຣນ ເລມພິຣາ',
      HRK: 'ໂຄຣ​ເອ​ທຽນ ຄູ​ນາ',
      HTG: 'ໄຮ​ຕຽນ ກົວ​ເດ',
      HUF: 'ຮັງ​ກາ​ຣຽນ ຟໍ​ຣິນ',
      IDR: 'ອິນ​ໂດ​ເນ​ຊຽນ ໂດ​ລ່າ',
      ILS: 'ອິສ​ຣາ​ເອວ​ລິ ນິວ ເຊ​ເກວ',
      INR: 'ອິນ​ເດຍ ຣູ​ປີ',
      IQD: 'ອິ​ຣັກ​ກິ ດິ​ນາ',
      IRR: 'ອິ​ຣາ​ນິ ຣຽວ',
      ISK: 'ໄອ​ສ໌​ແລນ​ດິກ ໂຄຣ​ນາ',
      JMD: '​ຈາ​ໄມ​ກັນ ໂດ​ລ່າ',
      JOD: 'ຈໍ​ແດ​ນຽນ ດິ​ນາ',
      JPY: 'ຍີ່​ປຸ່ນ ເຢນ',
      KES: 'ເຄນ​ຢັນ ຊິວ​ລິງ',
      KGS: 'ຄ​ຣີ​ກິສ​​ຖາ​ນິ ໂຊມ',
      KHR: 'ກຳ​ປູ​ເຈຍ ຣຽວ',
      KMF: 'ໂຄ​ໂມ​ຣຽນ ຟຣັງ',
      KPW: 'ເກົາ​ຫລີ​ເໜືອ ວອນ',
      KRW: 'ເກົາ​ຫລີໃຕ້ ວອນ',
      KWD: 'ຄູ​ເວ​ຕິ ດິ​ນາ',
      KYD: 'ເຄ​ແມນ ໄອ​ແລນ ໂດ​ລ່າ',
      KZT: 'ຄາ​ຊັກ​ສະ​ຖາ​ນິ ເຕັງ​ເຈ',
      LAK: 'ລາວ ກີບ',
      LBP: 'ເລ​ບາ​ນີ​ສ ພາວດ໌',
      LKR: 'ສີ​ລັງ​ກາ ຣູ​ປີ',
      LRD: 'ລິ​ເບີ​ຣຽນ ໂດ​ລ່າ',
      LSL: 'ໂລຕິ ເລໂຊໂຕ',
      LYD: 'ລິບ​ບຽນ ດິ​ນາ',
      MAD: 'ມໍ​ຣັອກ​ແຄນ​ ເດີ​ແຮມ',
      MDL: 'ມອນ​ໂດ​ແວນ ເລ​ອູ',
      MGA: 'ມາ​ລາ​ກາ​ຊີ ອາ​ເຣຍ​ຣີ',
      MKD: 'ແມັກ​ເຊ​ໂດ​ນຽນ ເດ​ນາ',
      MMK: 'ມຽນ​ມາ ຈ໊າດ',
      MNT: 'ມອງ​ໂກ​ລຽນ ຕູກຣິກ',
      MOP: 'ມາ​ເກົ້າ ປາ​​ຕາ​ກາ',
      MRU: 'ມົວ​ຣິ​ທາ​ນຽນ ອູ​ກິວ​ຢາ',
      MUR: 'ເມົາ​ຣິ​ທຽນ ຣູ​ປີ',
      MVR: 'ມັ​ລ​ດິ​ວຽນ ຣູ​ຟິ​ຢາ',
      MWK: 'ມາ​ລາ​ວຽນ ຄວາ​ຊາ',
      MXN: 'ເມັກຊິກັນ ເປໂຊ',
      MYR: 'ມາ​ເລ​ເຊຍ ຣິງ​ກິດ',
      MZN: 'ໂມ​ແຊມ​ບິ​ກັນ ເມ​ທິ​ຄອນ',
      NAD: 'ນາ​ມິ​ບຽນ ໂດ​ລ່າ',
      NGN: 'ໄນ​ຣາ ​ໄນເຈີ​ຣຽນ',
      NIO: 'ນິກາຣາກວນ ໂຄໂດບາ',
      NOK: 'ນໍ​ເວ​ຈຽນ ​ໂຄຣນ',
      NPR: 'ເນ​ປານ ຣູ​ປີ',
      NZD: 'ນິວ​ຊີ​ແລນ ໂດ​ລ່າ',
      OMR: 'ໂອ​ມາ​ນິ ຣຽວ',
      PAB: 'ພານາມານຽນ ບອນບົວ',
      PEN: 'ເປ​ຣູ​ວຽນ ໂຊ​ລ໌',
      PGK: 'ປາ​ປົວ ນິວ ກິ​ນຽນ ກິ​ນາ',
      PHP: 'ຟິ​ລິບ​ປິນ ເປ​ໂຊ',
      PKR: 'ປາ​ກິ​ສຖານ ຣູ​ປີ',
      PLN: 'ໂປ​ລິ​ຊ ຊະ​ລໍ​ຕີ',
      PYG: 'ກວາຣານີ ປາຣາກວາຍ',
      QAR: 'ຄາ​ຕາ​ຣິ ຣຽວ',
      RON: 'ໂຣ​ມາ​ນຽນ ເລ​ອູ',
      RSD: 'ເຊີ​ບຽນ ດິ​ນາ',
      RUB: 'ຣັສ​ຊຽນ ຣູ​ເບິນ',
      RWF: 'ຣະ​ວັນ​ດັນ ຟຣັງ',
      SAR: 'ຊາ​ອູ​ດິ ຣິ​ຢອນ',
      SBD: 'ໂຊ​ໂລມອນ ໄອ​ແລນ ໂດ​ລ່າ',
      SCR: 'ເຊ​ເຊວ​ລອຍ​ສ໌ ຣູ​ປີ',
      SDG: 'ຊູ​ດານ​ນີ​ສ ພາວດ໌',
      SEK: 'ສະ​ວີ​ດິ​ຊ ໂຄຣ​ນາ',
      SGD: 'ສິງ​ກະ​ໂປ ໂດ​ລ່າ',
      SHP: 'ເຊນ ເຮ​ເລ​ນາ ພາວດ໌',
      SLL: 'ເຊຍ​ນາ ​ເລໂອ​ນຽນ ເລ​ໂອນ',
      SOS: 'ໂຊ​ມາ​ລິ ຊິວ​ລິງ',
      SRD: 'ຊູ​ຣິ​ນາ​ມີ​ສ ໂດ​ລ່າ',
      STN: 'ເຊົາ ໂທ​ເມ ແອນ ພ​ຣິນ​ຊິ​ປີ ໂດບຣາ',
      SVC: 'ໂກລອງ ເອກາວາດໍ',
      SYP: 'ຊີ​ຣຽນ ພາວດ໌',
      SZL: 'ສະ​ວາ​ຊິ ລິ​ລັນ​ກິ​ນີ',
      THB: 'ໄທ ບາດ',
      TJS: 'ທາ​ຈິ​ກິ​​ຖາ​ນິ ໂຊ​ໂມ​ນິ',
      TMT: 'ເຕີກ​ເມ​ນິ​ສ​ຖາ​ນິ ມາ​ນັດ',
      TND: 'ຕູ​ນິ​ຊຽນ ດິ​ນາ',
      TOP: 'ຕອງ​ກັນ ປາ​ອັງ​ກາ',
      TRY: 'ເຕີ​ກິ​ຊ ລິ​ຣາ',
      TTD: 'ທ​ຣິ​ນິ​ແດດ & ໂທ​ບາ​ໂກ ໂດ​ລ່າ',
      TWD: 'ນິວ ໄຕ້​ຫວັນ ໂດ​ລ່າ',
      TZS: 'ທານ​ຊາ​ນຽນ ຊິວ​ລິງ',
      UAH: 'ຢູ​ເຄຣ​ນຽນ ຮະ​ຣີບ​ເນຍ',
      UGX: 'ອູ​ກັນ​ດັນ ຊິວ​ລິງ',
      USD: '​ໂດ​ລ່າ​ສະ​ຫະ​ລັດຯ',
      UYU: 'ອູ​ຣຸ​ກົວ​ຢານ ເປ​ໂຊ',
      UZS: 'ອຸສເບກິສຖານິ ໂຊມ',
      VND: 'ຫວຽດ​ນາມ ດົງ',
      VUV: '​ວາ​ນົວ​ຕູ ວາ​ຕູ',
      WST: 'ຊາ​ໂມນ ທາ​ລາ',
      XAF: 'ສາທາລະນະລັດອາຟຣິກາກາງ',
      XCD: 'ອີ​ສ ຄາ​ຣິ​ບຽນ ໂດ​ລ່າ',
      XDR: 'ສິດທິຖອນເງິນພິເສດ',
      XOF: 'ຟັງເຊຟານ ອາຟຣິກາຕາເວັນຕົກ',
      XPF: 'ຊີ​ເອັບ​ພີ ຟຣັງ',
      XXX: 'ສະກຸນເງິນທີ່ບໍ່ຮູ້ຈັກ',
      YER: 'ເຢ​ເມ​ນິ ຣຽວ',
      ZAR: 'ເຊົາທ໌ ອາ​ຟຣິ​ກັນ ແຣນດ໌',
      ZMW: 'ແຊມ​ບຽນ ຄວາ​ຊາ',
    },
  },

  lo_LA: {
    c: 'LAK',
  },
};

registerLocales(LO);

export default LO;