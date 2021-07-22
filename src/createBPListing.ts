import stringify from './stringify';

import { nameTypeGuard, skuTypeGuard } from './types/guards';
import {
	ItemAttributes,
	BackpackTFListing,
	ItemNumber,
	StrigifySKUAttributes,
} from './types';
import { ISchema } from './types/schema';

const DEFAULT_OPTIONS: CreateBPListingOptions = {
	unuSkinsToDecorated: true,
}

export type CreateBPListingOptions = {
	/**
	 * Defaults unusual skins to decorated weapon quality.
	 */
	unuSkinsToDecorated?: boolean;
}

/**
 * Creates a listing object that you can sent to backpack.tf
 * @todo work with SKU attributes
 */
export default function (
	schema: ISchema,
	item: ItemAttributes | StrigifySKUAttributes,
	options: CreateBPListingOptions = {},
): BackpackTFListing {
	options = {
		...DEFAULT_OPTIONS,
		...options,
	}

	let name: string;
	if (skuTypeGuard(item)) {
		name = schema.getName(item.defindex);
	} else if (nameTypeGuard(item)) {
		name = item.name;
	} else {
		throw new Error('Defindex or Name is missing.');
	}

	return {
		quality: getQuality(schema, item, options),
		craftable: item.craftable ? 1 : 0,
		item_name: getItem(schema, name, item),
		priceindex: getPriceindex(schema, name, item),
	};
}

function getQuality(schema: ISchema, item: ItemAttributes|StrigifySKUAttributes, options: CreateBPListingOptions): string|number {
	let { quality } = item;
	const { elevated } = item;
	
	if (options.unuSkinsToDecorated && isUnusualSkin(item)) {
		/*
			- decorated
			- unusual
			- strange decorated
			- strange unusual
			- strange
		*/
		quality = 'Decorated Weapon';
	}

	return elevated 
		? `Strange ${schema.getQualityName(quality)}` 
		: quality;
}

function getItem(schema: ISchema, name: string, item: ItemAttributes|StrigifySKUAttributes): string {
	return stringify(schema, {
		name: getRightName(schema, name, item),
		australium: item.australium,
		// Don't add it if it's already in the name.
		killstreak:
			isKillstreakKit(name) || isFabricator(name) ? 0 : item.killstreak,
		craftable: true,
		festivized: item.festivized,
		quality: 6,
		wear: item.wear,
	});
}

function getRightName(schema: ISchema, name: string, item: ItemAttributes|StrigifySKUAttributes): string {
	// We keep kit in the name but backpack.tf does not accept it.
	if (isFabricator(name)) return name.replace('Kit ', '');
	if (item.texture) return `${schema.getTextureName(item.texture)} | ${name}`;

	return name;
}

function getPriceindex(
	schema: ISchema,
	name: string,
	item: ItemAttributes | StrigifySKUAttributes
): number | string | void {
	let targetDefindex;
	let outputDefindex;
	if (skuTypeGuard(item)) {
		targetDefindex = item.targetDefindex;
		outputDefindex = item.outputDefindex;
	} else if (nameTypeGuard(item)) {
		targetDefindex =
			item.targetDefindex ||
			(item.target && schema.getDefindex(item.target));
		outputDefindex =
			item.outputDefindex ||
			(item.output && schema.getDefindex(item.output));
	}

	if (item.effect) return schema.getEffectEnum(item.effect);
	if (item.itemNumber && isCrate(item.itemNumber))
		return (item.itemNumber as ItemNumber).value;
	if (isUnusualfierOrStrangifier(name)) return targetDefindex as number;
	if (isChemistrySet(name)) {
		let priceindex = `${outputDefindex}-${schema.getQualityEnum(item.outputQuality as number)}`;
		if (hasTarget(targetDefindex)) priceindex += `-${targetDefindex}`;
		return priceindex;
	}
	if (isKillstreakKit(name))
		return `${schema.getKillstreakEnum(
			item.killstreak as string
		)}-${targetDefindex}`; // as defindex
	if (isFabricator(name))
		return `${getKitDefindex(schema, item)}-6-${targetDefindex}`;

	return 0;
}

function isCrate(itemNumber: ItemNumber): boolean {
	return itemNumber.type === 'crate';
}

function isUnusualfierOrStrangifier(name?: string): boolean {
	return !!(name && (name === 'Unusualifier' || name === 'Strangifier'));
}

function isChemistrySet(name: string): boolean {
	return name.includes('Chemistry Set');
}

function hasTarget(targetDefindex: number | "" | null | undefined): boolean {
	return !!(targetDefindex);
}

function isKillstreakKit(name: string): boolean {
	return name.includes('Kit') && !isFabricator(name);
}

function isFabricator(name: string): boolean {
	return name.includes('Fabricator');
}

function getKitDefindex(
	schema: ISchema,
	item: ItemAttributes | StrigifySKUAttributes
): number | null {
	return schema.getDefindex(
		stringify(schema, {
			name: 'Kit',
			killstreak: item.killstreak,
			craftable: true,
			quality: 6,
		})
	);
}

function isUnusualSkin(item: ItemAttributes|StrigifySKUAttributes) {
	return item.effect && item.texture && item.wear;
}