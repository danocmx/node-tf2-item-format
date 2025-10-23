import { ISchema } from '../types/schema';

export class SchemaCacheArticle<T> {
    /**
     * Versioning number of said schema to determine
     * if we need to recalculate cached values in order
     * to be able to work correctly.
     */
	public version: number;
	public value: T;

	constructor(version: number, value: T) {
		this.version = version;
		this.value = value;
	}

    /**
     * Is this article outdated and needs to be renewed?
     * 
     * @param version Of current schema
     * @returns true, if outdated, otherwise false
     */
	public isOutdated(version: number): boolean {
		return this.version < version;
	}
}

export class SchemaCache {
	protected schemaStorage: Map<
		ISchema,
		Map<string, SchemaCacheArticle<any>>
	> = new Map();

	public get<T>(schema: ISchema, key: string): T | null {
		const cache = this.schemaStorage.get(schema);
		if (!cache) {
			return null;
		}

		const article = cache.get(key);
		if (!article) {
			return null;
		}

		if (article.isOutdated(schema.getVersion())) {
			return null;
		}

		return article.value;
	}

	public save<T>(schema: ISchema, key: string, value: T) {
		let cache = this.schemaStorage.get(schema);
		if (!cache) {
			cache = new Map();

			this.schemaStorage.set(schema, cache);
		}

		const version = schema.getVersion();
		let article = cache.get(key);
		if (article) {
			// Reuse old objects
			article.version = version;
			article.value = value;
			return;
		}

		article = new SchemaCacheArticle(version, value);
		cache.set(key, article);
	}
}

/**
 * Global cache for all schemas, because
 * we index by said schema object.
 */
export const cache = new SchemaCache();
