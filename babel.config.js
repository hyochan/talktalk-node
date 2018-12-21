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
    'import-graphql',
  ],
};

if (debug) {
  config.sourceMaps = 'inline';
}

module.exports = config;
