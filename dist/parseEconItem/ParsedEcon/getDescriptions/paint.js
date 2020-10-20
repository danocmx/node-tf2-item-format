"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaint = exports.isPaint = void 0;
/**
 * Checks if description includes paint
 */
function isPaint(description) {
    return /^Paint Color: /.test(description.value) && description.color === '756b5e';
}
exports.isPaint = isPaint;
;
/**
 * Gets paint from description
 */
function getPaint(description) {
    return description.value.replace('Paint Color: ', '');
}
exports.getPaint = getPaint;
;
