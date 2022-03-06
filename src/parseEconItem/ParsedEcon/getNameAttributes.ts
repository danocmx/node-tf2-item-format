import isAustralium from '../../shared/isAustralium';
import isUniqueHat from '../../shared/isUniqueHat';
import getTexture from '../../shared/getTexture';
import removeItemNumber from '../../shared/removeItemNumber';
import getUsableItem from '../../parseString/Attributes/getUsableItem';
import getItemNumber from '../../parseString/Attributes/getItemNumber';

import ParsedEcon from '../ParsedEcon';

import { NameAttributes } from '../../types';

/**
 * Gets attributes from Name
 * Currently only australium
 */
export default function (econ: ParsedEcon): NameAttributes {
	const name = econ.itemName.origin;
	let { texture } = econ.descriptions;

	/**
	 * @type {nameAttributes}
	 */
	const attributes: NameAttributes = {
		australium: isAustralium(name),
		isUniqueHat: isUniqueHat(name),
	};

	if (!texture) {
		texture = getTexture(name, {
			wear: econ.tags.wear,
			schema: econ.schema,
		});
		if (texture) attributes.texture = texture;
	}

	const itemNumberName = getNameForItemNumber(econ);
	const itemNumber = getItemNumber(itemNumberName);
	if (itemNumber) {
		attributes.itemNumber = itemNumber;
	}

	const usableItem = getUsableItem(
		attributes.itemNumber ? removeItemNumber(name, attributes.itemNumber) : name
	);
	if (usableItem) {
		Object.assign(attributes, usableItem);
	}

	return attributes;
}

/**
 * Returns a string that can be used for retrieving item number.
 * @param econ 
 * @returns name
 */
function getNameForItemNumber(econ: ParsedEcon) {
	if (!hasBeenRenamed(econ)) return econ.item.name;
	if (!econ.options.itemNumberFromFraudWarning) return econ.itemName.getOrigin();
	const warning = econ.item.fraudwarnings?.find((f) =>
		f.startsWith('This item has been renamed.')
	);
	if (!warning) return econ.itemName.getOrigin();
	return warning
		.replace('This item has been renamed.\n"', '')
		.replace(/"$/, '');
}

/**
 * Checks if item has been renamed based on fraudwarnings and symbols.
 * @param econ 
 * @returns if it has been renamed
 */
function hasBeenRenamed(econ: ParsedEcon) {
	if (econ.item.name.startsWith("''") && econ.item.name.endsWith("''"))
		return true;

	return econ.item.fraudwarnings?.find((f) =>
		f.startsWith('This item has been renamed.')
	);
}
