/**
 * Checks if number can on items name.
 * @param {number} value
 * @param {string} type
 * @return {boolean} 
 */
module.exports = function ({ value, type } = {}) {
	if (type === "craft") return value <= 100;
	else if (type && value) return true;
	
	return false;
};
