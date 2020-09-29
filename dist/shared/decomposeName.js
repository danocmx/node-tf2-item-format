"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getOutput_1 = __importDefault(require("./getOutput"));
const removeItemNumber_1 = __importDefault(require("./removeItemNumber"));
/**
 * Uses attributes to decompose the name to it's original.
 * @param {string} name
 * @param {object} attributes
 * @return {string} Pure name
 */
function default_1(name, attributes) {
    const { craftable, australium, festivized, killstreak, wear, effect, texture, itemNumber, usableItem, quality, isUniqueHat, } = attributes;
    let itemName = name;
    if (!craftable)
        itemName = itemName.replace('Non-Craftable ', '');
    if (australium)
        itemName = itemName.replace('Australium ', '');
    if (festivized)
        itemName = itemName.replace('Festivized ', '');
    if (itemNumber) {
        itemName = removeItemNumber_1.default(itemName, itemNumber);
    }
    // So we keep killstreak name for kits and fabricators
    if (usableItem) {
        const toRemove = getUsableItemToRemove(attributes);
        itemName = itemName.replace(new RegExp(`(( ${toRemove})|(${toRemove} ))`), '');
    }
    else if (killstreak)
        itemName = itemName.replace(`${killstreak} `, ''); // Killstreak stat is kept
    if (wear)
        itemName = itemName.replace(` (${wear})`, '');
    if (effect)
        itemName = itemName.replace(`${effect} `, '');
    if (texture)
        itemName = itemName.replace(`${texture} `, '');
    itemName = itemName.replace(`${quality.value} `, '');
    if (isUniqueHat)
        itemName = itemName.replace(/^The /, '');
    if (quality.elevated)
        itemName = itemName.replace('Strange ', '');
    return itemName;
}
exports.default = default_1;
/**
 * Chooses output or target item to remove from name.
 * @param {Object} attributes
 * @return {string}
 */
function getUsableItemToRemove(attributes) {
    const { target, output, outputQuality } = attributes.usableItem;
    return target || getOutput_1.default(output, outputQuality);
}
