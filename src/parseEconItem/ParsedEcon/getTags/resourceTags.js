/**
 * These tags use resources.
 */
const isTag = require('./functions/isTag');
const getTag = require('./functions/getTag');

const Resources = require('../../../schema/Resources');
const { resources } = require('../../../index');

exports.isWear = isTag('Exterior');
exports.getWear = getTag('name', Resources.prototype.getWearValue.bind(resources));

exports.isQuality = isTag('Quality');
exports.getQuality = getTag('name', Resources.prototype.getQualityValue.bind(resources));
