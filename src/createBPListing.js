const stringify = require('./stringify');

/**
 * Creates a listing object that you can sent to backpack.tf
 */
module.exports = function (item) {
	return {
		quality: getQuality(item),
		craftable: item.craftable ? 1 : 0,
		item: getItem(item),
		priceindex: getPriceindex(item),
	};
};

function getQuality({ quality, elevated }) {
	return elevated ? `Strange ${quality}` : quality;
}

function getItem(item) {
	return stringify({
		name: item.name,
		australium: item.australium,
		// Don't add it if it's already in the name.
		killstreak: isKillstreakOrFabricator(item) ? 0 : item.killstreak,
	});
}

function getPriceindex(item) {
	if (item.effect) return item.effect; // As int
	if (isCrate(item)) return item.itemNumber.value;
	if (isUnusualfierOrStrangifier(item.name)) return item.target; // as defindex
	if (isChemistrySet(item)) {
		let priceindex = `${item.output}-${item.outputQuality}`;
		if (isUnusualfierOrStrangifier(item.target)) priceindex += `-${item.target}`;
		return priceindex;
	}
	if (isKillstreakOrFabricator(item)) return `${item.killstreak}-${item.target}`; // as defindex

	return 0;
}

function isCrate(item) {
	return item.itemNumber && item.itemNumber.type === 'crate';
}

function isUnusualfierOrStrangifier(name) {
	return name === 'Unusualifier' || name === 'Strangifier';
}

function isChemistrySet({ name }) {
	return name.includes('Chemistry Set');
}

function isKillstreakOrFabricator(item) {
	return item.name.match(/Kit|Fabricator/);
}
