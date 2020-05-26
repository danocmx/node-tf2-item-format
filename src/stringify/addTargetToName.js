const getKillstreak = require('../shared/getKillstreak');

/**
 * Adds target to name as specified by usableItem.
 * @param {string} name
 * @param {string} target
 * @return {string}
 */
module.exports = function (name, target) {
	const killstreak = getKillstreak(name);

	return insertTarget(name, target, killstreak);
};

/**
 * Inserts the target into name.
 * @param {string} name
 * @param {string} target
 * @param {string} killstreak
 * @return {string}
 */
function insertTarget(name, target, killstreak) {
	return `${killstreak} ${target} ${name.slice(killstreak.length + 1)}`;
}
