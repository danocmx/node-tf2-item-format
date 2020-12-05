import ParsedEcon from '../../ParsedEcon';

import { EconDescription } from '../../../types';

/**
 * Checks if description includes part
 */
export function isPart(description: EconDescription, econ: ParsedEcon): boolean {
	/**
	 * Two types of part descriptions:
	 * 1) '(Airborne Enemy Kills: 4)'
	 * 2) '     Airborne Enemy Kill: 4'
	 */
	// type === 'Strange'
	// type === 'Points Scored'
	// 
	if (!/^( {5}(.+): \d+)|(\((.+): \d+\))$/.test(description.value)) return false;

	const part = getPart(description);

	if (['Kills', 'Assists'].includes(part)) {
		return isCosmetic(econ);
	}

	// Regex matches and now we just check for color.
	return description.color === '756b5e';
};

/**
 * Gets part from description
 */
export function getPart(description: EconDescription): string {
	const match = description.value.match(/^ {5}(.+): \d+|\((.+): \d+\)$/) || [];

	return match[1] || match[2];
};

function isCosmetic(econ: ParsedEcon) {
	return econ.item.type.includes('Strange') && econ.item.type.includes('Points Scored')
}