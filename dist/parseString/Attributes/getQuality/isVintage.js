"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(name) {
    return name.includes('Vintage ') && !isVintageException(name);
}
exports.default = default_1;
;
function isVintageException(name) {
    return /Vintage (Merryweather|Tyrolean)/.test(name);
}
