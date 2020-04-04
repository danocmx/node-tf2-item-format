/* eslint-disable */
const getFullName = require('./ParsedEcon/getFullName');
const hasAppData = require('./ParsedEcon/hasAppData');

const getTags = require('./parseEconItem/ParsedEcon/getTags');
const getPropertyAttributes = require('./parseEconItem/ParsedEcon/getPropertyAttributes');
const getNameAttributes = require('./parseEconItem/ParsedEcon/getNameAttributes');
const getDescriptions = require('./parseEconItem/ParsedEcon/getDescriptions');


class ParsedEcon {
	constructor(item) {
		this.item = { ...item, ...getFullName(item) };
		this.fullEcon = hasAppData(this.item);

		this.tags = getTags(this);
		this.properties = getPropertyAttributes(this);
		this.name = getNameAttributes(this);
		this.descriptions = getDescriptions(this);
	}
}

module.exports = ParsedEcon;
