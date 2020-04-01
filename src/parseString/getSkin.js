const UTextures = require('../../resources/UTextures');

module.exports = function (item) {
	let itemSkin = null;
	for (let i = 0; i < UTextures.length; i++) {
		const skin = UTextures[i] || {};
		// eslint-disable-next-line no-continue
		if (!item.includes(skin.name)) continue;
		itemSkin = skin;
	}
	return itemSkin;
};
