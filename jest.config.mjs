import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});
/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '__reports__',
        filename: 'jest.html',
      },
    ],
  ],
  moduleNameMapper: {
    '^.+\\.(svg)$': '<rootDir>/mocks/svgr-mock.jsx',
  },
};

export default createJestConfig(customJestConfig);
