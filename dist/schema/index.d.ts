import { SchemaEnum, DefindexToName, SchemaItem } from 'tf2-static-schema';
declare class Schema {
    effects: SchemaEnum;
    wears: SchemaEnum;
    killstreaks: SchemaEnum;
    textures: SchemaEnum;
    itemNames: DefindexToName;
    items: SchemaItem[];
    qualities: SchemaEnum;
    constructor();
    loadEffects(): void;
    loadWears(): void;
    loadKillstreaks(): void;
    loadTextures(): void;
    loadItemNames(): void;
    loadDefindexes(): void;
    loadQualities(): void;
    getEffect(search: string | number): number | string;
    getWear(search: string | number): number | string;
    getKillstreak(search: string | number): number | string;
    getTexture(search: string | number): number | string;
    /**
     * @todo https://github.com/Nicklason/tf2-automatic/blob/master/src/lib/items.ts
     * @param {string} search
     * @return {number}
     */
    getDefindex(search: number | string): number | null;
    getName(search: number | string): string;
    getQuality(search: number | string): number | string;
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
}
declare const _default: Schema;
export default _default;
