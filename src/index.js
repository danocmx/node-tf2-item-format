/* eslint-disable global-require */
const Resources = require('./index/Resources');

module.exports = {
	parseEconItem: require('./parseEconItem'),
	parseString: require('./parseString'),
	stringify: require('./stringify'),

	resources: new Resources(),
};
