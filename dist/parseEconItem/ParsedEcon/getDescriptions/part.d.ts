import ParsedEcon from '../../ParsedEcon';
import { EconDescription } from '../../../types';
/**
 * Checks if description includes part
 */
export declare function isPart(description: EconDescription, econ: ParsedEcon): boolean;
/**
 * Gets part from description
 */
export declare function getPart(description: EconDescription): string;
