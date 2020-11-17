"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("../../shared/schema"));
const isNumber_1 = __importDefault(require("../../util/isNumber"));
const EFFECT_EXCEPTIONS = [
    ['Orbiting Fire', 'Eerie Orbiting Fire'],
    ['Spellbound', 'Spellbound Aspect'],
    ['Haunted Phantasm', 'Haunted Phantasm Jr'],
    ['Ghastly Ghosts', 'Ghastly Ghosts Jr'],
];
/**
 * Iterates over effects object to get matching effect.
 */
// eslint-disable-next-line consistent-return
function default_1(name, attributes) {
    if (!schema_1.default.effects)
        schema_1.default.loadEffects();
    const effectsKeys = Object.keys(schema_1.default.effects);
    for (let i = 0; i < effectsKeys.length; i++) {
        let effect = effectsKeys[i];
        if (effect === 'Haunted Ghosts' && name.includes('Haunted Ghosts ') && attributes.wear) {
            continue;
        }
        for (let i = 0; i < EFFECT_EXCEPTIONS.length; i++) {
            const exception = EFFECT_EXCEPTIONS[i];
            if (effect === exception[0] && name.includes(`${exception[1]} `))
                return exception[1];
        }
        if (!isNumber_1.default(effect) && name.includes(`${effect} `) && !isException(name, effect)) {
            return effect;
        }
    }
}
exports.default = default_1;
;
/**
 * Which item and effect cannot exist together.
 */
const HAT_NAME_EXCEPTIONS = [['Cool Breeze', 'Cool'], ['Cool Cat Cardigan', 'Cool'], ['Hot Heels', 'Hot'], ['Hot Case', 'Hot'], ['A Head Full of Hot Air', 'Hot'], ['Bonk Atomic Punch', 'Atomic'], ['Hot Hand', 'Hot']];
function isException(name, effect) {
    return HAT_NAME_EXCEPTIONS.some((exception) => {
        const [exceptionName, exceptionEffect] = exception;
        return name.includes(exceptionName) && effect === exceptionEffect;
    });
}
