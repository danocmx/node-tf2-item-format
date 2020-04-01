module.exports = function (item, attributes) {
	const itemQuality = { quality: null, elevated: null };
	const Qualities = item.match(/(Normal|Genuine|Vintage|Unique|Strange|Unusual|Self-Made|Haunted|Collector's)\b/g) || [];

	if (/Vintage\s(Tyrolean|Merryweather)/.test(item)) {
		Qualities.splice(Qualities.indexOf('Vintage'), 1);
	}
	if (Qualities.includes('Strange')) {
		if (/(Strange Bacon Grease|Strange Filter: |Strange Count Transfer Tool|Strange Part: )/.test(item)) {
			Qualities.splice(Qualities.indexOf('Strange'), 1);
		} else if (Qualities.length > 1) {
			itemQuality.elevated = true;
			Qualities.splice(Qualities.indexOf('Strange'), 1);
		}
	}
	if (Qualities.length === 0) {
		if (attributes.texture) itemQuality.quality = 'Decorated Weapon';
		else if (attributes.particle) itemQuality.quality = 'Unusual';
		else if (!itemQuality.quality) itemQuality.quality = 'Unique';
	} else {
		// eslint-disable-next-line prefer-destructuring
		itemQuality.quality = Qualities[0];
	}

	return itemQuality;
};
