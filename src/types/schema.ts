export type NameToDefindex = { [name: string]: number };
export type DefindexToName = { [defindex: number]: string };
export type SchemaEnum = NameToDefindex & DefindexToName;
export type ItemsGame = {
	items: Record<
		string,
		{ static_attrs?: { 'set supply crate series'?: string } }
	>;
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

	isUniqueHat(nameOrDefindex: string | number): boolean;
	getCrateNumber(defindex: string | number): number;

	isQualityException?(quality: number | string, name: string): boolean;
	isKitException?(name: string): boolean;
	isEffectException?(): boolean;
	isTextureException?(): boolean;

	/**
	 * Check if item is a unique hat excepception,
	 * which that `The ` prefix is not supposed to be removed.
	 * 
	 * @param name Name of the item
	 * @param exact If matching for exceptions should be exact or partial.
	 * @return Item is a unique hat exception, `The ` should stay
	 */
	isUniqueHatException?(name: string, exact?: boolean): boolean;
};
