const isCraftable = require('./Attributes/isCraftable');
const isAustralium = require('./Attributes/isAustralium');
const isFestivized = require('./Attributes/isFestivized');

const getWear = require('./Attributes/getWear');
const getItemNumber = require('./Attributes/getItemNumber');
const getQuality = require('./Attributes/getQuality');
const getUsableItem = require('./Attributes/getUsableItem');

const getEffect = require('./Attributes/getEffect');

const isUniqueHat = require('../shared/isUniqueHat');

const getTexture = require('../shared/getTexture');
const getKillstreak = require('../shared/getKillstreak');

/**
 * Holds all attributes we received from name.
 */
class Attributes {
	/**
	 * @param {string} name 
	 */
	constructor(name) {
		this.craftable = isCraftable(name);
		this.australium = isAustralium(name);
		this.festivized = isFestivized(name);

		this.killstreak = getKillstreak(name);
		this.wear = getWear(name);

		this.effect = getEffect(name);
		this.texture = getTexture(name);

		this.itemNumber = getItemNumber(name);
		this.usableItem = getUsableItem(name);

		this.isUniqueHat = isUniqueHat(name);
		this.quality = getQuality(name, this);
	}
}

module.exports = Attributes;
