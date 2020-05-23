/**
 * Template function to get a tag.
 * @param {string} property
 * @param {string} [localizationProperty] 
 * @param {Function} getter if wanna alter
 * @return {Function}
 */
module.exports = function (property, getter) {	
	/**
	 * @param {Object} tag
	 * @return {number|string}
	 */
	return (tag) => {
		const tagValue = tag[property] || tag.localized_tag_name;
		
		return (getter ? getter(tagValue) : tagValue)
	};
};
