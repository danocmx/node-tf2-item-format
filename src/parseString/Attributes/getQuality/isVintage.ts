export default function (name: string): boolean {
	return name.includes('Vintage ') && !isVintageException(name);
};

function isVintageException(name: string): boolean {
	return /Vintage (Merryweather|Tyrolean)/.test(name);
}
