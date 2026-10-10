import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import pluginImport from 'eslint-plugin-import'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import type { Linter } from 'eslint'

// Shared formatting and React rules
const commonRules: Linter.RulesRecord = {
  // React modern runtime
  'react/react-in-jsx-scope': 'off',
  'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
}

// Import ordering and spacing
const importRules: Linter.RulesRecord = {
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
        'type',
      ],
      'newlines-between': 'always',
      alphabetize: { order: 'asc', caseInsensitive: true },
    },
  ],
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
}

// Optional React naming conventions
const reactNamingRules: Linter.RulesRecord = {
  'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
}

export default defineConfig([
  globalIgnores(['dist', 'src/components/ui/color-mode.tsx']),

  // Shared plugin settings
  { settings: { react: { version: 'detect' } } },

  // Node-friendly config files
  {
    files: ['*.config.{js,ts}', '*rc.{js,ts}', '**/scripts/**/*.{js,ts}'],
    languageOptions: { globals: globals.node },
  },

  // JS files
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: { import: pluginImport },
    extends: [
      js.configs.recommended,
      pluginReact.configs.flat.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      ...commonRules,
      ...importRules,
      ...reactNamingRules,

      // JS-only unused vars
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },

  // TS files
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { import: pluginImport },
    extends: [
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      ...commonRules,
      ...importRules,
      ...reactNamingRules,

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^[A-Z_]',
        },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],

      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
    },
  },
  eslintConfigPrettier,
])
