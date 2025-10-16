import isCraftable from './Attributes/isCraftable';
import isFestivized from './Attributes/isFestivized';
import getWear from './Attributes/getWear';
import getItemNumber from './Attributes/getItemNumber';
import getQuality from './Attributes/getQuality';
import getUsableItem from './Attributes/getUsableItem';
import getEffect from './Attributes/getEffect';

import isUniqueHat from '../shared/isUniqueHat';
import isAustralium from '../shared/isAustralium';
import getTexture from '../shared/getTexture';
import getKillstreak from '../shared/getKillstreak';

import { ItemNumber, TargetOutputItem, StringQuality } from '../types';
import { ISchema } from '../types/schema';

/**
 * Holds all attributes we received from name.
 */
export default class Attributes {
	public schema: ISchema;
	public craftable: boolean;
	public australium: boolean;
	public festivized: boolean;
	public killstreak: string | void;
	public wear: string | void;
	public effect: string | void;
	public texture: string | void;
	public itemNumber: ItemNumber | null;
	public usableItem?: Partial<TargetOutputItem> | null;
	public isUniqueHat?: boolean;
	public quality: StringQuality;

	constructor(schema: ISchema, name: string) {
		this.schema = schema;

		this.craftable = isCraftable(name);
		this.australium = isAustralium(name);
		this.festivized = isFestivized(name);

		this.killstreak = getKillstreak(name);
		this.wear = getWear(name);

		this.effect = getEffect(name, this);
		this.texture = getTexture(name, this);

		this.itemNumber = getItemNumber(name);
		this.usableItem = getUsableItem(schema, name);

		this.isUniqueHat = isUniqueHat(schema, name, this);
		this.quality = getQuality(name, this);
	}
}
