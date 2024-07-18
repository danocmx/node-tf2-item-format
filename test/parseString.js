const { assert } = require('chai');

const { parseString, Schema } = require('../dist/static');
const { createFormat } = require('../dist');

describe('parseString', () => {
	it('Case #1', () => {
		const itemObject = parseString(
			'Cool Killstreak Aqua Marine Rocket Launcher (Battle Scarred)',
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
			'Strange High Roller\'s Rocket Launcher (Factory New)',
		);

		assert.deepEqual(itemObject, {
			name: 'Rocket Launcher',
			craftable: true,
			wear: 'Factory New',
			texture: 'High Roller\'s',
			quality: 'Strange',
		});
	});

	it('Case #3', () => {
		const itemObject = parseString(
			'Collector\'s Battalion\'s Backup Chemistry Set',
		);

		assert.deepEqual(itemObject, {
			name: 'Chemistry Set',
			craftable: true,
			output: 'Battalion\'s Backup',
			outputQuality: 'Collector\'s',
			quality: 'Unique',
		});
	});

	it('Case #4', () => {
		const itemObject = parseString(
			'Strange Festivized Professional Killstreak Australium Scattergun',
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
			'Non-Craftable Specialized Killstreak Gunboats Kit Fabricator',
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
			name: 'Chemistry Set',
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
			'Professional Killstreak Iron Curtain Kit Fabricator',
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
			'Strange Professional Killstreak Festive Grenade Launcher',
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

	it('Case #20', () => {
		const itemObject = parseString('Strange Vintage Tyrolean');

		assert.deepEqual(itemObject, {
			name: 'Vintage Tyrolean',
			quality: 'Strange',
			craftable: true,
		});
	});

	it('Case #21', () => {
		const itemObject = parseString('Strange Vintage Vintage Tyrolean');

		assert.deepEqual(itemObject, {
			name: 'Vintage Tyrolean',
			quality: 'Vintage',
			elevated: true,
			craftable: true,
		});
	});

	it('Case #22', () => {
		const itemObject = parseString('Vintage Tyrolean');

		assert.deepEqual(itemObject, {
			name: 'Vintage Tyrolean',
			quality: 'Unique',
			craftable: true,
		});
	});

	it('Case #23', () => {
		const itemObject = parseString('Vintage Vintage Tyrolean');

		assert.deepEqual(itemObject, {
			name: 'Vintage Tyrolean',
			quality: 'Vintage',
			craftable: true,
		});
	});

	it('Case #24', () => {
		const itemObject = parseString('Strange Haunted Hat');

		assert.deepEqual(itemObject, {
			name: 'Haunted Hat',
			quality: 'Strange',
			craftable: true,
		});
	});

	it('Case #25', () => {
		const itemObject = parseString('Strange Haunted Haunted Hat');

		assert.deepEqual(itemObject, {
			name: 'Haunted Hat',
			quality: 'Haunted',
			elevated: true,
			craftable: true,
		});
	});

	it('Case #26', () => {
		const itemObject = parseString('Haunted Hat');

		assert.deepEqual(itemObject, {
			name: 'Haunted Hat',
			quality: 'Unique',
			craftable: true,
		});
	});

	it('Case #27', () => {
		const itemObject = parseString('Haunted Haunted Hat');

		assert.deepEqual(itemObject, {
			name: 'Haunted Hat',
			quality: 'Haunted',
			craftable: true,
		});
	});

	it('Case #28', () => {
		const itemObject = parseString(
			'Eerie Orbiting Fire Condor Cap',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Condor Cap',
			quality: 'Unusual',
			effect: 'Eerie Orbiting Fire',
			craftable: true,
		});
	});

	it('Case #29', () => {
		const itemObject = parseString(
			'Haunted Ghosts War Paint (Battle Scarred)',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'War Paint',
			quality: 'Decorated Weapon',
			texture: 'Haunted Ghosts',
			craftable: true,
			wear: 'Battle Scarred',
		});
	});

	it('Case #30', () => {
		const itemObject = parseString(
			'Spellbound Aspect Taunt: Most Wanted',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Taunt: Most Wanted',
			quality: 'Unusual',
			effect: 'Spellbound Aspect',
			craftable: true,
		});
	});

	it('Case #31', () => {
		const itemObject = parseString(
			'Haunted Phantasm Jr Bonk Boy',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Bonk Boy',
			quality: 'Unusual',
			effect: 'Haunted Phantasm Jr',
			craftable: true,
		});
	});

	it('Case #32', () => {
		const itemObject = parseString(
			'Ghastly Ghosts Jr Bonk Boy',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Bonk Boy',
			quality: 'Unusual',
			effect: 'Ghastly Ghosts Jr',
			craftable: true,
		});
	});

	it('Case #33', () => {
		const itemObject = parseString(
			'Haunted Ghosts Battle Boonie',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Battle Boonie',
			quality: 'Unusual',
			effect: 'Haunted Ghosts',
			craftable: true,
		});
	});

	it('Case #34', () => {
		const itemObject = parseString('Smoking Jacket', false, false);

		assert.deepEqual(itemObject, {
			name: 'Smoking Jacket',
			craftable: true,
			quality: 'Unique',
		});
	});

	it('Case #35', () => {
		const itemObject = parseString(
			'Smoking Smoking Skid Lid',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Smoking Skid Lid',
			craftable: true,
			quality: 'Unusual',
			effect: 'Smoking',
		});
	});

	it('Case #36', () => {
		const itemObject = parseString(
			'Purple Energy Smoking Skid Lid',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Smoking Skid Lid',
			craftable: true,
			quality: 'Unusual',
			effect: 'Purple Energy',
		});
	});

	it('Case #37', () => {
		const itemObject = parseString('Smoking Skid Lid', false, false);

		assert.deepEqual(itemObject, {
			name: 'Smoking Skid Lid',
			craftable: true,
			quality: 'Unique',
		});
	});

	it('Case #38', () => {
		const itemObject = parseString(
			'Strange Cosmetic Part: Kills',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Strange Cosmetic Part: Kills',
			craftable: true,
			quality: 'Unique',
		});
	});

	it('Case #39', () => {
		const itemObject = parseString('The Value of Teamwork', false, false);

		assert.deepEqual(itemObject, {
			name: 'The Value of Teamwork',
			craftable: true,
			quality: 'Unique',
		});
	});

	it('Case #40', () => {
		const itemObject = parseString(
			'The Essential Accessories',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'The Essential Accessories',
			craftable: true,
			quality: 'Unique',
		});
	});

	it('Case #41', () => {
		const itemObject = parseString('Genuine Atomic Accolade', false, false);

		assert.deepEqual(itemObject, {
			name: 'Atomic Accolade',
			craftable: true,
			quality: 'Genuine',
		});
	});

	it('Case #42', () => {
		const itemObject = parseString('Bonk! Atomic Punch', false, false);

		assert.deepEqual(itemObject, {
			name: 'Bonk! Atomic Punch',
			craftable: true,
			quality: 'Unique',
		});
	});

	it('Case #43 - Item with native `The` with craft number', () => {
		const itemObject = parseString(
			'The Concealed Killer Weapons Case #93',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'The Concealed Killer Weapons Case',
			craftable: true,
			quality: 'Unique',
			itemNumber: { type: 'crate', value: 93 },
		});
	});

	it('Case #44 - Old retired keys', () => {
		const itemObject = parseString(
			'Non-Craftable Naughty Winter Crate Key 2014',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Naughty Winter Crate Key 2014',
			craftable: false,
			quality: 'Unique',
		});
	});

	it('Case #45 - Munition case', () => {
		const itemObject = parseString(
			'Mann Co. Supply Munition #83',
			false,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Mann Co. Supply Munition',
			craftable: true,
			quality: 'Unique',
			itemNumber: { value: 83, type: 'crate' },
		});
	});

	it('Case #46 - Taunt: The Hot Wheeler', () => {
		const itemObject = parseString('Taunt: The Hot Wheeler', false, false);

		assert.deepEqual(itemObject, {
			name: 'Taunt: The Hot Wheeler',
			craftable: true,
			quality: 'Unique',
		});
	});

	it('Case #46 - Haunted Kraken Rotation Sensation', () => {
		const itemObject = parseString('Haunted Kraken Rotation Sensation', false, false);

		assert.deepEqual(itemObject, {
			name: 'Rotation Sensation',
			craftable: true,
			quality: 'Unusual',
			effect: 'Haunted Kraken',
		});
	});

	it('Case #47 - Frostbite Bonnet ', () => {
		const itemObject = parseString('Frostbite Bonnet', false, false);

		assert.deepEqual(itemObject, {
			name: 'Frostbite Bonnet',
			craftable: true,
			quality: 'Unique',
		});
	});

	it('Case #48 - Frostbite Bonnet ', () => {
		const itemObject = parseString('Festivized Formation Taunt: Most Wanted', false, false);

		assert.deepEqual(itemObject, {
			name: 'Taunt: Most Wanted',
			craftable: true,
			quality: 'Unusual',
			effect: 'Festivized Formation'
		});
	});

	it("Case #49 -'Contract Campaigner' War Paint\nFreelance Grade Keyless Case #115", () => {
		const itemObject = parseString(
			"'Contract Campaigner' War Paint\nFreelance Grade Keyless Case #115",
			false,
			false,
		);
		
		assert.deepEqual(itemObject, {
			name: "'Contract Campaigner' War Paint\nFreelance Grade Keyless Case",
			craftable: true,
			quality: 'Unique',
			itemNumber: { type: 'crate', value: 115 },
		});
	});
});

describe('parseString with numbers', () => {
	it('Case #1', () => {
		const itemObject = parseString(
			'Cool Killstreak Aqua Marine Rocket Launcher (Battle Scarred)',
			true,
			false,
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
			'Strange High Roller\'s Rocket Launcher (Factory New)',
			true,
			false,
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
			'Collector\'s Battalion\'s Backup Chemistry Set',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Chemistry Set',
			craftable: true,
			output: 'Battalion\'s Backup',
			outputQuality: 14,
			quality: 6,
		});
	});

	it('Case #4', () => {
		const itemObject = parseString(
			'Strange Festivized Professional Killstreak Australium Scattergun',
			true,
			false,
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
		const itemObject = parseString(
			'Demonflame Modest Pile of Hat',
			true,
			false,
		);

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
			true,
			false,
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
			true,
			false,
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
		const itemObject = parseString(
			'Archimedes Strangifier Chemistry Set',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Chemistry Set',
			craftable: true,
			target: 'Archimedes',
			output: 'Strangifier',
			outputQuality: 6,
			quality: 6,
		});
	});

	it('Case #9', () => {
		const itemObject = parseString(
			'Strange Backwards Ballcap',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Backwards Ballcap',
			craftable: true,
			quality: 11,
		});
	});

	it('Case #10', () => {
		const itemObject = parseString(
			'Professional Killstreak Iron Curtain Kit Fabricator',
			true,
			false,
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
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Festive Grenade Launcher',
			craftable: true,
			killstreak: 3,
			quality: 11,
		});
	});

	it('Case #12', () => {
		const itemObject = parseString(
			'Strange Unique Sniper Rifle',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Sniper Rifle',
			craftable: true,
			quality: 6,
			elevated: true,
		});
	});

	it('Case #13', () => {
		const itemObject = parseString('Australium Gold', true, false);

		assert.deepEqual(itemObject, {
			name: 'Australium Gold',
			craftable: true,
			quality: 6,
		});
	});

	it('Case #14', () => {
		const itemObject = parseString('Blue Moon Case #118', true, false);

		assert.deepEqual(itemObject, {
			name: 'Blue Moon Case',
			craftable: true,
			itemNumber: { type: 'crate', value: 118 },
			quality: 6,
		});
	});

	it('Case #15', () => {
		const itemObject = parseString('Hat #25', true, false);

		assert.deepEqual(itemObject, {
			name: 'Hat',
			craftable: true,
			itemNumber: { type: 'craft', value: 25 },
			quality: 6,
		});
	});

	it('Case #16', () => {
		const itemObject = parseString('The Tartan Shade', true, false);

		assert.deepEqual(itemObject, {
			name: 'Tartan Shade',
			craftable: true,
			quality: 6,
			isUniqueHat: true,
		});
	});

	it('Case #17', () => {
		const itemObject = parseString('Strange Cool Breeze', true, false);

		assert.deepEqual(itemObject, {
			name: 'Cool Breeze',
			craftable: true,
			quality: 11,
		});
	});

	it('Case #18', () => {
		const itemObject = parseString('Strange Hot Case', true, false);

		assert.deepEqual(itemObject, {
			name: 'Hot Case',
			craftable: true,
			quality: 11,
		});
	});

	it('Case #18', () => {
		const itemObject = parseString('Strange Hot Heels', true, false);

		assert.deepEqual(itemObject, {
			name: 'Hot Heels',
			craftable: true,
			quality: 11,
		});
	});

	it('Case #19', () => {
		const itemObject = parseString(
			'Strange A Head Full of Hot Air',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'A Head Full of Hot Air',
			craftable: true,
			quality: 11,
		});
	});

	it('Case #20', () => {
		const itemObject = parseString('Strange Vintage Tyrolean', true, false);

		assert.deepEqual(itemObject, {
			name: 'Vintage Tyrolean',
			quality: 11,
			craftable: true,
		});
	});

	it('Case #21', () => {
		const itemObject = parseString(
			'Strange Vintage Vintage Tyrolean',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Vintage Tyrolean',
			quality: 3,
			elevated: true,
			craftable: true,
		});
	});

	it('Case #22', () => {
		const itemObject = parseString('Vintage Tyrolean', true, false);

		assert.deepEqual(itemObject, {
			name: 'Vintage Tyrolean',
			quality: 6,
			craftable: true,
		});
	});

	it('Case #23', () => {
		const itemObject = parseString('Vintage Vintage Tyrolean', true, false);

		assert.deepEqual(itemObject, {
			name: 'Vintage Tyrolean',
			quality: 3,
			craftable: true,
		});
	});

	it('Case #24', () => {
		const itemObject = parseString('Strange Haunted Hat', true, false);

		assert.deepEqual(itemObject, {
			name: 'Haunted Hat',
			quality: 11,
			craftable: true,
		});
	});

	it('Case #25', () => {
		const itemObject = parseString(
			'Strange Haunted Haunted Hat',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Haunted Hat',
			quality: 13,
			elevated: true,
			craftable: true,
		});
	});

	it('Case #26', () => {
		const itemObject = parseString('Haunted Hat', true, false);

		assert.deepEqual(itemObject, {
			name: 'Haunted Hat',
			quality: 6,
			craftable: true,
		});
	});

	it('Case #27', () => {
		const itemObject = parseString('Haunted Haunted Hat', true, false);

		assert.deepEqual(itemObject, {
			name: 'Haunted Hat',
			quality: 13,
			craftable: true,
		});
	});

	it('Case #28', () => {
		const itemObject = parseString(
			'Eerie Orbiting Fire Condor Cap',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Condor Cap',
			quality: 5,
			effect: 40,
			craftable: true,
		});
	});

	it('Case #29', () => {
		const itemObject = parseString(
			'Haunted Ghosts War Paint (Battle Scarred)',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'War Paint',
			quality: 15,
			texture: 236,
			craftable: true,
			wear: 5,
		});
	});

	it('Case #30', () => {
		const itemObject = parseString(
			'Spellbound Aspect Taunt: Most Wanted',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Taunt: Most Wanted',
			quality: 5,
			effect: 3043,
			craftable: true,
		});
	});

	it('Case #31', () => {
		const itemObject = parseString(
			'Haunted Phantasm Jr Bonk Boy',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Bonk Boy',
			quality: 5,
			effect: 86,
			craftable: true,
		});
	});

	it('Case #32', () => {
		const itemObject = parseString(
			'Ghastly Ghosts Jr Bonk Boy',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Bonk Boy',
			quality: 5,
			effect: 85,
			craftable: true,
		});
	});

	it('Case #33', () => {
		const itemObject = parseString(
			'Haunted Ghosts Battle Boonie',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Battle Boonie',
			quality: 5,
			effect: 8,
			craftable: true,
		});
	});

	it('Case #34', () => {
		const itemObject = parseString('Smoking Jacket', true, false);

		assert.deepEqual(itemObject, {
			name: 'Smoking Jacket',
			craftable: true,
			quality: 6,
		});
	});

	it('Case #35', () => {
		const itemObject = parseString('Smoking Smoking Skid Lid', true, false);

		assert.deepEqual(itemObject, {
			name: 'Smoking Skid Lid',
			craftable: true,
			quality: 5,
			effect: 35,
		});
	});

	it('Case #36', () => {
		const itemObject = parseString(
			'Purple Energy Smoking Skid Lid',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Smoking Skid Lid',
			craftable: true,
			quality: 5,
			effect: 10,
		});
	});

	it('Case #37', () => {
		const itemObject = parseString('Smoking Skid Lid', true, false);

		assert.deepEqual(itemObject, {
			name: 'Smoking Skid Lid',
			craftable: true,
			quality: 6,
		});
	});

	it('Case #38', () => {
		const itemObject = parseString(
			'Strange Cosmetic Part: Kills',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Strange Cosmetic Part: Kills',
			craftable: true,
			quality: 6,
		});
	});

	it('Case #39', () => {
		const itemObject = parseString('The Value of Teamwork', true, false);

		assert.deepEqual(itemObject, {
			name: 'The Value of Teamwork',
			craftable: true,
			quality: 6,
		});
	});

	it('Case #40', () => {
		const itemObject = parseString(
			'The Essential Accessories',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'The Essential Accessories',
			craftable: true,
			quality: 6,
		});
	});

	it('Case #41', () => {
		const itemObject = parseString('Genuine Atomic Accolade', true, false);

		assert.deepEqual(itemObject, {
			name: 'Atomic Accolade',
			craftable: true,
			quality: 1,
		});
	});

	it('Case #42', () => {
		const itemObject = parseString('Bonk! Atomic Punch', true, false);

		assert.deepEqual(itemObject, {
			name: 'Bonk! Atomic Punch',
			craftable: true,
			quality: 6,
		});
	});

	it('Case #43 - Item with native `The` with craft number', () => {
		const itemObject = parseString(
			'The Concealed Killer Weapons Case #93',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'The Concealed Killer Weapons Case',
			craftable: true,
			quality: 6,
			itemNumber: { type: 'crate', value: 93 },
		});
	});

	it('Case #44 - Old retired keys', () => {
		const itemObject = parseString(
			'Non-Craftable Naughty Winter Crate Key 2014',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Naughty Winter Crate Key 2014',
			craftable: false,
			quality: 6,
		});
	});

	it('Case #45 - Munition case', () => {
		const itemObject = parseString(
			'Mann Co. Supply Munition #83',
			true,
			false,
		);

		assert.deepEqual(itemObject, {
			name: 'Mann Co. Supply Munition',
			craftable: true,
			quality: 6,
			itemNumber: { value: 83, type: 'crate' },
		});
	});

	it('Case #46 - Red Rock Roscoe Texture', () => {
		class MockSchema extends Schema {
			getTextureEnum() {
				this.loadTextures();

				return 0;
			}
		}

		const format = createFormat(new MockSchema());

		const itemObject = format.parseString(
			'Festivized Specialized Killstreak Red Rock Roscoe Pistol (Field-Tested)',
			true,
			false,
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


	it('Case #46 - Haunted Kraken Rotation Sensation', () => {
		const itemObject = parseString('Haunted Kraken Rotation Sensation', true, false);

		assert.deepEqual(itemObject, {
			name: 'Rotation Sensation',
			craftable: true,
			quality: 5,
			effect: 257,
		});
	});

	it('Case #47 - Frostbite Bonnet ', () => {
		const itemObject = parseString('Frostbite Bonnet', true, false);

		assert.deepEqual(itemObject, {
			name: 'Frostbite Bonnet',
			craftable: true,
			quality: 6,
		});
	});

	it('Case #48 - Frostbite Bonnet ', () => {
		const itemObject = parseString('Festivized Formation Taunt: Most Wanted', true, false);

		assert.deepEqual(itemObject, {
			name: 'Taunt: Most Wanted',
			craftable: true,
			quality: 5,
			effect: 3108
		});
	});

	it("Case #49 -'Contract Campaigner' War Paint Freelance Grade Keyless Case #115", () => {
		const itemObject = parseString(
			"'Contract Campaigner' War Paint\nFreelance Grade Keyless Case #115",
			true,
			false,
		);
		
		assert.deepEqual(itemObject, {
			name: "'Contract Campaigner' War Paint\nFreelance Grade Keyless Case",
			craftable: true,
			quality: 6,
			itemNumber: { type: 'crate', value: 115 },
		});
	});

	it("Case #50 - Treasure Trove taunt", () => {
		const itemObject = parseString(
			"Treasure Trove Shred Alert",
			true,
			false,
		);
		
		assert.deepEqual(itemObject, {
			name: "Shred Alert",
			craftable: true,
			quality: 5,
			effect: 3165
		});
	});

	it("Case #50 - Treasure Trove hat", () => {
		const itemObject = parseString(
			"Treasure Trove Class Crown",
			true,
			false,
		);
		
		assert.deepEqual(itemObject, {
			name: "Class Crown",
			craftable: true,
			quality: 5,
			effect: 289
		});
	});
});

describe('parseString with defindexes and numbers.', () => {
	it('Case #1', () => {
		const itemObject = parseString(
			'Cool Killstreak Aqua Marine Rocket Launcher (Battle Scarred)',
			true,
			true,
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
			'Strange High Roller\'s Rocket Launcher (Factory New)',
			true,
			true,
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
	it('Case #4', () => {
		const itemObject = parseString(
			'Strange Festivized Professional Killstreak Australium Scattergun',
			true,
			true,
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
		const itemObject = parseString(
			'Demonflame Modest Pile of Hat',
			true,
			true,
		);

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
			true,
			true,
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
			true,
			true,
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
		const itemObject = parseString(
			'Archimedes Strangifier Chemistry Set',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Chemistry Set',
			craftable: true,
			target: 'Archimedes',
			output: 'Strangifier',
			outputQuality: 6,
			quality: 6,
			targetDefindex: 828,
			outputDefindex: 5661,
			defindex: 20005,
		});
	});

	it('Case #9', () => {
		const itemObject = parseString('Strange Backwards Ballcap', true, true);

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
			true,
			true,
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
			true,
			true,
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
		const itemObject = parseString(
			'Strange Unique Sniper Rifle',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Sniper Rifle',
			craftable: true,
			quality: 6,
			elevated: true,
			defindex: 201,
		});
	});

	it('Case #13', () => {
		const itemObject = parseString('Australium Gold', true, true);

		assert.deepEqual(itemObject, {
			name: 'Australium Gold',
			craftable: true,
			quality: 6,
			defindex: 5037,
		});
	});

	it('Case #14', () => {
		const itemObject = parseString('Blue Moon Case #118', true, true);

		assert.deepEqual(itemObject, {
			name: 'Blue Moon Case',
			craftable: true,
			itemNumber: { type: 'crate', value: 118 },
			quality: 6,
		});
	});

	it('Case #15', () => {
		const itemObject = parseString('The Tartan Shade', true, true);

		assert.deepEqual(itemObject, {
			name: 'Tartan Shade',
			craftable: true,
			quality: 6,
			isUniqueHat: true,
			defindex: 30064,
		});
	});

	it('Case #16', () => {
		const itemObject = parseString('Strange Cool Breeze', true, true);

		assert.deepEqual(itemObject, {
			name: 'Cool Breeze',
			craftable: true,
			quality: 11,
			defindex: 979,
		});
	});

	it('Case #17', () => {
		const itemObject = parseString('Strange Hot Case', true, true);

		assert.deepEqual(itemObject, {
			name: 'Hot Case',
			craftable: true,
			quality: 11,
			defindex: 30986,
		});
	});

	it('Case #18', () => {
		const itemObject = parseString('Strange Hot Heels', true, true);

		assert.deepEqual(itemObject, {
			name: 'Hot Heels',
			craftable: true,
			quality: 11,
			defindex: 30754,
		});
	});

	it('Case #19', () => {
		const itemObject = parseString(
			'Strange A Head Full of Hot Air',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'A Head Full of Hot Air',
			craftable: true,
			quality: 11,
			defindex: 30662,
		});
	});

	it('Case #20', () => {
		const itemObject = parseString(
			'Taunt: Kazotsky Kick Unusualifier',
			true,
			true,
		);

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
		const itemObject = parseString('Ghostly Gibus Strangifier', true, true);

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
		const itemObject = parseString('Strange Bacon Grease', true, true);

		assert.deepEqual(itemObject, {
			name: 'Strange Bacon Grease',
			craftable: true,
			quality: 6,
			defindex: 5633,
		});
	});

	it('Case #23', () => {
		const itemObject = parseString('Strange Vintage Tyrolean', true, true);

		assert.deepEqual(itemObject, {
			name: 'Vintage Tyrolean',
			quality: 11,
			craftable: true,
			defindex: 101,
		});
	});

	it('Case #24', () => {
		const itemObject = parseString(
			'Strange Vintage Vintage Tyrolean',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Vintage Tyrolean',
			quality: 3,
			elevated: true,
			craftable: true,
			defindex: 101,
		});
	});

	it('Case #25', () => {
		const itemObject = parseString('Vintage Tyrolean', true, true);

		assert.deepEqual(itemObject, {
			name: 'Vintage Tyrolean',
			quality: 6,
			craftable: true,
			defindex: 101,
		});
	});

	it('Case #26', () => {
		const itemObject = parseString('Vintage Vintage Tyrolean', true, true);

		assert.deepEqual(itemObject, {
			name: 'Vintage Tyrolean',
			quality: 3,
			craftable: true,
			defindex: 101,
		});
	});

	it('Case #27', () => {
		const itemObject = parseString('Strange Haunted Hat', true, true);

		assert.deepEqual(itemObject, {
			name: 'Haunted Hat',
			quality: 11,
			craftable: true,
			defindex: 30300,
		});
	});

	it('Case #28', () => {
		const itemObject = parseString(
			'Strange Haunted Haunted Hat',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Haunted Hat',
			quality: 13,
			elevated: true,
			craftable: true,
			defindex: 30300,
		});
	});

	it('Case #29', () => {
		const itemObject = parseString('Haunted Hat', true, true);

		assert.deepEqual(itemObject, {
			name: 'Haunted Hat',
			quality: 6,
			craftable: true,
			defindex: 30300,
		});
	});

	it('Case #30', () => {
		const itemObject = parseString('Haunted Haunted Hat', true, true);

		assert.deepEqual(itemObject, {
			name: 'Haunted Hat',
			defindex: 30300,
			quality: 13,
			craftable: true,
		});
	});

	it('Case #31', () => {
		const itemObject = parseString(
			'Eerie Orbiting Fire Condor Cap',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Condor Cap',
			quality: 5,
			effect: 40,
			craftable: true,
			defindex: 30553,
		});
	});

	it('Case #32', () => {
		const itemObject = parseString(
			'Haunted Ghosts War Paint (Battle Scarred)',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'War Paint',
			quality: 15,
			texture: 236,
			craftable: true,
			wear: 5,
			defindex: 9536,
		});
	});

	it('Case #33', () => {
		const itemObject = parseString(
			'Spellbound Aspect Taunt: Most Wanted',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Taunt: Most Wanted',
			quality: 5,
			effect: 3043,
			craftable: true,
			defindex: 30614,
		});
	});

	it('Case #34', () => {
		const itemObject = parseString(
			'Haunted Phantasm Jr Bonk Boy',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Bonk Boy',
			quality: 5,
			effect: 86,
			craftable: true,
			defindex: 451,
		});
	});

	it('Case #35', () => {
		const itemObject = parseString(
			'Ghastly Ghosts Jr Bonk Boy',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Bonk Boy',
			defindex: 451,
			quality: 5,
			effect: 85,
			craftable: true,
		});
	});

	it('Case #36', () => {
		const itemObject = parseString(
			'Haunted Ghosts Battle Boonie',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Battle Boonie',
			quality: 5,
			effect: 8,
			craftable: true,
			defindex: 30907,
		});
	});

	it('Case #37', () => {
		const itemObject = parseString('Smoking Jacket', true, true);

		assert.deepEqual(itemObject, {
			name: 'Smoking Jacket',
			craftable: true,
			quality: 6,
			defindex: 31124,
		});
	});

	it('Case #38', () => {
		const itemObject = parseString('Smoking Smoking Skid Lid', true, true);

		assert.deepEqual(itemObject, {
			name: 'Smoking Skid Lid',
			craftable: true,
			quality: 5,
			effect: 35,
			defindex: 30399,
		});
	});

	it('Case #39', () => {
		const itemObject = parseString(
			'Purple Energy Smoking Skid Lid',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Smoking Skid Lid',
			craftable: true,
			quality: 5,
			effect: 10,
			defindex: 30399,
		});
	});

	it('Case #40', () => {
		const itemObject = parseString('Smoking Skid Lid', true, true);

		assert.deepEqual(itemObject, {
			name: 'Smoking Skid Lid',
			craftable: true,
			quality: 6,
			defindex: 30399,
		});
	});

	it('Case #41', () => {
		const itemObject = parseString(
			'Strange Cosmetic Part: Kills',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Strange Cosmetic Part: Kills',
			craftable: true,
			quality: 6,
			defindex: 6060,
		});
	});

	it('Case #42', () => {
		const itemObject = parseString('The Value of Teamwork', true, true);

		assert.deepEqual(itemObject, {
			name: 'The Value of Teamwork',
			craftable: true,
			quality: 6,
			defindex: 5064,
		});
	});

	it('Case #43', () => {
		const itemObject = parseString('The Essential Accessories', true, true);

		assert.deepEqual(itemObject, {
			name: 'The Essential Accessories',
			craftable: true,
			quality: 6,
			defindex: 347,
		});
	});

	it('Case #44', () => {
		const itemObject = parseString('Genuine Atomic Accolade', true, true);

		assert.deepEqual(itemObject, {
			name: 'Atomic Accolade',
			defindex: 767,
			craftable: true,
			quality: 1,
		});
	});

	it('Case #45', () => {
		const itemObject = parseString('Bonk! Atomic Punch', true, true);

		assert.deepEqual(itemObject, {
			name: 'Bonk! Atomic Punch',
			defindex: 46,
			craftable: true,
			quality: 6,
		});
	});

	it('Case #46 - The Value of Teamwork', () => {
		const itemObject = parseString('The Value of Teamwork', true, true);

		assert.deepEqual(itemObject, {
			name: 'The Value of Teamwork',
			quality: 6,
			craftable: true,
			defindex: 5064,
		});
	});

	it('Case #47 - The Bitter Taste of Defeat and Lime', () => {
		const itemObject = parseString(
			'The Bitter Taste of Defeat and Lime',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'The Bitter Taste of Defeat and Lime',
			quality: 6,
			craftable: true,
			defindex: 5054,
		});
	});

	it('Case #48 - Item with native `The` with craft number', () => {
		const itemObject = parseString(
			'The Concealed Killer Weapons Case #93',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'The Concealed Killer Weapons Case',
			craftable: true,
			quality: 6,
			defindex: 5806,
			itemNumber: { type: 'crate', value: 93 },
		});
	});

	it('Case #49 - Old retired keys', () => {
		const itemObject = parseString(
			'Non-Craftable Naughty Winter Crate Key 2014',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Naughty Winter Crate Key 2014',
			craftable: false,
			quality: 6,
			defindex: 5791,
		});
	});

	it('Case #50 - Munition case', () => {
		const itemObject = parseString(
			'Mann Co. Supply Munition #83',
			true,
			true,
		);

		assert.deepEqual(itemObject, {
			name: 'Mann Co. Supply Munition',
			defindex: 5734,
			craftable: true,
			quality: 6,
			itemNumber: { value: 83, type: 'crate' },
		});
	});

	it('Case #51 - Bat', () => {
		class MockSchema extends Schema {
			getDefindex() {
				return 0;
			}
		}

		const format = createFormat(new MockSchema());

		const itemObject = format.parseString('Bat', true, true);
		assert.deepEqual(itemObject, {
			name: 'Bat',
			quality: 6,
			defindex: 0,
			craftable: true,
		});
	});

	it('Case #52 - Bat output', () => {
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
			'Collector\'s Bat Chemistry Set',
			true,
			true,
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

	it('Case #52 - Bat target', () => {
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
			true,
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

	it('Case #53 - Accursed Apparition', () => {
		const itemObject = parseString('Accursed Apparition', true, true);
		assert.deepEqual(itemObject, {
			name: 'Accursed Apparition',
			quality: 6,
			craftable: true,
			defindex: 30206,
		});
	});

	it('Case #54 - Unusual Haunted Metal Scrap', () => {
		const itemObject = parseString('Unusual Haunted Metal Scrap', true, true);
		assert.deepEqual(itemObject, {
			name: 'Haunted Metal Scrap',
			quality: 5,
			craftable: true,
			defindex: 267,
		});
	});

	it('Case #55 - Strange Normal Medi Gun', () => {
		const itemObject = parseString('Strange Normal Medi Gun', true, true);
		assert.deepEqual(itemObject, {
			name: 'Medi Gun',
			quality: 0,
			craftable: true,
			defindex: 211,
			elevated: true,
		});
	});

	it('Case #56 - Haunted Kraken Rotation Sensation', () => {
		const itemObject = parseString('Haunted Kraken Rotation Sensation', true, true);

		assert.deepEqual(itemObject, {
			name: 'Rotation Sensation',
			defindex: 30623,
			craftable: true,
			quality: 5,
			effect: 257,
		});
	});

	it('Case #57 - Strange Health and Hell (Green) War Paint', () => {
		const itemObject = parseString('Strange Health and Hell (Green) War Paint', true, true);

		assert.deepEqual(itemObject, {
			name: 'War Paint',
			craftable: true,
			quality: 11,
			texture: 407,
			defindex: 9536
		});
	});

	it('Case #58 - Health and Hell (Green) Rocket Launcher', () => {
		const itemObject = parseString('Health and Hell (Green) Rocket Launcher', true, true);

		assert.deepEqual(itemObject, {
			name: 'Rocket Launcher',
			craftable: true,
			quality: 15,
			texture: 407,
			defindex: 205
		});
	});

	it('Case #59 - Health and Hell Iron Bomber', () => {
		const itemObject = parseString('Health and Hell Iron Bomber', true, true);

		assert.deepEqual(itemObject, {
			name: 'Iron Bomber',
			craftable: true,
			quality: 15,
			texture: 406,
			defindex: 1151,
		});
	});

	it('Case #60 - Frostbite Bonnet ', () => {
		const itemObject = parseString('Frostbite Bonnet', true, true);

		assert.deepEqual(itemObject, {
			name: 'Frostbite Bonnet',
			craftable: true,
			quality: 6,
			defindex: 31337,
		});
	});

	it('Case #61 - Frostbite Bonnet ', () => {
		const itemObject = parseString('Festivized Formation Taunt: Most Wanted', true, true);

		assert.deepEqual(itemObject, {
			name: 'Taunt: Most Wanted',
			craftable: true,
			quality: 5,
			defindex: 30614,
			effect: 3108
		});
	});

	it("Case #62 -'Contract Campaigner' War Paint\nFreelance Grade Keyless Case #115", () => {
		const itemObject = parseString(
			"'Contract Campaigner' War Paint\nFreelance Grade Keyless Case #115",
			true,
			true,
		);
		
		assert.deepEqual(itemObject, {
			name: "'Contract Campaigner' War Paint\nFreelance Grade Keyless Case",
			craftable: true,
			quality: 6,	
			defindex: 18004,
			itemNumber: { type: 'crate', value: 115 },
		});
	});

	it("Case #63 - Treasure Trove taunt", () => {
		const itemObject = parseString(
			"Treasure Trove Shred Alert",
			true,
			true,
		);
		
		assert.deepEqual(itemObject, {
			name: "Shred Alert",
			craftable: true,
			quality: 5,
			effect: 3165,
			defindex: 1015
		});
	});

	it("Case #64 - Treasure Trove hat", () => {
		const itemObject = parseString(
			"Treasure Trove Class Crown",
			true,
			true,
		);
		
		assert.deepEqual(itemObject, {
			name: "Class Crown",
			craftable: true,
			quality: 5,
			effect: 289,
			defindex: 30808 
		});
	});
});
