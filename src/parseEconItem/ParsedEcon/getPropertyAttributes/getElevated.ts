import { EconItem, TagAttributes } from '../../../types';

export default function (item: EconItem, tags: TagAttributes): boolean {
	return isStrangeType(item) && !isStrangeQuality(tags);
}

function isStrangeType({ type }: EconItem): boolean {
	return /( - Kills: |- Points Scored: |- Carnival Kills: )\d+/.test(type);
}

function isStrangeQuality({ quality }: TagAttributes): boolean {
	return quality === 'Strange';
}
