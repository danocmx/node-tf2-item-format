import schema from '../../schema';

import isNumber from '../../util/isNumber';

/**
 * Iterates over effects object to get matching effect.
 */
// eslint-disable-next-line consistent-return
export default function (name: string): string|void {
	if (!schema.effects) schema.loadEffects();

	const effectsKeys = Object.keys(schema.effects);
	for (let i = 0; i < effectsKeys.length; i++) {
		const effect: string|number = effectsKeys[i];

		if (!isNumber(effect) && name.includes(`${effect} `) && !isException(name, effect)) {
			return effect;
		}
	}
};

/**
 * Which item and effect cannot exist together.
 */
const EXCEPTIONS: [string, string][] = [['Cool Breeze', 'Cool'], ['Hot Heels', 'Hot'], ['Hot Case', 'Hot'], ['A Head Full of Hot Air', 'Hot']];

function isException(name: string, effect: string): boolean {
	return EXCEPTIONS.some((exception) => {
		const [exceptionName, exceptionEffect] = exception;
		return name.includes(exceptionName) && effect === exceptionEffect;
	});
}
