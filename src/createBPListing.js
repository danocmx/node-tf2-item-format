const stringify = require('./stringify');
const schema = require('./schema');

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
		name: getRightName(item),
		australium: item.australium,
		// Don't add it if it's already in the name.
		killstreak: isKillstreakKit(item) || isFabricator(item) ? 0 : item.killstreak,
		craftable: true,
	});
}

function getRightName(item) {
	// We keep kit in the name but backpack.tf does not accept it.
	if (isFabricator(item)) return item.name.replace('Kit ', '');

	return item.name;
}

function getPriceindex(item) {
	if (item.effect) return schema.getEffectEnum(item.effect); // As int
	if (isCrate(item)) return item.itemNumber.value;
	if (isUnusualfierOrStrangifier(item.name)) return schema.getDefindex(item.target); // as defindex
	if (isChemistrySet(item)) {
		let priceindex = `${schema.getDefindex(item.output)}-${schema.getQualityEnum(item.outputQuality)}`;
		if (isUnusualfierOrStrangifier(item.target)) priceindex += `-${schema.getDefindex(item.target)}`;
		return priceindex;
	}
	if (isKillstreakKit(item)) return `${schema.getKillstreakEnum(item.killstreak)}-${schema.getDefindex(item.target)}`; // as defindex
	if (isFabricator(item)) return `${getKitDefindex(item)}-6-${schema.getDefindex(item.target)}`;

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

function isKillstreakKit(item) {
	return item.name.includes('Kit') && !isFabricator(item);
}

function isFabricator(item) {
	return item.name.includes('Fabricator');
}

function getKitDefindex(item) {
	return schema.getDefindex(stringify({ name: 'Kit', killstreak: item.killstreak, craftable: true }));
}
