"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if number can on items name.
 */
function default_1({ value, type } = { type: '', value: 0 }) {
    if (type === 'craft')
        return value <= 100;
    if (type && value)
        return true;
    return false;
}
exports.default = default_1;
;
