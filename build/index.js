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

const rmdirRecursive = async (dir) => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file, index) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
  }
}

(async () => {
  const buildDir = path.join(__dirname, '../.build');

  try {
    // Create Build Directory
    if (! fs.existsSync(buildDir)) {
      fs.mkdirSync(buildDir);
    }

    // Build Locale Files
    const locales = fs.readdirSync(path.join(__dirname, '../src/locales'));

    // Pre-Process Locale Files for Web Use
    locales.forEach(async (l) => {
      const ppPath = path.join(buildDir, l);
      const readFile = fs.readFileSync(`./src/locales/${l}`, 'utf8');
      const result = readFile.replace(/\'.*\/locale\'/, "'nvlps-currency'");
      fs.writeFileSync(ppPath, result, 'utf8');
    });

    // Build Locale Files for Web Use
    const ppLocales = fs.readdirSync(buildDir);
    ppLocales.forEach(async (l) => {
      await build(configFactoryDist({
        input: path.join(buildDir, l),
        fileName: `./dist/nvlps-locale.${l}`,
        name: `nvlps_locale__${formatName(l)}`,
      }));
    });

    // Build Library for Web Use
    await build(configFactoryDist({
      input: './src/lib/index.js',
      fileName: './dist/nvlps-currency.min.js',
    }));

    // Build Library for NodeJS (includes locales)
    await build(configFactoryLib({
      input: './src/nvlps-currency.js',
      fileName: './lib/nvlps-currency.min.js',
    }));
  }
  catch (e) {
    console.log(e);  // eslint-disable-line no-console
  }
  finally {
    if (fs.existsSync(buildDir)) {
      rmdirRecursive(buildDir);
    }
  }
})();
