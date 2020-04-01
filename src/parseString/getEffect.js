const _ = require('lodash');

const isNum = require('./isNum');

const UEffects = require('../../resources/UEffects');

module.exports = function (item) {
	let itemEffect = 0;

	_.forOwn(UEffects, (id, effect) => {
		if (isNum(effect) || !item.includes(effect)) return;
		itemEffect = effect;
	});

	return itemEffect;
};
