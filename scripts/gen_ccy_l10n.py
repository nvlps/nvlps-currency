# -*- coding: utf-8 -*-

'''
gen_ccy_l10n.py - Generate Currency Localization Data for nvlps

  Copyright (c) 2020 Asymworks, LLC.

  The nvlps-currency library may be freely distributed under the terms of
  the BSD license.  For all licensing information, details and documentation:
  https://nvlps.io/nvlps-currency

This script pulls data from the Unicode CLDR database (via Python babel) which
deal with number and currency formatting. Localized currency symbols and names
are also generated and packaged for the nvlps frontend.
'''

import argparse
import json
import os
import sys

from babel.core import parse_locale, Locale
from babel.numbers import get_territory_currencies
from jinja2 import Environment, FileSystemLoader

from ccy_lists import NVLPS_CURRENCY_LIST, NVLPS_LOCALE_LIST, \
    NVLPS_LOCALE_ALIASES


def make_locale_overlay(child, parent, dict_only=False):
    '''
    Turn the Locale data into an Overlay of the Parent

    This will remove any keys in Child that are present in Parent and have the
    same value.  Any keys in Child that are not present in Parent are retained,
    and any keys in Parent that are not in Child are inserted into Child with
    None values
    '''
    simple_keys = ('d', 'g', 'p', 'm', 'pc', 'pm', 'e', 'x', 'inf', 'nan',
                   'np', 'cp', 'ap', 'c')
    dict_keys = ('cs', 'cn')

    if not dict_only:
        # Handle Overlay of simple key->value pairs
        for k in simple_keys:
            if (k in parent) and (k in child) and (parent[k] == child[k]):
                del child[k]
            elif (k in parent) and (k not in child):
                child[k] = None

    # Handle Overlay of key->dict pairs
    for k in dict_keys:
        if (k in parent) and (k not in child):
            # Unset All of Parent's Keys
            child[k] = dict([(dk, None) for dk in parent[k].keys()])

        elif (k in parent) and (k in child):
            child_keys = child[k].keys()
            parent_keys = parent[k].keys()

            # Handle Overridden Keys
            for csk in child_keys & parent_keys:
                if child[k][csk] == parent[k][csk]:
                    del child[k][csk]

            # Delete Dict if Empty
            if len(child[k]) == 0:
                del child[k]

    # Return Overlay
    return child


def load_for_locale(locale, parent):
    '''
    Load Localized Currency Data for a Single Locale

    Localized data stored for each locale includes:

    LC_NUMERIC Information
    ----------------------
    - Decimal Point Symbol
    - Digit Grouping Symbol
    - Plus Sign
    - Minus Sign
    - Percent Sign
    - Permille Sign
    - Exponential Sign
    - Superscripting Exponent
    - String representing infinity
    - String representing a non-numeric value

    Currency Formatting Information
    -------------------------------
    - Basic Numeric Format
    - Currency Numeric Format
    - Accounting Numeric Format

    Currency Localization Data
    --------------------------
    - Localized Currency Symbols
    - Localized Currency Names
    - Local Default Currency
    '''
    L = Locale.parse(locale)
    data = dict()

    # Load Locale Information
    data = {
        'd'  : L.number_symbols['decimal'],
        'g'  : L.number_symbols['group'],
        'p'  : L.number_symbols['plusSign'],
        'm'  : L.number_symbols['minusSign'],
        'pc' : L.number_symbols['percentSign'],
        'pm' : L.number_symbols['perMille'],
        'e'  : L.number_symbols['exponential'],
        'x'  : L.number_symbols['superscriptingExponent'],

        'inf': L.number_symbols['infinity'],
        'nan': L.number_symbols['nan'],

        'np' : L.decimal_formats[None].pattern,
        'cp' : L.currency_formats['standard'].pattern,
        'ap' : L.currency_formats['accounting'].pattern,

        # Currency Symbols
        'cs' : dict([
            (k, v) for k, v in L.currency_symbols.items()
            if k in NVLPS_CURRENCY_LIST
        ]),

        # Currency Names
        'cn' : dict([
            (k, v) for k, v in L.currencies.items()
            if k in NVLPS_CURRENCY_LIST
        ]),
    }

    # Load Locale Currency
    territory = L.territory
    if (territory is None) and (L.language in NVLPS_LOCALE_ALIASES):
        territory = parse_locale(NVLPS_LOCALE_ALIASES[L.language])[1]
    if territory is not None:
        currencies = get_territory_currencies(territory)
        if currencies and len(currencies) > 0:
            data['c'] = currencies[0]

    # Remove Redundant Information contained in Parent
    if parent is not None:
        data = make_locale_overlay(data, parent)

    # Return Locale Data
    return data if len(data) > 0 else None


def load_locale_data(locales):
    '''
    Load Localized Currency Data for a list of Locales

    Data is stored hierarchically by language, with keys corresponding to each
    locale within that language (as well as a key for the base language data).
    When locale data is the same as its parent language, the keys are removed
    to compress the total amount of data.  The nvlps Locale class loader will
    then look to the parent language for missing keys.
    '''
    langs = set([parse_locale(l)[0] for l in locales])
    locale_data = dict([(l, dict()) for l in langs])

    # Load Locale Information for each base Language first
    for l in langs:
        locale_data[l][l] = load_for_locale(l, None)

    # Load Sub-Locales
    for ll in locales:
        lang, region, _, _ = parse_locale(ll)
        if region is None:
            continue

        parent_data = locale_data[lang][lang] \
            if lang in locale_data \
            else None

        data = load_for_locale(ll, parent_data)

        # Always store the locale key even if there are no overrides. This
        # helps the Locale loader not freak out when it can't find a locale key
        # and does not take up much extra room in the JSON.
        locale_data[lang][ll] = data if data is not None else dict()

        # if data is not None:
        #    locale_data[lang][ll] = data

    return locale_data


def save_js_modules(data, posix_data, posix_file, es6_tmpl):
    '''
    Save Locale Data as Javascript Modules

    Saves localization data as Javascript modules based on the Jinja2 template
    which is expected to be loaded from 'ccy-l10n.js.j2' in the current module
    folder.
    '''
    env = Environment(loader=FileSystemLoader(os.path.dirname(sys.argv[0])))
    template_es6 = env.get_template('l10n-module-es6.js.j2')
    template_posix = env.get_template('l10n-module-posix.js.j2')

    # Save POSIX Data as Module
    if posix_file is not None:
        with open(posix_file, 'w') as f:
            posix_base = posix_data['en']
            posix_locs = [(k, v) for k, v in posix_data.items() if k != 'en']
            f.write(template_posix.render(
                name='POSIX',
                lang='en',
                base=posix_base,
                locs=posix_locs
            ))

    # Save Files by Language as Modules
    lang_keys = sorted(data.keys())
    dump_args = {
        'ensure_ascii': False,
        'indent': 2,
    }
    for lang in lang_keys:
        base = json.dumps(data[lang][lang], **dump_args) \
            if lang in data[lang] \
            else None
        locs = [(lk, json.dumps(data[lang][lk], **dump_args))
                for lk in data[lang].keys() if lk != lang]

        with open(es6_tmpl.format(lang.lower()), 'w') as f:
            f.write(template_es6.render(
                name=lang.upper(),
                lang=lang,
                base=base,
                locs=locs
            ))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Generate nvlps Currency and Locale Data from Unicode CLDR'
    )
    parser.add_argument(
        'es6', metavar='<ES6 PATH>', type=str, nargs=1,
        help='ECMAScript 6 Module Output Path'
    )
    parser.add_argument(
        '--posix', metavar='<POSIX PATH>', type=str, nargs=1, required=True,
        help='POSIX Locale Output File'
    )
    parser.add_argument(
        '--index', metavar='<INDEX PATH>', type=str, nargs=1,
        help='Index Module Output Path'
    )

    # Parse Command Line Arguments
    args = parser.parse_args()
    es6OutputPath = args.es6[0] if args.es6 else None

    # Create Output File Template
    es6_template = None if es6OutputPath is None else os.path.abspath(
        os.path.join(es6OutputPath, '{}.js')
    )

    posix_file = args.posix[0] if args.posix else None
    index_file = args.index[0] if args.index else None

    # Load Localization Data from Babel
    data = load_locale_data(NVLPS_LOCALE_LIST)

    # Ensure all Aliases are added
    for lang, loc in NVLPS_LOCALE_ALIASES.items():
        if lang in data and loc not in data[lang]:
            data[lang][loc] = dict()

    # Remove en, en_US, and en_US_POSIX from the 'en' Data since they will
    # be preloaded by nvlps-currency from the special 'posix' file
    posix_data = {
        'en':           data['en']['en'],           # noqa: E241
        'en_US':        data['en']['en_US'],        # noqa: E241
        'en_US_POSIX':  data['en']['en_US_POSIX'],  # noqa: E241
    }

    del data['en']['en']
    del data['en']['en_US']
    del data['en']['en_US_POSIX']

    # Save Javascript Modules
    save_js_modules(data, posix_data, posix_file, es6_template)

    # Save All Locales Index File
    if index_file is not None:
        env = Environment(
            loader=FileSystemLoader(os.path.dirname(sys.argv[0]))
        )
        template = env.get_template('l10n-index.js.j2')
        with open(index_file, 'w') as f:
            f.write(template.render(
                langs=sorted(data.keys()),
                path=os.path.relpath(
                    os.path.dirname(es6_template),
                    os.path.dirname(index_file)
                )
            ))
