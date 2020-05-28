module.exports = function (str) {
	// Although it doesn't check for decimals, it is not required here.
	return /^\d+$/.test(str);
};
