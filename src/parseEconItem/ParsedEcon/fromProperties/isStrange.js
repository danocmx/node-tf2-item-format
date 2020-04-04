module.exports = function (item) {
	return /( - Kills: |- Points Scored: )\d+/.test(item.type);
};
