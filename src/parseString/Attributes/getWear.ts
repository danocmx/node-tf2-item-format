/**
 * Gets wear from name
 */
// eslint-disable-next-line consistent-return
export default function (name: string): string|void {
	if (name.includes('(Battle Scarred)')) {
		return 'Battle Scarred';
	}

	if (name.includes('(Well-Worn)')) {
		return 'Well-Worn';
	}

	if (name.includes('(Field-Tested)')) {
		return 'Field-Tested';
	}

	if (name.includes('(Minimal Wear)')) {
		return 'Minimal Wear';
	}

	if (name.includes('(Factory New)')) {
		return 'Factory New';
	}
};
