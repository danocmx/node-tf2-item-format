/**
 * Checks if quality should be set on name by few checks.
 * @param {number} quality
 * @param {boolean} elevated
 * @param {number} effect
 * @return {boolean}
 */
module.exports = function (quality, elevated, effect) {
	if (isStrangeUnique(quality, elevated)) return true;

	return checkForEffectAndUnusual(quality, effect) && !isUnique(quality) && !isDecorated(quality);
};

// TODO: rename
function checkForEffectAndUnusual(quality, effect) {
	return isNonUnusualWithEffect(quality, effect) || hasNoEffect(quality, effect);
}

/**
 * Isnt unusual quality with effect
 * We add it to name.
 * @return {boolean}
 */
function isNonUnusualWithEffect(quality, effect) {
	return !isUnusual(quality) && !!effect;
}

/**
 * Has quality without effect
 */
function hasNoEffect(quality, effect) {
	return quality && !effect;
}

function isStrangeUnique(quality, elevated) {
	return isUnique(quality) && !!(elevated);
}

function isDecorated(quality) {
	return quality === 'Decorated Weapon' || quality === 15;
}

function isUnusual(quality) {
	return quality === 'Unusual' || quality === 5;
}

function isUnique(quality) {
	return quality === 'Unique' || quality === 6;
}
