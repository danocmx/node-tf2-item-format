import ItemName from './ParsedEcon/ItemName';

import hasAppData from './ParsedEcon/hasAppData';

import getTags from './ParsedEcon/getTags';
import getPropertyAttributes from './ParsedEcon/getPropertyAttributes';
import getNameAttributes from './ParsedEcon/getNameAttributes';
import getDescriptions from './ParsedEcon/getDescriptions';
import getDefindex from './ParsedEcon/getDefindex';
import getLevel from './ParsedEcon/getLevel';
import getCrateNumber from './ParsedEcon/getCrateNumber';
import getUses from './ParsedEcon/getUses';

import getConvertedIntAttributes from '../shared/getConvertedIntAttributes';
import getDefindexes from '../shared/getDefindexes';
import { hasDefindex } from '../shared/guards';

import {
	EconItem,
	TagAttributes,
	DescriptionAttributes,
	PropertyAttributes,
	NameAttributes,
	ParsedEconNameAtributes,
	ItemDefindexes,
	ItemAttributesInNumbers,
	PlaceholderEconNameAttributes,
	MetaEconAttributes,
	ItemNumber,
} from '../types';
import { ISchema } from '../types/schema';
import { EconOptions } from '../types/econ';

/**
 * Parser class.
 * @todo Remove this entirely with better types.
 */
export default class ParsedEcon {
	public schema: ISchema;
	public item: EconItem;
	public itemName: ItemName;
	public fullEcon: boolean;
	public tags: TagAttributes;
	public descriptions: DescriptionAttributes;
	public properties: PropertyAttributes;
	public nameAttrs: NameAttributes;
	public trueDefindex: number;
	public level: number;
	public options: EconOptions;
	public crateNumber: number;
	public uses?: number;

	constructor(schema: ISchema, item: EconItem, options: EconOptions) {
		this.schema = schema;
		this.item = { ...item };
		this.options = options;
		this.itemName = new ItemName(this);
		this.fullEcon = hasAppData(this.item);

		this.tags = getTags(this);
		this.descriptions = getDescriptions(this);
		this.properties = getPropertyAttributes(this);
		this.nameAttrs = getNameAttributes(this);
		this.trueDefindex = getDefindex(this);
		this.level = getLevel(this);
		this.crateNumber = getCrateNumber(this);
		this.uses = getUses(this);
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
	getNameAttributes(
		name: string,
		inNumbers: false,
		useDefindexes: true
	): ParsedEconNameAtributes & ItemDefindexes;
	getNameAttributes(
		name: string,
		inNumbers: false,
		useDefindexes: false
	): ParsedEconNameAtributes;
	getNameAttributes(
		name: string,
		inNumbers: true,
		useDefindexes: true
	): ParsedEconNameAtributes & ItemDefindexes & ItemAttributesInNumbers;
	getNameAttributes(
		name: string,
		inNumbers: true,
		useDefindexes: false
	): ParsedEconNameAtributes & ItemAttributesInNumbers;
	getNameAttributes(
		name: string,
		inNumbers: boolean,
		useDefindexes: boolean
	): ParsedEconNameAtributes {
		const texture = this.descriptions.texture || this.nameAttrs.texture;
		const itemNumber = this.getItemNumber();

		let attrs: PlaceholderEconNameAttributes = {
			tradable: this.properties.tradable,
			craftable: this.descriptions.craftable,
			quality: this.tags.quality,

			// Only append if exists
			...(hasDefindex(texture) ? { texture } : {}),
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

			...(this.nameAttrs.target ? { target: this.nameAttrs.target } : {}),
			...(this.nameAttrs.output ? { output: this.nameAttrs.output } : {}),
			...(this.nameAttrs.outputQuality
				? { outputQuality: this.nameAttrs.outputQuality }
				: {}),

			...(itemNumber ? { itemNumber } : {}),
		};

		if (inNumbers) {
			const convertedAttributes = getConvertedIntAttributes(
				this.schema,
				name,
				attrs
			);

			attrs.killstreak = convertedAttributes.killstreak;
			attrs.wear = convertedAttributes.wear;
			attrs.effect = convertedAttributes.effect;
			attrs.quality = convertedAttributes.quality;
			attrs.texture = convertedAttributes.texture;
			attrs.outputQuality = convertedAttributes.outputQuality;
		}

		if (useDefindexes) {
			// Add them here.
			const defindexes = getDefindexes(
				this.schema,
				name as string,
				this.nameAttrs.output || this.nameAttrs.target
					? {
							target: this.nameAttrs.target as string,
							output: this.nameAttrs.output,
							outputQuality: this.nameAttrs.outputQuality,
					  }
					: undefined
			);

			if (this.options.useTrueDefindex && this.trueDefindex !== -1) {
				attrs.defindex = this.trueDefindex;
			} else if (hasDefindex(defindexes.defindex))
				attrs.defindex = defindexes.defindex;

			if (hasDefindex(defindexes.outputDefindex))
				attrs.outputDefindex = defindexes.outputDefindex;
			if (hasDefindex(defindexes.targetDefindex))
				attrs.targetDefindex = defindexes.targetDefindex;
		}

		const cleanAttrs = removeUndefined(attrs);
		if (hasDefindex(attrs.texture)) {
			cleanAttrs.texture = attrs.texture;
		}
		if (hasDefindex(attrs.defindex)) {
			cleanAttrs.defindex = attrs.defindex;
		}
		if (hasDefindex(attrs.outputDefindex)) {
			cleanAttrs.outputDefindex = attrs.outputDefindex;
		}
		if (hasDefindex(attrs.targetDefindex)) {
			cleanAttrs.targetDefindex = attrs.targetDefindex;
		}
		if (hasDefindex(attrs.quality)) {
			cleanAttrs.quality = attrs.quality;
		}

		cleanAttrs.craftable = attrs.craftable;

		return cleanAttrs as ParsedEconNameAtributes;
	}

	getAttributes(
		shortName: string,
		inNumbers: false,
		useDefindexes: true
	): ParsedEconNameAtributes & ItemDefindexes & MetaEconAttributes;
	getAttributes(
		shortName: string,
		inNumbers: true,
		useDefindexes: false
	): ParsedEconNameAtributes & ItemAttributesInNumbers & MetaEconAttributes;
	getAttributes(
		shortName: string,
		inNumbers: true,
		useDefindexes: true
	): ParsedEconNameAtributes &
		ItemDefindexes &
		ItemAttributesInNumbers &
		MetaEconAttributes;
	getAttributes(
		shortName: string,
		inNumbers: false,
		useDefindexes: false
	): ParsedEconNameAtributes & MetaEconAttributes;
	getAttributes(
		shortName: string,
		inNumbers: boolean,
		useDefindexes: boolean
	): any {
		// Types are silent now.
		let attributes: any;
		if (inNumbers === true) {
			if (useDefindexes)
				attributes = this.getNameAttributes(shortName, true, true);
			else attributes = this.getNameAttributes(shortName, true, false);
		} else if (useDefindexes === true) {
			attributes = this.getNameAttributes(shortName, false, true);
		} else {
			attributes = this.getNameAttributes(shortName, false, false);
		}

		return {
			...attributes,

			level: this.level,
			classes: this.tags.classes,
			type: this.tags.type,

			...(this.descriptions.killstreak.killstreaker
				? { killstreaker: this.descriptions.killstreak.killstreaker }
				: {}),

			...(this.descriptions.killstreak.sheen
				? { sheen: this.descriptions.killstreak.sheen }
				: {}),

			// Only append if exists
			...(this.tags.collection
				? { collection: this.tags.collection }
				: {}),
			...(this.tags.grade ? { grade: this.tags.grade } : {}),
			...(this.descriptions.paint
				? {
						paint: this.descriptions.paint,
						...(useDefindexes
							? {
									paintDefindex: this.schema.getDefindex(
										this.descriptions.paint
									),
							  }
							: {}),
				  }
				: {}),

			parts: this.descriptions.parts,
			spells: this.descriptions.spells,

			marketable: this.properties.marketable,
			commodity: this.properties.commodity,

			...(this.uses ? { uses: this.uses } : {}),
		};
	}

	private getItemNumber(): ItemNumber | void {
		if (this.nameAttrs.itemNumber || this.descriptions.itemNumber)
			return this.nameAttrs.itemNumber || this.descriptions.itemNumber;

		if (this.crateNumber) {
			return {
				value: this.crateNumber,
				type: 'crate',
			};
		}
	}
}

/**
 * Fix.
 */
function removeUndefined<T extends object>(obj: T): NonNullable<T> {
	const newObj: object = {};

	const keys = Object.keys(obj);
	for (let i = 0; i < keys.length; i++) {
		const key: string | number = keys[i];

		// TODO: fix.
		// @ts-ignore
		const value: unknown = obj[key];
		// @ts-ignore
		if (value) newObj[key] = value;
	}

	return newObj as NonNullable<T>;
}
