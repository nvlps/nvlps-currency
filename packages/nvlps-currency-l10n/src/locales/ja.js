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

const JA = {
  ja: {
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
      CNY: '元',
      EUR: '€',
      GBP: '£',
      HKD: 'HK$',
      ILS: '₪',
      INR: '₹',
      JPY: '￥',
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
    },
    cn: {
      AED: 'アラブ首長国連邦ディルハム',
      AFN: 'アフガニスタン アフガニー',
      ALL: 'アルバニア レク',
      AMD: 'アルメニア ドラム',
      ANG: 'オランダ領アンティル ギルダー',
      AOA: 'アンゴラ クワンザ',
      ARS: 'アルゼンチン ペソ',
      AUD: 'オーストラリア ドル',
      AWG: 'アルバ ギルダー',
      AZN: 'アゼルバイジャン マナト',
      BAM: 'ボスニア・ヘルツェゴビナ 兌換マルク (BAM)',
      BBD: 'バルバドス ドル',
      BDT: 'バングラデシュ タカ',
      BGN: 'ブルガリア 新レフ',
      BHD: 'バーレーン ディナール',
      BIF: 'ブルンジ フラン',
      BMD: 'バミューダ ドル',
      BND: 'ブルネイ ドル',
      BOB: 'ボリビア ボリビアーノ',
      BRL: 'ブラジル レアル',
      BSD: 'バハマ ドル',
      BTN: 'ブータン ニュルタム',
      BWP: 'ボツワナ プラ',
      BYN: 'ベラルーシ ルーブル',
      BZD: 'ベリーズ ドル',
      CAD: 'カナダ ドル',
      CDF: 'コンゴ フラン',
      CHF: 'スイス フラン',
      CLP: 'チリ ペソ',
      CNY: '中国人民元',
      COP: 'コロンビア ペソ',
      CRC: 'コスタリカ コロン',
      CUC: 'キューバ 兌換ペソ',
      CUP: 'キューバ ペソ',
      CVE: 'カーボベルデ エスクード',
      CZK: 'チェコ コルナ',
      DJF: 'ジブチ フラン',
      DKK: 'デンマーク クローネ',
      DOP: 'ドミニカ ペソ',
      DZD: 'アルジェリア ディナール',
      EGP: 'エジプト ポンド',
      ERN: 'エリトリア ナクファ',
      ETB: 'エチオピア ブル',
      EUR: 'ユーロ',
      FJD: 'フィジー ドル',
      FKP: 'フォークランド（マルビナス）諸島 ポンド',
      GBP: '英国ポンド',
      GEL: 'ジョージア ラリ',
      GHS: 'ガーナ セディ',
      GIP: 'ジブラルタル ポンド',
      GMD: 'ガンビア ダラシ',
      GNF: 'ギニア フラン',
      GTQ: 'グアテマラ ケツァル',
      GYD: 'ガイアナ ドル',
      HKD: '香港ドル',
      HNL: 'ホンジュラス レンピラ',
      HRK: 'クロアチア クーナ',
      HTG: 'ハイチ グールド',
      HUF: 'ハンガリー フォリント',
      IDR: 'インドネシア ルピア',
      ILS: 'イスラエル新シェケル',
      INR: 'インド ルピー',
      IQD: 'イラク ディナール',
      IRR: 'イラン リアル',
      ISK: 'アイスランド クローナ',
      JMD: 'ジャマイカ ドル',
      JOD: 'ヨルダン ディナール',
      JPY: '日本円',
      KES: 'ケニア シリング',
      KGS: 'キルギス ソム',
      KHR: 'カンボジア リエル',
      KMF: 'コモロ フラン',
      KPW: '北朝鮮ウォン',
      KRW: '韓国ウォン',
      KWD: 'クウェート ディナール',
      KYD: 'ケイマン諸島 ドル',
      KZT: 'カザフスタン テンゲ',
      LAK: 'ラオス キープ',
      LBP: 'レバノン ポンド',
      LKR: 'スリランカ ルピー',
      LRD: 'リベリア ドル',
      LSL: 'レソト ロティ',
      LYD: 'リビア ディナール',
      MAD: 'モロッコ ディルハム',
      MDL: 'モルドバ レイ',
      MGA: 'マダガスカル アリアリ',
      MKD: 'マケドニア デナル',
      MMK: 'ミャンマー チャット',
      MNT: 'モンゴル トグログ',
      MOP: 'マカオ パタカ',
      MRU: 'モーリタニア ウギア',
      MUR: 'モーリシャス ルピー',
      MVR: 'モルディブ ルフィア',
      MWK: 'マラウィ クワチャ',
      MXN: 'メキシコ ペソ',
      MYR: 'マレーシア リンギット',
      MZN: 'モザンビーク メティカル',
      NAD: 'ナミビア ドル',
      NGN: 'ナイジェリア ナイラ',
      NIO: 'ニカラグア コルドバ オロ',
      NOK: 'ノルウェー クローネ',
      NPR: 'ネパール ルピー',
      NZD: 'ニュージーランド ドル',
      OMR: 'オマーン リアル',
      PAB: 'パナマ バルボア',
      PEN: 'ペルー ソル',
      PGK: 'パプアニューギニア キナ',
      PHP: 'フィリピン ペソ',
      PKR: 'パキスタン ルピー',
      PLN: 'ポーランド ズウォティ',
      PYG: 'パラグアイ グアラニ',
      QAR: 'カタール リアル',
      RON: 'ルーマニア レイ',
      RSD: 'ディナール (セルビア)',
      RUB: 'ロシア ルーブル',
      RWF: 'ルワンダ フラン',
      SAR: 'サウジ リヤル',
      SBD: 'ソロモン諸島 ドル',
      SCR: 'セーシェル ルピー',
      SDG: 'スーダン ポンド',
      SEK: 'スウェーデン クローナ',
      SGD: 'シンガポール ドル',
      SHP: 'セントヘレナ ポンド',
      SLL: 'シエラレオネ レオン',
      SOS: 'ソマリア シリング',
      SRD: 'スリナム ドル',
      STN: 'サントメ・プリンシペ ドブラ',
      SVC: 'エルサルバドル コロン',
      SYP: 'シリア ポンド',
      SZL: 'スワジランド リランゲニ',
      THB: 'タイ バーツ',
      TJS: 'タジキスタン ソモニ',
      TMT: 'トルクメニスタン マナト',
      TND: 'チュニジア ディナール',
      TOP: 'トンガ パ・アンガ',
      TRY: '新トルコリラ',
      TTD: 'トリニダード・トバゴ ドル',
      TWD: '新台湾ドル',
      TZS: 'タンザニア シリング',
      UAH: 'ウクライナ グリブナ',
      UGX: 'ウガンダ シリング',
      USD: '米ドル',
      UYU: 'ウルグアイ ペソ',
      UZS: 'ウズベキスタン スム',
      VND: 'ベトナム ドン',
      VUV: 'バヌアツ バツ',
      WST: 'サモア タラ',
      XAF: '中央アフリカ CFA フラン',
      XCD: '東カリブ ドル',
      XDR: '特別引き出し権',
      XOF: '西アフリカ CFA フラン',
      XPF: 'CFP フラン',
      XXX: '不明または無効な通貨',
      YER: 'イエメン リアル',
      ZAR: '南アフリカ ランド',
      ZMW: 'ザンビア クワチャ',
    },
    c: 'JPY',
  },

  ja_JP: {},
};

registerLocales(JA);

export { JA };
