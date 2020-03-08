import { expect } from 'chai';
import Decimal from 'decimal.js-light';
import { Currency } from '../src/currency';
import { Locale } from '../src/locale';
import NumberPattern from '../src/numpattern';

describe('nvlps-currency: NumberPattern', function() {
  describe('NumberPattern Parser', function() {
    it('should have a public constructor', function() {
      var testFn = function() { return new NumberPattern('0.00'); }
      expect(testFn).to.not.throw();
    });

    it('should parse the POSIX number format string', function() {
      const p = '#,##0.###';
      var testNp = new NumberPattern(p);
      expect(testNp).to.be.an('object');
      expect(testNp).to.have.property('pattern', p);
      expect(testNp).to.have.property('parsed');
      expect(testNp.parsed).to.deep.equal({
        pPrefix: '',
        pSuffix: '',
        nPrefix: '-',
        nSuffix: '',
        grouping: { primary: 3, secondary: 3 },
        iPrec: { min: 1, max: 4 },
        fPrec: { min: 0, max: 3 },
        ePrec: null,
        ePlus: false,
      });
      expect(testNp).to.have.property('scale', 0);
    });

    it('should parse the POSIX currency format string', function() {
      const p = '¤#,##0.00';
      var testNp = new NumberPattern(p);
      expect(testNp).to.be.an('object');
      expect(testNp).to.have.property('pattern', p);
      expect(testNp).to.have.property('parsed');
      expect(testNp.parsed).to.deep.equal({
        pPrefix: '¤',
        pSuffix: '',
        nPrefix: '-¤',
        nSuffix: '',
        grouping: { primary: 3, secondary: 3 },
        iPrec: { min: 1, max: 4 },
        fPrec: { min: 2, max: 2 },
        ePrec: null,
        ePlus: false,
      });
      expect(testNp).to.have.property('scale', 0);
    });

    it('should parse the POSIX accounting format string', function() {
      const p = '¤#,##0.00;(¤#,##0.00)';
      var testNp = new NumberPattern(p);
      expect(testNp).to.be.an('object');
      expect(testNp).to.have.property('pattern', p);
      expect(testNp).to.have.property('parsed');
      expect(testNp.parsed).to.deep.equal({
        pPrefix: '¤',
        pSuffix: '',
        nPrefix: '(¤',
        nSuffix: ')',
        grouping: { primary: 3, secondary: 3 },
        iPrec: { min: 1, max: 4 },
        fPrec: { min: 2, max: 2 },
        ePrec: null,
        ePlus: false,
      });
      expect(testNp).to.have.property('scale', 0);
    });

    it('should parse Indian Vedic grouping', function() {
      const p = '¤#,##,##0.00';
      var testNp = new NumberPattern(p);
      expect(testNp).to.be.an('object');
      expect(testNp).to.have.property('pattern', p);
      expect(testNp).to.have.property('parsed');
      expect(testNp.parsed).to.deep.equal({
        pPrefix: '¤',
        pSuffix: '',
        nPrefix: '-¤',
        nSuffix: '',
        grouping: { primary: 3, secondary: 2 },
        iPrec: { min: 1, max: 6 },
        fPrec: { min: 2, max: 2 },
        ePrec: null,
        ePlus: false,
      });
      expect(testNp).to.have.property('scale', 0);
    });

    it('should parse exponential notation with no sign', function() {
      const p = '#.##E0';
      var testNp = new NumberPattern(p);
      expect(testNp).to.be.an('object');
      expect(testNp).to.have.property('pattern', p);
      expect(testNp).to.have.property('parsed');
      expect(testNp.parsed).to.deep.equal({
        pPrefix: '',
        pSuffix: '',
        nPrefix: '-',
        nSuffix: '',
        grouping: { primary: 1000, secondary: 1000 },
        iPrec: { min: 0, max: 1 },
        fPrec: { min: 0, max: 2 },
        ePrec: { min: 1, max: 1 },
        ePlus: false,
      });
      expect(testNp).to.have.property('scale', 0);
    });

    it('should parse exponential notation with sign', function() {
      const p = '#.##E+0';
      var testNp = new NumberPattern(p);
      expect(testNp).to.be.an('object');
      expect(testNp).to.have.property('pattern', p);
      expect(testNp).to.have.property('parsed');
      expect(testNp.parsed).to.deep.equal({
        pPrefix: '',
        pSuffix: '',
        nPrefix: '-',
        nSuffix: '',
        grouping: { primary: 1000, secondary: 1000 },
        iPrec: { min: 0, max: 1 },
        fPrec: { min: 0, max: 2 },
        ePrec: { min: 1, max: 1 },
        ePlus: true,
      });
      expect(testNp).to.have.property('scale', 0);
    });

    it('should parse formats with no decimal part', function() {
      const p = '#,##0';
      var testNp = new NumberPattern(p);
      expect(testNp).to.be.an('object');
      expect(testNp).to.have.property('pattern', p);
      expect(testNp).to.have.property('parsed');
      expect(testNp.parsed).to.deep.equal({
        pPrefix: '',
        pSuffix: '',
        nPrefix: '-',
        nSuffix: '',
        grouping: { primary: 3, secondary: 3 },
        iPrec: { min: 1, max: 4 },
        fPrec: { min: 0, max: 0 },
        ePrec: null,
        ePlus: false,
      });
      expect(testNp).to.have.property('scale', 0);
    });

    it('should parse significant digit patterns', function() {
      const p = '@@##';
      var testNp = new NumberPattern(p);
      expect(testNp).to.be.an('object');
      expect(testNp).to.have.property('pattern', p);
      expect(testNp).to.have.property('parsed');
      expect(testNp.parsed).to.deep.equal({
        pPrefix: '',
        pSuffix: '',
        nPrefix: '-',
        nSuffix: '',
        grouping: { primary: 1000, secondary: 1000 },
        iPrec: { min: 2, max: 4 },
        fPrec: { min: 0, max: 0 },
        ePrec: null,
        ePlus: false,
      });
      expect(testNp).to.have.property('scale', 0);
    });

    it('should parse percent patterns', function() {
      const p = '0%';
      var testNp = new NumberPattern(p);
      expect(testNp).to.be.an('object');
      expect(testNp).to.have.property('pattern', p);
      expect(testNp).to.have.property('parsed');
      expect(testNp.parsed).to.deep.equal({
        pPrefix: '',
        pSuffix: '%',
        nPrefix: '-',
        nSuffix: '%',
        grouping: { primary: 1000, secondary: 1000 },
        iPrec: { min: 1, max: 1 },
        fPrec: { min: 0, max: 0 },
        ePrec: null,
        ePlus: false,
      });
      expect(testNp).to.have.property('scale', 2);
    });

    it('should parse permille patterns', function() {
      const p = '0‰';
      var testNp = new NumberPattern(p);
      expect(testNp).to.be.an('object');
      expect(testNp).to.have.property('pattern', p);
      expect(testNp).to.have.property('parsed');
      expect(testNp.parsed).to.deep.equal({
        pPrefix: '',
        pSuffix: '‰',
        nPrefix: '-',
        nSuffix: '‰',
        grouping: { primary: 1000, secondary: 1000 },
        iPrec: { min: 1, max: 1 },
        fPrec: { min: 0, max: 0 },
        ePrec: null,
        ePlus: false,
      });
      expect(testNp).to.have.property('scale', 3);
    });

    it('should throw an error for invalid patterns', function() {
      // Significant Digit patterns may not contain '.' or '0'
      var testFn1 = function() { return new NumberPattern('@@##.###') };
      var testFn2 = function() { return new NumberPattern('@@#0') };

      expect(testFn1).to.throw();
      expect(testFn2).to.throw();
    });
  });

  describe('NumberPattern Formatter', function() {
    it('should format numeric values', function() {
      var testNp = new NumberPattern('0.##');
      expect(testNp.apply(1.234, new Locale('en_US'))).to.equal('1.23');
      expect(testNp.apply(1, new Locale('en_US'))).to.equal('1');
    });

    it('should format string values', function() {
      var testNp = new NumberPattern('0.##');
      expect(testNp.apply('1.234', new Locale('en_US'))).to.equal('1.23');
      expect(testNp.apply('1', new Locale('en_US'))).to.equal('1');
    });

    it('should format Decimal values', function() {
      var testNp = new NumberPattern('0.##');
      expect(testNp.apply(new Decimal(1.234), new Locale('en_US'))).to.equal('1.23');
      expect(testNp.apply(new Decimal(1), new Locale('en_US'))).to.equal('1');
    });

    it('should render scientific notation patterns', function() {
      var testNp1 = new NumberPattern('0.##E0');
      var testNp2 = new NumberPattern('#E0');
      var testNp3 = new NumberPattern('@@#E+0');
      expect(testNp1.apply(12345, new Locale('en_US'))).to.equal('1.23E4');
      expect(testNp1.apply(0.01234, new Locale('en_US'))).to.equal('1.23E-2');
      expect(testNp2.apply(12345, new Locale('en_US'))).to.equal('1.2345E4');
      expect(testNp2.apply(0.01234, new Locale('en_US'))).to.equal('1.234E-2');
      expect(testNp3.apply(12345, new Locale('en_US'))).to.equal('12.345E+3');
      expect(testNp3.apply(0.01234, new Locale('en_US'))).to.equal('12.34E-3');
    });

    it('should render significant digit patterns', function() {
      var testNp1 = new NumberPattern('@@@');
      var testNp2 = new NumberPattern('@@##');
      expect(testNp1.apply(12345, new Locale('en_US'))).to.equal('12300');
      expect(testNp1.apply(0.12345, new Locale('en_US'))).to.equal('0.123')
      expect(testNp2.apply(12345, new Locale('en_US'))).to.equal('12350');
      expect(testNp2.apply(0.12345, new Locale('en_US'))).to.equal('0.1235');
    });

    it('should format currency with symbols', function() {
      var testNp = new NumberPattern('¤\u00a0#,##0.00');
      expect(testNp.apply(
        1234567.89,
        new Locale('en_US'),
        'USD',
        true,
        true
      )).to.equal('$\u00a01,234,567.89');
    });

    it('should format currency with codes', function() {
      var testNp = new NumberPattern('¤¤\u00a0#,##0.00');
      expect(testNp.apply(
        1234567.89,
        new Locale('en_US'),
        'USD',
        true,
        true
      )).to.equal('USD\u00a01,234,567.89');
    });

    it('should format currency with codes', function() {
      var testNp = new NumberPattern('#,##0.00\u00a0¤¤¤');
      expect(testNp.apply(
        1234567.89,
        new Locale('en_US'),
        new Currency('USD'),
        true,
        true
      )).to.equal('1,234,567.89\u00a0US Dollar');
    });

    it('should pad numbers to minimum length', function() {
      var testNp1 = new NumberPattern('000.000');
      var testNp2 = new NumberPattern('000.#');
      var testNp3 = new NumberPattern('0.000');
      expect(testNp1.apply('1.2', new Locale('en_US'))).to.equal('001.200');
      expect(testNp2.apply('1.2', new Locale('en_US'))).to.equal('001.2');
      expect(testNp3.apply('1.2', new Locale('en_US'))).to.equal('1.200');
    });
  });
});
