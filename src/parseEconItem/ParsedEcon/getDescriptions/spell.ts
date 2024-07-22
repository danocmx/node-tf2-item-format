import { EconDescription } from '../../../types';

/**
 * Checks if description includes spell
 * @param {object} description
 * @return {boolean}
 */
export function isSpell(description: EconDescription): boolean {
	return (
		description.value.startsWith('Halloween: ') &&
		description.color === '7ea9d1'
	);
}

/**
 * Gets spell from description
 * @param {object} description
 * @return {string}
 */
export function getSpell(description: EconDescription): string {
	return description.value
		.replace('Halloween: ', '')
		.replace(' (spell only active during event)', '');
}
