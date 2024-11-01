import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
const __dirname = import.meta.dirname;

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      'no-warning-comments': [
        'error',
        {
          terms: [
            'todo',
            'fix',
            'bug',
            'perf',
            'warn',
            'test',
            'hack',
            'note',
          ],
        },
      ],
      'no-console': 'error',
    },
  },

  { ignores: ['dist/*', '*.cjs'] },
);
