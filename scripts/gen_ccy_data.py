'''
gen_ccy_data.py - Generate List of Currencies for nvlps

  Copyright (c) 2020 Asymworks, LLC.

  The nvlps-currency library may be freely distributed under the terms of
  the BSD license.  For all licensing information, details and documentation:
  https://nvlps.io/nvlps-currency

This script pulls data from ISO 4217 and xe.com to generate a list of
currencies that are currently in circulation.  This data is used to filter
the Unicode CLDR databases and limit the amount of data packaged for the
Nvlps frontend.

Sources:
- https://www.currency-iso.org/dam/downloads/lists/list_one.xml
'''

import argparse
import json
import requests
import sys

try:
    from xml.etree import cElementTree as ElementTree
except ImportError:
    from xml.etree import ElementTree

from babel.core import get_global

from ccy_lists import NVLPS_CURRENCY_LIST

# Manually-Created Map of Global Currencies to Home Territory
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

ISO4217_URL = 'https://www.currency-iso.org/dam/downloads/lists/list_one.xml'
XE_ISO4217_URL = 'https://www.xe.com/iso4217.php'


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
            sys.stderr.write('Skipping %s (IsFund)\n' % (ccyCode.text))
            continue

        try:
            ccyNumber = int(ccyNumber.text)
        except ValueError:
            sys.stderr.write('Skipping %s (Invalid Number)\n' % (ccyCode.text))
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
                sys.stderr.write(
                    'Warning: Currency Name mismatch for %s in %s\n' %
                    (ccyCode.text, ccyCountry.text))
                continue

            if ccyNumber != currencies[ccyCode.text]['number']:
                sys.stderr.write(
                    'Warning: Currency Number mismatch for %s in %s\n' %
                    (ccyCode.text, ccyCountry.text))
                continue

            if ccyMinor != currencies[ccyCode.text]['minor']:
                sys.stderr.write(
                    'Warning: Currency Minor Unit mismatch for %s in %s\n' %
                    (ccyCode.text, ccyCountry.text))
                continue

            currencies[ccyCode.text]['countries'].append(ccyCountry.text)

    return currencies


def import_currency_locales():
    '''Import Unicode CLDR Data from Babel (map Currency to home Locale)'''
    locale_map = {}
    all_currencies = get_global('all_currencies')

    for ccy in NVLPS_CURRENCY_LIST:
        regions = all_currencies[ccy]
        if len(regions) == 1:
            locale_map[ccy] = regions[0]
        elif ccy in GLOBAL_CURRENCIES:
            locale_map[ccy] = GLOBAL_CURRENCIES[ccy]
        elif ccy == 'XXX':
            continue
        else:
            raise RuntimeError(
                'Failed to find home territory for Currency {}'.format(ccy)
            )

    return locale_map


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Generate nvlps Currency Data from ISO 4217'
    )
    parser.add_argument(
        'output', metavar='PATH', type=str, nargs=1,
        help='JSON Output File (default is ccy-data.json)'
    )
    parser.add_argument(
        '--indent', nargs=1, type=int,
        help='JSON Indentation Level (if omitted, JSON will be minified)'
    )

    # Parse Command Line Arguments
    args = parser.parse_args()
    outputPath = args.output[0] if args.output else './ccy-data.json'
    indentSize = args.indent[0] if args.indent else None

    # Create JSON Dump Arguments
    dump_args = { 'sort_keys': True }
    if indentSize is not None:
        dump_args['indent'] = indentSize

    # Download xe.com and ISO 4217 Data
    ccyData = parse_iso4217_data(ISO4217_URL)
    ccyCountries = import_currency_locales()

    # Add the 'XXX' Unknown Currency placeholder
    ccyData['XXX'] = {
        'name': 'Unknown Currency',
        'number': 999,
        'minor': 6,
        'country': [ ],
    }
    ccyCountries['XXX'] = None

    # nvlps by default supports all the currencies from xe.com
    nvlpsCcyList = list(NVLPS_CURRENCY_LIST)

    # Generate Data Object
    data = dict()
    for ccy in nvlpsCcyList:
        data[ccy] = {
            'n': ccyData[ccy]['number'],
            'p': ccyData[ccy]['minor'],
            'c': ccyCountries[ccy],
        }

    # Store Currency Data in JSON
    with open(outputPath, 'w') as f:
        json.dump(data, f, ensure_ascii=False, **dump_args)
