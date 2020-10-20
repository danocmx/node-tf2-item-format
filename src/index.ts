/* eslint-disable global-require */

import parseEconItem from "./parseEconItem";
import parseString from './parseString';
import stringify from './stringify';
import createBPListing from './createBPListing';
import toSKU from './toSKU';
import parseSKU from './parseSKU';

import schema from './shared/schema';

export * from './types';

/**
 * Fixes the order of attributes in your name,
 * 	this is highly exrimental due to the
 * 	nature of attributes being parsed in way
 * 	they're put in inside the name.
 */
const fixName = (name: string) => stringify(parseString(name, false, false));

export {
    parseEconItem,
    parseString,
    stringify,
    createBPListing,
    toSKU,
    parseSKU,
    fixName,
    schema,
}
