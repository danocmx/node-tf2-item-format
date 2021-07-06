/**
 * Testing how formats
 * seemlessly transfer between each other.
 * @todo add type test with typescript for this one.
 */
const { assert } = require('chai');

const { parseEconItem, parseSKU, parseString, toSKU, stringify, createBPListing } = require('../dist/static');

/**
 * StartFormat - EconItem
 * Endformat - Listing
 * StartEndFormat - Attributes, Name, SKU
 */

describe('Name to SKU', () => {
    it('Case #1', () => {
        const name = 'Non-Craftable Unusual Taunt: The Trackman\'s Touchdown Unusualifier';

        const attributes = parseString(name, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '9258;5;uncraftable;td-30917');
    });

    it('Case #2', () => {
        const name = 'Pyroland Nightmare Calamitous Cauldron';

        const attributes = parseString(name, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '31146;5;u159');
    });

    it('Case #3', () => {
        const name = 'Strange Professional Killstreak Golden Frying Pan';

        const attributes = parseString(name, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '1071;11;kt-3');
    });

    it('Case #4', () => {
        const name = 'Non-Craftable Professional Killstreak Sniper Rifle Kit';

        const attributes = parseString(name, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '6526;6;uncraftable;kt-3;td-201');
    });

    it('Case #5', () => {
        const name = 'Strange Professional Killstreak Festivized Australium Medi Gun';

        const attributes = parseString(name, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '211;11;australium;kt-3;festive');
    });

    it('Case #6', () => {
        const name = 'Strange Professional Killstreak Australium Medi Gun';

        const attributes = parseString(name, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '211;11;australium;kt-3');
    });
    
    it('Case #7', () => {
        const name = 'Professional Killstreak Strange Silver Botkiller Sniper Rifle Mk.I';

        const attributes = parseString(name, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '792;11;kt-3');
    })

    /* Chemistry sets currently don't work.
    it('Case #7', () => {
        const name = 'Original Chemistry Set';

        const attributes = parseString(name, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '20006;6;od-513;oq-14');
    });

    it('Case #8', () => {
        const name = 'Outback Intellectual Strangifier Chemistry Set';

        const attributes = parseString(name, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '20005;6;td-645;od-6522;oq-6');
    });
    */
});

describe('Econ to SKU', () => {
    it('Case #1', () => {
        const econ = {
			appid: 440,
			contextid: '2',
			assetid: '8733746813',
			classid: '221512872',
			instanceid: '92637229',
			amount: '1',
			currency: 0,
			background_color: '3C352E',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDe1VBDEjdqCEX2PfnGOaDBeEUlNQK6ZFH3jMlwwB_Y7vhZ2Q0JFKQAKQJXadrpF6-UXE268I3UNHg8esHfF28tdHHO65sbo88eQy8bA',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDe1VBDEjdqCEX2PfnGOaDBeEUlNQK6ZFH3jMlwwB_Y7vhZ2Q0JFKQAKQJXadrpF6-UXE268I3UNHg8esHfF28tdHHO65sbo88eQy8bA',
			descriptions: [
				{
					value: 'Holiday Restriction: Halloween / Full Moon',
					color: 'd83636',
				},
				{
					value:
						'Halloween: Spectral Spectrum (spell only active during event)',
					color: '7ea9d1',
				},
				{ value: '' },
			],
			tradable: 1,
			actions: [
				{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=30290&lang=en_US',
					name: 'Item Wiki Page...',
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D16238051287194648628',
					name: 'Inspect in Game...',
				},
			],
			name: 'Haunted PY-40 Incinibot',
			name_color: '38f3ab',
			type: 'Level 58 Mask',
			market_name: 'Haunted PY-40 Incinibot',
			market_hash_name: 'Haunted PY-40 Incinibot',
			market_actions: [
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D16238051287194648628',
					name: 'Inspect in Game...',
				},
			],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags: [
				{
					category: 'Quality',
					internal_name: 'haunted',
					localized_category_name: 'Quality',
					localized_tag_name: 'Haunted',
					color: '38f3ab',
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic',
				},
				{
					category: 'Class',
					internal_name: 'Pyro',
					localized_category_name: 'Class',
					localized_tag_name: 'Pyro',
				},
			],
		};

        const attributes = parseEconItem(econ, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '30290;13');
    })

    it('Case #2', () => {
        const econ = {
			appid: 440,
			contextid: '2',
			assetid: '8610658018',
			classid: '171010366',
			instanceid: '176498576',
			amount: '1',
			currency: 0,
			background_color: '3C352E',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEbfgYfXh7wqwdTmsHiCM2ACfIHnpRh5MkG3G8zyVMpYebiYm8wdFGTBPILC_BvrQu9X3RqupQ6AYPhp-wHZ0yx43BgcxIX',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEbfgYfXh7wqwdTmsHiCM2ACfIHnpRh5MkG3G8zyVMpYebiYm8wdFGTBPILC_BvrQu9X3RqupQ6AYPhp-wHZ0yx43BgcxIX',
			descriptions: [
				{ value: '★ Unusual Effect: Smoking', color: 'ffd700' },
			],
			tradable: 1,
			actions: [
				{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=318&lang=en_US',
					name: 'Item Wiki Page...',
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D10290164463146604828',
					name: 'Inspect in Game...',
				},
			],
			name: "Unusual Prancer's Pride",
			name_color: '8650AC',
			type: 'Level 88 Hat',
			market_name: "Unusual Prancer's Pride",
			market_hash_name: "Unusual Prancer's Pride",
			market_actions: [
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D10290164463146604828',
					name: 'Inspect in Game...',
				},
			],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags: [
				{
					category: 'Quality',
					internal_name: 'rarity4',
					localized_category_name: 'Quality',
					localized_tag_name: 'Unusual',
					color: '8650AC',
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic',
				},
				{
					category: 'Class',
					internal_name: 'Pyro',
					localized_category_name: 'Class',
					localized_tag_name: 'Pyro',
				},
			],
		};

        const attributes = parseEconItem(econ, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '318;5;u35');
	});

    it('Case #3', () => {
        const econ = {
			appid: 440,
			contextid: '2',
			assetid: '8407830034',
			classid: '3662018019',
			instanceid: '11040671',
			amount: '1',
			currency: 0,
			background_color: '3C352E',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffsDz5zdwmTVPAOCcot8Qn-Wxg07dR3XcGzub5ffwvmttSXYrAlY9xFTMaCUvbXNQz_6EkwiPRYKJaIon-9jHjrOWoUG0280KDki-w',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffsDz5zdwmTVPAOCcot8Qn-Wxg07dR3XcGzub5ffwvmttSXYrAlY9xFTMaCUvbXNQz_6EkwiPRYKJaIon-9jHjrOWoUG0280KDki-w',
			descriptions: [
				{
					value: 'Mercenary Grade Flame Thrower (Minimal Wear)',
					color: '4b69ff',
				},
				{ value: '★ Unusual Effect: Cool', color: 'ffd700' },
				{ value: 'Festivized', color: 'ffd700' },
				{
					value: 'Extinguishing teammates restores 20 health',
					color: '7ea9d1',
				},
				{ value: 'Sheen: Agonizing Emerald', color: '7ea9d1' },
				{ value: 'Killstreaks Active', color: '7ea9d1' },
				{
					value:
						'Afterburn reduces Medi Gun healing and resist shield effects.\nAlt-Fire: Release a blast of air that pushes enemies and projectiles and extinguishes teammates that are on fire.',
				},
				{ value: ' ' },
				{ value: ' ' },
				{ value: 'Concealed Killer Collection' },
				{ value: '    Sand Cannon Rocket Launcher', color: 'eb4b4b' },
				{ value: '    Red Rock Roscoe Pistol', color: 'eb4b4b' },
				{ value: '    Psychedelic Slugger Revolver', color: 'd32ce6' },
				{ value: '    Purple Range Sniper Rifle', color: 'd32ce6' },
				{
					value: '    Sudden Flurry Stickybomb Launcher',
					color: 'd32ce6',
				},
				{ value: '    Night Terror Scattergun', color: '8847ff' },
				{
					value: '    Carpet Bomber Stickybomb Launcher',
					color: '8847ff',
				},
				{
					value: '    Woodland Warrior Rocket Launcher',
					color: '8847ff',
				},
				{ value: '    Wrapped Reviver Medi Gun', color: '8847ff' },
				{ value: '    Night Owl Sniper Rifle', color: '4b69ff' },
				{ value: '    Woodsy Widowmaker SMG', color: '4b69ff' },
				{ value: '    Backwoods Boomstick Shotgun', color: '4b69ff' },
				{ value: '    King of the Jungle Minigun', color: '4b69ff' },
				{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
				{ value: '★ Forest Fire Flame Thrower', color: '4b69ff' },
			],
			tradable: 1,
			actions: [
				{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15005&lang=en_US',
					name: 'Item Wiki Page...',
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D6922402693932635553',
					name: 'Inspect in Game...',
				},
			],
			name: 'Festivized Forest Fire Flame Thrower',
			name_color: '8650AC',
			type: '',
			market_name:
				'Unusual Festivized Specialized Killstreak Forest Fire Flame Thrower (Minimal Wear)',
			market_hash_name:
				'Unusual Festivized Specialized Killstreak Forest Fire Flame Thrower (Minimal Wear)',
			market_actions: [
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D6922402693932635553',
					name: 'Inspect in Game...',
				},
			],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags: [
				{
					category: 'Quality',
					internal_name: 'rarity4',
					localized_category_name: 'Quality',
					localized_tag_name: 'Unusual',
					color: '8650AC',
				},
				{
					category: 'Type',
					internal_name: 'primary',
					localized_category_name: 'Type',
					localized_tag_name: 'Primary weapon',
				},
				{
					category: 'Class',
					internal_name: 'Pyro',
					localized_category_name: 'Class',
					localized_tag_name: 'Pyro',
				},
				{
					category: 'Rarity',
					internal_name: 'Rarity_Rare',
					localized_category_name: 'Grade',
					localized_tag_name: 'Mercenary',
					color: '4b69ff',
				},
				{
					category: 'Collection',
					internal_name: 'concealedkiller_collection',
					localized_category_name: 'Collection',
					localized_tag_name: 'Concealed Killer Collection',
				},
				{
					category: 'Exterior',
					internal_name: 'TFUI_InvTooltip_MinimalWear',
					localized_category_name: 'Exterior',
					localized_tag_name: 'Minimal Wear',
				},
			],
        };

        const attributes = parseEconItem(econ, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '208;5;u703;w2;pk9;kt-2;festive');
    })

    it('Case #4', () => {
        const econ = {
			appid: 440,
			contextid: '2',
			assetid: '8574678947',
			classid: '3555490789',
			instanceid: '856289751',
			amount: '1',
			currency: 0,
			background_color: '3C352E',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDewlDDUq7hytIncTqD-CJGu8_l9sn4pUbi2Ftw1ApbbXtNmM_cVTEV_lbWaw7pQu0W3Rr6sVlAdPvoOhScFnt4pyGbefmPm6lTg',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDewlDDUq7hytIncTqD-CJGu8_l9sn4pUbi2Ftw1ApbbXtNmM_cVTEV_lbWaw7pQu0W3Rr6sVlAdPvoOhScFnt4pyGbefmPm6lTg',
			descriptions: [
				{ value: 'Commando Grade Hat', color: '8847ff' },
				{
					value: '★ Unusual Effect: Twisted Radiance',
					color: 'ffd700',
				},
				{ value: ' ' },
				{ value: ' ' },
				{ value: 'Spooky Spoils Collection' },
				{ value: '    Mister Bones', color: 'eb4b4b' },
				{ value: "    Pyr'o Lantern", color: 'eb4b4b' },
				{ value: '    Racc Mann', color: 'd32ce6' },
				{ value: '    Head of the Dead', color: 'd32ce6' },
				{ value: '    Elizabeth the Third', color: 'd32ce6' },
				{ value: '    The Trick Stabber', color: 'd32ce6' },
				{ value: '    El Zapateador', color: '8847ff' },
				{ value: '    The Horrible Horns', color: '8847ff' },
				{ value: '★ Skullbrero', color: '8847ff' },
				{ value: '    Soviet Strongmann', color: '8847ff' },
				{ value: '    Voodoo Vizier', color: '8847ff' },
				{ value: "    Madmann's Muzzle", color: '8847ff' },
				{ value: '    BINOCULUS!', color: '4b69ff' },
				{ value: '    Derangement Garment', color: '4b69ff' },
				{ value: '    Convict Cap', color: '4b69ff' },
				{ value: '    El Mostacho', color: '4b69ff' },
				{ value: '    Candy Cranium', color: '4b69ff' },
				{ value: '    Bat Hat', color: '4b69ff' },
				{ value: '    Pocket Halloween Boss', color: '4b69ff' },
				{ value: '    Party Poncho', color: '4b69ff' },
				{ value: '    Fuel Injector', color: '4b69ff' },
				{ value: '    Bread Biter', color: '4b69ff' },
			],
			tradable: 1,
			actions: [
				{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=31066&lang=en_US',
					name: 'Item Wiki Page...',
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D5006617706189886078',
					name: 'Inspect in Game...',
				},
			],
			name: 'Unusual Skullbrero',
			name_color: '8650AC',
			type: 'Level 57 Hat',
			market_name: 'Unusual Skullbrero',
			market_hash_name: 'Unusual Skullbrero',
			market_actions: [
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D5006617706189886078',
					name: 'Inspect in Game...',
				},
			],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags: [
				{
					category: 'Quality',
					internal_name: 'rarity4',
					localized_category_name: 'Quality',
					localized_tag_name: 'Unusual',
					color: '8650AC',
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic',
				},
				{
					category: 'Class',
					internal_name: 'Pyro',
					localized_category_name: 'Class',
					localized_tag_name: 'Pyro',
				},
				{
					category: 'Rarity',
					internal_name: 'Rarity_Mythical',
					localized_category_name: 'Grade',
					localized_tag_name: 'Commando',
					color: '8847ff',
				},
				{
					category: 'Collection',
					internal_name: 'halloween2019_collection_name',
					localized_category_name: 'Collection',
					localized_tag_name: 'Spooky Spoils Collection',
				},
			],
		};

        const attributes = parseEconItem(econ, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '31066;5;u130');
    })

    it('Case #5', () => {
        const econ = {
			appid: 440,
			contextid: '2',
			assetid: '8656785508',
			classid: '3543846179',
			instanceid: '3516082756',
			amount: '1',
			currency: 0,
			background_color: '3C352E',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffjDz5zdwmTVPAOCsot8Qn-Whg07dR3XcGzuehWe1q65oHFOuQpN4kZGpOECffQZl39vho_1KdefJbbonvq3SvubmwUG028UzYUYzA',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffjDz5zdwmTVPAOCsot8Qn-Whg07dR3XcGzuehWe1q65oHFOuQpN4kZGpOECffQZl39vho_1KdefJbbonvq3SvubmwUG028UzYUYzA',
			descriptions: [
				{
					value: 'Commando Grade Rocket Launcher (Field-Tested)',
					color: '8847ff',
				},
				{ value: 'Festivized', color: 'ffd700' },
				{
					value:
						'Halloween: Pumpkin Bombs (spell only active during event)',
					color: '7ea9d1',
				},
				{ value: 'Sheen: Agonizing Emerald', color: '7ea9d1' },
				{ value: 'Killstreaks Active', color: '7ea9d1' },
				{
					value: '\nGift from: VLaDOS | S>C.MOON YELLOW BELT',
					color: '7ea9d1',
				},
				{
					value:
						'Date Received: Tuesday, September 10, 2019 (9:36:39) GMT',
				},
				{ value: ' ' },
				{ value: ' ' },
				{ value: 'Concealed Killer Collection' },
				{ value: '    Sand Cannon Rocket Launcher', color: 'eb4b4b' },
				{ value: '    Red Rock Roscoe Pistol', color: 'eb4b4b' },
				{ value: '    Psychedelic Slugger Revolver', color: 'd32ce6' },
				{ value: '    Purple Range Sniper Rifle', color: 'd32ce6' },
				{
					value: '    Sudden Flurry Stickybomb Launcher',
					color: 'd32ce6',
				},
				{ value: '    Night Terror Scattergun', color: '8847ff' },
				{
					value: '    Carpet Bomber Stickybomb Launcher',
					color: '8847ff',
				},
				{
					value: '✔ Woodland Warrior Rocket Launcher',
					color: '8847ff',
				},
				{ value: '    Wrapped Reviver Medi Gun', color: '8847ff' },
				{ value: '    Night Owl Sniper Rifle', color: '4b69ff' },
				{ value: '    Woodsy Widowmaker SMG', color: '4b69ff' },
				{ value: '    Backwoods Boomstick Shotgun', color: '4b69ff' },
				{ value: '    King of the Jungle Minigun', color: '4b69ff' },
				{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
				{ value: '    Forest Fire Flame Thrower', color: '4b69ff' },
			],
			tradable: 1,
			actions: [
				{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15006&lang=en_US',
					name: 'Item Wiki Page...',
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D11534198800805877074',
					name: 'Inspect in Game...',
				},
			],
			fraudwarnings: [
				'This item has been renamed.\nOriginal name: "Rocket Launcher"',
			],
			name: "''post live spell rocket louncher !!!!!!!''",
			name_color: 'FAFAFA',
			type: '',
			market_name:
				'Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)',
			market_hash_name:
				'Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)',
			market_actions: [
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D11534198800805877074',
					name: 'Inspect in Game...',
				},
			],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags: [
				{
					category: 'Quality',
					internal_name: 'paintkitweapon',
					localized_category_name: 'Quality',
					localized_tag_name: 'Decorated Weapon',
					color: 'FAFAFA',
				},
				{
					category: 'Type',
					internal_name: 'primary',
					localized_category_name: 'Type',
					localized_tag_name: 'Primary weapon',
				},
				{
					category: 'Class',
					internal_name: 'Soldier',
					localized_category_name: 'Class',
					localized_tag_name: 'Soldier',
				},
				{
					category: 'Rarity',
					internal_name: 'Rarity_Mythical',
					localized_category_name: 'Grade',
					localized_tag_name: 'Commando',
					color: '8847ff',
				},
				{
					category: 'Collection',
					internal_name: 'concealedkiller_collection',
					localized_category_name: 'Collection',
					localized_tag_name: 'Concealed Killer Collection',
				},
				{
					category: 'Exterior',
					internal_name: 'TFUI_InvTooltip_FieldTested',
					localized_category_name: 'Exterior',
					localized_tag_name: 'Field-Tested',
				},
			],
		};

        const attributes = parseEconItem(econ, true, true);

        const sku = toSKU(attributes);

        assert.equal(sku, '205;15;w3;pk6;kt-2;festive');
    })
});

describe('SKU to Name', () => {
    it('Case #1', () => {
        const sku = '9258;5;uncraftable;td-30917';

        const attributes = parseSKU(sku);

        const name = stringify(attributes);

        assert.equal(name, 'Non-Craftable Unusual Taunt: The Trackman\'s Touchdown Unusualifier');
    });

    it('Case #2', () => {
        const sku = '31146;5;u159';

        const attributes = parseSKU(sku);

        const name = stringify(attributes);

        assert.equal(name, 'Pyroland Nightmare Calamitous Cauldron');
    });

    it('Case #3', () => {
        const sku = '1071;11;kt-3';

        const attributes = parseSKU(sku);

        const name = stringify(attributes);

        assert.equal(name, 'Strange Professional Killstreak Golden Frying Pan');
    });

    it('Case #4', () => {
        const sku = '6526;6;uncraftable;kt-3;td-201';

        const attributes = parseSKU(sku);

        const name = stringify(attributes);

        assert.equal(name, 'Non-Craftable Professional Killstreak Sniper Rifle Kit');
    });

    it('Case #5', () => {
        const sku = '211;11;australium;kt-3;festive';

        const attributes = parseSKU(sku);

        const name = stringify(attributes);

        assert.equal(name, 'Strange Festivized Professional Killstreak Australium Medi Gun');
    });

    it('Case #6', () => {
        const sku = '211;11;australium;kt-3';

        const attributes = parseSKU(sku);

        const name = stringify(attributes);

        assert.equal(name, 'Strange Professional Killstreak Australium Medi Gun');
    });
    
    it('Case #7', () => {
        const sku = '792;11;kt-3';

        const attributes = parseSKU(sku);

        const name = stringify(attributes);

        assert.equal(name, 'Strange Professional Killstreak Silver Botkiller Sniper Rifle Mk.I');
    })
});

describe('SKU to Listing', () => {
    it('Case #1', () => {
        const sku = '9258;5;uncraftable;td-30917';

        const attributes = parseSKU(sku);

        const listing = createBPListing(attributes);

        assert.deepEqual(listing, {
            quality: 5,
            craftable: 0,
            item_name: 'Unusualifier',
            priceindex: 30917
        });
    });

    it('Case #2', () => {
        const sku = '31146;5;u159';

        const attributes = parseSKU(sku);

        const listing = createBPListing(attributes);

        assert.deepEqual(listing, {
            quality: 5,
            craftable: 1,
            item_name: 'Calamitous Cauldron',
            priceindex: 159
        });
    });

    it('Case #3', () => {
        const sku = '1071;11;kt-3';

        const attributes = parseSKU(sku);

        const listing = createBPListing(attributes);

        assert.deepEqual(listing, {
            quality: 11,
            craftable: 1,
            item_name: 'Professional Killstreak Golden Frying Pan',
            priceindex: 0
        });
    });

    it('Case #4', () => {
        const sku = '6526;6;uncraftable;kt-3;td-201';

        const attributes = parseSKU(sku);

        const listing = createBPListing(attributes);

        assert.deepEqual(listing, {
            quality: 6,
            craftable: 0,
            item_name: 'Professional Killstreak Kit',
            priceindex: '3-201'
        });
    });

    it('Case #5', () => {
        const sku = '211;11;australium;kt-3;festive';

        const attributes = parseSKU(sku);

        const listing = createBPListing(attributes);

        assert.deepEqual(listing, {
            quality: 11,
            craftable: 1,
            item_name: 'Festivized Professional Killstreak Australium Medi Gun',
            priceindex: 0
        });
    });

    it('Case #6', () => {
        const sku = '211;11;australium;kt-3';

        const attributes = parseSKU(sku);

        const listing = createBPListing(attributes);

        assert.deepEqual(listing, {
            quality: 11,
            craftable: 1,
            item_name: 'Professional Killstreak Australium Medi Gun',
            priceindex: 0
          });
    });
    
    it('Case #7', () => {
        const sku = '792;11;kt-3';

        const attributes = parseSKU(sku);

        const listing = createBPListing(attributes);

        assert.deepEqual(listing, {
            quality: 11,
            craftable: 1,
            item_name: 'Professional Killstreak Silver Botkiller Sniper Rifle Mk.I',
            priceindex: 0
          });
    })
});

describe('Econ to Listing', () => {
    it('Case #1', () => {
        const econ = {
			appid: 440,
			contextid: '2',
			assetid: '8733746813',
			classid: '221512872',
			instanceid: '92637229',
			amount: '1',
			currency: 0,
			background_color: '3C352E',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDe1VBDEjdqCEX2PfnGOaDBeEUlNQK6ZFH3jMlwwB_Y7vhZ2Q0JFKQAKQJXadrpF6-UXE268I3UNHg8esHfF28tdHHO65sbo88eQy8bA',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDe1VBDEjdqCEX2PfnGOaDBeEUlNQK6ZFH3jMlwwB_Y7vhZ2Q0JFKQAKQJXadrpF6-UXE268I3UNHg8esHfF28tdHHO65sbo88eQy8bA',
			descriptions: [
				{
					value: 'Holiday Restriction: Halloween / Full Moon',
					color: 'd83636',
				},
				{
					value:
						'Halloween: Spectral Spectrum (spell only active during event)',
					color: '7ea9d1',
				},
				{ value: '' },
			],
			tradable: 1,
			actions: [
				{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=30290&lang=en_US',
					name: 'Item Wiki Page...',
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D16238051287194648628',
					name: 'Inspect in Game...',
				},
			],
			name: 'Haunted PY-40 Incinibot',
			name_color: '38f3ab',
			type: 'Level 58 Mask',
			market_name: 'Haunted PY-40 Incinibot',
			market_hash_name: 'Haunted PY-40 Incinibot',
			market_actions: [
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D16238051287194648628',
					name: 'Inspect in Game...',
				},
			],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags: [
				{
					category: 'Quality',
					internal_name: 'haunted',
					localized_category_name: 'Quality',
					localized_tag_name: 'Haunted',
					color: '38f3ab',
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic',
				},
				{
					category: 'Class',
					internal_name: 'Pyro',
					localized_category_name: 'Class',
					localized_tag_name: 'Pyro',
				},
			],
		};

        const attributes = parseEconItem(econ, true, true);

        const listing = createBPListing(attributes);

        assert.deepEqual(listing, {
            quality: 13,
            craftable: 1,
            item_name: 'PY-40 Incinibot',
            priceindex: 0
          });
    })

    it('Case #2', () => {
        const econ = {
			appid: 440,
			contextid: '2',
			assetid: '8610658018',
			classid: '171010366',
			instanceid: '176498576',
			amount: '1',
			currency: 0,
			background_color: '3C352E',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEbfgYfXh7wqwdTmsHiCM2ACfIHnpRh5MkG3G8zyVMpYebiYm8wdFGTBPILC_BvrQu9X3RqupQ6AYPhp-wHZ0yx43BgcxIX',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEbfgYfXh7wqwdTmsHiCM2ACfIHnpRh5MkG3G8zyVMpYebiYm8wdFGTBPILC_BvrQu9X3RqupQ6AYPhp-wHZ0yx43BgcxIX',
			descriptions: [
				{ value: '★ Unusual Effect: Smoking', color: 'ffd700' },
			],
			tradable: 1,
			actions: [
				{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=318&lang=en_US',
					name: 'Item Wiki Page...',
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D10290164463146604828',
					name: 'Inspect in Game...',
				},
			],
			name: "Unusual Prancer's Pride",
			name_color: '8650AC',
			type: 'Level 88 Hat',
			market_name: "Unusual Prancer's Pride",
			market_hash_name: "Unusual Prancer's Pride",
			market_actions: [
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D10290164463146604828',
					name: 'Inspect in Game...',
				},
			],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags: [
				{
					category: 'Quality',
					internal_name: 'rarity4',
					localized_category_name: 'Quality',
					localized_tag_name: 'Unusual',
					color: '8650AC',
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic',
				},
				{
					category: 'Class',
					internal_name: 'Pyro',
					localized_category_name: 'Class',
					localized_tag_name: 'Pyro',
				},
			],
		};

        const attributes = parseEconItem(econ, true, true);

        const listing = createBPListing(attributes);

        assert.deepEqual(listing, {
            quality: 5,
            craftable: 1,
            item_name: "Prancer's Pride",
            priceindex: 35
          });
	});

    it('Case #3', () => {
        const econ = {
			appid: 440,
			contextid: '2',
			assetid: '8555715171',
			classid: '3717643208',
			instanceid: '344437314',
			amount: '1',
			currency: 0,
			background_color: '3C352E',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEJeQQaWA_dtDlRj82oVPeJUbRTyohkssUGjDBox1IsNrKxaWc1JFWQWPYHDKFsow2_WyVlv4lzWtBtJvRLsg',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEJeQQaWA_dtDlRj82oVPeJUbRTyohkssUGjDBox1IsNrKxaWc1JFWQWPYHDKFsow2_WyVlv4lzWtBtJvRLsg',
			descriptions: [
				{ value: "★ Unusual Effect: Nuts n' Bolts", color: 'ffd700' },
				{ value: "''hmm epic''" },
			],
			tradable: 1,
			actions: [
				{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=434&lang=en_US',
					name: 'Item Wiki Page...',
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D16442165943709427870',
					name: 'Inspect in Game...',
				},
			],
			name: 'Unusual Brain Bucket',
			name_color: '8650AC',
			type: 'Level 82 Hat',
			market_name: 'Unusual Brain Bucket',
			market_hash_name: 'Unusual Brain Bucket',
			market_actions: [
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D16442165943709427870',
					name: 'Inspect in Game...',
				},
			],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags: [
				{
					category: 'Quality',
					internal_name: 'rarity4',
					localized_category_name: 'Quality',
					localized_tag_name: 'Unusual',
					color: '8650AC',
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic',
				},
				{
					category: 'Class',
					internal_name: 'Soldier',
					localized_category_name: 'Class',
					localized_tag_name: 'Soldier',
				},
			],
		};

        const attributes = parseEconItem(econ, true, true);

        const listing = createBPListing(attributes);

        assert.deepEqual(listing, { quality: 5, craftable: 1, item_name: 'Brain Bucket', priceindex: 31 });
    })

    it('Case #4', () => {
        const econ = {
			appid: 440,
			contextid: '2',
			assetid: '8574678947',
			classid: '3555490789',
			instanceid: '856289751',
			amount: '1',
			currency: 0,
			background_color: '3C352E',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDewlDDUq7hytIncTqD-CJGu8_l9sn4pUbi2Ftw1ApbbXtNmM_cVTEV_lbWaw7pQu0W3Rr6sVlAdPvoOhScFnt4pyGbefmPm6lTg',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDewlDDUq7hytIncTqD-CJGu8_l9sn4pUbi2Ftw1ApbbXtNmM_cVTEV_lbWaw7pQu0W3Rr6sVlAdPvoOhScFnt4pyGbefmPm6lTg',
			descriptions: [
				{ value: 'Commando Grade Hat', color: '8847ff' },
				{
					value: '★ Unusual Effect: Twisted Radiance',
					color: 'ffd700',
				},
				{ value: ' ' },
				{ value: ' ' },
				{ value: 'Spooky Spoils Collection' },
				{ value: '    Mister Bones', color: 'eb4b4b' },
				{ value: "    Pyr'o Lantern", color: 'eb4b4b' },
				{ value: '    Racc Mann', color: 'd32ce6' },
				{ value: '    Head of the Dead', color: 'd32ce6' },
				{ value: '    Elizabeth the Third', color: 'd32ce6' },
				{ value: '    The Trick Stabber', color: 'd32ce6' },
				{ value: '    El Zapateador', color: '8847ff' },
				{ value: '    The Horrible Horns', color: '8847ff' },
				{ value: '★ Skullbrero', color: '8847ff' },
				{ value: '    Soviet Strongmann', color: '8847ff' },
				{ value: '    Voodoo Vizier', color: '8847ff' },
				{ value: "    Madmann's Muzzle", color: '8847ff' },
				{ value: '    BINOCULUS!', color: '4b69ff' },
				{ value: '    Derangement Garment', color: '4b69ff' },
				{ value: '    Convict Cap', color: '4b69ff' },
				{ value: '    El Mostacho', color: '4b69ff' },
				{ value: '    Candy Cranium', color: '4b69ff' },
				{ value: '    Bat Hat', color: '4b69ff' },
				{ value: '    Pocket Halloween Boss', color: '4b69ff' },
				{ value: '    Party Poncho', color: '4b69ff' },
				{ value: '    Fuel Injector', color: '4b69ff' },
				{ value: '    Bread Biter', color: '4b69ff' },
			],
			tradable: 1,
			actions: [
				{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=31066&lang=en_US',
					name: 'Item Wiki Page...',
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D5006617706189886078',
					name: 'Inspect in Game...',
				},
			],
			name: 'Unusual Skullbrero',
			name_color: '8650AC',
			type: 'Level 57 Hat',
			market_name: 'Unusual Skullbrero',
			market_hash_name: 'Unusual Skullbrero',
			market_actions: [
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D5006617706189886078',
					name: 'Inspect in Game...',
				},
			],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags: [
				{
					category: 'Quality',
					internal_name: 'rarity4',
					localized_category_name: 'Quality',
					localized_tag_name: 'Unusual',
					color: '8650AC',
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic',
				},
				{
					category: 'Class',
					internal_name: 'Pyro',
					localized_category_name: 'Class',
					localized_tag_name: 'Pyro',
				},
				{
					category: 'Rarity',
					internal_name: 'Rarity_Mythical',
					localized_category_name: 'Grade',
					localized_tag_name: 'Commando',
					color: '8847ff',
				},
				{
					category: 'Collection',
					internal_name: 'halloween2019_collection_name',
					localized_category_name: 'Collection',
					localized_tag_name: 'Spooky Spoils Collection',
				},
			],
		};

        const attributes = parseEconItem(econ, true, true);

        const listing = createBPListing(attributes);

        assert.deepEqual(listing, { quality: 5, craftable: 1, item_name: 'Skullbrero', priceindex: 130 });
    })

    it('Case #5', () => {
        const econ = {
			appid: 440,
			contextid: '2',
			assetid: '8434754722',
			classid: '88783771',
			instanceid: '92739934',
			amount: '1',
			currency: 0,
			background_color: '3C352E',
			icon_url:
				'IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTcePMQFc1nqWSMU5OD2NwOx3sIyShXOjLx2Sk5MbUqMcbBnQz4ruyeU2DgVzPLKCnYCGFgGOIYfAeFr3HysPORE2vPELl_RQEMdaFX9GxObM-BOEE_goVdrTXqlBwkHRNxJ5VFcVbihGQdNlNSNRp3',
			icon_url_large:
				'IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTcePMQFc1nqWSMU5OD2NwOx3sIyShXOjLx2Sk5MbUqMcbBnQz4ruyeU2DgVzPLKCnYCGFgGOIYfAeFr3HysPORE2vPELl_RQEMdaFX9GxObM-BOEE_goVdrTXqlBwkHRNxJ5VFcVbihGQdNlNSNRp3',
			descriptions: [
				{
					value: "Paint Color: Noble Hatter's Violet",
					color: '756b5e',
				},
				{
					value:
						'Halloween: Spectral Spectrum (spell only active during event)',
					color: '7ea9d1',
				},
				{
					value:
						"The K-9 mane is perfect for tricky social situations. People will either only want to talk about the hat, which means they'll be distracted from that rash making its way up your jugular,or they'll avoid you altogether. It's a win/win!",
				},
			],
			tradable: 1,
			actions: [
				{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=876&lang=en_US',
					name: 'Item Wiki Page...',
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D7378163898213210976',
					name: 'Inspect in Game...',
				},
			],
			name: 'Genuine K-9 Mane',
			name_color: '4D7455',
			type: 'Level 1 Spirit Animal',
			market_name: 'Genuine K-9 Mane',
			market_hash_name: 'Genuine K-9 Mane',
			market_actions: [
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D7378163898213210976',
					name: 'Inspect in Game...',
				},
			],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags: [
				{
					category: 'Quality',
					internal_name: 'rarity1',
					localized_category_name: 'Quality',
					localized_tag_name: 'Genuine',
					color: '4D7455',
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic',
				},
				{
					category: 'Class',
					internal_name: 'Demoman',
					localized_category_name: 'Class',
					localized_tag_name: 'Demoman',
				},
				{
					category: 'Class',
					internal_name: 'Heavy',
					localized_category_name: 'Class',
					localized_tag_name: 'Heavy',
				},
			],
		};

        const attributes = parseEconItem(econ, true, true);

        const listing = createBPListing(attributes);

        assert.deepEqual(listing, { quality: 1, craftable: 1, item_name: 'K-9 Mane', priceindex: 0 });
    })
});
