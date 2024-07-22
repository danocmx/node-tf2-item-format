export default function (name: string): boolean {
	return name.includes('Strange ') && !isStrangeException(name);
}

const STRANGE_EXCEPTIONS = [
	'Strange Bacon Grease',
	'Strange Filter: ',
	'Strange Count Transfer Tool',
	'Strange Part: ',
	'Strange Cosmetic Part: ',
];

function isStrangeException(name: string): boolean {
	return STRANGE_EXCEPTIONS.some((exception) => name.includes(exception));
}
