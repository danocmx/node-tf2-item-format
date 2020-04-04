module.exports = function (name) {
	// TODO: Maybe look at descriptions for exceptions
	return name.includes('Australium ') && !name.includes('Australium Gold');
};
