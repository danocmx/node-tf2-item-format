/* eslint-disable prefer-const */
/* eslint-disable camelcase */
const findSkin = require('./stringify/findSkin');

const UEffects = require('../resources/UEffects');
const UKillstreaks = require('../resources/UKillstreaks');
const UQualities = require('../resources/UQualities');
const UWearTiers = require('../resources/UWearTiers');

/** Stringifies item object into item name
 * @param {String} item.item pure name of the item
 * @param {String} item.target_item target of the item, eg. Kit Fabricator
 * @param {Number} item.quality item quality
 * @param {Number} item.elevated second item quality
 * @param {Number} item.australium if item is australium
 * @param {Number} item.killstreak item killstreak
 * @param {Number} item.particle item effect
 * @param {Boolean} item.festivized if item is festivized
 * @param {Object, String, Number} item.texture item texture
 * @param {Number} item.wearTier item wear
 * @param {Number} item.craftable if item is craftable
 * @param {Number} item.crate number for create
 * @return {String} item name with all attributes
*/
module.exports = function (item) {
	let { name, target_item, quality, elevated, australium, particle,
		killstreak, festivized, texture, wearTier, craftable, numeric, numeric_type } = item;

	const CRAFT_NUMBER_PLACEHOLDER = 100;
	numeric = numeric_type === 'craft_number' && numeric < CRAFT_NUMBER_PLACEHOLDER ? numeric : null;

	let itemName = '';
	if (craftable === 0 || craftable === -1) {
		itemName += 'Non-Craftable ';
	}
	if (elevated) {
		itemName += 'Strange ';
	}
	// Quality is name with particle when quality is not Unusual
	const qualityEffectCheckOne = quality !== 5 && particle;
	const qualityEffectCheckTwo = quality && !particle;
	if (((qualityEffectCheckOne || qualityEffectCheckTwo) && (quality !== UQualities.Unique || elevated)) && quality !== UQualities['Decorated Weapon']) {
		itemName += `${UQualities[quality]} `;
	}
	if (particle) {
		itemName += `${UEffects[particle]} `;
	}
	if (festivized) {
		itemName += 'Festivized ';
	}
	if (killstreak) {
		itemName += `${UKillstreaks[killstreak]} `;
	}
	if (australium && australium !== -1) {
		itemName += 'Australium ';
	}
	if (texture) {
		if (typeof texture !== 'string') texture = typeof texture === 'object' ? texture.name : findSkin(texture);
		itemName += `${texture} `;
	}
	itemName += name;
	if (target_item) {
		itemName += ` ${target_item}`;
	}
	if (numeric) {
		itemName += ` #${numeric}`;
	}
	if (wearTier) {
		itemName += ` (${UWearTiers[wearTier]})`;
	}

	return itemName;
};
