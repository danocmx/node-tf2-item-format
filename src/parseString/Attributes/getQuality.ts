import isStrange from './getQuality/isStrange';
import isVintage from './getQuality/isVintage';
import isHaunted from './getQuality/isHaunted';
import matchQuality from './getQuality/matchQuality';
import selectQuality from './getQuality/selectQuality';

import Attributes from '../Attributes';

import { StringQuality } from '../../types';

/**
 * Gets quality by providing data to selectQuality
 */
export default function (name: string, attributes: Attributes): StringQuality {
	// This is true for all target/output items
	if (attributes.usableItem) {
		return {
			// Weird work around, will fix later.
			value: name.includes('Unusual') ? 'Unusual' : 'Unique',
			elevated: false,
		};
	}

	return selectQuality({
		isStrange: isStrange(name), // For elevated
		isVintage: isVintage(name), // Because of exceptions
		isHaunted: isHaunted(name),
		otherQuality: matchQuality(name), // Matches every other quality
		attributes, // Current attributes
	});
}
