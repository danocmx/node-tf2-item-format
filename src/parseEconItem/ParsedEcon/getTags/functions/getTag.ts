import { EconTag } from '../../../../types';

type TagProperty =
	| 'name'
	| 'category'
	| 'internal_name'
	| 'localized_category_name'
	| 'localized_tag_name';

/**
 * Template function to get a tag.
 */
export default function (
	property: TagProperty,
	getter?: (tagValue: string) => any
): (tag: EconTag) => string | any {
	/**
	 * @param {Object} tag
	 * @return {number|string}
	 */
	return (tag: EconTag) => {
		const tagValue: string | void = tag[property] || tag.localized_tag_name;

		return getter && tagValue ? getter(tagValue) : tagValue;
	};
}
