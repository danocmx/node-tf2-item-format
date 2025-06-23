import { EconDescription } from '../../../types';
import { ISchema } from '../../../types/schema';

const KILLSTREAKER_SHEEN_REGEX = /^\(Killstreaker: ([a-zA-Z0-9 \-]+), Sheen: ([a-zA-Z0-9 \-]+)\)$/

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

	constructor(private schema: ISchema) {}

	set killstreak(value: string) {
		if (
			this.schema.getKillstreakEnum(value) <
			this.schema.getKillstreakEnum(this.killstreak)
		)
			return;

		this.value = value;
	}

	static isKillstreakerSheenDescription(description: EconDescription): boolean {
		return KILLSTREAKER_SHEEN_REGEX.test(description.value)
	}

	/**
	 * Checks if description includes killstreaker
	 * Killstreaker is an `effect` from killstreak
	 * @param {object} description
	 * @return {boolean}
	 */
	static isKillstreaker(description: EconDescription): boolean {
		return (
			description.value.startsWith('Killstreaker: ') &&
			description.color === '7ea9d1'
		);
	}

	/**
	 * Checks if description includes sheen
	 * @param {object} description
	 * @return {boolean}
	 */
	static isSheen(description: EconDescription): boolean {
		if (description.value.startsWith('(Sheen: ') && description.value.endsWith(')')) {
			return true;
		}

		return (
			description.value.startsWith('Sheen: ') &&
			description.color === '7ea9d1'
		);
	}

	/**
	 * Checks if item is killstreak from description
	 * @param {object} description
	 * @return {boolean}
	 */
	static isKillstreak(description: EconDescription): boolean {
		return (
			description.value === 'Killstreaks Active' &&
			description.color === '7ea9d1'
		);
	}

	setKillstreakerSheen(description: EconDescription): void {
		const match = description.value.match(KILLSTREAKER_SHEEN_REGEX)
		if (match == null) {
			throw new Error("Wrongly matched killstreaker for econ item, report this incident to github.");
		}

		const [_, killstreaker, sheen] = match;

		this.sheen = sheen;
		this.killstreaker = killstreaker;
		this.killstreak = 'Professional Killstreak';
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
		if (description.value.startsWith('(')) {
			this.sheen = description.value
				.replace(/^\(Sheen: /, '')
				.replace(/\)$/, '');
		} else {
			this.sheen = description.value.replace('Sheen: ', '');
		}

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
