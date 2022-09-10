module.exports = {
  root: true,
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'next',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-empty-interface': false,
  },
  overrides: [
    {
      files: ['**/*.(d.)?ts(x)?'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
