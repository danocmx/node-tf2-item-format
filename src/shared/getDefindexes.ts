import schema from '../shared/schema';

import { Defindexes, TargetOutputItem } from '../types';

export default function getDefindexes(
	name: string,
	usableItem?: Partial<TargetOutputItem>
): Defindexes {
	const defindexes: Defindexes = { defindex: schema.getDefindex(name) };

	if (usableItem) {
		if (usableItem.target) {
			const targetDefindex = schema.getDefindex(usableItem.target);
			if (targetDefindex) defindexes.targetDefindex = targetDefindex;
		}

		if (usableItem.output) {
			const outputDefindex = schema.getDefindex(usableItem.output);
			if (outputDefindex) defindexes.outputDefindex = outputDefindex;
		}
	}

	return defindexes;
}
