const schema = require('../../../schema/Schema');

module.exports = function (texture) {
	return isTextureDefindex(texture) ? schema.getTexture(texture) : texture;
};

function isTextureDefindex(texture) {
	/**
	 * This way we can check for strings too.
	 */
	return texture >= 0;
}
