const getAttributesFromDescriptions = require('./parseEconItem/ParsedEcon/getDescriptions');
const getAttributesFromName = require('./parseEconItem/ParsedEcon/getNameAttributes');
const getAttributesFromProperties = require('./parseEconItem/ParsedEcon/getPropertyAttributes');
const getAttributesFromTags = require('./parseEconItem/ParsedEcon/getTags');

const getName = require('./parseEconItem/ParsedEcon/getFullName');
const fixElevated = require('./parseEconItem/fixElevated');

/**
 * Parses Economy item from steam.
 * @param {Object} item
 * @return {AttributeItem}
 */
module.exports = function (item) {
	// TODO: new TagAttributes (extend Attributes?) with all data.
	const tags = getAttributesFromTags(item);
	const name = getAttributesFromName(item);
	const properties = getAttributesFromProperties(item);
	const descriptions = getAttributesFromDescriptions(
		item,
		getName(item),
		tags,
	);

	const attributes = {
		...tags,
		...name,
		...properties,
		...descriptions,
	};

	fixElevated(attributes);

	return attributes;
};
