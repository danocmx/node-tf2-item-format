import ParsedEcon from '../ParsedEcon';

export default function getLevel(econ: ParsedEcon): number {
	const [, lvlString] = econ.item.type.match(/^Level (\d+)/) || [];
	if (!lvlString) return -1;
	const lvl = parseInt(lvlString);
	return isNaN(lvl) ? -1 : lvl;
}
