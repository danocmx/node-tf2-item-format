const isStrangeTexture = require('./ItemName/isStrangeTexture');
const isUncraftableUnique = require('./ItemName/isUncraftableUnique');
const isUnusual = require('./ItemName/isUnusual');
const isUnique = require('./ItemName/isUnique');
const isTextureDefindex = require('./ItemName/isTextureDefindex');

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
		// TODO: interchange with parseString after usageItems are added to econItem.
		const { resources } = require('../../index');

		const attributes = this.econ.getNameAttributes();

		let { texture } = attributes;
		const { australium, wear, killstreak,
			elevated, festivized, quality } = attributes;

		let name = this.origin;

		if (australium) name = name.replace('Australium ', '');
		if (festivized) name = name.replace('Festivized ', '');
		if (elevated) name = name.replace('Strange ', '');
		if (killstreak) name = name.replace(`${resources.getKillstreakValue(killstreak)} `, '');
		if (wear) name = name.replace(` (${resources.getWearValue(wear)})`, '');

		if (texture) {
			if (isTextureDefindex(texture)) texture = resources.gettTextureValue(texture);
			name = name.replace(`${texture} `, '');
		}

		if (isUnique(quality)) name = name.replace(/^The /, '');
		else name = name.replace(`${resources.getQualityValue(quality)} `, '');

		return name;
	}

	/**
	 * Returns full name like backpack.tf
	 * @return {string}
	 */
	getFull() {
		// TODO: change with better management
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
