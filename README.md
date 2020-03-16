nvlps-currency
==============

Javascript localized currency and money handling library for the nvlps.io
budgeting software. It includes a Money class with "batteries included"
localization using Unicode CLDR data.

Using nvlps-currency is easy:

```javascript
import {
  Money, Currency, Locale
} from '@nvlps/currency';

// Load l10n information dynamically (only en_US and en_US_POSIX are loaded
// by default). In the browser, include with a <script> tag instead.
import { DE, EN } from '@nvlps/l10n';

/* CommonJS (Node.js) Syntax */
const { Money, Currency, Locale } = require('@nvlps/currency');
const { DE, EN } = require('@nvlps/l10n');

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

For use in a browser without additional packaging (e.g. when a backend API can
determine which locale data to serve), the files in the dist directory may be
included as script tags, as in the following example which loads only the
German localization data to reduce transfer and load time.

```html
<script type="text/javascript" src="https://a-great-cdn/dist/nvlps-currency.min.js"></script>
<script type="text/javascript" src="https://a-great-cdn/dist/nvlps-l10n.de.js"></script>
```

It is not recommended to load the nvlps-currency localizations via unpkg.com or
similar automatic npmjs CDNs as it will transfer a bundle containing all
localization data, which is many hundred kB.

For a working example of nvlps-currency in a single HTML page, open the index.html
file in the demo folder in your browser.

```shell
git clone https://github.com/nvlps/nvlps-currency.git
cd nvlps-currency/demo
open index.html
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
yarn add @nvlps/currency @nvlps/l10n
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
