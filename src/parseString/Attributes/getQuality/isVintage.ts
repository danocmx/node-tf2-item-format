import { ISchema } from "../../../types/schema";

export default function (schema: ISchema, name: string): boolean {
	const vintageCount = name.match(/Vintage /g);
	return (
		!!vintageCount &&
		(vintageCount.length === 2 || !isVintageException(schema, name))
	);
}

const VINTAGE_EXCEPTIONS = ['Vintage Merryweather', 'Vintage Tyrolean'];

function isVintageException(schema: ISchema, name: string): boolean {
	if (schema.isQualityException) {
		return schema.isQualityException("Vintage", name);
	}

	return VINTAGE_EXCEPTIONS.some((exception) => name.includes(exception));
}
