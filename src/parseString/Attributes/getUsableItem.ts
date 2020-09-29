import getKillstreak from '../../shared/getKillstreak';

import { TargetOutputItem } from '../../types';

/**
 * Finds out which usable item it is
 * and its type
 * `output` or `target`
 * @param {string} name
 * @return {Object}
 */
export default function (name: string): Partial<TargetOutputItem>|null {
	// TODO: add series to itemNumber.
	// For chemistry sets the quality is predefined
	if (isStrangifierChemistrySet(name)) {
		return {
			target: name.replace(' Strangifier Chemistry Set', ''),

			output: 'Strangifier',
			outputQuality: 'Unique',
		};
	}

	if (isChemistrySet(name)) {
		return {
			output: name
				.replace(' Chemistry Set', '')
				.replace('Collector\'s ', ''),

			outputQuality: 'Collector\'s',
		};
	}

	const item = getItemIfTarget(name);
	if (item) {
		return {
			target: name
				.replace(` ${item}`, '')
				.replace(`${getKillstreak(name)} `, '')
				// Incase its uncraftable
				.replace('Non-Craftable ', '')
				// For Unusualifiers
				.replace('Unusual ', ''),
		};
	}

	return null;
};

function isStrangifierChemistrySet(name: string): boolean {
	return / Strangifier Chemistry Set/.test(name);
}

function getItemIfTarget(name: string): string|void {
	if (/(Killer's Kit|Coffin Kit|Summer Starter Kit)/.test(name)) return;

	// eslint-disable-next-line consistent-return
	return (name.match(/ (Kit Fabricator|Kit|Strangifier|Unusualifier)/) || [])[1];
}

function isChemistrySet(name: string): boolean {
	return / Chemistry Set/.test(name);
}
