export default function (name: string): boolean {
	const hauntedCount = name.match(/Haunted /g);
	return (!!hauntedCount) && (hauntedCount.length === 2 || !isHauntedException(name));
};

function isHauntedException(name: string): boolean {
	return /Haunted Hat/.test(name);
}
