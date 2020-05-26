const { assert } = require('chai');

const { parseEconItem } = require('../');

describe('parseEconItem', () => {
	it('Case #1', () => {
		const econItem = parseEconItem({
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
			descriptions:
				[{
					value: 'Mercenary Grade Flame Thrower (Minimal Wear)',
					color: '4b69ff'
				},
				{ value: '★ Unusual Effect: Cool', color: 'ffd700' },
				{ value: 'Festivized', color: 'ffd700' },
				{
					value: 'Extinguishing teammates restores 20 health',
					color: '7ea9d1'
				},
				{ value: 'Sheen: Agonizing Emerald', color: '7ea9d1' },
				{ value: 'Killstreaks Active', color: '7ea9d1' },
				{
					value:
						'Afterburn reduces Medi Gun healing and resist shield effects.\nAlt-Fire: Release a blast of air that pushes enemies and projectiles and extinguishes teammates that are on fire.'
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
					color: 'd32ce6'
				},
				{ value: '    Night Terror Scattergun', color: '8847ff' },
				{
					value: '    Carpet Bomber Stickybomb Launcher',
					color: '8847ff'
				},
				{
					value: '    Woodland Warrior Rocket Launcher',
					color: '8847ff'
				},
				{ value: '    Wrapped Reviver Medi Gun', color: '8847ff' },
				{ value: '    Night Owl Sniper Rifle', color: '4b69ff' },
				{ value: '    Woodsy Widowmaker SMG', color: '4b69ff' },
				{ value: '    Backwoods Boomstick Shotgun', color: '4b69ff' },
				{ value: '    King of the Jungle Minigun', color: '4b69ff' },
				{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
				{ value: '★ Forest Fire Flame Thrower', color: '4b69ff' }],
			tradable: 1,
			actions:
				[{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15005&lang=en_US',
					name: 'Item Wiki Page...'
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D6922402693932635553',
					name: 'Inspect in Game...'
				}],
			name: 'Festivized Forest Fire Flame Thrower',
			name_color: '8650AC',
			type: '',
			market_name:
				'Unusual Festivized Specialized Killstreak Forest Fire Flame Thrower (Minimal Wear)',
			market_hash_name:
				'Unusual Festivized Specialized Killstreak Forest Fire Flame Thrower (Minimal Wear)',
			market_actions:
				[{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D6922402693932635553',
					name: 'Inspect in Game...'
				}],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags:
				[{
					category: 'Quality',
					internal_name: 'rarity4',
					localized_category_name: 'Quality',
					localized_tag_name: 'Unusual',
					color: '8650AC'
				},
				{
					category: 'Type',
					internal_name: 'primary',
					localized_category_name: 'Type',
					localized_tag_name: 'Primary weapon'
				},
				{
					category: 'Class',
					internal_name: 'Pyro',
					localized_category_name: 'Class',
					localized_tag_name: 'Pyro'
				},
				{
					category: 'Rarity',
					internal_name: 'Rarity_Rare',
					localized_category_name: 'Grade',
					localized_tag_name: 'Mercenary',
					color: '4b69ff'
				},
				{
					category: 'Collection',
					internal_name: 'concealedkiller_collection',
					localized_category_name: 'Collection',
					localized_tag_name: 'Concealed Killer Collection'
				},
				{
					category: 'Exterior',
					internal_name: 'TFUI_InvTooltip_MinimalWear',
					localized_category_name: 'Exterior',
					localized_tag_name: 'Minimal Wear'
				}]
		});

		assert.deepEqual(econItem, {
			name: 'Flame Thrower (Minimal Wear)',
			id: '8407830034',
			img:
				'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffsDz5zdwmTVPAOCcot8Qn-Wxg07dR3XcGzub5ffwvmttSXYrAlY9xFTMaCUvbXNQz_6EkwiPRYKJaIon-9jHjrOWoUG0280KDki-w/',
			tradable: true,
			craftable: true,
			quality: 5,
			texture: 'Forest Fire',
			killstreak: 2,
			festivized: true,
			effect: 703,
			classes: ['Pyro'],
			type: 'primary',
			collection: 'Concealed Killer Collection',
			grade: 'Mercenary',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false
		});
	});

	it('Case #2', () => {
		const econItem = parseEconItem({
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
			descriptions:
				[{ value: '★ Unusual Effect: Nuts n\' Bolts', color: 'ffd700' },
				{ value: '\'\'hmm epic\'\'' }],
			tradable: 1,
			actions:
				[{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=434&lang=en_US',
					name: 'Item Wiki Page...'
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D16442165943709427870',
					name: 'Inspect in Game...'
				}],
			name: 'Unusual Brain Bucket',
			name_color: '8650AC',
			type: 'Level 82 Hat',
			market_name: 'Unusual Brain Bucket',
			market_hash_name: 'Unusual Brain Bucket',
			market_actions:
				[{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D16442165943709427870',
					name: 'Inspect in Game...'
				}],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags:
				[{
					category: 'Quality',
					internal_name: 'rarity4',
					localized_category_name: 'Quality',
					localized_tag_name: 'Unusual',
					color: '8650AC'
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic'
				},
				{
					category: 'Class',
					internal_name: 'Soldier',
					localized_category_name: 'Class',
					localized_tag_name: 'Soldier'
				}]
		});

		assert.deepEqual(econItem, {
			name: 'Brain Bucket',
			id: '8555715171',
			img:
				'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEJeQQaWA_dtDlRj82oVPeJUbRTyohkssUGjDBox1IsNrKxaWc1JFWQWPYHDKFsow2_WyVlv4lzWtBtJvRLsg/',
			tradable: true,
			craftable: true,
			quality: 5,
			effect: 31,
			classes: ['Soldier'],
			type: 'misc',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false
		});
	});

	it('Case #3', () => {
		const econItem = parseEconItem({
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
			descriptions:
				[{ value: 'Commando Grade Hat', color: '8847ff' },
				{ value: '★ Unusual Effect: Twisted Radiance', color: 'ffd700' },
				{ value: ' ' },
				{ value: ' ' },
				{ value: 'Spooky Spoils Collection' },
				{ value: '    Mister Bones', color: 'eb4b4b' },
				{ value: '    Pyr\'o Lantern', color: 'eb4b4b' },
				{ value: '    Racc Mann', color: 'd32ce6' },
				{ value: '    Head of the Dead', color: 'd32ce6' },
				{ value: '    Elizabeth the Third', color: 'd32ce6' },
				{ value: '    The Trick Stabber', color: 'd32ce6' },
				{ value: '    El Zapateador', color: '8847ff' },
				{ value: '    The Horrible Horns', color: '8847ff' },
				{ value: '★ Skullbrero', color: '8847ff' },
				{ value: '    Soviet Strongmann', color: '8847ff' },
				{ value: '    Voodoo Vizier', color: '8847ff' },
				{ value: '    Madmann\'s Muzzle', color: '8847ff' },
				{ value: '    BINOCULUS!', color: '4b69ff' },
				{ value: '    Derangement Garment', color: '4b69ff' },
				{ value: '    Convict Cap', color: '4b69ff' },
				{ value: '    El Mostacho', color: '4b69ff' },
				{ value: '    Candy Cranium', color: '4b69ff' },
				{ value: '    Bat Hat', color: '4b69ff' },
				{ value: '    Pocket Halloween Boss', color: '4b69ff' },
				{ value: '    Party Poncho', color: '4b69ff' },
				{ value: '    Fuel Injector', color: '4b69ff' },
				{ value: '    Bread Biter', color: '4b69ff' }],
			tradable: 1,
			actions:
				[{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=31066&lang=en_US',
					name: 'Item Wiki Page...'
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D5006617706189886078',
					name: 'Inspect in Game...'
				}],
			name: 'Unusual Skullbrero',
			name_color: '8650AC',
			type: 'Level 57 Hat',
			market_name: 'Unusual Skullbrero',
			market_hash_name: 'Unusual Skullbrero',
			market_actions:
				[{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D5006617706189886078',
					name: 'Inspect in Game...'
				}],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags:
				[{
					category: 'Quality',
					internal_name: 'rarity4',
					localized_category_name: 'Quality',
					localized_tag_name: 'Unusual',
					color: '8650AC'
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic'
				},
				{
					category: 'Class',
					internal_name: 'Pyro',
					localized_category_name: 'Class',
					localized_tag_name: 'Pyro'
				},
				{
					category: 'Rarity',
					internal_name: 'Rarity_Mythical',
					localized_category_name: 'Grade',
					localized_tag_name: 'Commando',
					color: '8847ff'
				},
				{
					category: 'Collection',
					internal_name: 'halloween2019_collection_name',
					localized_category_name: 'Collection',
					localized_tag_name: 'Spooky Spoils Collection'
				}]
		});

		assert.deepEqual(econItem, {
			name: 'Skullbrero',
			id: '8574678947',
			img:
				'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDewlDDUq7hytIncTqD-CJGu8_l9sn4pUbi2Ftw1ApbbXtNmM_cVTEV_lbWaw7pQu0W3Rr6sVlAdPvoOhScFnt4pyGbefmPm6lTg/',
			tradable: true,
			craftable: true,
			quality: 5,
			effect: 130,
			classes: ['Pyro'],
			type: 'misc',
			collection: 'Spooky Spoils Collection',
			grade: 'Commando',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false
		});
	});

	it('Case #4', () => {
		const econItem = parseEconItem({
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
			descriptions: [{ value: '★ Unusual Effect: Smoking', color: 'ffd700' }],
			tradable: 1,
			actions:
				[{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=318&lang=en_US',
					name: 'Item Wiki Page...'
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D10290164463146604828',
					name: 'Inspect in Game...'
				}],
			name: 'Unusual Prancer\'s Pride',
			name_color: '8650AC',
			type: 'Level 88 Hat',
			market_name: 'Unusual Prancer\'s Pride',
			market_hash_name: 'Unusual Prancer\'s Pride',
			market_actions:
				[{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D10290164463146604828',
					name: 'Inspect in Game...'
				}],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags:
				[{
					category: 'Quality',
					internal_name: 'rarity4',
					localized_category_name: 'Quality',
					localized_tag_name: 'Unusual',
					color: '8650AC'
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic'
				},
				{
					category: 'Class',
					internal_name: 'Pyro',
					localized_category_name: 'Class',
					localized_tag_name: 'Pyro'
				}]
		});

		assert.deepEqual(
			econItem,
			{
				name: 'Prancer\'s Pride',
				id: '8610658018',
				img:
					'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEbfgYfXh7wqwdTmsHiCM2ACfIHnpRh5MkG3G8zyVMpYebiYm8wdFGTBPILC_BvrQu9X3RqupQ6AYPhp-wHZ0yx43BgcxIX/',
				tradable: true,
				craftable: true,
				quality: 5,
				effect: 35,
				classes: ['Pyro'],
				type: 'misc',
				parts: [],
				spells: [],
				marketable: true,
				commodity: false
			}
		);
	});
});