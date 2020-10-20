import ItemName from './ParsedEcon/ItemName';
import { EconItem, TagAttributes, DescriptionAttributes, PropertyAttributes, NameAttributes, ParsedEconNameAtributes, ItemDefindexes, ItemAttributesInNumbers, MetaEconAttributes } from '../types';
/**
 * Parser class.
 * @todo Remove this entirely with better types.
 */
export default class ParsedEcon {
    item: EconItem;
    itemName: ItemName;
    fullEcon: boolean;
    tags: TagAttributes;
    descriptions: DescriptionAttributes;
    properties: PropertyAttributes;
    nameAttrs: NameAttributes;
    constructor(item: EconItem);
    get id(): string;
    /**
     * Gets name from ECON.
     * @return {string}
     */
    get name(): string;
    getImageURL(): string;
    getLargeImageURL(): string;
    /**
     * Gets attributes that are included in the name.
     */
    getNameAttributes(name: string, inNumbers: false, useDefindexes: true): ParsedEconNameAtributes & ItemDefindexes;
    getNameAttributes(name: string, inNumbers: false, useDefindexes: false): ParsedEconNameAtributes;
    getNameAttributes(name: string, inNumbers: true, useDefindexes: true): ParsedEconNameAtributes & ItemDefindexes & ItemAttributesInNumbers;
    getNameAttributes(name: string, inNumbers: true, useDefindexes: false): ParsedEconNameAtributes & ItemAttributesInNumbers;
    getAttributes(shortName: string, inNumbers: false, useDefindexes: true): ParsedEconNameAtributes & ItemDefindexes & MetaEconAttributes;
    getAttributes(shortName: string, inNumbers: true, useDefindexes: false): ParsedEconNameAtributes & ItemAttributesInNumbers & MetaEconAttributes;
    getAttributes(shortName: string, inNumbers: true, useDefindexes: true): ParsedEconNameAtributes & ItemDefindexes & ItemAttributesInNumbers & MetaEconAttributes;
    getAttributes(shortName: string, inNumbers: false, useDefindexes: false): ParsedEconNameAtributes & MetaEconAttributes;
}
