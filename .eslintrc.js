module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    'jest': true,
  },
  rules: {
    indent: ['error', 2],
    '@typescript-eslint/indent': ['error', 2],
    'semi': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
  },
}
