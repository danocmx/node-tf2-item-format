const getKillstreak = require('./getKillstreak');

/**
 * Finds out which usable item it is
 * and its type
 * `output` or `target`
 * @param {string} name
 * @return {Object}
 */
module.exports = function (name) {
	// For chemistry sets the quality is predefined
	if (isStrangifierChemistrySet(name)) {
		return {
			target: name.replace(' Strangifier Chemistry Set', ''),

			output: 'Strangifier',
			outputQuality: 'Unique',
		}
	}

	if (isChemistrySet(name)) {
		return {
			output: name
				.replace(' Chemistry Set', '')
				.replace('Collector\'s ', ''),
			
			outputQuality: 'Collector\'s',
		}
	}

	const item = getItemIfTarget(name);
	if (item) {
		return {
			target: name
				.replace(` ${item}`, '')
				.replace(`${getKillstreak(name)} `, '')
				// Incase its uncraftable
				.replace('Non-Craftable ', ''),
		}
	}

	return null;
};

function isStrangifierChemistrySet(name) {
	return / Strangifier Chemistry Set/.test(name);
}

function getItemIfTarget(name) {
	if (/(Killer's Kit|Coffin Kit|Summer Starter Kit)/.test(name)) return;

	return (name.match(/ (Kit Fabricator|Kit|Strangifier)/, '') || [])[1];
}

function isChemistrySet(name) {
	return / Chemistry Set/.test(name); 
}
