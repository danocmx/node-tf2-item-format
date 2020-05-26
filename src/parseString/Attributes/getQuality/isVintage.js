module.exports = function (name) {
	return name.includes('Vintage ') && !isVintageException(name);
};

function isVintageException(name) {
	return /Vintage (Merryweather|Tyrolean)/.test(name);
}
