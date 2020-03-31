module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
  overrides: [
      {
        files: ["*.test.js"],
        rules: {
          'react/jsx-props-no-spreading': 0,
        },
      }
    ]
};
