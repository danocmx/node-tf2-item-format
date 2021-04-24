import { ItemNumber } from '../types';

export default function (name: string, itemNumber: ItemNumber) {
	let itemName = name;

	if (itemNumber.type === 'series')
		itemName = itemName.replace(` Series #${itemNumber.value}`, '');
	else itemName = itemName.replace(` #${itemNumber.value}`, '');

	return itemName;
}

/**
 * parseEcon
- getEffect [x]

Econ
- Killstreak
- getTextureName

createBPListing
- index [x]

shared
- getTexture [x]
- getConvertedIntAttributes [x]
- getDefindexes [x]

stringify
- index [x]

Desired syntax:

createFormat(schema);
default - createFormat(staticSchema);
*/
