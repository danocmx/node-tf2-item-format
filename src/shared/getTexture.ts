import isNumber from '../util/isNumber';

import { ISchema } from '../types/schema';
import { SchemaEnum } from 'tf2-static-schema';

const TEXTURE_EXCEPTIONS = [['Health and Hell', 'Health and Hell (Green)']];

//cache the textureKeys since Object.keys() is expensive
let isTextureKeysCached = false;
let textureKeys: string[] = [];

//cache a stripped version of textures
let isTexturesCached = false;
let textures: SchemaEnum = {};

/**
 * Iterates over effects object to get matching effect.
 */
// eslint-disable-next-line consistent-return
export default function (
	name: string,
	attributes: { wear: any | null; schema: ISchema }
): string | void {
	if (!isTexturesCached) {
		const copysrc = attributes.schema.getTextures();

		//strip away all properties with numeric keys
		//we must also copy this object, as we don't want to modify the original
		const keys = Object.keys(copysrc);
		for (const key of keys) {
			if (!isNumber(key)) {
				textures[key] = copysrc[key];
			}
		}

		isTexturesCached = true;
	}
	if (!isTextureKeysCached) {
		textureKeys = Object.keys(textures);
		isTextureKeysCached = true;
	}

	for (let j = 0; j < TEXTURE_EXCEPTIONS.length; j++) {
		const exception = TEXTURE_EXCEPTIONS[j];
		if (name.includes(`${exception[1]} `)) return exception[1];
	}

	const skipHauntedFlag = name.includes('Haunted Ghosts') && !attributes.wear;

	for (let i = 0; i < textureKeys.length; i++) {
		const texture = textureKeys[i];

		if (!name.includes(`${texture} `)) {
			// eslint-disable-next-line no-continue
			continue;
		}

		if (texture === 'Haunted Ghosts' && skipHauntedFlag) {
			// eslint-disable-next-line no-continue
			continue;
		}

		return texture;
	}
}
