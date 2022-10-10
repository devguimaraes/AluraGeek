module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: [
    'react', 'html',
  ],
  rules: {
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': ['off'],
		"react/jsx-props-no-spreading": "off",
  },
};
