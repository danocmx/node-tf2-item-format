const fs = require('fs');
const path = require('path');
const { assert } = require('chai');

const { Schema, parseString } = require('../dist/static');
const { createFormat } = require('../dist');

const cases = JSON.parse(
	fs.readFileSync(path.join(__dirname, './data/parseString.json'), 'utf8')
);

describe('parseString data', () => {
	describe('Normal cases', () => {
		cases.forEach((testCase, index) => {
			it(`Case #${index + 1}`, () => {
				const item = parseString(
					testCase.input.name,
					testCase.input.inNumbers,
					testCase.input.useDefindexes
				);

				assert.deepEqual(item, testCase.expected);
			});
		});
	});

	describe('Special cases', () => {
		it('Special Case #1 - Bat', () => {
			class BatSchema extends Schema {
				getDefindex() {
					return 0;
				}
			}

			const format = createFormat(new BatSchema());

			const itemObject = format.parseString('Bat', true, true);
			assert.deepEqual(itemObject, {
				name: 'Bat',
				quality: 6,
				defindex: 0,
				craftable: true,
			});
		});

		it('Special Case #2 - Bat output', () => {
			class MockSchema extends Schema {
				getDefindex(input) {
					if (input === 'Bat') {
						return 0;
					}

					return super.getDefindex(input);
				}
			}

			const format = createFormat(new MockSchema());

			const itemObject = format.parseString(
				"Collector's Bat Chemistry Set",
				true,
				true
			);
			assert.deepEqual(itemObject, {
				name: 'Chemistry Set',
				quality: 6,
				defindex: 20005,
				craftable: true,
				output: 'Bat',
				outputDefindex: 0,
				outputQuality: 14,
			});
		});

		it('Special Case #3 - Bat target', () => {
			class MockSchema extends Schema {
				getDefindex(input) {
					if (input === 'Bat') {
						return 0;
					}

					return super.getDefindex(input);
				}
			}

			const format = createFormat(new MockSchema());

			const itemObject = format.parseString(
				'Non-Craftable Specialized Killstreak Bat Kit Fabricator',
				true,
				true
			);
			assert.deepEqual(itemObject, {
				name: 'Specialized Killstreak Kit Fabricator',
				quality: 6,
				defindex: 20002,
				craftable: false,
				killstreak: 2,
				target: 'Bat',
				targetDefindex: 0,
			});
		});

		it('Special Case #2 - Red Rock Roscoe Texture', () => {
			class TextureSchema extends Schema {
				getTextureEnum() {
					this.loadTextures();

					return 0;
				}
			}

			const format = createFormat(new TextureSchema());

			const itemObject = format.parseString(
				'Festivized Specialized Killstreak Red Rock Roscoe Pistol (Field-Tested)',
				true,
				false
			);
			assert.deepEqual(itemObject, {
				name: 'Pistol',
				quality: 15,
				wear: 3,
				festivized: true,
				killstreak: 2,
				texture: 0,
				craftable: true,
			});
		});
	});
});

	/*
	it('Case #3', () => {
		const itemObject = parseString(
			"Collector's Battalion's Backup Chemistry Set",
			true, true
		);

		assert.deepEqual(itemObject, {
			name: 'Chemistry Set',
			craftable: true,
			output: "Battalion's Backup",
			outputQuality: 14,
			quality: 6,
			outputDefindex: 226,
			defindex: 20000,
		});
	});
	*/
	