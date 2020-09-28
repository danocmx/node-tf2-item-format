import ParsedEcon from '../ParsedEcon';
import { EconItem } from '../../types';
/**
 * Class that handles name.
 */
export default class ItemName {
    econ: ParsedEcon;
    item: EconItem;
    origin: string;
    constructor(econ: ParsedEcon);
    getOrigin(): string;
    getShort(): string;
    /**
     * Returns full name like backpack.tf
     * @return {string}
     */
    getFull(): string;
}
