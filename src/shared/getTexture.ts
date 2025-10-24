import isNumber from '../util/isNumber';

import { ISchema } from '../types/schema';
import { cache } from './schemaCache';

type SchemaTextureExceptions = {
	item: Record<string, string[]>;
	texture: Record<string, string[]>;
	effect: Record<string, string[]>;
};

const SCHEMA_CACHE_TEXTURE_KEY = 'textureExceptions';

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
		if (isNumber(texture)) {
			continue;
		}

		if (!name.includes(`${texture} `)) {
			continue;
		}

		const [exception, replacement] = isTextureException(
			attributes.schema,
			name,
			texture,
			!!attributes.wear
		);

		if (exception) {
			if (replacement) {
				return replacement;
			} else {
				continue;
			}
		}

		return texture;
	}
}

export function getTextureExceptions(schema: ISchema): SchemaTextureExceptions {
	let exceptions = cache.get<SchemaTextureExceptions>(
		schema,
		SCHEMA_CACHE_TEXTURE_KEY
	);
	if (exceptions) {
		return exceptions;
	}

	exceptions = findTextureExceptions(schema);
	cache.save(schema, SCHEMA_CACHE_TEXTURE_KEY, exceptions);
	return exceptions;
}

export function isTextureException(
	schema: ISchema,
	name: string,
	texture: string,
	hasWear: boolean
): [boolean, string | null] {
	const exceptions = getTextureExceptions(schema);

	if (exceptions.texture[texture]) {
		for (const overlappingTexture of exceptions.texture[texture]) {
			if (name.includes(`${overlappingTexture} `)) {
				const [canUseOverlap, _] = isTextureException(
					schema,
					overlappingTexture,
					name,
					hasWear
				);

				if (canUseOverlap) {
					return [true, null];
				} else {
					return [true, overlappingTexture];
				}
			}
		}
	}

	if (exceptions.effect[texture] && !hasWear) {
		for (const effect of exceptions.effect[texture]) {
			if (name.includes(`${effect} `)) {
				return [true, null];
			}
		}
	}

	if (exceptions.item[texture]) {
		for (const item of exceptions.item[texture]) {
			if (name.includes(item)) {
				return [!name.includes(`${texture} ${texture} `), null];
			}
		}
	}

	return [false, null];
}

export function findTextureExceptions(
	schema: ISchema
): SchemaTextureExceptions {
	const items = schema.getItems();
	const textures = schema.getTextures();
	const effects = schema.getEffects();

	const itemTextureExceptions: Record<string, string[]> = {};
	for (const texture of Object.keys(textures)) {
		if (isNumber(texture)) {
			continue;
		}

		const itemExceptions = items
			.filter((i) => i.item_name.includes(`${texture} `))
			.map((i) => i.item_name);

		if (itemExceptions.length > 0) {
			itemTextureExceptions[texture] = itemExceptions;
		}
	}

	const textureTextureExceptions: Record<string, string[]> = {};
	for (const texture1 of Object.keys(textures)) {
		if (isNumber(texture1)) {
			continue;
		}

		for (const texture2 of Object.keys(textures)) {
			if (isNumber(texture2)) {
				continue;
			}

			// It has to be distinct word in said texture
			if (
				texture2.startsWith(`${texture1} `) ||
				texture2.includes(` ${texture1} `) ||
				texture2.endsWith(` ${texture1}`)
			) {
				if (textureTextureExceptions[texture1]) {
					textureTextureExceptions[texture1].push(texture2);
				} else {
					textureTextureExceptions[texture1] = [texture2];
				}
			}
		}
	}

	const effectTextureExceptions: Record<string, string[]> = {};
	for (const texture of Object.keys(textures)) {
		if (isNumber(texture)) {
			continue;
		}

		for (const effect of Object.keys(effects)) {
			if (isNumber(texture)) {
				continue;
			}

			if (effect.includes(texture)) {
				if (effectTextureExceptions[texture]) {
					effectTextureExceptions[texture].push(effect);
				} else {
					effectTextureExceptions[texture] = [effect];
				}
			}
		}
	}

	return {
		effect: effectTextureExceptions,
		texture: textureTextureExceptions,
		item: itemTextureExceptions,
	};
}
