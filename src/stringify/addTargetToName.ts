import getKillstreak from '../shared/getKillstreak';

/**
 * Adds target to name as specified by usableItem.
 */
export default function (name: string, target: string) {
	const killstreak = getKillstreak(name);

	// We know killstreak is defined.
	return insertTarget(name, target, killstreak as string);
}

/**
 * Inserts the target into name.
 */
function insertTarget(
	name: string,
	target: string,
	killstreak: string
): string {
	return `${killstreak} ${target} ${name.slice(killstreak.length + 1)}`;
}
