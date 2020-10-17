import schema from './shared/schema';

import shouldSetNumber from './stringify/shouldSetNumber';
import shouldSetQuality from './stringify/shouldSetQuality';
import addTargetToName from './stringify/addTargetToName';

import getOutput from './shared/getOutput';

import { ItemAttributes } from './types';

/**
 * Stringifies item object into item name
 */
export default function ({
	name,
	craftable,
	australium,
	festivized,
	killstreak,
	elevated,
	defindex,
	quality,
	wear,
	texture,
	effect,
	target,
	output,
	outputQuality,
	itemNumber,
	isUniqueHat,
}: ItemAttributes): string {
	let itemName = '';

	if (!name && defindex) name = getName(defindex as number);

	if (!craftable) {
		itemName += 'Non-Craftable ';
	}

	if (elevated) {
		itemName += 'Strange ';
	}

	if (shouldSetQuality(quality, elevated, effect)) {
		itemName += `${schema.getQualityName(quality)} `;
	}

	if (effect) {
		itemName += `${schema.getEffectName(effect)} `;
	}

	if (festivized) {
		itemName += 'Festivized ';
	}

	if (killstreak && canAddKillstreak(killstreak, target)) {
		itemName += `${schema.getKillstreakName(killstreak)} `;
	}

	if (isAustralium(australium)) {
		itemName += 'Australium ';
	}

	if (texture) {
		itemName += `${schema.getTextureName(texture)} `;
	}

	if (target && isKillstreakKitOrFabricator(name, target)) {
		// eslint-disable-next-line no-param-reassign
		name = addTargetToName(name, schema.getName(target as string));
	} else if (target || (output && outputQuality)) {
		console.log(target);
		// There can be both target and output, target is prefered thus the check.
		// getOutput constructs full output name if quality present.
		// target has no quality
		itemName += `${
			output && !target
				? getOutput(
						schema.getName(output),
						schema.getQualityName(outputQuality as number)
				  )
				: schema.getName(target as string)
		} `;
	}

	if (isUniqueHat) {
		itemName += 'The ';
	}

	// Either we have name or defindex.
	itemName += name;

	if (wear) {
		itemName += ` (${schema.getWearName(wear)})`;
	}

	if (itemNumber && shouldSetNumber(itemNumber)) {
		if (itemNumber.type === 'series')
			itemName += ` Series #${itemNumber.value}`;
		else itemName += ` #${itemNumber.value}`;
	}

	return itemName;
}

function getName(defindex: number): string {
	const name = schema.getName(defindex);

	if (name.includes(' Fabricator')) {
		return name.replace(' Fabricator', ' Kit Fabricator');
	}

	return name;
}

function isAustralium(australium?: number | boolean): boolean {
	return !!(australium && australium !== -1);
}

/**
 * Checks if we can add killstreak to the name,
 * killstreak stays present on target items such as kits and fabricators.
 * @param {*} killstreak
 * @param {string} target
 * @return {boolean}
 */
function canAddKillstreak(
	killstreak?: number | string,
	target?: string
): boolean {
	return !!(killstreak && !target);
}

function isKillstreakKitOrFabricator(name: string, target?: string): boolean {
	return !!(target && (/ Kit/.test(name) || / Fabricator/.test(name))); // This checks for fabricator too.
}
