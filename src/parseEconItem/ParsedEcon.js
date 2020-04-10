const ItemName = require('./ParsedEcon/ItemName');

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
		this.itemName = new ItemName(this);
		this.fullEcon = hasAppData(this.item);

		this.tags = getTags(this);
		this.descriptions = getDescriptions(this);
		this.properties = getPropertyAttributes(this);
		this.nameAttrs = getNameAttributes(this);
	}

	get id() {
		return this.item.assetid;
	}

	/**
	 * Gets name from ECON.
	 * @return {string}
	 */
	get name() {
		return this.itemName.origin;
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
			tradable: this.properties.tradable,
			craftable: this.descriptions.craftable,
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

			paint: this.descriptions.paint,
			parts: this.descriptions.parts,
			spells: this.descriptions.spells,

			marketable: this.properties.marketable,
			commodity: this.properties.commodity,
		};
	}
}

module.exports = ParsedEcon;
