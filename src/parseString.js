const objectPrettify = require('object-prettify');
const defaults = require('defaults');

const getEffect = require('./parseString/getEffect');
const getItemType = require('./parseString/getItemType');
const getKillstreak = require('./parseString/getKillstreak');
const getNumericField = require('./parseString/getNumericField');
const getQuality = require('./parseString/getQuality');
const getSkin = require('./parseString/getSkin');
const getWearTier = require('./parseString/getWearTier');

const UEffects = require('../resources/UEffects');
const UKillstreaks = require('../resources/UKillstreaks');
const UQualities = require('../resources/UQualities');
const UWearTiers = require('../resources/UWearTiers');

const TEMPLATE = {
	name: '',
	originalName: '',
	quality: 0,
	elevated: false,
	craftable: 1,
	australium: 0,
	festivized: false,
	particle: 0,
	killstreak: 0,
	wearTier: null,
	texture: null,
	item_type: null,
	target_item: null,
	numeric: 0,
	numeric_type: null,
};

module.exports = function (name) {
	let itemName = name;
	const item = {
		originalName: name,
		particle: getEffect(itemName),
		killstreak: getKillstreak(itemName),
		texture: getSkin(itemName),
		wearTier: getWearTier(itemName),
		target_item: getItemType(itemName),
		numeric: getNumericField(itemName),
	};

	if (itemName.includes('Non-Craftable ')) {
		item.craftable = 0;
		itemName = itemName.replace('Non-Craftable ', '');
	}
	if (itemName.includes('Australium ') && !itemName.includes('Australium Gold')) {
		item.australium = 1;
		itemName = itemName.replace('Australium ', '');
	}
	if (itemName.includes('Festivized ')) {
		item.festivized = true;
		itemName = itemName.replace('Festivized ', '');
	}
	const quality = getQuality(itemName, item);
	if (quality.quality) {
		itemName = itemName.replace(`${quality.quality} `, '');
		item.quality = UQualities[quality.quality];
	}
	if (quality.elevated) {
		itemName = itemName.replace('Strange ', '');
		item.elevated = true;
	}
	if (item.particle) {
		itemName = itemName.replace(`${item.particle} `, '');
		item.particle = UEffects[item.particle];
	}
	if (item.killstreak && item.killstreak !== 'None') {
		itemName = itemName.replace(`${item.killstreak} `, '');
		item.killstreak = UKillstreaks[item.killstreak];
	}
	if (item.target_item) {
		itemName = itemName.replace(` ${item.target_item}`, '');
		item.item_type = item.item_type === 'Chemistry Set' || item.item_type === 'Strangifier Chemistry Set' ? 'output' : 'target';
	}
	if (item.numeric) {
		itemName = itemName.replace(` #${item.numeric.number}`, '');
		item.numeric_type = item.numeric.type;
		item.numeric = item.numeric.number;
	}
	if (item.wearTier) {
		itemName = itemName.replace(` (${item.wearTier})`, '');
		item.wearTier = UWearTiers[item.wearTier];
	}
	if (item.texture) {
		itemName = itemName.replace(`${item.texture.name} `, '');
	}
	item.name = itemName;
	const parsedItem = objectPrettify(defaults(item, TEMPLATE), TEMPLATE);

	return parsedItem;
};
