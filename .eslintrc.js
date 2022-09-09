module.exports = {
  root: true,
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
