import { requireStatic, SchemaEnum, DefindexToName } from 'tf2-static-schema';

import isNumber from '../util/isNumber';
import { ISchema, ItemsGame, SchemaItem } from '../types/schema';

const DEFINDEXES: { [name: string]: number } = {
	// Local naming
	'Strangifier Chemistry Set': 20000,
	'Specialized Killstreak Kit Fabricator': 20002,
	'Professional Killstreak Kit Fabricator': 20003,
	'Chemistry Set': 20005,
	'Mann Co. Supply Crate Key': 5021,
	Lugermorph: 160,

	/**
	 * Old keys, list might be incomplete.
	 */
	'Festive Winter Crate Key': 5049,
	'Refreshing Summer Cooler Key': 5067,
	'Naughty Winter Crate Key': 5072,
	'Nice Winter Crate Key': 5073,
	'Scorched Key': 5079,
	'Fall Key': 5081,
	'Eerie Key': 5628,
	'Naughty Winter Crate Key 2012': 5631,
	'Nice Winter Crate Key 2012': 5632,
	'Spooky Key': 5713,
	'Naughty Winter Crate Key 2013': 5716,
	'Nice Winter Crate Key 2013': 5717,
	'Limited Late Summer Crate Key': 5762,
	'Naughty Winter Crate Key 2014': 5791,
	'Nice Winter Crate Key 2014': 5792,

	// "'Decorated War Hero' War Paint Civilian Grade Keyless Case": 18000,
	// "'Decorated War Hero' War Paint Freelance Grade Keyless Case": 18001,
	// "'Decorated War Hero' War Paint Mercenary Grade Keyless Case": 18002,
	// "'Contract Campaigner' War Paint\nCivilian Grade Keyless Case": 18003,
	// "'Contract Campaigner' War Paint\nFreelance Grade Keyless Case": 18004,
	// "'Contract Campaigner' War Paint\nMercenary Grade Keyless Case": 18005,
};

const NAMES: { [defindex: number]: string } = {
	160: 'Lugermorph',
	5021: 'Mann Co. Supply Crate Key',
	5049: 'Festive Winter Crate Key',
	5067: 'Refreshing Summer Cooler Key',
	5072: 'Naughty Winter Crate Key',
	5073: 'Nice Winter Crate Key',
	5079: 'Scorched Key',
	5081: 'Fall Key',
	5628: 'Eerie Key',
	5631: 'Naughty Winter Crate Key 2012',
	5632: 'Nice Winter Crate Key 2012',
	5713: 'Spooky Key',
	5716: 'Naughty Winter Crate Key 2013',
	5717: 'Nice Winter Crate Key 2013',
	5762: 'Limited Late Summer Crate Key',
	5791: 'Naughty Winter Crate Key 2014',
	5792: 'Nice Winter Crate Key 2014',
	20000: 'Strangifier Chemistry Set',
	20005: 'Chemistry Set',
	// 18000: "'Decorated War Hero' War Paint\nCivilian Grade Keyless Case",
	// 18001: "'Decorated War Hero' War Paint\nFreelance Grade Keyless Case",
	// 18002: "'Decorated War Hero' War Paint\nMercenary Grade Keyless Case",
	// 18003: "'Contract Campaigner' War Paint\nCivilian Grade Keyless Case",
	// 18004: "'Contract Campaigner' War Paint\nFreelance Grade Keyless Case",
	// 18005: "'Contract Campaigner' War Paint\nMercenary Grade Keyless Case",
};

/* TODO: Set boundaries between these.
	"20000":"Chemistry Set",
	"20001":"Chemistry Set",
	"20005":"Chemistry Set",
	"20006":"Chemistry Set",
	"20007":"Chemistry Set",
	"20008":"Chemistry Set",
	"20009":"Chemistry Set"
*/

export class Schema implements ISchema {
	public effects!: SchemaEnum;
	public wears!: SchemaEnum;
	public killstreaks!: SchemaEnum;
	public textures!: SchemaEnum;
	public itemNames!: DefindexToName;
	public items!: SchemaItem[];
	public qualities!: SchemaEnum;
	public itemsGame!: ItemsGame;

	constructor() {}

	getVersion(): number {
		return 1; // Never changes during runtime
	}

	getTextures() {
		if (!this.textures) this.loadTextures();

		return this.textures;
	}

	getEffects() {
		if (!this.effects) this.loadEffects();

		return this.effects;
	}

	getItems(): SchemaItem[] {
		if (!this.items) this.loadDefindexes();

		return this.items;
	}

	loadEffects(): void {
		this.effects = requireStatic('effects') as SchemaEnum;
	}

	loadWears(): void {
		this.wears = requireStatic('wears') as SchemaEnum;
	}

	loadKillstreaks(): void {
		this.killstreaks = requireStatic('killstreaks') as SchemaEnum;
	}

	loadTextures(): void {
		this.textures = requireStatic('paint-kits') as SchemaEnum;
	}

	loadItemNames(): void {
		this.itemNames = requireStatic('item-names') as DefindexToName;
	}

	loadDefindexes(): void {
		this.items = requireStatic('items') as SchemaItem[];
	}

	loadQualities(): void {
		this.qualities = requireStatic('qualities') as SchemaEnum;
	}

	loadItemsGame(): void {
		this.itemsGame = requireStatic('items-game') as ItemsGame;
	}

	getEffect(search: string | number): number | string {
		if (!this.effects) this.loadEffects();

		return this.effects[search];
	}

	getWear(search: string | number): number | string {
		if (!this.wears) this.loadWears();

		return this.wears[search];
	}

	getKillstreak(search: string | number): number | string {
		if (!this.killstreaks) this.loadKillstreaks();

		return this.killstreaks[search];
	}

	getTexture(search: string | number): number | string {
		if (!this.textures) this.loadTextures();

		return this.textures[search];
	}

	/**
	 * @todo https://github.com/Nicklason/tf2-automatic/blob/master/src/lib/items.ts
	 * @param {string} search
	 * @return {number}
	 */
	getDefindex(search: number | string): number | null {
		if (!this.items) this.loadDefindexes();
		if (typeof search === 'number') return search;

		// Exceptions
		if (DEFINDEXES[search]) return DEFINDEXES[search];

		let upgradeableDfx: number | null = null;
		for (let i = 0; i < this.items.length; i++) {
			const item: SchemaItem = this.items[i];
			const name: string = selectName(item);
			if (name === search) {
				if (!hasUpgradeable(item) || isUpgradeable(item.name)) {
					return item.defindex;
				}

				upgradeableDfx = item.defindex;
			}
		}

		return upgradeableDfx;
	}

	getName(search: number | string): string {
		if (!this.itemNames) this.loadItemNames();
		if (!isNumber(search)) return search as string;
		const name = NAMES[search];
		if (name) return name;

		return this.itemNames[search as number];
	}

	getQuality(search: number | string): number | string {
		if (!this.qualities) this.loadQualities();

		return this.qualities[search];
	}

	getEffectName(effect: number | string): string {
		if (!isNumber(effect)) return effect as string;

		return this.getEffect(effect as number) as string;
	}

	getWearName(wear: number | string): string {
		if (!isNumber(wear)) return wear as string;

		return this.getWear(wear as number) as string;
	}

	getKillstreakName(killstreak: number | string): string {
		if (!isNumber(killstreak)) return killstreak as string;

		return this.getKillstreak(killstreak as number) as string;
	}

	getTextureName(texture: number | string): string {
		if (!isNumber(texture)) return texture as string;

		return this.getTexture(texture as number) as string;
	}

	getQualityName(quality: number | string): string {
		if (!isNumber(quality)) return quality as string;

		return this.getQuality(quality as number) as string;
	}

	getEffectEnum(effect: number | string): number {
		if (isNumber(effect)) return effect as number;

		return this.getEffect(effect as string) as number;
	}

	getWearEnum(wear: number | string): number {
		if (isNumber(wear)) return wear as number;

		return this.getWear(wear as string) as number;
	}

	getKillstreakEnum(killstreak: number | string): number {
		if (isNumber(killstreak)) return killstreak as number;

		return this.getKillstreak(killstreak as string) as number;
	}

	getTextureEnum(texture: number | string): number {
		if (isNumber(texture)) return texture as number;

		return parseInt(this.getTexture(texture as string) as string);
	}

	getQualityEnum(quality: number | string): number {
		if (isNumber(quality)) return quality as number;

		return this.getQuality(quality as string) as number;
	}

	isUniqueHat(defindexOrName: string | number): boolean {
		if (isNumber(defindexOrName)) {
			defindexOrName = this.getName(defindexOrName);
		}

		const item = this.getSchemaItemFromName(defindexOrName);
		return !!item?.proper_name;
	}

	getCrateNumber(defindexOrName: string | number): number {
		if (!this.itemsGame) this.loadItemsGame();

		if (!isNumber(defindexOrName)) {
			const defindex = this.getDefindex(defindexOrName);
			if (!defindex) return 0;
			defindexOrName = defindex;
		}

		const item = this.itemsGame.items[defindexOrName + ''];
		if (!item) return 0;

		const crateSeries = parseInt(
			(item.static_attrs &&
				item.static_attrs['set supply crate series']) as string
		);

		return isNaN(crateSeries) ? 0 : crateSeries;
	}

	private getSchemaItemFromName(search: string) {
		if (!this.items) this.loadDefindexes();

		let byDefindex: number = 0;
		if (DEFINDEXES[search]) {
			byDefindex = DEFINDEXES[search];
		}

		let correctItem: SchemaItem | null = null;
		for (let i = 0; i < this.items.length; i++) {
			const item: SchemaItem = this.items[i];
			const name: string = selectName(item);
			if (byDefindex ? byDefindex === item.defindex : name === search) {
				if (!hasUpgradeable(item) || isUpgradeable(item.name)) {
					return item;
				}

				correctItem = item;
			}
		}

		return correctItem;
	}

	public uniqueHatExceptions!: string[];

	private getUniqueHatExceptions(): string[] {
		if (this.uniqueHatExceptions) {
			return this.uniqueHatExceptions;
		}

		if (!this.items) {
			this.loadDefindexes();
		}

		this.uniqueHatExceptions = this.items
			.filter((item) => item.item_name.startsWith('The '))
			.map((item) => item.item_name);

		return this.uniqueHatExceptions;
	}

	isUniqueHatException(name: string, exact: boolean): boolean {
		const exceptions = this.getUniqueHatExceptions();

		if (!exact) {
			return exceptions.some((item) => name.startsWith(item));
		}

		return exceptions.includes(name);
	}

	public qualityExceptions: Record<string, string[]> = {};

	private getQualityExceptions(quality: string): string[] {
		if (this.qualityExceptions[quality]) {
			return this.qualityExceptions[quality];
		}

		if (!this.items) {
			this.loadDefindexes();
		}

		if (!this.textures) {
			this.loadTextures();
		}

		if (!this.effects) {
			this.loadEffects();
		}

		const effectExceptionsForQuality = Object.keys(this.effects).filter(
			(effect) => effect.includes(quality)
		);

		const textureExceptionsForQuality = Object.keys(this.textures).filter(
			(texture) => texture.includes(quality)
		);

		const nameExceptionsForQuality = this.items
			.filter((item) => item.item_name.includes(`${quality} `))
			.map((item) => item.item_name);

		this.qualityExceptions[quality] = [
			...effectExceptionsForQuality,
			...textureExceptionsForQuality,
			...nameExceptionsForQuality,
		];

		return this.qualityExceptions[quality];
	}

	isQualityException(quality: number | string, name: string): boolean {
		const qualityName = this.getQualityName(quality);

		return this.getQualityExceptions(qualityName).some((e) =>
			name.includes(e)
		);
	}
}

/**
 * @todo get from schema
 * @param {object} item
 * @return {string}
 */
function selectName(item: SchemaItem): string {
	if (item.item_name === 'Kit') return item.item_type_name;
	// Due to BackpackTF naming colisions.
	if (item.defindex === 20003) return 'Professional Killstreak Fabricator';
	if (item.defindex === 20002) return 'Specialized Killstreak Fabricator';
	return item.item_name;
}

function isUpgradeable(name: string): boolean {
	return name.startsWith('Upgradeable ');
}

function hasUpgradeable(item: SchemaItem): boolean {
	return item.name.includes(item.item_class.toUpperCase());
}

export default new Schema();
