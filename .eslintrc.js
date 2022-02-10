const base = require('@srclaunch/dx/.eslintrc.ui');

module.exports = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    project: './tsconfig.json',
  },
};
