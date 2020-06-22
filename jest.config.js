module.exports = {
    rootDir: '.',
    modulePaths: ['<rootDir>'],
    moduleNameMapper: {'~(.*)$': '<rootDir>/$1'},
    testEnvironment: 'node',
    moduleFileExtensions: ['js'],
    testMatch: ['**/__tests__/**/*.spec.js'],
    coverageDirectory: './coverage'
};