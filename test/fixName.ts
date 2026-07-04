import { assert } from 'chai';
import { fixName } from '../dist/static.js';
import { readFixture } from './helpers.ts';

const cases = readFixture<any[]>('fixName.json');

describe('fixName data', () => {
	cases.forEach((testCase, index) => {
		it(`Case #${index + 1}`, () => {
			assert.equal(fixName(testCase.input), testCase.expected);
		});
	});
});
