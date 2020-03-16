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
import os
import requests
import sys

try:
    from xml.etree import cElementTree as ElementTree
except ImportError:
    from xml.etree import ElementTree

from jinja2 import Environment, FileSystemLoader

from ccy_lists import NVLPS_CURRENCY_LIST

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
        ccyCountry = entry.find('Cntry')

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

    return currencies


def save_js_modules(data, js_filename):
    '''
    Save Currency Data as Javascript Module

    Saves currency data as a Javascript module based on the Jinja2 template
    which is expected to be loaded from 'ccy-data.js.j2' in the current module
    folder.
    '''
    env = Environment(loader=FileSystemLoader(os.path.dirname(sys.argv[0])))
    template = env.get_template('ccy-data.js.j2')

    # Save Currency Data
    with open(js_filename, 'w') as f:
        f.write(template.render(data=data))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Generate nvlps Currency Data from ISO 4217'
    )
    parser.add_argument(
        'output', metavar='PATH', type=str, nargs=1,
        help='Javascript Output File (default is ./ccy-data.js)'
    )

    # Parse Command Line Arguments
    args = parser.parse_args()
    outputPath = args.output[0] if args.output else './ccy-data.js'

    # Download xe.com and ISO 4217 Data
    ccyData = parse_iso4217_data(ISO4217_URL)

    # Add the 'XXX' Unknown Currency placeholder
    ccyData['XXX'] = {
        'name': 'Unknown Currency',
        'number': 999,
        'minor': 6,
        'country': [ ],
    }

    # nvlps by default supports all the currencies from xe.com
    nvlpsCcyList = list(NVLPS_CURRENCY_LIST)

    # Generate Data Object
    data = dict()
    for ccy in nvlpsCcyList:
        data[ccy] = {
            'n': ccyData[ccy]['number'],
            'p': ccyData[ccy]['minor']
        }

    # Store Currency Data in Javascript
    save_js_modules(data, outputPath)
