import { EconTag } from '../../../../types';
declare type TagProperty = 'name' | 'category' | 'internal_name' | 'localized_category_name' | 'localized_tag_name';
/**
 * Template function to get a tag.
 */
export default function (property: TagProperty, getter?: (tagValue: string) => any): (tag: EconTag) => string | any;
export {};
