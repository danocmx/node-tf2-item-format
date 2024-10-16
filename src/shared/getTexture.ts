import isNumber from '../util/isNumber';

import { ISchema } from '../types/schema';
import { TEXTURE_EFFECT_EXCEPTION } from '../parseString/Attributes/getEffect';

const TEXTURE_EXCEPTIONS = [['Health and Hell', 'Health and Hell (Green)']];

const TEXTURE_TO_EFFECT_EXCEPTIONS = [['Rainbow', 'Rainbow Reverie']];

/**
 * Iterates over effects object to get matching effect.
 */
// eslint-disable-next-line consistent-return
export default function (
	name: string,
	attributes: { wear: any | null; schema: ISchema }
): string | void {
	const textures = attributes.schema.getTextures();
	const textureKeys = Object.keys(textures);
	for (let i = 0; i < textureKeys.length; i++) {
		const texture: number | string = textureKeys[i];

		if (!name.includes(`${texture} `)) {
			continue;
		}

		if (isTextureEffect(attributes, texture)) {
			continue;
		}

		if (isTextureToEffectException(name, texture)) {
			continue;
		}

		for (let j = 0; j < TEXTURE_EXCEPTIONS.length; j++) {
			const exception = TEXTURE_EXCEPTIONS[j];
			if (texture === exception[0] && name.includes(`${exception[1]} `))
				return exception[1];
		}

		if (isNumber(texture) || !name.includes(`${texture} `)) {
			// eslint-disable-next-line no-continue
			continue;
		}

		return texture;
	}
}

function isTextureToEffectException(name: string, texture: string): boolean {
	for (let i = 0; i < TEXTURE_TO_EFFECT_EXCEPTIONS.length; i++) {
		const exception = TEXTURE_TO_EFFECT_EXCEPTIONS[i];
		if (texture === exception[0] && name.includes(`${exception[1]} `)) {
			return true;
		}
	}
	return false;
}

function isTextureEffect(
	attributes: { wear: any | null },
	effectOrTexture: string
): boolean {
	return !!(
		TEXTURE_EFFECT_EXCEPTION.includes(effectOrTexture) && !attributes.wear
	);
}
