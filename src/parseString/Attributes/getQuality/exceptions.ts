import { cache } from '../../../shared/schemaCache';
import { ISchema } from '../../../types/schema';

export function isQualityException(
	schema: ISchema,
	quality: string,
	name: string
): boolean {
	const exceptions = getQualityExceptions(schema, quality);
	return exceptions.some((e) => name.includes(e));
}

function getQualityCacheKey(quality: string): string {
	return `${quality}Exceptions`;
}

export function getQualityExceptions(schema: ISchema, quality: string): string[] {
	const cacheKey = getQualityCacheKey(quality);
	let exceptions = cache.get<string[]>(schema, cacheKey);
	if (exceptions) {
		return exceptions;
	}

	exceptions = findQualityExceptions(schema, quality);
	cache.save(schema, cacheKey, exceptions);
	return exceptions;
}

export function findQualityExceptions(schema: ISchema, quality: string): string[] {
	const items = schema.getItems();
	const effects = schema.getEffects();
	const textures = schema.getTextures();

	const effectExceptionsForQuality = Object.keys(effects).filter((effect) =>
		effect.includes(quality)
	);

	const textureExceptionsForQuality = Object.keys(textures).filter(
		(texture) => texture.includes(quality)
	);

	const nameExceptionsForQuality = items
		.filter((item) => item.item_name.includes(`${quality} `))
		.map((item) => item.item_name);

	return [
		...effectExceptionsForQuality,
		...textureExceptionsForQuality,
		...nameExceptionsForQuality,
	];
}
