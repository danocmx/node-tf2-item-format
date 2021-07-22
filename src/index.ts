import parseEconItem from './parseEconItem';
import parseString from './parseString';
import stringify from './stringify';
import createBPListing, { CreateBPListingOptions } from './createBPListing';
import toSKU from './toSKU';
import parseSKU from './parseSKU';
import fixName from './fixName';

import { ISchema } from './types/schema';
import { AddionalEconItemAttributes, BackpackTFListing, DefaultItemAttributes, EconItem, ItemAttributes, ItemAttributesInNumbers, ItemAttributesInStrings, ItemDefindexes, MetaEconAttributes, ParsedEconItem, ParsedEconNameAtributes, SKUAttributes, StrigifySKUAttributes } from './types';
import { EconOptions } from './types/econ';

export * from './types';
export * from './types/schema'

class Format {
	constructor(public schema: ISchema) {}

	parseEconItem(
		item: EconItem,
		inNumbers: false,
		useDefindexes: true,
		options?: EconOptions
	): ParsedEconNameAtributes &
		ItemDefindexes &
		MetaEconAttributes &
		AddionalEconItemAttributes;
	parseEconItem(
		item: EconItem,
		inNumbers: false,
		useDefindexes: false,
		options?: EconOptions
	): ParsedEconNameAtributes & MetaEconAttributes & AddionalEconItemAttributes;
	parseEconItem(
		item: EconItem,
		inNumbers: true,
		useDefindexes: true,
		options?: EconOptions
	): ParsedEconNameAtributes &
		ItemDefindexes &
		ItemAttributesInNumbers &
		MetaEconAttributes &
		AddionalEconItemAttributes;
	parseEconItem(item: EconItem, inNumbers: true, useDefindexes: false, options?: EconOptions): ParsedEconNameAtributes & ItemAttributesInNumbers & MetaEconAttributes & AddionalEconItemAttributes;
	parseEconItem(item: EconItem, inNumbers: boolean = false, useDefindexes: boolean = false, options?: EconOptions): ParsedEconItem {
		if (inNumbers && useDefindexes) {
			return parseEconItem(this.schema, item, true, true, options);
		} else if (inNumbers) {
			return parseEconItem(this.schema, item, true, false, options);
		} else if (useDefindexes) {
			return parseEconItem(this.schema, item, false, true, options);
		}
		
		return parseEconItem(this.schema, item, false, false, options);
	}

	parseString(
		name: string,
		inNumbers: false,
		useDefindexes: false
	): DefaultItemAttributes & ItemAttributesInStrings;
	parseString(
		name: string,
		inNumbers: true,
		useDefindexes: true
	): DefaultItemAttributes & ItemDefindexes & ItemAttributesInNumbers;
	parseString(
		name: string,
		inNumbers: false,
		useDefindexes: true
	): DefaultItemAttributes & ItemDefindexes & ItemAttributesInStrings;
	parseString(
		name: string,
		inNumbers: true,
		useDefindexes: false
	): DefaultItemAttributes & ItemAttributesInNumbers;
	parseString(
		name: string,
		inNumbers: boolean = false,
		useDefindexes: boolean = false
	): DefaultItemAttributes {
		if (inNumbers && useDefindexes) {
			return parseString(this.schema, name, true, true);
		} else if (inNumbers) {
			return parseString(this.schema, name, true, false);
		} else if (useDefindexes) {
			return parseString(this.schema, name, false, true);
		}
		
		return parseString(this.schema, name, false, false);
	}

	stringify(attributes: StrigifySKUAttributes | ItemAttributes): string {
		return stringify(this.schema, attributes);
	}

	createBPListing(item: StrigifySKUAttributes | ItemAttributes, options: CreateBPListingOptions = {}): BackpackTFListing {
		return createBPListing(this.schema, item, options);
	}

	fixName(name: string): string {
		return fixName(this.schema, name);
	}

	toSKU(item: SKUAttributes): string {
		return toSKU(item);
	}
	
	parseSKU(sku: string): SKUAttributes {
		return parseSKU(sku);
	}
}

export function createFormat(schema: ISchema) {
	return new Format(schema);
}

export { toSKU, parseSKU };
