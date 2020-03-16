const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('rollup-plugin-babel');
const terser = require('rollup-plugin-terser');

const path = require('path');

module.exports = (config) => {
  const { input, fileName, name } = config;
  return {
    input: {
      input,
      external: [
        'nvlps-currency',
      ],
      plugins: [
        resolve(),
        commonjs(),
        babel({
          exclude: 'node_modules/**',
        }),
        terser.terser(),
      ],
    },
    output: {
      file: fileName,
      format: 'umd',
      name: name || 'nvlps',
      globals: {
        'nvlps-currency': 'nvlps'
      },
    },
  };
};
