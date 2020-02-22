
import assert from 'assert';
import {
  parseLocale,
  generateLocale,
  negotiateLocale,
  defaultLocale,
} from '../src/index';

// Check for the window Object and mock environment variables
try
{
  if (window) {
    window.process = {
      env: {
        LANG: 'en_US.UTF-8',
      }
    }
  }
}
catch (err) {
}

// Check for the global Object and mock navigator variables
try {
  if (global) {
    global.navigator = {
      language: 'en_US.UTF-8',
    }
  }
}
catch (err) {
}

describe('nvlps-currency: locale', function() {
  describe('parseLocale', function() {
    it('should parse minimal locale "en" without error', function() {
      const { language, territory, script, variant } = parseLocale('en')
      assert.equal(language, 'en')
      assert.equal(territory, null)
      assert.equal(script, null)
      assert.equal(variant, null)
    });
    it('should parse locale locale "en-us" without error', function() {
      const { language, territory, script, variant } = parseLocale('en-us', '-')
      assert.equal(language, 'en')
      assert.equal(territory, 'US')
      assert.equal(script, null)
      assert.equal(variant, null)
    });
    it('should parse locale "en-US-POSIX" without error', function() {
      const { language, territory, script, variant } = parseLocale('en-US-POSIX', '-')
      assert.equal(language, 'en')
      assert.equal(territory, 'US')
      assert.equal(script, null)
      assert.equal(variant, 'POSIX')
    });
    it('should parse locale "zh_Hans_CN" without error', function() {
      const { language, territory, script, variant } = parseLocale('zh_Hans_CN')
      assert.equal(language, 'zh')
      assert.equal(territory, 'CN')
      assert.equal(script, 'Hans')
      assert.equal(variant, null)
    });
    it('should normalize case of "EN-sCRP-us-Varnt"', function() {
      const { language, territory, script, variant } = parseLocale('EN-sCRP-us-Varnt', '-')
      assert.equal(language, 'en')
      assert.equal(territory, 'US')
      assert.equal(script, 'Scrp')
      assert.equal(variant, 'Varnt')
    });
    it('should support numeric territories as in "en-001"', function() {
      const { language, territory, script, variant } = parseLocale('en-001', '-')
      assert.equal(language, 'en')
      assert.equal(territory, '001')
      assert.equal(script, null)
      assert.equal(variant, null)
    });
    it('should support numeric variants as in "en_US_1999"', function() {
      const { language, territory, script, variant } = parseLocale('en_US_1999')
      assert.equal(language, 'en')
      assert.equal(territory, 'US')
      assert.equal(script, null)
      assert.equal(variant, '1999')
    })
    it('should reject invalid locale "no_not_a_LOCALE_String" with an exception', function() {
      assert.throws(
        () => { parseLocale('no_not_a_LOCALE_String') },
        Error,
        'Invalid locale identifier "no_not_a_LOCALE_String"'
      );
    });
    it('should reject invalid language code "e4_US" with an exception', function() {
      assert.throws(
        () => { parseLocale('e4_US') },
        Error,
        'Invalid locale language "e4"'
      );
    });
  });

  describe('generateLocale', function() {
    it('should generate minimal locale "en" without error', function() {
      assert.equal(generateLocale({
        language: 'en'
      }),
      'en');
    });
    it('should generate locale "de-AT-1999" without error', function() {
      assert.equal(generateLocale({
        language: 'de',
        territory: 'AT',
        variant: '1999',
      }, '-'),
      'de-AT-1999');
    });
    it('should generate locale "zh_Hans_CN" without error', function() {
      assert.equal(generateLocale({
        language: 'zh',
        territory: 'CN',
        script: 'Hans',
      }),
      'zh_Hans_CN');
    });
  });

  describe('negotiateLocale', function() {
    it('should select "de_DE" for negotiateLocale(["de_DE", "en_US"], ["de_DE", "de_AT"])', function() {
      assert.equal(negotiateLocale(["de_DE", "en_US"], ["de_DE", "de_AT"]), "de_DE");
    });
    it('should select "en_US" for negotiateLocale(["de_DE", "en_US"], ["en_US", "en_US_POSIX"])', function() {
      assert.equal(negotiateLocale(["de_DE", "en_US"], ["en_US", "en_US_POSIX"]), "en_US");
    });
    it('should return null for negotiateLocale(["zh_CN", "zh_TW"], ["de_DE", "de_AT"])', function() {
      assert.equal(negotiateLocale(["zh_CN", "zh_TW"], ["de_DE", "de_AT"]), null);
    });
    it('should select "jp_JP" by language for negotiate_locale(["ja", "en_US"], ["ja_JP", "en_US"])', function() {
      assert.equal(negotiateLocale(["ja", "en_US"], ["ja_JP", "en_US"]), "ja_JP");
    });
    it('should select "nb_NO" by alias for negotiate_locale(["no", "sv"], ["nb_NO", "sv_SE"])', function() {
      assert.equal(negotiateLocale(["no", "sv"], ["nb_NO", "sv_SE"]), "nb_NO");
    });
  });

  describe('defaultLocale', function() {
    it('should load "de_AT" from navigator.language set to "de_AT.ISO-8859"', function() {
      var tmp = navigator.language;
      navigator.language = 'de_AT.ISO-8859';
      assert.equal(defaultLocale(), 'de_AT');
      navigator.language = tmp;
    });
    it('should load "de_DE" from navigator.language set to "de_DE.UTF-8"', function() {
      var tmp = navigator.language;
      navigator.language = 'de_DE.UTF-8';
      assert.equal(defaultLocale(), 'de_DE');
      navigator.language = tmp;
    });
    it('should load "de_AT" from LANG="de_AT.ISO-8859 when navigator is unset"', function() {
      var tmp = navigator;
      var tmpEnv = process.env;
      navigator = undefined;
      process.env = {}
      process.env.LANG='de_AT.ISO-8859'
      assert.equal(defaultLocale(), 'de_AT');
      navigator = tmp;
      process.env = tmpEnv;
    });
    it('should load "en_US_POSIX" from LANG="C" when navigator is unset"', function() {
      var tmp = navigator;
      var tmpEnv = process.env;
      navigator = undefined;
      process.env.LANG='C'
      assert.equal(defaultLocale(), 'en_US_POSIX');
      navigator = tmp;
      process.env = tmpEnv;
    });
    it('should load "en_US_POSIX" from LC_ALL="POSIX" when navigator is unset"', function() {
      var tmp = navigator;
      var tmpEnv = process.env;
      navigator = undefined;
      process.env = {}
      process.env.LC_ALL='POSIX'
      assert.equal(defaultLocale(), 'en_US_POSIX');
      navigator = tmp;
      process.env = tmpEnv;
    });
    it('should load "en_US_POSIX" from LC_MESSAGES="C" when navigator is unset"', function() {
      var tmp = navigator;
      var tmpEnv = process.env;
      navigator = undefined;
      process.env = {}
      process.env.LC_MESSAGES='C'
      assert.equal(defaultLocale('LC_MESSAGES'), 'en_US_POSIX');
      navigator = tmp;
      process.env = tmpEnv;
    });
  });
})
