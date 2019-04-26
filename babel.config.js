const debug = process.env.DEBUG === 'true';

const config = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
      useBuiltIns: 'usage',
      shippedProposals: true,
      loose: true,
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

if (debug) {
  config.sourceMaps = 'inline';
}

module.exports = config;
