const fs = require('fs');
const path = require('path');
const { assert } = require('chai');

const { fixName } = require('../dist/static');

const cases = JSON.parse(
	fs.readFileSync(path.join(__dirname, './data/fixName.json'), 'utf8')
);

describe('fixName data', () => {
	cases.forEach((testCase, index) => {
		it(`Case #${index + 1}`, () => {
			assert.equal(fixName(testCase.input), testCase.expected);
		});
	});
});
