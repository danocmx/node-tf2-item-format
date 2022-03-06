import { ItemNumber } from '../types';

export default function (name: string, itemNumber: ItemNumber) {
	let itemName = name;

	return itemName
		.replace(` Series #${itemNumber.value}`, '')
		.replace(` #${itemNumber.value}`, '');
}
