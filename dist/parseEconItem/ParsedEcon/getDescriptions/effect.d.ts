import { EconDescription, TagAttributes } from '../../../types';
/**
 * Checks if description contains effect.
 * @param {object} description
 * @return {boolean}
 */
export declare function isEffect(description: EconDescription, tags: TagAttributes): boolean;
/**
 * Gets effect number.
 * @param {object} description
 * @return {number}
 */
export declare function getEffect(description: EconDescription): string;
