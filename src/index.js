/**
 * Currency and Locale Handling Library for Nvlps
 *
 */

import * as nvLocaleData from '../data/nvlps-locale-data.json';
import * as nvCurrencyData from '../data/nvlps-currency-data.json';

export {
  parseLocale,
  generateLocale,
  negotiateLocale,
  defaultLocale,
} from './locale';

export {
  nvCurrencyData,
  nvLocaleData,
}
