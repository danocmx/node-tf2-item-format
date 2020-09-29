import { ItemNumber } from '../types';

/**
 * Checks if number can on items name.
 */
export default function ({ value, type }: ItemNumber|{ type: '', value: 0 } = { type: '', value: 0 }) {
	if (type === 'craft') return value <= 100;
	if (type && value) return true;

	return false;
};
