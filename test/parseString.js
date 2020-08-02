const { assert } = require('chai');

const { parseString } = require('..');

describe('parseString', () => {
	it('Case #1', () => {
		const itemObject = parseString('Cool Killstreak Aqua Marine Rocket Launcher (Battle Scarred)');

		assert.deepEqual(itemObject, {
			name: 'Rocket Launcher',
			craftable: true,
			killstreak: 'Killstreak',
			wear: 'Battle Scarred',
			texture: 'Aqua Marine',
			effect: 'Cool',
			quality: 'Unusual'
		});
	});

	it('Case #2', () => {
		const itemObject = parseString('Strange High Roller\'s Rocket Launcher (Factory New)');

		assert.deepEqual(itemObject, {
			name: 'Rocket Launcher',
			craftable: true,
			wear: 'Factory New',
			texture: 'High Roller\'s',
			quality: 'Strange'
		});
	});

	it('Case #3', () => {
		const itemObject = parseString('Collector\'s Battalion\'s Backup Chemistry Set');

		assert.deepEqual(itemObject, {
			name: 'Chemistry Set',
			craftable: true,
			output: 'Battalion\'s Backup',
			outputQuality: 'Collector\'s',
			quality: 'Unique'
		});
	});

	it('Case #4', () => {
		const itemObject = parseString('Strange Festivized Professional Killstreak Australium Scattergun');

		assert.deepEqual(itemObject, {
			name: 'Scattergun',
			craftable: true,
			australium: true,
			festivized: true,
			killstreak: 'Professional Killstreak',
			quality: 'Strange'
		});
	});

	it('Case #5', () => {
		const itemObject = parseString('Demonflame Modest Pile of Hat');

		assert.deepEqual(itemObject, {
			name: 'Modest Pile of Hat',
			craftable: true,
			effect: 'Demonflame',
			quality: 'Unusual'
		});
	});

	it('Case #6', () => {
		const itemObject = parseString('Strange Omniscient Orb Balloonihoodie');

		assert.deepEqual(itemObject, {
			name: 'Balloonihoodie',
			craftable: true,
			effect: 'Omniscient Orb',
			quality: 'Unusual',
			elevated: true
		});
	});

	it('Case #7', () => {
		const itemObject = parseString('Non-Craftable Specialized Killstreak Gunboats Kit Fabricator');

		assert.deepEqual(itemObject, {
			name: 'Specialized Killstreak Kit Fabricator',
			craftable: false,
			killstreak: 'Specialized Killstreak',
			target: 'Gunboats',
			quality: 'Unique'
		});
	});

	it('Case #8', () => {
		const itemObject = parseString('Archimedes Strangifier Chemistry Set');

		assert.deepEqual(itemObject, {
			name: 'Strangifier Chemistry Set',
			craftable: true,
			target: 'Archimedes',
			output: 'Strangifier',
			outputQuality: 'Unique',
			quality: 'Unique'
		});
	});

	it('Case #9', () => {
		const itemObject = parseString('Strange Backwards Ballcap');

		assert.deepEqual(itemObject, {
			name: 'Backwards Ballcap',
			craftable: true,
			quality: 'Strange'
		});
	});

	it('Case #10', () => {
		const itemObject = parseString('Professional Killstreak Iron Curtain Kit Fabricator');

		assert.deepEqual(itemObject, {
			name: 'Professional Killstreak Kit Fabricator',
			craftable: true,
			killstreak: 'Professional Killstreak',
			target: 'Iron Curtain',
			quality: 'Unique'
		});
	});

	it('Case #11', () => {
		const itemObject = parseString('Strange Professional Killstreak Festive Grenade Launcher');

		assert.deepEqual(itemObject, {
			name: 'Festive Grenade Launcher',
			craftable: true,
			killstreak: 'Professional Killstreak',
			quality: 'Strange'
		});
	});

	it('Case #12', () => {
		const itemObject = parseString('Strange Unique Sniper Rifle');

		assert.deepEqual(itemObject, {
			name: 'Sniper Rifle',
			craftable: true,
			quality: 'Unique',
			elevated: true
		});
	});

	it('Case #13', () => {
		const itemObject = parseString('Australium Gold');

		assert.deepEqual(itemObject, { name: 'Australium Gold', craftable: true, quality: 'Unique' });
	});

	it('Case #14', () => {
		const itemObject = parseString('Blue Moon Case #118');

		assert.deepEqual(itemObject, {
			name: 'Blue Moon Case',
			craftable: true,
			itemNumber: { type: 'case', value: '118' },
			quality: 'Unique'
		});
	});

	it('Case #15', () => {
		const itemObject = parseString('Hat #25');

		assert.deepEqual(itemObject, {
			name: 'Hat',
			craftable: true,
			itemNumber: { type: 'craft', value: '25' },
			quality: 'Unique'
		});
	});

	it('Case #16', () => {
		const itemObject = parseString('The Tartan Shade');

		assert.deepEqual(itemObject, { name: 'Tartan Shade', craftable: true, quality: 'Unique', isUniqueHat: true });
	})

	it('Case #17', () => {
		const itemObject = parseString('Strange Cool Breeze');

		assert.deepEqual(itemObject, { name: 'Cool Breeze', craftable: true, quality: 'Strange'});
	})
})