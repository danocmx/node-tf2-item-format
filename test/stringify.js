const { assert } = require('chai');

const { stringify } = require('../dist/static');

describe('stringify', () => {
	it('Case #1', () => {
		const itemString = stringify({
			name: 'Rocket Launcher',
			craftable: true,
			killstreak: 'Killstreak',
			wear: 'Battle Scarred',
			texture: 'Aqua Marine',
			effect: 'Cool',
			quality: 'Unusual',
		});

		assert.equal(
			itemString,
			'Cool Killstreak Aqua Marine Rocket Launcher (Battle Scarred)'
		);
	});

	it('Case #2', () => {
		const itemString = stringify({
			name: 'Rocket Launcher',
			craftable: true,
			wear: 'Factory New',
			texture: "High Roller's",
			quality: 'Strange',
		});

		assert.equal(
			itemString,
			"Strange High Roller's Rocket Launcher (Factory New)"
		);
	});

	it('Case #3', () => {
		const itemString = stringify({
			name: 'Chemistry Set',
			craftable: true,
			output: "Battalion's Backup",
			outputQuality: "Collector's",
			quality: 'Unique',
		});

		assert.equal(
			itemString,
			"Collector's Battalion's Backup Chemistry Set"
		);
	});

	it('Case #4', () => {
		const itemString = stringify({
			name: 'Scattergun',
			craftable: true,
			australium: true,
			festivized: true,
			killstreak: 'Professional Killstreak',
			quality: 'Strange',
		});

		assert.equal(
			itemString,
			'Strange Festivized Professional Killstreak Australium Scattergun'
		);
	});

	it('Case #5', () => {
		const itemString = stringify({
			name: 'Modest Pile of Hat',
			craftable: true,
			effect: 'Demonflame',
			quality: 'Unusual',
		});

		assert.equal(itemString, 'Demonflame Modest Pile of Hat');
	});

	it('Case #6', () => {
		const itemString = stringify({
			name: 'Balloonihoodie',
			craftable: true,
			effect: 'Omniscient Orb',
			quality: 'Unusual',
			elevated: true,
		});

		assert.equal(itemString, 'Strange Omniscient Orb Balloonihoodie');
	});

	it('Case #7', () => {
		const itemString = stringify({
			name: 'Specialized Killstreak Kit Fabricator',
			craftable: false,
			killstreak: 'Specialized Killstreak',
			target: 'Gunboats',
			quality: 'Unique',
		});

		assert.equal(
			itemString,
			'Non-Craftable Specialized Killstreak Gunboats Kit Fabricator'
		);
	});

	it('Case #8', () => {
		const itemString = stringify({
			name: 'Chemistry Set',
			craftable: true,
			target: 'Archimedes',
			output: 'Strangifier',
			outputQuality: 'Unique',
			quality: 'Unique',
		});

		assert.equal(itemString, 'Archimedes Strangifier Chemistry Set');
	});

	it('Case #9', () => {
		const itemString = stringify({
			name: 'Backwards Ballcap',
			craftable: true,
			quality: 'Strange',
		});

		assert.equal(itemString, 'Strange Backwards Ballcap');
	});

	it('Case #10', () => {
		const itemString = stringify({
			name: 'Professional Killstreak Kit Fabricator',
			craftable: true,
			killstreak: 'Professional Killstreak',
			target: 'Iron Curtain',
			quality: 'Unique',
		});

		assert.equal(
			itemString,
			'Professional Killstreak Iron Curtain Kit Fabricator'
		);
	});

	it('Case #11', () => {
		const itemString = stringify({
			name: 'Festive Grenade Launcher',
			craftable: true,
			killstreak: 'Professional Killstreak',
			quality: 'Strange',
		});

		assert.equal(
			itemString,
			'Strange Professional Killstreak Festive Grenade Launcher'
		);
	});

	it('Case #12', () => {
		const itemString = stringify({
			name: 'Sniper Rifle',
			craftable: true,
			quality: 'Unique',
			elevated: true,
		});

		assert.equal(itemString, 'Strange Unique Sniper Rifle');
	});

	it('Case #13', () => {
		const itemString = stringify({
			name: 'Australium Gold',
			craftable: true,
			quality: 'Unique',
		});

		assert.equal(itemString, 'Australium Gold');
	});

	it('Case #14', () => {
		const itemString = stringify({
			name: 'Blue Moon Case',
			craftable: true,
			itemNumber: { type: 'case', value: '118' },
			quality: 'Unique',
		});

		assert.equal(itemString, 'Blue Moon Case #118');
	});

	it('Case #15', () => {
		const itemString = stringify({
			name: 'Hat',
			craftable: true,
			itemNumber: { type: 'craft', value: '25' },
			quality: 'Unique',
		});

		assert.equal(itemString, 'Hat #25');
	});

	it('Case #16', () => {
		const itemString = stringify({
			name: 'Tartan Shade',
			craftable: true,
			quality: 'Unique',
			isUniqueHat: true,
		});

		assert.deepEqual(itemString, 'The Tartan Shade');
	});

	it('Case #17', () => {
		const itemString = stringify({
			name: 'Unusualifier',
			craftable: true,
			quality: 'Unusual',
			target: 'Taunt: Kazotsky Kick',
		});

		assert.deepEqual(
			itemString,
			'Unusual Taunt: Kazotsky Kick Unusualifier'
		);
	});
});

describe('stringify from defindexes and numbers.', () => {
	it('Case #1', () => {
		const itemString = stringify({
			defindex: 20003,
			quality: 6,
			craftable: true,
			killstreak: 3,
			targetDefindex: 1151,
		});

		assert.equal(
			itemString,
			'Professional Killstreak Iron Bomber Kit Fabricator'
		);
	});

	it('Case #2', () => {
		const itemString = stringify({
			name: 'Rocket Launcher',
			craftable: true,
			killstreak: 1,
			wear: 5,
			texture: 57,
			effect: 703,
			quality: 5,
			defindex: 205,
		});

		assert.equal(
			itemString,
			'Cool Killstreak Aqua Marine Rocket Launcher (Battle Scarred)'
		);
	});

	it('Case #3', () => {
		const itemString = stringify({
			name: 'Rocket Launcher',
			craftable: true,
			wear: 1,
			texture: 79,
			quality: 11,
			defindex: 205,
		});

		assert.equal(
			itemString,
			"Strange High Roller's Rocket Launcher (Factory New)"
		);
	});

	it('Case #4', () => {
		const itemString = stringify({
			name: 'Chemistry Set',
			craftable: true,
			output: "Battalion's Backup",
			outputQuality: 14,
			quality: 6,
			outputDefindex: 226,
			defindex: 20000,
		});

		assert.equal(
			itemString,
			"Collector's Battalion's Backup Chemistry Set"
		);
	});

	it('Case #5', () => {
		const itemString = stringify({
			name: 'Scattergun',
			craftable: true,
			australium: true,
			festivized: true,
			killstreak: 3,
			quality: 11,
			defindex: 200,
		});

		assert.equal(
			itemString,
			'Strange Festivized Professional Killstreak Australium Scattergun'
		);
	});

	it('Case #6', () => {
		const itemString = stringify({
			name: 'Modest Pile of Hat',
			craftable: true,
			effect: 80,
			quality: 5,
			defindex: 139,
		});

		assert.equal(itemString, 'Demonflame Modest Pile of Hat');
	});

	it('Case #7', () => {
		const itemString = stringify({
			name: 'Balloonihoodie',
			craftable: true,
			effect: 120,
			quality: 5,
			elevated: true,
			defindex: 30928,
		});

		assert.equal(itemString, 'Strange Omniscient Orb Balloonihoodie');
	});

	it('Case #8', () => {
		const itemString = stringify({
			name: 'Specialized Killstreak Kit Fabricator',
			defindex: 'HERE',
			craftable: false,
			killstreak: 2,
			target: 'Gunboats',
			quality: 6,
			targetDefindex: 133,
			defindex: 20002,
		});

		assert.equal(
			itemString,
			'Non-Craftable Specialized Killstreak Gunboats Kit Fabricator'
		);
	});

	it('Case #9', () => {
		const itemString = stringify({
			name: 'Chemistry Set',
			craftable: true,
			target: 'Archimedes',
			output: 'Strangifier',
			outputQuality: 6,
			defindex: 'NOT NEEDED HERE',
			quality: 6,
			targetDefindex: 828,
			outputDefindex: 5661,
			defindex: 20000,
		});

		assert.equal(itemString, 'Archimedes Strangifier Chemistry Set');
	});

	it('Case #10', () => {
		const itemString = stringify({
			name: 'Backwards Ballcap',
			craftable: true,
			quality: 11,
			defindex: 617,
		});

		assert.equal(itemString, 'Strange Backwards Ballcap');
	});

	it('Case #11', () => {
		const itemString = stringify({
			name: 'Professional Killstreak Kit Fabricator',
			craftable: true,
			killstreak: 3,
			target: 'Iron Curtain',
			quality: 6,
			targetDefindex: 298,
			defindex: 20003,
		});

		assert.equal(
			itemString,
			'Professional Killstreak Iron Curtain Kit Fabricator'
		);
	});

	it('Case #12', () => {
		const itemString = stringify({
			name: 'Festive Grenade Launcher',
			craftable: true,
			killstreak: 3,
			quality: 11,
			defindex: 1007,
		});

		assert.equal(
			itemString,
			'Strange Professional Killstreak Festive Grenade Launcher'
		);
	});

	it('Case #13', () => {
		const itemString = stringify({
			name: 'Sniper Rifle',
			craftable: true,
			quality: 6,
			elevated: true,
			defindex: 201,
		});

		assert.equal(itemString, 'Strange Unique Sniper Rifle');
	});

	it('Case #14', () => {
		const itemString = stringify({
			name: 'Australium Gold',
			craftable: true,
			quality: 6,
			defindex: 5037,
		});

		assert.equal(itemString, 'Australium Gold');
	});

	it('Case #15', () => {
		const itemString = stringify({
			name: 'Blue Moon Case',
			craftable: true,
			itemNumber: { type: 'crate', value: 118 },
			quality: 6,
		});

		assert.equal(itemString, 'Blue Moon Case #118');
	});

	it('Case #16', () => {
		const itemString = stringify({
			name: 'Tartan Shade',
			craftable: true,
			quality: 6,
			isUniqueHat: true,
			defindex: 30064,
		});

		assert.equal(itemString, 'The Tartan Shade');
	});

	it('Case #17', () => {
		const itemString = stringify({
			name: 'Hot Case',
			craftable: true,
			quality: 11,
			defindex: 30986,
		});

		assert.equal(itemString, 'Strange Hot Case');
	});

	it('Case #18', () => {
		const itemString = stringify({
			name: 'Hot Heels',
			craftable: true,
			quality: 11,
			defindex: 30754,
		});

		assert.equal(itemString, 'Strange Hot Heels');
	});

	it('Case #19', () => {
		const itemString = stringify({
			name: 'A Head Full of Hot Air',
			craftable: true,
			quality: 11,
			defindex: 30662,
		});

		assert.equal(itemString, 'Strange A Head Full of Hot Air');
	});

	it('Case #20', () => {
		const itemString = stringify({
			name: 'Unusualifier',
			craftable: true,
			quality: 5,
			defindex: 9258,
			target: 'Taunt: Kazotsky Kick',
			targetDefindex: 1157,
		});

		assert.equal(itemString, 'Unusual Taunt: Kazotsky Kick Unusualifier');
	});

	it('Case #21', () => {
		const itemString = stringify({
			name: 'Strangifier',
			craftable: true,
			quality: 6,
			defindex: 5661,
			target: 'Ghostly Gibus',
			targetDefindex: 940,
		});

		assert.equal(itemString, 'Ghostly Gibus Strangifier');
	});

	it('Case #22', () => {
		const itemString = stringify({
			name: 'Strange Bacon Grease',
			craftable: true,
			quality: 6,
			defindex: 5633,
		});

		assert.equal(itemString, 'Strange Bacon Grease');
	});

	it('Case #23', () => {
		const itemString = stringify({
			defindex: 30300,
			quality: 13,
			craftable: true,
		});

		assert.equal(itemString, 'Haunted Haunted Hat');
	});

	it('Case #24 - fixed names', () => {
		const itemString = stringify({
			defindex: 5791,
			quality: 6,
			craftable: false,
		});

		assert.equal(itemString, 'Non-Craftable Naughty Winter Crate Key 2014');
	});

	it('Case #25 - unique hat only defindex', () => {
		const itemString = stringify(
			{ defindex: 876, quality: 6, craftable: true },
			{ determineUniqueHat: true }
		);

		assert.equal(itemString, 'The K-9 Mane');
	});

	it('Case #26 - unique hat only defindex off', () => {
		const itemString = stringify(
			{ defindex: 876, quality: 6, craftable: true },
			{ determineUniqueHat: false }
		);

		assert.equal(itemString, 'K-9 Mane');
	});

	it('Case #26 - unique hat only defindex with other attributes', () => {
		const itemString = stringify(
			{ defindex: 876, quality: 6, craftable: false },
			{ determineUniqueHat: true }
		);

		assert.equal(itemString, 'Non-Craftable K-9 Mane');
	});

	it('Case #26 - unique hat with bad name', () => {
		const itemString = stringify(
			{ name: 'K-9 Mane', quality: 6, craftable: true },
			{ determineUniqueHat: true }
		);

		assert.equal(itemString, 'The K-9 Mane');
	});

	it('Case #27 - strange unique with determineUniqueHat', () => {
		const itemString = stringify(
			{ name: 'K-9 Mane', quality: 6, craftable: true, elevated: true },
			{ determineUniqueHat: true }
		);

		assert.equal(itemString, 'Strange Unique K-9 Mane');
	});

	it('Case #27 - craft number with determineUniqueHat', () => {
		const itemString = stringify(
			{
				name: "Surgeon's Stahlhelm",
				quality: 6,
				craftable: true,
				itemNumber: { type: 'craft', value: 1 },
			},
			{ determineUniqueHat: true }
		);

		assert.equal(itemString, "The Surgeon's Stahlhelm #1");
	});

	it('Case #28 - case with determineUniqueHat', () => {
		const itemString = stringify(
			{
				name: 'Gargoyle Case',
				quality: 6,
				craftable: true,
				itemNumber: { type: 'crate', value: 98 },
			},
			{ determineUniqueHat: true }
		);

		assert.equal(itemString, 'Gargoyle Case #98');
	});

	it('Case #29 - The Bitter Taste of Defeat and Lime with determineUniqueHat', () => {
		const itemString = stringify(
			{
				name: 'The Bitter Taste of Defeat and Lime',
				quality: 6,
				craftable: true,
			},
			{ determineUniqueHat: true }
		);

		assert.equal(itemString, 'The Bitter Taste of Defeat and Lime');
	});

	it('Case #30 - Normal quality item', () => {
		const itemString = stringify({
			defindex: 211,
			quality: 0,
			craftable: true,
			elevated: true,
		});

		assert.equal(itemString, 'Strange Normal Medi Gun');
	});

	it('Case #31 - Normal quality item #2', () => {
		const itemString = stringify({
			name: 'Medi Gun',
			quality: 'Normal',
			craftable: true,
			elevated: true,
		});

		assert.equal(itemString, 'Strange Normal Medi Gun');
	});

	it('Case #32 - Red Rock Roscoe texture', () => {
		const itemString = stringify({
			name: 'Pistol',
			quality: 'Decorated Weapon',
			craftable: true,
			wear: 'Field-Tested',
			festivized: true,
			killstreak: 'Specialized Killstreak',
			texture: 0,
		});

		assert.equal(
			itemString,
			'Festivized Specialized Killstreak Red Rock Roscoe Pistol (Field-Tested)'
		);
	});

	it('Case #33 - Bat', () => {
		const itemString = stringify({
			defindex: 0,
			quality: 'Unique',
			craftable: true,
		});

		assert.equal(itemString, 'Bat');
	});

	it('Case #34 - Bat output', () => {
		const itemString = stringify({
			name: 'Chemistry Set',
			craftable: true,
			outputDefindex: 0,
			outputQuality: "Collector's",
			quality: 'Unique',
		});

		assert.equal(itemString, "Collector's Bat Chemistry Set");
	});

	it('Case #34 - Bat target', () => {
		const itemString = stringify({
			name: 'Specialized Killstreak Kit Fabricator',
			craftable: false,
			killstreak: 'Specialized Killstreak',
			targetDefindex: 0,
			quality: 'Unique',
		});

		assert.equal(
			itemString,
			'Non-Craftable Specialized Killstreak Bat Kit Fabricator'
		);
	});

	it('Case #35 - Unusual Haunted Metal Scrap', () => {
		const itemString = stringify({
			name: 'Haunted Metal Scrap',
			craftable: true,
			quality: 'Unusual',
			effect: 0,
		});

		assert.equal(itemString, 'Unusual Haunted Metal Scrap');
	});

	it('Case #46 - Haunted Kraken Rotation Sensation', () => {
		const itemString = stringify({
			name: 'Rotation Sensation',
			craftable: true,
			quality: 5,
			effect: 257,
		});

		assert.deepEqual(itemString, 'Haunted Kraken Rotation Sensation');
	});

	it('Case #47 - Haunted Kraken Rotation Sensation', () => {
		const itemString = stringify({
			name: "'Contract Campaigner' War Paint Freelance Grade Keyless Case",
			craftable: true,
			quality: 6,
			defindex: 18004,
			itemNumber: { type: 'crate', value: 115 },
		});

		assert.deepEqual(
			itemString,
			"'Contract Campaigner' War Paint Freelance Grade Keyless Case #115"
		);
	});
});

describe('stringify SKU', () => {
	it('Case #1', () => {
		const itemString = stringify('5050;6');

		assert.equal(itemString, 'Backpack Expander');
	});

	it('Case #2', () => {
		const itemString = stringify('1071;11;kt-3');

		assert.equal(
			itemString,
			'Strange Professional Killstreak Golden Frying Pan'
		);
	});
});
