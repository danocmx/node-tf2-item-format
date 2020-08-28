const schema = require('./schema/Schema');

const shouldSetNumber = require('./stringify/shouldSetNumber');
const shouldSetQuality = require('./stringify/shouldSetQuality');
const addTargetToName = require('./stringify/addTargetToName');

const getOutput = require('./shared/getOutput');

const isNumber = require('./util/isNumber');

/** Stringifies item object into item name
 * @param {string} item.item pure name of the item
 * @param {string} item.target_item target of the item, eg. Kit Fabricator
 * @param {string} item.quality item quality
 * @param {boolean} item.elevated second item quality
 * @param {boolean} item.australium if item is australium
 * @param {string} item.killstreak item killstreak
 * @param {string} item.effect item effect
 * @param {boolean} item.festivized if item is festivized
 * @param {string} item.texture item texture
 * @param {string} item.wearTier item wear
 * @param {boolean} item.craftable if item is craftable
 * @param {number} item.crate number for create
 * @param {boolean} item.isUniqueHat signalizes if 'The' should be in the name
 * @return {string} item name with all attributes
*/
module.exports = function ({
	name, craftable, australium, festivized, killstreak, elevated,
	quality, wear, texture, effect, target, output, outputQuality, itemNumber, isUniqueHat,
}) {
	let itemName = '';

	if (!craftable) {
		itemName += 'Non-Craftable ';
	}

	if (elevated) {
		itemName += 'Strange ';
	}

	if (shouldSetQuality(quality, elevated, effect)) {
		itemName += `${getQualityString(quality)} `;
	}

	if (effect) {
		itemName += `${getEffectString(effect)} `;
	}

	if (festivized) {
		itemName += 'Festivized ';
	}

	if (canAddKillstreak(killstreak, target)) {
		itemName += `${getKillstreakString(killstreak)} `;
	}

	if (isAustralium(australium)) {
		itemName += 'Australium ';
	}

	if (texture) {
		itemName += `${getTextureString(texture)} `;
	}

	if (isKillstreakKitOrFabricator(name, target)) {
		// eslint-disable-next-line no-param-reassign
		name = addTargetToName(name, target);
	} else if (target || output) {
		// There can be both target and output, target is prefered thus the check.
		// getOutput constructs full output name if quality present.
		// target has no quality
		itemName += `${output && !target ? getOutput(getDefindexName(output), outputQuality) : getDefindexName(target)} `;
	}

	if (isUniqueHat) {
		itemName += 'The ';
	}

	itemName += name;

	if (wear) {
		itemName += ` (${getWearString(wear)})`;
	}

	if (shouldSetNumber(itemNumber)) {
		itemName += ` #${itemNumber.value}`;
	}

	return itemName;
};

function isAustralium(australium) {
	return australium && australium !== -1;
}

/**
 * Checks if we can add killstreak to the name,
 * killstreak stays present on target items such as kits and fabricators.
 * @param {*} killstreak
 * @param {string} target
 * @return {boolean}
 */
function canAddKillstreak(killstreak, target) {
	return killstreak && !target;
}

function isKillstreakKitOrFabricator(name, target) {
	return target && / Kit/.test(name);	// This checks for fabricator too.
}

function getQualityString(search) {
	return isNumber(search) ? schema.getQuality(search) : search;
}

function getEffectString(search) {
	return isNumber(search) ? schema.getEffect(search) : search;
}

function getKillstreakString(search) {
	return isNumber(search) ? schema.getKillstreak(search) : search;
}

function getTextureString(search) {
	return isNumber(search) ? schema.getTexture(search) : search;
}

function getDefindexName(search) {
	return isNumber(search) ? schema.getName(search) : search;
}

function getWearString(search) {
	return isNumber(search) ? schema.getWear(search) : search;
}
