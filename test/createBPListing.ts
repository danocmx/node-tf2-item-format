import { assert } from 'chai';
import { createBPListing } from '../dist/static.js';
import { readFixture } from './helpers.ts';

const cases = readFixture<any[]>('createBPListing.json');

describe('createBPListing data', () => {
	cases.forEach((testCase, index) => {
		it(`Case #${index + 1}`, () => {
			const listing = createBPListing(testCase.input, testCase.options);

			assert.deepEqual(listing, testCase.expected);
		});
	});
});
