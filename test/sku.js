const fs = require('fs');
const path = require('path');
const { assert } = require('chai');

const { parseSKU, toSKU } = require('../dist/static');

const cases = JSON.parse(
	fs.readFileSync(path.join(__dirname, './data/sku.json'), 'utf8')
);

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
