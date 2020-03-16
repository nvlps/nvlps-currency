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

const MK = {
  mk: {
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
      BRL: 'R$',
      CAD: 'CA$',
      CNY: 'CNY',
      EUR: '€',
      GBP: 'GBP',
      HKD: 'HKD',
      ILS: 'ILS',
      INR: 'INR',
      JPY: 'JPY',
      KRW: 'KRW',
      MXN: 'MX$',
      NZD: 'NZD',
      TWD: 'TWD',
      USD: 'US$',
      VND: 'VND',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      MKD: 'ден.',
    },
    cn: {
      AED: 'Дирхам на Обединети Арапски Емирати',
      AFN: 'Авганистански авгани',
      ALL: 'Албански лек',
      AMD: 'Ерменски драм',
      ANG: 'Холандски антилски гилдер',
      AOA: 'Анголска кванза',
      ARS: 'Аргентински пезос',
      AUD: 'Австралиски долар',
      AWG: 'Арубиски флорин',
      AZN: 'Азербејџански манат',
      BAM: 'Босанско-херцеговска конвертибилна марка',
      BBD: 'Барбадоски долар',
      BDT: 'Бангладешка така',
      BGN: 'Бугарски лев',
      BHD: 'Бахреински динар',
      BIF: 'Бурундиски франк',
      BMD: 'Бермудски долар',
      BND: 'Брунејски долар',
      BOB: 'Боливиски боливиано',
      BRL: 'Бразилски реал',
      BSD: 'Бахамски долар',
      BTN: 'Бутански нгултрум',
      BWP: 'Боцванска пула',
      BYN: 'Белоруска рубља',
      BZD: 'Белизиски долар',
      CAD: 'Канадски долар',
      CDF: 'Конголски франк',
      CHF: 'Швајцарски франк',
      CLP: 'Чилеански пезос',
      CNY: 'Кинески јуан',
      COP: 'Колумбиски пезос',
      CRC: 'Костарикански колон',
      CUC: 'Кубански пезос (конвертибилен)',
      CUP: 'Кубански пезос',
      CVE: 'Зелено’ртски ескудо',
      CZK: 'Чешка круна',
      DJF: 'Џибутски франк',
      DKK: 'Данска круна',
      DOP: 'Доминикански пезос',
      DZD: 'Алжирски динар',
      EGP: 'Египетска фунта',
      ERN: 'Еритрејска накфа',
      ETB: 'Етиописки бир',
      EUR: 'Евро',
      FJD: 'Фиџиски долар',
      FKP: 'Фолкландска фунта',
      GBP: 'Британска фунта',
      GEL: 'Грузиски лари',
      GHS: 'Гански седи',
      GIP: 'Гибралтарска фунта',
      GMD: 'Гамбиски даласи',
      GNF: 'Гвинејски франк',
      GTQ: 'Гватемалски кветцал',
      GYD: 'Гвајански долар',
      HKD: 'Хонгконшки долар',
      HNL: 'Хондурска лемпира',
      HRK: 'Хрватска куна',
      HTG: 'Хаитски гурд',
      HUF: 'Унгарска форинта',
      IDR: 'Индонезиска рупија',
      ILS: 'Израелски нов шекел',
      INR: 'Индиска рупија',
      IQD: 'Ирачки динар',
      IRR: 'Ирански риал',
      ISK: 'Исландска крона',
      JMD: 'Јамајкански долар',
      JOD: 'Јордански динар',
      JPY: 'Јапонски јен',
      KES: 'Кениски шилинг',
      KGS: 'Киргистански сом',
      KHR: 'Камбоџиски рел',
      KMF: 'Коморски франк',
      KPW: 'Северно корејски вон',
      KRW: 'Јужно корејски вон',
      KWD: 'Кувајтски динар',
      KYD: 'Долар на кајмански острови',
      KZT: 'Казахстанска тенга',
      LAK: 'Лаоски кип',
      LBP: 'Либанска фунта',
      LKR: 'Шриланканска рупија',
      LRD: 'Либериски долар',
      LSL: 'Лесотско лоти',
      LYD: 'Либијски динар',
      MAD: 'Марокански дирхам',
      MDL: 'Молдавски леу',
      MGA: 'Малагасиски ариари',
      MKD: 'Македонски денар',
      MMK: 'Мјанмарски киат',
      MNT: 'Монголиски тугрик',
      MOP: 'Макао патака',
      MRU: 'Мавританска угија',
      MUR: 'Мавританска рупија',
      MVR: 'Малдивиска руфија',
      MWK: 'Малависка квача',
      MXN: 'Мексикански пезос',
      MYR: 'Малезиски рингит',
      MZN: 'Мозамбиски метикал',
      NAD: 'Намибиски долар',
      NGN: 'Нигериска наира',
      NIO: 'Никарагванска кордоба',
      NOK: 'Норвешка круна',
      NPR: 'Непалска рупија',
      NZD: 'Новозеландски долар',
      OMR: 'Омански риал',
      PAB: 'Панамска балбоа',
      PEN: 'Перуански сол',
      PGK: 'Папуа новогвинејска кина',
      PHP: 'Филипински пезос',
      PKR: 'Пакистанска рупија',
      PLN: 'Полска злота',
      PYG: 'Парагвајска гуарана',
      QAR: 'Катарски риал',
      RON: 'Романски леу',
      RSD: 'Српски динар',
      RUB: 'Руска рубља',
      RWF: 'Руандски франк',
      SAR: 'Саудиски ријал',
      SBD: 'Соломонски долар',
      SCR: 'Сејшелска рупија',
      SDG: 'Суданска фунта',
      SEK: 'Шведска круна',
      SGD: 'Сингапурски долар',
      SHP: 'Фунта на Света Елена',
      SLL: 'Сиералеонско леоне',
      SOS: 'Сомалијски шилинг',
      SRD: 'Суринамски долар',
      STN: 'Добра на Сао Томе и Принсипе',
      SVC: 'Салвадорски колон',
      SYP: 'Сиријска фунта',
      SZL: 'Свазилендски лиланген',
      THB: 'Таи бат',
      TJS: 'Таџикистански сомони',
      TMT: 'Туркменист. манат',
      TND: 'Тунизиски динар',
      TOP: 'Тонганска панга',
      TRY: 'Турска лира',
      TTD: 'Долар на Тринидад и Тобаго',
      TWD: 'Тајвански нов долар',
      TZS: 'Танзаниски шилинг',
      UAH: 'Украинска хривнија',
      UGX: 'Угандиски шилинг',
      USD: 'Американски долар',
      UYU: 'Уругвајски пезос',
      UZS: 'Узбекистански сом',
      VND: 'Виетнамски донг',
      VUV: 'Ванатски вату',
      WST: 'Самоанска тала',
      XAF: 'Централноафрикански франк',
      XCD: 'Источно карипски долар',
      XOF: 'Западноафрикански франк',
      XPF: 'ЦФП франк',
      XXX: 'Непозната валута',
      YER: 'Јеменски риал',
      ZAR: 'Јужноафрикански ранд',
      ZMW: 'Замбијска квача',
    },
    c: 'MKD',
  },

  mk_MK: {},
};

registerLocales(MK);

export default MK;
