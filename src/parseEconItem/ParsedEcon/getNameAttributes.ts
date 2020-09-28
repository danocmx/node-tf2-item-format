import isAustralium from '../../shared/isAustralium';
import isUniqueHat from '../../shared/isUniqueHat';
import getTexture from '../../shared/getTexture';

import ParsedEcon from '../ParsedEcon';

import { NameAttributes, EconItem } from '../../types';

/**
 * Gets attributes from Name
 * Currently only australium
 */
export default function (econ: ParsedEcon): NameAttributes {
	let { texture } = econ.descriptions;

	/**
	 * @type {nameAttributes}
	 */
	const attributes: NameAttributes = {
		australium: isAustralium(econ.itemName.origin),
		isUniqueHat: isUniqueHat(econ.itemName.origin),
	};

	if (!texture) {
		texture = getTexture(econ.itemName.origin);
		if (texture) attributes.texture = texture;
	}

	return attributes;
};
