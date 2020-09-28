"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEffect = exports.isEffect = void 0;
/**
 * Checks if description contains effect.
 * @param {object} description
 * @return {boolean}
 */
function isEffect(description, tags) {
    return description.value.startsWith('★ Unusual Effect: ') && isRightColour(description) && canQualityBeUnusual(tags);
}
exports.isEffect = isEffect;
;
function isRightColour({ color }) {
    return color === 'ffd700';
}
function canQualityBeUnusual({ quality }) {
    return quality !== 'Unique';
}
/**
 * Gets effect number.
 * @param {object} description
 * @return {number}
 */
function getEffect(description) {
    return description.value.replace('★ Unusual Effect: ', '');
}
exports.getEffect = getEffect;
;
