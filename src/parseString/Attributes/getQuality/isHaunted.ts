import { ISchema } from '../../../types/schema';
import { isQualityException } from './exceptions';

export default function (schema: ISchema, name: string): boolean {
	const hauntedCount = name.match(/Haunted /g);
	return (
		!!hauntedCount &&
		(hauntedCount.length === 2 ||
			!isQualityException(schema, 'Haunted', name))
	);
}
