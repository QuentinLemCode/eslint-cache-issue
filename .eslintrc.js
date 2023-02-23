module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  env: {
    node: true
  },
  overrides: [
    {
      parserOptions: {
        project: 'tsconfig.json',
      },
      files: ['src/*.ts'],
      rules: {
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ]

};