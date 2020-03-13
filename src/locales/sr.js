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

const SR = {
  sr: {
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
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
    cs: {
      AUD: 'AUD',
      BRL: 'R$',
      CAD: 'CA$',
      CNY: 'CN¥',
      EUR: '€',
      GBP: '£',
      HKD: 'HK$',
      ILS: '₪',
      INR: '₹',
      JPY: '¥',
      KRW: 'KRW',
      MXN: 'MX$',
      NZD: 'NZD',
      TWD: 'NT$',
      USD: 'US$',
      VND: 'VND',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      BAM: 'КМ',
    },
    cn: {
      AED: 'УАЕ дирхам',
      AFN: 'Авганистански авгани',
      ALL: 'Албански лек',
      AMD: 'Јерменски драм',
      ANG: 'Холандскоантилски гулден',
      AOA: 'Анголска кванза',
      ARS: 'Аргентински пезос',
      AUD: 'Аустралијски долар',
      AWG: 'Арубански флорин',
      AZN: 'Азербејџански манат',
      BAM: 'Босанско-херцеговачка конвертибилна марка',
      BBD: 'Барбадошки долар',
      BDT: 'Бангладешка така',
      BGN: 'Бугарски лев',
      BHD: 'Бахреински динар',
      BIF: 'Бурундски франак',
      BMD: 'Бермудски долар',
      BND: 'Брунејски долар',
      BOB: 'Боливијски боливијано',
      BRL: 'Бразилски реал',
      BSD: 'Бахамски долар',
      BTN: 'Бутански нгултрум',
      BWP: 'Боцванска пула',
      BYN: 'Белоруска рубља',
      BZD: 'Белиски долар',
      CAD: 'Канадски долар',
      CDF: 'Конгоански франак',
      CHF: 'Швајцарски франак',
      CLP: 'Чилеански пезос',
      CNY: 'Кинески јуан',
      COP: 'Колумбијски пезос',
      CRC: 'Костарикански колон',
      CUC: 'Кубански конвертибилни пезос',
      CUP: 'Кубански пезос',
      CVE: 'Зеленортски ескудо',
      CZK: 'Чешка круна',
      DJF: 'Џибутски франак',
      DKK: 'Данска круна',
      DOP: 'Доминикански пезос',
      DZD: 'Алжирски динар',
      EGP: 'Египатска фунта',
      ERN: 'Eритрејска накфa',
      ETB: 'Етиопски бир',
      EUR: 'Евро',
      FJD: 'Фиџијски долар',
      FKP: 'Фокландска фунта',
      GBP: 'Британска фунта',
      GEL: 'Грузијски лари',
      GHS: 'Гански седи',
      GIP: 'Гибралтарска фунта',
      GMD: 'Гамбијски даласи',
      GNF: 'Гвинејски франак',
      GTQ: 'Гватемалски кецал',
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
      IRR: 'Ирански риjал',
      ISK: 'Исландска круна',
      JMD: 'Јамајчански долар',
      JOD: 'Јордански динар',
      JPY: 'Јапански јен',
      KES: 'Кенијски шилинг',
      KGS: 'Киргистански сом',
      KHR: 'Kамбоџански ријел',
      KMF: 'Коморски франак',
      KPW: 'Севернокорејски вон',
      KRW: 'Јужнокорејски вон',
      KWD: 'Кувајтски динар',
      KYD: 'Кајмански долар',
      KZT: 'Казахстански тенге',
      LAK: 'Лаошки кип',
      LBP: 'Либанска фунта',
      LKR: 'Шриланканскa рупиja',
      LRD: 'Либеријски долар',
      LSL: 'Лесото лоти',
      LYD: 'Либијски динар',
      MAD: 'Марокански дирхам',
      MDL: 'Молдавски леј',
      MGA: 'Мадагаскарски ариари',
      MKD: 'Македонски денар',
      MMK: 'Мјанмарски кјат',
      MNT: 'Монголски тугрик',
      MOP: 'Макаоска патака',
      MRU: 'Мауританска огија',
      MUR: 'Маурицијска рупија',
      MVR: 'Малдивска руфија',
      MWK: 'Малавијска квача',
      MXN: 'Мексички пезос',
      MYR: 'Малезијски рингит',
      MZN: 'Мозамбички метикал',
      NAD: 'Намибијски долар',
      NGN: 'Нигеријска наира',
      NIO: 'Никарагванска златна кордоба',
      NOK: 'Норвешка круна',
      NPR: 'Непалскa рупиja',
      NZD: 'Новозеландски долар',
      OMR: 'Омански ријал',
      PAB: 'Панамска балбоа',
      PEN: 'Перуански сол',
      PGK: 'Папуанска кина',
      PHP: 'Филипински пезос',
      PKR: 'Пакистанскa рупиja',
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
      SHP: 'Свете Јелене фунта',
      SLL: 'Сијералеонски леоне',
      SOS: 'Сомалијски шилинг',
      SRD: 'Суринамски долар',
      STN: 'Саотомска добра',
      SVC: 'Салвадорски колон',
      SYP: 'Сиријска фунта',
      SZL: 'Свазилендски лилангени',
      THB: 'Тајландски бат',
      TJS: 'Таџикистански сомон',
      TMT: 'Туркменистански манат',
      TND: 'Туниски динар',
      TOP: 'Тонганска панга',
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
      XCD: 'Источнокарипски долар',
      XDR: 'Посебна цртаћа права',
      XOF: 'ЦФА франак БЦЕАО',
      XPF: 'CFP франак',
      XXX: 'Непозната валута',
      YER: 'Јеменски риjал',
      ZAR: 'Јужноафрички ранд',
      ZMW: 'Замбијска квача',
    },
  },

  sr_Latn_ME: {
    cs: {
      BAM: 'KM',
    },
    cn: {
      AED: 'UAE dirham',
      AFN: 'Avganistanski avgani',
      ALL: 'Albanski lek',
      AMD: 'Jermenski dram',
      ANG: 'Holandskoantilski gulden',
      AOA: 'Angolska kvanza',
      ARS: 'Argentinski pezos',
      AUD: 'Australijski dolar',
      AWG: 'Arubanski florin',
      AZN: 'Azerbejdžanski manat',
      BAM: 'Bosansko-hercegovačka konvertibilna marka',
      BBD: 'Barbadoški dolar',
      BDT: 'Bangladeška taka',
      BGN: 'Bugarski lev',
      BHD: 'Bahreinski dinar',
      BIF: 'Burundski franak',
      BMD: 'Bermudski dolar',
      BND: 'Brunejski dolar',
      BOB: 'Bolivijski bolivijano',
      BRL: 'Brazilski real',
      BSD: 'Bahamski dolar',
      BTN: 'Butanski ngultrum',
      BWP: 'Bocvanska pula',
      BYN: 'Beloruska rublja',
      BZD: 'Beliski dolar',
      CAD: 'Kanadski dolar',
      CDF: 'Kongoanski franak',
      CHF: 'Švajcarski franak',
      CLP: 'Čileanski pezos',
      CNY: 'Kineski juan',
      COP: 'Kolumbijski pezos',
      CRC: 'Kostarikanski kolon',
      CUC: 'Kubanski konvertibilni pezos',
      CUP: 'Kubanski pezos',
      CVE: 'Zelenortski eskudo',
      CZK: 'Češka kruna',
      DJF: 'Džibutski franak',
      DKK: 'Danska kruna',
      DOP: 'Dominikanski pezos',
      DZD: 'Alžirski dinar',
      EGP: 'Egipatska funta',
      ERN: 'Eritrejska nakfa',
      ETB: 'Etiopski bir',
      EUR: 'Evro',
      FJD: 'Fidžijski dolar',
      FKP: 'Foklandska funta',
      GBP: 'Britanska funta',
      GEL: 'Gruzijski lari',
      GHS: 'Ganski sedi',
      GIP: 'Gibraltarska funta',
      GMD: 'Gambijski dalasi',
      GNF: 'Gvinejski franak',
      GTQ: 'Gvatemalski kecal',
      GYD: 'Gvajanski dolar',
      HKD: 'Hongkonški dolar',
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
      KPW: 'Severnokorejski von',
      KRW: 'Južnokorejski von',
      KWD: 'Kuvajtski dinar',
      KYD: 'Kajmanski dolar',
      KZT: 'Kazahstanski tenge',
      LAK: 'Laoški kip',
      LBP: 'Libanska funta',
      LKR: 'Šrilankanska rupija',
      LRD: 'Liberijski dolar',
      LSL: 'Lesoto loti',
      LYD: 'Libijski dinar',
      MAD: 'Marokanski dirham',
      MDL: 'Moldavski lej',
      MGA: 'Madagaskarski ariari',
      MKD: 'Makedonski denar',
      MMK: 'Mjanmarski kjat',
      MNT: 'Mongolski tugrik',
      MOP: 'Makaoska pataka',
      MRU: 'Mauritanska ogija',
      MUR: 'Mauricijska rupija',
      MVR: 'Maldivska rufija',
      MWK: 'Malavijska kvača',
      MXN: 'Meksički pezos',
      MYR: 'Malezijski ringit',
      MZN: 'Mozambički metikal',
      NAD: 'Namibijski dolar',
      NGN: 'Nigerijska naira',
      NIO: 'Nikaragvanska zlatna kordoba',
      NOK: 'Norveška kruna',
      NPR: 'Nepalska rupija',
      NZD: 'Novozelandski dolar',
      OMR: 'Omanski rijal',
      PAB: 'Panamska balboa',
      PEN: 'Peruanski sol',
      PGK: 'Papuanska kina',
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
      SHP: 'Svete Jelene funta',
      SLL: 'Sijeraleonski leone',
      SOS: 'Somalijski šiling',
      SRD: 'Surinamski dolar',
      STN: 'Saotomska dobra',
      SVC: 'Salvadorski kolon',
      SYP: 'Sirijska funta',
      SZL: 'Svazilendski lilangeni',
      THB: 'Tajlandski bat',
      TJS: 'Tadžikistanski somon',
      TMT: 'Turkmenistanski manat',
      TND: 'Tuniski dinar',
      TOP: 'Tonganska panga',
      TRY: 'Turska lira',
      TTD: 'Trinidad-tobagoški dolar',
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
      XAF: 'CFA franak BEAC',
      XCD: 'Istočnokaripski dolar',
      XDR: 'Posebna crtaća prava',
      XOF: 'CFA franak BCEAO',
      XPF: 'CFP franak',
      XXX: 'Nepoznata valuta',
      YER: 'Jemenski rijal',
      ZAR: 'Južnoafrički rand',
      ZMW: 'Zambijska kvača',
    },
  },

  sr_Latn_RS: {
    cs: {
      BAM: 'KM',
    },
    cn: {
      AED: 'UAE dirham',
      AFN: 'Avganistanski avgani',
      ALL: 'Albanski lek',
      AMD: 'Jermenski dram',
      ANG: 'Holandskoantilski gulden',
      AOA: 'Angolska kvanza',
      ARS: 'Argentinski pezos',
      AUD: 'Australijski dolar',
      AWG: 'Arubanski florin',
      AZN: 'Azerbejdžanski manat',
      BAM: 'Bosansko-hercegovačka konvertibilna marka',
      BBD: 'Barbadoški dolar',
      BDT: 'Bangladeška taka',
      BGN: 'Bugarski lev',
      BHD: 'Bahreinski dinar',
      BIF: 'Burundski franak',
      BMD: 'Bermudski dolar',
      BND: 'Brunejski dolar',
      BOB: 'Bolivijski bolivijano',
      BRL: 'Brazilski real',
      BSD: 'Bahamski dolar',
      BTN: 'Butanski ngultrum',
      BWP: 'Bocvanska pula',
      BYN: 'Beloruska rublja',
      BZD: 'Beliski dolar',
      CAD: 'Kanadski dolar',
      CDF: 'Kongoanski franak',
      CHF: 'Švajcarski franak',
      CLP: 'Čileanski pezos',
      CNY: 'Kineski juan',
      COP: 'Kolumbijski pezos',
      CRC: 'Kostarikanski kolon',
      CUC: 'Kubanski konvertibilni pezos',
      CUP: 'Kubanski pezos',
      CVE: 'Zelenortski eskudo',
      CZK: 'Češka kruna',
      DJF: 'Džibutski franak',
      DKK: 'Danska kruna',
      DOP: 'Dominikanski pezos',
      DZD: 'Alžirski dinar',
      EGP: 'Egipatska funta',
      ERN: 'Eritrejska nakfa',
      ETB: 'Etiopski bir',
      EUR: 'Evro',
      FJD: 'Fidžijski dolar',
      FKP: 'Foklandska funta',
      GBP: 'Britanska funta',
      GEL: 'Gruzijski lari',
      GHS: 'Ganski sedi',
      GIP: 'Gibraltarska funta',
      GMD: 'Gambijski dalasi',
      GNF: 'Gvinejski franak',
      GTQ: 'Gvatemalski kecal',
      GYD: 'Gvajanski dolar',
      HKD: 'Hongkonški dolar',
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
      KPW: 'Severnokorejski von',
      KRW: 'Južnokorejski von',
      KWD: 'Kuvajtski dinar',
      KYD: 'Kajmanski dolar',
      KZT: 'Kazahstanski tenge',
      LAK: 'Laoški kip',
      LBP: 'Libanska funta',
      LKR: 'Šrilankanska rupija',
      LRD: 'Liberijski dolar',
      LSL: 'Lesoto loti',
      LYD: 'Libijski dinar',
      MAD: 'Marokanski dirham',
      MDL: 'Moldavski lej',
      MGA: 'Madagaskarski ariari',
      MKD: 'Makedonski denar',
      MMK: 'Mjanmarski kjat',
      MNT: 'Mongolski tugrik',
      MOP: 'Makaoska pataka',
      MRU: 'Mauritanska ogija',
      MUR: 'Mauricijska rupija',
      MVR: 'Maldivska rufija',
      MWK: 'Malavijska kvača',
      MXN: 'Meksički pezos',
      MYR: 'Malezijski ringit',
      MZN: 'Mozambički metikal',
      NAD: 'Namibijski dolar',
      NGN: 'Nigerijska naira',
      NIO: 'Nikaragvanska zlatna kordoba',
      NOK: 'Norveška kruna',
      NPR: 'Nepalska rupija',
      NZD: 'Novozelandski dolar',
      OMR: 'Omanski rijal',
      PAB: 'Panamska balboa',
      PEN: 'Peruanski sol',
      PGK: 'Papuanska kina',
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
      SHP: 'Svete Jelene funta',
      SLL: 'Sijeraleonski leone',
      SOS: 'Somalijski šiling',
      SRD: 'Surinamski dolar',
      STN: 'Saotomska dobra',
      SVC: 'Salvadorski kolon',
      SYP: 'Sirijska funta',
      SZL: 'Svazilendski lilangeni',
      THB: 'Tajlandski bat',
      TJS: 'Tadžikistanski somon',
      TMT: 'Turkmenistanski manat',
      TND: 'Tuniski dinar',
      TOP: 'Tonganska panga',
      TRY: 'Turska lira',
      TTD: 'Trinidad-tobagoški dolar',
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
      XAF: 'CFA franak BEAC',
      XCD: 'Istočnokaripski dolar',
      XDR: 'Posebna crtaća prava',
      XOF: 'CFA franak BCEAO',
      XPF: 'CFP franak',
      XXX: 'Nepoznata valuta',
      YER: 'Jemenski rijal',
      ZAR: 'Južnoafrički rand',
      ZMW: 'Zambijska kvača',
    },
  },
};

export default SR;
