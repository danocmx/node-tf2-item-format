/* eslint-disable global-require */

exports.parseEconItem = require('./parseEconItem');
exports.parseString = require('./parseString');
exports.stringify = require('./stringify');
exports.createBPListing = require('./createBPListing');
exports.toSKU = require('./toSKU');
exports.parseSKU = require('./parseSKU');

/**
 * Fixes the order of attributes in your name,
 * 	this is highly exrimental due to the
 * 	nature of attributes being parsed in way
 * 	they're put in inside the name.
 * @param {string} name
 * @return {string}
 */
exports.fixName = (name) => exports.stringify(exports.parseString(name));

exports.ParsedEcon = require('./parseEconItem/ParsedEcon');
