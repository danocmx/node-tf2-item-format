const { assert } = require('chai');

const { parseString } = require('..');

describe('parseString', () => {
	it('Case #1', () => {
		const itemObject = parseString(
			'Cool Killstreak Aqua Marine Rocket Launcher (Battle Scarred)'
		);

		assert.deepEqual(itemObject, {
			name: 'Rocket Launcher',
			craftable: true,
			killstreak: 'Killstreak',
			wear: 'Battle Scarred',
			texture: 'Aqua Marine',
			effect: 'Cool',
			quality: 'Unusual',
		});
	});

	it('Case #2', () => {
		const itemObject = parseString(
			"Strange High Roller's Rocket Launcher (Factory New)"
		);

		assert.deepEqual(itemObject, {
			name: 'Rocket Launcher',
			craftable: true,
			wear: 'Factory New',
			texture: "High Roller's",
			quality: 'Strange',
		});
	});

	it('Case #3', () => {
		const itemObject = parseString(
			"Collector's Battalion's Backup Chemistry Set"
		);

		assert.deepEqual(itemObject, {
			name: 'Chemistry Set',
			craftable: true,
			output: "Battalion's Backup",
			outputQuality: "Collector's",
			quality: 'Unique',
		});
	});

	it('Case #4', () => {
		const itemObject = parseString(
			'Strange Festivized Professional Killstreak Australium Scattergun'
		);

		assert.deepEqual(itemObject, {
			name: 'Scattergun',
			craftable: true,
			australium: true,
			festivized: true,
			killstreak: 'Professional Killstreak',
			quality: 'Strange',
		});
	});

	it('Case #5', () => {
		const itemObject = parseString('Demonflame Modest Pile of Hat');

		assert.deepEqual(itemObject, {
			name: 'Modest Pile of Hat',
			craftable: true,
			effect: 'Demonflame',
			quality: 'Unusual',
		});
	});

	it('Case #6', () => {
		const itemObject = parseString('Strange Omniscient Orb Balloonihoodie');

		assert.deepEqual(itemObject, {
			name: 'Balloonihoodie',
			craftable: true,
			effect: 'Omniscient Orb',
			quality: 'Unusual',
			elevated: true,
		});
	});

	it('Case #7', () => {
		const itemObject = parseString(
			'Non-Craftable Specialized Killstreak Gunboats Kit Fabricator'
		);

		assert.deepEqual(itemObject, {
			name: 'Specialized Killstreak Kit Fabricator',
			craftable: false,
			killstreak: 'Specialized Killstreak',
			target: 'Gunboats',
			quality: 'Unique',
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
			quality: 'Unique',
		});
	});

	it('Case #9', () => {
		const itemObject = parseString('Strange Backwards Ballcap');

		assert.deepEqual(itemObject, {
			name: 'Backwards Ballcap',
			craftable: true,
			quality: 'Strange',
		});
	});

	it('Case #10', () => {
		const itemObject = parseString(
			'Professional Killstreak Iron Curtain Kit Fabricator'
		);

		assert.deepEqual(itemObject, {
			name: 'Professional Killstreak Kit Fabricator',
			craftable: true,
			killstreak: 'Professional Killstreak',
			target: 'Iron Curtain',
			quality: 'Unique',
		});
	});

	it('Case #11', () => {
		const itemObject = parseString(
			'Strange Professional Killstreak Festive Grenade Launcher'
		);

		assert.deepEqual(itemObject, {
			name: 'Festive Grenade Launcher',
			craftable: true,
			killstreak: 'Professional Killstreak',
			quality: 'Strange',
		});
	});

	it('Case #12', () => {
		const itemObject = parseString('Strange Unique Sniper Rifle');

		assert.deepEqual(itemObject, {
			name: 'Sniper Rifle',
			craftable: true,
			quality: 'Unique',
			elevated: true,
		});
	});

	it('Case #13', () => {
		const itemObject = parseString('Australium Gold');

		assert.deepEqual(itemObject, {
			name: 'Australium Gold',
			craftable: true,
			quality: 'Unique',
		});
	});

	it('Case #14', () => {
		const itemObject = parseString('Blue Moon Case #118');

		assert.deepEqual(itemObject, {
			name: 'Blue Moon Case',
			craftable: true,
			itemNumber: { type: 'crate', value: 118 },
			quality: 'Unique',
		});
	});

	it('Case #15', () => {
		const itemObject = parseString('Hat #25');

		assert.deepEqual(itemObject, {
			name: 'Hat',
			craftable: true,
			itemNumber: { type: 'craft', value: 25 },
			quality: 'Unique',
		});
	});

	it('Case #16', () => {
		const itemObject = parseString('The Tartan Shade');

		assert.deepEqual(itemObject, {
			name: 'Tartan Shade',
			craftable: true,
			quality: 'Unique',
			isUniqueHat: true,
		});
	});

	it('Case #17', () => {
		const itemObject = parseString('Strange Cool Breeze');

		assert.deepEqual(itemObject, {
			name: 'Cool Breeze',
			craftable: true,
			quality: 'Strange',
		});
	});

	it('Case #18', () => {
		const itemObject = parseString('Strange Hot Case');

		assert.deepEqual(itemObject, {
			name: 'Hot Case',
			craftable: true,
			quality: 'Strange',
		});
	});

	it('Case #18', () => {
		const itemObject = parseString('Strange Hot Heels');

		assert.deepEqual(itemObject, {
			name: 'Hot Heels',
			craftable: true,
			quality: 'Strange',
		});
	});

	it('Case #19', () => {
		const itemObject = parseString('Strange A Head Full of Hot Air');

		assert.deepEqual(itemObject, {
			name: 'A Head Full of Hot Air',
			craftable: true,
			quality: 'Strange',
		});
	});
});

describe('parseString inNumbers', () => {
	it('Case #1', () => {
		const itemObject = parseString(
			'Cool Killstreak Aqua Marine Rocket Launcher (Battle Scarred)',
			{ inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Rocket Launcher',
			craftable: true,
			killstreak: 1,
			wear: 5,
			texture: 57,
			effect: 703,
			quality: 5,
		});
	});

	it('Case #2', () => {
		const itemObject = parseString(
			"Strange High Roller's Rocket Launcher (Factory New)",
			{ inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Rocket Launcher',
			craftable: true,
			wear: 1,
			texture: 79,
			quality: 11,
		});
	});

	it('Case #3', () => {
		const itemObject = parseString(
			"Collector's Battalion's Backup Chemistry Set",
			{ inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Chemistry Set',
			craftable: true,
			output: "Battalion's Backup",
			outputQuality: 14,
			quality: 6,
		});
	});

	it('Case #4', () => {
		const itemObject = parseString(
			'Strange Festivized Professional Killstreak Australium Scattergun',
			{ inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Scattergun',
			craftable: true,
			australium: true,
			festivized: true,
			killstreak: 3,
			quality: 11,
		});
	});

	it('Case #5', () => {
		const itemObject = parseString('Demonflame Modest Pile of Hat', {
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Modest Pile of Hat',
			craftable: true,
			effect: 80,
			quality: 5,
		});
	});

	it('Case #6', () => {
		const itemObject = parseString(
			'Strange Omniscient Orb Balloonihoodie',
			{ inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Balloonihoodie',
			craftable: true,
			effect: 120,
			quality: 5,
			elevated: true,
		});
	});

	it('Case #7', () => {
		const itemObject = parseString(
			'Non-Craftable Specialized Killstreak Gunboats Kit Fabricator',
			{ inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Specialized Killstreak Kit Fabricator',
			craftable: false,
			killstreak: 2,
			target: 'Gunboats',
			quality: 6,
		});
	});

	it('Case #8', () => {
		const itemObject = parseString('Archimedes Strangifier Chemistry Set', {
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Strangifier Chemistry Set',
			craftable: true,
			target: 'Archimedes',
			output: 'Strangifier',
			outputQuality: 6,
			quality: 6,
		});
	});

	it('Case #9', () => {
		const itemObject = parseString('Strange Backwards Ballcap', {
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Backwards Ballcap',
			craftable: true,
			quality: 11,
		});
	});

	it('Case #10', () => {
		const itemObject = parseString(
			'Professional Killstreak Iron Curtain Kit Fabricator',
			{ inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Professional Killstreak Kit Fabricator',
			craftable: true,
			killstreak: 3,
			target: 'Iron Curtain',
			quality: 6,
		});
	});

	it('Case #11', () => {
		const itemObject = parseString(
			'Strange Professional Killstreak Festive Grenade Launcher',
			{ inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Festive Grenade Launcher',
			craftable: true,
			killstreak: 3,
			quality: 11,
		});
	});

	it('Case #12', () => {
		const itemObject = parseString('Strange Unique Sniper Rifle', {
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Sniper Rifle',
			craftable: true,
			quality: 6,
			elevated: true,
		});
	});

	it('Case #13', () => {
		const itemObject = parseString('Australium Gold', { inNumbers: true });

		assert.deepEqual(itemObject, {
			name: 'Australium Gold',
			craftable: true,
			quality: 6,
		});
	});

	it('Case #14', () => {
		const itemObject = parseString('Blue Moon Case #118', {
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Blue Moon Case',
			craftable: true,
			itemNumber: { type: 'crate', value: 118 },
			quality: 6,
		});
	});

	it('Case #15', () => {
		const itemObject = parseString('Hat #25', { inNumbers: true });

		assert.deepEqual(itemObject, {
			name: 'Hat',
			craftable: true,
			itemNumber: { type: 'craft', value: 25 },
			quality: 6,
		});
	});

	it('Case #16', () => {
		const itemObject = parseString('The Tartan Shade', { inNumbers: true });

		assert.deepEqual(itemObject, {
			name: 'Tartan Shade',
			craftable: true,
			quality: 6,
			isUniqueHat: true,
		});
	});

	it('Case #17', () => {
		const itemObject = parseString('Strange Cool Breeze', {
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Cool Breeze',
			craftable: true,
			quality: 11,
		});
	});

	it('Case #18', () => {
		const itemObject = parseString('Strange Hot Case', { inNumbers: true });

		assert.deepEqual(itemObject, {
			name: 'Hot Case',
			craftable: true,
			quality: 11,
		});
	});

	it('Case #18', () => {
		const itemObject = parseString('Strange Hot Heels', {
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Hot Heels',
			craftable: true,
			quality: 11,
		});
	});

	it('Case #19', () => {
		const itemObject = parseString('Strange A Head Full of Hot Air', {
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'A Head Full of Hot Air',
			craftable: true,
			quality: 11,
		});
	});
});

describe('parseString with defindexes', () => {
	it('Case #1', () => {
		const itemObject = parseString(
			'Cool Killstreak Aqua Marine Rocket Launcher (Battle Scarred)',
			{ useDefindexes: true, inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Rocket Launcher',
			craftable: true,
			killstreak: 1,
			wear: 5,
			texture: 57,
			effect: 703,
			quality: 5,
			defindex: 205,
		});
	});

	it('Case #2', () => {
		const itemObject = parseString(
			"Strange High Roller's Rocket Launcher (Factory New)",
			{ useDefindexes: true, inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Rocket Launcher',
			craftable: true,
			wear: 1,
			texture: 79,
			quality: 11,
			defindex: 205,
		});
	});

	it('Case #3', () => {
		const itemObject = parseString(
			"Collector's Battalion's Backup Chemistry Set",
			{ useDefindexes: true, inNumbers: true }
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

	it('Case #4', () => {
		const itemObject = parseString(
			'Strange Festivized Professional Killstreak Australium Scattergun',
			{ useDefindexes: true, inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Scattergun',
			craftable: true,
			australium: true,
			festivized: true,
			killstreak: 3,
			quality: 11,
			defindex: 200,
		});
	});

	it('Case #5', () => {
		const itemObject = parseString('Demonflame Modest Pile of Hat', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Modest Pile of Hat',
			craftable: true,
			effect: 80,
			quality: 5,
			defindex: 139,
		});
	});

	it('Case #6', () => {
		const itemObject = parseString(
			'Strange Omniscient Orb Balloonihoodie',
			{ useDefindexes: true, inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Balloonihoodie',
			craftable: true,
			effect: 120,
			quality: 5,
			elevated: true,
			defindex: 30928,
		});
	});

	it('Case #7', () => {
		const itemObject = parseString(
			'Non-Craftable Specialized Killstreak Gunboats Kit Fabricator',
			{ useDefindexes: true, inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Specialized Killstreak Kit Fabricator',
			defindex: 'HERE',
			craftable: false,
			killstreak: 2,
			target: 'Gunboats',
			quality: 6,
			targetDefindex: 133,
			defindex: 20002,
		});
	});

	it('Case #8', () => {
		const itemObject = parseString('Archimedes Strangifier Chemistry Set', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Strangifier Chemistry Set',
			craftable: true,
			target: 'Archimedes',
			output: 'Strangifier',
			outputQuality: 6,
			defindex: 'NEEDED HERE',
			quality: 6,
			targetDefindex: 828,
			outputDefindex: 5661,
			defindex: 20000,
		});
	});

	it('Case #9', () => {
		const itemObject = parseString('Strange Backwards Ballcap', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Backwards Ballcap',
			craftable: true,
			quality: 11,
			defindex: 617,
		});
	});

	it('Case #10', () => {
		const itemObject = parseString(
			'Professional Killstreak Iron Curtain Kit Fabricator',
			{ useDefindexes: true, inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Professional Killstreak Kit Fabricator',
			craftable: true,
			killstreak: 3,
			target: 'Iron Curtain',
			quality: 6,
			targetDefindex: 298,
			defindex: 20003,
		});
	});

	it('Case #11', () => {
		const itemObject = parseString(
			'Strange Professional Killstreak Festive Grenade Launcher',
			{ useDefindexes: true, inNumbers: true }
		);

		assert.deepEqual(itemObject, {
			name: 'Festive Grenade Launcher',
			craftable: true,
			killstreak: 3,
			quality: 11,
			defindex: 1007,
		});
	});

	it('Case #12', () => {
		const itemObject = parseString('Strange Unique Sniper Rifle', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Sniper Rifle',
			craftable: true,
			quality: 6,
			elevated: true,
			defindex: 201,
		});
	});

	it('Case #13', () => {
		const itemObject = parseString('Australium Gold', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Australium Gold',
			craftable: true,
			quality: 6,
			defindex: 5037,
		});
	});

	it('Case #14', () => {
		const itemObject = parseString('Blue Moon Case #118', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Blue Moon Case',
			craftable: true,
			itemNumber: { type: 'crate', value: 118 },
			quality: 6,
		});
	});

	it('Case #15', () => {
		const itemObject = parseString('The Tartan Shade', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Tartan Shade',
			craftable: true,
			quality: 6,
			isUniqueHat: true,
			defindex: 30064,
		});
	});

	it('Case #16', () => {
		const itemObject = parseString('Strange Cool Breeze', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Cool Breeze',
			craftable: true,
			quality: 11,
			defindex: 979,
		});
	});

	it('Case #17', () => {
		const itemObject = parseString('Strange Hot Case', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Hot Case',
			craftable: true,
			quality: 11,
			defindex: 30986,
		});
	});

	it('Case #18', () => {
		const itemObject = parseString('Strange Hot Heels', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Hot Heels',
			craftable: true,
			quality: 11,
			defindex: 30754,
		});
	});

	it('Case #19', () => {
		const itemObject = parseString('Strange A Head Full of Hot Air', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'A Head Full of Hot Air',
			craftable: true,
			quality: 11,
			defindex: 30662,
		});
	});

	it('Case #20', () => {
		const itemObject = parseString('Taunt: Kazotsky Kick Unusualifier', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Unusualifier',
			craftable: true,
			quality: 5,
			defindex: 9258,
			target: 'Taunt: Kazotsky Kick',
			targetDefindex: 1157,
		});
	});

	it('Case #21', () => {
		const itemObject = parseString('Ghostly Gibus Strangifier', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Strangifier',
			craftable: true,
			quality: 6,
			defindex: 5661,
			target: 'Ghostly Gibus',
			targetDefindex: 940,
		});
	});

	it('Case #22', () => {
		const itemObject = parseString('Strange Bacon Grease', {
			useDefindexes: true,
			inNumbers: true,
		});

		assert.deepEqual(itemObject, {
			name: 'Strange Bacon Grease',
			craftable: true,
			quality: 6,
			defindex: 5633,
		});
	});
});
