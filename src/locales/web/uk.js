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

// Find nvlps if it was loaded into the root namespace
if (
  typeof window.nvlps === 'undefined' ||
  typeof window.nvlps.registerLocales !== 'function'
) {
  throw 'The nvlps-currency library must be imported into the "nvlps" namespace prior to including this localization module';
}

// Locale Data for UK
var UK = {
  uk: {
    d: ',',
    g: ' ',
    p: '+',
    m: '-',
    pc: '%',
    pm: '‰',
    e: 'Е',
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
      CNY: 'CN¥',
      EUR: 'EUR',
      GBP: 'GBP',
      HKD: 'HK$',
      ILS: '₪',
      INR: '₹',
      JPY: '¥',
      KRW: '₩',
      MXN: 'MXN',
      NZD: 'NZD',
      TWD: 'NT$',
      USD: 'USD',
      VND: 'VND',
      XAF: 'FCFA',
      XCD: 'XCD',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      UAH: '₴',
    },
    cn: {
      AED: 'дирхам ОАЕ',
      AFN: 'афганський афгані',
      ALL: 'албанський лек',
      AMD: 'вірменський драм',
      ANG: 'нідерландський антильський гульден',
      AOA: 'ангольська кванза',
      ARS: 'аргентинський песо',
      AUD: 'австралійський долар',
      AWG: 'арубський флорин',
      AZN: 'азербайджанський манат',
      BAM: 'конвертована марка Боснії і Герцеговини',
      BBD: 'барбадоський долар',
      BDT: 'бангладеська така',
      BGN: 'болгарський лев',
      BHD: 'бахрейнський динар',
      BIF: 'бурундійський франк',
      BMD: 'бермудський долар',
      BND: 'брунейський долар',
      BOB: 'болівійський болівіано',
      BRL: 'бразильський реал',
      BSD: 'багамський долар',
      BTN: 'бутанський нгултрум',
      BWP: 'ботсванська пула',
      BYN: 'білоруський рубль',
      BZD: 'белізький долар',
      CAD: 'канадський долар',
      CDF: 'конголезький франк',
      CHF: 'швейцарський франк',
      CLP: 'чилійський песо',
      CNY: 'китайський юань',
      COP: 'колумбійський песо',
      CRC: 'костариканський колон',
      CUC: 'кубинський конвертований песо',
      CUP: 'кубинський песо',
      CVE: 'ескудо Кабо-Верде',
      CZK: 'чеська крона',
      DJF: 'джибутійський франк',
      DKK: 'данська крона',
      DOP: 'домініканський песо',
      DZD: 'алжирський динар',
      EGP: 'єгипетський фунт',
      ERN: 'еритрейська накфа',
      ETB: 'ефіопський бир',
      EUR: 'євро',
      FJD: 'фіджійський долар',
      FKP: 'фунт Фолклендських островів',
      GBP: 'англійський фунт',
      GEL: 'грузинський ларі',
      GHS: 'ганський седі',
      GIP: 'гібралтарський фунт',
      GMD: 'гамбійський даласі',
      GNF: 'гвінейський франк',
      GTQ: 'гватемальський кетсаль',
      GYD: 'гаянський долар',
      HKD: 'гонконгський долар',
      HNL: 'гондураська лемпіра',
      HRK: 'хорватська куна',
      HTG: 'гаїтянський гурд',
      HUF: 'угорський форинт',
      IDR: 'індонезійська рупія',
      ILS: 'ізраїльський новий шекель',
      INR: 'індійська рупія',
      IQD: 'іракський динар',
      IRR: 'іранський ріал',
      ISK: 'ісландська крона',
      JMD: 'ямайський долар',
      JOD: 'йорданський динар',
      JPY: 'японська єна',
      KES: 'кенійський шилінг',
      KGS: 'киргизький сом',
      KHR: 'камбоджійський рієль',
      KMF: 'коморський франк',
      KPW: 'північнокорейський вон',
      KRW: 'південнокорейський вон',
      KWD: 'кувейтський динар',
      KYD: 'долар Кайманових островів',
      KZT: 'казахстанський тенге',
      LAK: 'лаоський кіп',
      LBP: 'ліванський фунт',
      LKR: 'шрі-ланкійська рупія',
      LRD: 'ліберійський долар',
      LSL: 'лесотський лоті',
      LYD: 'лівійський динар',
      MAD: 'марокканський дирхам',
      MDL: 'молдовський лей',
      MGA: 'малагасійський аріарі',
      MKD: 'македонський денар',
      MMK: 'кʼят Мʼянми',
      MNT: 'монгольський тугрик',
      MOP: 'патака Макао',
      MRU: 'мавританська угія',
      MUR: 'маврикійська рупія',
      MVR: 'мальдівська руфія',
      MWK: 'малавійська квача',
      MXN: 'мексиканський песо',
      MYR: 'малайзійський рингіт',
      MZN: 'мозамбіцький метикал',
      NAD: 'намібійський долар',
      NGN: 'нігерійська найра',
      NIO: 'нікарагуанська кордоба',
      NOK: 'норвезька крона',
      NPR: 'непальська рупія',
      NZD: 'новозеландський долар',
      OMR: 'оманський ріал',
      PAB: 'панамське бальбоа',
      PEN: 'перуанський новий сол',
      PGK: 'кіна Папуа-Нової Ґвінеї',
      PHP: 'філіппінський песо',
      PKR: 'пакистанська рупія',
      PLN: 'польський злотий',
      PYG: 'парагвайський гуарані',
      QAR: 'катарський ріал',
      RON: 'румунський лей',
      RSD: 'сербський динар',
      RUB: 'російський рубль',
      RWF: 'руандійський франк',
      SAR: 'саудівський ріал',
      SBD: 'долар Соломонових Островів',
      SCR: 'сейшельська рупія',
      SDG: 'суданський фунт',
      SEK: 'шведська крона',
      SGD: 'сінгапурський долар',
      SHP: 'фунт острова Святої Єлени',
      SLL: 'леоне Сьєрра-Леоне',
      SOS: 'сомалійський шилінг',
      SRD: 'суринамський долар',
      STN: 'добра Сан-Томе і Прінсіпі',
      SVC: 'сальвадорський колон',
      SYP: 'сирійський фунт',
      SZL: 'свазілендський лілангені',
      THB: 'таїландський бат',
      TJS: 'таджицький сомоні',
      TMT: 'туркменський манат',
      TND: 'туніський динар',
      TOP: 'тонґанська паанга',
      TRY: 'турецька ліра',
      TTD: 'долар Трінідаду і Тобаґо',
      TWD: 'новий тайванський долар',
      TZS: 'танзанійський шилінг',
      UAH: 'українська гривня',
      UGX: 'угандійський шилінг',
      USD: 'долар США',
      UYU: 'уругвайський песо',
      UZS: 'узбецький сум',
      VND: 'вʼєтнамський донг',
      VUV: 'вануатський вату',
      WST: 'самоанська тала',
      XAF: 'центральноафриканський франк',
      XCD: 'східнокарибський долар',
      XDR: 'спеціальні права запозичення',
      XOF: 'західноафриканський франк',
      XPF: 'французький тихоокеанський франк',
      XXX: 'невідома грошова одиниця',
      YER: 'єменський ріал',
      ZAR: 'південноафриканський ранд',
      ZMW: 'замбійська квача',
    },
  },

  uk_UA: {},
};

// Register the Locale Data with nvlps-currency
window.nvlps.registerLocales(UK);
