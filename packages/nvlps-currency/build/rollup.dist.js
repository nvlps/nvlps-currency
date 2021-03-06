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
      plugins: [
        resolve(),
        commonjs(),
        babel({
          exclude: 'node_modules/**',
        })
      ]
    },
    output: {
      file: fileName,
      format: 'iife',
      name: 'nvlps',
      plugins: [ terser.terser() ],
    },
  };
};
