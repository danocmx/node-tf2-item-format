const { isFestivized } = require('./getDescriptions/festivized');
const { isEffect, getEffect } = require('./getDescriptions/effect');
const { isSpell, getSpell } = require('./getDescriptions/spell');
const { isPart, getPart } = require('./getDescriptions/part');
const { isPaint, getPaint } = require('./getDescriptions/paint');
const { isCraftable } = require('./getDescriptions/craftable');
const { isItemsTexture, getTexture } = require('./getDescriptions/texture');

const Killstreak = require('./getDescriptions/Killstreak');

/**
 * @typedef {descriptionAttributes}
 * @property {boolean} craftable
 * @property {number} effect
 * @property {number} killstreak
 * @property {string[]} spells
 * @property {string[]} parts
 * @property {string} sheen
 * @property {string} killstreaker
 * @property {string} paint
 * @property {number} texture
 */

/**
 * Gets all important attributes from descriptions.
 * Checked in order from steam.
 * @param {object} descriptions
 * @param {string} name item name
 * @param {string} type tags type
 * @return {descriptionAttributes}
 */
module.exports = function (econ) {
	const { tags } = econ;
	const { descriptions = [] } = econ.item;

	const killstreak = new Killstreak();

	/**
	 * @type {descriptionAttributes}
	 */
	const attributes = {
		craftable: true,
		effect: 0,
		killstreak,
		spells: [],
		parts: [],
	};

	for (let i = 0; i < descriptions.length; i++) {
		const description = descriptions[i];

		if (isPart(description)) attributes.parts.push(getPart(description));

		else if (isPaint(description)) attributes.paint = getPaint(description);

		else if (isEffect(description, tags)) attributes.effect = getEffect(description);

		else if (isFestivized(description)) attributes.festivized = true;

		else if (isSpell(description)) attributes.spells.push(getSpell(description));

		else if (Killstreak.isKillstreaker(description)) killstreak.setKillstreaker(description);
		else if (Killstreak.isSheen(description)) killstreak.setSheen(description);
		else if (Killstreak.isKillstreak(description)) killstreak.setKillstreak(description);

		else if (isItemsTexture(description, econ)) attributes.texture = getTexture(description);

		else if (!isCraftable(description)) attributes.craftable = false;
	}

	return attributes;
};
