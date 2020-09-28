import ParsedEcon from '../../ParsedEcon';
import { EconDescription } from '../../../types';
/**
 * Checks if texture is the one on the item.
 */
export declare function isItemsTexture(description: EconDescription, item: ParsedEcon): boolean;
export declare function getTexture(description: EconDescription): string | void;
