module.exports = function (name) {
	return name.includes('Strange ') && !isStrangeException(name);
}

function isStrangeException(name) {
	return /(Strange Bacon Grease|Strange Filter: |Strange Count Transfer Tool|Strange Part: )/.test(name);
}
