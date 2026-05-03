import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Base configuration for all files
  js.configs.recommended,
  
  // All files configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier: prettier,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'warn',
    },
  },
  
  // Global ignores
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      '*.config.js',
      '*.config.ts',
      '**/*.json', // Ignore all JSON files
    ],
  },
];
