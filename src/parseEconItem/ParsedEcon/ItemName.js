const decomposeName = require('../../shared/decomposeName');

const isStrangeTexture = require('./ItemName/isStrangeTexture');
const isUnusual = require('./ItemName/isUnusual');

/**
 * Class that handles name.
 */
class ItemName {
	constructor(econ) {
		this.econ = econ;
		this.item = econ.item;
		this.origin = this.getOrigin();
	}

	getOrigin() {
		return this.item.market_name || this.item.name || this.item.market_hash_name;
	}

	getShort() {
		const { australium, wear, killstreak,
			texture, elevated, festivized, quality, isUniqueHat } = this.econ.getNameAttributes();

		return decomposeName(
			this.origin,
			{
				quality: { value: quality, elevated },
				australium,
				festivized,
				isUniqueHat,
				killstreak,
				wear,
				texture,
			},
		);
	}

	/**
	 * Returns full name like backpack.tf
	 * @return {string}
	 */
	getFull() {
		let name = this.origin;

		const { craftable, tradable, texture, quality, effect } = this.econ.getNameAttributes();

		if (effect) {
			if (isUnusual(quality)) name = name.replace('Unusual ', `${effect} `);
			else {
				name = name.replace(
					`${quality} `,
					`${quality} ${effect} `,
				);
			}
		}

		if (isStrangeTexture(quality, texture)) name = `Strange ${name}`;
		if (!tradable) name = `Non-Tradable ${name}`;
		if (!craftable) name = `Non-Craftable ${name}`;

		return name;
	}
}

module.exports = ItemName;
