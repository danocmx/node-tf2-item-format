import { assert } from 'chai';
import { parseSKU, toSKU } from '../dist/static.js';
import { readFixture } from './helpers.ts';

const cases = readFixture<{
	toSKU: { input: any; expected: any }[];
	parseSKU: { input: any; expected: any }[];
}>('sku.json');

describe('sku data', () => {
	describe('toSKU', () => {
		cases.toSKU.forEach((testCase, index) => {
			it(`Case #${index + 1}`, () => {
				assert.equal(toSKU(testCase.input), testCase.expected);
			});
		});
	});

	describe('parseSKU', () => {
		cases.parseSKU.forEach((testCase, index) => {
			it(`Case #${index + 1}`, () => {
				assert.deepEqual(parseSKU(testCase.input), testCase.expected);
			});
		});
	});
});
