import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'createVatIdMask',
      file: pkg.browser,
      format: 'umd',
      extend: true
    },
    plugins: [
      babel({
        presets: [['@babel/env', { modules: false }]]
      }),
      resolve(),
      commonjs()
    ]
  },
  {
    input: 'src/index.js',
    external: ['ms'],
    output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
    plugins: [
      babel({
        presets: [['@babel/env', { modules: false }]]
      })
    ]
  }
];
