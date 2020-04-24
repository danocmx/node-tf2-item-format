/**
 * Matches quality from name.
 * @param {string} name
 * @return {string} quality
 */
module.exports = function (name) {
	// Does not include strangee and vintage for exception reasons.
	const match = name.match(/(Normal|Genuine|Unique|Unusual|Self-Made|Haunted|Collector's) /) || [];
	const [_, quality] = match;

	return quality;
};

