import { ConvertableAttributes } from '../types';
import { ISchema } from '../types/schema';

export default function (
	schema: ISchema,
	item: ConvertableAttributes
): {
	killstreak?: number;
	wear?: number;
	effect?: number;
	quality: number;
	outputQuality?: number;
	texture?: number;
} {
	return {
		killstreak: item.killstreak
			? schema.getKillstreakEnum(item.killstreak)
			: undefined,
		wear: item.wear ? schema.getWearEnum(item.wear) : undefined,
		effect: item.effect ? schema.getEffectEnum(item.effect) : undefined,
		quality: schema.getQualityEnum(item.quality),
		outputQuality: item.outputQuality
			? schema.getQualityEnum(item.outputQuality)
			: 0,
		texture: item.texture ? schema.getTextureEnum(item.texture) : undefined,
	};
}
