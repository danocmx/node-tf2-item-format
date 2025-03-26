import isNumber from '../../util/isNumber';

import Attributes from '../Attributes';

const EFFECT_EXCEPTIONS = [
	['Orbiting Fire', 'Eerie Orbiting Fire'],
	['Spellbound', 'Spellbound Aspect'],
	['Haunted Phantasm', 'Haunted Phantasm Jr'],
	['Ghastly Ghosts', 'Ghastly Ghosts Jr'],
];

/**
 * Iterates over effects object to get matching effect.
 */
// eslint-disable-next-line consistent-return
export default function (name: string, attributes: Attributes): string | void {
	const effects = attributes.schema.getEffects();
	const effectsKeys = Object.keys(effects);
	for (let i = 0; i < effectsKeys.length; i++) {
		let effect: string | number = effectsKeys[i];

		if (!name.includes(`${effect} `)) {
			continue;
		}

		// New type of exception
		if (effect === 'Smoking' && name.includes('Smoking Smoking Skid Lid')) {
			return 'Smoking';
		}

		if (isEffectTexture(attributes, effect)) {
			continue;
		}

		for (let j = 0; j < EFFECT_EXCEPTIONS.length; j++) {
			const exception = EFFECT_EXCEPTIONS[j];
			if (effect === exception[0] && name.includes(`${exception[1]} `))
				return exception[1];
		}

		if (!isNumber(effect) && !isHatNameException(name, effect)) {
			return effect;
		}
	}
}

/**
 * Which item and effect cannot exist together.
 */
const HAT_NAME_EXCEPTIONS: [string, string][] = [
	['Cool Breeze', 'Cool'],
	['Cool Cat Cardigan', 'Cool'],
	['Hot Heels', 'Hot'],
	['Hot Case', 'Hot'],
	['A Head Full of Hot Air', 'Hot'],
	['Bonk Atomic Punch', 'Atomic'],
	['Hot Hand', 'Hot'],
	['Smoking Jacket', 'Smoking'],
	['Smoking Skid Lid', 'Smoking'],
	['Hot Huaraches', 'Hot'],
	['Cool Capuchon', 'Cool'],
	['Hot Dogger', 'Hot'],
	['Atomic Accolade', 'Atomic'],
	['Bonk! Atomic Punch', 'Atomic'],
	['Accursed Apparition', 'Accursed'],
	['Taunt: The Hot Wheeler', 'Hot'],
	['Frostbite Bonnet', 'Frostbite'],
	['Cool Warm Sweater', 'Cool'],
	['Frostbite Fit', 'Frostbite'],
	['Hot Spaniel', 'Hot'],
];

function isHatNameException(name: string, effect: string): boolean {
	return HAT_NAME_EXCEPTIONS.some((exception) => {
		const [exceptionName, exceptionEffect] = exception;
		return name.includes(exceptionName) && effect === exceptionEffect;
	});
}

export const TEXTURE_EFFECT_EXCEPTION: string[] = ['Haunted Ghosts', 'Pumpkin Patch', 'Stardust'];

function isEffectTexture(
	attributes: Attributes,
	effectOrTexture: string
): boolean {
	return !!(
		TEXTURE_EFFECT_EXCEPTION.includes(effectOrTexture) && attributes.wear
	);
}
