import ParsedEcon from './parseEconItem/ParsedEcon';

import {
	EconItem,
	ParsedEconItem,
	ParsedEconNameAtributes,
	ItemDefindexes,
	ItemAttributesInNumbers,
	MetaEconAttributes,
	AddionalEconItemAttributes,
} from './types';

/**
 * Parses Economy item from steam.
 * @param {object} item
 * @param {object} options
 * @param {boolean} options.inNumbers
 * @return {object}
 */
function parseEconItem(
	item: EconItem,
	inNumbers: false,
	useDefindexes: true
): ParsedEconNameAtributes &
	ItemDefindexes &
	MetaEconAttributes &
	AddionalEconItemAttributes;
function parseEconItem(
	item: EconItem,
	inNumbers: false,
	useDefindexes: false
): ParsedEconNameAtributes & MetaEconAttributes & AddionalEconItemAttributes;
function parseEconItem(
	item: EconItem,
	inNumbers: true,
	useDefindexes: true
): ParsedEconNameAtributes &
	ItemDefindexes &
	ItemAttributesInNumbers &
	MetaEconAttributes &
	AddionalEconItemAttributes;
function parseEconItem(
	item: EconItem,
	inNumbers: true,
	useDefindexes: false
): ParsedEconNameAtributes &
	ItemAttributesInNumbers &
	MetaEconAttributes &
	AddionalEconItemAttributes;
function parseEconItem(
	item: EconItem,
	inNumbers: boolean = false,
	useDefindexes: boolean = false
): ParsedEconItem {
	const parsedEcon = new ParsedEcon(item);

	const name = parsedEcon.itemName.getShort();

	let attributes: any;
	if (inNumbers === true) {
		if (useDefindexes)
			attributes = parsedEcon.getAttributes(name, true, true);
		else attributes = parsedEcon.getAttributes(name, true, false);
	} else if (useDefindexes === true) {
		attributes = parsedEcon.getAttributes(name, false, true);
	} else {
		attributes = parsedEcon.getAttributes(name, false, false);
	}

	return {
		name,
		fullName: parsedEcon.itemName.getFull(),
		id: parsedEcon.id,
		img: parsedEcon.getImageURL(),
		...attributes,
	};
}

export default parseEconItem;
