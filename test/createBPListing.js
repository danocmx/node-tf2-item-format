const { assert } = require('chai');

const { createBPListing } = require('../static');

describe('createBPListing', () => {
	it('Case #1', () => {
		const listing = createBPListing({
			name: 'Flame Thrower',
			craftable: true,
			quality: 'Strange',
		});

		assert.deepEqual(listing, {
			quality: 'Strange',
			craftable: 1,
			item_name: 'Flame Thrower',
			priceindex: 0,
		});
	});

	it('Case #2', () => {
		const listing = createBPListing({
			name: "Pyromancer's Mask",
			craftable: true,
			quality: 'Unusual',
			effect: 'Burning Flames',
		});

		assert.deepEqual(listing, {
			quality: 'Unusual',
			craftable: 1,
			item_name: "Pyromancer's Mask",
			priceindex: 13,
		});
	});

	it('Case #3', () => {
		const listing = createBPListing({
			name: 'Professional Killstreak Kit Fabricator',
			craftable: true,
			quality: 'Unique',
			killstreak: 'Professional Killstreak',
			target: 'Kritzkrieg',
		});

		assert.deepEqual(listing, {
			quality: 'Unique',
			craftable: 1,
			item_name: 'Professional Killstreak Fabricator',
			priceindex: '6526-6-35',
		});
	});

	it('Case #4', () => {
		const listing = createBPListing({
			name: 'Professional Killstreak Kit',
			craftable: false,
			quality: 'Unique',
			killstreak: 'Professional Killstreak',
			target: 'AWPer Hand',
		});

		assert.deepEqual(listing, {
			quality: 'Unique',
			craftable: 0,
			item_name: 'Professional Killstreak Kit',
			priceindex: '3-851',
		});
	});

	it('Case #5', () => {
		const listing = createBPListing({
			name: 'Diamondback',
			craftable: true,
			quality: "Collector's",
			killstreak: 'Professional Killstreak',
		});

		assert.deepEqual(listing, {
			quality: "Collector's",
			craftable: 1,
			item_name: 'Professional Killstreak Diamondback',
			priceindex: 0,
		});
	});

	it('Case #6', () => {
		const listing = createBPListing({
			name: 'Chemistry Set',
			craftable: true,
			quality: 'Unique',
			output: "Battalion's Backup",
			outputQuality: "Collector's",
		});

		assert.deepEqual(listing, {
			quality: 'Unique',
			craftable: 1,
			item_name: 'Chemistry Set',
			priceindex: '226-14',
		});
	});

	it('Case #7', () => {
		const listing = createBPListing({
			name: 'Strangifier Chemistry Set',
			craftable: true,
			quality: 'Unique',
			target: 'Archimedes',
			output: 'Strangifier',
			outputQuality: 'Unique',
		});

		assert.deepEqual(listing, {
			quality: 'Unique',
			craftable: 1,
			item_name: 'Strangifier Chemistry Set',
			priceindex: '5661-6',
		});
	});

	it('Case #8', () => {
		const listing = createBPListing({
			name: 'Festive Grenade Launcher',
			craftable: true,
			quality: 'Strange',
			killstreak: 'Professional Killstreak',
		});

		assert.deepEqual(listing, {
			quality: 'Strange',
			craftable: 1,
			item_name: 'Professional Killstreak Festive Grenade Launcher',
			priceindex: 0,
		});
	});

	it('Case #9', () => {
		const listing = createBPListing({
			name: 'Sniper Rifle',
			craftable: true,
			quality: 'Unique',
			elevated: true,
		});

		assert.deepEqual(listing, {
			quality: 'Strange Unique',
			craftable: 1,
			item_name: 'Sniper Rifle',
			priceindex: 0,
		});
	});

	it('Case #10', () => {
		const listing = createBPListing({
			name: 'Scattergun',
			craftable: true,
			quality: 'Strange',
			australium: true,
			festivized: true,
			killstreak: 'Professional Killstreak',
		});

		assert.deepEqual(listing, {
			quality: 'Strange',
			craftable: 1,
			item_name: 'Professional Killstreak Australium Scattergun',
			priceindex: 0,
		});
	});

	it('Case #11', () => {
		const listing = createBPListing({
			name: 'Bazaar Bauble',
			craftable: true,
			quality: 'Unusual',
			elevated: true,
			effect: 'Prismatica',
		});

		assert.deepEqual(listing, {
			quality: 'Strange Unusual',
			craftable: 1,
			item_name: 'Bazaar Bauble',
			priceindex: 150,
		});
	});
});
