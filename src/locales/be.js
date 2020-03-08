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
  registerLocale('be', {
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
    ap: '#,##0.00 ¤',
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
      BYN: 'Br',
      RUB: '₽'
    },
    cn: {
      AED: 'дырхам ААЭ',
      AFN: 'афганскі афгані',
      ALL: 'албанскі лек',
      AMD: 'армянскі драм',
      ANG: 'нідэрландскі антыльскі гульдэн',
      AOA: 'ангольская кванза',
      ARS: 'аргенцінскае песа',
      AUD: 'аўстралійскі долар',
      AWG: 'арубанскі фларын',
      AZN: 'азербайджанскі манат',
      BAM: 'канверсоўная марка Босніі і Герцагавіны',
      BBD: 'барбадаскі долар',
      BDT: 'бангладэшская така',
      BGN: 'балгарскі леў',
      BHD: 'бахрэйнскі дынар',
      BIF: 'бурундзійскі франк',
      BMD: 'бермудскі долар',
      BND: 'брунейскі долар',
      BOB: 'балівіяна',
      BRL: 'бразільскі рэал',
      BSD: 'багамскі долар',
      BTN: 'бутанскі нгултрум',
      BWP: 'батсванская пула',
      BYN: 'беларускі рубель',
      BZD: 'белізскі долар',
      CAD: 'канадскі долар',
      CDF: 'кангалезскі франк',
      CHF: 'швейцарскі франк',
      CLP: 'чылійскае песа',
      CNY: 'кітайскі юань',
      COP: 'калумбійскае песа',
      CRC: 'коста-рыканскі калон',
      CUC: 'кубінскае канверсоўнае песа',
      CUP: 'кубінскае песа',
      CVE: 'эскуда Каба-Вердэ',
      CZK: 'чэшская крона',
      DJF: 'джыбуційскі франк',
      DKK: 'дацкая крона',
      DOP: 'дамініканскае песа',
      DZD: 'алжырскі дынар',
      EGP: 'егіпецкі фунт',
      ERN: 'эрытрэйская накфа',
      ETB: 'эфіопскі быр',
      EUR: 'еўра',
      FJD: 'фіджыйскі долар',
      FKP: 'фунт Фалклендскіх астравоў',
      GBP: 'брытанскі фунт стэрлінгаў',
      GEL: 'грузінскі лары',
      GHS: 'ганскі седзі',
      GIP: 'гібралтарскі фунт',
      GMD: 'гамбійскі даласі',
      GNF: 'гвінейскі франк',
      GTQ: 'гватэмальскі кетсаль',
      GYD: 'гаянскі долар',
      HKD: 'ганконгскі долар',
      HNL: 'гандураская лемпіра',
      HRK: 'харвацкая куна',
      HTG: 'гаіцянскі гурд',
      HUF: 'венгерскі форынт',
      IDR: 'інданезійская рупія',
      ILS: 'новы ізраільскі шэкель',
      INR: 'індыйская рупія',
      IQD: 'іракскі дынар',
      IRR: 'іранскі рыял',
      ISK: 'ісландская крона',
      JMD: 'ямайскі долар',
      JOD: 'іарданскі дынар',
      JPY: 'японская іена',
      KES: 'кенійскі шылінг',
      KGS: 'кіргізскі сом',
      KHR: 'камбаджыйскі рыель',
      KMF: 'каморскі франк',
      KPW: 'паўночнакарэйская вона',
      KRW: 'паўднёвакарэйская вона',
      KWD: 'кувейцкі дынар',
      KYD: 'долар Кайманавых астравоў',
      KZT: 'казахстанскі тэнге',
      LAK: 'лаоскі кіп',
      LBP: 'ліванскі фунт',
      LKR: 'шры-ланкійская рупія',
      LRD: 'ліберыйскі долар',
      LYD: 'лівійскі дынар',
      MAD: 'мараканскі дырхам',
      MDL: 'малдаўскі лей',
      MGA: 'малагасійскі арыяры',
      MKD: 'македонскі дэнар',
      MMK: 'м’янманскі к’ят',
      MNT: 'мангольскі тугрык',
      MOP: 'патака Макаа',
      MRU: 'маўрытанская угія',
      MUR: 'маўрыкійская рупія',
      MVR: 'мальдыўская руфія',
      MWK: 'малавійская квача',
      MXN: 'мексіканскае песа',
      MYR: 'малайзійскі рынгіт',
      MZN: 'мазамбікскі метыкал',
      NAD: 'намібійскі долар',
      NGN: 'нігерыйская наіра',
      NIO: 'нікарагуанская кордаба',
      NOK: 'нарвежская крона',
      NPR: 'непальская рупія',
      NZD: 'новазеландскі долар',
      OMR: 'аманскі рыял',
      PAB: 'панамскае бальбоа',
      PEN: 'перуанскі соль',
      PGK: 'кіна Папуа-Новай Гвінеі',
      PHP: 'філіпінскае песа',
      PKR: 'пакістанская рупія',
      PLN: 'польскі злоты',
      PYG: 'парагвайскі гуарані',
      QAR: 'катарскі рыял',
      RON: 'румынскі лей',
      RSD: 'сербскі дынар',
      RUB: 'расійскі рубель',
      RWF: 'руандыйскі франк',
      SAR: 'саудаўскі рыял',
      SBD: 'долар Саламонавых астравоў',
      SCR: 'сейшэльская рупія',
      SDG: 'суданскі фунт',
      SEK: 'шведская крона',
      SGD: 'сінгапурскі долар',
      SHP: 'фунт в-ва Святой Алены',
      SLL: 'сьера-леонскі леонэ',
      SOS: 'самалійскі шылінг',
      SRD: 'сурынамскі долар',
      STN: 'добра Сан-Тамэ і Прынсіпі',
      SYP: 'сірыйскі фунт',
      SZL: 'свазілендскі лілангені',
      THB: 'тайскі бат',
      TJS: 'таджыкскі самані',
      TMT: 'туркменскі манат',
      TND: 'туніскі дынар',
      TOP: 'танганская паанга',
      TRY: 'турэцкая ліра',
      TTD: 'долар Трынідада і Табага',
      TWD: 'новы тайваньскі долар',
      TZS: 'танзанійскі шылінг',
      UAH: 'украінская грыўня',
      UGX: 'угандыйскі шылінг',
      USD: 'долар ЗША',
      UYU: 'уругвайскае песа',
      UZS: 'узбекскі сум',
      VND: 'в’етнамскі донг',
      VUV: 'вануацкі вату',
      WST: 'самаанская тала',
      XAF: 'цэнтральнаафрыканскі франк КФА',
      XCD: 'усходнекарыбскі долар',
      XOF: 'заходнеафрыканскі франк КФА',
      XPF: 'французскі ціхаакіянскі франк',
      XXX: 'невядомая валюта',
      YER: 'еменскі рыал',
      ZAR: 'паўднёваафрыканскі рэнд',
      ZMW: 'замбійская квача'
    }
  });

  registerLocale('be_BY', {});
})();
