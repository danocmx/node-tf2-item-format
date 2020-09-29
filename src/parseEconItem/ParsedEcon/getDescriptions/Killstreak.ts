import schema from '../../../shared/schema';

import { EconDescription } from '../../../types';

/**
 * Handles killstreak actions
 */
export default class Killstreak {
	public value!: string;
	public killstreaker?: string;
	public sheen?: string;

	get killstreak() {
		return this.value;
	}

	set killstreak(value: string) {
		if (schema.getKillstreakEnum(value) < schema.getKillstreakEnum(this.killstreak)) return;

		this.value = value;
	}

	/**
 	 * Checks if description includes killstreaker
 	 * Killstreaker is an `effect` from killstreak
 	 * @param {object} description
 	 * @return {boolean}
 	 */
	static isKillstreaker(description: EconDescription): boolean {
		return description.value.startsWith('Killstreaker: ');
	}

	/**
 	 * Checks if description includes sheen
 	 * @param {object} description
 	 * @return {boolean}
 	 */
	static isSheen(description: EconDescription): boolean {
		return description.value.startsWith('Sheen: ');
	}

	/**
 	 * Checks if item is killstreak from description
 	 * @param {object} description
 	 * @return {boolean}
 	 */
	static isKillstreak(description: EconDescription): boolean {
		return description.value === 'Killstreaks Active';
	}

	/**
	 * Sets killstreaker from description
	 * @param {object} description
	 * @return {string}
	 */
	setKillstreaker(description: EconDescription): void {
		this.killstreaker = description.value.replace('Killstreaker: ', '');
		this.killstreak = 'Professional Killstreak';
	}

	/**
	 * Sets sheen from description
	 * @param {object} description
	 * @return {string}
	 */
	setSheen(description: EconDescription): void {
		this.sheen = description.value.replace('Sheen: ', '');
		this.killstreak = 'Specialized Killstreak';
	}

	/**
	 * Sets killstreak according to other attrs.
	 * @param {object} attributes
	 */
	setKillstreak(): void {
		this.killstreak = 'Killstreak';
	}
}

