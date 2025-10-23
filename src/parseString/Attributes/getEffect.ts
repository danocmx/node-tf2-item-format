import { cache } from '../../shared/schemaCache';
import { ISchema } from '../../types/schema';
import isNumber from '../../util/isNumber';

import Attributes from '../Attributes';

type SchemaEffectExceptions = {
	item: Record<string, string[]>;
	texture: Record<string, string[]>;
	effect: Record<string, string[]>;
};

const SCHEMA_CACHE_EFFECT_KEY = 'effectExceptions';

/**
 * Iterates over effects object to get matching effect.
 */
// eslint-disable-next-line consistent-return
export default function (name: string, attributes: Attributes): string | void {
	const effects = attributes.schema.getEffects();
	const effectsKeys = Object.keys(effects);
	for (let i = 0; i < effectsKeys.length; i++) {
		let effect: string | number = effectsKeys[i];
		if (isNumber(effect)) {
			continue;
		}

		if (!name.includes(`${effect} `)) {
			continue;
		}

		const [exception, replacement] = isEffectException(
			attributes.schema,
			effect,
			name,
			!!attributes.wear
		);
		if (exception) {
			if (replacement) {
				return replacement;
			} else {
				continue;
			}
		}

		return effect;
	}
}

function getEffectExceptions(schema: ISchema): SchemaEffectExceptions {
	let exceptions = cache.get<SchemaEffectExceptions>(
		schema,
		SCHEMA_CACHE_EFFECT_KEY
	);
	if (exceptions) {
		return exceptions;
	}

	exceptions = findEffectExceptions(schema);
	cache.save(schema, SCHEMA_CACHE_EFFECT_KEY, exceptions);
	return exceptions;
}

function isEffectException(
	schema: ISchema,
	effect: string,
	name: string,
	hasWear: boolean
): [boolean, string | null] {
	const exceptions = getEffectExceptions(schema);
	if (exceptions.effect[effect]) {
		for (const overlappingEffect of exceptions.effect[effect]) {
			if (name.includes(`${overlappingEffect} `)) {
				const [canUseOverlap, _] = isEffectException(
					schema,
					overlappingEffect,
					name,
					hasWear
				);

				if (canUseOverlap) {
					return [true, null];
				} else {
					return [true, overlappingEffect];
				}
			}
		}
	}

	if (exceptions.texture[effect] && !!hasWear) {
		for (const texture of exceptions.texture[effect]) {
			if (name.includes(`${texture} `)) {
				return [true, null];
			}
		}
	}

	if (exceptions.item[effect]) {
		for (const item of exceptions.item[effect]) {
			if (name.includes(item)) {
				// TODO: Maybe rather look for multiple occurences of `${effect} `
				return [!name.includes(`${effect} ${effect} `), null];
			}
		}
	}

	return [false, null];
}

function findEffectExceptions(schema: ISchema): SchemaEffectExceptions {
	const items = schema.getItems();
	const textures = schema.getTextures();
	const effects = schema.getEffects();

	const itemEffectExceptions: Record<string, string[]> = {};
	for (const effect of Object.keys(effects)) {
		if (isNumber(effect)) {
			continue;
		}

		const itemExceptions = items
			.filter((i) => i.item_name.includes(`${effect} `))
			.map((i) => i.item_name);

		if (itemExceptions.length > 0) {
			itemEffectExceptions[effect] = itemExceptions;
		}
	}

	const effectEffectExceptions: Record<string, string[]> = {};
	for (const effect1 of Object.keys(effects)) {
		if (isNumber(effect1)) {
			continue;
		}

		for (const effect2 of Object.keys(effects)) {
			if (isNumber(effect2)) {
				continue;
			}

			// It has to be distinct word in said effect
			if (
				effect2.startsWith(`${effect1} `) ||
				effect2.includes(` ${effect1} `) ||
				effect2.endsWith(` ${effect1}`)
			) {
				if (effectEffectExceptions[effect1]) {
					effectEffectExceptions[effect1].push(effect2);
				} else {
					effectEffectExceptions[effect1] = [effect2];
				}
			}
		}
	}

	const textureEffectExceptions: Record<string, string[]> = {};
	for (const effect of Object.keys(effects)) {
		if (isNumber(effect)) {
			continue;
		}

		for (const texture of Object.keys(textures)) {
			if (isNumber(texture)) {
				continue;
			}

			if (texture.includes(effect)) {
				if (textureEffectExceptions[effect]) {
					textureEffectExceptions[effect].push(texture);
				} else {
					textureEffectExceptions[effect] = [texture];
				}
			}
		}
	}

	return {
		item: itemEffectExceptions,
		effect: effectEffectExceptions,
		texture: textureEffectExceptions,
	};
}
