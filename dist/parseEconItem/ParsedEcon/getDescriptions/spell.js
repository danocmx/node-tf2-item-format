"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpell = exports.isSpell = void 0;
/**
 * Checks if description includes spell
 * @param {object} description
 * @return {boolean}
 */
function isSpell(description) {
    return /^Halloween: .*/.test(description.value);
}
exports.isSpell = isSpell;
;
/**
 * Gets spell from description
 * @param {object} description
 * @return {string}
 */
function getSpell(description) {
    return description.value
        .replace('Halloween: ', '')
        .replace(' (spell only active during event)', '');
}
exports.getSpell = getSpell;
;
