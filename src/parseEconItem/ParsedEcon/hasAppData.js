/**
 * If econ contains `app_data` property it means we can set few extra attributes
 * @param {Object} item
 * @return {boolean}
 */
module.exports = function (item) {
	return Object.prototype.hasOwnProperty.call(item, 'app_data');
};
