import { expect } from 'chai';
import {
  Currency,
  Locale,
  POSIX,
  availableLocales,
  parseLocale,
  registerLocale,
 } from 'nvlps-currency';

import '../src/locales/de';
import '../src/locales/en';
import '../src/locales/fr';
import '../src/locales/hi';

describe('nvlps-currency: Locale', function() {
  describe('Accessors', function() {
    it('should have a public accessor constructor', function() {
      var testFn = function() { return new Locale('en_US'); }
      expect(testFn).to.not.throw();
    });

    it('should have only one instance per locale', function() {
      var testObj1 = new Locale('en_US');
      var testObj2 = new Locale('en_US');
      expect(testObj2).to.equal(testObj1);
      expect(testObj2).to.deep.equal(testObj1);
    });

    it('should return an array of available locale tags', function() {
      var list = availableLocales();
      expect(list).to.be.an('array');
      expect(list.length).to.be.at.least(1);
      expect(list[0]).to.be.a('string');

      var locItems = parseLocale(list[0]);
      expect(locItems).to.have.property('language');
      expect(locItems).to.have.property('territory');
      expect(locItems).to.have.property('script');
      expect(locItems).to.have.property('variant');
    });

    it('should return frozen objects', function() {
      var testObj = new Locale('en_US_POSIX');
      expect(testObj).to.be.frozen;
      expect(testObj.m_lang).to.be.frozen;
      expect(testObj.m_data).to.be.frozen;
      expect(testObj.m_lang.cs).to.be.frozen;
      expect(testObj.m_lang.cn).to.be.frozen;
      expect(testObj.m_data.cs).to.be.frozen;
      expect(testObj.m_data.cn).to.be.frozen;
    });

    it('should provide a shortcut to the POSIX locale', function() {
      var testObj = new Locale('en_US_POSIX');
      expect(testObj).to.equal(POSIX);
      expect(testObj).to.deep.equal(POSIX);
    });
  });

  describe('Behavior and Data', function() {
    it('should expose the parsed locale tag fields', function() {
      var testObj = new Locale('en_US_POSIX');
      expect(testObj).to.have.property('language', 'en');
      expect(testObj).to.have.property('territory', 'US');
      expect(testObj).to.have.property('script', null);
      expect(testObj).to.have.property('variant', 'POSIX');
    });

    it('should contain number formatting symbols', function() {
      var testObj = new Locale('en_US_POSIX');
      expect(testObj).to.have.property('decimal', '.');
      expect(testObj).to.have.property('group', ',');
      expect(testObj).to.have.property('plusSign', '+');
      expect(testObj).to.have.property('minusSign', '-');
      expect(testObj).to.have.property('exponential', 'E');
      expect(testObj).to.have.property('superscriptingExponent', '×');
      expect(testObj).to.have.property('percentSign', '%');
      expect(testObj).to.have.property('permilleSign', '0/00');
    });

    it('should contain strings to represent infinity and non-number values', function() {
      var testObj = new Locale('en_US_POSIX');
      expect(testObj).to.have.property('inf', 'INF');
      expect(testObj).to.have.property('nan', 'NaN');
    });

    it('should allow locales to override language defaults', function() {
      var testObj1 = new Locale('en');
      var testObj2 = new Locale('en_US');
      var testObj3 = new Locale('en_US_POSIX');
      // POSIX overrides the Infinity and Permille Symbols
      expect(testObj1).to.have.property('inf', '∞');
      expect(testObj2).to.have.property('inf', '∞');
      expect(testObj3).to.have.property('inf', 'INF');
      expect(testObj1).to.have.property('permilleSign', '‰');
      expect(testObj2).to.have.property('permilleSign', '‰');
      expect(testObj3).to.have.property('permilleSign', '0/00');
      // But should not override the decimal point
      expect(testObj1).to.have.property('decimal', '.');
      expect(testObj2).to.have.property('decimal', '.');
      expect(testObj3).to.have.property('decimal', '.');
    });

    it('should load new languages via registerLocale()', function() {
      var testFn = function() {
        registerLocale('zz', {
          ap: '¤#,##0.00;(¤#,##0.00)',
          cn: {
            XXX: 'Unknown Currency'
          },
          cp: '¤#,##0.00',
          cs: {
            XXX: '¤'
          },
          d: '.',
          e: 'E',
          g: ',',
          inf: '∞',
          m: '-',
          nan: 'NaN',
          np: '#,##0.###',
          p: '+',
          pc: '%',
          pm: '‰',
          x: '×'
        });
      }

      expect(testFn).to.not.throw();
    });

    it('should throw an error when a language is redefined', function() {
      var testFn = function() {
        registerLocale('en', {
          ap: '¤#,##0.00;(¤#,##0.00)',
          cn: {
            XXX: 'Unknown Currency'
          },
          cp: '¤#,##0.00',
          cs: {
            XXX: '¤'
          },
          d: '.',
          e: 'E',
          g: ',',
          inf: '∞',
          m: '-',
          nan: 'NaN',
          np: '#,##0.###',
          p: '+',
          pc: '%',
          pm: '‰',
          x: '×'
        });
      }

      expect(testFn).to.throw();
    });

    it('should throw an error when a language is missing properties', function() {
      var testFn = function() {
        registerLocale('zy', {
          //ap: '¤#,##0.00;(¤#,##0.00)',
          cn: {
            XXX: 'Unknown Currency'
          },
          cp: '¤#,##0.00',
          cs: {
            XXX: '¤'
          },
          d: '.',
          e: 'E',
          g: ',',
          inf: '∞',
          m: '-',
          nan: 'NaN',
          np: '#,##0.###',
          p: '+',
          pc: '%',
          pm: '‰',
          x: '×'
        });
      }

      expect(testFn).to.throw();
    });

    it('should throw an error when a locale is registered before its language', function() {
      var testFn = function() {
        registerLocale('zx_ZX', {
          ap: '¤#,##0.00;(¤#,##0.00)',
          cn: {
            XXX: 'Unknown Currency'
          },
          cp: '¤#,##0.00',
          cs: {
            XXX: '¤'
          },
          d: '.',
          e: 'E',
          g: ',',
          inf: '∞',
          m: '-',
          nan: 'NaN',
          np: '#,##0.###',
          p: '+',
          pc: '%',
          pm: '‰',
          x: '×'
        });
      }

      expect(testFn).to.throw();
    });

    it('should throw an error when an invalid locale tag is used', function() {
      var testFn = function() {
        registerLocale('zx1', {
          ap: '¤#,##0.00;(¤#,##0.00)',
          cn: {
            XXX: 'Unknown Currency'
          },
          cp: '¤#,##0.00',
          cs: {
            XXX: '¤'
          },
          d: '.',
          e: 'E',
          g: ',',
          inf: '∞',
          m: '-',
          nan: 'NaN',
          np: '#,##0.###',
          p: '+',
          pc: '%',
          pm: '‰',
          x: '×'
        });
      }

      expect(testFn).to.throw();
    });

    it('should load new languages via ES6 imports', function() {
      var testFn1 = function() { return new Locale('de_CH'); }
      var testFn2 = function() { return new Locale('fr_FR'); }
      var testFn3 = function() { return new Locale('en_CA'); }
      var testFn4 = function() { return new Locale('es_MX'); }
      expect(testFn1).to.not.throw();
      expect(testFn2).to.not.throw();
      expect(testFn3).to.not.throw();
      expect(testFn4).to.throw();
    });

    it('should provide data for loaded locales', function() {
      var testObj = new Locale('de_AT');
      expect(testObj).to.have.property('decimal', ',');
      expect(testObj).to.have.property('group', '.');
      expect(testObj).to.have.property('plusSign', '+');
      expect(testObj).to.have.property('minusSign', '-');
      expect(testObj).to.have.property('exponential', 'E');
      expect(testObj).to.have.property('superscriptingExponent', '·');
      expect(testObj).to.have.property('percentSign', '%');
      expect(testObj).to.have.property('permilleSign', '‰');
    });

    it('should provide default currencies', function() {
      var testObj1 = new Locale('en_US');
      var testObj2 = new Locale('en_CA');
      expect(testObj1.currency).to.equal(Currency('USD'));
      expect(testObj2.currency).to.equal(Currency('CAD'));
      expect(POSIX.currency).to.equal(Currency('USD'));
      expect(new Locale('en').currency).to.equal(Currency('USD'));
    });

    it('should return Unknown Currency for languages without a default country', function() {
      var testObj1 = new Locale('zz');
      expect(testObj1.currency).to.equal(Currency('XXX'));
    });

    it('should provide localized currency symbols', function() {
      var testObj1 = new Locale('en_US');
      var testObj2 = new Locale('en_CA');
      var testObj3 = new Locale('zz');
      expect(testObj1.currencySymbol('USD')).to.equal('$');
      expect(testObj2.currencySymbol('USD')).to.equal('US$');
      expect(testObj3.currencySymbol('USD')).to.equal('USD');
    });

    it('should provide localized currency names', function() {
      var testObj1 = new Locale('en_US');
      var testObj2 = new Locale('de_DE');
      var testObj3 = new Locale('zz');
      expect(testObj1.currencyName('CAD')).to.equal('Canadian Dollar');
      expect(testObj2.currencyName('CAD')).to.equal('Kanadischer Dollar');
      expect(testObj3.currencyName('CAD')).to.equal('CAD');
    });
  });

  describe('Number Parsing', function() {
    it('should parse localized numeric strings', function() {
      var testObj1 = new Locale('en_US');
      var testObj2 = new Locale('de_DE');
      expect(testObj1.parseNumber('1,234.5678', true).toString()).to.equal('1234.5678');
      expect(testObj1.parseNumber('1,234.5678', false).toString()).to.equal('1234.5678');
      expect(testObj2.parseNumber('1.234,5678', true).toString()).to.equal('1234.5678');
      expect(testObj2.parseNumber('1.234,5678', false).toString()).to.equal('1234.5678');
    });

    it('should throw an error for invalid numeric strings', function() {
      var testFn = function() { POSIX.parseNumber('abc') };
      expect(testFn).to.throw();
    });

    it('should suggest proper formatting for swapped group and decimal symbols', function() {
      var testFn1 = function() { (new Locale('en_US')).parseNumber('1.234,56', true) }
      var testFn2 = function() { (new Locale('de_DE')).parseNumber('0.00', true) }
      var testFn3 = function() { (new Locale('en_US')).parseNumber('12,34,567.89', true) }
      expect(testFn1).to.throw(/Did you mean 1.23456 or 1,234.56/);
      expect(testFn2).to.throw(/Did you mean 0/);
      expect(testFn3).to.throw(/Did you mean 1,234,567.89/);
    });

    it('should accept spaces for narrow NBSP groupings in non-strict mode', function() {
      var testObj1 = new Locale('fr');
      var bspNumber = '1 234,5678';
      var nbspNumber = bspNumber.replace(' ', '\u202f');
      var testFn1 = function() { return testObj1.parseNumber(bspNumber) };
      var testFn2 = function() { return testObj1.parseNumber(nbspNumber) };
      expect(testFn1).to.not.throw();
      expect(testFn2).to.not.throw();
    });

    it('should not accept spaces for narrow NBSP groupings in strict mode', function() {
      var testObj1 = new Locale('fr');
      var bspNumber = '1 234,5678';
      var nbspNumber = bspNumber.replace(' ', '\u202f');
      var testFn1 = function() { return testObj1.parseNumber(bspNumber, true) };
      var testFn2 = function() { return testObj1.parseNumber(nbspNumber, true) };
      expect(testFn1).to.throw();
      expect(testFn2).to.not.throw();
    });
  });

  describe('Number Formatting', function() {
    it('should format positive and negative numbers with rounding', function() {
      var L1 = new Locale('en_US');
      var L2 = new Locale('de_DE');
      expect(L1.formatNumber(1.2344)).to.equal('1.234');
      expect(L1.formatNumber(1.2345)).to.equal('1.235');
      expect(L1.formatNumber(-1.2345)).to.equal('-1.235');
      expect(L2.formatNumber(1.2344)).to.equal('1,234');
    });

    it('should format numbers with proper grouping', function() {
      var L1 = new Locale('en_US');
      var L2 = new Locale('de_DE');
      var L3 = new Locale('fr_FR');
      expect(L1.formatNumber(12345.67)).to.equal('12,345.67');
      expect(L2.formatNumber(12345.67)).to.equal('12.345,67');
      expect(L3.formatNumber(12345.67)).to.equal('12\u202f345,67');
    });

    it('should support mixed grouping sizes', function() {
      var L = new Locale('hi_IN');
      expect(L.formatNumber(1234567.89)).to.equal('12,34,567.89');
    });

    it('should not round when quantization is turned off', function() {
      var L1 = new Locale('en_US');
      expect(L1.formatNumber(1.2344, true)).to.equal('1.234');
      expect(L1.formatNumber(1.2344, false)).to.equal('1.2344');
    });

    it('should support formatting with custom patterns', function() {
      var L1 = new Locale('en_US');
      expect(L1.formatNumberWithPattern(1.2344, '#,##0.00')).to.equal('1.23');
    });
  });

  describe('Currency Formatting', function() {
    it('should format currencies with POSIX formatting', function() {
      expect(POSIX.formatCurrency(1.23, 'USD')).to.equal('$\u00a01.23');
    });

    it('should format currencies with localized formatting', function() {
      var L1 = new Locale('en_US');
      var L2 = new Locale('de_DE');
      expect(L1.formatCurrency(1234.56, 'USD')).to.equal('$1,234.56');
      expect(L2.formatCurrency(1234.56, 'USD')).to.equal('1.234,56\u00a0$');
    });

    it('should format currencies with localized symbols', function() {
      var L1 = new Locale('en_US');
      var L2 = new Locale('en_CA');
      expect(L1.formatCurrency(1234.56, 'USD')).to.equal('$1,234.56');
      expect(L2.formatCurrency(1234.56, 'USD')).to.equal('US$1,234.56');
    });

    it('should format currencies with accounting formats', function() {
      var L = new Locale('en_US');
      expect(L.formatCurrency( 12345.67, 'USD', true, 'accounting')).to.equal('$12,345.67');
      expect(L.formatCurrency(-12345.67, 'USD', true, 'accounting')).to.equal('($12,345.67)');
    });

    it('should throw an error for invalid currency formats', function() {
      var testFn = function() { POSIX.formatCurrency(1.23, 'USD', true, 'unknown') };
      expect(testFn).to.throw('Unknown currency formatting type unknown');
    });

    it('should support formatting with custom patterns', function() {
      var L1 = new Locale('en_US');
      var fmtAmt = L1.formatNumberWithPattern(
        1.2344,
        '#,##0.00',
        Currency('XXX'),
      );
      expect(fmtAmt).to.equal('1.234400');
    });
  });
});
