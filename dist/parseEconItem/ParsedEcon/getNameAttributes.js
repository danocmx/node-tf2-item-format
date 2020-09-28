"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isAustralium_1 = __importDefault(require("../../shared/isAustralium"));
const isUniqueHat_1 = __importDefault(require("../../shared/isUniqueHat"));
const getTexture_1 = __importDefault(require("../../shared/getTexture"));
/**
 * Gets attributes from Name
 * Currently only australium
 */
function default_1(econ) {
    let { texture } = econ.descriptions;
    /**
     * @type {nameAttributes}
     */
    const attributes = {
        australium: isAustralium_1.default(econ.itemName.origin),
        isUniqueHat: isUniqueHat_1.default(econ.itemName.origin),
    };
    if (!texture) {
        texture = getTexture_1.default(econ.itemName.origin);
        if (texture)
            attributes.texture = texture;
    }
    return attributes;
}
exports.default = default_1;
;
