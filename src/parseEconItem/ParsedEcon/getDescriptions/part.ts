import { EconDescription } from '../../../types';

/**
 * Checks if description includes part
 */
export function isPart(description: EconDescription): boolean {
	/**
	 * Two types of part descriptions:
	 * 1) '(Airborne Enemy Kills: 4)'
	 * 2) '     Airborne Enemy Kill: 4'
	 */
	return / {5}.+: \d+|\(.+: \d+\)/.test(description.value);
};

/**
 * Gets part from description
 */
export function getPart(description: EconDescription): string {
	const match = description.value.match(/^ {5}(.+): \d+|\((.+): \d+\)$/) || [];

	return match[1] || match[2];
};
