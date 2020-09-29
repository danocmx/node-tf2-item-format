"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isAustralium_1 = __importDefault(require("../../shared/isAustralium"));
const isUniqueHat_1 = __importDefault(require("../../shared/isUniqueHat"));
const getTexture_1 = __importDefault(require("../../shared/getTexture"));
const removeItemNumber_1 = __importDefault(require("../../shared/removeItemNumber"));
const getUsableItem_1 = __importDefault(require("../../parseString/Attributes/getUsableItem"));
const getItemNumber_1 = __importDefault(require("../../parseString/Attributes/getItemNumber"));
/**
 * Gets attributes from Name
 * Currently only australium
 */
function default_1(econ) {
    const name = econ.itemName.origin;
    let { texture } = econ.descriptions;
    /**
     * @type {nameAttributes}
     */
    const attributes = {
        australium: isAustralium_1.default(name),
        isUniqueHat: isUniqueHat_1.default(name),
    };
    if (!texture) {
        texture = getTexture_1.default(name);
        if (texture)
            attributes.texture = texture;
    }
    const itemNumber = getItemNumber_1.default(name);
    if (itemNumber) {
        attributes.itemNumber = itemNumber;
    }
    const usableItem = getUsableItem_1.default(itemNumber ? removeItemNumber_1.default(name, itemNumber) : name);
    if (usableItem) {
        Object.assign(attributes, usableItem);
    }
    return attributes;
}
exports.default = default_1;
;
