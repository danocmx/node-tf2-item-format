import schema from '../../shared/schema';

import isNumber from '../../util/isNumber';

import Attributes from '../Attributes';

const EFFECT_EXCEPTIONS = [
	['Orbiting Fire', 'Eerie Orbiting Fire'],
	['Spellbound', 'Spellbound Aspect'],
	['Haunted Phantasm', 'Haunted Phantasm Jr'],
	['Ghastly Ghosts', 'Ghastly Ghosts Jr'],
]

/**
 * Iterates over effects object to get matching effect.
 */
// eslint-disable-next-line consistent-return
export default function (name: string, attributes: Attributes): string|void {
	if (!schema.effects) schema.loadEffects();

	const effectsKeys = Object.keys(schema.effects);
	for (let i = 0; i < effectsKeys.length; i++) {
		let effect: string|number = effectsKeys[i];

		if (effect === 'Haunted Ghosts' && name.includes('Haunted Ghosts ') && attributes.wear) {
			continue;
		}

		for (let i = 0; i < EFFECT_EXCEPTIONS.length; i++) {
			const exception = EFFECT_EXCEPTIONS[i];
			if (effect === exception[0] && name.includes(`${exception[1]} `)) return exception[1];
		}

		if (!isNumber(effect) && name.includes(`${effect} `) && !isException(name, effect)) {
			return effect;
		}
	}
};

/**
 * Which item and effect cannot exist together.
 */
const HAT_NAME_EXCEPTIONS: [string, string][] = [['Cool Breeze', 'Cool'], ['Cool Cat Cardigan', 'Cool'], ['Hot Heels', 'Hot'], ['Hot Case', 'Hot'], ['A Head Full of Hot Air', 'Hot']];

function isException(name: string, effect: string): boolean {
	return HAT_NAME_EXCEPTIONS.some((exception) => {
		const [exceptionName, exceptionEffect] = exception;
		return name.includes(exceptionName) && effect === exceptionEffect;
	});
}
