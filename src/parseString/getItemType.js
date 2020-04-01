module.exports = function (item) {
	if (/(Killer's Kit|Coffin Kit|Summer Starter Kit)/.test(item)) return;
	const [itemType] = item.match(/\b(Kit Fabricator|Kit|Strangifier Chemistry Set|Chemistry Set|Strangifier)/) || [];
	// eslint-disable-next-line consistent-return
	return itemType;
};
