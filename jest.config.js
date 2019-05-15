module.exports = {
  verbose: true,
  preset: 'ts-jest',
  modulePaths: ['<rootDir>/src/'],
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
};
