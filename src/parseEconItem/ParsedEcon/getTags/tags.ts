import isTag from './functions/isTag';
import getTag from './functions/getTag';

/**
 * Used for most tags.
 * @type {Function}
 */
const generalTagGetter = getTag('name');

export const isClass = isTag('Class');
export const getClass = generalTagGetter;

export const isCollection = isTag('Collection');
export const getCollection = generalTagGetter;

export const isGrade = isTag('Rarity');
export const getGrade = generalTagGetter;

export const isType = isTag('Type');
export const getType = getTag('internal_name');
