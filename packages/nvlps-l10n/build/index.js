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

const fs = require('fs');
const util = require('util');
const path = require('path');

const rollup = require('rollup');
const configFactoryLib = require('./rollup.lib');
const configFactoryDist = require('./rollup.dist');

const promisifyReadDir = util.promisify(fs.readdir);
const formatName = n => n.replace(/\.js/, '').replace('-', '_')

async function build(options) {
  const bundle = await rollup.rollup(options.input);
  await bundle.write(options.output);
}

(async () => {
  try {
    // Build Locale Files for Web Use
    const locales = fs.readdirSync(path.join(__dirname, '../src/locales'));
    locales.forEach(async (l) => {
      await build(configFactoryDist({
        input: path.join('./src/locales', l),
        fileName: `../../dist/nvlps-l10n.${l}`,
        name: `nvlps_l10n_${formatName(l)}`,
      }));
    });

    // Build NodeJS Module
    build(configFactoryLib({
      input: './src/index.js',
      fileName: './nvlps-currency-l10n.bundle.js',
    }));
  }
  catch (e) {
    console.log(e);  // eslint-disable-line no-console
  }
})();
