/**
 * Checks if item is craftable based off description
 * @param {object} description
 * @return {boolean}
 */
exports.isCraftable = function (description) {
	return ![
		'( Not Usable in Crafting )',
		'( Not Tradable, Marketable, or Usable in Crafting )',
		'( Not Tradable, Marketable, Usable in Crafting, or Gift Wrappable )',
	].includes(description.value);
};
