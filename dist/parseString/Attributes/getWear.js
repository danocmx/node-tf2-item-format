"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets wear from name
 */
// eslint-disable-next-line consistent-return
function default_1(name) {
    if (name.includes('(Battle Scarred)')) {
        return 'Battle Scarred';
    }
    if (name.includes('(Well-Worn)')) {
        return 'Well-Worn';
    }
    if (name.includes('(Field-Tested)')) {
        return 'Field-Tested';
    }
    if (name.includes('(Minimal Wear)')) {
        return 'Minimal Wear';
    }
    if (name.includes('(Factory New)')) {
        return 'Factory New';
    }
}
exports.default = default_1;
;
