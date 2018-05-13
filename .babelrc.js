'use strict';

const options = {
  presets: [['env', { loose: true, modules: false }], '@babel/react'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/proposal-object-rest-spread',
    ['@babel/proposal-class-properties', { loose: true }],
    ['transform-react-remove-prop-types', { mode: 'wrap' }]
  ],
};
  


module.exports = options;