import schema from '../schema';

import isNumber from '../util/isNumber';

/**
 * Iterates over effects object to get matching effect.
 */
// eslint-disable-next-line consistent-return
export default function (name: string): string|void {
	if (!schema.textures) schema.loadTextures();

	const textureKeys = Object.keys(schema.textures);
	for (let i = 0; i < textureKeys.length; i++) {
		const texture: number|string = textureKeys[i];

		// @ts-ignore
		if (isNumber(texture) || !name.includes(`${texture} `)) {
			// eslint-disable-next-line no-continue
			continue;
		}

		return texture;
	}
};
