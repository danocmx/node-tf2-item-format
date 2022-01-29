import Attributes from './parseString/Attributes';

import decomposeName from './shared/decomposeName';
import getConvertedIntAttributes from './shared/getConvertedIntAttributes';
import getDefindexes from './shared/getDefindexes';

import isEmpty from './util/isEmpty';

import {
	ItemAttributes,
	ItemAttributesInNumbers,
	ItemAttributesInStrings,
	ItemDefindexes,
	DefaultItemAttributes,
} from './types';
import { ISchema } from './types/schema';
import { hasDefindex } from './shared/guards';

/**
 * Parses name string into attributes.
 */
function parseString(
	schema: ISchema,
	name: string,
	inNumbers: false,
	useDefindexes: false
): DefaultItemAttributes & ItemAttributesInStrings;
function parseString(
	schema: ISchema,
	name: string,
	inNumbers: true,
	useDefindexes: true
): DefaultItemAttributes & ItemDefindexes & ItemAttributesInNumbers;
function parseString(
	schema: ISchema,
	name: string,
	inNumbers: false,
	useDefindexes: true
): DefaultItemAttributes & ItemDefindexes & ItemAttributesInStrings;
function parseString(
	schema: ISchema,
	name: string,
	inNumbers: true,
	useDefindexes: false
): DefaultItemAttributes & ItemAttributesInNumbers;
// Default behaviour should never happen.
function parseString(
	schema: ISchema,
	name: string,
	inNumbers: boolean = false,
	useDefindexes: boolean = false
): DefaultItemAttributes {
	let attributes = new Attributes(schema, name);
	const itemName = decomposeName(name, attributes);

	// TODO: change this with overloads.
	const parsedAttributes: ItemAttributes = {
		name: itemName,
		craftable: attributes.craftable,
		quality: attributes.quality.value,
	};

	if (inNumbers) {
		const convertedAttributes = getConvertedIntAttributes(schema, {
			killstreak: attributes.killstreak,
			wear: attributes.wear,
			effect: attributes.effect,
			quality: attributes.quality.value,
			outputQuality:
				attributes.usableItem && attributes.usableItem.outputQuality,
			texture: attributes.texture,
		});

		if (!convertedAttributes.killstreak)
			delete convertedAttributes.killstreak;
		if (!convertedAttributes.wear) delete convertedAttributes.wear;
		if (!convertedAttributes.effect) delete convertedAttributes.effect;
		if (!hasDefindex(convertedAttributes.texture))
			delete convertedAttributes.texture;
		if (!hasDefindex(convertedAttributes.outputQuality))
			delete convertedAttributes.outputQuality;

		Object.assign(parsedAttributes, convertedAttributes);
	}

	const defindexes = useDefindexes
		? getDefindexes(schema, itemName, attributes.usableItem || undefined)
		: {};
	if (hasDefindex(defindexes.defindex))
		parsedAttributes.defindex = defindexes.defindex;

	if (attributes.quality.elevated)
		parsedAttributes.elevated = attributes.quality.elevated;
	if (attributes.isUniqueHat)
		parsedAttributes.isUniqueHat = attributes.isUniqueHat;
	if (attributes.australium)
		parsedAttributes.australium = attributes.australium;
	if (attributes.festivized)
		parsedAttributes.festivized = attributes.festivized;
	if (attributes.killstreak && !parsedAttributes.killstreak)
		parsedAttributes.killstreak = attributes.killstreak;
	if (attributes.wear && !parsedAttributes.wear)
		parsedAttributes.wear = attributes.wear;
	if (
		hasDefindex(attributes.texture) &&
		!hasDefindex(parsedAttributes.texture)
	)
		parsedAttributes.texture = attributes.texture;
	if (attributes.effect && !parsedAttributes.effect)
		parsedAttributes.effect = attributes.effect;

	if (attributes.usableItem && !isEmpty(attributes.usableItem)) {
		if (attributes.usableItem.target)
			parsedAttributes.target = attributes.usableItem.target;
		if (attributes.usableItem.output)
			parsedAttributes.output = attributes.usableItem.output;
		if (
			!hasDefindex(parsedAttributes.outputQuality) &&
			hasDefindex(attributes.usableItem.outputQuality)
		)
			parsedAttributes.outputQuality =
				attributes.usableItem.outputQuality;

		if (hasDefindex(defindexes.targetDefindex))
			parsedAttributes.targetDefindex = defindexes.targetDefindex;
		if (hasDefindex(defindexes.outputDefindex))
			parsedAttributes.outputDefindex = defindexes.outputDefindex;
	}

	if (attributes.itemNumber && !isEmpty(attributes.itemNumber))
		parsedAttributes.itemNumber = attributes.itemNumber;

	// Move convertor to the last step.

	return parsedAttributes;
}

export default parseString;
