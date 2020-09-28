import { requireStatic, SchemaEnum, DefindexToName, SchemaItem } from 'tf2-static-schema';

import isNumber from '../util/isNumber';

class Schema {
	public effects!: SchemaEnum;
	public wears!: SchemaEnum;
	public killstreaks!: SchemaEnum;
	public textures!: SchemaEnum;
	public itemNames!: DefindexToName;
	public items!: SchemaItem[];
	public qualities!: SchemaEnum;

	constructor() {}

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

	getEffect(search: string|number): number|string {
		if (!this.effects) this.loadEffects();

		return this.effects[search];
	}

	getWear(search: string|number): number|string {
		if (!this.wears) this.loadWears();

		return this.wears[search];
	}

	getKillstreak(search: string|number): number|string {
		if (!this.killstreaks) this.loadKillstreaks();

		return this.killstreaks[search];
	}

	getTexture(search: string|number): number|string {
		if (!this.textures) this.loadTextures();

		return this.textures[search];
	}

	/**
	 * @todo https://github.com/Nicklason/tf2-automatic/blob/master/src/lib/items.ts
	 * @param {string} search
	 * @return {number}
	 */
	getDefindex(search: number|string): number|null {
		if (!this.items) this.loadDefindexes();
		if (typeof search === 'number') return search;

		let upgradeableDfx: number|null = null;
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

	getName(search: number|string): string {
		if (!this.itemNames) this.loadItemNames();
		if (!isNumber(search)) return search as string;

		return this.itemNames[search as number];
	}

	getQuality(search: number|string): number|string {
		if (!this.qualities) this.loadQualities();

		return this.qualities[search];
	}

	getEffectName(effect: number|string): string {
		if (!isNumber(effect)) return effect as string;

		return this.getEffect(effect as number) as string;
	}

	getWearName(wear: number|string): string {
		if (!isNumber(wear)) return wear as string;

		return this.getWear(wear as number) as string;
	}

	getKillstreakName(killstreak: number|string): string {
		if (!isNumber(killstreak)) return killstreak as string;

		return this.getKillstreak(killstreak as number) as string;
	}

	getTextureName(texture: number|string): string {
		if (!isNumber(texture)) return texture as string;

		return this.getTexture(texture as number) as string;
	}

	getQualityName(quality: number|string): string {
		if (!isNumber(quality)) return quality as string;

		return this.getQuality(quality as number) as string;
	}

	getEffectEnum(effect: number|string): number {
		if (isNumber(effect)) return effect as number;

		return this.getEffect(effect as string) as number;
	}

	getWearEnum(wear: number|string): number {
		if (isNumber(wear)) return wear as number;

		return this.getWear(wear as string) as number;
	}

	getKillstreakEnum(killstreak: number|string): number {
		if (isNumber(killstreak)) return killstreak as number;

		return this.getKillstreak(killstreak as string) as number;
	}

	getTextureEnum(texture: number|string): number {
		if (isNumber(texture)) return texture as number;

		return this.getTexture(texture as string) as number;
	}

	getQualityEnum(quality: number|string): number {
		if (isNumber(quality)) return quality as number;

		return this.getQuality(quality as string) as number;
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
