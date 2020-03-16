/* eslint object-curly-newline: 0, import/prefer-default-export: 0 */
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

import { registerLocales } from '@nvlps/currency';

const SQ = {
  sq: {
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
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
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
      ALL: 'Lekë',
      THB: '฿',
    },
    cn: {
      AED: 'Dirhami i Emirateve të Bashkuara Arabe',
      AFN: 'Afgani afgan',
      ALL: 'Leku shqiptar',
      AMD: 'Dramia armene',
      ANG: 'Gilderi antilian holandez',
      AOA: 'Kuanza e Angolës',
      ARS: 'Pesoja argjentinase',
      AUD: 'Dollari australian',
      AWG: 'Florini aruban',
      AZN: 'Manata azerbajxhanase',
      BAM: 'Marka e Bosnjë-Hercegovinës [e shkëmbyeshme]',
      BBD: 'Dollari barbadian',
      BDT: 'Taka e Bangladeshit',
      BGN: 'Leva bullgare',
      BHD: 'Dinari i Bahreinit',
      BIF: 'Franga burundiane',
      BMD: 'Dollari i Bermudeve',
      BND: 'Dollari i Bruneit',
      BOB: 'Boliviani i Bolivisë',
      BRL: 'Reali brazilian',
      BSD: 'Dollari i Bahamasit',
      BTN: 'Ngultrumi butanez',
      BWP: 'Pula botsuane',
      BYN: 'Rubla bjelloruse',
      BZD: 'Dollari i Ishujve Belize',
      CAD: 'Dollari kanadez',
      CDF: 'Franga kongole',
      CHF: 'Franga zvicerane',
      CLP: 'Pesoja kiliane',
      CNY: 'Juani kinez',
      COP: 'Pesoja kolumbiane',
      CRC: 'Koloni kostarikan',
      CUC: 'Pesoja kubaneze e shkëmbyeshme',
      CUP: 'Pesoja kubaneze',
      CVE: 'Eskudoja e Kepit të Gjelbër',
      CZK: 'Koruna e Çekisë',
      DJF: 'Franga xhibutiane',
      DKK: 'Korona daneze',
      DOP: 'Pesoja dominikane',
      DZD: 'Dinari algjerian',
      EGP: 'Sterlina egjiptiane',
      ERN: 'Nakfa e Eritresë',
      ETB: 'Bira etiopiane',
      EUR: 'Euroja',
      FJD: 'Dollari i Fixhit',
      FKP: 'Stërlina e Ishujve Falkland',
      GBP: 'Sterlina britanike',
      GEL: 'Laria gjeorgjiane',
      GHS: 'Sejda ganeze',
      GIP: 'Sterlina e Gjibraltarit',
      GMD: 'Dalasi gambian',
      GNF: 'Franga guinease',
      GTQ: 'Kuecali i Guatemalës',
      GYD: 'Dollari guajanez',
      HKD: 'Dollari i Hong-Kongut',
      HNL: 'Lempira hondurase',
      HRK: 'Kuna kroate',
      HTG: 'Gurdi haitian',
      HUF: 'Forinta hungareze',
      IDR: 'Rupia indoneziane',
      ILS: 'Shekeli izrealit',
      INR: 'Rupia indiane',
      IQD: 'Dinari irakian',
      IRR: 'Riali iranian',
      ISK: 'Korona islandeze',
      JMD: 'Dollari xhamajkan',
      JOD: 'Dinari jordanez',
      JPY: 'Jeni japonez',
      KES: 'Shilinga keniane',
      KGS: 'Soma kirgize',
      KHR: 'Riali kamboxhian',
      KMF: 'Franga komore',
      KPW: 'Uoni koreano-verior',
      KRW: 'Uoni koreano-jugor',
      KWD: 'Dinari kuvajtian',
      KYD: 'Dollari i Ishujve Kajman',
      KZT: 'Tenga kazake',
      LAK: 'Kipa e Laosit',
      LBP: 'Sterlina libaneze',
      LKR: 'Rupia e Sri-Lankës',
      LRD: 'Dollari liberian',
      LYD: 'Dinari libian',
      MAD: 'Dirhami maroken',
      MDL: 'Leuja moldave',
      MGA: 'Arieri malagez',
      MKD: 'Denari maqedonas',
      MMK: 'Kiata e Mianmarit',
      MNT: 'Tugrika mongole',
      MOP: 'Pataka e Makaos',
      MRU: 'Ugija mauritane',
      MUR: 'Rupia mauritiane',
      MVR: 'Rufiu i Maldivit',
      MWK: 'Kuaça malaviane',
      MXN: 'Pesoja meksikane',
      MYR: 'Ringiti malajzian',
      MZN: 'Metikali i Mozambikut',
      NAD: 'Dollari i Namibisë',
      NGN: 'Naira nigeriane',
      NIO: 'Kordoba nikaraguane',
      NOK: 'Korona norvegjeze',
      NPR: 'Rupia nepaleze',
      NZD: 'Dollari i Zelandës së Re',
      OMR: 'Riali i Omanit',
      PAB: 'Balboa panameze',
      PEN: 'Sola peruane',
      PGK: 'Kina e Guinesë së Re-Papua',
      PHP: 'Pesoja filipinase',
      PKR: 'Rupia pakistaneze',
      PLN: 'Zllota polake',
      PYG: 'Guarani paraguaian',
      QAR: 'Riali i Katarit',
      RON: 'Leuja rumune',
      RSD: 'Dinari serb',
      RUB: 'Rubla ruse',
      RWF: 'Franga ruandeze',
      SAR: 'Riali saudit',
      SBD: 'Dollari i Ishujve Solomonë',
      SCR: 'Rupia e Ishujve Sishelë',
      SDG: 'Sterlina sudaneze',
      SEK: 'Korona suedeze',
      SGD: 'Dollari i Singaporit',
      SHP: 'Sterlina e Ishullit të Shën-Helenës',
      SLL: 'Leoni i Sierra-Leones',
      SOS: 'Shilinga somaleze',
      SRD: 'Dollari surinamez',
      STN: 'Dobra e Sao-Tomes dhe Prinsipes',
      SYP: 'Sterlina siriane',
      SZL: 'Lilangeni i Suazilandës',
      THB: 'Bata tajlandeze',
      TJS: 'Somona taxhike',
      TMT: 'Manata turkmene',
      TND: 'Dinari tunizian',
      TOP: 'Panga tongane',
      TRY: 'Lira turke',
      TTD: 'Dollari i Trinidadit dhe Tobagos',
      TWD: 'Dollari tajvanez',
      TZS: 'Shilinga e Tanzanisë',
      UAH: 'Rivnia ukrainase',
      UGX: 'Shilinga ugandeze',
      USD: 'Dollari amerikan',
      UYU: 'Pesoja uruguaiane',
      UZS: 'Soma uzbeke',
      VND: 'Donga vietnameze',
      VUV: 'Vatuja e Vanuatusë',
      WST: 'Tala samoane',
      XAF: 'Franga kamerunase',
      XCD: 'Dollari i Karaibeve Lindore',
      XOF: 'Franga e Bregut të Fildishtë',
      XPF: 'Franga franceze e Polinezisë',
      XXX: 'Valutë e panjohur',
      YER: 'Riali i Jemenit',
      ZAR: 'Randi afrikano-jugor',
      ZMW: 'Kuaça e Zambikut',
    },
  },

  sq_AL: {
    c: 'ALL',
  },

  sq_XK: {
    c: 'EUR',
  },
};

registerLocales(SQ);

export { SQ };
