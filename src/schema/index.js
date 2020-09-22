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
		this.items = requireStatic('items');
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

	/**
	 * @todo https://github.com/Nicklason/tf2-automatic/blob/master/src/lib/items.ts
	 * @param {string} search
	 * @return {number}
	 */
	getDefindex(search) {
		if (!this.items) this.loadDefindexes();
		if (isNumber(search)) return search;

		let upgradeableDfx = null;
		for (let i = 0; i < this.items.length; i++) {
			const item = this.items[i];
			const name = selectName(item);
			if (name === search) {
				if (!hasUpgradeable(item) || isUpgradeable(item.name)) {
					return item.defindex;
				}

				upgradeableDfx = item.defindex;
			}
		}

		return upgradeableDfx;
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

/**
 * @todo get from schema
 * @param {object} item
 * @return {string}
 */
function selectName(item) {
	if (item.item_name === 'Kit') return item.item_type_name;
	// Due to BackpackTF naming colisions.
	if (item.defindex === 20003) return 'Professional Killstreak Fabricator';
	if (item.defindex === 20002) return 'Specialized Killstreak Fabricator';
	return item.item_name;
}

function isUpgradeable(name) {
	return name.startsWith('Upgradeable ');
}

function hasUpgradeable(item) {
	return item.name.includes(item.item_class.toUpperCase());
}
