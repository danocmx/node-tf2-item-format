import { ItemNumber, TargetOutputItem, StringQuality } from '../types';
/**
 * Holds all attributes we received from name.
 */
export default class Attributes {
    craftable: boolean;
    australium: boolean;
    festivized: boolean;
    killstreak: string | void;
    wear: string | void;
    effect: string | void;
    texture: string | void;
    itemNumber: ItemNumber | null;
    usableItem?: Partial<TargetOutputItem> | null;
    isUniqueHat?: boolean;
    quality: StringQuality;
    constructor(name: string);
}
