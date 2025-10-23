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

	public kitExceptions!: string[];

	private getKitExceptions(): string[] {
		if (this.kitExceptions) {
			return this.kitExceptions;
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

		const effectKitExceptions = Object.keys(this.effects).filter((effect) =>
			effect.includes('Kit')
		);

		const textureKitExceptions = Object.keys(this.textures).filter(
			(texture) => texture.includes('Kit')
		);

		const nameKitExceptions = this.items
			.filter((item) => {
				return (
					// Exclude killstreak kits
					item.item_name !== 'Kit' && item.item_name.includes('Kit')
				);
			})
			.map((item) => item.item_name);

		this.kitExceptions = [
			...effectKitExceptions,
			...textureKitExceptions,
			...nameKitExceptions,
		];

		return this.kitExceptions;
	}

	isKitException(name: string): boolean {
		return this.getKitExceptions().some((exception) =>
			name.includes(exception)
		);
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

	protected effectExceptionsLoaded = false;
	public itemEffectExceptions: Record<string, string[]> = {};
	public effectEffectExceptions: Record<string, string[]> = {};
	public textureEffectExceptions: Record<string, string[]> = {};

	private loadEffectExceptions() {
		if (!this.items) {
			this.loadDefindexes();
		}

		if (!this.textures) {
			this.loadTextures();
		}

		if (!this.effects) {
			this.loadEffects();
		}

		for (const effect of Object.keys(this.effects)) {
			if (isNumber(effect)) {
				continue;
			}

			const items = this.items
				.filter((i) => i.item_name.includes(`${effect} `))
				.map((i) => i.item_name);

			if (items.length > 0) {
				this.itemEffectExceptions[effect] = items;
			}
		}

		for (const effect1 of Object.keys(this.effects)) {
			if (isNumber(effect1)) {
				continue;
			}

			for (const effect2 of Object.keys(this.effects)) {
				if (isNumber(effect2)) {
					continue;
				}

				// It has to be distinct word in said effect
				if (
					effect2.startsWith(`${effect1} `) ||
					effect2.includes(` ${effect1} `) ||
					effect2.endsWith(` ${effect1}`)
				) {
					if (this.effectEffectExceptions[effect1]) {
						this.effectEffectExceptions[effect1].push(effect2);
					} else {
						this.effectEffectExceptions[effect1] = [effect2];
					}
				}
			}
		}

		for (const effect of Object.keys(this.effects)) {
			if (isNumber(effect)) {
				continue;
			}

			for (const texture of Object.keys(this.textures)) {
				if (isNumber(texture)) {
					continue;
				}

				if (texture.includes(effect)) {
					if (this.textureEffectExceptions[effect]) {
						this.textureEffectExceptions[effect].push(texture);
					} else {
						this.textureEffectExceptions[effect] = [texture];
					}
				}
			}
		}
	}

	public isEffectException(
		effect: string,
		name: string,
		hasWear: boolean
	): [boolean, string | null] {
		if (!this.effectExceptionsLoaded) {
			this.loadEffectExceptions();

			this.effectExceptionsLoaded = true;
		}

		if (this.effectEffectExceptions[effect]) {
			for (const overlappingEffect of this.effectEffectExceptions[
				effect
			]) {
				if (name.includes(`${overlappingEffect} `)) {
					const [canUseOverlap, _] = this.isEffectException(
						overlappingEffect,
						name,
						hasWear
					);

					if (canUseOverlap) {
						return [true, null];
					} else {
						return [true, overlappingEffect];
					}
				}
			}
		}

		if (this.textureEffectExceptions[effect] && !!hasWear) {
			for (const texture of this.textureEffectExceptions[effect]) {
				if (name.includes(`${texture} `)) {
					return [true, null];
				}
			}
		}

		if (this.itemEffectExceptions[effect]) {
			for (const item of this.itemEffectExceptions[effect]) {
				if (name.includes(item)) {
					// TODO: Maybe rather look for multiple occurences of `${effect} `
					return [!name.includes(`${effect} ${effect} `), null];
				}
			}
		}

		return [false, null];
	}

	protected textureExceptionsLoaded = false;
	public itemTextureExceptions: Record<string, string[]> = {};
	public effectTextureExceptions: Record<string, string[]> = {};
	public textureTextureExceptions: Record<string, string[]> = {};

	private loadTextureExceptions() {
		if (!this.items) {
			this.loadDefindexes();
		}

		if (!this.textures) {
			this.loadTextures();
		}

		if (!this.effects) {
			this.loadEffects();
		}

		for (const textures of Object.keys(this.textures)) {
			if (isNumber(textures)) {
				continue;
			}

			const items = this.items
				.filter((i) => i.item_name.includes(`${textures} `))
				.map((i) => i.item_name);

			if (items.length > 0) {
				this.itemTextureExceptions[textures] = items;
			}
		}

		for (const texture1 of Object.keys(this.textures)) {
			if (isNumber(texture1)) {
				continue;
			}

			for (const texture2 of Object.keys(this.textures)) {
				if (isNumber(texture2)) {
					continue;
				}

				// It has to be distinct word in said texture
				if (
					texture2.startsWith(`${texture1} `) ||
					texture2.includes(` ${texture1} `) ||
					texture2.endsWith(` ${texture1}`)
				) {
					if (this.textureTextureExceptions[texture1]) {
						this.textureTextureExceptions[texture1].push(texture2);
					} else {
						this.textureTextureExceptions[texture1] = [texture2];
					}
				}
			}
		}

		for (const texture of Object.keys(this.textures)) {
			if (isNumber(texture)) {
				continue;
			}

			for (const effect of Object.keys(this.effects)) {
				if (isNumber(texture)) {
					continue;
				}

				if (effect.includes(texture)) {
					if (this.effectTextureExceptions[texture]) {
						this.effectTextureExceptions[texture].push(effect);
					} else {
						this.effectTextureExceptions[texture] = [effect];
					}
				}
			}
		}
	}

	public isTextureException(
		texture: string,
		name: string,
		hasWear: boolean
	): [boolean, string | null] {
		if (!this.textureExceptionsLoaded) {
			this.loadTextureExceptions();

			this.textureExceptionsLoaded = true;
		}

		if (this.textureTextureExceptions[texture]) {
			for (const overlappingTexture of this.textureTextureExceptions[
				texture
			]) {
				if (name.includes(`${overlappingTexture} `)) {
					const [canUseOverlap, _] = this.isEffectException(
						overlappingTexture,
						name,
						hasWear
					);

					if (canUseOverlap) {
						return [true, null];
					} else {
						return [true, overlappingTexture];
					}
				}
			}
		}

		if (this.effectTextureExceptions[texture] && !hasWear) {
			for (const effect of this.effectTextureExceptions[texture]) {
				if (name.includes(`${effect} `)) {
					return [true, null];
				}
			}
		}

		if (this.itemTextureExceptions[texture]) {
			for (const item of this.itemTextureExceptions[texture]) {
				if (name.includes(item)) {
					return [!name.includes(`${texture} ${texture} `), null];
				}
			}
		}

		return [false, null];
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
