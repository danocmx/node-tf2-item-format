import ParsedEcon from '../../ParsedEcon';
import { EconDescription } from '../../../types';
import { ISchema } from '../../../types/schema';

/**
 * Checks if texture is the one on the item.
 */
export function isItemsTexture(description: EconDescription, item: ParsedEcon) {
	return (
		description.value.startsWith('\u2714 ') &&
		(matchesName(description, item) || isCurrentItemSkin(item))
	);
}

function matchesName(description: EconDescription, { itemName }: ParsedEcon) {
	return itemName.origin.includes(description.value.replace('\u2714 ', ''));
}

function isCurrentItemSkin({ tags }: ParsedEcon) {
	return !!tags.wear;
}

export function getTexture(description: EconDescription, schema: ISchema): string | void {
	// Only set texture when app_data present.
	return description.app_data
		? schema.getTextureName(description.app_data.def_index)
		: undefined;
}
