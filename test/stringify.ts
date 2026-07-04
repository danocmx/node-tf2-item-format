import { assert } from 'chai';
import { stringify } from '../dist/static.js';
import { readFixture } from './helpers.ts';

const cases = readFixture<any[]>('stringify.json');

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
