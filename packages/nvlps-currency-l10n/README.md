nvlps-currency
==============

Javascript localized currency and money handling library for the nvlps.io
budgeting software. It includes a Money class with "batteries included"
localization using Unicode CLDR data.

Using nvlps-currency is easy:

```javascript
import {
  Money, Currency, Locale
} from 'nvlps-currency-core';

// Load l10n information dynamically (only en_US and en_US_POSIX are loaded
// by default). In the browser, include with a <script> tag instead.
import { DE, EN } from 'nvlps-currency-l10n';

// Create a Money Object with USD $4.00
const m = new Money('4.00', 'USD');

// Add and Subtract Amounts
const m2 = m.add(1).subtract('0.50');

// Format into a localized string
m2.format(new Locale('en_US'));     // $4.50
m2.format(new Locale('de_DE'));     // 4,50 $

// Localized parsing works too, with default currency for the locale
const m3 = new Money('1 234,56', new Locale('fr_FR'));
m3.format(new Locale('en_US'));     // €1,234.56
```

Features
--------

- Fixed-point, immutable, currency-aware money class based on
[decimal.js-light](https://github.com/MikeMcl/decimal.js-light/)
- Major world currency data from ISO 4217 included
- Localization data for currency and number formatting included and integrated -
no external internationalization or localization helper libraries required
- Flexible formatting options
- Handles any type of money input: strings, numbers, Decimals, or another Money
object
- Only one dependency

Installation
------------

Install nvlps-currency by running:

```shell
npm install nvlps-currency
```

Contribute
----------

- Issue Tracker: https://github.com/nvlps/nvlps-currency/issues
- Source Code: https://github.com/nvlps/nvlps-currency

API Documentation
-----------------

In Work

License
-------

The project is licensed under the BSD license.
