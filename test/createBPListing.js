const fs = require('fs');
const path = require('path');
const { assert } = require('chai');

const { createBPListing } = require('../dist/static');

const cases = JSON.parse(
	fs.readFileSync(path.join(__dirname, './data/createBPListing.json'), 'utf8')
);

describe('createBPListing data', () => {
	cases.forEach((testCase, index) => {
		it(`Case #${index + 1}`, () => {
			const listing = createBPListing(testCase.input, testCase.options);

			assert.deepEqual(listing, testCase.expected);
		});
	});
});
