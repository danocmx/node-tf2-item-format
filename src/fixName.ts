import parseString from './parseString';
import stringify from './stringify';

import { ISchema } from './types/schema';

/**
 * Fixes the order of attributes in your name,
 * 	this is highly exrimental due to the
 * 	nature of attributes being parsed in way
 * 	they're put in inside the name.
 */
export default (schema: ISchema, name: string) =>
	stringify(schema, parseString(schema, name, false, false));
