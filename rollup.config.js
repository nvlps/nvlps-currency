import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  // Web Build
  {
    input: 'src/nvlps-currency.js',
    output: {
      file: 'dist/nvlps-currency.min.js',
      format: 'iife',
      name: 'nvlps'
    },
    plugins: [
      resolve(),
      commonjs(),
      terser()
    ]
  },

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	{
		input: 'src/nvlps-currency.js',
		external: [ "decimal.js-light" ],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
