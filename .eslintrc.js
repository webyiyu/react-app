const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  extends: [
    'react-app',
    // 'plugin:react/recommended'
  ],
  plugins: ['react-hooks'],
  rules: {
    // 'import/no-dynamic-require': 'off',
    // 'react/jsx-uses-react': 2,
    'react-hooks/rules-of-hooks': 'error',
    // 检查依赖项的声明
    'react-hooks/exhaustive-deps': 'warn',
  },
};
