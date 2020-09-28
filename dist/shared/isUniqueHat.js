"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Signalizes if `The` is at the start of name.
 * Only happens to hats with unique quality.
 */
function default_1(name) {
    return /^The /.test(name);
}
exports.default = default_1;
;
