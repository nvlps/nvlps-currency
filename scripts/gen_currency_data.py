'''
gen_currency_list.py - Generate List of Currencies for nvlps

This script pulls data from ISO 4217 and xe.com to generate a list of
currencies that are currently in circulation.  This data is used to filter
the Unicode CLDR databases and limit the amount of data packaged for the
Nvlps frontend.

It also pulls currency symbols from xe.com as a first pass instead of iterating
over the Unicode CLDR data (although localized symbols will be preferred if
available).

Sources:
- https://www.currency-iso.org/dam/downloads/lists/list_one.xml
- https://www.xe.com/iso4217.php
- https://www.xe.com/symbols.php
'''

import argparse
import json
import os
import requests
from bs4 import BeautifulSoup

try:
    from xml.etree import cElementTree as ElementTree
except ImportError:
    from xml.etree import ElementTree

from babel.core import get_global, parse_locale, Locale, UnknownLocaleError

ISO4217_URL = 'https://www.currency-iso.org/dam/downloads/lists/list_one.xml'
XE_ISO4217_URL = 'https://www.xe.com/iso4217.php'
XE_SYMBOLS_URL = 'https://www.xe.com/symbols.php'

'''
Manually-Created Map of Global Currencies to Home Territory
'''
GLOBAL_CURRENCIES = {
    'ANG': 'NL',    # Netherlands
    'AUD': 'AU',    # Australia
    'CHF': 'CH',    # Switzerland
    'DKK': 'DK',    # Denmark
    'EGP': 'EG',    # Egypt
    'ETB': 'ET',    # Ethiopia
    'EUR': 'DE',    # Germany (Assigned)
    'GBP': 'GB',    # England
    'IDR': 'ID',    # Indonesia
    'ILS': 'IS',    # Israel
    'INR': 'IN',    # India
    'JMD': 'JM',    # Jamaica
    'JOD': 'JO',    # Jordan
    'JPY': 'JP',    # Japan
    'KMF': 'KM',    # Comoros
    'MAD': 'MA',    # Morocco
    'MYR': 'MY',    # Malaysia
    'NOK': 'NO',    # Norway
    'NZD': 'NZ',    # New Zealand
    'PKR': 'PK',    # Pakistan
    'SDG': 'SD',    # Sudan
    'SEK': 'SE',    # Sweden
    'SHP': 'SH',    # Saint Helena
    'USD': 'US',    # United States
    'XAF': 'CM',    # Cameroon (Assigned)
    'XOF': 'SN',    # Senegal (Assigned)
    'XPF': 'PF',    # French Polynesia (Assigned)
    'XCD': 'SL',    # Saint Lucia (Assigned)
    'ZAR': 'ZA',    # South Africa
}


def parse_xe_iso4217(url):
    '''
    Parse the ISO4217 Table from xe.com

    Returns a dictionary of { ccyCode => ccyName }
    '''
    currencies = {}

    r = requests.get(url)
    r.raise_for_status()

    soup = BeautifulSoup(r.text, 'lxml')
    table = soup.find(id='currencyTable')
    for row in table.tbody.find_all('tr'):
        tdCode, tdName = row.find_all('td')
        currencies[tdCode.text] = tdName.text

    return currencies


def parse_xe_symbols(url):
    '''
    Parse the Currency Symbol Table from xe.com

    Returns a dictionary of { ccyCode => ccySymbol }.  Note that these are
    localized to the home locale of each currency, so may not be the preferred
    localized symbol.
    '''
    symbols = {}

    r = requests.get(url)
    r.raise_for_status()

    soup = BeautifulSoup(r.text, 'lxml')
    table = soup.find(class_='currencySymblTable')
    for row in table.find_all('tr', class_='row2'):
        tdName, tdCode, _, _, tdSymU, _, tdUnicodePts, _ = row.find_all('td')
        symbols[tdCode.text] = tdSymU.text

    return symbols


def parse_iso4217_data(url):
    '''
    Parse the ISO 4217 Currency List

    Returns a dictionary of {
        ccyCode => {
            name => ccyName,
            number => ccyNumber,
            minor => ccyMinorUnits,
            countries => [ countryName, ... ],
        }
    }
    '''
    currencies = {}

    r = requests.get(url)
    r.raise_for_status()

    root = ElementTree.fromstring(r.text)
    for entry in root.findall('CcyTbl/CcyNtry'):
        ccyCode = entry.find('Ccy')
        ccyName = entry.find('CcyNm')
        ccyNumber = entry.find('CcyNbr')
        ccyMinor = entry.find('CcyMnrUnts')
        ccyCountry = entry.find('CtryNm')

        if ccyCode is None:
            continue

        if ccyName.get('IsFund'):
            print('Skipping %s (IsFund)' % (ccyCode.text))
            continue

        try:
            ccyNumber = int(ccyNumber.text)
        except ValueError:
            print('Skipping %s (Invalid Number)' % (ccyCode.text))
            continue

        try:
            ccyMinor = int(ccyMinor.text)
        except ValueError:
            ccyMinor = 0

        if ccyCode.text not in currencies:
            currencies[ccyCode.text] = {
                'name': ccyName.text,
                'number': ccyNumber,
                'minor': ccyMinor,
                'countries': [ ccyCountry.text ]
            }

        else:
            if ccyName.text != currencies[ccyCode.text]['name']:
                print('Warning: Currency Name mismatch for %s in %s' %
                      (ccyCode.text, ccyCountry.text))
                continue

            if ccyNumber != currencies[ccyCode.text]['number']:
                print('Warning: Currency Number mismatch for %s in %s' %
                      (ccyCode.text, ccyCountry.text))
                continue

            if ccyMinor != currencies[ccyCode.text]['minor']:
                print('Warning: Currency Minor Unit mismatch for %s in %s' %
                      (ccyCode.text, ccyCountry.text))
                continue

            currencies[ccyCode.text]['countries'].append(ccyCountry.text)

    return currencies


def localeForTerritory(territory, language=None):
    '''Create a Locale for the given Territory'''
    if language is not None:
        return Locale(language, territory)

    territory_languages = get_global('territory_languages')
    if territory not in territory_languages:
        raise KeyError('%s is not found in territory_languages' % (territory))

    langs = territory_languages[territory]
    if len(langs) == 0:
        raise Exception('%s has no available languages' % (territory))

    # Assume most popular language is first in the list
    for k in langs.keys():
        try:
            return Locale(k, territory)
        except UnknownLocaleError:
            pass

    raise Exception('%s has no available languages' % (territory))


def import_babel_currency_locales(ccyKeys=None):
    '''Import Unicode CLDR Data from Babel (map Currency to home Locale)'''
    locale_map = {}
    all_currencies = get_global('all_currencies')
    if ccyKeys:
        all_currencies = dict(
            filter(lambda i: i[0] in ccyKeys, all_currencies.items())
        )

    for ccy in all_currencies.keys():
        regions = all_currencies[ccy]
        if len(regions) == 1:
            try:
                locale_map[ccy] = localeForTerritory(regions[0])
            except Exception:
                continue

        else:
            if ccy in GLOBAL_CURRENCIES:
                try:
                    locale_map[ccy] = localeForTerritory(
                        GLOBAL_CURRENCIES[ccy])
                except Exception:
                    continue

    return locale_map


def currencyForLocale(locale, tc):
    '''Determine the currently active currency for the locale'''
    if locale.territory not in tc:
        return None

    tender_ccys = filter(lambda x: x[3], tc[locale.territory])
    active_ccys = list(filter(lambda x: x[2] is None, tender_ccys))

    if len(active_ccys) == 0:
        return None

    # Sort is in ascending order, so last element is most recent
    return list(sorted(active_ccys, key=lambda x: x[1]))[-1][0]


def import_babel_locales(locales):
    '''
    Import Locale Data from Babel.

    LC_NUMERIC
    - Decimal Point Symbol ('d')
    - Digit Grouping Symbol ('g')
    - Number Format Pattern ('np')

    LC_MONETARY
    - Currency Format Pattern ('cp')
    - Accounting Format Pattern ('ca')

    Other Data
    - Plus Sign ('p')
    - Minus Sign ('m')
    - Percent Sign ('pc')
    - Permille Sign ('pm')
    - Exponential Sign ('e')
    - Superscripting Symbol ('x')
    - Infinity ('i')
    - NaN ('n')
    '''
    langs = set([parse_locale(l)[0] for l in locales])
    locale_data = dict()

    tc = get_global('territory_currencies')

    # Collect Data for base Language Locales
    for l in langs:
        L = Locale.parse(l)
        locale_data[l] = {
            'd'  : L.number_symbols['decimal'],
            'g'  : L.number_symbols['group'],
            'np' : L.decimal_formats[None].pattern,
            'cp' : L.currency_formats['standard'].pattern,
            'ap' : L.currency_formats['accounting'].pattern,
            'p'  : L.number_symbols['plusSign'],
            'm'  : L.number_symbols['minusSign'],
            'pc' : L.number_symbols['percentSign'],
            'pm' : L.number_symbols['perMille'],
            'e'  : L.number_symbols['exponential'],
            'x'  : L.number_symbols['superscriptingExponent'],
            'inf': L.number_symbols['infinity'],
            'nan': L.number_symbols['nan'],
        }

    # Store Diffs for Locales
    for l in locales:
        L = Locale.parse(l)
        data = {
            'd'  : L.number_symbols['decimal'],
            'g'  : L.number_symbols['group'],
            'np' : L.decimal_formats[None].pattern,
            'cp' : L.currency_formats['standard'].pattern,
            'ap' : L.currency_formats['accounting'].pattern,
            'p'  : L.number_symbols['plusSign'],
            'm'  : L.number_symbols['minusSign'],
            'pc' : L.number_symbols['percentSign'],
            'pm' : L.number_symbols['perMille'],
            'e'  : L.number_symbols['exponential'],
            'x'  : L.number_symbols['superscriptingExponent'],
            'inf': L.number_symbols['infinity'],
            'nan': L.number_symbols['nan'],
        }

        locale_data[l] = {
            'c': currencyForLocale(L, tc),
            'h': L.language
        }
        for k in data.keys():
            if data[k] != locale_data[L.language][k]:
                locale_data[l][k] = data[k]

    return locale_data


def get_nvlps_locales():
    '''Load list of Locales to bundle with nvlps-currency'''
    locales = set()
    territories = get_global('territory_currencies').keys()
    for t in territories:
        try:
            locales |= set([str(localeForTerritory(t))])
        except Exception:
            continue

    return locales


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Generate nvlps Currency and Locale Data from Unicode CLDR'
    )
    parser.add_argument(
        'output', metavar='PATH', type=str, nargs=1, help='JSON Output Path'
    )
    parser.add_argument(
        '--indent', nargs=1, type=int,
        help='JSON Indentation Level (if omitted, JSON will be minified)'
    )
    parser.add_argument(
        '--default-precision', nargs=1, type=int,
        help='Set the default currency precision (default: 2)'
    )

    # Parse Command Line Arguments
    args = parser.parse_args()
    outputPath = args.output[0] if args.output else '.'
    indentSize = args.indent[0] if args.indent else None
    defaultPrecision = args.default_precision[0] \
        if args.default_precision \
        else 2

    # Create JSON Dump Arguments
    dump_args = { 'sort_keys': True }
    if indentSize is not None:
        dump_args['indent'] = indentSize

    c_filename = os.path.abspath(
        os.path.join(outputPath, 'nvlps-currency-data.json')
    )
    l_filename = os.path.abspath(
        os.path.join(outputPath, 'nvlps-locale-data.json')
    )

    # Download xe.com and ISO 4217 Data
    ccyNames = parse_xe_iso4217(XE_ISO4217_URL)
    ccySymbols = parse_xe_symbols(XE_SYMBOLS_URL)
    ccyData = parse_iso4217_data(ISO4217_URL)

    # nvlps by default supports all the currencies from xe.com
    nvlpsCcyList = ccyNames.keys()
    nvlpsLocales = get_nvlps_locales()

    # Load Babel Currency Locales
    ccyLocales = import_babel_currency_locales(ccyNames.keys())
    ccyLocaleStrs = dict([(k, str(v)) for k, v in ccyLocales.items()])

    # nvlps will bundle locale data for all currencies in nvlpsCcyList
    nvlpsLocales |= set([v for v in ccyLocaleStrs.values()])

    # Load Babel Locale Data
    localeData = import_babel_locales(nvlpsLocales)

    # Assemble nvlps Currency Data
    nvlpsCcyData = {
        '__d': { 'p': defaultPrecision },
    }

    for ccy in nvlpsCcyList:
        if ccy not in ccyData:
            continue
        if ccy not in ccyNames:
            continue

        nvlpsCcyData[ccy] = {
            'i': ccyData[ccy]['number'],
            'n': ccyNames[ccy],
        }

        # Store default locale for currency
        if ccy in ccyLocaleStrs:
            nvlpsCcyData[ccy]['l'] = ccyLocaleStrs[ccy]

        # Store Precision if different from Default
        if ccyData[ccy]['minor'] != defaultPrecision:
            nvlpsCcyData[ccy]['p'] = ccyData[ccy]['minor']

        # Store Native Symbol
        if ccy in ccySymbols:
            nvlpsCcyData[ccy]['s'] = ccySymbols[ccy]

    # Save nvlps Locale Data
    with open(l_filename, 'w', encoding='utf-8') as f:
        json.dump(localeData, f, ensure_ascii=False, **dump_args)

    # Save nvlps Currency Data
    with open(c_filename, 'w', encoding='utf-8') as f:
        json.dump(nvlpsCcyData, f, ensure_ascii=False, **dump_args)
