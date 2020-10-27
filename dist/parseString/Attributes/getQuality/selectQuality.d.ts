import Attributes from '../../Attributes';
import { StringQuality } from '../../../types';
/**
 * Selects quality based off input.
 * @param {boolean} isStrange
 * @param {boolean} isVintage
 * @param {string} otherQuality
 * @param {Object} attributes
 * @return {Object}
 */
export default function ({ isStrange, isVintage, isHaunted, otherQuality, attributes, }: {
    isStrange: boolean;
    isVintage: boolean;
    isHaunted: boolean;
    otherQuality: string;
    attributes: Attributes;
}): StringQuality;
