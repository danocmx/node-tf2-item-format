const getAttributesFromDescriptions = require('./parseEconItem/getAttributes/fromDescriptions');
const getAttributesFromName = require('./parseEconItem/getAttributes/fromName');
const getAttributesFromProperties = require('./parseEconItem/getAttributes/fromProperties');
const getAttributesFromTags = require('./parseEconItem/getAttributes/fromTags');

const getName = require('./parseEconItem/getName');
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
