module.exports = function (item) {
	const [killstreak] = item.match(/(Professional Killstreak|Specialized Killstreak|Killstreak)\b/) || [];
	return killstreak || 0;
};
