import { EconItem, TagAttributes } from '../../../types';

export default function (item: EconItem, tags: TagAttributes): boolean {
	return isStrange(item) && !isStrangeQuality(tags);
}

function isStrange(item: EconItem) {
	if (item.type === '') { // Weird case for strange weapons
		return item.market_hash_name.includes("Strange ");
	}

	return isStrangeType(item);
}

function isStrangeType({ type }: EconItem): boolean {
	return /( - Kills: |- Points Scored: |- Carnival Kills: | - Times Performed: )\d+/.test(type);
}

function isStrangeQuality({ quality }: TagAttributes): boolean {
	return quality === 'Strange';
}
