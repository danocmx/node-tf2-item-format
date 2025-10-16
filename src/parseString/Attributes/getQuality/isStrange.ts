import { ISchema } from "../../../types/schema";

export default function (schema: ISchema, name: string): boolean {
	return name.includes('Strange ') && !isStrangeException(schema, name);
}

const STRANGE_EXCEPTIONS = [
	'Strange Bacon Grease',
	'Strange Filter: ',
	'Strange Count Transfer Tool',
	'Strange Part: ',
	'Strange Cosmetic Part: ',
];

function isStrangeException(schema: ISchema, name: string): boolean {
	if (schema.isQualityException) {
		return schema.isQualityException("Strange", name);
	}

	return STRANGE_EXCEPTIONS.some((exception) => name.includes(exception));
}
