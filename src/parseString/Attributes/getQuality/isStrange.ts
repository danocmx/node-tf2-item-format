import { ISchema } from '../../../types/schema';
import { isQualityException } from './exceptions';

export default function (schema: ISchema, name: string): boolean {
	return (
		name.includes('Strange ') &&
		!isQualityException(schema, 'Strange', name)
	);
}
