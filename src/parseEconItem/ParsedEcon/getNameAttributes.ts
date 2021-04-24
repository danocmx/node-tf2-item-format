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
		texture = getTexture(name, { wear: econ.tags.wear, schema: econ.schema });
		if (texture) attributes.texture = texture;
	}

	const itemNumber = getItemNumber(name);
	if (itemNumber) {
		attributes.itemNumber = itemNumber;
	}

	const usableItem = getUsableItem(
		itemNumber ? removeItemNumber(name, itemNumber) : name
	);
	if (usableItem) {
		Object.assign(attributes, usableItem);
	}

	return attributes;
}
