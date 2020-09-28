import getOutput from './getOutput';

import Attributes from '../parseString/Attributes';

import { TargetOutputItem, DecomposeAttributes } from '../types';

/**
 * Uses attributes to decompose the name to it's original.
 * @param {string} name
 * @param {object} attributes
 * @return {string} Pure name
 */
export default function (name: string, attributes: DecomposeAttributes): string {
	const { craftable, australium, festivized, killstreak, wear, effect,
		texture, itemNumber, usableItem, quality, isUniqueHat } = attributes;
	let itemName: string = name;

	if (!craftable) itemName = itemName.replace('Non-Craftable ', '');
	if (australium) itemName = itemName.replace('Australium ', '');
	if (festivized) itemName = itemName.replace('Festivized ', '');

	// So we keep killstreak name for kits and fabricators
	if (usableItem) {
		const toRemove = getUsableItemToRemove(attributes);
		itemName = itemName.replace(new RegExp(`(( ${toRemove})|(${toRemove} ))`), '');
	} else if (killstreak) itemName = itemName.replace(`${killstreak} `, ''); // Killstreak stat is kept

	if (wear) itemName = itemName.replace(` (${wear})`, '');

	if (effect) itemName = itemName.replace(`${effect} `, '');
	if (texture) itemName = itemName.replace(`${texture} `, '');

	if (itemNumber) itemName = itemName.replace(` #${itemNumber.value}`, '');

	itemName = itemName.replace(`${quality.value} `, '');
	if (isUniqueHat) itemName = itemName.replace(/^The /, '');
	if (quality.elevated) itemName = itemName.replace('Strange ', '');

	return itemName;
};

/**
 * Chooses output or target item to remove from name.
 * @param {Object} attributes
 * @return {string}
 */
function getUsableItemToRemove(attributes: DecomposeAttributes) {
	const { target, output, outputQuality } = attributes.usableItem as Partial<TargetOutputItem>;

	return target || getOutput(output as string, outputQuality as string);
}
