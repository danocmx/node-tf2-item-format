/**
 * Iterates over effects object to get matching effect.
 * @param {string} name
 * @return {number} effect code
 */
module.exports = function (name) {
	const { resources }	= require('../index');
	const { textures } = resources;

	for (let i = 0; i < Object.values(textures).length; i++) {
		const texture = Object.values(textures)[i];

		if (typeof texture === 'number' || !name.includes(`${texture} `)) {
			continue;
		}

		return texture;
	}
}