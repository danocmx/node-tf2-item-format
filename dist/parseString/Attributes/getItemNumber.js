"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @typedef {Object} itemNumber
 * @property {number} value
 * @property {string} type
 */
/**
 * Gets number & type of an item
 * eg. Medal, crate, case or craft number.
 * Not sure how to call this, so feel free to make suggestions.
 * @param {string} name
 * @return {itemNumber}
 */
function default_1(name) {
    const value = getValue(name);
    if (!value)
        return null;
    return {
        type: getType(name),
        value,
    };
}
exports.default = default_1;
;
function getType(name) {
    const [_, type] = name.match(/\b(Medal|Crate|Case|Series)\b/) || [];
    // Same thing, different name.
    if (type === 'Case')
        return 'crate';
    return type ? type.toLowerCase() : 'craft';
}
function getValue(name) {
    const [_, value] = name.match(/ #(\d+)/) || [];
    const numberValue = parseInt(value);
    return isNaN(numberValue) ? null : numberValue;
}
