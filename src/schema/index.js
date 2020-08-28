const { requireStatic } = require('tf2-static-schema');

const isNumber = require('../util/isNumber');

/**
 * Convinience methods for tf2-static-schema.
 */
module.exports = {
	loadEffects() {
		this.effects = requireStatic('effects');
	},

	loadWears() {
		this.wears = requireStatic('wears');
	},

	loadKillstreaks() {
		this.killstreaks = requireStatic('killstreaks');
	},

	loadTextures() {
		this.textures = requireStatic('paint-kits');
	},

	loadItemNames() {
		this.itemNames = requireStatic('item-names');
	},

	loadDefindexes() {
		this.loadItemNames();
	},

	loadQualities() {
		this.qualities = requireStatic('qualities');
	},

	getEffect(search) {
		if (!this.effects) this.loadEffects();

		return this.effects[search];
	},

	getWear(search) {
		if (!this.wears) this.loadWears();

		return this.wears[search];
	},

	getKillstreak(search) {
		if (!this.killstreaks) this.loadKillstreaks();

		return this.killstreaks[search];
	},

	getTexture(search) {
		if (!this.textures) this.loadTextures();

		return this.textures[search];
	},

	getDefindex(search) {
		if (!this.itemNames) this.loadItemNames();
		if (isNumber(search)) return search;

		const itemNamesDefindexes = Object.keys(this.itemNames);
		for (let i = 0; i < itemNamesDefindexes.length; i++) {
			const defindex = itemNamesDefindexes[i];
			const name = this.itemNames[defindex];

			if (name === search) return defindex;
		}

		return null;
	},

	getName(search) {
		if (!this.itemNames) this.loadItemNames();

		return isNumber(search) ? this.itemNames[search] : search;
	},

	getQuality(search) {
		if (!this.qualities) this.loadQualities();

		return this.qualities[search];
	},

	getEffectName(effect) {
		return isNumber(effect) ? this.getEffect(effect) : effect;
	},

	getWearName(wear) {
		return isNumber(wear) ? this.getWear(wear) : wear;
	},

	getKillstreakName(killstreak) {
		return isNumber(killstreak) ? this.getKillstreak(killstreak) : killstreak;
	},

	getTextureName(texture) {
		return isNumber(texture) ? this.getTexture(texture) : texture;
	},

	getQualityName(quality) {
		return isNumber(quality) ? this.getQuality(quality) : quality;
	},

	getEffectEnum(effect) {
		return isNumber(effect) ? effect : this.getEffect(effect);
	},

	getWearEnum(wear) {
		return isNumber(wear) ? wear : this.getWear(wear);
	},

	getKillstreakEnum(killstreak) {
		return isNumber(killstreak) ? killstreak : this.getKillstreak(killstreak);
	},

	getTextureEnum(texture) {
		return isNumber(texture) ? texture : this.getTexture(texture);
	},

	getQualityEnum(quality) {
		return isNumber(quality) ? quality : this.getQuality(quality);
	},
};
