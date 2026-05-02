import daStyle from 'eslint-config-dicodingacademy';
import pluginReact from 'eslint-plugin-react';

export default [
  // Global ignores – must be a standalone entry in ESLint v9 flat config
  {
    ignores: ['dist/**', 'node_modules/**', 'public/**'],
  },
  daStyle,
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'camelcase': 'off',
    },
  },
];
