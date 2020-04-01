const { isFestivized } = require('./fromDescriptions/festivized');
const { isEffect, getEffect } = require('./fromDescriptions/effect');
const { isKillstreaker, getKillstreaker, isSheen, getSheen, isKillstreak, setKillstreak } = require('./fromDescriptions/killstreak');
const { isSpell, getSpell } = require('./fromDescriptions/spell');
const { isPart, getPart } = require('./fromDescriptions/part');
const { isPaint, getPaint } = require('./fromDescriptions/paint');
const { isCraftable } = require('./fromDescriptions/craftable');
const { isOurTexture, getTexture } = require('./fromDescriptions/texture');

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
module.exports = function ({ descriptions }, name, { type }) {
	/**
	 * @type {descriptionAttributes}
	 */
	const attributes = {
		craftable: true,
		effect: 0,
		killstreak: 0,
		spells: [],
		parts: [],
	};

	for (let i = 0; i < descriptions.length; i++) {
		const description = descriptions[i];

		if (isPart(description)) attributes.parts.push(getPart(description));

		else if (isPaint(description)) attributes.paint = getPaint(description);

		else if (isEffect(description)) attributes.effect = getEffect(description);

		else if (isFestivized(description)) attributes.festivized = true;

		else if (isSpell(description)) attributes.spells.push(getSpell(description));

		else if (isKillstreaker(description)) attributes.killstreaker = getKillstreaker(description);
		else if (isSheen(description)) attributes.sheen = getSheen(description);
		else if (isKillstreak(description)) attributes.killstreak = 1;

		else if (isOurTexture(description, name, type)) attributes.texture = getTexture(description);

		else if (!isCraftable(description)) attributes.craftable = false;
	}

	// TODO: add target?
	// Here we correct the killstreak from sheen & killstreaker
	setKillstreak(attributes);

	return attributes;
};
