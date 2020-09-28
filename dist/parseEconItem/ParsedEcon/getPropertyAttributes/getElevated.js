"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(item, tags) {
    return isStrangeType(item) && !isStrangeQuality(tags);
}
exports.default = default_1;
;
function isStrangeType({ type }) {
    return /( - Kills: |- Points Scored: )\d+/.test(type);
}
function isStrangeQuality({ quality }) {
    return quality === 'Strange';
}
