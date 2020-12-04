export default function (name: string): boolean {
	const vintageCount = name.match(/Vintage /g);
	return (
		!!vintageCount &&
		(vintageCount.length === 2 || !isVintageException(name))
	);
}

function isVintageException(name: string): boolean {
	return /Vintage (Merryweather|Tyrolean)/.test(name);
}
