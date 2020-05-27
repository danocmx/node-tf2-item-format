const qualities = require('../../resources/UQualities');
const killstreaks = require('../../resources/UKillstreaks');
const effects = require('../../resources/UEffects');
const textures = require('../../resources/UTextures');
const wears = require('../../resources/UWearTiers');

/**
 * Manages resources for parsers.
 * @todo This shit is stupid af, im gonna remake it in new version.
 */
class Resources {
	constructor(resources = {}) {
		this.qualities = resources.qualities || qualities;
		this.killstreaks = resources.killstreaks || killstreaks;
		this.effects = resources.effects || effects;
		this.textures = resources.textures || textures;
		this.wears = resources.wears || wears;
	}

	getQualityValue(quality) {
		return this.qualities
			? this.qualities[quality] || ''
			: '';
	}

	getKillstreakValue(killstreak) {
		return this.killstreaks
			? this.killstreaks[killstreak] || ''
			: '';
	}

	getEffectValue(effect) {
		return this.effects
			? this.effects[effect] || ''
			: '';
	}

	getTextureValue(texture) {
		return this.textures
			? this.textures[texture] || ''
			: '';
	}

	getWearValue(wear) {
		return this.wears
			? this.wears[wear] || ''
			: '';
	}
}

module.exports = Resources;
