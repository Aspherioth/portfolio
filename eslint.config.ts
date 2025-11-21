import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import pluginImport from 'eslint-plugin-import'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// Shared formatting and React rules
const commonRules = {
  semi: ['error', 'never'],
  quotes: ['error', 'single'],
  'jsx-quotes': ['error', 'prefer-single'],
  'object-curly-spacing': ['error', 'always'],
  'comma-dangle': ['error', 'always-multiline'],
  'arrow-parens': ['error', 'always'],
  'space-before-function-paren': [
    'error',
    { anonymous: 'always', named: 'never', asyncArrow: 'always' },
  ],

  // React modern runtime
  'react/react-in-jsx-scope': 'off',
  'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
}

// Import ordering and spacing
const importRules = {
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
const reactNamingRules = {
  'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
}

export default defineConfig([
  globalIgnores(['dist']),

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
])
