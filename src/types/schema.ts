export type NameToDefindex = { [name: string]: number };
export type DefindexToName = { [defindex: number]: string };
export type SchemaEnum = NameToDefindex & DefindexToName;
export type ItemsGame = {
	items: Record<
		string,
		{ static_attrs?: { 'set supply crate series'?: string } }
	>;
};

export type SchemaItem = {
	name: string;
	defindex: number;
	item_class: string;
	item_type_name: string;
	item_name: string;
	proper_name: boolean | string | undefined;
};

/**
 * Injectable schema interface.
 */
export type ISchema = {
	getDefindex(search: number | string): number | null;
	getName(search: number | string): string;
	getEffectName(effect: number | string): string;
	getWearName(wear: number | string): string;
	getKillstreakName(killstreak: number | string): string;
	getTextureName(texture: number | string): string;
	getQualityName(quality: number | string): string;
	getEffectEnum(effect: number | string): number;
	getWearEnum(wear: number | string): number;
	getKillstreakEnum(killstreak: number | string): number;
	getTextureEnum(texture: number | string): number;
	getQualityEnum(quality: number | string): number;

	getTextures(): SchemaEnum;
	getEffects(): SchemaEnum;
	getItems(): SchemaItem[];

	isUniqueHat(nameOrDefindex: string | number): boolean;
	getCrateNumber(defindex: string | number): number;

	getVersion(): number;
};
