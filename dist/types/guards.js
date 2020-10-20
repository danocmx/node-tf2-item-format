"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skuTypeGuard = exports.nameTypeGuard = void 0;
function nameTypeGuard(attrs) {
    return Object.prototype.hasOwnProperty.call(attrs, 'name');
}
exports.nameTypeGuard = nameTypeGuard;
function skuTypeGuard(attrs) {
    return Object.prototype.hasOwnProperty.call(attrs, 'defindex');
}
exports.skuTypeGuard = skuTypeGuard;
