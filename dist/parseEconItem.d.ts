import { ParsedEconOptions, EconItem, ParsedEconItem } from './types';
/**
 * Parses Economy item from steam.
 * @param {object} item
 * @param {object} options
 * @param {boolean} options.inNumbers
 * @return {object}
 */
export default function (item: EconItem, options?: ParsedEconOptions): ParsedEconItem;
