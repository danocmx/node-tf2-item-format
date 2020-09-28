"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isStrange_1 = __importDefault(require("./getQuality/isStrange"));
const isVintage_1 = __importDefault(require("./getQuality/isVintage"));
const matchQuality_1 = __importDefault(require("./getQuality/matchQuality"));
const selectQuality_1 = __importDefault(require("./getQuality/selectQuality"));
/**
 * Gets quality by providing data to selectQuality
 */
function default_1(name, attributes) {
    // This is true for all target/output items
    if (attributes.usableItem) {
        return {
            // Weird work around, will fix later.
            value: name.includes('Unusual') ? 'Unusual' : 'Unique',
            elevated: false,
        };
    }
    return selectQuality_1.default({
        isStrange: isStrange_1.default(name),
        isVintage: isVintage_1.default(name),
        otherQuality: matchQuality_1.default(name),
        attributes,
    });
}
exports.default = default_1;
;
