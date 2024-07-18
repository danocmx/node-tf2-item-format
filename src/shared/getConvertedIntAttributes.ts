import { hasDefindex } from './guards';

import { ConvertableAttributes } from '../types';
import { ISchema } from '../types/schema';
import isTaunt from '../util/isTaunt';

export default function (
	schema: ISchema,
	name: string,
	item: ConvertableAttributes
): {
	killstreak?: number;
	wear?: number;
	effect?: number;
	quality: number;
	outputQuality?: number;
	texture?: number;
} {
	let effect: number | undefined;
	if (item.effect) {
		if (item.effect == "Treasure Trove") {
			if (isTaunt(name)) effect = 3165;
			else effect = 289;
		} else {
			effect = schema.getEffectEnum(item.effect);
		}
	}

	return {
		effect,
		killstreak: item.killstreak
			? schema.getKillstreakEnum(item.killstreak)
			: undefined,
		wear: item.wear ? schema.getWearEnum(item.wear) : undefined,
		quality: schema.getQualityEnum(item.quality),
		outputQuality: item.outputQuality
			? schema.getQualityEnum(item.outputQuality)
			: undefined,
		texture: hasDefindex(item.texture)
			? schema.getTextureEnum(item.texture)
			: undefined,
	};
}
