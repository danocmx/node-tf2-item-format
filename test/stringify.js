const { assert } = require('chai');

const { stringify } = require('../');

describe('stringify', () => {
	it('Case #1', () => {
		const itemString = stringify({
			name: 'Rocket Launcher',
			craftable: true,
			killstreak: 'Killstreak',
			wear: 'Battle Scarred',
			texture: 'Aqua Marine',
			effect: 'Cool',
			quality: 'Unusual'
		});

		assert.equal(itemString, 'Cool Killstreak Aqua Marine Rocket Launcher (Battle Scarred)');
	});

	it('Case #2', () => {
		const itemString = stringify({
			name: 'Rocket Launcher',
			craftable: true,
			wear: 'Factory New',
			texture: 'High Roller\'s',
			quality: 'Strange'
		});

		assert.equal(itemString, 'Strange High Roller\'s Rocket Launcher (Factory New)');
	});

	it('Case #3', () => {
		const itemString = stringify({
			name: 'Chemistry Set',
			craftable: true,
			output: 'Battalion\'s Backup',
			outputQuality: 'Collector\'s',
			quality: 'Unique'
		});

		assert.equal(itemString, 'Collector\'s Battalion\'s Backup Chemistry Set');
	});

	it('Case #4', () => {
		const itemString = stringify({
			name: 'Scattergun',
			craftable: true,
			australium: true,
			festivized: true,
			killstreak: 'Professional Killstreak',
			quality: 'Strange'
		});

		assert.equal(itemString, 'Strange Festivized Professional Killstreak Australium Scattergun');
	});

	it('Case #5', () => {
		const itemString = stringify({
			name: 'Modest Pile of Hat',
			craftable: true,
			effect: 'Demonflame',
			quality: 'Unusual'
		});

		assert.equal(itemString, 'Demonflame Modest Pile of Hat');
	});

	it('Case #6', () => {
		const itemString = stringify({
			name: 'Balloonihoodie',
			craftable: true,
			effect: 'Omniscient Orb',
			quality: 'Unusual',
			elevated: true
		});

		assert.equal(itemString, 'Strange Omniscient Orb Balloonihoodie');
	});

	it('Case #7', () => {
		const itemString = stringify({
			name: 'Specialized Killstreak Kit Fabricator',
			craftable: false,
			killstreak: 'Specialized Killstreak',
			target: 'Gunboats',
			quality: 'Unique'
		});

		assert.equal(itemString, 'Non-Craftable Specialized Killstreak Gunboats Kit Fabricator');
	});

	it('Case #8', () => {
		const itemString = stringify({
			name: 'Strangifier Chemistry Set',
			craftable: true,
			target: 'Archimedes',
			output: 'Strangifier',
			outputQuality: 'Unique',
			quality: 'Unique'
		});

		assert.equal(itemString, 'Archimedes Strangifier Chemistry Set');
	});

	it('Case #9', () => {
		const itemString = stringify({
			name: 'Backwards Ballcap',
			craftable: true,
			quality: 'Strange'
		});

		assert.equal(itemString, 'Strange Backwards Ballcap');
	});

	it('Case #10', () => {
		const itemString = stringify({
			name: 'Professional Killstreak Kit Fabricator',
			craftable: true,
			killstreak: 'Professional Killstreak',
			target: 'Iron Curtain',
			quality: 'Unique'
		});

		assert.equal(itemString, 'Professional Killstreak Iron Curtain Kit Fabricator');
	});

	it('Case #11', () => {
		const itemString = stringify({
			name: 'Festive Grenade Launcher',
			craftable: true,
			killstreak: 'Professional Killstreak',
			quality: 'Strange'
		});

		assert.equal(itemString, 'Strange Professional Killstreak Festive Grenade Launcher');
	});

	it('Case #12', () => {
		const itemString = stringify({
			name: 'Sniper Rifle',
			craftable: true,
			quality: 'Unique',
			elevated: true
		});

		assert.equal(itemString, 'Strange Unique Sniper Rifle');
	});

	it('Case #13', () => {
		const itemString = stringify({ name: 'Australium Gold', craftable: true, quality: 'Unique' });

		assert.equal(itemString, 'Australium Gold');
	});

	it('Case #14', () => {
		const itemString = stringify({
			name: 'Blue Moon Case',
			craftable: true,
			itemNumber: { type: 'case', value: '118' },
			quality: 'Unique'
		});

		assert.equal(itemString, 'Blue Moon Case #118');
	});

	it('Case #15', () => {
		const itemString = stringify({
			name: 'Hat',
			craftable: true,
			itemNumber: { type: 'craft', value: '25' },
			quality: 'Unique'
		});

		assert.equal(itemString, 'Hat #25');
	});
})