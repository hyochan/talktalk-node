module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'plugin:flowtype/recommended',
  ],
  env: {
    'jest': true,
  },
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
  },
}
