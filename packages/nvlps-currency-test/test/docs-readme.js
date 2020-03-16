import { expect } from 'chai';

// Import Library per README.md script
import {
  Money, Currency, Locale
} from 'nvlps-currency';

// Load l10n information dynamically (only en_US and en_US_POSIX are loaded
// by default). In the browser, include with a <script> tag instead.
import { EN, DE } from 'nvlps-currency-l10n';

describe('nvlps-currency: README.md', function() {
  it('should contain a demo script which executes correctly', function() {
    // Create a Money Object with USD $4.00
    const m = new Money('4.00', 'USD');

    // Add and Subtract Amounts
    const m2 = m.add(1).subtract('0.50');

    // Format into a localized string
    expect(m2.format(new Locale('en_US'))).to.equal('$4.50');
    expect(m2.format(new Locale('de_DE'))).to.equal('4,50\u00a0$');

    // Localized parsing works too, with default currency for the locale
    const m3 = new Money('1 234,56', new Locale('fr_FR'));
    expect(m3.format(new Locale('en_US'))).to.equal('€1,234.56');
  });
});
