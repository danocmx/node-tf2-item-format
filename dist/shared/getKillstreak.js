"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets killstreak from name
 */
// eslint-disable-next-line consistent-return
function default_1(name) {
    if (name.includes('Professional Killstreak ')) {
        return 'Professional Killstreak';
    }
    if (name.includes('Specialized Killstreak ')) {
        return 'Specialized Killstreak';
    }
    if (name.includes('Killstreak ')) {
        return 'Killstreak';
    }
}
exports.default = default_1;
;
