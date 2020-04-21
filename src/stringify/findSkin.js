/* eslint-disable consistent-return */
const UTextures = require('../../resources/UTextures');


/**
 * @param {Number, String} search - what are we looking for name or defindex
 * @return {String, Number} returns skin we are looking for
 */
module.exports = function (search) {
	const isNumber = isNum(search);

	const current = isNumber ? 'id' : 'name';
	const opposite = isNumber ? 'name' : 'id';

	for (let i = 0; i < UTextures.length; i++) {
		const texture = UTextures[i] || {};
		if (texture[current] === search) {
			return texture[opposite];
		}
	}
};
