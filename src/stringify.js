const findSkin = require('./stringify/findSkin');

const shouldSetNumber = require('./stringify/shouldSetNumber');
const shouldSetQuality = require('./stringify/shouldSetQuality');

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
module.exports = function ({ name, craftable, australium, festivized, killstreak, wear, texture, effect, target, output, outputQuality, itemNumber }) {
	let itemName = '';
	
	if (!craftable) {
		itemName += 'Non-Craftable ';
	}

	if (elevated) {
		itemName += 'Strange ';
	}

	if (shouldSetQuality(quality, elevated, effect)) {
		itemName += `${quality} `;
	}
	
	if (effect) {
		itemName += `${effect} `;
	}
	
	if (festivized) {
		itemName += 'Festivized ';
	}
	
	if (killstreak) {
		itemName += `${killstreak} `;
	}
	
	if (australium && australium !== -1) {
		itemName += 'Australium ';
	}
	
	if (texture) {
		itemName += `${texture} `;
	}
	
	itemName += name;
	
	/* TODO: Killstreak kits/fabs */
	if (target) {
		itemName += ` ${target_item}`;
	}

	if (quality) {
		
	}

	if (wear) {
		itemName += ` (${wear})`;
	}

	if (shouldSetNumber(itemNumber)) {
		itemName += ` #${numeric}`;
	}

	return itemName;
};

function shouldSetQuality(quality, elevated, effect) {

}