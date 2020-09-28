"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Matches quality from name.
 * @param {string} name
 * @return {string} quality
 */
function default_1(name) {
    // Does not include strangee and vintage for exception reasons.
    const match = name.match(/(Normal|Genuine|Unique|Unusual|Self-Made|Haunted|Collector's) /) || [];
    const [, quality] = match;
    return quality;
}
exports.default = default_1;
;
