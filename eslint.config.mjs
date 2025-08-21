import { defineConfig } from 'eslint/config';
import tseslint from '@typescript-eslint/eslint-plugin';

export default defineConfig([
  {
    extends: ['@workspace/eslint-config/library.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: true,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    // Global ignores
    ignores: [
      'apps/**',
      'packages/**',
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      '*.config.js',
      '*.config.ts',
      '**/*.json', // Ignore all JSON files
    ],
  },
]);
