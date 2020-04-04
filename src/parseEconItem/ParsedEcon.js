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

	get name() {
		return this.item.market_name || this.itemitem.name || this.itemitem.market_hash_name;
	}

	getItemName() {
		// TODO: messure time
		const { resources } = require('../index');

		const { australium, wear, killstreak,
			texture, elevated, festivized, quality } = this.getNameAttributes();

		return this.name
			.replace(australium ? 'Australium ' : '', '')
			.replace(festivized ? 'Festivized ' : '', '')
			.replace(elevated ? 'Strange ' : '', '')
			.replace(texture || '', '')
			.replace(resources.getKillstreakValue(killstreak), '')
			.replace(resources.getWearValue(wear), '')
			.replace(resources.getQualityValue(quality), '')
			.trim();
	}

	get fullName() {
		return this.descriptions.craftable ? this.name : `Non-Craftable ${this.name}`;
	}

	// TODO: update resources
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
