import { ItemNumber } from '../../types';
/**
 * @typedef {Object} itemNumber
 * @property {number} value
 * @property {string} type
 */
/**
 * Gets number & type of an item
 * eg. Medal, crate, case or craft number.
 * Not sure how to call this, so feel free to make suggestions.
 * @param {string} name
 * @return {itemNumber}
 */
export default function (name: string): ItemNumber | null;
