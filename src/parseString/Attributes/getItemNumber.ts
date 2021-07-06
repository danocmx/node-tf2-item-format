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

function getType(name: string): string {
	const [_, type] = name.match(/\b(Medal|Crate|Case|Series|Munition)\b/) || [];

	// Same thing, different name.
	if (type === 'Case' || type === 'Munition') return 'crate';

	return type ? type.toLowerCase() : 'craft';
}

function getValue(name: string): number | null {
	const [_, value] = name.match(/ #(\d+)/) || [];
	const numberValue: number = parseInt(value);

	return isNaN(numberValue) ? null : numberValue;
}
