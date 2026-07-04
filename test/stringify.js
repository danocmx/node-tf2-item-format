const fs = require('fs');
const path = require('path');
const { assert } = require('chai');

const { stringify } = require('../dist/static');

const cases = JSON.parse(
	fs.readFileSync(path.join(__dirname, './data/stringify.json'), 'utf8')
);

describe('stringify data', () => {
	cases.forEach((testCase, index) => {
		it(`Case #${index + 1}`, () => {
			assert.equal(
				stringify(testCase.input.item, testCase.input.options),
				testCase.expected
			);
		});
	});
});
