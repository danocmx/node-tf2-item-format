"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getKillstreak_1 = __importDefault(require("../shared/getKillstreak"));
/**
 * Adds target to name as specified by usableItem.
 */
function default_1(name, target) {
    const killstreak = getKillstreak_1.default(name);
    return insertTarget(name, target, killstreak);
}
exports.default = default_1;
;
/**
 * Inserts the target into name.
 */
function insertTarget(name, target, killstreak) {
    return `${killstreak} ${target} ${name.slice(killstreak.length + 1)}`;
}
