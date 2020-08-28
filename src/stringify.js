const schema = require('./schema');

const shouldSetNumber = require('./stringify/shouldSetNumber');
const shouldSetQuality = require('./stringify/shouldSetQuality');
const addTargetToName = require('./stringify/addTargetToName');

const getOutput = require('./shared/getOutput');

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
		itemName += `${schema.getQualityName(quality)} `;
	}

	if (effect) {
		itemName += `${schema.getEffectName(effect)} `;
	}

	if (festivized) {
		itemName += 'Festivized ';
	}

	if (canAddKillstreak(killstreak, target)) {
		itemName += `${schema.getKillstreakName(killstreak)} `;
	}

	if (isAustralium(australium)) {
		itemName += 'Australium ';
	}

	if (texture) {
		itemName += `${schema.getTextureName(texture)} `;
	}

	if (isKillstreakKitOrFabricator(name, target)) {
		// eslint-disable-next-line no-param-reassign
		name = addTargetToName(name, target);
	} else if (target || output) {
		// There can be both target and output, target is prefered thus the check.
		// getOutput constructs full output name if quality present.
		// target has no quality
		itemName += `${output && !target ? getOutput(schema.getName(output), outputQuality) : schema.getName(target)} `;
	}

	if (isUniqueHat) {
		itemName += 'The ';
	}

	itemName += name;

	if (wear) {
		itemName += ` (${schema.getWearName(wear)})`;
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
