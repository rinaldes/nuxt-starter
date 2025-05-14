// @ts-check
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  {
    ignores: [
      '.nuxt/',
      'node_modules/',
      '.output/',
      '.env*',
      '*.min.js',
      '*.log',
      'prisma/client',
    ],
  },
  prettierPlugin,
  {
    rules: {
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/html-self-closing': 'off',
      'vue/multi-word-component-names': 'off',
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/**/',
              from: './src/app/',
              except: [],
              message: '🚫 No modules can import from app/',
            },
            {
              target: './src/!(app)/**/',
              from: './src/features/',
              message: '🚫 Only app can import from features/',
            },
          ],
        },
      ],
    },
  },
]);
