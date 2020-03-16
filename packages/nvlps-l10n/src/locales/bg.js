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

import { registerLocales } from 'nvlps-currency';

const BG = {
  bg: {
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
    cp: '0.00 ¤',
    ap: '0.00 ¤;(0.00 ¤)',
    cs: {
      AUD: 'AUD',
      BRL: 'BRL',
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
      USD: 'щ.д.',
      VND: 'VND',
      XAF: 'FCFA',
      XCD: 'XCD',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      BGN: 'лв.',
      BYN: 'BYN',
    },
    cn: {
      AED: 'Дирхам на Обединените арабски емирства',
      AFN: 'Афганистански афган',
      ALL: 'Албански лек',
      AMD: 'Арменски драм',
      ANG: 'Антилски гулден',
      AOA: 'Анголска кванза',
      ARS: 'Аржентинско песо',
      AUD: 'Австралийски долар',
      AWG: 'Арубски флорин',
      AZN: 'Азербайджански манат',
      BAM: 'Босненска конвертируема марка',
      BBD: 'Барбадоски долар',
      BDT: 'Бангладешка така',
      BGN: 'Български лев',
      BHD: 'Бахрейнски динар',
      BIF: 'Бурундийски франк',
      BMD: 'Бермудски долар',
      BND: 'Брунейски долар',
      BOB: 'Боливийско боливиано',
      BRL: 'Бразилски реал',
      BSD: 'Бахамски долар',
      BTN: 'Бутански нгултрум',
      BWP: 'Ботсванска пула',
      BYN: 'Беларуска рубла',
      BZD: 'Белизийски долар',
      CAD: 'Канадски долар',
      CDF: 'Конгоански франк',
      CHF: 'Швейцарски франк',
      CLP: 'Чилийско песо',
      CNY: 'Китайски юан',
      COP: 'Колумбийско песо',
      CRC: 'Костарикански колон',
      CUC: 'Кубинско конвертируемо песо',
      CUP: 'Кубинско песо',
      CVE: 'Ескудо на Кабо Верде',
      CZK: 'Чешка крона',
      DJF: 'Джибутски франк',
      DKK: 'Датска крона',
      DOP: 'Доминиканско песо',
      DZD: 'Алжирски динар',
      EGP: 'Египетска лира',
      ERN: 'Еритрейска накфа',
      ETB: 'Етиопски бир',
      EUR: 'Евро',
      FJD: 'Фиджийски долар',
      FKP: 'Фолклендска лира',
      GBP: 'Британска лира',
      GEL: 'Грузински лари',
      GHS: 'Ганайско седи',
      GIP: 'Гибралтарска лира',
      GMD: 'Гамбийско даласи',
      GNF: 'Гвинейски франк',
      GTQ: 'Гватемалски кетцал',
      GYD: 'Гаянски долар',
      HKD: 'Хонконгски долар',
      HNL: 'Хондураска лемпира',
      HRK: 'Хърватска куна',
      HTG: 'Хаитски гурд',
      HUF: 'Унгарски форинт',
      IDR: 'Индонезийска рупия',
      ILS: 'Израелски нов шекел',
      INR: 'Индийска рупия',
      IQD: 'Иракски динар',
      IRR: 'Ирански риал',
      ISK: 'Исландска крона',
      JMD: 'Ямайски долар',
      JOD: 'Йордански динар',
      JPY: 'Японска йена',
      KES: 'Кенийски шилинг',
      KGS: 'Киргизстански сом',
      KHR: 'Камбоджански риел',
      KMF: 'Коморски франк',
      KPW: 'Севернокорейски вон',
      KRW: 'Южнокорейски вон',
      KWD: 'Кувейтски динар',
      KYD: 'Кайманов долар',
      KZT: 'Казахстанско тенге',
      LAK: 'Лаоски кип',
      LBP: 'Ливанска лира',
      LKR: 'Шриланкска рупия',
      LRD: 'Либерийски долар',
      LSL: 'Лесотско лоти',
      LYD: 'Либийски динар',
      MAD: 'Марокански дирхам',
      MDL: 'Молдовско леу',
      MGA: 'Малгашко ариари',
      MKD: 'Македонски денар',
      MMK: 'Мианмарски кият',
      MNT: 'Монголски тугрик',
      MOP: 'Патака на Макао',
      MRU: 'Мавританска угия',
      MUR: 'Маврицийска рупия',
      MVR: 'Малдивска руфия',
      MWK: 'Малавийска квача',
      MXN: 'Мексиканско песо',
      MYR: 'Малайзийски рингит',
      MZN: 'Мозамбикски метикал',
      NAD: 'Намибийски долар',
      NGN: 'Нигерийска найра',
      NIO: 'Никарагуанска кордоба',
      NOK: 'Норвежка крона',
      NPR: 'Непалска рупия',
      NZD: 'Новозеландски долар',
      OMR: 'Омански риал',
      PAB: 'Панамска балбоа',
      PEN: 'Перуански сол',
      PGK: 'Папуа-новогвинейска кина',
      PHP: 'Филипинско песо',
      PKR: 'Пакистанска рупия',
      PLN: 'Полска злота',
      PYG: 'Парагвайско гуарани',
      QAR: 'Катарски риал',
      RON: 'Румънска лея',
      RSD: 'Сръбски динар',
      RUB: 'Руска рубла',
      RWF: 'Руандски франк',
      SAR: 'саудитски риал',
      SBD: 'Долар на Соломоновите острови',
      SCR: 'Сейшелска рупия',
      SDG: 'Суданска лира',
      SEK: 'Шведска крона',
      SGD: 'Сингапурски долар',
      SHP: 'Лира на Света Елена',
      SLL: 'Сиералеонско леоне',
      SOS: 'Сомалийски шилинг',
      SRD: 'Суринамски долар',
      STN: 'Добра на Сао Томе и Принсипи',
      SVC: 'Салвадорски колон',
      SYP: 'Сирийска лира',
      SZL: 'Свазилендски лилангени',
      THB: 'Тайландски бат',
      TJS: 'Таджикистански сомони',
      TMT: 'Туркменски манат',
      TND: 'Тунизийски динар',
      TOP: 'Тонганска паанга',
      TRY: 'Турска лира',
      TTD: 'Долар на Тринидад и Тобаго',
      TWD: 'Тайвански долар',
      TZS: 'Танзанийски шилинг',
      UAH: 'Украинска хривня',
      UGX: 'Угандски шилинг',
      USD: 'Щатски долар',
      UYU: 'Уругвайско песо',
      UZS: 'Узбекски сум',
      VND: 'Виетнамски донг',
      VUV: 'Вануатско вату',
      WST: 'Самоанска тала',
      XAF: 'Централноафрикански франк',
      XCD: 'Източнокарибски долар',
      XDR: 'Специални права на тираж',
      XOF: 'Западноафрикански франк',
      XPF: 'CFP франк',
      XXX: 'Непозната валута',
      YER: 'Йеменски риал',
      ZAR: 'Южноафрикански ранд',
      ZMW: 'Замбийска куача',
    },
    c: 'BGN',
  },

  bg_BG: {},
};

registerLocales(BG);

export { BG };