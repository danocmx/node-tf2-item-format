/**
 * Checks if texture is the one on the item.
 * @param {Object} description
 * @param {string} name
 * @param {string} type
 */
exports.isOurTexture = function (description, name, type) {
	return description.value.startsWith('\u2714 ') && (matchesName(description, name, type) || isWarPaint(description));
};

function matchesName(description, name, type) {
	return name.includes(description.value.replace('\u2714 ')) && isWeapon(type);
}

function isWeapon(type) {
	return /primary|secondary|meelee/.test(type);
}

function isWarPaint(description) {
	return description.value.endsWith(' War Paint');
}

exports.getTexture = function (description) {
	return description.app_data.def_index;
};
