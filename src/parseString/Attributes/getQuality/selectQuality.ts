import Attributes from '../../Attributes';

import { StringQuality } from '../../../types';

/**
 * Selects quality based off input.
 * @param {boolean} isStrange
 * @param {boolean} isVintage
 * @param {string} otherQuality
 * @param {Object} attributes
 * @return {Object}
 */
export default function ({
	isStrange,
	isVintage,
	otherQuality,
	attributes,
}: {
	isStrange: boolean;
	isVintage: boolean;
	otherQuality: string;
	attributes: Attributes;
}): StringQuality {
	let quality: string|void;
	let elevated = false;

	if (isVintage) quality = 'Vintage';
	else if (otherQuality) quality = otherQuality;
	else if (attributes.effect) quality = 'Unusual';

	if (isStrange) {
		if (quality) elevated = true;
		else quality = 'Strange';
		// eslint-disable-next-line brace-style
	}
	// Checking for only for unusual so we dont disrupt anything else.
	else if (attributes.texture && quality !== 'Unusual')
		quality = 'Decorated Weapon';
	else if (!quality) quality = 'Unique';

	return {
		value: quality,
		elevated,
	};
}
