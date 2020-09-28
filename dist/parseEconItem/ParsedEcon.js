"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemName_1 = __importDefault(require("./ParsedEcon/ItemName"));
const hasAppData_1 = __importDefault(require("./ParsedEcon/hasAppData"));
const getTags_1 = __importDefault(require("./ParsedEcon/getTags"));
const getPropertyAttributes_1 = __importDefault(require("./ParsedEcon/getPropertyAttributes"));
const getNameAttributes_1 = __importDefault(require("./ParsedEcon/getNameAttributes"));
const getDescriptions_1 = __importDefault(require("./ParsedEcon/getDescriptions"));
const getConvertedIntAttributes_1 = __importDefault(require("../shared/getConvertedIntAttributes"));
/**
 * Parser class.
 */
class ParsedEcon {
    constructor(item, options) {
        this.item = Object.assign({}, item);
        this.itemName = new ItemName_1.default(this);
        this.fullEcon = hasAppData_1.default(this.item);
        this.tags = getTags_1.default(this);
        this.descriptions = getDescriptions_1.default(this);
        this.properties = getPropertyAttributes_1.default(this);
        this.nameAttrs = getNameAttributes_1.default(this);
        this.options = options;
    }
    get id() {
        return this.item.assetid;
    }
    /**
     * Gets name from ECON.
     * @return {string}
     */
    get name() {
        return this.itemName.origin;
    }
    getImageURL() {
        return `https://steamcommunity-a.akamaihd.net/economy/image/${this.item.icon_url}/`;
    }
    getLargeImageURL() {
        return `https://steamcommunity-a.akamaihd.net/economy/image/${this.item.icon_url_large}/`;
    }
    /**
     * Gets attributes that are included in the name.
     */
    getNameAttributes({ inNumbers = false } = {}) {
        const texture = this.descriptions.texture || this.nameAttrs.texture;
        let attrs = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ tradable: this.properties.tradable, craftable: this.descriptions.craftable, quality: this.tags.quality }, (texture ? { texture } : {})), (this.tags.wear ? { wear: this.tags.wear } : {})), (this.properties.elevated
            ? { elevated: this.properties.elevated }
            : {})), (this.nameAttrs.australium
            ? { australium: this.nameAttrs.australium }
            : {})), (this.descriptions.festivized
            ? { festivized: this.descriptions.festivized }
            : {})), (this.descriptions.effect
            ? { effect: this.descriptions.effect }
            : {})), (this.nameAttrs.isUniqueHat
            ? { isUniqueHat: this.nameAttrs.isUniqueHat }
            : {})), (this.descriptions.killstreak.value
            ? { killstreak: this.descriptions.killstreak.value }
            : {}));
        if (inNumbers) {
            const convertedAttributes = getConvertedIntAttributes_1.default(attrs);
            attrs.killstreak = convertedAttributes.killstreak;
            attrs.wear = convertedAttributes.wear;
            attrs.effect = convertedAttributes.effect;
            attrs.quality = convertedAttributes.quality;
            attrs.texture = convertedAttributes.texture;
        }
        ;
        return removeUndefined(attrs);
    }
    getAttributes() {
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getNameAttributes(this.options)), { classes: this.tags.classes, type: this.tags.type }), (this.tags.collection
            ? { collection: this.tags.collection }
            : {})), (this.tags.grade ? { grade: this.tags.grade } : {})), (this.descriptions.paint ? { paint: this.descriptions.paint } : {})), { parts: this.descriptions.parts, spells: this.descriptions.spells, marketable: this.properties.marketable, commodity: this.properties.commodity });
    }
}
exports.default = ParsedEcon;
function removeUndefined(obj) {
    const newObj = {};
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        // TODO: fix.
        // @ts-ignore
        const value = obj[key];
        // @ts-ignore
        if (value)
            newObj[key] = value;
    }
    return newObj;
}
