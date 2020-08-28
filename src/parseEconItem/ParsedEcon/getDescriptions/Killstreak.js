/**
 * Handles killstreak actions
 */
class Killstreak {
	constructor() {
		this.value = null;
	}

	get killstreak() {
		return this.value;
	}

	set killstreak(value) {
		if (value < this.value) {
			return;
		}

		this.value = value;
	}

	/**
 	 * Checks if description includes killstreaker
 	 * Killstreaker is an `effect` from killstreak
 	 * @param {object} description
 	 * @return {boolean}
 	 */
	static isKillstreaker(description) {
		return description.value.startsWith('Killstreaker: ');
	}

	/**
 	 * Checks if description includes sheen
 	 * @param {object} description
 	 * @return {boolean}
 	 */
	static isSheen(description) {
		return description.value.startsWith('Sheen: ');
	}

	/**
 	 * Checks if item is killstreak from description
 	 * @param {object} description
 	 * @return {boolean}
 	 */
	static isKillstreak(description) {
		return description.value === 'Killstreaks Active';
	}

	/**
	 * Sets killstreaker from description
	 * @param {object} description
	 * @return {string}
	 */
	setKillstreaker(description) {
		this.killstreaker = description.value.replace('Killstreaker: ', '');
		this.killstreak = 'Professional Killstreak';
	}

	/**
	 * Sets sheen from description
	 * @param {object} description
	 * @return {string}
	 */
	setSheen(description) {
		this.sheen = description.value.replace('Sheen: ', '');
		this.killstreak = 'Specialized Killstreak';
	}

	/**
	 * Sets killstreak according to other attrs.
	 * @param {object} attributes
	 */
	setKillstreak() {
		this.killstreak = 'Killstreak';
	}
}

module.exports = Killstreak;
