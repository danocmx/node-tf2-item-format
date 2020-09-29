"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("../../shared/schema"));
const isNumber_1 = __importDefault(require("../../util/isNumber"));
/**
 * Iterates over effects object to get matching effect.
 */
// eslint-disable-next-line consistent-return
function default_1(name) {
    if (!schema_1.default.effects)
        schema_1.default.loadEffects();
    const effectsKeys = Object.keys(schema_1.default.effects);
    for (let i = 0; i < effectsKeys.length; i++) {
        const effect = effectsKeys[i];
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
const EXCEPTIONS = [['Cool Breeze', 'Cool'], ['Hot Heels', 'Hot'], ['Hot Case', 'Hot'], ['A Head Full of Hot Air', 'Hot']];
function isException(name, effect) {
    return EXCEPTIONS.some((exception) => {
        const [exceptionName, exceptionEffect] = exception;
        return name.includes(exceptionName) && effect === exceptionEffect;
    });
}
