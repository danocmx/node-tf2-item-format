import Attributes from '../parseString/Attributes';

/**
 * These items keep 'The' in name.
 */
const EXCEPTIONS = [
	'The Athletic Supporter',
	'The Superfan',
	'The Essential Accessories',
	"The Gas Jockey's Gear",
	'The Saharan Spy',
	'The Tank Buster',
	'The Croc-o-Style Kit',
	'The Special Delivery',
	'The Medieval Medic',
	'The Hibernating Bear',
	"The Expert's Ordnance",
	"The Emperor's Assortment",
	'The Uber Update Bundle',
	'The Manno-Technology Bundle',
	"The Emperor's Assortment",
	'The Highland Hound Bundle',
	'The Curse-a-Nature Bundle',
	'The Infernal Imp Bundle',
	'The Mad Doktor Bundle',
	'The Tin Soldier Bundle',
	'The Invisible Rogue Bundle',
	'The FrankenHeavy Bundle',
	'The Camper Van Helsing Bundle',
	'The Brundle Bundle Bundle',
	'The Pickaxe Pack',
	'The Henchmann Bundle',
	'The Rockzo Bundle',
	'The Brutananadilewski Bundle',
	'The Adult Swim Bundle',
	'The Byzantine Bundle',
	'The Bitter Taste of Defeat and Lime',
	"The Color of a Gentlemann's Business Pants",
	'The Value of Teamwork',
	'The Concealed Killer Weapons Case',
	'The Powerhouse Weapons Case',
];

/**
 * Signalizes if `The` is at the start of name.
 * Only happens to hats with unique quality.
 */
export default function (name: string, attributes?: Attributes): boolean {
	if (!/^The /.test(name)) {
		return false;
	}

	if (attributes?.itemNumber) {
		return !EXCEPTIONS.some((item) => {
			return name.startsWith(item);
		});
	}

	return !EXCEPTIONS.includes(name);
}
