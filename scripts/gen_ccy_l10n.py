# -*- coding: utf-8 -*-

'''
gen_ccy_l10n.py - Generate Currency Localization Data for nvlps

This script pulls data from the Unicode CLDR database (via Python babel) which
deal with number and currency formatting. Localized currency symbols and names
are also generated and packaged for the nvlps frontend.
'''

import argparse
import json
import os
import sys

from babel.core import parse_locale, Locale
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
                   'np', 'cp', 'ap')
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

        if data is not None:
            locale_data[lang][ll] = data

    return locale_data


def save_js_modules(data, js_filename_tmpl):
    '''
    Save Locale Data as Javascript Modules

    Saves localization data as Javascript modules based on the Jinja2 template
    which is expected to be loaded from 'ccy-l10n.js.j2' in the current module
    folder.
    '''
    env = Environment(loader=FileSystemLoader(os.path.dirname(sys.argv[0])))
    template = env.get_template('ccy-l10n.js.j2')

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

        with open(js_filename_tmpl.format(lang.lower()), 'w') as f:
            f.write(template.render(
                lang=lang,
                base=base,
                locs=locs
            ))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Generate nvlps Currency and Locale Data from Unicode CLDR'
    )
    parser.add_argument(
        'json_path', metavar='<JSON PATH>', type=str, nargs=1,
        help='JSON Output Path'
    )
    parser.add_argument(
        'js_path', metavar='<JS PATH>', type=str, nargs=1,
        help='Javascript Output Path'
    )
    parser.add_argument(
        '--indent', nargs=1, type=int,
        help='JSON Indentation Level (if omitted, JSON will be minified)'
    )

    # Parse Command Line Arguments
    args = parser.parse_args()
    jsonOutputPath = args.json_path[0] if args.json_path else '.'
    jsOutputPath = args.js_path[0] if args.js_path else '.'
    indentSize = args.indent[0] if args.indent else None

    # Create JSON Dump Arguments
    dump_args = { 'sort_keys': True, 'ensure_ascii': False }
    if indentSize is not None:
        dump_args['indent'] = indentSize

    # Create Output File Template
    list_filename = os.path.abspath(
        os.path.join(jsonOutputPath, 'ccy-l10n.json')
    )
    json_filename = os.path.abspath(
        os.path.join(jsonOutputPath, 'ccy-l10n.{}.json')
    )
    js_filename = os.path.abspath(
        os.path.join(jsOutputPath, '{}.js')
    )

    # Load Localization Data from Babel
    data = load_locale_data(NVLPS_LOCALE_LIST)

    # Ensure all Aliases are added
    for lang, loc in NVLPS_LOCALE_ALIASES.items():
        if lang in data and loc not in data[lang]:
            data[lang][loc] = dict()

    # Save List of Languages
    with open(json_filename.format('langs'), 'w') as f:
        json.dump(sorted(data.keys()), f, **dump_args)

    # Save the en_US_POSIX data to a special file
    with open(json_filename.format('posix'), 'w') as f:
        json.dump({
            'en':           data['en']['en'],           # noqa: E241
            'en_US':        data['en']['en_US'],        # noqa: E241
            'en_US_POSIX':  data['en']['en_US_POSIX'],  # noqa: E241
        }, f, **dump_args)

    # Remove en, en_US, and en_US_POSIX from the 'en' Data since they will
    # be preloaded by nvlps-currency
    del data['en']['en']
    del data['en']['en_US']
    del data['en']['en_US_POSIX']

    # Save Javascript Modules
    save_js_modules(data, js_filename)
