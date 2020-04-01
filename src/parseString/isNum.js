module.exports = function (test) {
	// eslint-disable-next-line no-useless-escape
	return /^\s*[-+]?[0-9]+[\.\,]?[0-9]*\s*$/.test(test);
};
