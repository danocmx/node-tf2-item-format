import { EconDescription } from '../../../types';

/**
 * Checks if description includes paint
 */
export function isPaint(description: EconDescription): boolean {
	return /^Paint Color: /.test(description.value) && description.color === '756b5e';
};

/**
 * Gets paint from description
 */
export function getPaint(description: EconDescription): string {
	return description.value.replace('Paint Color: ', '');
};
