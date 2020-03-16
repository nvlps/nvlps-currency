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

const KO = {
  ko: {
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
    },
    cn: {
      AED: '아랍에미리트 디르함',
      AFN: '아프가니스탄 아프가니',
      ALL: '알바니아 레크',
      AMD: '아르메니아 드람',
      ANG: '네덜란드령 안틸레스 길더',
      AOA: '앙골라 콴자',
      ARS: '아르헨티나 페소',
      AUD: '호주 달러',
      AWG: '아루바 플로린',
      AZN: '아제르바이잔 마나트',
      BAM: '보스니아-헤르체고비나 태환 마르크',
      BBD: '바베이도스 달러',
      BDT: '방글라데시 타카',
      BGN: '불가리아 레프',
      BHD: '바레인 디나르',
      BIF: '부룬디 프랑',
      BMD: '버뮤다 달러',
      BND: '부루나이 달러',
      BOB: '볼리비아노',
      BRL: '브라질 레알',
      BSD: '바하마 달러',
      BTN: '부탄 눌투눔',
      BWP: '보츠와나 폴라',
      BYN: '벨라루스 루블',
      BZD: '벨리즈 달러',
      CAD: '캐나다 달러',
      CDF: '콩고 프랑 콩골라스',
      CHF: '스위스 프랑',
      CLP: '칠레 페소',
      CNY: '중국 위안화',
      COP: '콜롬비아 페소',
      CRC: '코스타리카 콜론',
      CUC: '쿠바 태환 페소',
      CUP: '쿠바 페소',
      CVE: '카보베르데 에스쿠도',
      CZK: '체코 공화국 코루나',
      DJF: '지부티 프랑',
      DKK: '덴마크 크로네',
      DOP: '도미니카 페소',
      DZD: '알제리 디나르',
      EGP: '이집트 파운드',
      ERN: '에리트리아 나크파',
      ETB: '에티오피아 비르',
      EUR: '유로',
      FJD: '피지 달러',
      FKP: '포클랜드제도 파운드',
      GBP: '파운드',
      GEL: '조지아 라리',
      GHS: '가나 시디',
      GIP: '지브롤터 파운드',
      GMD: '감비아 달라시',
      GNF: '기니 프랑',
      GTQ: '과테말라 케트살',
      GYD: '가이아나 달러',
      HKD: '홍콩 달러',
      HNL: '온두라스 렘피라',
      HRK: '크로아티아 쿠나',
      HTG: '하이티 구르드',
      HUF: '헝가리 포린트',
      IDR: '인도네시아 루피아',
      ILS: '이스라엘 신권 세켈',
      INR: '인도 루피',
      IQD: '이라크 디나르',
      IRR: '이란 리얄',
      ISK: '아이슬란드 크로나',
      JMD: '자메이카 달러',
      JOD: '요르단 디나르',
      JPY: '일본 엔화',
      KES: '케냐 실링',
      KGS: '키르기스스탄 솜',
      KHR: '캄보디아 리얄',
      KMF: '코모르 프랑',
      KPW: '조선 민주주의 인민 공화국 원',
      KRW: '대한민국 원',
      KWD: '쿠웨이트 디나르',
      KYD: '케이맨 제도 달러',
      KZT: '카자흐스탄 텐게',
      LAK: '라오스 키프',
      LBP: '레바논 파운드',
      LKR: '스리랑카 루피',
      LRD: '라이베리아 달러',
      LSL: '레소토 로티',
      LYD: '리비아 디나르',
      MAD: '모로코 디렘',
      MDL: '몰도바 레이',
      MGA: '마다가스카르 아리아리',
      MKD: '마케도니아 디나르',
      MMK: '미얀마 키얏',
      MNT: '몽골 투그릭',
      MOP: '마카오 파타카',
      MRU: '모리타니 우기야',
      MUR: '모리셔스 루피',
      MVR: '몰디브 제도 루피아',
      MWK: '말라위 콰쳐',
      MXN: '멕시코 페소',
      MYR: '말레이시아 링깃',
      MZN: '모잠비크 메티칼',
      NAD: '나미비아 달러',
      NGN: '니제르 나이라',
      NIO: '니카라과 코르도바 오로',
      NOK: '노르웨이 크로네',
      NPR: '네팔 루피',
      NZD: '뉴질랜드 달러',
      OMR: '오만 리얄',
      PAB: '파나마 발보아',
      PEN: '페루 솔',
      PGK: '파푸아뉴기니 키나',
      PHP: '필리핀 페소',
      PKR: '파키스탄 루피',
      PLN: '폴란드 즐로티',
      PYG: '파라과이 과라니',
      QAR: '카타르 리얄',
      RON: '루마니아 레우',
      RSD: '세르비아 디나르',
      RUB: '러시아 루블',
      RWF: '르완다 프랑',
      SAR: '사우디아라비아 리얄',
      SBD: '솔로몬 제도 달러',
      SCR: '세이셸 루피',
      SDG: '수단 파운드',
      SEK: '스웨덴 크로나',
      SGD: '싱가폴 달러',
      SHP: '세인트헬레나 파운드',
      SLL: '시에라리온 리온',
      SOS: '소말리아 실링',
      SRD: '수리남 달러',
      STN: '상투메 프린시페 도브라',
      SVC: '엘살바도르 콜론',
      SYP: '시리아 파운드',
      SZL: '스와질란드 릴랑게니',
      THB: '태국 바트',
      TJS: '타지키스탄 소모니',
      TMT: '투르크메니스탄 마나트',
      TND: '튀니지 디나르',
      TOP: '통가 파앙가',
      TRY: '신 터키 리라',
      TTD: '트리니다드 토바고 달러',
      TWD: '신 타이완 달러',
      TZS: '탄자니아 실링',
      UAH: '우크라이나 그리브나',
      UGX: '우간다 실링',
      USD: '미국 달러',
      UYU: '우루과이 페소 우루과요',
      UZS: '우즈베키스탄 숨',
      VND: '베트남 동',
      VUV: '바누아투 바투',
      WST: '서 사모아 탈라',
      XAF: '중앙아프리카 CFA 프랑',
      XCD: '동카리브 달러',
      XDR: '특별인출권',
      XOF: '서아프리카 CFA 프랑',
      XPF: 'CFP 프랑',
      XXX: '알 수 없는 통화 단위',
      YER: '예멘 리알',
      ZAR: '남아프리카 랜드',
      ZMW: '잠비아 콰쳐',
    },
    c: 'KRW',
  },

  ko_KP: {
    c: 'KPW',
  },

  ko_KR: {},
};

registerLocales(KO);

export { KO };
