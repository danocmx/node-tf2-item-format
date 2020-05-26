/**
 * Signalizes if `The` is at the start of name.
 * Only happens to hats with unique quality.
 * @param {string} name
 * @return {boolean}
 */
module.exports = function (name) {
	return /^The /.test(name);
};
