module.exports = function (item, tags) {
	return isStrangeType(item) && !isStrangeQuality(tags);
};

function isStrangeType({ type }) {
	return /( - Kills: |- Points Scored: )\d+/.test(type);
}

function isStrangeQuality({ quality }) {
	return quality === 11;
}
