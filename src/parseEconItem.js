const getAttributesFromDescriptions = require('./parseEconItem/getAttributes/fromDescriptions');
const getAttributesFromName = require('./parseEconItem/getAttributes/fromName');
const getAttributesFromProperties = require('./parseEconItem/getAttributes/fromProperties');
const getAttributesFromTags = require('./parseEconItem/getAttributes/fromTags');

const fixElevated = require('./parseEconItem/fixElevated');

/**
 * Parses Economy item from steam.
 * @param {Object} item
 * @return {AttributeItem}
 */
module.exports = function (item) {
	const tags = getAttributesFromTags(item);
	const name = getAttributesFromName(item);
	const properties = getAttributesFromProperties(item);
	const descriptions = getAttributesFromDescriptions(
		item,
		item.market_name || item.name || item.market_hash_name,
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
