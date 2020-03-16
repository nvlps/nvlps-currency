import { expect } from 'chai';
import {
  parseLocale,
  generateLocale,
  negotiateLocale,
  defaultLocale,
} from '../src/lib/locale';

describe('nvlps-currency: locale utilities', function() {
  describe('parseLocale', function() {
    it('should parse minimal locale "en" without error', function() {
      var ret = parseLocale('en')
      expect(ret).to.have.property('language', 'en')
      expect(ret).to.have.property('territory', null)
      expect(ret).to.have.property('script', null)
      expect(ret).to.have.property('variant', null)
    });
    it('should parse locale locale "en-us" without error', function() {
      var ret = parseLocale('en-us', '-')
      expect(ret).to.have.property('language', 'en')
      expect(ret).to.have.property('territory', 'US')
      expect(ret).to.have.property('script', null)
      expect(ret).to.have.property('variant', null)
    });
    it('should parse locale "en-US-POSIX" without error', function() {
      var ret = parseLocale('en-US-POSIX', '-')
      expect(ret).to.have.property('language', 'en')
      expect(ret).to.have.property('territory', 'US')
      expect(ret).to.have.property('script', null)
      expect(ret).to.have.property('variant', 'POSIX')
    });
    it('should parse locale "zh_Hans_CN" without error', function() {
      var ret = parseLocale('zh_Hans_CN')
      expect(ret).to.have.property('language', 'zh')
      expect(ret).to.have.property('territory', 'CN')
      expect(ret).to.have.property('script', 'Hans')
      expect(ret).to.have.property('variant', null)
    });
    it('should normalize case of "EN-sCRP-us-Varnt"', function() {
      var ret = parseLocale('EN-sCRP-us-Varnt', '-')
      expect(ret).to.have.property('language', 'en')
      expect(ret).to.have.property('territory', 'US')
      expect(ret).to.have.property('script', 'Scrp')
      expect(ret).to.have.property('variant', 'Varnt')
    });
    it('should support numeric territories as in "en-001"', function() {
      var ret = parseLocale('en-001', '-')
      expect(ret).to.have.property('language', 'en')
      expect(ret).to.have.property('territory', '001')
      expect(ret).to.have.property('script', null)
      expect(ret).to.have.property('variant', null)
    });
    it('should support numeric variants as in "en_US_1999"', function() {
      var ret = parseLocale('en_US_1999')
      expect(ret).to.have.property('language', 'en')
      expect(ret).to.have.property('territory', 'US')
      expect(ret).to.have.property('script', null)
      expect(ret).to.have.property('variant', '1999')
    });
    it('should support locale modifiers as in "en_US@euro"', function() {
      var ret = parseLocale('en_US@euro')
      expect(ret).to.have.property('language', 'en')
      expect(ret).to.have.property('territory', 'US')
      expect(ret).to.have.property('script', null)
      expect(ret).to.have.property('variant', null)
    });
    it('should reject invalid locale "no_not_a_LOCALE_String" with an exception', function() {
      var testFn = function() { parseLocale('no_not_a_LOCALE_String') };
      expect(testFn).to.throw();
    });
    it('should reject invalid language code "e4_US" with an exception', function() {
      var testFn = function() { parseLocale('e4_US') };
      expect(testFn).to.throw();
    });
  });

  describe('generateLocale', function() {
    it('should generate minimal locale "en" without error', function() {
      var ret = generateLocale({
        language: 'en'
      });
      expect(ret).to.equal('en');
    });
    it('should generate locale "de-AT-1999" without error', function() {
      var ret = generateLocale({
        language: 'de',
        territory: 'AT',
        variant: '1999',
      }, '-');
      expect(ret).to.equal('de-AT-1999');
    });
    it('should generate locale "zh_Hans_CN" without error', function() {
      var ret = generateLocale({
        language: 'zh',
        territory: 'CN',
        script: 'Hans',
      });
      expect(ret).to.equal('zh_Hans_CN');
    });
    it('should throw an error if no language key is provided', function() {
      var testFn = function() {
        generateLocale({
          language: false,
        });
      }
      expect(testFn).to.throw();
    });
  });

  describe('negotiateLocale', function() {
    it('should select "de_DE" for negotiateLocale(["de_DE", "en_US"], ["de_DE", "de_AT"])', function() {
      expect(negotiateLocale(["de_DE", "en_US"], ["de_DE", "de_AT"])).to.equal("de_DE");
    });
    it('should select "en_US" for negotiateLocale(["de_DE", "en_US"], ["en_US", "en_US_POSIX"])', function() {
      expect(negotiateLocale(["de_DE", "en_US"], ["en_US", "en_US_POSIX"])).to.equal("en_US");
    });
    it('should return null for negotiateLocale(["zh_CN", "zh_TW"], ["de_DE", "de_AT"])', function() {
      expect(negotiateLocale(["zh_CN", "zh_TW"], ["de_DE", "de_AT"])).to.equal(null);
    });
    it('should select "jp_JP" by language for negotiate_locale(["ja", "en_US"], ["ja_JP", "en_US"])', function() {
      expect(negotiateLocale(["ja", "en_US"], ["ja_JP", "en_US"])).to.equal("ja_JP");
    });
    it('should select "nb_NO" by alias for negotiate_locale(["no", "sv"], ["nb_NO", "sv_SE"])', function() {
      expect(negotiateLocale(["no", "sv"], ["nb_NO", "sv_SE"])).to.equal("nb_NO");
    });
    it('should select "en" for negotiateLocale(["de_DE", "en_US"], ["en", "es"])', function() {
      expect(negotiateLocale(["de_DE", "en_US"], ["en", "es"])).to.equal("en");
    });
  });

  describe('defaultLocale', function() {
    var has_nav = false;
    var has_env = false;
    var b_nav_lang = null;
    var b_proc_env = null;
    var globals = function() {
      if (typeof self !== 'undefined') { return self; }
      if (typeof window !== 'undefined') { return window; }
      if (typeof global !== 'undefined') { return global; }
      throw new Error('unable to locate global object');
    }();

    beforeEach(function() {
      var has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
      if (has(globals, 'navigator')) {
        has_nav = true;
        b_nav_lang = navigator.language;
        delete navigator.language;
      }
      else {
        globals.navigator = {};
      }

      if (has(globals, 'process')) {
        has_env = true;
        b_proc_env = process.env;
        ['LANGUAGE', 'LC_ALL', 'LC_CTYPE', 'LANG'].forEach((i) => {
          if (has(process.env, i)) {
            delete process.env[i];
          }
        });
      }
      else {
        globals.process = {env: {}};
      }
    });

    afterEach(function() {
      if (b_nav_lang !== null) {
        navigator.language = b_nav_lang;
      }
      if (b_proc_env !== null) {
        process.env = b_proc_env;
      }
      b_nav_lang = null;
      b_proc_env = null;
      if (! has_nav) {
        delete globals.navigator;
      }
      if (! has_env) {
        delete globals.process;
      }
    });

    it('should return null when no default locale is defined', function() {
      expect(defaultLocale()).to.equal(null);
    });
    it('should load "de_AT" from navigator.language set to "de-AT"', function() {
      globals.navigator.language = 'de-AT';
      expect(defaultLocale()).to.equal('de_AT');
    });
    it('should load "de_DE" from navigator.language set to "de-DE.UTF-8"', function() {
      globals.navigator.language = 'de-DE.UTF-8';
      expect(defaultLocale()).to.equal('de_DE');
    });
    it('should load "en_US" from LANGUAGE="en_US:de_DE" when navigator is unset', function() {
      globals.process.env['LANGUAGE'] = 'en_US:de_DE';
      expect(defaultLocale()).to.equal('en_US');
    });
    it('should load "de_AT" from LANG="de_AT.ISO-8859" when navigator is unset', function() {
      globals.process.env['LANG'] = 'de_AT.ISO-8859';
      expect(defaultLocale()).to.equal('de_AT');
    });
    it('should load "de_DE" from LANG="de" when navigator is unset via aliases', function() {
      globals.process.env['LANG'] = 'de';
      expect(defaultLocale()).to.equal('de_DE');
    });
    it('should load "en_US_POSIX" from LANG="C" when navigator is unset', function() {
      globals.process.env['LANG'] = 'C';
      expect(defaultLocale()).to.equal('en_US_POSIX');
    });
    it('should load "en_US_POSIX" from LC_ALL="POSIX" when navigator is unset', function() {
      globals.process.env['LC_ALL'] = 'POSIX';
      expect(defaultLocale()).to.equal('en_US_POSIX');
    });
    it('should load "en_US_POSIX" from LC_MESSAGES="C" when navigator is unset', function() {
      globals.process.env['LC_MESSAGES'] = 'C';
      expect(defaultLocale('LC_MESSAGES')).to.equal('en_US_POSIX');
    });
  });
});
