export default function (name: string): boolean {
	const hauntedCount = name.match(/Haunted /g);
	return (
		!!hauntedCount &&
		(hauntedCount.length === 2 || !isHauntedException(name))
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
];

function isHauntedException(name: string): boolean {
	return HAUNTED_EXCEPTIONS.some((exception) => name.includes(exception));
}
