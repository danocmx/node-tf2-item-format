import getKillstreak from '../../shared/getKillstreak';
import { cache } from '../../shared/schemaCache';

import { TargetOutputItem } from '../../types';
import { ISchema } from '../../types/schema';

const SCHEMA_CACHE_KILLSTREAK_EXCEPTIONS_KEY = 'killstreakExceptions';

/**
 * Finds out which usable item it is
 * and its type
 * `output` or `target`
 * @param {string} name
 * @return {Object}
 */
export default function getUsableItem(
	schema: ISchema,
	name: string
): Partial<TargetOutputItem> | null {
	// TODO: add series to itemNumber.
	// For chemistry sets the quality is predefined
	if (isStrangifierChemistrySet(name)) {
		return {
			target: name.replace(' Strangifier Chemistry Set', ''),

			output: 'Strangifier',
			outputQuality: 'Unique',
		};
	}

	if (isChemistrySet(name)) {
		return {
			output: name
				.replace(' Chemistry Set', '')
				.replace("Collector's ", ''),

			outputQuality: "Collector's",
		};
	}

	const item = getItemIfTarget(schema, name);
	if (item) {
		return {
			target: name
				.replace(` ${item}`, '')
				.replace(`${getKillstreak(name)} `, '')
				// Incase its uncraftable
				.replace('Non-Craftable ', '')
				// For Unusualifiers
				.replace('Unusual ', ''),
		};
	}

	return null;
}

function isStrangifierChemistrySet(name: string): boolean {
	return name.includes(' Strangifier Chemistry Set');
}

function getItemIfTarget(schema: ISchema, name: string): string | void {
	const match = name.match(/ (Kit Fabricator|Strangifier|Unusualifier)/);
	if (match) {
		return match[1];
	}

	if (!name.includes(' Kit')) {
		return;
	}

	if (isKitException(schema, name)) {
		return undefined;
	}

	return 'Kit';
}

function isChemistrySet(name: string): boolean {
	return name.includes(' Chemistry Set');
}

export function isKitException(schema: ISchema, name: string): boolean {
	return getKitExceptions(schema).some((exception) =>
		name.includes(exception)
	);
}

export function getKitExceptions(schema: ISchema): string[] {
	let exceptions = cache.get<string[]>(
		schema,
		SCHEMA_CACHE_KILLSTREAK_EXCEPTIONS_KEY
	);
	if (exceptions) {
		return exceptions;
	}

	exceptions = findKitExceptions(schema);
	cache.save(schema, SCHEMA_CACHE_KILLSTREAK_EXCEPTIONS_KEY, exceptions);
	return exceptions;
}

export function findKitExceptions(schema: ISchema) {
	const items = schema.getItems();
	const textures = schema.getTextureNames();
	const effects = schema.getEffectNames();

	const effectKitExceptions = Object.keys(effects).filter((effect) =>
		effect.includes('Kit')
	);

	const textureKitExceptions = Object.keys(textures).filter((texture) =>
		texture.includes('Kit')
	);

	const nameKitExceptions = items
		.filter((item) => {
			return (
				// Exclude killstreak kits
				item.item_name !== 'Kit' && item.item_name.includes('Kit')
			);
		})
		.map((item) => item.item_name);

	return [
		...effectKitExceptions,
		...textureKitExceptions,
		...nameKitExceptions,
	];
}
