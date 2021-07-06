import getElevated from './getPropertyAttributes/getElevated';

import ParsedEcon from '../ParsedEcon';
import { PropertyAttributes } from '../../types';

export default function ({ item, tags }: ParsedEcon): PropertyAttributes {
	const attributes: PropertyAttributes = {
		elevated: getElevated(item, tags),

		// Inverts numeric values into booleans
		tradable: !!item.tradable,
		marketable: !!item.marketable,
		commodity: !!item.commodity,
	};

	return attributes;
}
