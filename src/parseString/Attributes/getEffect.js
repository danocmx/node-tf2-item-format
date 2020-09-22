const { requireStatic } = require('tf2-static-schema');

const schema = require('../../schema');
const isNumber = require('../../util/isNumber');

/**
 * Iterates over effects object to get matching effect.
 * @param {string} name
 * @return {string} effect name
 */
// eslint-disable-next-line consistent-return
module.exports = function (name) {
	if (!schema.effects) schema.effects = requireStatic('effects');

	const effectsKeys = Object.keys(schema.effects);
	for (let i = 0; i < effectsKeys.length; i++) {
		const effect = effectsKeys[i];

		if (!isNumber(effect) && name.includes(`${effect} `) && !isException(name, effect)) {
			return effect;
		}
	}
};

/**
 * Which item and effect cannot exist together.
 */
const EXCEPTIONS = [['Cool Breeze', 'Cool'], ['Hot Heels', 'Hot'], ['Hot Case', 'Hot'], ['A Head Full of Hot Air', 'Hot']];

function isException(name, effect) {
	return EXCEPTIONS.some((exception) => {
		const [exceptionName, exceptionEffect] = exception;
		return name.includes(exceptionName) && effect === exceptionEffect;
	});
}
