import { EconTag } from '../../../../types';

/**
 * Template function to check for category.
 * @param {Object} category
 * @return {Function}
 */
export default function (category: string): (tag: EconTag) => boolean {
	/**
	 * @param {Object} tag
	 * @return {string|number}
	 */
	return (tag: EconTag) => tag.category === category;
}
