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

// Locale Data for BS
var BS = {
  bs: {
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
      BRL: 'BRL',
      CAD: 'CAD',
      CNY: 'CNY',
      EUR: '€',
      GBP: 'GBP',
      HKD: 'HKD',
      ILS: 'ILS',
      INR: '₹',
      JPY: '¥',
      KRW: '₩',
      MXN: 'MXN',
      NZD: 'NZD',
      TWD: 'NT$',
      USD: 'USD',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'XCD',
      XOF: 'CFA',
      XPF: 'XPF',
      XXX: '¤',
      BAM: 'KM',
      HRK: 'kn',
      RSD: 'din.',
      THB: '฿',
    },
    cn: {
      AED: 'Dirham Ujedinjenih Arapskih Emirata',
      AFN: 'Afganistanski afgan',
      ALL: 'Albanski lek',
      AMD: 'Armenski dram',
      ANG: 'Holandskoantilski gulden',
      AOA: 'Angolska kvanza',
      ARS: 'Argentinski pezos',
      AUD: 'Australijski dolar',
      AWG: 'Arubanski florin',
      AZN: 'Azerbejdžanski manat',
      BAM: 'Bosanskohercegovačka konvertibilna marka',
      BBD: 'Barbadoski dolar',
      BDT: 'Bangladeška taka',
      BGN: 'Bugarski lev',
      BHD: 'Bahreinski dinar',
      BIF: 'Burundski franak',
      BMD: 'Bermudski dolar',
      BND: 'Brunejski dolar',
      BOB: 'Bolivijski boliviano',
      BRL: 'Brazilski real',
      BSD: 'Bahamski dolar',
      BTN: 'Butanski ngultrum',
      BWP: 'Bocvanska pula',
      BYN: 'Bjeloruska rublja',
      BZD: 'Belizeanski dolar',
      CAD: 'Kanadski dolar',
      CDF: 'Kongoanski franak',
      CHF: 'Švicarski franak',
      CLP: 'Čileanski pezos',
      CNY: 'Kineski juan',
      COP: 'Kolumbijski pezos',
      CRC: 'Kostarikanski kolon',
      CUC: 'Kubanski konvertibilni pezos',
      CUP: 'kubanski pezos',
      CVE: 'Zelenortski eskudo',
      CZK: 'Češka kruna',
      DJF: 'Džibutski franak',
      DKK: 'Danska kruna',
      DOP: 'Dominikanski pezos',
      DZD: 'Alžirski dinar',
      EGP: 'Egipatska funta',
      ERN: 'Eritrejska nakfa',
      ETB: 'Etiopski bir',
      EUR: 'Euro',
      FJD: 'Fidžijski dolar',
      FKP: 'Folklandska funta',
      GBP: 'Britanska funta',
      GEL: 'Gruzijski lari',
      GHS: 'Ganski cedi',
      GIP: 'Gibraltarska funta',
      GMD: 'Gambijski dalasi',
      GNF: 'Gvinejski franak',
      GTQ: 'Gvatemalski kecal',
      GYD: 'Gvajanski dolar',
      HKD: 'Honkonški dolar',
      HNL: 'Honduraška lempira',
      HRK: 'Hrvatska kuna',
      HTG: 'Haićanski gurd',
      HUF: 'Mađarska forinta',
      IDR: 'Indonežanska rupija',
      ILS: 'Izraelski novi šekel',
      INR: 'Indijska rupija',
      IQD: 'Irački dinar',
      IRR: 'Iranski rijal',
      ISK: 'Islandska kruna',
      JMD: 'Jamajčanski dolar',
      JOD: 'Jordanski dinar',
      JPY: 'Japanski jen',
      KES: 'Kenijski šiling',
      KGS: 'Kirgistanski som',
      KHR: 'Kambodžanski rijel',
      KMF: 'Komorski franak',
      KPW: 'Sjevernokorejski von',
      KRW: 'Južnokorejski von',
      KWD: 'Kuvajtski dinar',
      KYD: 'Kajmanski dolar',
      KZT: 'Kazahstanski tenge',
      LAK: 'Laoski kip',
      LBP: 'Libanska funta',
      LKR: 'Šrilankanska rupija',
      LRD: 'Liberijski dolar',
      LSL: 'Lesotski loti',
      LYD: 'Libijski dinar',
      MAD: 'Marokanski dirham',
      MDL: 'Moldavski lej',
      MGA: 'Malagaški arijari',
      MKD: 'Makedonski denar',
      MMK: 'Mijanmarski kjat',
      MNT: 'Mongolski tugrik',
      MOP: 'Makaonska pataka',
      MRU: 'Mauritanijska ugvija',
      MUR: 'Mauricijska rupija',
      MVR: 'Maldivska rufija',
      MWK: 'Malavijska kvača',
      MXN: 'Meksički pezos',
      MYR: 'Malezijski ringit',
      MZN: 'Mozambijski metikal',
      NAD: 'Namibijski dolar',
      NGN: 'Nigerijska naira',
      NIO: 'Nikaragvanska kordoba',
      NOK: 'Norveška kruna',
      NPR: 'Nepalska rupija',
      NZD: 'Novozelandski dolar',
      OMR: 'Omanski rijal',
      PAB: 'Panamska balboa',
      PEN: 'Peruanski sol',
      PGK: 'Kina Papue Nove Gvineje',
      PHP: 'Filipinski pezos',
      PKR: 'Pakistanska rupija',
      PLN: 'Poljski zlot',
      PYG: 'Paragvajski gvarani',
      QAR: 'Katarski rijal',
      RON: 'Rumunski lej',
      RSD: 'Srpski dinar',
      RUB: 'Ruska rublja',
      RWF: 'Ruandski franak',
      SAR: 'Saudijski rijal',
      SBD: 'Solomonski dolar',
      SCR: 'Sejšelska rupija',
      SDG: 'Sudanska funta',
      SEK: 'Švedska kruna',
      SGD: 'Singapurski dolar',
      SHP: 'Svetohelenska funta',
      SLL: 'Sijeraleonski leone',
      SOS: 'Somalski šiling',
      SRD: 'Surinamski dolar',
      STN: 'Dobra Sao Toma i Principa',
      SVC: 'Salvadorski kolon',
      SYP: 'Sirijska funta',
      SZL: 'Svazilendski lilangeni',
      THB: 'Tajlandski baht',
      TJS: 'Tadžikistanski somoni',
      TMT: 'Turkmenistanski manat',
      TND: 'Tuniški dinar',
      TOP: 'Tonganska panga',
      TRY: 'Turska lira',
      TTD: 'Trinidadtobaški dolar',
      TWD: 'Novi tajvanski dolar',
      TZS: 'Tanzanijski šiling',
      UAH: 'Ukrajinska hrivnja',
      UGX: 'Ugandski šiling',
      USD: 'Američki dolar',
      UYU: 'Urugvajski pezos',
      UZS: 'Uzbekistanski som',
      VND: 'Vijetnamski dong',
      VUV: 'Vanuatski vatu',
      WST: 'Samoanska tala',
      XAF: 'Centralnoafrički franak (CFA)',
      XCD: 'Istočnokaripski dolar',
      XDR: 'Posebna prava',
      XOF: 'Zapadnoafrički franak (CFA)',
      XPF: 'Franak (CFP)',
      XXX: 'Nepoznata valuta',
      YER: 'Jemenski rijal',
      ZAR: 'Južnoafrički rand',
      ZMW: 'Zambijska kvača',
    },
  },

  bs_Cyrl_BA: {
    cs: {
      AUD: 'A$',
      BRL: 'R$',
      CAD: 'CA$',
      CNY: 'CN¥',
      GBP: '£',
      HKD: 'HK$',
      ILS: '₪',
      MXN: 'MX$',
      NZD: 'NZ$',
      USD: 'US$',
      XCD: 'EC$',
      XPF: 'CFPF',
      BAM: 'КМ',
      CZK: 'Кч',
      PLN: 'зл',
      RSD: 'дин.',
      TRY: 'Тл',
    },
    cn: {
      AED: 'Уједињени арапски емирати дирхам',
      AFN: 'Афганистански афгани',
      ALL: 'Албански лек',
      AMD: 'Арменски драм',
      ANG: 'Холандски антили гилдер',
      AOA: 'Анголска кванза',
      ARS: 'Аргентински пезос',
      AUD: 'Аустралијски долар',
      AWG: 'Арубански флорин',
      AZN: 'Азербејџански манат',
      BAM: 'Конвертибилна марка',
      BBD: 'Барбадоски долар',
      BDT: 'Бангладешка така',
      BGN: 'Бугарски лев',
      BHD: 'Бахреински динар',
      BIF: 'Бурундски франак',
      BMD: 'Бермудски долар',
      BND: 'Брунејски долар',
      BOB: 'Боливијски боливиано',
      BRL: 'Бразилски реал',
      BSD: 'Бахамски долар',
      BTN: 'Бутански нгултрум',
      BWP: 'Боцванска пула',
      BYN: 'Белоруска рубља',
      BZD: 'Белизеански долар',
      CAD: 'Канадски долар',
      CDF: 'Конгоански франак',
      CHF: 'Швајцарски франак',
      CLP: 'Чилеански пезос',
      CNY: 'Кинески јуан',
      COP: 'Колумбијски пезос',
      CRC: 'Костарикански колон',
      CUC: 'кубански конвертибилни пезос',
      CUP: 'Кубански пезос',
      CVE: 'Зеленортски ескудо',
      CZK: 'Чешка круна',
      DJF: 'Џибутски франак',
      DKK: 'Данска круна',
      DOP: 'Доминикански пезос',
      DZD: 'Алжирски динар',
      EGP: 'Египатска фунта',
      ERN: 'Еритрејска накфа',
      ETB: 'Етиопијски бир',
      EUR: 'Евро',
      FJD: 'Фиџи долар',
      FKP: 'Фолкландска фунта',
      GBP: 'Британска фунта',
      GEL: 'Грузијски лари',
      GHS: 'Гански цеди',
      GIP: 'Гибралтаска фунта',
      GMD: 'Гамбијски даласи',
      GNF: 'Гвинејски франак',
      GTQ: 'Гватемалски квецал',
      GYD: 'Гвајански долар',
      HKD: 'Хонгконшки долар',
      HNL: 'Хондурашка лемпира',
      HRK: 'Хрватска куна',
      HTG: 'Хаићански гурд',
      HUF: 'Мађарска форинта',
      IDR: 'Индонежанска рупија',
      ILS: 'Израелски нови шекел',
      INR: 'Индијска рупија',
      IQD: 'Ирачки динар',
      IRR: 'Ирански ријал',
      ISK: 'Исландска круна',
      JMD: 'Јамајски долар',
      JOD: 'Јордански динар',
      JPY: 'Јапански јен',
      KES: 'Кенијски шилинг',
      KGS: 'Киргистански сом',
      KHR: 'Камбоџански ријел',
      KMF: 'Коморски франак',
      KPW: 'Севернокорејски вон',
      KRW: 'Јужнокорејски вон',
      KWD: 'Кувајтски динар',
      KYD: 'Кајмански долар',
      KZT: 'Казахстански тенге',
      LAK: 'Лаоски кип',
      LBP: 'Либанска фунта',
      LKR: 'Шриланканска рупија',
      LRD: 'Либеријски долар',
      LSL: 'Лесото лоти',
      LYD: 'Либијски динар',
      MAD: 'Марокански дирхам',
      MDL: 'Молдавски леј',
      MGA: 'Мадагаскарски аријари',
      MKD: 'Македонски денар',
      MMK: 'Мијанмарски кјат',
      MNT: 'Монголски тугрик',
      MOP: 'Макаоска патака',
      MRU: 'Мауританска огија',
      MUR: 'Маурицијска рупија',
      MVR: 'Малдивска руфија',
      MWK: 'Малавијска квача',
      MXN: 'Мексички пезос',
      MYR: 'Малезијски рингит',
      MZN: 'Мозамбијски метикал',
      NAD: 'Намибијски долар',
      NGN: 'Нигеријска наира',
      NIO: 'Никарагванска златна кордоба',
      NOK: 'Норвешка круна',
      NPR: 'Непалска рупија',
      NZD: 'Новозеландски долар',
      OMR: 'Омански ријал',
      PAB: 'Панамска балбоа',
      PEN: 'Перуански сол',
      PGK: 'Папуанска кина',
      PHP: 'Филипински пезос',
      PKR: 'Пакистанска рупија',
      PLN: 'Пољски злот',
      PYG: 'Парагвајски гварани',
      QAR: 'Катарски ријал',
      RON: 'Румунски леј',
      RSD: 'Српски динар',
      RUB: 'Руска рубља',
      RWF: 'Руандски франак',
      SAR: 'Саудијски ријал',
      SBD: 'Соломонски долар',
      SCR: 'Сејшелска рупија',
      SDG: 'Суданска фунта',
      SEK: 'Шведска круна',
      SGD: 'Сингапурски долар',
      SHP: 'Света Јелена фунта',
      SLL: 'Сијералеонски леоне',
      SOS: 'Сомалијски шилинг',
      SRD: 'Суринамски долар',
      STN: 'Сао Томе и Принципе добра',
      SVC: 'Салвадорски колон',
      SYP: 'Сиријска фунта',
      SZL: 'Свазилендски лилангени',
      THB: 'Тајски бахт',
      TJS: 'Таџикистански сомони',
      TMT: 'Туркменистански манат',
      TND: 'Туниски динар',
      TOP: 'Тонгоанска панга',
      TRY: 'Турска лира',
      TTD: 'Тринидад-тобагошки долар',
      TWD: 'Нови тајвански долар',
      TZS: 'Танзанијски шилинг',
      UAH: 'Украјинска хривња',
      UGX: 'Угандски шилинг',
      USD: 'Амерички долар',
      UYU: 'Уругвајски пезос',
      UZS: 'Узбекистански сом',
      VND: 'Вијетнамски донг',
      VUV: 'Вануатски вату',
      WST: 'Самоанска тала',
      XAF: 'CFA франак BEAC',
      XCD: 'Источно-карибски долар',
      XDR: 'Посебна цртаћа права',
      XOF: 'CFA франак BCEAO',
      XPF: 'CFP франак',
      XXX: 'Непозната или неважећа валута',
      YER: 'Јеменски ријал',
      ZAR: 'Јужноафрички ранд',
      ZMW: 'Замбијска квача',
    },
  },

  bs_BA: {},
};

// Register the Locale Data with nvlps-currency
window.nvlps.registerLocales(BS);
