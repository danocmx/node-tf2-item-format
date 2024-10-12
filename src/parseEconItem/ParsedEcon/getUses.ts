import ParsedEcon from '../ParsedEcon';

export default function getUses(econ: ParsedEcon): number {
	if (!econ.item?.app_data?.quantity) {
		return 0;
	}

	const uses = parseInt(econ.item?.app_data?.quantity);
	return isNaN(uses) ? 0 : uses;
}
