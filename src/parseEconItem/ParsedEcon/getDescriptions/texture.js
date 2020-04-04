/**
 * Checks if texture is the one on the item.
 * @param {Object} description
 * @param {string} name
 * @param {string} type
 */
exports.isItemsTexture = function (description, item) {
	return description.value.startsWith('\u2714 ') && (matchesName(description, item) || isSkin(item));
};

function matchesName(description, { name }) {
	return name.includes(
		description.value.replace('\u2714 '),
	);
}

function isSkin({ tags }) {
	return !!tags.wear;
}

exports.getTexture = function (description) {
	const { textures } = require('../../../index').resources;

	return description.app_data ? textures[description.app_data.def_index] : description.value;
};
