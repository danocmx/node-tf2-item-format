"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("../../../schema"));
/**
 * Handles killstreak actions
 */
class Killstreak {
    get killstreak() {
        return this.value;
    }
    set killstreak(value) {
        if (schema_1.default.getKillstreakEnum(value) < schema_1.default.getKillstreakEnum(this.killstreak))
            return;
        this.value = value;
    }
    /**
     * Checks if description includes killstreaker
     * Killstreaker is an `effect` from killstreak
     * @param {object} description
     * @return {boolean}
     */
    static isKillstreaker(description) {
        return description.value.startsWith('Killstreaker: ');
    }
    /**
     * Checks if description includes sheen
     * @param {object} description
     * @return {boolean}
     */
    static isSheen(description) {
        return description.value.startsWith('Sheen: ');
    }
    /**
     * Checks if item is killstreak from description
     * @param {object} description
     * @return {boolean}
     */
    static isKillstreak(description) {
        return description.value === 'Killstreaks Active';
    }
    /**
     * Sets killstreaker from description
     * @param {object} description
     * @return {string}
     */
    setKillstreaker(description) {
        this.killstreaker = description.value.replace('Killstreaker: ', '');
        this.killstreak = 'Professional Killstreak';
    }
    /**
     * Sets sheen from description
     * @param {object} description
     * @return {string}
     */
    setSheen(description) {
        this.sheen = description.value.replace('Sheen: ', '');
        this.killstreak = 'Specialized Killstreak';
    }
    /**
     * Sets killstreak according to other attrs.
     * @param {object} attributes
     */
    setKillstreak() {
        this.killstreak = 'Killstreak';
    }
}
exports.default = Killstreak;
