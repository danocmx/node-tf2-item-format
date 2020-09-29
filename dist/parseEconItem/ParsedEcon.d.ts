import ItemName from './ParsedEcon/ItemName';
import { EconItem, TagAttributes, DescriptionAttributes, PropertyAttributes, NameAttributes, ParsedEconOptions, ParsedEconNameAtributes, EconAttributes } from '../types';
/**
 * Parser class.
 */
export default class ParsedEcon {
    item: EconItem;
    itemName: ItemName;
    fullEcon: boolean;
    tags: TagAttributes;
    descriptions: DescriptionAttributes;
    properties: PropertyAttributes;
    nameAttrs: NameAttributes;
    options: ParsedEconOptions;
    constructor(item: EconItem, options: ParsedEconOptions);
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
    getNameAttributes({ inNumbers, useDefindexes, name }?: {
        name?: string;
        inNumbers?: boolean;
        useDefindexes?: boolean;
    }): ParsedEconNameAtributes;
    getAttributes(shortName?: string): EconAttributes;
}
