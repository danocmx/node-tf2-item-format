"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./schema"));
const Attributes_1 = __importDefault(require("./parseString/Attributes"));
const decomposeName_1 = __importDefault(require("./shared/decomposeName"));
const getConvertedIntAttributes_1 = __importDefault(require("./shared/getConvertedIntAttributes"));
const isEmpty_1 = __importDefault(require("./util/isEmpty"));
/**
 * Parses name string into attributes.
 */
function default_1(name, { inNumbers = false, useDefindexes = false } = {}) {
    let attributes = new Attributes_1.default(name);
    const itemName = decomposeName_1.default(name, attributes);
    const parsedAttributes = {
        name: itemName,
        craftable: attributes.craftable,
        quality: attributes.quality.value,
    };
    if (inNumbers) {
        const convertedAttributes = getConvertedIntAttributes_1.default({
            killstreak: attributes.killstreak,
            wear: attributes.wear,
            effect: attributes.effect,
            quality: attributes.quality.value,
            outputQuality: attributes.usableItem && attributes.usableItem.outputQuality,
            texture: attributes.texture,
        });
        if (!convertedAttributes.killstreak)
            delete convertedAttributes.killstreak;
        if (!convertedAttributes.wear)
            delete convertedAttributes.wear;
        if (!convertedAttributes.effect)
            delete convertedAttributes.effect;
        if (!convertedAttributes.texture)
            delete convertedAttributes.texture;
        if (!convertedAttributes.outputQuality)
            delete convertedAttributes.outputQuality;
        Object.assign(parsedAttributes, convertedAttributes);
    }
    const defindexes = useDefindexes ? getDefindexes(itemName, attributes) : {};
    if (defindexes.defindex)
        parsedAttributes.defindex = defindexes.defindex;
    if (attributes.quality.elevated)
        parsedAttributes.elevated = attributes.quality.elevated;
    if (attributes.isUniqueHat)
        parsedAttributes.isUniqueHat = attributes.isUniqueHat;
    if (attributes.australium)
        parsedAttributes.australium = attributes.australium;
    if (attributes.festivized)
        parsedAttributes.festivized = attributes.festivized;
    if (attributes.killstreak && !parsedAttributes.killstreak)
        parsedAttributes.killstreak = attributes.killstreak;
    if (attributes.wear && !parsedAttributes.wear)
        parsedAttributes.wear = attributes.wear;
    if (attributes.texture && !parsedAttributes.texture)
        parsedAttributes.texture = attributes.texture;
    if (attributes.effect && !parsedAttributes.effect)
        parsedAttributes.effect = attributes.effect;
    if (attributes.usableItem && !isEmpty_1.default(attributes.usableItem)) {
        if (attributes.usableItem.target)
            parsedAttributes.target = attributes.usableItem.target;
        if (attributes.usableItem.output)
            parsedAttributes.output = attributes.usableItem.output;
        if (!parsedAttributes.outputQuality && attributes.usableItem.outputQuality)
            parsedAttributes.outputQuality = attributes.usableItem.outputQuality;
        if (defindexes.targetDefindex)
            parsedAttributes.targetDefindex = defindexes.targetDefindex;
        if (defindexes.outputDefindex)
            parsedAttributes.outputDefindex = defindexes.outputDefindex;
    }
    if (attributes.itemNumber && !isEmpty_1.default(attributes.itemNumber))
        parsedAttributes.itemNumber = attributes.itemNumber;
    // Move convertor to the last step.
    return parsedAttributes;
}
exports.default = default_1;
;
function getDefindexes(name, attributes) {
    const defindexes = { defindex: schema_1.default.getDefindex(name) };
    if (attributes.usableItem) {
        if (attributes.usableItem.target) {
            const targetDefindex = schema_1.default.getDefindex(attributes.usableItem.target);
            if (targetDefindex)
                defindexes.targetDefindex = targetDefindex;
        }
        if (attributes.usableItem.output) {
            const outputDefindex = schema_1.default.getDefindex(attributes.usableItem.output);
            if (outputDefindex)
                defindexes.outputDefindex = outputDefindex;
        }
    }
    return defindexes;
}
