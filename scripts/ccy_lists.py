'''
ccy_lists.py - List of Currencies and Locales supported by nvlps-currency

  Copyright (c) 2020 Asymworks, LLC.

  The nvlps-currency library may be freely distributed under the terms of
  the BSD license.  For all licensing information, details and documentation:
  https://nvlps.io/nvlps-currency

These lists are used by gen_ccy_data.py and gen_ccy_l10n.py to generate data
for the currencies and locales to be supported by nvlps-currency.
'''

# 156 currencies in circulation currently from xe.com
NVLPS_CURRENCY_LIST = (
    'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN',
    'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL',
    'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY',
    'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD',
    'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP',
    'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR',
    'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS',
    'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR',
    'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP',
    'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO',
    'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN',
    'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG',
    'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STN', 'SVC', 'SYP', 'SZL',
    'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH',
    'UGX', 'USD', 'UYU', 'UZS', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XDR',
    'XOF', 'XPF', 'XXX', 'YER', 'ZAR', 'ZMW'
)

# List of supported Languages
NVLPS_LANG_LIST = (
    'af', 'ak', 'am', 'ar', 'az', 'be', 'bem', 'bg', 'bm', 'bn', 'bs', 'ca',
    'cs', 'da', 'de', 'dz', 'el', 'en', 'es', 'et', 'fa', 'fi', 'fo', 'fr',
    'ha', 'he', 'hi', 'hr', 'hu', 'hy', 'id', 'is', 'it', 'ja', 'ka', 'kea',
    'kl', 'km', 'ko', 'ky', 'lo', 'lt', 'lv', 'mfe', 'mg', 'mk', 'mn', 'ms',
    'mt', 'my', 'nb', 'ne', 'nl', 'pl', 'pt', 'rn', 'ro', 'ru', 'rw', 'si',
    'sk', 'sl', 'sn', 'so', 'sq', 'sr', 'sv', 'sw', 'tg', 'th', 'ti', 'tk',
    'to', 'tr', 'uk', 'ur', 'uz', 'vi', 'wo', 'yue', 'zh'
)

# List of aliased Locales by Language
NVLPS_LOCALE_ALIASES = {
    'ar': 'ar_SY', 'bg': 'bg_BG', 'bs': 'bs_BA', 'ca': 'ca_ES', 'cs': 'cs_CZ',
    'da': 'da_DK', 'de': 'de_DE', 'el': 'el_GR', 'en': 'en_US', 'es': 'es_ES',
    'et': 'et_EE', 'fa': 'fa_IR', 'fi': 'fi_FI', 'fr': 'fr_FR', 'gl': 'gl_ES',
    'he': 'he_IL', 'hu': 'hu_HU', 'id': 'id_ID', 'is': 'is_IS', 'it': 'it_IT',
    'ja': 'ja_JP', 'km': 'km_KH', 'ko': 'ko_KR', 'lt': 'lt_LT', 'lv': 'lv_LV',
    'mk': 'mk_MK', 'nl': 'nl_NL', 'nn': 'nn_NO', 'no': 'nb_NO', 'pl': 'pl_PL',
    'pt': 'pt_PT', 'ro': 'ro_RO', 'ru': 'ru_RU', 'sk': 'sk_SK', 'sl': 'sl_SI',
    'sv': 'sv_SE', 'th': 'th_TH', 'tr': 'tr_TR', 'uk': 'uk_UA'
}

# List of supported Locales (prior to pruning)
NVLPS_LOCALE_LIST = (
    'af_NA', 'ak_GH', 'am_ET', 'ar_AE', 'ar_BH', 'ar_DZ', 'ar_EG', 'ar_EH',
    'ar_IQ', 'ar_JO', 'ar_KM', 'ar_KW', 'ar_LB', 'ar_LY', 'ar_MA', 'ar_MR',
    'ar_OM', 'ar_PS', 'ar_QA', 'ar_SA', 'ar_SD', 'ar_SS', 'ar_SY', 'ar_TN',
    'ar_YE', 'az_Cyrl_AZ', 'be_BY', 'bem_ZM', 'bg_BG', 'bm_ML', 'bn_BD',
    'bs_Cyrl_BA', 'ca_AD', 'cs_CZ', 'da_DK', 'de_AT', 'de_CH', 'de_DE',
    'de_LI', 'dz_BT', 'el_CY', 'el_GR', 'en_AG', 'en_AI', 'en_AS', 'en_AU',
    'en_BB', 'en_BE', 'en_BM', 'en_BS', 'en_BW', 'en_BZ', 'en_CA', 'en_CC',
    'en_CK', 'en_CX', 'en_DG', 'en_DM', 'en_FJ', 'en_FK', 'en_FM', 'en_GB',
    'en_GD', 'en_GG', 'en_GI', 'en_GM', 'en_GU', 'en_GY', 'en_IE', 'en_IM',
    'en_IO', 'en_JE', 'en_JM', 'en_KI', 'en_KN', 'en_KY', 'en_LC', 'en_LR',
    'en_LS', 'en_MH', 'en_MP', 'en_MS', 'en_MW', 'en_NF', 'en_NG', 'en_NR',
    'en_NU', 'en_NZ', 'en_PG', 'en_PH', 'en_PN', 'en_PW', 'en_SB', 'en_SG',
    'en_SH', 'en_SL', 'en_SX', 'en_SZ', 'en_TC', 'en_TK', 'en_TT', 'en_TV',
    'en_UM', 'en_US', 'en_US_POSIX', 'en_VC', 'en_VG', 'en_VI', 'en_VU',
    'en_WS', 'en_ZA', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_CU',
    'es_DO', 'es_EA', 'es_EC', 'es_ES', 'es_GQ', 'es_GT', 'es_HN', 'es_IC',
    'es_MX', 'es_NI', 'es_PA', 'es_PE', 'es_PR', 'es_PY', 'es_SV', 'es_UY',
    'es_VE', 'et_EE', 'fa_AF', 'fa_IR', 'fi_FI', 'fo_FO', 'fr_BF', 'fr_BJ',
    'fr_BL', 'fr_CF', 'fr_CG', 'fr_CI', 'fr_CM', 'fr_FR', 'fr_GA', 'fr_GF',
    'fr_GN', 'fr_GP', 'fr_HT', 'fr_LU', 'fr_MC', 'fr_MF', 'fr_MQ', 'fr_NC',
    'fr_PF', 'fr_PM', 'fr_RE', 'fr_SC', 'fr_TD', 'fr_TG', 'fr_WF', 'fr_YT',
    'ha_NE', 'he_IL', 'hi_IN', 'hr_HR', 'hu_HU', 'hy_AM', 'id_ID', 'is_IS',
    'it_IT', 'it_SM', 'it_VA', 'ja_JP', 'ka_GE', 'kea_CV', 'kl_GL', 'km_KH',
    'ko_KP', 'ko_KR', 'ky_KG', 'lo_LA', 'lt_LT', 'lv_LV', 'mfe_MU', 'mg_MG',
    'mk_MK', 'mn_MN', 'ms_BN', 'ms_MY', 'mt_MT', 'my_MM', 'nb_NO', 'nb_SJ',
    'ne_NP', 'nl_AW', 'nl_BQ', 'nl_CW', 'nl_NL', 'nl_SR', 'pl_PL', 'pt_AO',
    'pt_BR', 'pt_GW', 'pt_MZ', 'pt_PT', 'pt_ST', 'pt_TL', 'rn_BI', 'ro_MD',
    'ro_RO', 'ru_KZ', 'ru_RU', 'rw_RW', 'si_LK', 'sk_SK', 'sl_SI', 'sn_ZW',
    'so_DJ', 'so_SO', 'sq_AL', 'sq_XK', 'sr_Latn_ME', 'sr_Latn_RS', 'sv_AX',
    'sv_SE', 'sw_CD', 'sw_KE', 'sw_TZ', 'sw_UG', 'tg_TJ', 'th_TH', 'ti_ER',
    'tk_TM', 'to_TO', 'tr_TR', 'uk_UA', 'ur_PK', 'uz_Cyrl_UZ', 'vi_VN',
    'wo_SN', 'yue_Hans_CN', 'zh_Hant_HK', 'zh_Hant_MO', 'zh_Hant_TW'
)
