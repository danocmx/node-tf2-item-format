"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(str) {
    // Although it doesn't check for decimals, it is not required here.
    return typeof str === 'number' || /^\d+$/.test(str);
}
exports.default = default_1;
;
