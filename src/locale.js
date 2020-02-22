/**
 * Locale Handling Library for Nvlps
 *
 * This is a minimal locale support library for Nvlps to support localization
 * of currency values. Most code is adapted from the Babel project, which can
 * be found at http://babel.pocoo.org/en/latest/
 *
 * Portions of the code from Babel are
 * Copyright (c) 2013-2019 by the Babel Team
 *
 * All other code is
 * Copyright (c) 2020 Asymworks, LLC.  All Rights Reserved.
 */

import _ from 'lodash';

/* eslint-disable */
const LOCALE_ALIASES = {
  'ar': 'ar_SY', 'bg': 'bg_BG', 'bs': 'bs_BA', 'ca': 'ca_ES', 'cs': 'cs_CZ',
  'da': 'da_DK', 'de': 'de_DE', 'el': 'el_GR', 'en': 'en_US', 'es': 'es_ES',
  'et': 'et_EE', 'fa': 'fa_IR', 'fi': 'fi_FI', 'fr': 'fr_FR', 'gl': 'gl_ES',
  'he': 'he_IL', 'hu': 'hu_HU', 'id': 'id_ID', 'is': 'is_IS', 'it': 'it_IT',
  'ja': 'ja_JP', 'km': 'km_KH', 'ko': 'ko_KR', 'lt': 'lt_LT', 'lv': 'lv_LV',
  'mk': 'mk_MK', 'nl': 'nl_NL', 'nn': 'nn_NO', 'no': 'nb_NO', 'pl': 'pl_PL',
  'pt': 'pt_PT', 'ro': 'ro_RO', 'ru': 'ru_RU', 'sk': 'sk_SK', 'sl': 'sl_SI',
  'sv': 'sv_SE', 'th': 'th_TH', 'tr': 'tr_TR', 'uk': 'uk_UA'
};
/* eslint-enable */

// Shims for Python compatibility
const isalpha = (s) => (s.match(/^[A-Za-z]+$/) !== null);
const isdigit = (s) => (s.match(/^\d+$/) !== null);

/**
 * Parse a Locale Identifier into its parts
 * @param {String} identifier locale identifier
 * @param {String} separator separator character (defaults to "_")
 * @return {Object} object with language, territory, script, and variant keys
 */
export function parseLocale(identifier, sep = '_') {
  let ident = identifier;
  let script;
  let territory;
  let variant;

  if (ident.indexOf('.') !== -1) {
    // this is probably the charset/encoding, which we don't care about
    [ ident ] = ident.split('.', 1);
  }

  if (ident.indexOf('@') !== -1) {
    // this is a locale modifier such as @euro, which we don't care about either
    [ ident ] = ident.split('@', 1);
  }

  const parts = ident.split(sep);
  const language = parts.shift().toLowerCase();

  if (! isalpha(language)) {
    throw new Error(`Invalid locale language "${language}"`);
  }

  if (parts.length > 0) {
    // Parse script to Title Case
    if ((parts[0].length === 4) && isalpha(parts[0])) {
      script = parts.shift().toLowerCase();
      script = script[0].toUpperCase() + script.substr(1);
    }
  }

  if (parts.length > 0) {
    // Parse territory
    if ((parts[0].length === 2) && isalpha(parts[0])) {
      territory = parts.shift().toUpperCase();
    }
    else if ((parts[0].length === 3) && isdigit(parts[0])) {
      territory = parts.shift();
    }
  }

  if (parts.length > 0) {
    // Parse variant
    if (((parts[0].length === 4) && isdigit(parts[0][0]))
      || ((parts[0].length >= 5) && isalpha(parts[0][0]))) {
      variant = parts.shift();
    }
  }

  if (parts.length > 0) {
    throw new Error(`Invalid locale identifier "${identifier}"`);
  }

  // eslint-disable-next-line no-alert, object-curly-newline
  return { language, territory, script, variant };
}

/**
 * Generate a Locale Identifier from its parts
 * @param {Object} parts object with language, territory, script, and variant keys
 * @param {String} separator separator character (defaults to "_")
 * @return {String} locale identifier
 */
export function generateLocale(parts, sep = '_') {
  const {
    language,
    territory,
    script,
    variant,
  } = parts;

  if (! language) {
    throw new Error('"language" key must be provided');
  }

  return [ language, script, territory, variant ].filter((x) => (x)).join(sep);
}

/**
 * Find the best match between available and requested locale strings.
 * @param {Array} preferred the list of locale strings preferred by the user
 * @param {Array} available the list of locale strings available
 * @param {String} sep character that separates the different parts of the locale strings
 * @param {Object} aliases a dictionary of aliases for locale identifiers
 *
 * {@example
 * // returns 'de_DE'
 * negotiate_locale(['de_DE', 'en_US'], ['de_DE', 'de_AT'])}
 *
 * {@example
 * // returns 'de'
 * negotiate_locale(['de_DE', 'en_US'], ['en', 'de'])}
 *
 * Case is ignored by the algorithm, the result uses the case of the preferred
 * locale identifier:
 * {@example
 * // returns 'de_DE'
 * negotiate_locale(['de_DE', 'en_US'], ['de_de', 'de_at'])
 * }
 *
 * By default, some web browsers unfortunately do not include the territory
 * in the locale identifier for many locales, and some don't even allow the
 * user to easily add the territory. So while you may prefer using qualified
 * locale identifiers in your web-application, they would not normally match
 * the language-only locale sent by such browsers. To workaround that, this
 * function uses a default mapping of commonly used langauge-only locale
 * identifiers to identifiers including the territory:
 * {@example
 * // returns 'ja_JP'
 * negotiate_locale(['ja', 'en_US'], ['ja_JP', 'en_US'])
 * }
 *
 * Some browsers even use an incorrect or outdated language code, such as "no"
 * for Norwegian, where the correct locale identifier would actually be "nb_NO"
 * (Bokmål) or "nn_NO" (Nynorsk). The aliases are intended to take care of
 * such cases, too:
 * {@example
 * // returns 'nb_NO'
 * negotiate_locale(['no', 'sv'], ['nb_NO', 'sv_SE'])
 * }
 *
 * You can override this default mapping by passing a different `aliases`
 * dictionary to this function, or you can bypass the behavior althogher by
 * setting the `aliases` parameter to `null`.
 */
export function negotiateLocale(preferred, available, sep = '_', aliases = LOCALE_ALIASES) {
  const avail = available.map((s) => s.toLowerCase());
  for (let i = 0; i < preferred.length; i += 1) {
    const locale = preferred[i];
    const ll = locale.toLowerCase();
    if (avail.indexOf(ll) !== -1) {
      return locale;
    }

    if (aliases) {
      if (_.has(aliases, ll)) {
        let alias = aliases[ll];
        if (alias) {
          alias = alias.replace('_', sep);
          if (avail.indexOf(alias.toLowerCase()) !== -1) {
            return alias;
          }
        }
      }
    }

    const [ parts ] = locale.split(sep);
    if (parts && (avail.indexOf(parts.toLowerCase()) !== -1)) {
      return parts[0];
    }
  }

  return null;
}

/**
 * Returns the default locale for a given category
 * @param {String} category one of the "LC_XXX" environment variable names
 * @param {Array} aliases a dictionary of aliases for locale identifiers
 *
 * This function is intended to load the default locale from either the
 * browser via {navigator.language}, or if that is not defined, from the
 * operating system environment variables. Note that if this is used from a
 * web server, the operating system environment variables will return the
 * default locale of the server, not the client.
 *
 * The "C" or "POSIX" pseudo-locales are treated as aliases for the
 * "en_US_POSIX" locale:
 * {@example
 * // returns en_US_POSIX
 * process.env['LC_MESSAGES'] = 'POSIX';
 * default_locale('LC_MESSAGES');
 * }
 *
 * The following fallbacks to the variable are always considered:
 * - `LANGUAGE`
 * - `LC_ALL`
 * - `LC_CTYPE`
 * - `LANG'`
 */
export function defaultLocale(category = null, aliases = LOCALE_ALIASES) {
  const varnames = [category, 'LANGUAGE', 'LC_ALL', 'LC_CTYPE', 'LANG'];
  let locale;

  // Try and load the browser language, if set
  try {
    locale = navigator.language;
  }
  catch (err) {
    /* Failed to load from navigator.language */
  }

  if (locale) {
    // Parse using BCF47 style with dash separators
    return generateLocale(parseLocale(locale, '-'));
  }

  // Load from environment variables
  const filtered = _.filter(varnames, (x) => (x));
  for (let i = 0; i < filtered.length; i += 1) {
    const name = filtered[i];

    locale = process.env[name];
    if (locale) {
      if ((name === 'LANGUAGE') && (locale.indexOf(':') !== -1)) {
        // the LANGUAGE variable may contain a colon-separated list of
        // language codes; we just pick the language on the list
        [ locale ] = locale.split(':', 1);
      }

      const [ tryDefaultLocale ] = locale.split('.', 1);
      if ((tryDefaultLocale === 'C') || (tryDefaultLocale === 'POSIX')) {
        locale = 'en_US_POSIX';
      }
      else if (aliases && _.has(aliases, locale)) {
        locale = aliases[locale];
      }

      try {
        return generateLocale(parseLocale(locale));
      }
      catch (err) {
        /* Continue to next locale */
      }
    }
  }

  return null;
}
