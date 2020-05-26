/* eslint-disable global-require */
const Resources = require('./index/Resources');

module.exports = {
	resources: new Resources(),
};

module.exports.parseEconItem = require('./parseEconItem');
module.exports.parseString = require('./parseString');
module.exports.stringify = require('./stringify');

/**
 * Fixes the order of attributes in your name,
 * 	this is highly exrimental due to the
 * 	nature of attributes being parsed in way
 * 	they're put in inside the name.
 * @param {string} name
 * @return {string}
 */
module.exports.fixName = (name) => module.exports.stringify(module.exports.parseString(name));

module.exports.ParsedEcon = require('./parseEconItem/ParsedEcon');
