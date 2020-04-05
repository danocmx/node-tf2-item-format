const { isType, getType, isClass, getClass, isGrade, getGrade, isCollection, getCollection } = require('./getTags/tags');
const { isQuality, getQuality, isWear, getWear } = require('./getTags/resourceTags');

/**
 * @typedef {tagAttributes}
 * @property {number} quality
 * @property {string} type tf2 item category
 * @property {string} class tf2 class
 * @property {string} grade rarity
 * @property {string} collection
 * @property {number} wear
 */

/**
 * Gets all important attributes from Tags
 * @param {Object} tags
 * @return {tagAttributes}
 */
module.exports = function ({ item }) {
	const { tags = [] } = item;

	/**
	 * @type {tagAttributes}
	 */
	const attributes = {
		quality: 6,
		wear: 0,
		classes: [],
	};

	for (let i = 0; i < tags.length; i++) {
		const tag = tags[i];

		// The position is saved.
		if (isQuality(tag)) attributes.quality.push(getQuality(tag)); // diff
		else if (isType(tag)) attributes.type = getType(tag);	// diff
		else if (isClass(tag)) attributes.class = getClass(tag);
		else if (isGrade(tag)) attributes.grade = getGrade(tag);
		else if (isCollection(tag)) attributes.collection = getCollection(tag);
		else if (isWear(tag)) attributes.wear = getWear(tag); // diff
	}

	return attributes;
};
