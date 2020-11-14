"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPart = exports.isPart = void 0;
/**
 * Checks if description includes part
 */
function isPart(description, econ) {
    /**
     * Two types of part descriptions:
     * 1) '(Airborne Enemy Kills: 4)'
     * 2) '     Airborne Enemy Kill: 4'
     */
    // type === 'Strange'
    // type === 'Points Scored'
    // 
    if (!/^( {5}(.+): \d+)|(\((.+): \d+\))$/.test(description.value))
        return false;
    const part = getPart(description);
    if (['Kills', 'Assists'].includes(part)) {
        return isCosmetic(econ);
    }
    // Regex matches and now we just check for color.
    return description.color === '756b5e';
}
exports.isPart = isPart;
;
/**
 * Gets part from description
 */
function getPart(description) {
    const match = description.value.match(/^ {5}(.+): \d+|\((.+): \d+\)$/) || [];
    return match[1] || match[2];
}
exports.getPart = getPart;
;
function isCosmetic(econ) {
    return econ.item.type.includes('Strange') && econ.item.type.includes('Points Scored');
}
