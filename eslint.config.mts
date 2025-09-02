import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import pluginNext from '@next/eslint-plugin-next'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts'
    ]
  },
  pluginReact.configs.flat.recommended,
  importPlugin.flatConfigs.recommended,
  eslintPluginUnicorn.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs['recommended-latest'],
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      '@next/next': pluginNext
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...pluginNext.configs.recommended.rules
    }
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: globals.browser
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': [
        'error',
        {
          case: 'camelCase'
        }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  eslintPluginPrettierRecommended
])
