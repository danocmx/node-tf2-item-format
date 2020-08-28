/**
 * These tags use resources.
 */
const isTag = require('./functions/isTag');
const getTag = require('./functions/getTag');

exports.isWear = isTag('Exterior');
exports.getWear = getTag('name');

exports.isQuality = isTag('Quality');
exports.getQuality = getTag('name');
