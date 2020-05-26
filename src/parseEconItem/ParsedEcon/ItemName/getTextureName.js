module.exports = function (texture) {
	const { resources } = require('../../../index');

	return isTextureDefindex(texture) ? resources.getTextureValue(texture) : texture;
};

function isTextureDefindex(texture) {
	/**
	 * This way we can check for strings too.
	 */
	return texture >= 0;
}
