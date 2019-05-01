module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
      useBuiltIns: 'usage',
      shippedProposals: true,
      loose: true,
      corejs: 3,
    }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', {
      'loose': true,
    }],
    ['babel-plugin-module-resolver', {
      root: ['./src'],
    }],
    'babel-plugin-macros',
  ],
};
