"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCraftable = void 0;
/**
 * Checks if item is craftable based off description
 * @param {object} description
 * @return {boolean}
 */
function isCraftable(description) {
    return ![
        '( Not Usable in Crafting )',
        '( Not Tradable, Marketable, or Usable in Crafting )',
        '( Not Tradable, Marketable, Usable in Crafting, or Gift Wrappable )',
    ].includes(description.value);
}
exports.isCraftable = isCraftable;
;
