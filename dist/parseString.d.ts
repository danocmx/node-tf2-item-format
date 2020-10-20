import { ItemAttributesInNumbers, ItemAttributesInStrings, ItemDefindexes, DefaultItemAttributes } from './types';
/**
 * Parses name string into attributes.
 */
declare function parseString(name: string, inNumbers: false, useDefindexes: false): DefaultItemAttributes & ItemAttributesInStrings;
declare function parseString(name: string, inNumbers: true, useDefindexes: true): DefaultItemAttributes & ItemDefindexes & ItemAttributesInNumbers;
declare function parseString(name: string, inNumbers: false, useDefindexes: true): DefaultItemAttributes & ItemDefindexes & ItemAttributesInStrings;
declare function parseString(name: string, inNumbers: true, useDefindexes: false): DefaultItemAttributes & ItemAttributesInNumbers;
export default parseString;
