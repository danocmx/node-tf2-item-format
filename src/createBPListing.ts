import schema from './schema';

import stringify from './stringify';

import { ItemAttributes, BackpackTFListing, ItemNumber } from './types';

/**
 * Creates a listing object that you can sent to backpack.tf
 */
export default function (item: ItemAttributes): BackpackTFListing {
	return {
		quality: getQuality(item),
		craftable: item.craftable ? 1 : 0,
		item_name: getItem(item),
		priceindex: getPriceindex(item),
	};
};

function getQuality({ quality, elevated }: ItemAttributes): string|number {
	return elevated ? `Strange ${schema.getQualityName(quality)}` : quality;
}

function getItem(item: ItemAttributes): string {
	return stringify({
		name: getRightName(item),
		australium: item.australium,
		// Don't add it if it's already in the name.
		killstreak: isKillstreakKit(item) || isFabricator(item) ? 0 : item.killstreak,
		craftable: true,
		quality: 6
	});
}

function getRightName(item: ItemAttributes): string {
	// We keep kit in the name but backpack.tf does not accept it.
	if (isFabricator(item)) return item.name.replace('Kit ', '');

	return item.name;
}

function getPriceindex(item: ItemAttributes): number|string|void {
	if (item.effect) return schema.getEffectEnum(item.effect); // As int
	if (isCrate(item)) return (item.itemNumber as ItemNumber).value;
	if (isUnusualfierOrStrangifier(item.name)) return (schema.getDefindex(item.target as string) as number); // as defindex
	if (isChemistrySet(item)) {
		let priceindex = `${schema.getDefindex(item.output as string)}-${schema.getQualityEnum(item.outputQuality as number)}`;
		if (isUnusualfierOrStrangifier(item.target)) priceindex += `-${schema.getDefindex(item.target as string)}`;
		return priceindex;
	}
	if (isKillstreakKit(item)) return `${schema.getKillstreakEnum(item.killstreak as string)}-${schema.getDefindex(item.target as string)}`; // as defindex
	if (isFabricator(item)) return `${getKitDefindex(item)}-6-${schema.getDefindex(item.target as string)}`;

	return 0;
}

function isCrate(item: ItemAttributes): boolean {
	return !!(item.itemNumber && item.itemNumber.type === 'crate');
}

function isUnusualfierOrStrangifier(name?: string): boolean {
	return !!(name && (name === 'Unusualifier' || name === 'Strangifier'));
}

function isChemistrySet({ name }: ItemAttributes): boolean {
	return name.includes('Chemistry Set');
}

function isKillstreakKit(item: ItemAttributes): boolean {
	return item.name.includes('Kit') && !isFabricator(item);
}

function isFabricator(item: ItemAttributes): boolean {
	return item.name.includes('Fabricator');
}

function getKitDefindex(item: ItemAttributes): number|null {
	return schema.getDefindex(stringify({ name: 'Kit', killstreak: item.killstreak, craftable: true, quality: 6 }));
}
