const getOutput = require('../shared/getOutput');

/**
 * Uses attributes to decompose the name to it's original.
 * @param {string} name
 * @param {object} attributes
 * @return {string} Pure name
 */
module.exports = function (name, attributes) {
	const { craftable, australium, festivized, killstreak, wear, effect, texture, itemNumber, usableItem, quality } = attributes;
	let itemName = name;

	if (!craftable) itemName = itemName.replace('Non-Craftable ', '');
	if (australium) itemName = itemName.replace('Australium ', '');
	if (festivized) itemName = itemName.replace('Festivized ', '');

	// So we keep killstreak name for kits and fabricators
	if (usableItem) {
		const toRemove = getUsableItemToRemove(attributes);
		itemName = itemName.replace(new RegExp(`(( ${toRemove})|(${toRemove} ))`), '')
	}
	// Killstreak stat is kept
	else if (killstreak) itemName = itemName.replace(`${killstreak} `, '');
	
	if (wear) itemName = itemName.replace(` (${wear})`, '');

	if (effect) itemName = itemName.replace(`${effect} `, '');
	if (texture) itemName = itemName.replace(`${texture} `, '');

	if (itemNumber) itemName = itemName.replace(` #${itemNumber.value}`, '');
	
	itemName = itemName.replace(`${quality.value} `, '');
	if (isUnique(quality)) itemName = itemName.replace('The ', '');
	if (quality.elevated) itemName = itemName.replace('Strange ', '');

	return itemName;
};

/**
 * Chooses output or target item to remove from name.
 * @param {Object} attributes
 * @return {string} 
 */
function getUsableItemToRemove(attributes) {
	const { target, output, outputQuality } = attributes.usableItem;

	return target 
		|| (outputQuality != 'Unique' ? getOutput(output, outputQuality) : output)
}

function isUnique({ value }) {
	return value === 'Unique';
}