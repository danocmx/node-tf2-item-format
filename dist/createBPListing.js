"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./schema"));
const stringify_1 = __importDefault(require("./stringify"));
/**
 * Creates a listing object that you can sent to backpack.tf
 */
function default_1(item) {
    return {
        quality: getQuality(item),
        craftable: item.craftable ? 1 : 0,
        item_name: getItem(item),
        priceindex: getPriceindex(item),
    };
}
exports.default = default_1;
;
function getQuality({ quality, elevated }) {
    return elevated ? `Strange ${schema_1.default.getQualityName(quality)}` : quality;
}
function getItem(item) {
    return stringify_1.default({
        name: getRightName(item),
        australium: item.australium,
        // Don't add it if it's already in the name.
        killstreak: isKillstreakKit(item) || isFabricator(item) ? 0 : item.killstreak,
        craftable: true,
        quality: 6
    });
}
function getRightName(item) {
    // We keep kit in the name but backpack.tf does not accept it.
    if (isFabricator(item))
        return item.name.replace('Kit ', '');
    return item.name;
}
function getPriceindex(item) {
    if (item.effect)
        return schema_1.default.getEffectEnum(item.effect); // As int
    if (isCrate(item))
        return item.itemNumber.value;
    if (isUnusualfierOrStrangifier(item.name))
        return schema_1.default.getDefindex(item.target); // as defindex
    if (isChemistrySet(item)) {
        let priceindex = `${schema_1.default.getDefindex(item.output)}-${schema_1.default.getQualityEnum(item.outputQuality)}`;
        if (isUnusualfierOrStrangifier(item.target))
            priceindex += `-${schema_1.default.getDefindex(item.target)}`;
        return priceindex;
    }
    if (isKillstreakKit(item))
        return `${schema_1.default.getKillstreakEnum(item.killstreak)}-${schema_1.default.getDefindex(item.target)}`; // as defindex
    if (isFabricator(item))
        return `${getKitDefindex(item)}-6-${schema_1.default.getDefindex(item.target)}`;
    return 0;
}
function isCrate(item) {
    return !!(item.itemNumber && item.itemNumber.type === 'crate');
}
function isUnusualfierOrStrangifier(name) {
    return !!(name && (name === 'Unusualifier' || name === 'Strangifier'));
}
function isChemistrySet({ name }) {
    return name.includes('Chemistry Set');
}
function isKillstreakKit(item) {
    return item.name.includes('Kit') && !isFabricator(item);
}
function isFabricator(item) {
    return item.name.includes('Fabricator');
}
function getKitDefindex(item) {
    return schema_1.default.getDefindex(stringify_1.default({ name: 'Kit', killstreak: item.killstreak, craftable: true, quality: 6 }));
}
