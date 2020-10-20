"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./shared/schema"));
const stringify_1 = __importDefault(require("./stringify"));
const guards_1 = require("./types/guards");
/**
 * Creates a listing object that you can sent to backpack.tf
 * @todo work with SKU attributes
 */
function default_1(item) {
    let name;
    if (guards_1.skuTypeGuard(item)) {
        name = schema_1.default.getName(item.defindex);
    }
    else if (guards_1.nameTypeGuard(item)) {
        name = item.name;
    }
    else {
        throw new Error('Defindex or Name is missing.');
    }
    return {
        quality: getQuality(item),
        craftable: item.craftable ? 1 : 0,
        item_name: getItem(name, item),
        priceindex: getPriceindex(name, item),
    };
}
exports.default = default_1;
;
function getQuality({ quality, elevated }) {
    return elevated ? `Strange ${schema_1.default.getQualityName(quality)}` : quality;
}
function getItem(name, item) {
    return stringify_1.default({
        name: getRightName(name),
        australium: item.australium,
        // Don't add it if it's already in the name.
        killstreak: isKillstreakKit(name) || isFabricator(name) ? 0 : item.killstreak,
        craftable: true,
        quality: 6
    });
}
function getRightName(name) {
    // We keep kit in the name but backpack.tf does not accept it.
    if (isFabricator(name))
        return name.replace('Kit ', '');
    return name;
}
function getPriceindex(name, item) {
    let targetDefindex;
    let outputDefindex;
    if (guards_1.skuTypeGuard(item)) {
        targetDefindex = item.targetDefindex;
        outputDefindex = item.outputDefindex;
    }
    else if (guards_1.nameTypeGuard(item)) {
        targetDefindex = item.targetDefindex || (item.target && schema_1.default.getDefindex(item.target));
        outputDefindex = item.outputDefindex || (item.output && schema_1.default.getDefindex(item.output));
    }
    if (item.effect)
        return schema_1.default.getEffectEnum(item.effect);
    if (item.itemNumber && isCrate(item.itemNumber))
        return item.itemNumber.value;
    if (isUnusualfierOrStrangifier(name))
        return targetDefindex;
    if (isChemistrySet(name)) {
        let priceindex = `${outputDefindex}-${schema_1.default.getQualityEnum(item.outputQuality)}`;
        if (isUnusualfierOrStrangifier(name))
            priceindex += `-${targetDefindex}`;
        return priceindex;
    }
    if (isKillstreakKit(name))
        return `${schema_1.default.getKillstreakEnum(item.killstreak)}-${targetDefindex}`; // as defindex
    if (isFabricator(name))
        return `${getKitDefindex(item)}-6-${targetDefindex}`;
    return 0;
}
function isCrate(itemNumber) {
    return itemNumber.type === 'crate';
}
function isUnusualfierOrStrangifier(name) {
    return !!(name && (name === 'Unusualifier' || name === 'Strangifier'));
}
function isChemistrySet(name) {
    return name.includes('Chemistry Set');
}
function isKillstreakKit(name) {
    return name.includes('Kit') && !isFabricator(name);
}
function isFabricator(name) {
    return name.includes('Fabricator');
}
function getKitDefindex(item) {
    return schema_1.default.getDefindex(stringify_1.default({ name: 'Kit', killstreak: item.killstreak, craftable: true, quality: 6 }));
}
