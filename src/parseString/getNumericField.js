module.exports = function (item) {
	const numeric = item.match(/\b(?<=#)\d+/);
	if (!numeric) return;
	let type = item.match(/\b(Medal|Crate|Case)\b/);
	type = type ? type[0].toLowerCase() : 'craft_number';
	type = type === 'case' ? 'crate' : type;
	// eslint-disable-next-line consistent-return
	return { type, number: numeric[0] };
};
