const { requireStatic } = require('tf2-static-schema');

const schema = require('../schema/Schema');
const isNumber = require('../util/isNumber');

/**
 * Iterates over effects object to get matching effect.
 * @param {string} name
 * @return {number} effect code
 */
// eslint-disable-next-line consistent-return
module.exports = function (name) {
	if (!schema.textures) schema.textures = requireStatic('paint-kits');

	const textureKeys = Object.keys(schema.textures);
	for (let i = 0; i < textureKeys.length; i++) {
		const texture = textureKeys[i];

		if (isNumber(texture) || !name.includes(`${texture} `)) {
			// eslint-disable-next-line no-continue
			continue;
		}

		return texture;
	}
};
