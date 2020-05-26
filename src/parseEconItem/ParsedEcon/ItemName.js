const decomposeName = require('../../shared/decomposeName');

const isStrangeTexture = require('./ItemName/isStrangeTexture');
const isUncraftableUnique = require('./ItemName/isUncraftableUnique');
const isUnusual = require('./ItemName/isUnusual');
const getTextureName = require('./ItemName/getTextureName');

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

		const { resources } = require('../../index');

		return decomposeName(
			this.origin,
			{
				quality: { value: resources.getQualityValue(quality), elevated },
				australium,
				festivized,
				isUniqueHat,
				killstreak: killstreak ? resources.getKillstreakValue(killstreak) : null,
				wear: wear ? resources.getWearValue(wear) : null,
				texture: texture ? getTextureName(texture) : null,
			}
		);
	}

	/**
	 * Returns full name like backpack.tf
	 * @return {string}
	 */
	getFull() {
		const { resources } = require('../../index');

		let name = this.origin;

		const { wear, craftable, tradable, texture, quality, effect } = this.econ.getNameAttributes();

		if (wear) name = `name (${resources.getWearValue(wear)})`;

		if (effect) {
			if (isUnusual(quality)) name = name.replace('Unusual ', resources.getEffectValue(effect));
			else {
				name.replace(
					`${resources.getQualityValue(quality)} `,
					`${resources.getQualityValue(quality)} ${resources.getEffectValue(effect)}`,
				);
			}
		}

		if (isUncraftableUnique(quality, craftable)) name = name.replace(/^The /, '');

		if (isStrangeTexture(quality, texture)) name += 'Strange ';
		if (!tradable) name += 'Non-Tradable ';
		if (!craftable) name += 'Non-Craftable ';

		return name;
	}
}

module.exports = ItemName;
