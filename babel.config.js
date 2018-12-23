const debug = process.env.DEBUG === 'true';

const config = {
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current',
      },
      useBuiltIns: 'usage',
      shippedProposals: true,
    }],
  ],
  plugins: [
    '@babel/transform-flow-comments',
    ['@babel/proposal-class-properties', { 'loose': false }],
    '@babel/proposal-json-strings',
  ],
};

if (debug) {
  config.sourceMaps = 'inline';
}

module.exports = config;
