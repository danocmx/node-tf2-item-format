import { EconDescription } from '../../../types';
/**
 * Handles killstreak actions
 */
export default class Killstreak {
    value: string;
    killstreaker?: string;
    sheen?: string;
    get killstreak(): string;
    set killstreak(value: string);
    /**
     * Checks if description includes killstreaker
     * Killstreaker is an `effect` from killstreak
     * @param {object} description
     * @return {boolean}
     */
    static isKillstreaker(description: EconDescription): boolean;
    /**
     * Checks if description includes sheen
     * @param {object} description
     * @return {boolean}
     */
    static isSheen(description: EconDescription): boolean;
    /**
     * Checks if item is killstreak from description
     * @param {object} description
     * @return {boolean}
     */
    static isKillstreak(description: EconDescription): boolean;
    /**
     * Sets killstreaker from description
     * @param {object} description
     * @return {string}
     */
    setKillstreaker(description: EconDescription): void;
    /**
     * Sets sheen from description
     * @param {object} description
     * @return {string}
     */
    setSheen(description: EconDescription): void;
    /**
     * Sets killstreak according to other attrs.
     * @param {object} attributes
     */
    setKillstreak(): void;
}
