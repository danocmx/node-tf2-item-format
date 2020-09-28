import ItemName from './ParsedEcon/ItemName';

import hasAppData from './ParsedEcon/hasAppData';

import getTags from './ParsedEcon/getTags';
import getPropertyAttributes from './ParsedEcon/getPropertyAttributes';
import getNameAttributes from './ParsedEcon/getNameAttributes';
import getDescriptions from './ParsedEcon/getDescriptions';

import getConvertedIntAttributes from '../shared/getConvertedIntAttributes';

import {
	EconItem,
	TagAttributes,
	DescriptionAttributes,
	PropertyAttributes,
	NameAttributes,
	ParsedEconOptions,
	ParsedEconNameAtributes,
	EconAttributes,
} from '../types';

/**
 * Parser class.
 */
export default class ParsedEcon {
	public item: EconItem;
	public itemName: ItemName;
	public fullEcon: boolean;
	public tags: TagAttributes;
	public descriptions: DescriptionAttributes;
	public properties: PropertyAttributes;
	public nameAttrs: NameAttributes;
	public options: ParsedEconOptions;

	constructor(item: EconItem, options: ParsedEconOptions) {
		this.item = { ...item };
		this.itemName = new ItemName(this);
		this.fullEcon = hasAppData(this.item);

		this.tags = getTags(this);
		this.descriptions = getDescriptions(this);
		this.properties = getPropertyAttributes(this);
		this.nameAttrs = getNameAttributes(this);

		this.options = options;
	}

	get id(): string {
		return this.item.assetid;
	}

	/**
	 * Gets name from ECON.
	 * @return {string}
	 */
	get name(): string {
		return this.itemName.origin;
	}

	getImageURL(): string {
		return `https://steamcommunity-a.akamaihd.net/economy/image/${this.item.icon_url}/`;
	}

	getLargeImageURL(): string {
		return `https://steamcommunity-a.akamaihd.net/economy/image/${this.item.icon_url_large}/`;
	}

	/**
	 * Gets attributes that are included in the name.
	 */
	getNameAttributes({ inNumbers = false } = {}): ParsedEconNameAtributes {
		const texture = this.descriptions.texture || this.nameAttrs.texture;

		let attrs: ParsedEconNameAtributes = {
			tradable: this.properties.tradable,
			craftable: this.descriptions.craftable,
			quality: this.tags.quality,

			// Only append if exists
			...(texture ? { texture } : {}),
			...(this.tags.wear ? { wear: this.tags.wear } : {}),
			...(this.properties.elevated
				? { elevated: this.properties.elevated }
				: {}),
			...(this.nameAttrs.australium
				? { australium: this.nameAttrs.australium }
				: {}),
			...(this.descriptions.festivized
				? { festivized: this.descriptions.festivized }
				: {}),
			...(this.descriptions.effect
				? { effect: this.descriptions.effect }
				: {}),
			...(this.nameAttrs.isUniqueHat
				? { isUniqueHat: this.nameAttrs.isUniqueHat }
				: {}),
			...(this.descriptions.killstreak.value
				? { killstreak: this.descriptions.killstreak.value }
				: {}),
		};

		if (inNumbers) {
			const convertedAttributes = getConvertedIntAttributes(attrs);

			attrs.killstreak = convertedAttributes.killstreak;	
			attrs.wear = convertedAttributes.wear;
			attrs.effect = convertedAttributes.effect;
			attrs.quality = convertedAttributes.quality;
			attrs.texture = convertedAttributes.texture;
		};

		return removeUndefined(attrs) as ParsedEconNameAtributes;
	}

	getAttributes(): EconAttributes {
		return {
			...this.getNameAttributes(this.options),

			classes: this.tags.classes,
			type: this.tags.type,

			// Only append if exists
			...(this.tags.collection
				? { collection: this.tags.collection }
				: {}),
			...(this.tags.grade ? { grade: this.tags.grade } : {}),
			...(this.descriptions.paint ? { paint: this.descriptions.paint } : {}),

			parts: this.descriptions.parts,
			spells: this.descriptions.spells,

			marketable: this.properties.marketable,
			commodity: this.properties.commodity,
		};
	}
}

function removeUndefined<T extends object>(obj: T): NonNullable<T> {
	const newObj: object = {};

	const keys = Object.keys(obj);
	for (let i = 0; i < keys.length; i++) {
		const key: string|number = keys[i];

		// TODO: fix.
		// @ts-ignore
		const value: unknown = obj[key];
		// @ts-ignore
		if (value) newObj[key] = value;
	}

	return newObj as NonNullable<T>;
}
