/**
 * Gets killstreak from name
 */
// eslint-disable-next-line consistent-return
export default function (name: string): string | void {
	if (name.includes('Professional Killstreak ')) {
		return 'Professional Killstreak';
	}

	if (name.includes('Specialized Killstreak ')) {
		return 'Specialized Killstreak';
	}

	if (name.includes('Killstreak ')) {
		return 'Killstreak';
	}
}
