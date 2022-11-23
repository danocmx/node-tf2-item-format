import isNumber from '../util/isNumber';

import { ISchema } from '../types/schema';

const TEXTURE_EXCEPTIONS = [
	['Health and Hell', 'Health and Hell (Green)'],
];

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

		if (
			texture === 'Haunted Ghosts' &&
			name.includes('Haunted Ghosts') &&
			!attributes.wear
		) {
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
