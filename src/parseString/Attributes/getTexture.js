/**
 * Iterates over effects object to get matching effect.
 * @param {string} name
 * @return {number} effect code
 */
module.exports = function (name) {
	const { resources }	= require('../../index');
	const { textures } = resources;

	for (let i = 0; i < textures.length; i++) {
		const texture = textures[i];

		if (!name.includes(`${texture.name} `)) {
			continue;
		}

		return texture.name;
	}
}