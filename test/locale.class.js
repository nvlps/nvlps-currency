import { expect } from 'chai';
import {
  Locale,
  parseLocale,
  availableLocales,
  availableLanguages,
} from '../src/locale';

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

    it('should return an array of available language tags', function() {
      var list = availableLanguages();
      expect(list).to.be.an('array');
      expect(list.length).to.be.at.least(1);
      expect(list[0]).to.be.a('string');

      var locItems = parseLocale(list[0]);
      expect(locItems).to.have.property('language');
      expect(locItems).to.have.property('territory', null);
      expect(locItems).to.have.property('script', null);
      expect(locItems).to.have.property('variant', null);
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
  });

  describe('Behavior and Data', function() {
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

    it('should load new languages at runtime', function() {
      var testFn1 = function() { return new Locale('de_CH'); }
      var testFn2 = function() { return new Locale('en_CA'); }
      expect(testFn1).to.throw();
      expect(testFn2).to.throw();

      // Load 'de' Language and Locales
      require('../src/locales/de');
      expect(testFn1).to.not.throw();
      expect(testFn2).to.throw();

      // Load 'en' Language and Locales
      require('../src/locales/en');
      expect(testFn1).to.not.throw();
      expect(testFn2).to.not.throw();
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

    it('should provide localized currency symbols', function() {
      var testObj1 = new Locale('en_US');
      var testObj2 = new Locale('en_CA');
      expect(testObj1.currencySymbol('USD')).to.equal('$');
      expect(testObj2.currencySymbol('USD')).to.equal('US$');
    });

    it('should provide localized currency names', function() {
      var testObj1 = new Locale('en_US');
      var testObj2 = new Locale('de_DE');
      expect(testObj1.currencyName('CAD')).to.equal('Canadian Dollar');
      expect(testObj2.currencyName('CAD')).to.equal('Kanadischer Dollar');
    });
  });
});
