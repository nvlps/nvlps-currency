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

const rollup = require('rollup');
const configFactoryLib = require('./rollup.lib');
const configFactoryDist = require('./rollup.dist');

async function build(options) {
  const bundle = await rollup.rollup(options.input);
  await bundle.write(options.output);
}

(async () => {
  try {
    // Build Library for Web Use
    await build(configFactoryDist({
      input: './src/index.js',
      fileName: '../../dist/nvlps-currency-core.min.js',
    }));

    // Build Library for NodeJS (includes locales)
    await build(configFactoryLib({
      input: './src/index.js',
      fileName: './nvlps-currency-core.bundle.js',
    }));
  }
  catch (e) {
    console.log(e);  // eslint-disable-line no-console
  }
})();
