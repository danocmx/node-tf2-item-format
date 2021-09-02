import { Defindexes, TargetOutputItem } from '../types';
import { ISchema } from '../types/schema';
import { hasDefindex } from './guards';

export default function getDefindexes(
	schema: ISchema,
	name: string,
	usableItem?: Partial<TargetOutputItem>
): Defindexes {
	const defindexes: Defindexes = { defindex: schema.getDefindex(name) };

	if (usableItem) {
		if (usableItem.target) {
			const targetDefindex = schema.getDefindex(usableItem.target);
			if (hasDefindex(targetDefindex)) defindexes.targetDefindex = targetDefindex;
		}

		if (usableItem.output) {
			const outputDefindex = schema.getDefindex(usableItem.output);
			if (hasDefindex(outputDefindex)) defindexes.outputDefindex = outputDefindex;
		}
	}

	return defindexes;
}
