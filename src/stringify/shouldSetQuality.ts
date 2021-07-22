import isUnique from '../shared/isUnique';
import isStrangeUnique from '../shared/isStrangeUnique';

/**
 * Checks if quality should be set on name by few checks.
 */
export default function (
	quality: string | number,
	elevated?: boolean,
	effect?: string | number
) {
	if (isStrangeUnique(quality, elevated)) return true;

	return (
		checkForEffectAndUnusual(quality, effect) &&
		!isUnique(quality) &&
		!isDecorated(quality)
	);
}

// TODO: rename
function checkForEffectAndUnusual(
	quality: string | number,
	effect?: string | number
) {
	return (
		isNonUnusualWithEffect(quality, effect) || hasNoEffect(quality, effect)
	);
}

/**
 * Isnt unusual quality with effect
 * We add it to name.
 * @return {boolean}
 */
function isNonUnusualWithEffect(
	quality: string | number,
	effect?: string | number
) {
	return !isUnusual(quality) && !!effect;
}

/**
 * Has quality without effect
 */
function hasNoEffect(quality: string | number, effect?: string | number) {
	return quality && !effect;
}

function isDecorated(quality: string | number) {
	return quality === 'Decorated Weapon' || quality === 15;
}

function isUnusual(quality: string | number) {
	return quality === 'Unusual' || quality === 5;
}
