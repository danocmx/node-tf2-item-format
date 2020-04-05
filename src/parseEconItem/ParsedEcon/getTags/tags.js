const isTag = require('./functions/isTag');
const getTag = require('./functions/getTag');

/**
 * Used for most tags.
 * @type {Function}
 */
const generalTagGetter = getTag('name');

exports.isClass = isTag('Class');
exports.getClass = generalTagGetter;

exports.isCollection = isTag('Collection');
exports.getCollection = generalTagGetter;

exports.isGrade = isTag('Rarity');
exports.getGrade = generalTagGetter;

exports.isType = isTag('Type');
exports.getType = getTag('internal_name');
