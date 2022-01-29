const { assert } = require('chai');

const { fixName } = require('../dist/static')

describe('fixName', () => {
	it('Case #1', () => {
		assert.equal(fixName('Strange Australium Festivized Professional Killstreak Scattergun'), 'Strange Festivized Professional Killstreak Australium Scattergun');
	})

	it('Case #2', () => {
		assert.equal(fixName('Omniscient Orb Strange Balloonihoodie'), 'Strange Omniscient Orb Balloonihoodie');
	})
});

describe('fixName compability', () => {
	it('Case #1', () => {
		assert.equal(fixName('Collector\'s Battalion\'s Backup Chemistry Set'), 'Collector\'s Battalion\'s Backup Chemistry Set');
	})

	it('Case #2', () => {
		assert.equal(fixName('Strange Festivized Professional Killstreak Australium Scattergun'), 'Strange Festivized Professional Killstreak Australium Scattergun');
	})

	it('Case #3', () => {
		assert.equal(fixName('Strange Omniscient Orb Balloonihoodie'), 'Strange Omniscient Orb Balloonihoodie');
	})

	it('Case #4', () => {
		assert.equal(fixName('Hat #25'), 'Hat #25');
	})

	it('Case #5', () => {
		assert.equal(fixName('Strange Unique Sniper Rifle'), 'Strange Unique Sniper Rifle');
	})
})
