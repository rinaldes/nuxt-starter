// @ts-check
import prettierPlugin from 'eslint-plugin-prettier';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'prettier/prettier': 'error',
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/html-self-closing': 'off',
      'vue/multi-word-component-names': 'off',
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/shared',
              from: ['./src/app', './src/feature'],
              message:
                'Shared modules (components, composables, utils) should be independent',
            },
            {
              target: './src/feature',
              from: './src/feature',
              message:
                'Feature modules should not import from other features directly',
            },
            {
              target: './src/app',
              from: ['./src/**'],
              except: [
                './src/shared/components/*',
                './src/shared/composables/*',
                './src/shared/utils/*',
                './src/feature/*',
              ],
              message:
                'App should import from defined module entry points only',
            },
          ],
        },
      ],
    },
  },
]);
