"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tf2_static_schema_1 = require("tf2-static-schema");
const isNumber_1 = __importDefault(require("../util/isNumber"));
const DEFINDEXES = {
    // Local naming
    'Strangifier Chemistry Set': 20000,
    'Specialized Killstreak Kit Fabricator': 20002,
    'Professional Killstreak Kit Fabricator': 20003,
    'Chemistry Set': 20005,
    'Mann Co. Supply Crate Key': 5021,
    'Lugermorph': 160
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
class Schema {
    constructor() { }
    loadEffects() {
        this.effects = tf2_static_schema_1.requireStatic('effects');
    }
    loadWears() {
        this.wears = tf2_static_schema_1.requireStatic('wears');
    }
    loadKillstreaks() {
        this.killstreaks = tf2_static_schema_1.requireStatic('killstreaks');
    }
    loadTextures() {
        this.textures = tf2_static_schema_1.requireStatic('paint-kits');
    }
    loadItemNames() {
        this.itemNames = tf2_static_schema_1.requireStatic('item-names');
    }
    loadDefindexes() {
        this.items = tf2_static_schema_1.requireStatic('items');
    }
    loadQualities() {
        this.qualities = tf2_static_schema_1.requireStatic('qualities');
    }
    getEffect(search) {
        if (!this.effects)
            this.loadEffects();
        return this.effects[search];
    }
    getWear(search) {
        if (!this.wears)
            this.loadWears();
        return this.wears[search];
    }
    getKillstreak(search) {
        if (!this.killstreaks)
            this.loadKillstreaks();
        return this.killstreaks[search];
    }
    getTexture(search) {
        if (!this.textures)
            this.loadTextures();
        return this.textures[search];
    }
    /**
     * @todo https://github.com/Nicklason/tf2-automatic/blob/master/src/lib/items.ts
     * @param {string} search
     * @return {number}
     */
    getDefindex(search) {
        if (!this.items)
            this.loadDefindexes();
        if (typeof search === 'number')
            return search;
        // Exceptions
        if (DEFINDEXES[search])
            return DEFINDEXES[search];
        // TODO: Handle promo items.
        let upgradeableDfx = null;
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const name = selectName(item);
            if (name === search) {
                if (!hasUpgradeable(item) || isUpgradeable(item.name)) {
                    return item.defindex;
                }
                upgradeableDfx = item.defindex;
            }
        }
        return upgradeableDfx;
    }
    getName(search) {
        if (!this.itemNames)
            this.loadItemNames();
        if (!isNumber_1.default(search))
            return search;
        return this.itemNames[search];
    }
    getQuality(search) {
        if (!this.qualities)
            this.loadQualities();
        return this.qualities[search];
    }
    getEffectName(effect) {
        if (!isNumber_1.default(effect))
            return effect;
        return this.getEffect(effect);
    }
    getWearName(wear) {
        if (!isNumber_1.default(wear))
            return wear;
        return this.getWear(wear);
    }
    getKillstreakName(killstreak) {
        if (!isNumber_1.default(killstreak))
            return killstreak;
        return this.getKillstreak(killstreak);
    }
    getTextureName(texture) {
        if (!isNumber_1.default(texture))
            return texture;
        // fixWarPaintDefindex
        return this.getTexture(texture);
    }
    getQualityName(quality) {
        if (!isNumber_1.default(quality))
            return quality;
        return this.getQuality(quality);
    }
    getEffectEnum(effect) {
        if (isNumber_1.default(effect))
            return effect;
        return this.getEffect(effect);
    }
    getWearEnum(wear) {
        if (isNumber_1.default(wear))
            return wear;
        return this.getWear(wear);
    }
    getKillstreakEnum(killstreak) {
        if (isNumber_1.default(killstreak))
            return killstreak;
        return this.getKillstreak(killstreak);
    }
    getTextureEnum(texture) {
        if (isNumber_1.default(texture))
            return texture;
        return parseInt(this.getTexture(texture));
    }
    getQualityEnum(quality) {
        if (isNumber_1.default(quality))
            return quality;
        return this.getQuality(quality);
    }
}
/**
 * @todo get from schema
 * @param {object} item
 * @return {string}
 */
function selectName(item) {
    if (item.item_name === 'Kit')
        return item.item_type_name;
    // Due to BackpackTF naming colisions.
    if (item.defindex === 20003)
        return 'Professional Killstreak Fabricator';
    if (item.defindex === 20002)
        return 'Specialized Killstreak Fabricator';
    return item.item_name;
}
function isUpgradeable(name) {
    return name.startsWith('Upgradeable ');
}
function hasUpgradeable(item) {
    return item.name.includes(item.item_class.toUpperCase());
}
exports.default = new Schema();
