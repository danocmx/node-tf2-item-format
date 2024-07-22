export default function (name: string): boolean {
	const vintageCount = name.match(/Vintage /g);
	return (
		!!vintageCount &&
		(vintageCount.length === 2 || !isVintageException(name))
	);
}

const VINTAGE_EXCEPTIONS = [
	'Vintage Merryweather',
	'Vintage Tyrolean',
];

function isVintageException(name: string): boolean {
	return VINTAGE_EXCEPTIONS.some((exception) => name.includes(exception));
}
