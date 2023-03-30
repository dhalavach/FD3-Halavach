export default {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/tests/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};
