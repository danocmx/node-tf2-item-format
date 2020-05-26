/**
 * @typedef {Object} itemNumber
 * @property {number} value
 * @property {string} type
 */

/**
 * Gets number & type of an item
 * eg. Medal, crate, case or craft number.
 * Not sure how to call this, so feel free to make suggestions.
 * @param {string} name
 * @return {itemNumber}
 */
module.exports = function (name) {
	const value = getValue(name);
	if (!value) return {};

	return {
		type: getType(name),
		value,
	};
};

function getType(name) {
	const match = name.match(/\b(Medal|Crate|Case)\b/);

	// Same thing, different name.
	if (match === 'Case') return 'crate';

	return match ? match[1].toLowerCase() : 'craft';
}

function getValue(name) {
	return (name.match(/ #(\d+)/) || [])[1];
}
