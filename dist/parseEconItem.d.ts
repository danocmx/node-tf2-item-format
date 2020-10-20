import { EconItem, ParsedEconNameAtributes, ItemDefindexes, ItemAttributesInNumbers, MetaEconAttributes, AddionalEconItemAttributes } from './types';
/**
 * Parses Economy item from steam.
 * @param {object} item
 * @param {object} options
 * @param {boolean} options.inNumbers
 * @return {object}
 */
declare function parseEconItem(item: EconItem, inNumbers: false, useDefindexes: true): ParsedEconNameAtributes & ItemDefindexes & MetaEconAttributes & AddionalEconItemAttributes;
declare function parseEconItem(item: EconItem, inNumbers: false, useDefindexes: false): ParsedEconNameAtributes & MetaEconAttributes & AddionalEconItemAttributes;
declare function parseEconItem(item: EconItem, inNumbers: true, useDefindexes: true): ParsedEconNameAtributes & ItemDefindexes & ItemAttributesInNumbers & MetaEconAttributes & AddionalEconItemAttributes;
declare function parseEconItem(item: EconItem, inNumbers: true, useDefindexes: false): ParsedEconNameAtributes & ItemAttributesInNumbers & MetaEconAttributes & AddionalEconItemAttributes;
export default parseEconItem;
