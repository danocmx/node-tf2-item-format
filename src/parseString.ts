import Attributes from './parseString/Attributes';

import decomposeName from './shared/decomposeName';
import getConvertedIntAttributes from './shared/getConvertedIntAttributes';
import getDefindexes from './shared/getDefindexes';

import isEmpty from './util/isEmpty';

import { ItemAttributes } from './types';

/**
 * Parses name string into attributes.
 */
export default function (name: string, { inNumbers = false, useDefindexes = false }: Partial<{ inNumbers: boolean, useDefindexes: boolean }> = {}): ItemAttributes {
	let attributes = new Attributes(name);
	const itemName = decomposeName(name, attributes);

	const parsedAttributes: ItemAttributes = {
		name: itemName,
		craftable: attributes.craftable,
		quality: attributes.quality.value,
	}

	if (inNumbers) {
		const convertedAttributes = getConvertedIntAttributes({
			killstreak: attributes.killstreak,
			wear: attributes.wear,
			effect: attributes.effect,
			quality: attributes.quality.value,
			outputQuality: attributes.usableItem && attributes.usableItem.outputQuality,
			texture: attributes.texture,
		});

		if (!convertedAttributes.killstreak) delete convertedAttributes.killstreak;
		if (!convertedAttributes.wear) delete convertedAttributes.wear;
		if (!convertedAttributes.effect) delete convertedAttributes.effect;
		if (!convertedAttributes.texture) delete convertedAttributes.texture;
		if (!convertedAttributes.outputQuality) delete convertedAttributes.outputQuality;

		Object.assign(parsedAttributes, convertedAttributes);
	}

	const defindexes = useDefindexes ? getDefindexes(itemName, attributes.usableItem || undefined) : {};
	if (defindexes.defindex) parsedAttributes.defindex = defindexes.defindex;

	if (attributes.quality.elevated) parsedAttributes.elevated = attributes.quality.elevated;
	if (attributes.isUniqueHat) parsedAttributes.isUniqueHat = attributes.isUniqueHat;
	if (attributes.australium) parsedAttributes.australium = attributes.australium;
	if (attributes.festivized) parsedAttributes.festivized = attributes.festivized;
	if (attributes.killstreak && !parsedAttributes.killstreak) parsedAttributes.killstreak = attributes.killstreak;
	if (attributes.wear && !parsedAttributes.wear) parsedAttributes.wear = attributes.wear;
	if (attributes.texture && !parsedAttributes.texture) parsedAttributes.texture = attributes.texture;
	if (attributes.effect && !parsedAttributes.effect) parsedAttributes.effect = attributes.effect;
	
	if (attributes.usableItem && !isEmpty(attributes.usableItem)) {
		if (attributes.usableItem.target) parsedAttributes.target = attributes.usableItem.target;
		if (attributes.usableItem.output) parsedAttributes.output = attributes.usableItem.output;
		if (!parsedAttributes.outputQuality && attributes.usableItem.outputQuality) parsedAttributes.outputQuality = attributes.usableItem.outputQuality;

		if (defindexes.targetDefindex) parsedAttributes.targetDefindex = defindexes.targetDefindex;
		if (defindexes.outputDefindex) parsedAttributes.outputDefindex = defindexes.outputDefindex;
	} 

	if (attributes.itemNumber && !isEmpty(attributes.itemNumber)) parsedAttributes.itemNumber = attributes.itemNumber;

	// Move convertor to the last step.

	return parsedAttributes;
};
