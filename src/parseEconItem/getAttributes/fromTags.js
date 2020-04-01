const { isQuality, getQuality } = require('./fromTags/quality');
const { isType, getType } = require('./fromTags/type');
const { isClass, getClass } = require('./fromTags/class');
const { isGrade, getGrade } = require('./fromTags/grade');
const { isCollection, getCollection } = require('./fromTags/collection');
const { isWear, getWear } = require('./fromTags/wear');

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
module.exports = function ({ tags }) {
	/**
	 * @type {tagAttributes}
	 */
	const attributes = {
		quality: 6,
		wear: 0,
	};

	for (let i = 0; i < tags.length; i++) {
		const tag = tags[i];

		if (isQuality(tag)) attributes.quality = getQuality(tag);
		else if (isType(tag)) attributes.type = getType(tag);
		else if (isClass(tag)) attributes.class = getClass(tag);
		else if (isGrade(tag)) attributes.grade = getGrade(tag);
		else if (isCollection(tag)) attributes.collection = getCollection(tag);
		else if (isWear(tag)) attributes.wear = getWear(tag);
	}

	return attributes;
};
