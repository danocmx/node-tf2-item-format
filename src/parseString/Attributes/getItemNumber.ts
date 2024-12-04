import { ItemNumber } from '../../types';

/**
 * @typedef {Object} itemNumber
 * @property {number} value
 * @property {string} type
 */

/**
 * Gets number & type of an item
 * eg. Medal, crate, case or craft number.
 * Not sure how to call this, so feel free to make suggestions.
 * @param {string} name
 * @return {itemNumber}
 */
export default function (name: string): ItemNumber | null {
	const value = getValue(name);
	if (!value) return null;

	return {
		type: getType(name),
		value,
	};
}

function getType(name: string): ItemNumber['type'] {
	const [_, type] = (name.match(
		/\b(Medal|Crate|Case|Munition|Cooler|Strongbox)\b/
	) || []) as [
		any,
		'Medal' | 'Crate' | 'Case' | 'Munition' | 'Cooler' | 'Strongbox',
	];

	// Same thing, different name.
	if (
		type === 'Case' ||
		type === 'Munition' ||
		type == 'Cooler' ||
		type == 'Strongbox'
	)
		return 'crate';

	// Used for chemistry sets.
	if (!type && name.includes('Series ')) return 'series';

	return type ? transformTypeToLowerCase(type) : 'craft';
}

function getValue(name: string): number | null {
	const [_, value] = name.match(/ #(\d+)/) || [];
	const numberValue: number = parseInt(value);

	return isNaN(numberValue) ? null : numberValue;
}

export function transformTypeToLowerCase(
	type: 'Medal' | 'Crate' | 'Case' | 'Munition'
): ItemNumber['type'] {
	return type.toLowerCase() as ItemNumber['type'];
}
