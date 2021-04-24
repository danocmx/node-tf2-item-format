import parseEconItem from './parseEconItem';
import parseString from './parseString';
import stringify from './stringify';
import createBPListing from './createBPListing';
import toSKU from './toSKU';
import parseSKU from './parseSKU';
import fixName from './fixName';

import { ISchema } from './types/schema';

export * from './types';

export function createFormat(schema: ISchema) {
	return {
		parseEconItem: parseEconItem.bind(undefined, schema),
		parseString: parseString.bind(undefined, schema),
		stringify: stringify.bind(undefined, schema),
		createBPListing: createBPListing.bind(undefined, schema),
		fixName: fixName.bind(undefined, schema),
		/**
		 * We export these to keep the format api constant. 
		 */
		toSKU,
		parseSKU,
		schema,
	}
}

export { toSKU, parseSKU, ISchema };
