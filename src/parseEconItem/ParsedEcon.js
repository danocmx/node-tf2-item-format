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
		const texture = this.descriptions.texture || this.nameAttrs.texture;

		return {
			tradable: this.properties.tradable,
			craftable: this.descriptions.craftable,
			quality: this.tags.quality,

			// Only append if exists
			...(texture ? { texture } : {}),
			...(this.descriptions.wear ? { wear: this.descriptions.wear } : {}),
			...(this.descriptions.elevated ? { elevated: this.descriptions.elevated } : {}),
			...(this.descriptions.australium ? { australium: this.descriptions.australium } : {}),
			...(this.descriptions.festivized ? { festivized: this.descriptions.festivized } : {}),
			...(this.descriptions.effect ? { effect: this.descriptions.effect } : {}),
			...(this.nameAttrs.isUniqueHat ? { isUniqueHat: this.nameAttrs.isUniqueHat } : {}),
			...(this.descriptions.killstreak.value
				? { killstreak: this.descriptions.killstreak.value } : {}),
		};
	}

	getAttributes() {
		return {
			...this.getNameAttributes(),

			classes: this.tags.classes,
			type: this.tags.type,

			// Only append if exists
			...(this.tags.collection ? { collection: this.tags.collection } : {}),
			...(this.tags.grade ? { grade: this.tags.grade } : {}),
			...(this.tags.paint ? { paint: this.tags.paint } : {}),

			parts: this.descriptions.parts,
			spells: this.descriptions.spells,

			marketable: this.properties.marketable,
			commodity: this.properties.commodity,
		};
	}
}

module.exports = ParsedEcon;
