"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTexture = exports.isItemsTexture = void 0;
const schema_1 = __importDefault(require("../../../schema"));
/**
 * Checks if texture is the one on the item.
 */
function isItemsTexture(description, item) {
    return description.value.startsWith('\u2714 ') && (matchesName(description, item) || isCurrentItemSkin(item));
}
exports.isItemsTexture = isItemsTexture;
;
function matchesName(description, { itemName }) {
    return itemName.origin.includes(description.value.replace('\u2714 ', ''));
}
function isCurrentItemSkin({ tags }) {
    return !!tags.wear;
}
function getTexture(description) {
    // Only set texture when app_data present.
    return description.app_data
        ? schema_1.default.getTextureName(description.app_data.def_index) : undefined;
}
exports.getTexture = getTexture;
;
