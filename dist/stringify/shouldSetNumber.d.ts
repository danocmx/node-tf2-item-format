import { ItemNumber } from '../types';
/**
 * Checks if number can on items name.
 */
export default function ({ value, type }?: ItemNumber | {
    type: '';
    value: 0;
}): boolean;
