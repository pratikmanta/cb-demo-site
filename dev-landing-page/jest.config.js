module.exports = {
	verbose: true,
	rootDir: '.',
	displayName: {
		name: 'enzyme-setup',
		color: 'blue'
	},
	runner: 'jest-runner',
	transformIgnorePatterns: [],
	transform: {},
	errorOnDeprecated: true,
	roots: ['./tests'],
	moduleFileExtensions: ['js', 'jsx'],
	setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js']
};
