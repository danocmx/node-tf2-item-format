import { ItemAttributes } from './types';
/**
 * Parses name string into attributes.
 */
export default function (name: string, { inNumbers, useDefindexes }?: Partial<{
    inNumbers: boolean;
    useDefindexes: boolean;
}>): ItemAttributes;
