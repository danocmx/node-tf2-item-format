"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPart = exports.isPart = void 0;
/**
 * Checks if description includes part
 */
function isPart(description) {
    /**
     * Two types of part descriptions:
     * 1) '(Airborne Enemy Kills: 4)'
     * 2) '     Airborne Enemy Kill: 4'
     */
    return / {5}.+: \d+|\(.+: \d+\)/.test(description.value);
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
