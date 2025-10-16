import { ISchema } from "../../../types/schema";

export default function (schema: ISchema, name: string): boolean {
	const hauntedCount = name.match(/Haunted /g);
	return (
		!!hauntedCount &&
		(hauntedCount.length === 2 || !isHauntedException(schema, name))
	);
}

const HAUNTED_EXCEPTIONS = [
	'Haunted Hat',
	'Haunted Ghosts',
	'Haunted Phantasm',
	'Haunted Metal Scrap',
	'Haunted Kraken',
	'Haunted Forever',
	'Haunted Wick',
	'Haunted Cremation',
	'Haunted Mist' // Effect
];

function isHauntedException(schema: ISchema, name: string): boolean {
	if (schema.isQualityException) {
		return schema.isQualityException("Haunted", name);
	}

	return HAUNTED_EXCEPTIONS.some((exception) => name.includes(exception));
}
