"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if quality should be set on name by few checks.
 */
function default_1(quality, elevated, effect) {
    if (isStrangeUnique(quality, elevated))
        return true;
    return checkForEffectAndUnusual(quality, effect) && !isUnique(quality) && !isDecorated(quality);
}
exports.default = default_1;
;
// TODO: rename
function checkForEffectAndUnusual(quality, effect) {
    return isNonUnusualWithEffect(quality, effect) || hasNoEffect(quality, effect);
}
/**
 * Isnt unusual quality with effect
 * We add it to name.
 * @return {boolean}
 */
function isNonUnusualWithEffect(quality, effect) {
    return !isUnusual(quality) && !!effect;
}
/**
 * Has quality without effect
 */
function hasNoEffect(quality, effect) {
    return quality && !effect;
}
function isStrangeUnique(quality, elevated) {
    return isUnique(quality) && !!(elevated);
}
function isDecorated(quality) {
    return quality === 'Decorated Weapon' || quality === 15;
}
function isUnusual(quality) {
    return quality === 'Unusual' || quality === 5;
}
function isUnique(quality) {
    return quality === 'Unique' || quality === 6;
}
