import { ISchema } from '../../../types/schema';
import { isQualityException } from './exceptions';

export default function (schema: ISchema, name: string): boolean {
	const vintageCount = name.match(/Vintage /g);
	return (
		!!vintageCount &&
		(vintageCount.length === 2 ||
			!isQualityException(schema, 'Vintage', name))
	);
}
