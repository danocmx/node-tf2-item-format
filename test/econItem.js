const { assert } = require('chai');

const { parseEconItem } = require('..');

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
			name: 'Flame Thrower',
			fullName: 'Cool Festivized Specialized Killstreak Forest Fire Flame Thrower (Minimal Wear)',
			id: '8407830034',
			img:
				'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffsDz5zdwmTVPAOCcot8Qn-Wxg07dR3XcGzub5ffwvmttSXYrAlY9xFTMaCUvbXNQz_6EkwiPRYKJaIon-9jHjrOWoUG0280KDki-w/',
			tradable: true,
			craftable: true,
			quality: 5,
			texture: 9,
			wear: 2,
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
			fullName: 'Nuts n\' Bolts Brain Bucket',
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
			fullName: 'Twisted Radiance Skullbrero',
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
				fullName: 'Smoking Prancer\'s Pride',
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

	it('Case #5', () => {
		const econItem = parseEconItem({
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
			descriptions:
				[{
					value: 'Commando Grade Rocket Launcher (Field-Tested)',
					color: '8847ff'
				},
				{ value: 'Festivized', color: 'ffd700' },
				{
					value: 'Halloween: Pumpkin Bombs (spell only active during event)',
					color: '7ea9d1'
				},
				{ value: 'Sheen: Agonizing Emerald', color: '7ea9d1' },
				{ value: 'Killstreaks Active', color: '7ea9d1' },
				{
					value: '\nGift from: VLaDOS | S>C.MOON YELLOW BELT',
					color: '7ea9d1'
				},
				{ value: 'Date Received: Tuesday, September 10, 2019 (9:36:39) GMT' },
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
				{ value: '✔ Woodland Warrior Rocket Launcher', color: '8847ff' },
				{ value: '    Wrapped Reviver Medi Gun', color: '8847ff' },
				{ value: '    Night Owl Sniper Rifle', color: '4b69ff' },
				{ value: '    Woodsy Widowmaker SMG', color: '4b69ff' },
				{ value: '    Backwoods Boomstick Shotgun', color: '4b69ff' },
				{ value: '    King of the Jungle Minigun', color: '4b69ff' },
				{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
				{ value: '    Forest Fire Flame Thrower', color: '4b69ff' }],
			tradable: 1,
			actions:
				[{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15006&lang=en_US',
					name: 'Item Wiki Page...'
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D11534198800805877074',
					name: 'Inspect in Game...'
				}],
			fraudwarnings:
				['This item has been renamed.\nOriginal name: "Rocket Launcher"'],
			name: '\'\'post live spell rocket louncher !!!!!!!\'\'',
			name_color: 'FAFAFA',
			type: '',
			market_name:
				'Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)',
			market_hash_name:
				'Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)',
			market_actions:
				[{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D11534198800805877074',
					name: 'Inspect in Game...'
				}],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags:
				[{
					category: 'Quality',
					internal_name: 'paintkitweapon',
					localized_category_name: 'Quality',
					localized_tag_name: 'Decorated Weapon',
					color: 'FAFAFA'
				},
				{
					category: 'Type',
					internal_name: 'primary',
					localized_category_name: 'Type',
					localized_tag_name: 'Primary weapon'
				},
				{
					category: 'Class',
					internal_name: 'Soldier',
					localized_category_name: 'Class',
					localized_tag_name: 'Soldier'
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
					internal_name: 'concealedkiller_collection',
					localized_category_name: 'Collection',
					localized_tag_name: 'Concealed Killer Collection'
				},
				{
					category: 'Exterior',
					internal_name: 'TFUI_InvTooltip_FieldTested',
					localized_category_name: 'Exterior',
					localized_tag_name: 'Field-Tested'
				}]
		});

		assert.deepEqual(econItem, {
			name: 'Rocket Launcher',
			fullName: 'Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)',
			id: '8656785508',
			img:
				'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffjDz5zdwmTVPAOCsot8Qn-Whg07dR3XcGzuehWe1q65oHFOuQpN4kZGpOECffQZl39vho_1KdefJbbonvq3SvubmwUG028UzYUYzA/',
			tradable: true,
			craftable: true,
			quality: 15,
			texture: 6,
			wear: 3,
			festivized: true,
			killstreak: 2,
			classes: ['Soldier'],
			type: 'primary',
			collection: 'Concealed Killer Collection',
			grade: 'Commando',
			parts: [],
			spells: ['Pumpkin Bombs'],
			marketable: true,
			commodity: false
		})
	})

	it('Case #6', () => {
		const econItem = parseEconItem({
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
			descriptions:
				[{
					value: 'Holiday Restriction: Halloween / Full Moon',
					color: 'd83636'
				},
				{
					value:
						'Halloween: Spectral Spectrum (spell only active during event)',
					color: '7ea9d1'
				},
				{ value: '' }],
			tradable: 1,
			actions:
				[{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=30290&lang=en_US',
					name: 'Item Wiki Page...'
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D16238051287194648628',
					name: 'Inspect in Game...'
				}],
			name: 'Haunted PY-40 Incinibot',
			name_color: '38f3ab',
			type: 'Level 58 Mask',
			market_name: 'Haunted PY-40 Incinibot',
			market_hash_name: 'Haunted PY-40 Incinibot',
			market_actions:
				[{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D16238051287194648628',
					name: 'Inspect in Game...'
				}],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags:
				[{
					category: 'Quality',
					internal_name: 'haunted',
					localized_category_name: 'Quality',
					localized_tag_name: 'Haunted',
					color: '38f3ab'
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
		})

		assert.deepEqual(econItem, {
			name: 'PY-40 Incinibot',
			fullName: 'Haunted PY-40 Incinibot',
			id: '8733746813',
			img:
				'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDe1VBDEjdqCEX2PfnGOaDBeEUlNQK6ZFH3jMlwwB_Y7vhZ2Q0JFKQAKQJXadrpF6-UXE268I3UNHg8esHfF28tdHHO65sbo88eQy8bA/',
			tradable: true,
			craftable: true,
			quality: 13,
			classes: ['Pyro'],
			type: 'misc',
			parts: [],
			spells: ['Spectral Spectrum'],
			marketable: true,
			commodity: false
		});
	})

	it('Case #7', () => {
		const econItem = parseEconItem({
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
			descriptions:
				[{
					value: 'Paint Color: Noble Hatter\'s Violet',
					color: '756b5e'
				},
				{
					value:
						'Halloween: Spectral Spectrum (spell only active during event)',
					color: '7ea9d1'
				},
				{
					value:
						'The K-9 mane is perfect for tricky social situations. People will either only want to talk about the hat, which means they\'ll be distracted from that rash making its way up your jugular,or they\'ll avoid you altogether. It\'s a win/win!'
				}],
			tradable: 1,
			actions:
				[{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=876&lang=en_US',
					name: 'Item Wiki Page...'
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D7378163898213210976',
					name: 'Inspect in Game...'
				}],
			name: 'Genuine K-9 Mane',
			name_color: '4D7455',
			type: 'Level 1 Spirit Animal',
			market_name: 'Genuine K-9 Mane',
			market_hash_name: 'Genuine K-9 Mane',
			market_actions:
				[{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D7378163898213210976',
					name: 'Inspect in Game...'
				}],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags:
				[{
					category: 'Quality',
					internal_name: 'rarity1',
					localized_category_name: 'Quality',
					localized_tag_name: 'Genuine',
					color: '4D7455'
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic'
				},
				{
					category: 'Class',
					internal_name: 'Demoman',
					localized_category_name: 'Class',
					localized_tag_name: 'Demoman'
				},
				{
					category: 'Class',
					internal_name: 'Heavy',
					localized_category_name: 'Class',
					localized_tag_name: 'Heavy'
				}]
		})

		assert.deepEqual(econItem, {
			name: 'K-9 Mane',
			fullName: 'Genuine K-9 Mane',
			id: '8434754722',
			img:
				'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTcePMQFc1nqWSMU5OD2NwOx3sIyShXOjLx2Sk5MbUqMcbBnQz4ruyeU2DgVzPLKCnYCGFgGOIYfAeFr3HysPORE2vPELl_RQEMdaFX9GxObM-BOEE_goVdrTXqlBwkHRNxJ5VFcVbihGQdNlNSNRp3/',
			tradable: true,
			craftable: true,
			quality: 1,
			classes: ['Demoman', 'Heavy'],
			type: 'misc',
			parts: [],
			spells: ['Spectral Spectrum'],
			marketable: true,
			commodity: false,
			paint: "Noble Hatter's Violet"
		})
	})

	it('Case #7', () => {
		const econItem = parseEconItem({
			appid: 440,
			contextid: '2',
			assetid: '8294625611',
			classid: '1336074160',
			instanceid: '3639098153',
			amount: '1',
			currency: 0,
			background_color: '3C352E',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEfezgSUhr2hzVGjMHlMvyJC-sUkt8K6ZFH3jMllVQrZbvkNG8ydFXAWfEICqFjp160CCNivZI3VY_j9u8DfA6-sYSUN65sbo_U7o3qKw',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEfezgSUhr2hzVGjMHlMvyJC-sUkt8K6ZFH3jMllVQrZbvkNG8ydFXAWfEICqFjp160CCNivZI3VY_j9u8DfA6-sYSUN65sbo_U7o3qKw',
			descriptions:
				[{ value: 'Style: Tie', color: '756b5e' },
				{
					value:
						'Halloween: Chromatic Corruption (spell only active during event)',
					color: '7ea9d1'
				},
				{
					value:
						'Halloween: Voices From Below (spell only active during event)',
					color: '7ea9d1'
				},
				{
					value:
						'Whether you\'re trepanning a skull to let out the sickness ghosts or attaching enough leeches to a patient that they\'ll pass out from blood loss before you cut off any suspicious-lookinglimbs, this dapper ruffed shirt and coat will assure your patients that they came to the right place for their dangerously insane 18th century medicine.'
				}],
			tradable: 1,
			actions:
				[{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=878&lang=en_US',
					name: 'Item Wiki Page...'
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D434113929687356346',
					name: 'Inspect in Game...'
				}],
			name: 'Strange Genuine Foppish Physician',
			name_color: '4D7455',
			type: 'Strange Apparel - Points Scored: 1',
			market_name: 'Strange Genuine Foppish Physician',
			market_hash_name: 'Strange Genuine Foppish Physician',
			market_actions:
				[{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D434113929687356346',
					name: 'Inspect in Game...'
				}],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags:
				[{
					category: 'Quality',
					internal_name: 'rarity1',
					localized_category_name: 'Quality',
					localized_tag_name: 'Genuine',
					color: '4D7455'
				},
				{
					category: 'Type',
					internal_name: 'misc',
					localized_category_name: 'Type',
					localized_tag_name: 'Cosmetic'
				},
				{
					category: 'Class',
					internal_name: 'Medic',
					localized_category_name: 'Class',
					localized_tag_name: 'Medic'
				}]
		});

		assert.deepEqual(econItem, {
			name: 'Foppish Physician',
			fullName: 'Strange Genuine Foppish Physician',
			id: '8294625611',
			img:
				'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEfezgSUhr2hzVGjMHlMvyJC-sUkt8K6ZFH3jMllVQrZbvkNG8ydFXAWfEICqFjp160CCNivZI3VY_j9u8DfA6-sYSUN65sbo_U7o3qKw/',
			tradable: true,
			craftable: true,
			quality: 1,
			elevated: true,
			classes: ['Medic'],
			type: 'misc',
			parts: [],
			spells: ['Chromatic Corruption', 'Voices From Below'],
			marketable: true,
			commodity: false
		})
	})
});

describe('Econ Item in Numbers', () => {
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
		}, { inNumbers: false });

		assert.deepEqual(econItem, {
			name: 'Flame Thrower',
			fullName: 'Cool Festivized Specialized Killstreak Forest Fire Flame Thrower (Minimal Wear)',
			id: '8407830034',
			img:
				'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffsDz5zdwmTVPAOCcot8Qn-Wxg07dR3XcGzub5ffwvmttSXYrAlY9xFTMaCUvbXNQz_6EkwiPRYKJaIon-9jHjrOWoUG0280KDki-w/',
			tradable: true,
			craftable: true,
			quality: 'Unusual',
			texture: 'Forest Fire',
			wear: 'Minimal Wear',
			killstreak: 'Specialized Killstreak',
			festivized: true,
			effect: 'Cool',
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
		}, { inNumbers: false });

		assert.deepEqual(econItem, {
			name: 'Brain Bucket',
			fullName: 'Nuts n\' Bolts Brain Bucket',
			id: '8555715171',
			img:
				'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEJeQQaWA_dtDlRj82oVPeJUbRTyohkssUGjDBox1IsNrKxaWc1JFWQWPYHDKFsow2_WyVlv4lzWtBtJvRLsg/',
			tradable: true,
			craftable: true,
			quality: 'Unusual',
			effect: 'Nuts n\' Bolts',
			classes: ['Soldier'],
			type: 'misc',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false
		}, { inNumbers: false });
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
		}, { inNumbers: false });

		assert.deepEqual(econItem, {
			name: 'Skullbrero',
			fullName: 'Twisted Radiance Skullbrero',
			id: '8574678947',
			img:
				'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDewlDDUq7hytIncTqD-CJGu8_l9sn4pUbi2Ftw1ApbbXtNmM_cVTEV_lbWaw7pQu0W3Rr6sVlAdPvoOhScFnt4pyGbefmPm6lTg/',
			tradable: true,
			craftable: true,
			quality: "Unusual",
			effect: "Twisted Radiance",
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
		}, { inNumbers: false });

		assert.deepEqual(
			econItem,
			{
				name: 'Prancer\'s Pride',
				fullName: 'Smoking Prancer\'s Pride',
				id: '8610658018',
				img:
					'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEbfgYfXh7wqwdTmsHiCM2ACfIHnpRh5MkG3G8zyVMpYebiYm8wdFGTBPILC_BvrQu9X3RqupQ6AYPhp-wHZ0yx43BgcxIX/',
				tradable: true,
				craftable: true,
				quality: "Unusual",
				effect: "Smoking",
				classes: ['Pyro'],
				type: 'misc',
				parts: [],
				spells: [],
				marketable: true,
				commodity: false
			}
		);
	});

	it('Case #5', () => {
		const econItem = parseEconItem({
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
			descriptions:
				[{
					value: 'Commando Grade Rocket Launcher (Field-Tested)',
					color: '8847ff'
				},
				{ value: 'Festivized', color: 'ffd700' },
				{
					value: 'Halloween: Pumpkin Bombs (spell only active during event)',
					color: '7ea9d1'
				},
				{ value: 'Sheen: Agonizing Emerald', color: '7ea9d1' },
				{ value: 'Killstreaks Active', color: '7ea9d1' },
				{
					value: '\nGift from: VLaDOS | S>C.MOON YELLOW BELT',
					color: '7ea9d1'
				},
				{ value: 'Date Received: Tuesday, September 10, 2019 (9:36:39) GMT' },
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
				{ value: '✔ Woodland Warrior Rocket Launcher', color: '8847ff' },
				{ value: '    Wrapped Reviver Medi Gun', color: '8847ff' },
				{ value: '    Night Owl Sniper Rifle', color: '4b69ff' },
				{ value: '    Woodsy Widowmaker SMG', color: '4b69ff' },
				{ value: '    Backwoods Boomstick Shotgun', color: '4b69ff' },
				{ value: '    King of the Jungle Minigun', color: '4b69ff' },
				{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
				{ value: '    Forest Fire Flame Thrower', color: '4b69ff' }],
			tradable: 1,
			actions:
				[{
					link:
						'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15006&lang=en_US',
					name: 'Item Wiki Page...'
				},
				{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D11534198800805877074',
					name: 'Inspect in Game...'
				}],
			fraudwarnings:
				['This item has been renamed.\nOriginal name: "Rocket Launcher"'],
			name: '\'\'post live spell rocket louncher !!!!!!!\'\'',
			name_color: 'FAFAFA',
			type: '',
			market_name:
				'Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)',
			market_hash_name:
				'Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)',
			market_actions:
				[{
					link:
						'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D11534198800805877074',
					name: 'Inspect in Game...'
				}],
			commodity: 0,
			market_tradable_restriction: 7,
			market_marketable_restriction: 0,
			marketable: 1,
			tags:
				[{
					category: 'Quality',
					internal_name: 'paintkitweapon',
					localized_category_name: 'Quality',
					localized_tag_name: 'Decorated Weapon',
					color: 'FAFAFA'
				},
				{
					category: 'Type',
					internal_name: 'primary',
					localized_category_name: 'Type',
					localized_tag_name: 'Primary weapon'
				},
				{
					category: 'Class',
					internal_name: 'Soldier',
					localized_category_name: 'Class',
					localized_tag_name: 'Soldier'
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
					internal_name: 'concealedkiller_collection',
					localized_category_name: 'Collection',
					localized_tag_name: 'Concealed Killer Collection'
				},
				{
					category: 'Exterior',
					internal_name: 'TFUI_InvTooltip_FieldTested',
					localized_category_name: 'Exterior',
					localized_tag_name: 'Field-Tested'
				}]
		}, { inNumbers: false });

		assert.deepEqual(econItem, {
			name: 'Rocket Launcher',
			fullName: 'Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)',
			id: '8656785508',
			img:
				'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffjDz5zdwmTVPAOCsot8Qn-Whg07dR3XcGzuehWe1q65oHFOuQpN4kZGpOECffQZl39vho_1KdefJbbonvq3SvubmwUG028UzYUYzA/',
			tradable: true,
			craftable: true,
			quality: "Decorated Weapon",
			texture: "Woodland Warrior",
			wear: "Field-Tested",
			festivized: true,
			killstreak: "Specialized Killstreak",
			classes: ['Soldier'],
			type: 'primary',
			collection: 'Concealed Killer Collection',
			grade: 'Commando',
			parts: [],
			spells: ['Pumpkin Bombs'],
			marketable: true,
			commodity: false
		})
	})
})