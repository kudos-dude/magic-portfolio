const path = require('path');
require('@babel/register');

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 10,
    sourceType: "module",
    allowImportExportEverywhere: true,
    codeFrame: false,
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  plugins: [ "react" ],
  extends: ["airbnb", "prettier"],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    "max-len": ["error", { code: 100 }],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["warn"],
    "no-return-assign": ["off"], 
  },
  settings: {
    "import/resolver": {
      "webpack": {
        config: path.resolve("./webpack.config.prod.js")
      }
    }
  }
};
