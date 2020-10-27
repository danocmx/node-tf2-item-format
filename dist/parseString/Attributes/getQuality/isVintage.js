"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(name) {
    const vintageCount = name.match(/Vintage /g);
    return !!vintageCount && (vintageCount.length === 2 || !isVintageException(name));
}
exports.default = default_1;
;
function isVintageException(name) {
    return /Vintage (Merryweather|Tyrolean)/.test(name);
}
