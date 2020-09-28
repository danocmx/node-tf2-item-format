/* eslint-disable radix */

import { SKUAttributes } from './types';

export default function (sku: string): SKUAttributes {
	const [defindex, quality, ...parts] = sku.split(';');

	const attributes: SKUAttributes = {
		defindex: parseInt(defindex),
		quality: parseInt(quality),
		craftable: true,
	};

	for (let i = 0; i < parts.length; i++) {
		const attribute = parts[i].replace('-', '');

		if (attribute === 'uncraftable') {
			attributes.craftable = false;
		} else if (attribute === 'australium') {
			attributes.australium = true;
		} else if (attribute === 'festive') {
			attributes.festive = true;
		} else if (attribute === 'strange') {
			attributes.elevated = true;
		} else if (attribute.startsWith('kt')) {
			attributes.killstreak = parseInt(attribute.substring(2));
		} else if (attribute.startsWith('u')) {
			attributes.effect = parseInt(attribute.substring(1));
		} else if (attribute.startsWith('pk')) {
			attributes.texture = parseInt(attribute.substring(2));
		} else if (attribute.startsWith('w')) {
			attributes.wear = parseInt(attribute.substring(1));
		} else if (attribute.startsWith('td')) {
			attributes.target = parseInt(attribute.substring(2));
		} else if (attribute.startsWith('n')) {
			attributes.itemNumber = {
				type: 'craft',
				value: parseInt(attribute.substring(1)),
			};
		} else if (attribute.startsWith('c')) {
			attributes.itemNumber = {
				type: 'crate',
				value: parseInt(attribute.substring(1)),
			};
		} else if (attribute.startsWith('od')) {
			attributes.output = parseInt(attribute.substring(2));
		} else if (attribute.startsWith('oq')) {
			attributes.outputQuality = parseInt(attribute.substring(2));
		}
	}

	return attributes;
};
