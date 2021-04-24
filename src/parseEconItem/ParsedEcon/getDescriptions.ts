import { isFestivized } from './getDescriptions/festivized';
import { isEffect, getEffect } from './getDescriptions/effect';
import { isSpell, getSpell } from './getDescriptions/spell';
import { isPart, getPart } from './getDescriptions/part';
import { isPaint, getPaint } from './getDescriptions/paint';
import { isCraftable } from './getDescriptions/craftable';
import { isItemsTexture, getTexture } from './getDescriptions/texture';

import Killstreak from './getDescriptions/Killstreak';

import ParsedEcon from '../ParsedEcon';
import { DescriptionAttributes } from '../../types';

/**
 * Gets all important attributes from descriptions.
 * Checked in order from steam.
 */
export default function (econ: ParsedEcon): DescriptionAttributes {
	const { tags } = econ;
	const { descriptions = [] } = econ.item;

	const killstreak = new Killstreak(econ.schema);

	/**
	 * @type {descriptionAttributes}
	 */
	const attributes: DescriptionAttributes = {
		craftable: true,
		effect: '',
		killstreak,
		spells: [],
		parts: [],
	};

	for (let i = 0; i < descriptions.length; i++) {
		const description = descriptions[i];

		if (isPart(description, econ))
			attributes.parts.push(getPart(description));
		else if (isPaint(description)) attributes.paint = getPaint(description);
		else if (isEffect(description, tags))
			attributes.effect = getEffect(description);
		else if (isFestivized(description)) attributes.festivized = true;
		else if (isSpell(description))
			attributes.spells.push(getSpell(description));
		else if (Killstreak.isKillstreaker(description))
			killstreak.setKillstreaker(description);
		else if (Killstreak.isSheen(description))
			killstreak.setSheen(description);
		else if (Killstreak.isKillstreak(description))
			killstreak.setKillstreak();
		else if (isItemsTexture(description, econ))
			attributes.texture = getTexture(description, econ.schema);
		else if (!isCraftable(description)) attributes.craftable = false;
	}

	return attributes;
}
