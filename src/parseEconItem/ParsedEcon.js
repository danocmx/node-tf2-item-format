const hasAppData = require('./ParsedEcon/hasAppData');

const getTags = require('./ParsedEcon/getTags');
const getPropertyAttributes = require('./ParsedEcon/getPropertyAttributes');
const getNameAttributes = require('./ParsedEcon/getNameAttributes');
const getDescriptions = require('./ParsedEcon/getDescriptions');

/**
 * Parser class.
 */
class ParsedEcon {
	constructor(item) {
		this.item = { ...item };
		this.fullEcon = hasAppData(this.item);

		this.tags = getTags(this);
		this.descriptions = getDescriptions(this);
		this.properties = getPropertyAttributes(this);
		this.nameAttrs = getNameAttributes(this);
	}

	/**
	 * Gets name from ECON.
	 * @return {string}
	 */
	get name() {
		return this.item.market_name || this.itemitem.name || this.itemitem.market_hash_name;
	}

	/**
	 * Gets fully fixed name with all attributes.
	 * @todo add tradable, effect
	 * @return {string}
	 */
	get fullName() {
		return this.descriptions.craftable ? this.name : `Non-Craftable ${this.name}`;
	}

	/**
	 * Gets name without any attributes.
	 * @return {string}
	 */
	getItemName() {
		const { resources } = require('../index');

		const { australium, wear, killstreak,
			texture, elevated, festivized, quality } = this.getNameAttributes();

		let { name } = this;

		if (australium) name = name.replace('Australium ', '');
		if (festivized) name = name.replace('Festivized ', '');
		if (elevated) name = name.replace('Strange ', '');
		if (texture) name = name.replace(`${texture} `, '');
		if (killstreak) name = name.replace(`${resources.getKillstreakValue(killstreak)} `, '');
		if (wear) name = name.replace(`${resources.getWearValue(wear)} `, '');
		if (quality !== resources.qualities.Unique) name = name.replace(`${resources.getQualityValue(quality)} `, '');

		return name;
	}

	getImageURL() {
		return `https://steamcommunity-a.akamaihd.net/economy/image/${this.item.icon_url}/`;
	}

	getLargeImageURL() {
		return `https://steamcommunity-a.akamaihd.net/economy/image/${this.item.icon_url_large}/`;
	}

	/**
	 * Gets attributes that are included in the name.
	 * @return {Object}
	 */
	getNameAttributes() {
		return {
			quality: this.tags.quality,
			wear: this.tags.wear,
			killstreak: this.descriptions.killstreak.value,
			texture: this.descriptions.texture,
			elevated: this.properties.elevated,
			australium: this.nameAttrs.australium,
			festivized: this.descriptions.festivized,
		};
	}

	getAttributes() {
		return {
			...this.getNameAttributes(),

			class: this.tags.class,
			collection: this.tags.collection,
			grade: this.tags.grade,
			type: this.tags.type,

			craftable: this.descriptions.craftable,
			paint: this.descriptions.paint,
			parts: this.descriptions.parts,
			spells: this.descriptions.spells,

			tradable: this.properties.tradable,
			marketable: this.properties.marketable,
			commodity: this.properties.commodity,
		};
	}
}

module.exports = ParsedEcon;
