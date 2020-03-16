import { expect } from 'chai';
import { Locale } from 'nvlps-currency-core';

import '../src/locales/de';
import '../src/locales/en';
import '../src/locales/fr';

describe('nvlps-currency: Localization', function() {
  it('should load non-POSIX Locales', function() {
    var testFn1 = function() { return new Locale('en_AU') };
    var testFn2 = function() { return new Locale('de_DE') };
    var testFn3 = function() { return new Locale('fr') };
    expect(testFn1).to.not.throw();
    expect(testFn2).to.not.throw();
    expect(testFn3).to.not.throw();
  });
});
