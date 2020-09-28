import { EconDescription, TagAttributes } from '../../../types';

/**
 * Checks if description contains effect.
 * @param {object} description
 * @return {boolean}
 */
export function isEffect(description: EconDescription, tags: TagAttributes) {
	return description.value.startsWith('★ Unusual Effect: ') && isRightColour(description) && canQualityBeUnusual(tags);
};

function isRightColour({ color }: EconDescription): boolean {
	return color === 'ffd700';
}

function canQualityBeUnusual({ quality }: TagAttributes): boolean {
	return quality !== 'Unique';
}

/**
 * Gets effect number.
 * @param {object} description
 * @return {number}
 */
export function getEffect(description: EconDescription): string {
	return description.value.replace('★ Unusual Effect: ', '');
};
