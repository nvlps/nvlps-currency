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

const ZH = {
  zh: {
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
      CNY: '¥',
      EUR: '€',
      GBP: '£',
      HKD: 'HK$',
      ILS: '₪',
      INR: '₹',
      JPY: 'JP¥',
      KRW: '￦',
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
    },
    cn: {
      AED: '阿联酋迪拉姆',
      AFN: '阿富汗尼',
      ALL: '阿尔巴尼亚列克',
      AMD: '亚美尼亚德拉姆',
      ANG: '荷属安的列斯盾',
      AOA: '安哥拉宽扎',
      ARS: '阿根廷比索',
      AUD: '澳大利亚元',
      AWG: '阿鲁巴弗罗林',
      AZN: '阿塞拜疆马纳特',
      BAM: '波斯尼亚-黑塞哥维那可兑换马克',
      BBD: '巴巴多斯元',
      BDT: '孟加拉塔卡',
      BGN: '保加利亚列弗',
      BHD: '巴林第纳尔',
      BIF: '布隆迪法郎',
      BMD: '百慕大元',
      BND: '文莱元',
      BOB: '玻利维亚诺',
      BRL: '巴西雷亚尔',
      BSD: '巴哈马元',
      BTN: '不丹努尔特鲁姆',
      BWP: '博茨瓦纳普拉',
      BYN: '白俄罗斯卢布',
      BZD: '伯利兹元',
      CAD: '加拿大元',
      CDF: '刚果法郎',
      CHF: '瑞士法郎',
      CLP: '智利比索',
      CNY: '人民币',
      COP: '哥伦比亚比索',
      CRC: '哥斯达黎加科朗',
      CUC: '古巴可兑换比索',
      CUP: '古巴比索',
      CVE: '佛得角埃斯库多',
      CZK: '捷克克朗',
      DJF: '吉布提法郎',
      DKK: '丹麦克朗',
      DOP: '多米尼加比索',
      DZD: '阿尔及利亚第纳尔',
      EGP: '埃及镑',
      ERN: '厄立特里亚纳克法',
      ETB: '埃塞俄比亚比尔',
      EUR: '欧元',
      FJD: '斐济元',
      FKP: '福克兰群岛镑',
      GBP: '英镑',
      GEL: '格鲁吉亚拉里',
      GHS: '加纳塞地',
      GIP: '直布罗陀镑',
      GMD: '冈比亚达拉西',
      GNF: '几内亚法郎',
      GTQ: '危地马拉格查尔',
      GYD: '圭亚那元',
      HKD: '港元',
      HNL: '洪都拉斯伦皮拉',
      HRK: '克罗地亚库纳',
      HTG: '海地古德',
      HUF: '匈牙利福林',
      IDR: '印度尼西亚盾',
      ILS: '以色列新谢克尔',
      INR: '印度卢比',
      IQD: '伊拉克第纳尔',
      IRR: '伊朗里亚尔',
      ISK: '冰岛克朗',
      JMD: '牙买加元',
      JOD: '约旦第纳尔',
      JPY: '日元',
      KES: '肯尼亚先令',
      KGS: '吉尔吉斯斯坦索姆',
      KHR: '柬埔寨瑞尔',
      KMF: '科摩罗法郎',
      KPW: '朝鲜元',
      KRW: '韩元',
      KWD: '科威特第纳尔',
      KYD: '开曼元',
      KZT: '哈萨克斯坦坚戈',
      LAK: '老挝基普',
      LBP: '黎巴嫩镑',
      LKR: '斯里兰卡卢比',
      LRD: '利比里亚元',
      LSL: '莱索托洛蒂',
      LYD: '利比亚第纳尔',
      MAD: '摩洛哥迪拉姆',
      MDL: '摩尔多瓦列伊',
      MGA: '马达加斯加阿里亚里',
      MKD: '马其顿第纳尔',
      MMK: '缅甸元',
      MNT: '蒙古图格里克',
      MOP: '澳门币',
      MRU: '毛里塔尼亚乌吉亚',
      MUR: '毛里求斯卢比',
      MVR: '马尔代夫卢菲亚',
      MWK: '马拉维克瓦查',
      MXN: '墨西哥比索',
      MYR: '马来西亚林吉特',
      MZN: '莫桑比克美提卡',
      NAD: '纳米比亚元',
      NGN: '尼日利亚奈拉',
      NIO: '尼加拉瓜科多巴',
      NOK: '挪威克朗',
      NPR: '尼泊尔卢比',
      NZD: '新西兰元',
      OMR: '阿曼里亚尔',
      PAB: '巴拿马巴波亚',
      PEN: '秘鲁索尔',
      PGK: '巴布亚新几内亚基那',
      PHP: '菲律宾比索',
      PKR: '巴基斯坦卢比',
      PLN: '波兰兹罗提',
      PYG: '巴拉圭瓜拉尼',
      QAR: '卡塔尔里亚尔',
      RON: '罗马尼亚列伊',
      RSD: '塞尔维亚第纳尔',
      RUB: '俄罗斯卢布',
      RWF: '卢旺达法郎',
      SAR: '沙特里亚尔',
      SBD: '所罗门群岛元',
      SCR: '塞舌尔卢比',
      SDG: '苏丹镑',
      SEK: '瑞典克朗',
      SGD: '新加坡元',
      SHP: '圣赫勒拿群岛磅',
      SLL: '塞拉利昂利昂',
      SOS: '索马里先令',
      SRD: '苏里南元',
      STN: '圣多美和普林西比多布拉',
      SVC: '萨尔瓦多科朗',
      SYP: '叙利亚镑',
      SZL: '斯威士兰里兰吉尼',
      THB: '泰铢',
      TJS: '塔吉克斯坦索莫尼',
      TMT: '土库曼斯坦马纳特',
      TND: '突尼斯第纳尔',
      TOP: '汤加潘加',
      TRY: '土耳其里拉',
      TTD: '特立尼达和多巴哥元',
      TWD: '新台币',
      TZS: '坦桑尼亚先令',
      UAH: '乌克兰格里夫纳',
      UGX: '乌干达先令',
      USD: '美元',
      UYU: '乌拉圭比索',
      UZS: '乌兹别克斯坦苏姆',
      VND: '越南盾',
      VUV: '瓦努阿图瓦图',
      WST: '萨摩亚塔拉',
      XAF: '中非法郎',
      XCD: '东加勒比元',
      XDR: '特别提款权',
      XOF: '西非法郎',
      XPF: '太平洋法郎',
      XXX: '未知货币',
      YER: '也门里亚尔',
      ZAR: '南非兰特',
      ZMW: '赞比亚克瓦查',
    },
  },

  zh_Hant_HK: {
    nan: '非數值',
    cs: {
      CNY: 'CN¥',
      JPY: '¥',
    },
    cn: {
      AED: '阿拉伯聯合酋長國迪爾汗',
      ALL: '阿爾巴尼亞列克',
      AMD: '亞美尼亞德拉姆',
      ANG: '荷屬安地列斯盾',
      AOA: '安哥拉寬扎',
      ARS: '阿根廷披索',
      AUD: '澳元',
      AWG: '阿魯巴盾',
      AZN: '亞塞拜疆馬納特',
      BAM: '波斯尼亞-赫塞哥維納可轉換馬克',
      BGN: '保加利亞新列弗',
      BHD: '巴林第納爾',
      BMD: '百慕達元',
      BND: '汶萊元',
      BOB: '玻利維亞諾',
      BRL: '巴西里拉',
      BSD: '巴哈馬元',
      BTN: '不丹那特倫',
      BWP: '博茨瓦納普拉',
      BYN: '白俄羅斯盧布',
      BZD: '伯利茲元',
      CDF: '剛果法郎',
      CLP: '智利披索',
      CNY: '人民幣',
      COP: '哥倫比亞披索',
      CRC: '哥斯達黎加科郎',
      CUC: '古巴可轉換披索',
      CUP: '古巴披索',
      CVE: '佛得角埃斯庫多',
      DKK: '丹麥克朗',
      DOP: '多米尼加披索',
      DZD: '阿爾及利亞第納爾',
      EGP: '埃及鎊',
      ERN: '厄立特里亞納克法',
      ETB: '埃塞俄比亞比爾',
      EUR: '歐元',
      FJD: '斐濟元',
      FKP: '福克蘭群島鎊',
      GBP: '英鎊',
      GEL: '格魯吉亞拉里',
      GHS: '加納塞地',
      GIP: '直布羅陀鎊',
      GMD: '岡比亞達拉西',
      GNF: '幾內亞法郎',
      GTQ: '危地馬拉格查爾',
      GYD: '圭亞那元',
      HNL: '洪都拉斯倫皮拉',
      HRK: '克羅地亞庫納',
      IDR: '印尼盾',
      ILS: '以色列新謝克爾',
      INR: '印度盧比',
      IQD: '伊拉克第納爾',
      IRR: '伊朗里亞爾',
      ISK: '冰島克朗',
      JMD: '牙買加元',
      JOD: '約旦第納爾',
      JPY: '日圓',
      KES: '肯雅先令',
      KGS: '吉爾吉斯索姆',
      KHR: '柬埔寨里爾',
      KMF: '科摩羅法郎',
      KPW: '北韓圜',
      KRW: '韓元',
      KWD: '科威特第納爾',
      KYD: '開曼群島元',
      KZT: '哈薩克坦吉',
      LAK: '老撾基普',
      LBP: '黎巴嫩鎊',
      LKR: '斯里蘭卡盧比',
      LRD: '利比利亞元',
      LSL: '賴索托洛蒂',
      LYD: '利比亞第納爾',
      MDL: '摩爾多瓦列伊',
      MGA: '馬達加斯加阿里亞里',
      MKD: '馬其頓第納爾',
      MMK: '緬甸元',
      MNT: '蒙古圖格里克',
      MOP: '澳門元',
      MRU: '毛里塔尼亞烏吉亞',
      MUR: '毛里裘斯盧布',
      MVR: '馬爾代夫盧非亞',
      MWK: '馬拉維克瓦查',
      MXN: '墨西哥披索',
      MYR: '馬來西亞令吉',
      MZN: '莫桑比克梅蒂卡爾',
      NAD: '納米比亞元',
      NGN: '尼日利亞奈拉',
      NIO: '尼加拉瓜金科多巴',
      NPR: '尼泊爾盧比',
      NZD: '紐西蘭元',
      OMR: '阿曼里奧',
      PAB: '巴拿馬巴波亞',
      PEN: '秘魯太陽幣',
      PGK: '巴布亞新幾內亞基那',
      PHP: '菲律賓披索',
      PKR: '巴基斯坦盧比',
      PLN: '波蘭茲羅提',
      QAR: '卡塔爾里亞爾',
      RON: '羅馬尼亞列伊',
      RSD: '塞爾維亞第納爾',
      RUB: '俄羅斯盧布',
      RWF: '盧旺達法郎',
      SAR: '沙特阿拉伯里亞爾',
      SBD: '所羅門群島元',
      SCR: '塞舌爾盧比',
      SDG: '蘇丹鎊',
      SHP: '聖赫勒拿鎊',
      SOS: '索馬里先令',
      SRD: '蘇里南元',
      STN: '聖多美和普林西比多布拉',
      SVC: '薩爾瓦多科郎',
      SYP: '敍利亞鎊',
      SZL: '斯威士蘭里朗吉尼',
      THB: '泰銖',
      TJS: '塔吉克索莫尼',
      TMT: '土庫曼馬納特',
      TND: '突尼西亞第納爾',
      TOP: '湯加潘加',
      TRY: '新土耳其里拉',
      TTD: '千里達和多巴哥元',
      TWD: '新台幣',
      TZS: '坦桑尼亞先令',
      UAH: '烏克蘭格里夫納',
      UGX: '烏干達先令',
      UYU: '烏拉圭披索',
      UZS: '烏茲別克索姆',
      VUV: '瓦努阿圖瓦圖',
      WST: '西薩摩亞塔拉',
      XCD: '東加勒比元',
      XDR: '特殊提款權',
      XOF: '多哥非洲共同體法郎',
      XXX: '未知貨幣',
      YER: '也門里雅',
      ZAR: '南非蘭特',
      ZMW: '贊比亞克瓦查',
    },
    c: 'HKD',
  },

  zh_Hant_MO: {
    nan: '非數值',
    cs: {
      CNY: 'CN¥',
      JPY: '¥',
      MOP: 'MOP$',
    },
    cn: {
      AED: '阿拉伯聯合酋長國迪爾汗',
      ALL: '阿爾巴尼亞列克',
      AMD: '亞美尼亞德拉姆',
      ANG: '荷屬安地列斯盾',
      AOA: '安哥拉寬扎',
      ARS: '阿根廷披索',
      AUD: '澳元',
      AWG: '阿魯巴盾',
      AZN: '亞塞拜疆馬納特',
      BAM: '波斯尼亞-赫塞哥維納可轉換馬克',
      BGN: '保加利亞新列弗',
      BHD: '巴林第納爾',
      BMD: '百慕達元',
      BND: '汶萊元',
      BOB: '玻利維亞諾',
      BRL: '巴西里拉',
      BSD: '巴哈馬元',
      BTN: '不丹那特倫',
      BWP: '博茨瓦納普拉',
      BYN: '白俄羅斯盧布',
      BZD: '伯利茲元',
      CDF: '剛果法郎',
      CLP: '智利披索',
      CNY: '人民幣',
      COP: '哥倫比亞披索',
      CRC: '哥斯達黎加科郎',
      CUC: '古巴可轉換披索',
      CUP: '古巴披索',
      CVE: '佛得角埃斯庫多',
      DKK: '丹麥克朗',
      DOP: '多米尼加披索',
      DZD: '阿爾及利亞第納爾',
      EGP: '埃及鎊',
      ERN: '厄立特里亞納克法',
      ETB: '埃塞俄比亞比爾',
      EUR: '歐元',
      FJD: '斐濟元',
      FKP: '福克蘭群島鎊',
      GBP: '英鎊',
      GEL: '格魯吉亞拉里',
      GHS: '加納塞地',
      GIP: '直布羅陀鎊',
      GMD: '岡比亞達拉西',
      GNF: '幾內亞法郎',
      GTQ: '危地馬拉格查爾',
      GYD: '圭亞那元',
      HNL: '洪都拉斯倫皮拉',
      HRK: '克羅地亞庫納',
      IDR: '印尼盾',
      ILS: '以色列新謝克爾',
      INR: '印度盧比',
      IQD: '伊拉克第納爾',
      IRR: '伊朗里亞爾',
      ISK: '冰島克朗',
      JMD: '牙買加元',
      JOD: '約旦第納爾',
      JPY: '日圓',
      KES: '肯雅先令',
      KGS: '吉爾吉斯索姆',
      KHR: '柬埔寨里爾',
      KMF: '科摩羅法郎',
      KPW: '北韓圜',
      KRW: '韓元',
      KWD: '科威特第納爾',
      KYD: '開曼群島元',
      KZT: '哈薩克坦吉',
      LAK: '老撾基普',
      LBP: '黎巴嫩鎊',
      LKR: '斯里蘭卡盧比',
      LRD: '利比利亞元',
      LSL: '賴索托洛蒂',
      LYD: '利比亞第納爾',
      MDL: '摩爾多瓦列伊',
      MGA: '馬達加斯加阿里亞里',
      MKD: '馬其頓第納爾',
      MMK: '緬甸元',
      MNT: '蒙古圖格里克',
      MOP: '澳門元',
      MRU: '毛里塔尼亞烏吉亞',
      MUR: '毛里裘斯盧布',
      MVR: '馬爾代夫盧非亞',
      MWK: '馬拉維克瓦查',
      MXN: '墨西哥披索',
      MYR: '馬來西亞令吉',
      MZN: '莫桑比克梅蒂卡爾',
      NAD: '納米比亞元',
      NGN: '尼日利亞奈拉',
      NIO: '尼加拉瓜金科多巴',
      NPR: '尼泊爾盧比',
      NZD: '紐西蘭元',
      OMR: '阿曼里奧',
      PAB: '巴拿馬巴波亞',
      PEN: '秘魯太陽幣',
      PGK: '巴布亞新幾內亞基那',
      PHP: '菲律賓披索',
      PKR: '巴基斯坦盧比',
      PLN: '波蘭茲羅提',
      QAR: '卡塔爾里亞爾',
      RON: '羅馬尼亞列伊',
      RSD: '塞爾維亞第納爾',
      RUB: '俄羅斯盧布',
      RWF: '盧旺達法郎',
      SAR: '沙特阿拉伯里亞爾',
      SBD: '所羅門群島元',
      SCR: '塞舌爾盧比',
      SDG: '蘇丹鎊',
      SHP: '聖赫勒拿鎊',
      SOS: '索馬里先令',
      SRD: '蘇里南元',
      STN: '聖多美和普林西比多布拉',
      SVC: '薩爾瓦多科郎',
      SYP: '敍利亞鎊',
      SZL: '斯威士蘭里朗吉尼',
      THB: '泰銖',
      TJS: '塔吉克索莫尼',
      TMT: '土庫曼馬納特',
      TND: '突尼西亞第納爾',
      TOP: '湯加潘加',
      TRY: '新土耳其里拉',
      TTD: '千里達和多巴哥元',
      TWD: '新台幣',
      TZS: '坦桑尼亞先令',
      UAH: '烏克蘭格里夫納',
      UGX: '烏干達先令',
      UYU: '烏拉圭披索',
      UZS: '烏茲別克索姆',
      VUV: '瓦努阿圖瓦圖',
      WST: '西薩摩亞塔拉',
      XCD: '東加勒比元',
      XDR: '特殊提款權',
      XOF: '多哥非洲共同體法郎',
      XXX: '未知貨幣',
      YER: '也門里雅',
      ZAR: '南非蘭特',
      ZMW: '贊比亞克瓦查',
    },
    c: 'MOP',
  },

  zh_Hant_TW: {
    nan: '非數值',
    cs: {
      CNY: 'CN¥',
      JPY: '¥',
      TWD: '$',
    },
    cn: {
      AED: '阿拉伯聯合大公國迪爾汗',
      ALL: '阿爾巴尼亞列克',
      AMD: '亞美尼亞德拉姆',
      ANG: '荷屬安地列斯盾',
      AOA: '安哥拉寬扎',
      ARS: '阿根廷披索',
      AUD: '澳幣',
      AWG: '阿路巴盾',
      AZN: '亞塞拜然馬納特',
      BAM: '波士尼亞-赫塞哥維納可轉換馬克',
      BBD: '巴貝多元',
      BGN: '保加利亞新列弗',
      BHD: '巴林第納爾',
      BIF: '蒲隆地法郎',
      BMD: '百慕達幣',
      BND: '汶萊元',
      BOB: '玻利維亞諾',
      BRL: '巴西里拉',
      BSD: '巴哈馬元',
      BTN: '不丹那特倫',
      BWP: '波札那普拉',
      BYN: '白俄羅斯盧布',
      BZD: '貝里斯元',
      CAD: '加幣',
      CDF: '剛果法郎',
      CLP: '智利披索',
      CNY: '人民幣',
      COP: '哥倫比亞披索',
      CRC: '哥斯大黎加科朗',
      CUC: '古巴可轉換披索',
      CUP: '古巴披索',
      CVE: '維德角埃斯庫多',
      DJF: '吉布地法郎',
      DKK: '丹麥克朗',
      DOP: '多明尼加披索',
      DZD: '阿爾及利亞第納爾',
      EGP: '埃及鎊',
      ERN: '厄立特里亞納克法',
      ETB: '衣索比亞比爾',
      EUR: '歐元',
      FJD: '斐濟元',
      FKP: '福克蘭群島鎊',
      GBP: '英鎊',
      GEL: '喬治亞拉里',
      GHS: '迦納塞地',
      GIP: '直布羅陀鎊',
      GMD: '甘比亞達拉西',
      GNF: '幾內亞法郎',
      GTQ: '瓜地馬拉格查爾',
      GYD: '圭亞那元',
      HKD: '港幣',
      HNL: '洪都拉斯倫皮拉',
      HRK: '克羅埃西亞庫納',
      IDR: '印尼盾',
      ILS: '以色列新謝克爾',
      INR: '印度盧比',
      IQD: '伊拉克第納爾',
      IRR: '伊朗里亞爾',
      ISK: '冰島克朗',
      JMD: '牙買加元',
      JOD: '約旦第納爾',
      JPY: '日圓',
      KES: '肯尼亞先令',
      KGS: '吉爾吉斯索姆',
      KHR: '柬埔寨瑞爾',
      KMF: '科摩羅法郎',
      KPW: '北韓元',
      KRW: '韓元',
      KWD: '科威特第納爾',
      KYD: '開曼群島元',
      KZT: '哈薩克堅戈',
      LAK: '寮國基普',
      LBP: '黎巴嫩鎊',
      LKR: '斯里蘭卡盧比',
      LRD: '賴比瑞亞元',
      LSL: '賴索托洛蒂',
      LYD: '利比亞第納爾',
      MDL: '摩杜雲列伊',
      MGA: '馬達加斯加阿里亞里',
      MKD: '馬其頓第納爾',
      MMK: '緬甸元',
      MNT: '蒙古圖格里克',
      MOP: '澳門元',
      MRU: '茅利塔尼亞烏吉亞',
      MUR: '模里西斯盧比',
      MVR: '馬爾地夫盧非亞',
      MWK: '馬拉維克瓦查',
      MXN: '墨西哥披索',
      MYR: '馬來西亞令吉',
      MZN: '莫三比克梅蒂卡爾',
      NAD: '納米比亞元',
      NGN: '奈及利亞奈拉',
      NIO: '尼加拉瓜金科多巴',
      NPR: '尼泊爾盧比',
      NZD: '紐西蘭幣',
      OMR: '阿曼里亞爾',
      PAB: '巴拿馬巴波亞',
      PEN: '秘魯太陽幣',
      PGK: '巴布亞紐幾內亞基那',
      PHP: '菲律賓披索',
      PKR: '巴基斯坦盧比',
      PLN: '波蘭茲羅提',
      QAR: '卡達里亞爾',
      RON: '羅馬尼亞列伊',
      RSD: '塞爾維亞戴納',
      RUB: '俄羅斯盧布',
      RWF: '盧安達法郎',
      SAR: '沙烏地里亞爾',
      SBD: '索羅門群島元',
      SCR: '塞席爾盧比',
      SDG: '蘇丹鎊',
      SGD: '新加坡幣',
      SHP: '聖赫勒拿鎊',
      SLL: '獅子山利昂',
      SOS: '索馬利亞先令',
      SRD: '蘇利南元',
      STN: '聖多美島和普林西比島多布拉',
      SVC: '薩爾瓦多科郎',
      SYP: '敘利亞鎊',
      SZL: '史瓦濟蘭里朗吉尼',
      THB: '泰銖',
      TJS: '塔吉克索莫尼',
      TMT: '土庫曼馬納特',
      TND: '突尼西亞第納爾',
      TOP: '東加潘加',
      TRY: '新土耳其里拉',
      TTD: '千里達及托巴哥元',
      TWD: '新台幣',
      TZS: '坦尚尼亞先令',
      UAH: '烏克蘭格里夫納',
      UGX: '烏干達先令',
      UYU: '烏拉圭披索',
      UZS: '烏茲別克索姆',
      VUV: '萬那杜瓦圖',
      WST: '西薩摩亞塔拉',
      XAF: '法郎 (CFA–BEAC)',
      XCD: '格瑞那達元',
      XDR: '特殊提款權',
      XOF: '法郎 (CFA–BCEAO)',
      XPF: '法郎 (CFP)',
      XXX: '未知貨幣',
      YER: '葉門里亞爾',
      ZAR: '南非蘭特',
      ZMW: '尚比亞克瓦查',
    },
    c: 'TWD',
  },
};

registerLocales(ZH);

export default ZH;
