/* eslint-disable global-require */
const Resources = require('./index/Resources');

module.exports = {
	resources: new Resources(),
};

module.exports.parseEconItem = require('./parseEconItem');
module.exports.parseString = require('./parseString');
module.exports.stringify = require('./stringify');

module.exports.ParsedEcon = require('./parseEconItem/ParsedEcon');
