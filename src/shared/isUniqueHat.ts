import Attributes from '../parseString/Attributes';
import { ISchema } from '../types/schema';
import { cache } from './schemaCache';

const SCHEMA_CACHE_UNIQUE_HAT_EXCEPTIONS_KEY = 'uniqueHatExceptions';

/**
 * Signalizes if `The` is at the start of name.
 * Only happens to hats with unique quality.
 */
export default function isUniqueHat(
	schema: ISchema,
	name: string,
	attributes?: Attributes
): boolean {
	if (!name.startsWith('The ')) {
		return false;
	}

	return !isUniqueHatException(schema, name, !attributes?.itemNumber);
}

export function isUniqueHatException(
	schema: ISchema,
	name: string,
	exact: boolean
): boolean {
	const exceptions = getUniqueHatExceptions(schema);

	if (!exact) {
		return exceptions.some((item) => name.startsWith(item));
	}

	return exceptions.includes(name);
}

export function getUniqueHatExceptions(schema: ISchema): string[] {
	let exceptions = cache.get<string[]>(
		schema,
		SCHEMA_CACHE_UNIQUE_HAT_EXCEPTIONS_KEY
	);
	if (exceptions) {
		return exceptions;
	}

	exceptions = findUniqueHatExceptions(schema);
	cache.save(schema, SCHEMA_CACHE_UNIQUE_HAT_EXCEPTIONS_KEY, exceptions);
	return exceptions;
}

export function findUniqueHatExceptions(schema: ISchema): string[] {
	const items = schema.getItems();

	return items
		.filter((item) => item.item_name.startsWith('The '))
		.map((item) => item.item_name);
}
