import decomposeName from '../../shared/decomposeName';

import isStrangeTexture from './ItemName/isStrangeTexture';
import isUnusual from './ItemName/isUnusual';

import ParsedEcon from '../ParsedEcon';
import { EconItem } from '../../types';

/**
 * Class that handles name.
 */
export default class ItemName {
	public econ: ParsedEcon;
	public item: EconItem;
	public origin: string;

	constructor(econ: ParsedEcon) {
		this.econ = econ;
		this.item = econ.item;
		this.origin = this.getOrigin();
	}

	getOrigin() {
		return (
			this.item.market_name
			|| this.item.market_hash_name
			// || this.item.name
		);
	}

	getShort() {
		const {
			australium,
			wear,
			killstreak,
			texture,
			elevated,
			festivized,
			quality,
			isUniqueHat,
			output,
			outputQuality,
			target,
			itemNumber
		} = this.econ.getNameAttributes('', false, false);

		return decomposeName(this.origin, {
			quality: { value: quality as string, elevated: !!elevated },
			australium,
			festivized,
			isUniqueHat,
			// We know it's a string here:
			killstreak: killstreak as string,
			wear: (wear as unknown) as string,
			texture: texture as string,
			craftable: true,
			itemNumber,

			...(output || target ? { usableItem: { output, target, outputQuality: outputQuality as string } } : {}),
		});
	}

	/**
	 * Returns full name like backpack.tf
	 * @return {string}
	 */
	getFull() {
		let name = this.origin;

		const {
			craftable,
			tradable,
			texture,
			quality,
			effect,
		} = this.econ.getNameAttributes('', false, false);

		if (effect) {
			if (isUnusual(quality as string))
				name = name.replace('Unusual ', `${effect} `);
			else {
				name = name.replace(`${quality} `, `${quality} ${effect} `);
			}
		}

		if (isStrangeTexture(quality as string, texture as string))
			name = `Strange ${name}`;
		if (!tradable) name = `Non-Tradable ${name}`;
		if (!craftable) name = `Non-Craftable ${name}`;

		return name;
	}
}
