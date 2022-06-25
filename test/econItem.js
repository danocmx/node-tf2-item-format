const { assert } = require('chai');

const { parseEconItem, Schema } = require('../dist/static');
const { createFormat } = require('../dist');

describe('parseEconItem', () => {
	it('Case #1', () => {
		const econItem = parseEconItem(
			{
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
						value: 'Afterburn reduces Medi Gun healing and resist shield effects.\nAlt-Fire: Release a blast of air that pushes enemies and projectiles and extinguishes teammates that are on fire.',
					},
					{ value: ' ' },
					{ value: ' ' },
					{ value: 'Concealed Killer Collection' },
					{
						value: '    Sand Cannon Rocket Launcher',
						color: 'eb4b4b',
					},
					{ value: '    Red Rock Roscoe Pistol', color: 'eb4b4b' },
					{
						value: '    Psychedelic Slugger Revolver',
						color: 'd32ce6',
					},
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
					{
						value: '    Backwoods Boomstick Shotgun',
						color: '4b69ff',
					},
					{
						value: '    King of the Jungle Minigun',
						color: '4b69ff',
					},
					{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
					{ value: '★ Forest Fire Flame Thrower', color: '4b69ff' },
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15005&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D6922402693932635553',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D6922402693932635553',
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
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Flame Thrower',
			fullName:
				'Cool Festivized Specialized Killstreak Forest Fire Flame Thrower (Minimal Wear)',
			id: '8407830034',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffsDz5zdwmTVPAOCcot8Qn-Wxg07dR3XcGzub5ffwvmttSXYrAlY9xFTMaCUvbXNQz_6EkwiPRYKJaIon-9jHjrOWoUG0280KDki-w/',
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
			commodity: false,
			sheen: 'Agonizing Emerald',
			level: -1,
		});
	});

	it('Case #2', () => {
		const econItem = parseEconItem(
			{
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
					{
						value: "★ Unusual Effect: Nuts n' Bolts",
						color: 'ffd700',
					},
					{ value: "''hmm epic''" },
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=434&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D16442165943709427870',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D16442165943709427870',
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
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Brain Bucket',
			fullName: "Nuts n' Bolts Brain Bucket",
			id: '8555715171',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEJeQQaWA_dtDlRj82oVPeJUbRTyohkssUGjDBox1IsNrKxaWc1JFWQWPYHDKFsow2_WyVlv4lzWtBtJvRLsg/',
			tradable: true,
			craftable: true,
			quality: 5,
			effect: 31,
			classes: ['Soldier'],
			type: 'misc',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false,
			level: 82,
		});
	});

	it('Case #3', () => {
		const econItem = parseEconItem(
			{
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
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=31066&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D5006617706189886078',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D5006617706189886078',
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
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Skullbrero',
			fullName: 'Twisted Radiance Skullbrero',
			id: '8574678947',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDewlDDUq7hytIncTqD-CJGu8_l9sn4pUbi2Ftw1ApbbXtNmM_cVTEV_lbWaw7pQu0W3Rr6sVlAdPvoOhScFnt4pyGbefmPm6lTg/',
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
			commodity: false,
			level: 57,
		});
	});

	it('Case #4', () => {
		const econItem = parseEconItem(
			{
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
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=318&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D10290164463146604828',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D10290164463146604828',
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
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: "Prancer's Pride",
			fullName: "Smoking Prancer's Pride",
			id: '8610658018',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEbfgYfXh7wqwdTmsHiCM2ACfIHnpRh5MkG3G8zyVMpYebiYm8wdFGTBPILC_BvrQu9X3RqupQ6AYPhp-wHZ0yx43BgcxIX/',
			tradable: true,
			craftable: true,
			quality: 5,
			effect: 35,
			classes: ['Pyro'],
			type: 'misc',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false,
			level: 88,
		});
	});

	it('Case #5', () => {
		const econItem = parseEconItem(
			{
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
						value: 'Halloween: Pumpkin Bombs (spell only active during event)',
						color: '7ea9d1',
					},
					{ value: 'Sheen: Agonizing Emerald', color: '7ea9d1' },
					{ value: 'Killstreaks Active', color: '7ea9d1' },
					{
						value: '\nGift from: VLaDOS | S>C.MOON YELLOW BELT',
						color: '7ea9d1',
					},
					{
						value: 'Date Received: Tuesday, September 10, 2019 (9:36:39) GMT',
					},
					{ value: ' ' },
					{ value: ' ' },
					{ value: 'Concealed Killer Collection' },
					{
						value: '    Sand Cannon Rocket Launcher',
						color: 'eb4b4b',
					},
					{ value: '    Red Rock Roscoe Pistol', color: 'eb4b4b' },
					{
						value: '    Psychedelic Slugger Revolver',
						color: 'd32ce6',
					},
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
					{
						value: '    Backwoods Boomstick Shotgun',
						color: '4b69ff',
					},
					{
						value: '    King of the Jungle Minigun',
						color: '4b69ff',
					},
					{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
					{ value: '    Forest Fire Flame Thrower', color: '4b69ff' },
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15006&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D11534198800805877074',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D11534198800805877074',
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
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Rocket Launcher',
			fullName:
				'Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)',
			id: '8656785508',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffjDz5zdwmTVPAOCsot8Qn-Whg07dR3XcGzuehWe1q65oHFOuQpN4kZGpOECffQZl39vho_1KdefJbbonvq3SvubmwUG028UzYUYzA/',
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
			commodity: false,
			sheen: 'Agonizing Emerald',
			level: -1,
		});
	});

	it('Case #6', () => {
		const econItem = parseEconItem(
			{
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
						value: 'Halloween: Spectral Spectrum (spell only active during event)',
						color: '7ea9d1',
					},
					{ value: '' },
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=30290&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D16238051287194648628',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D16238051287194648628',
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
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: 'PY-40 Incinibot',
			fullName: 'Haunted PY-40 Incinibot',
			id: '8733746813',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDe1VBDEjdqCEX2PfnGOaDBeEUlNQK6ZFH3jMlwwB_Y7vhZ2Q0JFKQAKQJXadrpF6-UXE268I3UNHg8esHfF28tdHHO65sbo88eQy8bA/',
			tradable: true,
			craftable: true,
			quality: 13,
			classes: ['Pyro'],
			type: 'misc',
			parts: [],
			spells: ['Spectral Spectrum'],
			marketable: true,
			commodity: false,
			level: 58,
		});
	});

	it('Case #7', () => {
		const econItem = parseEconItem(
			{
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
						value: 'Halloween: Spectral Spectrum (spell only active during event)',
						color: '7ea9d1',
					},
					{
						value: "The K-9 mane is perfect for tricky social situations. People will either only want to talk about the hat, which means they'll be distracted from that rash making its way up your jugular,or they'll avoid you altogether. It's a win/win!",
					},
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=876&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D7378163898213210976',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D7378163898213210976',
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
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: 'K-9 Mane',
			fullName: 'Genuine K-9 Mane',
			id: '8434754722',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTcePMQFc1nqWSMU5OD2NwOx3sIyShXOjLx2Sk5MbUqMcbBnQz4ruyeU2DgVzPLKCnYCGFgGOIYfAeFr3HysPORE2vPELl_RQEMdaFX9GxObM-BOEE_goVdrTXqlBwkHRNxJ5VFcVbihGQdNlNSNRp3/',
			tradable: true,
			craftable: true,
			quality: 1,
			classes: ['Demoman', 'Heavy'],
			type: 'misc',
			parts: [],
			spells: ['Spectral Spectrum'],
			marketable: true,
			commodity: false,
			paint: "Noble Hatter's Violet",
			level: 1,
		});
	});

	it('Case #8', () => {
		const econItem = parseEconItem(
			{
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
				descriptions: [
					{ value: 'Style: Tie', color: '756b5e' },
					{
						value: 'Halloween: Chromatic Corruption (spell only active during event)',
						color: '7ea9d1',
					},
					{
						value: 'Halloween: Voices From Below (spell only active during event)',
						color: '7ea9d1',
					},
					{
						value: "Whether you're trepanning a skull to let out the sickness ghosts or attaching enough leeches to a patient that they'll pass out from blood loss before you cut off any suspicious-lookinglimbs, this dapper ruffed shirt and coat will assure your patients that they came to the right place for their dangerously insane 18th century medicine.",
					},
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=878&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D434113929687356346',
						name: 'Inspect in Game...',
					},
				],
				name: 'Strange Genuine Foppish Physician',
				name_color: '4D7455',
				type: 'Strange Apparel - Points Scored: 1',
				market_name: 'Strange Genuine Foppish Physician',
				market_hash_name: 'Strange Genuine Foppish Physician',
				market_actions: [
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D434113929687356346',
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
						internal_name: 'Medic',
						localized_category_name: 'Class',
						localized_tag_name: 'Medic',
					},
				],
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Foppish Physician',
			fullName: 'Strange Genuine Foppish Physician',
			id: '8294625611',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEfezgSUhr2hzVGjMHlMvyJC-sUkt8K6ZFH3jMllVQrZbvkNG8ydFXAWfEICqFjp160CCNivZI3VY_j9u8DfA6-sYSUN65sbo_U7o3qKw/',
			tradable: true,
			craftable: true,
			quality: 1,
			elevated: true,
			classes: ['Medic'],
			type: 'misc',
			parts: [],
			spells: ['Chromatic Corruption', 'Voices From Below'],
			marketable: true,
			commodity: false,
			level: -1,
		});
	});

	it('Case #9', () => {
		const econItem = parseEconItem(
			{
				appid: 440,
				classid: '4044585817',
				instanceid: '11040545',
				currency: 0,
				background_color: '3C352E',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYwsVVB7whyJMhcrvCM2ACfIHnpRi4cBQjGc6xAQjNbuwYGMwJlfHWfAMDaRjpQm6CCVhsZJhUIW3r-9TZ0yx4-owIvoI',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYwsVVB7whyJMhcrvCM2ACfIHnpRi4cBQjGc6xAQjNbuwYGMwJlfHWfAMDaRjpQm6CCVhsZJhUIW3r-9TZ0yx4-owIvoI',
				descriptions: [
					{
						value: 'Holiday Restriction: Halloween / Full Moon',
						color: '756b5e',
					},
					{
						value: "''Halloween: Chromatic Corruption (spell only active during event)''",
						color: '756b5e',
					},
					{ value: "''Sheen: sheen''", color: '756b5e' },
					{ value: "''Paint: paint''", color: '756b5e' },
					{ value: "''Festivized''", color: '756b5e' },
					{
						value: "''( Not Usable in Crafting )''",
						color: '756b5e',
					},
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=5618&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D12289692045334241370',
						name: 'Inspect in Game...',
					},
				],
				name: 'Haunted Voodoo-Cursed Soldier Soul',
				name_color: '38f3ab',
				type: 'Level 1 Cursed Soul',
				market_name: 'Haunted Voodoo-Cursed Soldier Soul',
				market_hash_name: 'Haunted Voodoo-Cursed Soldier Soul',
				market_actions: [
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D12289692045334241370',
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
						internal_name: 'Soldier',
						localized_category_name: 'Class',
						localized_tag_name: 'Soldier',
					},
				],
			},
			false,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Voodoo-Cursed Soldier Soul',
			fullName: 'Haunted Voodoo-Cursed Soldier Soul',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYwsVVB7whyJMhcrvCM2ACfIHnpRi4cBQjGc6xAQjNbuwYGMwJlfHWfAMDaRjpQm6CCVhsZJhUIW3r-9TZ0yx4-owIvoI/',
			tradable: true,
			craftable: true,
			quality: 'Haunted',
			classes: ['Soldier'],
			type: 'misc',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false,
			level: 1,
		});
	});

	it('Case #10', () => {
		const econItem = parseEconItem({
			appid: 440,
			classid: '4044585817',
			instanceid: '11040545',
			currency: 0,
			background_color: '3C352E',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYwsVVB7whyJMhcrvCM2ACfIHnpRi4cBQjGc6xAQjNbuwYGMwJlfHWfAMDaRjpQm6CCVhsZJhUIW3r-9TZ0yx4-owIvoI',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYwsVVB7whyJMhcrvCM2ACfIHnpRi4cBQjGc6xAQjNbuwYGMwJlfHWfAMDaRjpQm6CCVhsZJhUIW3r-9TZ0yx4-owIvoI',
			descriptions: [
				{
					value: 'Holiday Restriction: Halloween / Full Moon',
					color: '756b5e',
				},
				{ value: "''★ Unusual Effect: Burning Flames''" },
				{ value: "''★ Unusual Effect: Burning Flames''" },
			],
			tradable: 1,
			actions: [
				{
					link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=5618&lang=en_US',
					name: 'Item Wiki Page...',
				},
				{
					link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D12289692045334241370',
					name: 'Inspect in Game...',
				},
			],
			name: 'Haunted Voodoo-Cursed Soldier Soul',
			name_color: '38f3ab',
			type: 'Level 1 Cursed Soul',
			market_name: 'Haunted Voodoo-Cursed Soldier Soul',
			market_hash_name: 'Haunted Voodoo-Cursed Soldier Soul',
			market_actions: [
				{
					link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D12289692045334241370',
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
					internal_name: 'Soldier',
					localized_category_name: 'Class',
					localized_tag_name: 'Soldier',
				},
			],
		});

		assert.deepEqual(econItem, {
			name: 'Voodoo-Cursed Soldier Soul',
			fullName: 'Haunted Voodoo-Cursed Soldier Soul',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYwsVVB7whyJMhcrvCM2ACfIHnpRi4cBQjGc6xAQjNbuwYGMwJlfHWfAMDaRjpQm6CCVhsZJhUIW3r-9TZ0yx4-owIvoI/',
			tradable: true,
			craftable: true,
			quality: 'Haunted',
			classes: ['Soldier'],
			type: 'misc',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false,
			level: 1,
		});
	});

	it('Case #11', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '2871127490',
				instanceid: '3522129930',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwsUWBjqvy1Nt8_pAfazBOESnN97vZQFgGVtyQUrbeW2ZjM_IFHGA_JYC_BuoQ7qDyJlusVnUdO1orpQfRKv6tW-OVvZVQ',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwsUWBjqvy1Nt8_pAfazBOESnN97vZQFgGVtyQUrbeW2ZjM_IFHGA_JYC_BuoQ7qDyJlusVnUdO1orpQfRKv6tW-OVvZVQ',
				icon_drag_url: '',
				name: 'Strange Australium Blutsauger',
				market_hash_name: 'Strange Australium Blutsauger',
				market_name: 'Strange Australium Blutsauger',
				name_color: 'CF6A32',
				background_color: '3C352E',
				type: 'Strange Syringe Gun - Kills: 20',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: '(Cloaked Spies Killed: 0)',
						color: '756b5e',
					},
					{
						value: "''(Killstreaks Ended: 0)''",
						color: '756b5e',
					},
					{
						value: '(Scouts Killed: 0)',
						color: '756b5e',
					},
					{
						value: 'On Hit: Gain up to +3 health',
						color: '7ea9d1',
					},
					{
						value: '-2 health drained per second on wearer',
						color: 'd83636',
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=36&lang=en_US',
					},
				],
				tags: [
					{
						internal_name: 'strange',
						name: 'Strange',
						category: 'Quality',
						color: 'CF6A32',
						category_name: 'Quality',
					},
					{
						internal_name: 'primary',
						name: 'Primary weapon',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Medic',
						name: 'Medic',
						category: 'Class',
						category_name: 'Class',
					},
				],
				app_data: {
					def_index: '36',
					quality: '11',
				},
			},
			false,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Blutsauger',
			fullName: 'Strange Australium Blutsauger',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwsUWBjqvy1Nt8_pAfazBOESnN97vZQFgGVtyQUrbeW2ZjM_IFHGA_JYC_BuoQ7qDyJlusVnUdO1orpQfRKv6tW-OVvZVQ/',
			tradable: true,
			craftable: true,
			quality: 'Strange',
			australium: true,
			classes: ['Medic'],
			type: 'primary',
			parts: ['Cloaked Spies Killed', 'Scouts Killed'],
			spells: [],
			marketable: true,
			commodity: false,
			level: -1,
		});
	});

	it('Case #12', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '2625497429',
				instanceid: '4048537137',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYghuZgHPUPUOCacF4w3tG3J86sI7V47mp-JTLQu-vNTGYbh_MNgYHMeFXPHVY139uEk9g_VbK52LqTSvg3pcnpTOhA',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYghuZgHPUPUOCacF4w3tG3J86sI7V47mp-JTLQu-vNTGYbh_MNgYHMeFXPHVY139uEk9g_VbK52LqTSvg3pcnpTOhA',
				icon_drag_url: '',
				name: 'Shell Shocker Rocket Launcher',
				market_hash_name:
					'Strange Specialized Killstreak Shell Shocker Rocket Launcher (Battle Scarred)',
				market_name:
					'Strange Specialized Killstreak Shell Shocker Rocket Launcher (Battle Scarred)',
				name_color: 'CF6A32',
				background_color: '3C352E',
				type: '',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: 'Assassin Grade Rocket Launcher (Battle Scarred)',
						color: 'd32ce6',
					},
					{
						value: 'Strange Stat Clock Attached',
						color: 'CF6A32',
					},
					{
						value: '     Kills: 5121',
						color: '756b5e',
					},
					{
						value: '     Pyros Killed: 712',
						color: '756b5e',
					},
					{
						value: 'Team Colored Decorated Weapon',
					},
					{
						value: 'Halloween: Pumpkin Bombs (spell only active during event)',
						color: '7ea9d1',
					},
					{
						value: 'Sheen: Mean Green',
						color: '7ea9d1',
					},
					{
						value: 'Killstreaks Active',
						color: '7ea9d1',
					},
					{
						value: ' ',
					},
					{
						value: ' ',
					},
					{
						value: 'Powerhouse Collection',
					},
					{
						value: '    Liquid Asset Stickybomb Launcher',
						color: 'eb4b4b',
						app_data: {
							def_index: '15045',
						},
					},
					{
						value: '    Thunderbolt Sniper Rifle',
						color: 'eb4b4b',
						app_data: {
							def_index: '15059',
						},
					},
					{
						value: '    Current Event Scattergun',
						color: 'd32ce6',
						app_data: {
							def_index: '15053',
						},
					},
					{
						value: '    Pink Elephant Stickybomb Launcher',
						color: 'd32ce6',
						app_data: {
							def_index: '15048',
						},
					},
					{
						value: '✔ Shell Shocker Rocket Launcher',
						color: 'd32ce6',
						app_data: {
							def_index: '15052',
						},
					},
					{
						value: '    Flash Fryer Flame Thrower',
						color: '8847ff',
						app_data: {
							def_index: '15049',
						},
					},
					{
						value: '    Spark of Life Medi Gun',
						color: '8847ff',
						app_data: {
							def_index: '15050',
						},
					},
					{
						value: '    Dead Reckoner Revolver',
						color: '8847ff',
						app_data: {
							def_index: '15051',
						},
					},
					{
						value: '    Black Dahlia Pistol',
						color: '8847ff',
						app_data: {
							def_index: '15046',
						},
					},
					{
						value: '    Sandstone Special Pistol',
						color: '8847ff',
						app_data: {
							def_index: '15056',
						},
					},
					{
						value: '    Brick House Minigun',
						color: '4b69ff',
						app_data: {
							def_index: '15055',
						},
					},
					{
						value: '    Aqua Marine Rocket Launcher',
						color: '4b69ff',
						app_data: {
							def_index: '15057',
						},
					},
					{
						value: '    Low Profile SMG',
						color: '4b69ff',
						app_data: {
							def_index: '15058',
						},
					},
					{
						value: '    Turbine Torcher Flame Thrower',
						color: '4b69ff',
						app_data: {
							def_index: '15054',
						},
					},
					{
						value: '    Lightning Rod Shotgun',
						color: '4b69ff',
						app_data: {
							def_index: '15047',
						},
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15052&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D7998211058114246468',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D7998211058114246468',
					},
				],
				tags: [
					{
						internal_name: 'strange',
						name: 'Strange',
						category: 'Quality',
						color: 'CF6A32',
						category_name: 'Quality',
					},
					{
						internal_name: 'primary',
						name: 'Primary weapon',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Soldier',
						name: 'Soldier',
						category: 'Class',
						category_name: 'Class',
					},
					{
						internal_name: 'Rarity_Legendary',
						name: 'Assassin',
						category: 'Rarity',
						color: 'd32ce6',
						category_name: 'Grade',
					},
					{
						internal_name: 'Powerhouse_collection',
						name: 'Powerhouse Collection',
						category: 'Collection',
						category_name: 'Collection',
					},
					{
						internal_name: 'TFUI_InvTooltip_BattleScared',
						name: 'Battle Scarred',
						category: 'Exterior',
						category_name: 'Exterior',
					},
				],
				app_data: {
					def_index: '15052',
					quality: '11',
				},
			},
			false,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Rocket Launcher',
			fullName:
				'Strange Specialized Killstreak Shell Shocker Rocket Launcher (Battle Scarred)',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYghuZgHPUPUOCacF4w3tG3J86sI7V47mp-JTLQu-vNTGYbh_MNgYHMeFXPHVY139uEk9g_VbK52LqTSvg3pcnpTOhA/',
			tradable: true,
			craftable: true,
			quality: 'Strange',
			texture: 'Shell Shocker',
			wear: 'Battle Scarred',
			killstreak: 'Specialized Killstreak',
			classes: ['Soldier'],
			type: 'primary',
			collection: 'Powerhouse Collection',
			grade: 'Assassin',
			parts: ['Pyros Killed'],
			spells: ['Pumpkin Bombs'],
			marketable: true,
			commodity: false,
			sheen: 'Mean Green',
			level: -1,
		});
	});

	it('Case #13', () => {
		const econItem = parseEconItem({
			appid: '440',
			classid: '1348131292',
			instanceid: '93028938',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwADWBXjvD1Pid3oDvqJGt8Yltsm2pxUyzFu31V9NbPtYTUwdwWbBfkOXfZioFDuWSFku8JnUdLg8ulQLw29tYfCMOQycIYbhNRIXDY',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwADWBXjvD1Pid3oDvqJGt8Yltsm2pxUyzFu31V9NbPtYTUwdwWbBfkOXfZioFDuWSFku8JnUdLg8ulQLw29tYfCMOQycIYbhNRIXDY',
			icon_drag_url: '',
			name: 'Strange Professional Killstreak Festive Grenade Launcher',
			market_hash_name:
				'Strange Professional Killstreak Festive Grenade Launcher',
			market_name:
				'Strange Professional Killstreak Festive Grenade Launcher',
			name_color: 'CF6A32',
			background_color: '3C352E',
			type: 'Limited Strange Grenade Launcher - Kills: 20',
			tradable: 1,
			marketable: 1,
			commodity: 0,
			market_tradable_restriction: '7',
			market_marketable_restriction: '0',
			descriptions: [
				{ value: '(Airborne Enemy Kills: 4)', color: '756b5e' },
				{
					value: 'Halloween: Exorcism (spell only active during event)',
					color: '7ea9d1',
				},
				{ value: 'Killstreaker: Hypno-Beam', color: '7ea9d1' },
				{ value: 'Sheen: Manndarin', color: '7ea9d1' },
				{ value: 'Killstreaks Active', color: '7ea9d1' },
			],
			actions: [
				{
					name: 'Item Wiki Page...',
					link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=1007&lang=en_US',
				},
			],
			tags: [
				{
					internal_name: 'strange',
					name: 'Strange',
					category: 'Quality',
					color: 'CF6A32',
					category_name: 'Quality',
				},
				{
					internal_name: 'primary',
					name: 'Primary weapon',
					category: 'Type',
					category_name: 'Type',
				},
				{
					internal_name: 'Demoman',
					name: 'Demoman',
					category: 'Class',
					category_name: 'Class',
				},
			],
			app_data: { def_index: '1007', quality: '11' },
		});

		assert.deepEqual(econItem, {
			classes: ['Demoman'],
			commodity: false,
			craftable: true,
			fullName:
				'Strange Professional Killstreak Festive Grenade Launcher',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwADWBXjvD1Pid3oDvqJGt8Yltsm2pxUyzFu31V9NbPtYTUwdwWbBfkOXfZioFDuWSFku8JnUdLg8ulQLw29tYfCMOQycIYbhNRIXDY/',
			killstreak: 'Professional Killstreak',
			killstreaker: 'Hypno-Beam',
			marketable: true,
			name: 'Festive Grenade Launcher',
			parts: ['Airborne Enemy Kills'],
			quality: 'Strange',
			sheen: 'Manndarin',
			spells: ['Exorcism'],
			tradable: true,
			type: 'primary',
			level: -1,
		});
	});

	it('Case #14', () => {
		const econItem = parseEconItem({
			appid: '440',
			classid: '1342604629',
			instanceid: '98275077',
			icon_url:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgENYwUuWCT1qj1Ni8DZCv2ADN8Mmsgy4N4Hi2JtxQMtbOftYG9hJgabUaYMCvFroV_uDXBkv8EwVY_koOxWeQq-qsKYZPpiOaow',
			icon_url_large:
				'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgENYwUuWCT1qj1Ni8DZCv2ADN8Mmsgy4N4Hi2JtxQMtbOftYG9hJgabUaYMCvFroV_uDXBkv8EwVY_koOxWeQq-qsKYZPpiOaow',
			icon_drag_url: '',
			name: 'Strange Specialized Killstreak Gold Botkiller Wrench Mk.II',
			market_hash_name:
				'Strange Specialized Killstreak Gold Botkiller Wrench Mk.II',
			market_name:
				'Strange Specialized Killstreak Gold Botkiller Wrench Mk.II',
			name_color: 'CF6A32',
			background_color: '3C352E',
			type: 'Strange Wrench - Sentry Kills: 12',
			tradable: 1,
			marketable: 1,
			commodity: 0,
			market_tradable_restriction: '7',
			market_marketable_restriction: '0',
			descriptions: [
				{ value: '(Kills: 1)', color: '756b5e' },
				{ value: '(Cloaked Spies Killed: 0)', color: '756b5e' },
				{ value: 'Sheen: Deadly Daffodil', color: '7ea9d1' },
				{ value: 'Killstreaks Active', color: '7ea9d1' },
				{
					value: 'Upgrades, repairs and speeds up construction of friendly buildings on hit',
				},
			],
			actions: [
				{
					name: 'Item Wiki Page...',
					link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=969&lang=en_US',
				},
			],
			tags: [
				{
					internal_name: 'strange',
					name: 'Strange',
					category: 'Quality',
					color: 'CF6A32',
					category_name: 'Quality',
				},
				{
					internal_name: 'melee',
					name: 'Melee weapon',
					category: 'Type',
					category_name: 'Type',
				},
				{
					internal_name: 'Engineer',
					name: 'Engineer',
					category: 'Class',
					category_name: 'Class',
				},
			],
			app_data: { def_index: '969', quality: '11' },
		});

		assert.deepEqual(econItem, {
			parts: ['Cloaked Spies Killed'],
			quality: 'Strange',
			sheen: 'Deadly Daffodil',
			spells: [],
			tradable: true,
			type: 'melee',
			classes: ['Engineer'],
			commodity: false,
			craftable: true,
			fullName:
				'Strange Specialized Killstreak Gold Botkiller Wrench Mk.II',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgENYwUuWCT1qj1Ni8DZCv2ADN8Mmsgy4N4Hi2JtxQMtbOftYG9hJgabUaYMCvFroV_uDXBkv8EwVY_koOxWeQq-qsKYZPpiOaow/',
			killstreak: 'Specialized Killstreak',
			marketable: true,
			name: 'Gold Botkiller Wrench Mk.II',
			level: -1,
		});
	});

	it('Case #15', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '11042149',
				instanceid: '19201223',
				icon_url:
					'IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTdcfMQEpRnqWSMU5OD2NoHwHEIkChXOjLx2Sk5MbUqMcbBnQz4ruyeU3n5awjJLjLaE0pXEvYaYzGdkW_0p7rBXG6aQb0rFl9XK_QM8jdIb82PaURv3dUMrT27kxUqSU5_IZIXcl_smSJdIbMiwRlwHyU',
				icon_url_large:
					'IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTdcfMQEpRnqWSMU5OD2NoHwHEIkChXOjLx2Sk5MbUqMcbBnQz4ruyeU3n5awjJLjLaE0pXEvYaYzGdkW_0p7rBXG6aQb0rFl9XK_QM8jdIb82PaURv3dUMrT27kxUqSU5_IZIXcl_smSJdIbMiwRlwHyU',
				icon_drag_url: '',
				name: 'The Essential Accessories',
				market_hash_name: 'The Essential Accessories',
				market_name: 'The Essential Accessories',
				name_color: '7D6D00',
				background_color: '3C352E',
				type: 'Limited Level 10 Apparel',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: "Paint Color: Operator's Overalls",
						color: '756b5e',
					},
					{ value: '' },
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=347&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D2891326522173157497',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D2891326522173157497',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
					},
					{
						internal_name: 'misc',
						name: 'Cosmetic',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Scout',
						name: 'Scout',
						category: 'Class',
						category_name: 'Class',
					},
				],
				app_data: { def_index: '347', quality: '6' },
			},
			false,
			false
		);

		assert.deepEqual(econItem, {
			classes: ['Scout'],
			commodity: false,
			craftable: true,
			fullName: 'The Essential Accessories',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTdcfMQEpRnqWSMU5OD2NoHwHEIkChXOjLx2Sk5MbUqMcbBnQz4ruyeU3n5awjJLjLaE0pXEvYaYzGdkW_0p7rBXG6aQb0rFl9XK_QM8jdIb82PaURv3dUMrT27kxUqSU5_IZIXcl_smSJdIbMiwRlwHyU/',
			marketable: true,
			name: 'The Essential Accessories',
			paint: "Operator's Overalls",
			parts: [],
			quality: 'Unique',
			spells: [],
			tradable: true,
			type: 'misc',
			level: -1,
		});
	});

	it('Case #16', () => {
		const econItem = parseEconItem(
			{
				appid: 440,
				contextid: '2',
				assetid: '11369034375',
				classid: '107357853',
				instanceid: '55426782',
				amount: 1,
				missing: false,
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEOYgAYUx7nqgdBidroHuaDGu0FieUmtcFq1Td5lgQ1ZrPtZW5jJ1CaUKMOC_Zr9Vi4XnE36cQxDIXl9e9WeArptNSSMrUvNcYMQZftGxgDiQ',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEOYgAYUx7nqgdBidroHuaDGu0FieUmtcFq1Td5lgQ1ZrPtZW5jJ1CaUKMOC_Zr9Vi4XnE36cQxDIXl9e9WeArptNSSMrUvNcYMQZftGxgDiQ',
				icon_drag_url: '',
				name: 'The Barnstormer #96',
				market_hash_name: 'The Barnstormer',
				market_name: 'The Barnstormer',
				name_color: '7D6D00',
				background_color: '3C352E',
				type: 'Level 26 Hat',
				tradable: true,
				marketable: false,
				commodity: false,
				market_tradable_restriction: 7,
				market_marketable_restriction: 0,
				fraudwarnings: [],
				descriptions: [
					{
						type: 'text',
						value: 'Style: Bugscreen Up',
						color: '756b5e',
						app_data: '',
					},
					{
						type: 'text',
						value: "Step into the headgear and facial hair of America's favorite aviator/filmmaker/toenail-and-Jarate collector with this hotshot aviator hat and rakish movie star moustache.",
						app_data: '',
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=988&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20Snullwner_steamid%A%assetid%D912555605796804870',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D912555605796804870',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
						localized_tag_name: 'Unique',
						localized_category_name: 'Quality',
					},
					{
						internal_name: 'misc',
						name: 'Cosmetic',
						category: 'Type',
						category_name: 'Type',
						localized_tag_name: 'Cosmetic',
						color: '',
						localized_category_name: 'Type',
					},
					{
						internal_name: 'Engineer',
						name: 'Engineer',
						category: 'Class',
						category_name: 'Class',
						localized_tag_name: 'Engineer',
						color: '',
						localized_category_name: 'Class',
					},
				],
				app_data: {
					def_index: '988',
					quality: '6',
					slot: 'Cosmetic',
					filter_data: {
						931505789: {
							element_ids: {
								0: '991457757',
								1: '8',
							},
						},
						1662615936: {
							element_ids: {
								0: '991457757',
								1: '9',
							},
						},
					},
					player_class_ids: {
						0: '9',
					},
					highlight_color: '7a6e65',
				},
				id: '11369034375',
				owner_descriptions: [],
				owner_actions: [],
			},
			false,
			false
		);

		assert.deepEqual(econItem, {
			classes: ['Engineer'],
			commodity: false,
			craftable: true,
			fullName: 'Barnstormer #96',
			itemNumber: {
				value: 96,
				type: 'craft',
			},
			id: '11369034375',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEOYgAYUx7nqgdBidroHuaDGu0FieUmtcFq1Td5lgQ1ZrPtZW5jJ1CaUKMOC_Zr9Vi4XnE36cQxDIXl9e9WeArptNSSMrUvNcYMQZftGxgDiQ/',
			name: 'Barnstormer',
			parts: [],
			quality: 'Unique',
			spells: [],
			tradable: true,
			type: 'misc',
			level: 26,
			marketable: false,
			isUniqueHat: true,
		});
	});

	it('Case #17', () => {
		const econItem = parseEconItem(
			{
				appid: 440,
				contextid: '2',
				assetid: '11369034375',
				classid: '107357853',
				instanceid: '55426782',
				amount: 1,
				missing: false,
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEOYgAYUx7nqgdBidroHuaDGu0FieUmtcFq1Td5lgQ1ZrPtZW5jJ1CaUKMOC_Zr9Vi4XnE36cQxDIXl9e9WeArptNSSMrUvNcYMQZftGxgDiQ',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEOYgAYUx7nqgdBidroHuaDGu0FieUmtcFq1Td5lgQ1ZrPtZW5jJ1CaUKMOC_Zr9Vi4XnE36cQxDIXl9e9WeArptNSSMrUvNcYMQZftGxgDiQ',
				icon_drag_url: '',
				name: "''The Barnstormer #96''",
				market_hash_name: 'The Barnstormer',
				market_name: 'The Barnstormer',
				name_color: '7D6D00',
				background_color: '3C352E',
				type: 'Level 26 Hat',
				tradable: true,
				marketable: false,
				commodity: false,
				market_tradable_restriction: 7,
				market_marketable_restriction: 0,
				fraudwarnings: [
					'This item has been renamed.\nOriginal name: "The Barnstormer #103"',
				],
				descriptions: [
					{
						type: 'text',
						value: 'Style: Bugscreen Up',
						color: '756b5e',
						app_data: '',
					},
					{
						type: 'text',
						value: "Step into the headgear and facial hair of America's favorite aviator/filmmaker/toenail-and-Jarate collector with this hotshot aviator hat and rakish movie star moustache.",
						app_data: '',
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=988&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20Snullwner_steamid%A%assetid%D912555605796804870',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D912555605796804870',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
						localized_tag_name: 'Unique',
						localized_category_name: 'Quality',
					},
					{
						internal_name: 'misc',
						name: 'Cosmetic',
						category: 'Type',
						category_name: 'Type',
						localized_tag_name: 'Cosmetic',
						color: '',
						localized_category_name: 'Type',
					},
					{
						internal_name: 'Engineer',
						name: 'Engineer',
						category: 'Class',
						category_name: 'Class',
						localized_tag_name: 'Engineer',
						color: '',
						localized_category_name: 'Class',
					},
				],
				app_data: {
					def_index: '988',
					quality: '6',
					slot: 'Cosmetic',
					filter_data: {
						931505789: {
							element_ids: {
								0: '991457757',
								1: '8',
							},
						},
						1662615936: {
							element_ids: {
								0: '991457757',
								1: '9',
							},
						},
					},
					player_class_ids: {
						0: '9',
					},
					highlight_color: '7a6e65',
				},
				id: '11369034375',
				owner_descriptions: [],
				owner_actions: [],
			},
			false,
			false,
			{
				itemNumberFromFraudWarning: true,
			}
		);

		assert.deepEqual(econItem, {
			classes: ['Engineer'],
			commodity: false,
			craftable: true,
			fullName: 'Barnstormer #103',
			id: '11369034375',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEOYgAYUx7nqgdBidroHuaDGu0FieUmtcFq1Td5lgQ1ZrPtZW5jJ1CaUKMOC_Zr9Vi4XnE36cQxDIXl9e9WeArptNSSMrUvNcYMQZftGxgDiQ/',
			name: 'Barnstormer',
			parts: [],
			quality: 'Unique',
			spells: [],
			tradable: true,
			type: 'misc',
			level: 26,
			marketable: false,
			isUniqueHat: true,
			itemNumber: {
				value: 103,
				type: 'craft',
			},
		});
	});

	it('Case #18', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '1848848533',
				instanceid: '4005345694',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIfgYFWCTxrCpChs_jMuWJCfAPlckK6ZFH3jMlx1kpYbHgNTYyKgGUVPdbCfM_rAm0WiRguJYxBtGzruxReQ3ntoLBZa5sbo_yPNmUMw',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIfgYFWCTxrCpChs_jMuWJCfAPlckK6ZFH3jMlx1kpYbHgNTYyKgGUVPdbCfM_rAm0WiRguJYxBtGzruxReQ3ntoLBZa5sbo_yPNmUMw',
				icon_drag_url: '',
				name: 'Mann Co. Supply Munition Series #103',
				market_hash_name: 'Mann Co. Supply Munition #103',
				market_name: 'Mann Co. Supply Munition #103',
				name_color: '7D6D00',
				background_color: '3C352E',
				type: 'Level 20 Supply Crate',
				tradable: 1,
				marketable: 1,
				commodity: 1,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{ value: 'Crate Series #103', color: '7ea9d1' },
					{
						value: 'You need a Mann Co. Supply Crate Key to open this.\nYou can pick one up at the Mann Co. Store.',
					},
					{ value: '\nGift from: MothmanOfficial', color: '7ea9d1' },
					{
						value: 'Date Received: Sunday, September 20, 2020 (13:59:02) GMT',
					},
					{ value: ' ' },
					{
						value: 'This crate contains one of the following items.\nWeapons will be Strange quality.',
					},
					{
						value: '    The Iron Bomber',
						color: '6F6A63',
						app_data: { def_index: '1151' },
					},
					{
						value: '    The Panic Attack',
						color: '6F6A63',
						app_data: { def_index: '1153' },
					},
					{
						value: '    The Back Scatter',
						color: '6F6A63',
						app_data: { def_index: '1103' },
					},
					{
						value: '    The Quickiebomb Launcher',
						color: '6F6A63',
						app_data: { def_index: '1150' },
					},
					{
						value: '    The Ambassador',
						color: '6F6A63',
						app_data: { def_index: '61' },
					},
					{
						value: '    The Reserve Shooter',
						color: '6F6A63',
						app_data: { def_index: '415' },
					},
					{
						value: '    The Degreaser',
						color: '6F6A63',
						app_data: { def_index: '215' },
					},
					{
						value: '    The Powerjack',
						color: '6F6A63',
						app_data: { def_index: '214' },
					},
					{
						value: '    Natascha',
						color: '6F6A63',
						app_data: { def_index: '41' },
					},
					{
						value: '    The Sandvich',
						color: '6F6A63',
						app_data: { def_index: '42' },
					},
					{
						value: '    Strange Part: Damage Dealt',
						color: '6F6A63',
						app_data: { def_index: '6056' },
					},
					{
						value: '    Strange Part: Allied Healing Done',
						color: '6F6A63',
						app_data: { def_index: '6058' },
					},
					{
						value: '    Strange Part: Critical Kills',
						color: '6F6A63',
						app_data: { def_index: '6021' },
					},
					{
						value: '    Strange Part: Pyros Killed',
						color: '6F6A63',
						app_data: { def_index: '6006' },
					},
					{
						value: '    Strange Part: Heavies Killed',
						color: '6F6A63',
						app_data: { def_index: '6000' },
					},
					{
						value: 'or an Exceedingly Rare Special Item!',
						color: '7ea9d1',
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=5859&lang=en_US',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
					},
					{
						internal_name: 'Supply Crate',
						name: 'Crate',
						category: 'Type',
						category_name: 'Type',
					},
				],
				app_data: { def_index: '5859', quality: '6' },
			},
			false,
			false
		);

		assert.deepEqual(econItem, {
			classes: [],
			commodity: true,
			craftable: true,
			fullName: 'Mann Co. Supply Munition #103',
			itemNumber: {
				value: 103,
				type: 'crate',
			},
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIfgYFWCTxrCpChs_jMuWJCfAPlckK6ZFH3jMlx1kpYbHgNTYyKgGUVPdbCfM_rAm0WiRguJYxBtGzruxReQ3ntoLBZa5sbo_yPNmUMw/',
			name: 'Mann Co. Supply Munition',
			parts: [],
			quality: 'Unique',
			spells: [],
			tradable: true,
			type: 'Supply Crate',
			level: 20,
			marketable: true,
		});
	});

	it('Case #20', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '11123436',
				instanceid: '11040559',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEGaQMQUSTuuSpEjYa_X6fbCbJVn9tht8BU2zNoxwQrZ-bmaGIwdgLHWKFbC_Y4pl3uDSQzptdtU17jE20T',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEGaQMQUSTuuSpEjYa_X6fbCbJVn9tht8BU2zNoxwQrZ-bmaGIwdgLHWKFbC_Y4pl3uDSQzptdtU17jE20T',
				icon_drag_url: '',
				name: "Gentle Manne's Service Medal",
				market_hash_name: "Gentle Manne's Service Medal",
				market_name: "Gentle Manne's Service Medal",
				name_color: '7D6D00',
				background_color: '3C352E',
				type: 'Limited Level 100 Medal',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: 'Medal no. 10615',
					},
					{
						value: 'Given to those few brave soldiers whom stood guard valiantly without sleep, nourishment, or a social life.',
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=121&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D146016106330552325',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D146016106330552325',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
					},
					{
						internal_name: 'misc',
						name: 'Cosmetic',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Soldier',
						name: 'Soldier',
						category: 'Class',
						category_name: 'Class',
					},
				],
				app_data: {
					def_index: '121',
					quality: '6',
				},
			},
			false,
			false
		);

		assert.deepEqual(econItem, {
			classes: ['Soldier'],
			commodity: false,
			craftable: true,
			fullName: "Gentle Manne's Service Medal #10615",
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEGaQMQUSTuuSpEjYa_X6fbCbJVn9tht8BU2zNoxwQrZ-bmaGIwdgLHWKFbC_Y4pl3uDSQzptdtU17jE20T/',
			name: "Gentle Manne's Service Medal",
			parts: [],
			quality: 'Unique',
			spells: [],
			tradable: true,
			type: 'misc',
			level: -1,
			marketable: true,
			itemNumber: {
				type: 'medal',
				value: 10615,
			},
		});
	});

	it('Case #19', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '4657007866',
				instanceid: '0',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYQ4CThbjqwcR2Jq3MvGNG-U_l9sn4pUbjjc5xAUjMOfnaGNiKwKVA_IIBPRr8lm1XHEzvMY2DIG3rr9eewnns5yGbeenE9nBew',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYQ4CThbjqwcR2Jq3MvGNG-U_l9sn4pUbjjc5xAUjMOfnaGNiKwKVA_IIBPRr8lm1XHEzvMY2DIG3rr9eewnns5yGbeenE9nBew',
				icon_drag_url: '',
				name: 'Winter 2021 Cosmetic Case',
				market_hash_name: 'Winter 2021 Cosmetic Case',
				market_name: 'Winter 2021 Cosmetic Case',
				name_color: '7D6D00',
				background_color: '3C352E',
				type: '',
				tradable: 1,
				marketable: 1,
				commodity: 1,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: 'This case is locked and requires a\nWinter 2021 Cosmetic Key to open.\n\nContains a community made item\nfrom the Winter 2021 Cosmetic Collection.',
					},
					{ value: ' ' },
					{
						value: 'Contents may be Strange or an Unusual Winter 2021 Hat',
						color: '7ea9d1',
					},
					{ value: ' ' },
					{ value: ' ' },
					{ value: 'Winter 2021 Cosmetics Collection' },
					{
						value: '    Oh Deer!',
						color: 'eb4b4b',
						app_data: { def_index: '31245' },
					},
					{
						value: '    Jolly Jester',
						color: 'd32ce6',
						app_data: { def_index: '31243' },
					},
					{
						value: '    Merry Cone',
						color: 'd32ce6',
						app_data: { def_index: '31247' },
					},
					{
						value: '    Hat Chocolate',
						color: 'd32ce6',
						app_data: { def_index: '31259' },
					},
					{
						value: '    Elf-Made Bandanna',
						color: '8847ff',
						app_data: { def_index: '31260' },
					},
					{
						value: '    Seasonal Spring',
						color: '8847ff',
						app_data: { def_index: '31244' },
					},
					{
						value: '    Elf Ignition',
						color: '8847ff',
						app_data: { def_index: '31253' },
					},
					{
						value: '    Train Of Thought',
						color: '8847ff',
						app_data: { def_index: '31254' },
					},
					{
						value: '    Seasonal Employee',
						color: '8847ff',
						app_data: { def_index: '31258' },
					},
					{
						value: '    Reindoonihorns',
						color: '8847ff',
						app_data: { def_index: '31249' },
					},
					{
						value: '    Festive Cover-Up',
						color: '4b69ff',
						app_data: { def_index: '31257' },
					},
					{
						value: '    El Fiestibrero',
						color: '4b69ff',
						app_data: { def_index: '31241' },
					},
					{
						value: '    Ominous Offering',
						color: '4b69ff',
						app_data: { def_index: '31251' },
					},
					{
						value: '    Brain Cane',
						color: '4b69ff',
						app_data: { def_index: '31248' },
					},
					{
						value: '    Cozy Catchers',
						color: '4b69ff',
						app_data: { def_index: '31250' },
					},
					{
						value: '    The Giftcrafter',
						color: '4b69ff',
						app_data: { def_index: '31246' },
					},
					{
						value: '    Festive Frames',
						color: '4b69ff',
						app_data: { def_index: '31252' },
					},
					{
						value: '    Mooshanka',
						color: '4b69ff',
						app_data: { def_index: '31255' },
					},
					{
						value: '    Elf Defense',
						color: '4b69ff',
						app_data: { def_index: '31256' },
					},
					{
						value: '    Gnome Dome',
						color: '4b69ff',
						app_data: { def_index: '31242' },
					},
					{ value: ' ' },
					{ value: 'Case Exclusive Bonus Item(s):' },
					{
						value: 'Festivizer',
						color: '6F6A63',
						app_data: { def_index: '5839' },
					},
					{ value: ' ' },
					{ value: 'Case Global Unusual Effect(s)' },
					{
						value: '★ Unusual Effect: Green Confetti',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Purple Confetti',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Haunted Ghosts',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Green Energy',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Purple Energy',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Circling TF Logo',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Massed Flies',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Burning Flames',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Scorching Flames',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Searing Plasma',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Vivid Plasma',
						color: 'ffd700',
					},
					{ value: '★ Unusual Effect: Sunbeams', color: 'ffd700' },
					{
						value: '★ Unusual Effect: Circling Peace Sign',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Circling Heart',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Stormy Storm',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Blizzardy Storm',
						color: 'ffd700',
					},
					{
						value: "★ Unusual Effect: Nuts n' Bolts",
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Orbiting Planets',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Orbiting Fire',
						color: 'ffd700',
					},
					{ value: '★ Unusual Effect: Bubbling', color: 'ffd700' },
					{ value: '★ Unusual Effect: Smoking', color: 'ffd700' },
					{ value: '★ Unusual Effect: Steaming', color: 'ffd700' },
					{ value: '★ Unusual Effect: Kill-a-Watt', color: 'ffd700' },
					{ value: '★ Unusual Effect: Terror-Watt', color: 'ffd700' },
					{ value: '★ Unusual Effect: Cloud 9', color: 'ffd700' },
					{ value: '★ Unusual Effect: Aces High', color: 'ffd700' },
					{
						value: '★ Unusual Effect: Dead Presidents',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Miami Nights',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Disco Beat Down',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Smissmas Tree',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Smissmas Tree',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Smissmas Tree',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Hospitable Festivity',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Condescending Embrace',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Condescending Embrace',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Sparkling Spruce',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Glittering Juniper',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Prismatic Pine',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Spiraling Lights',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Spiraling Lights',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Twisting Lights',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Stardust Pathway',
						color: 'ffd700',
					},
					{ value: '★ Unusual Effect: Flurry Rush', color: 'ffd700' },
					{
						value: '★ Unusual Effect: Spark of Smissmas',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Polar Forecast',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Polar Forecast',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Polar Forecast',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Shining Stag',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Holiday Horns',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Ardent Antlers',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Festive Lights',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Festive Lights',
						color: 'ffd700',
					},
					{
						value: '★ Unusual Effect: Festive Lights',
						color: 'ffd700',
					},
					{ value: ' ' },
					{ value: 'Case Global Bonus Item(s)' },
					{
						value: 'Paint Cans!\nTaunt Unusualifiers!\nMvM Tickets!\nAnd TF2 Tools!',
					},
					{
						value: 'Inspect for full list of unusual effects and more details',
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=5935&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D2496517253638132563',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D2496517253638132563',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
					},
					{
						internal_name: 'Supply Crate',
						name: 'Crate',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Winter2021Cosmetics_collection',
						name: 'Winter 2021 Cosmetics Collection',
						category: 'Collection',
						category_name: 'Collection',
					},
				],
				app_data: { def_index: '5935', quality: '6' },
			},
			false,
			false
		);

		assert.deepEqual(econItem, {
			classes: [],
			commodity: true,
			craftable: true,
			fullName: 'Winter 2021 Cosmetic Case',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYQ4CThbjqwcR2Jq3MvGNG-U_l9sn4pUbjjc5xAUjMOfnaGNiKwKVA_IIBPRr8lm1XHEzvMY2DIG3rr9eewnns5yGbeenE9nBew/',
			name: 'Winter 2021 Cosmetic Case',
			parts: [],
			quality: 'Unique',
			spells: [],
			tradable: true,
			type: 'Supply Crate',
			level: -1,
			marketable: true,
			collection: 'Winter 2021 Cosmetics Collection',
		});
	});
});

describe('Econ Item in Numbers', () => {
	it('Case #1', () => {
		const econItem = parseEconItem(
			{
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
						value: 'Afterburn reduces Medi Gun healing and resist shield effects.\nAlt-Fire: Release a blast of air that pushes enemies and projectiles and extinguishes teammates that are on fire.',
					},
					{ value: ' ' },
					{ value: ' ' },
					{ value: 'Concealed Killer Collection' },
					{
						value: '    Sand Cannon Rocket Launcher',
						color: 'eb4b4b',
					},
					{ value: '    Red Rock Roscoe Pistol', color: 'eb4b4b' },
					{
						value: '    Psychedelic Slugger Revolver',
						color: 'd32ce6',
					},
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
					{
						value: '    Backwoods Boomstick Shotgun',
						color: '4b69ff',
					},
					{
						value: '    King of the Jungle Minigun',
						color: '4b69ff',
					},
					{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
					{ value: '★ Forest Fire Flame Thrower', color: '4b69ff' },
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15005&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D6922402693932635553',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D6922402693932635553',
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
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Flame Thrower',
			fullName:
				'Cool Festivized Specialized Killstreak Forest Fire Flame Thrower (Minimal Wear)',
			id: '8407830034',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffsDz5zdwmTVPAOCcot8Qn-Wxg07dR3XcGzub5ffwvmttSXYrAlY9xFTMaCUvbXNQz_6EkwiPRYKJaIon-9jHjrOWoUG0280KDki-w/',
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
			commodity: false,
			sheen: 'Agonizing Emerald',
			level: -1,
		});
	});

	it('Case #2', () => {
		const econItem = parseEconItem(
			{
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
					{
						value: "★ Unusual Effect: Nuts n' Bolts",
						color: 'ffd700',
					},
					{ value: "''hmm epic''" },
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=434&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D16442165943709427870',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D16442165943709427870',
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
			},
			true,
			false
		);

		assert.deepEqual(
			econItem,
			{
				name: 'Brain Bucket',
				fullName: "Nuts n' Bolts Brain Bucket",
				id: '8555715171',
				img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEJeQQaWA_dtDlRj82oVPeJUbRTyohkssUGjDBox1IsNrKxaWc1JFWQWPYHDKFsow2_WyVlv4lzWtBtJvRLsg/',
				tradable: true,
				craftable: true,
				quality: 5,
				effect: 31,
				classes: ['Soldier'],
				type: 'misc',
				parts: [],
				spells: [],
				marketable: true,
				commodity: false,
				level: 82,
			},
			false,
			false
		);
	});

	it('Case #3', () => {
		const econItem = parseEconItem(
			{
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
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=31066&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D5006617706189886078',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D5006617706189886078',
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
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Skullbrero',
			fullName: 'Twisted Radiance Skullbrero',
			id: '8574678947',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDewlDDUq7hytIncTqD-CJGu8_l9sn4pUbi2Ftw1ApbbXtNmM_cVTEV_lbWaw7pQu0W3Rr6sVlAdPvoOhScFnt4pyGbefmPm6lTg/',
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
			commodity: false,
			level: 57,
		});
	});

	it('Case #4', () => {
		const econItem = parseEconItem(
			{
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
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=318&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D10290164463146604828',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D10290164463146604828',
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
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: "Prancer's Pride",
			fullName: "Smoking Prancer's Pride",
			id: '8610658018',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEbfgYfXh7wqwdTmsHiCM2ACfIHnpRh5MkG3G8zyVMpYebiYm8wdFGTBPILC_BvrQu9X3RqupQ6AYPhp-wHZ0yx43BgcxIX/',
			tradable: true,
			craftable: true,
			quality: 5,
			effect: 35,
			classes: ['Pyro'],
			type: 'misc',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false,
			level: 88,
		});
	});

	it('Case #5', () => {
		const econItem = parseEconItem(
			{
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
						value: 'Halloween: Pumpkin Bombs (spell only active during event)',
						color: '7ea9d1',
					},
					{ value: 'Sheen: Agonizing Emerald', color: '7ea9d1' },
					{ value: 'Killstreaks Active', color: '7ea9d1' },
					{
						value: '\nGift from: VLaDOS | S>C.MOON YELLOW BELT',
						color: '7ea9d1',
					},
					{
						value: 'Date Received: Tuesday, September 10, 2019 (9:36:39) GMT',
					},
					{ value: ' ' },
					{ value: ' ' },
					{ value: 'Concealed Killer Collection' },
					{
						value: '    Sand Cannon Rocket Launcher',
						color: 'eb4b4b',
					},
					{ value: '    Red Rock Roscoe Pistol', color: 'eb4b4b' },
					{
						value: '    Psychedelic Slugger Revolver',
						color: 'd32ce6',
					},
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
					{
						value: '    Backwoods Boomstick Shotgun',
						color: '4b69ff',
					},
					{
						value: '    King of the Jungle Minigun',
						color: '4b69ff',
					},
					{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
					{ value: '    Forest Fire Flame Thrower', color: '4b69ff' },
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15006&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D11534198800805877074',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D11534198800805877074',
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
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Rocket Launcher',
			fullName:
				'Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)',
			id: '8656785508',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffjDz5zdwmTVPAOCsot8Qn-Whg07dR3XcGzuehWe1q65oHFOuQpN4kZGpOECffQZl39vho_1KdefJbbonvq3SvubmwUG028UzYUYzA/',
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
			commodity: false,
			sheen: 'Agonizing Emerald',
			level: -1,
		});
	});

	it('Case #6', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '2625497429',
				instanceid: '4048537137',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYghuZgHPUPUOCacF4w3tG3J86sI7V47mp-JTLQu-vNTGYbh_MNgYHMeFXPHVY139uEk9g_VbK52LqTSvg3pcnpTOhA',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYghuZgHPUPUOCacF4w3tG3J86sI7V47mp-JTLQu-vNTGYbh_MNgYHMeFXPHVY139uEk9g_VbK52LqTSvg3pcnpTOhA',
				icon_drag_url: '',
				name: 'Shell Shocker Rocket Launcher',
				market_hash_name:
					'Strange Specialized Killstreak Shell Shocker Rocket Launcher (Battle Scarred)',
				market_name:
					'Strange Specialized Killstreak Shell Shocker Rocket Launcher (Battle Scarred)',
				name_color: 'CF6A32',
				background_color: '3C352E',
				type: '',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: 'Assassin Grade Rocket Launcher (Battle Scarred)',
						color: 'd32ce6',
					},
					{
						value: 'Strange Stat Clock Attached',
						color: 'CF6A32',
					},
					{
						value: '     Kills: 5121',
						color: '756b5e',
					},
					{
						value: '     Pyros Killed: 712',
						color: '756b5e',
					},
					{
						value: 'Team Colored Decorated Weapon',
					},
					{
						value: 'Halloween: Pumpkin Bombs (spell only active during event)',
						color: '7ea9d1',
					},
					{
						value: 'Sheen: Mean Green',
						color: '7ea9d1',
					},
					{
						value: 'Killstreaks Active',
						color: '7ea9d1',
					},
					{
						value: ' ',
					},
					{
						value: ' ',
					},
					{
						value: 'Powerhouse Collection',
					},
					{
						value: '    Liquid Asset Stickybomb Launcher',
						color: 'eb4b4b',
						app_data: {
							def_index: '15045',
						},
					},
					{
						value: '    Thunderbolt Sniper Rifle',
						color: 'eb4b4b',
						app_data: {
							def_index: '15059',
						},
					},
					{
						value: '    Current Event Scattergun',
						color: 'd32ce6',
						app_data: {
							def_index: '15053',
						},
					},
					{
						value: '    Pink Elephant Stickybomb Launcher',
						color: 'd32ce6',
						app_data: {
							def_index: '15048',
						},
					},
					{
						value: '✔ Shell Shocker Rocket Launcher',
						color: 'd32ce6',
						app_data: {
							def_index: '15052',
						},
					},
					{
						value: '    Flash Fryer Flame Thrower',
						color: '8847ff',
						app_data: {
							def_index: '15049',
						},
					},
					{
						value: '    Spark of Life Medi Gun',
						color: '8847ff',
						app_data: {
							def_index: '15050',
						},
					},
					{
						value: '    Dead Reckoner Revolver',
						color: '8847ff',
						app_data: {
							def_index: '15051',
						},
					},
					{
						value: '    Black Dahlia Pistol',
						color: '8847ff',
						app_data: {
							def_index: '15046',
						},
					},
					{
						value: '    Sandstone Special Pistol',
						color: '8847ff',
						app_data: {
							def_index: '15056',
						},
					},
					{
						value: '    Brick House Minigun',
						color: '4b69ff',
						app_data: {
							def_index: '15055',
						},
					},
					{
						value: '    Aqua Marine Rocket Launcher',
						color: '4b69ff',
						app_data: {
							def_index: '15057',
						},
					},
					{
						value: '    Low Profile SMG',
						color: '4b69ff',
						app_data: {
							def_index: '15058',
						},
					},
					{
						value: '    Turbine Torcher Flame Thrower',
						color: '4b69ff',
						app_data: {
							def_index: '15054',
						},
					},
					{
						value: '    Lightning Rod Shotgun',
						color: '4b69ff',
						app_data: {
							def_index: '15047',
						},
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15052&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D7998211058114246468',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D7998211058114246468',
					},
				],
				tags: [
					{
						internal_name: 'strange',
						name: 'Strange',
						category: 'Quality',
						color: 'CF6A32',
						category_name: 'Quality',
					},
					{
						internal_name: 'primary',
						name: 'Primary weapon',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Soldier',
						name: 'Soldier',
						category: 'Class',
						category_name: 'Class',
					},
					{
						internal_name: 'Rarity_Legendary',
						name: 'Assassin',
						category: 'Rarity',
						color: 'd32ce6',
						category_name: 'Grade',
					},
					{
						internal_name: 'Powerhouse_collection',
						name: 'Powerhouse Collection',
						category: 'Collection',
						category_name: 'Collection',
					},
					{
						internal_name: 'TFUI_InvTooltip_BattleScared',
						name: 'Battle Scarred',
						category: 'Exterior',
						category_name: 'Exterior',
					},
				],
				app_data: {
					def_index: '15052',
					quality: '11',
				},
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Rocket Launcher',
			fullName:
				'Strange Specialized Killstreak Shell Shocker Rocket Launcher (Battle Scarred)',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYghuZgHPUPUOCacF4w3tG3J86sI7V47mp-JTLQu-vNTGYbh_MNgYHMeFXPHVY139uEk9g_VbK52LqTSvg3pcnpTOhA/',
			tradable: true,
			craftable: true,
			quality: 11,
			texture: 52,
			wear: 5,
			killstreak: 2,
			classes: ['Soldier'],
			type: 'primary',
			collection: 'Powerhouse Collection',
			grade: 'Assassin',
			parts: ['Pyros Killed'],
			spells: ['Pumpkin Bombs'],
			marketable: true,
			commodity: false,
			sheen: 'Mean Green',
			level: -1,
		});
	});

	it('Case #7', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '1348131292',
				instanceid: '93028938',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwADWBXjvD1Pid3oDvqJGt8Yltsm2pxUyzFu31V9NbPtYTUwdwWbBfkOXfZioFDuWSFku8JnUdLg8ulQLw29tYfCMOQycIYbhNRIXDY',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwADWBXjvD1Pid3oDvqJGt8Yltsm2pxUyzFu31V9NbPtYTUwdwWbBfkOXfZioFDuWSFku8JnUdLg8ulQLw29tYfCMOQycIYbhNRIXDY',
				icon_drag_url: '',
				name: 'Strange Professional Killstreak Festive Grenade Launcher',
				market_hash_name:
					'Strange Professional Killstreak Festive Grenade Launcher',
				market_name:
					'Strange Professional Killstreak Festive Grenade Launcher',
				name_color: 'CF6A32',
				background_color: '3C352E',
				type: 'Limited Strange Grenade Launcher - Kills: 20',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{ value: '(Airborne Enemy Kills: 4)', color: '756b5e' },
					{
						value: 'Halloween: Exorcism (spell only active during event)',
						color: '7ea9d1',
					},
					{ value: 'Killstreaker: Hypno-Beam', color: '7ea9d1' },
					{ value: 'Sheen: Manndarin', color: '7ea9d1' },
					{ value: 'Killstreaks Active', color: '7ea9d1' },
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=1007&lang=en_US',
					},
				],
				tags: [
					{
						internal_name: 'strange',
						name: 'Strange',
						category: 'Quality',
						color: 'CF6A32',
						category_name: 'Quality',
					},
					{
						internal_name: 'primary',
						name: 'Primary weapon',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Demoman',
						name: 'Demoman',
						category: 'Class',
						category_name: 'Class',
					},
				],
				app_data: { def_index: '1007', quality: '11' },
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			classes: ['Demoman'],
			commodity: false,
			craftable: true,
			fullName:
				'Strange Professional Killstreak Festive Grenade Launcher',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwADWBXjvD1Pid3oDvqJGt8Yltsm2pxUyzFu31V9NbPtYTUwdwWbBfkOXfZioFDuWSFku8JnUdLg8ulQLw29tYfCMOQycIYbhNRIXDY/',
			killstreak: 3,
			killstreaker: 'Hypno-Beam',
			marketable: true,
			name: 'Festive Grenade Launcher',
			parts: ['Airborne Enemy Kills'],
			quality: 11,
			sheen: 'Manndarin',
			spells: ['Exorcism'],
			tradable: true,
			type: 'primary',
			level: -1,
		});
	});

	it('Case #8', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '11042149',
				instanceid: '19201223',
				icon_url:
					'IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTdcfMQEpRnqWSMU5OD2NoHwHEIkChXOjLx2Sk5MbUqMcbBnQz4ruyeU3n5awjJLjLaE0pXEvYaYzGdkW_0p7rBXG6aQb0rFl9XK_QM8jdIb82PaURv3dUMrT27kxUqSU5_IZIXcl_smSJdIbMiwRlwHyU',
				icon_url_large:
					'IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTdcfMQEpRnqWSMU5OD2NoHwHEIkChXOjLx2Sk5MbUqMcbBnQz4ruyeU3n5awjJLjLaE0pXEvYaYzGdkW_0p7rBXG6aQb0rFl9XK_QM8jdIb82PaURv3dUMrT27kxUqSU5_IZIXcl_smSJdIbMiwRlwHyU',
				icon_drag_url: '',
				name: 'The Essential Accessories',
				market_hash_name: 'The Essential Accessories',
				market_name: 'The Essential Accessories',
				name_color: '7D6D00',
				background_color: '3C352E',
				type: 'Limited Level 10 Apparel',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: "Paint Color: Operator's Overalls",
						color: '756b5e',
					},
					{ value: '' },
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=347&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D2891326522173157497',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D2891326522173157497',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
					},
					{
						internal_name: 'misc',
						name: 'Cosmetic',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Scout',
						name: 'Scout',
						category: 'Class',
						category_name: 'Class',
					},
				],
				app_data: { def_index: '347', quality: '6' },
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			classes: ['Scout'],
			commodity: false,
			craftable: true,
			fullName: 'The Essential Accessories',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTdcfMQEpRnqWSMU5OD2NoHwHEIkChXOjLx2Sk5MbUqMcbBnQz4ruyeU3n5awjJLjLaE0pXEvYaYzGdkW_0p7rBXG6aQb0rFl9XK_QM8jdIb82PaURv3dUMrT27kxUqSU5_IZIXcl_smSJdIbMiwRlwHyU/',
			marketable: true,
			name: 'The Essential Accessories',
			paint: "Operator's Overalls",
			parts: [],
			quality: 6,
			spells: [],
			tradable: true,
			type: 'misc',
			level: -1,
		});
	});

	it('Case #9 - Red Rock Roscoe texture', () => {
		class MockSchema extends Schema {
			getTextureEnum() {
				this.loadTextures();

				return 0;
			}
		}

		const format = createFormat(new MockSchema());
		const econItem = format.parseEconItem(
			{
				appid: '440',
				classid: '4472592872',
				instanceid: '1365979262',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPfflDz5zdwmTVPAPD8ot8Qn-Whg07dR3XcGzuetXKlnpsYuVMbguMYpOGpXZCKTTYAv8uB89iPIIKpDcoyq72Srvaz8UG028HR0ZFYA',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPfflDz5zdwmTVPAPD8ot8Qn-Whg07dR3XcGzuetXKlnpsYuVMbguMYpOGpXZCKTTYAv8uB89iPIIKpDcoyq72Srvaz8UG028HR0ZFYA',
				icon_drag_url: '',
				name: 'Festivized Red Rock Roscoe Pistol',
				market_hash_name:
					'Festivized Specialized Killstreak Red Rock Roscoe Pistol (Field-Tested)',
				market_name:
					'Festivized Specialized Killstreak Red Rock Roscoe Pistol (Field-Tested)',
				name_color: 'FAFAFA',
				background_color: '3C352E',
				type: '',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: 'Elite Grade Pistol (Field-Tested)',
						color: 'eb4b4b',
					},
					{ value: 'Festivized', color: 'ffd700' },
					{ value: 'Team Colored Decorated Weapon' },
					{ value: 'Sheen: Hot Rod', color: '7ea9d1' },
					{ value: 'Killstreaks Active', color: '7ea9d1' },
					{ value: "''Fuzzball's Pocket Pistol''" },
					{ value: ' ' },
					{ value: ' ' },
					{ value: 'Concealed Killer Collection' },
					{
						value: '    Sand Cannon Rocket Launcher',
						color: 'eb4b4b',
						app_data: { def_index: '15014' },
					},
					{
						value: '    Red Rock Roscoe Pistol',
						color: 'eb4b4b',
						app_data: { def_index: '15013' },
					},
					{
						value: '    Psychedelic Slugger Revolver',
						color: 'd32ce6',
						app_data: { def_index: '15011' },
					},
					{
						value: '    Purple Range Sniper Rifle',
						color: 'd32ce6',
						app_data: { def_index: '15007' },
					},
					{
						value: '    Sudden Flurry Stickybomb Launcher',
						color: 'd32ce6',
						app_data: { def_index: '15009' },
					},
					{
						value: '    Night Terror Scattergun',
						color: '8847ff',
						app_data: { def_index: '15002' },
					},
					{
						value: '    Carpet Bomber Stickybomb Launcher',
						color: '8847ff',
						app_data: { def_index: '15012' },
					},
					{
						value: '    Woodland Warrior Rocket Launcher',
						color: '8847ff',
						app_data: { def_index: '15006' },
					},
					{
						value: '    Wrapped Reviver Medi Gun',
						color: '8847ff',
						app_data: { def_index: '15010' },
					},
					{
						value: '    Night Owl Sniper Rifle',
						color: '4b69ff',
						app_data: { def_index: '15000' },
					},
					{
						value: '    Woodsy Widowmaker SMG',
						color: '4b69ff',
						app_data: { def_index: '15001' },
					},
					{
						value: '    Backwoods Boomstick Shotgun',
						color: '4b69ff',
						app_data: { def_index: '15003' },
					},
					{
						value: '    King of the Jungle Minigun',
						color: '4b69ff',
						app_data: { def_index: '15004' },
					},
					{
						value: '    Masked Mender Medi Gun',
						color: '4b69ff',
						app_data: { def_index: '15008' },
					},
					{
						value: '    Forest Fire Flame Thrower',
						color: '4b69ff',
						app_data: { def_index: '15005' },
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15013&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D10132525329635647851',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D10132525329635647851',
					},
				],
				tags: [
					{
						internal_name: 'paintkitweapon',
						name: 'Decorated Weapon',
						category: 'Quality',
						color: 'FAFAFA',
						category_name: 'Quality',
					},
					{
						internal_name: 'secondary',
						name: 'Secondary weapon',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Scout',
						name: 'Scout',
						category: 'Class',
						category_name: 'Class',
					},
					{
						internal_name: 'Engineer',
						name: 'Engineer',
						category: 'Class',
						category_name: 'Class',
					},
					{
						internal_name: 'Rarity_Ancient',
						name: 'Elite',
						category: 'Rarity',
						color: 'eb4b4b',
						category_name: 'Grade',
					},
					{
						internal_name: 'concealedkiller_collection',
						name: 'Concealed Killer Collection',
						category: 'Collection',
						category_name: 'Collection',
					},
					{
						internal_name: 'TFUI_InvTooltip_FieldTested',
						name: 'Field-Tested',
						category: 'Exterior',
						category_name: 'Exterior',
					},
				],
				app_data: { def_index: '15013', quality: '15' },
			},
			true,
			false
		);

		assert.deepEqual(econItem, {
			name: 'Pistol',
			fullName:
				'Festivized Specialized Killstreak Red Rock Roscoe Pistol (Field-Tested)',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPfflDz5zdwmTVPAPD8ot8Qn-Whg07dR3XcGzuetXKlnpsYuVMbguMYpOGpXZCKTTYAv8uB89iPIIKpDcoyq72Srvaz8UG028HR0ZFYA/',
			tradable: true,
			craftable: true,
			quality: 15,
			wear: 3,
			festivized: true,
			killstreak: 2,
			level: -1,
			classes: ['Scout', 'Engineer'],
			type: 'secondary',
			sheen: 'Hot Rod',
			collection: 'Concealed Killer Collection',
			grade: 'Elite',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false,
			texture: 0,
		});
	});
});

describe('Econ item with defindexes', () => {
	it('Case #1', () => {
		const econItem = parseEconItem(
			{
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
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=31066&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D5006617706189886078',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D5006617706189886078',
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
			},
			false,
			true
		);

		assert.deepEqual(econItem, {
			name: 'Skullbrero',
			fullName: 'Twisted Radiance Skullbrero',
			id: '8574678947',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDewlDDUq7hytIncTqD-CJGu8_l9sn4pUbi2Ftw1ApbbXtNmM_cVTEV_lbWaw7pQu0W3Rr6sVlAdPvoOhScFnt4pyGbefmPm6lTg/',
			tradable: true,
			craftable: true,
			quality: 'Unusual',
			effect: 'Twisted Radiance',
			defindex: 31066,
			classes: ['Pyro'],
			type: 'misc',
			collection: 'Spooky Spoils Collection',
			grade: 'Commando',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false,
			level: 57,
		});
	});

	it('Case #2', () => {
		const econItem = parseEconItem(
			{
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
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=318&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D10290164463146604828',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D10290164463146604828',
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
			},
			false,
			true
		);

		assert.deepEqual(econItem, {
			name: "Prancer's Pride",
			fullName: "Smoking Prancer's Pride",
			id: '8610658018',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEbfgYfXh7wqwdTmsHiCM2ACfIHnpRh5MkG3G8zyVMpYebiYm8wdFGTBPILC_BvrQu9X3RqupQ6AYPhp-wHZ0yx43BgcxIX/',
			tradable: true,
			craftable: true,
			quality: 'Unusual',
			effect: 'Smoking',
			defindex: 318,
			classes: ['Pyro'],
			type: 'misc',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false,
			level: 88,
		});
	});

	it('Case #3', () => {
		const econItem = parseEconItem(
			{
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
						value: 'Halloween: Pumpkin Bombs (spell only active during event)',
						color: '7ea9d1',
					},
					{ value: 'Sheen: Agonizing Emerald', color: '7ea9d1' },
					{ value: 'Killstreaks Active', color: '7ea9d1' },
					{
						value: '\nGift from: VLaDOS | S>C.MOON YELLOW BELT',
						color: '7ea9d1',
					},
					{
						value: 'Date Received: Tuesday, September 10, 2019 (9:36:39) GMT',
					},
					{ value: ' ' },
					{ value: ' ' },
					{ value: 'Concealed Killer Collection' },
					{
						value: '    Sand Cannon Rocket Launcher',
						color: 'eb4b4b',
					},
					{ value: '    Red Rock Roscoe Pistol', color: 'eb4b4b' },
					{
						value: '    Psychedelic Slugger Revolver',
						color: 'd32ce6',
					},
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
					{
						value: '    Backwoods Boomstick Shotgun',
						color: '4b69ff',
					},
					{
						value: '    King of the Jungle Minigun',
						color: '4b69ff',
					},
					{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
					{ value: '    Forest Fire Flame Thrower', color: '4b69ff' },
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15006&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D11534198800805877074',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D11534198800805877074',
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
			},
			false,
			true
		);

		assert.deepEqual(econItem, {
			name: 'Rocket Launcher',
			fullName:
				'Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)',
			id: '8656785508',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffjDz5zdwmTVPAOCsot8Qn-Whg07dR3XcGzuehWe1q65oHFOuQpN4kZGpOECffQZl39vho_1KdefJbbonvq3SvubmwUG028UzYUYzA/',
			tradable: true,
			craftable: true,
			quality: 'Decorated Weapon',
			texture: 'Woodland Warrior',
			wear: 'Field-Tested',
			defindex: 205,
			festivized: true,
			killstreak: 'Specialized Killstreak',
			classes: ['Soldier'],
			type: 'primary',
			collection: 'Concealed Killer Collection',
			grade: 'Commando',
			parts: [],
			spells: ['Pumpkin Bombs'],
			marketable: true,
			commodity: false,
			sheen: 'Agonizing Emerald',
			level: -1,
		});
	});

	it('Case #4', () => {
		const econItem = parseEconItem(
			{
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
						value: 'Halloween: Spectral Spectrum (spell only active during event)',
						color: '7ea9d1',
					},
					{ value: '' },
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=30290&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D16238051287194648628',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D16238051287194648628',
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
			},
			false,
			true
		);

		assert.deepEqual(econItem, {
			name: 'PY-40 Incinibot',
			fullName: 'Haunted PY-40 Incinibot',
			id: '8733746813',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEDe1VBDEjdqCEX2PfnGOaDBeEUlNQK6ZFH3jMlwwB_Y7vhZ2Q0JFKQAKQJXadrpF6-UXE268I3UNHg8esHfF28tdHHO65sbo88eQy8bA/',
			tradable: true,
			craftable: true,
			quality: 'Haunted',
			defindex: 30290,
			classes: ['Pyro'],
			type: 'misc',
			parts: [],
			spells: ['Spectral Spectrum'],
			marketable: true,
			commodity: false,
			level: 58,
		});
	});

	it('Case #5', () => {
		const econItem = parseEconItem(
			{
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
						value: 'Halloween: Spectral Spectrum (spell only active during event)',
						color: '7ea9d1',
					},
					{
						value: "The K-9 mane is perfect for tricky social situations. People will either only want to talk about the hat, which means they'll be distracted from that rash making its way up your jugular,or they'll avoid you altogether. It's a win/win!",
					},
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=876&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D7378163898213210976',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D7378163898213210976',
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
			},
			false,
			true
		);

		assert.deepEqual(econItem, {
			name: 'K-9 Mane',
			fullName: 'Genuine K-9 Mane',
			id: '8434754722',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTcePMQFc1nqWSMU5OD2NwOx3sIyShXOjLx2Sk5MbUqMcbBnQz4ruyeU2DgVzPLKCnYCGFgGOIYfAeFr3HysPORE2vPELl_RQEMdaFX9GxObM-BOEE_goVdrTXqlBwkHRNxJ5VFcVbihGQdNlNSNRp3/',
			tradable: true,
			craftable: true,
			quality: 'Genuine',
			defindex: 876,
			classes: ['Demoman', 'Heavy'],
			type: 'misc',
			parts: [],
			spells: ['Spectral Spectrum'],
			marketable: true,
			commodity: false,
			paint: "Noble Hatter's Violet",
			paintDefindex: 5029,
			level: 1,
		});
	});

	it('Case #6', () => {
		const econItem = parseEconItem(
			{
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
				descriptions: [
					{ value: 'Style: Tie', color: '756b5e' },
					{
						value: 'Halloween: Chromatic Corruption (spell only active during event)',
						color: '7ea9d1',
					},
					{
						value: 'Halloween: Voices From Below (spell only active during event)',
						color: '7ea9d1',
					},
					{
						value: "Whether you're trepanning a skull to let out the sickness ghosts or attaching enough leeches to a patient that they'll pass out from blood loss before you cut off any suspicious-lookinglimbs, this dapper ruffed shirt and coat will assure your patients that they came to the right place for their dangerously insane 18th century medicine.",
					},
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=878&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D434113929687356346',
						name: 'Inspect in Game...',
					},
				],
				name: 'Strange Genuine Foppish Physician',
				name_color: '4D7455',
				type: 'Strange Apparel - Points Scored: 1',
				market_name: 'Strange Genuine Foppish Physician',
				market_hash_name: 'Strange Genuine Foppish Physician',
				market_actions: [
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D434113929687356346',
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
						internal_name: 'Medic',
						localized_category_name: 'Class',
						localized_tag_name: 'Medic',
					},
				],
			},
			false,
			true
		);

		assert.deepEqual(econItem, {
			name: 'Foppish Physician',
			fullName: 'Strange Genuine Foppish Physician',
			id: '8294625611',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEfezgSUhr2hzVGjMHlMvyJC-sUkt8K6ZFH3jMllVQrZbvkNG8ydFXAWfEICqFjp160CCNivZI3VY_j9u8DfA6-sYSUN65sbo_U7o3qKw/',
			tradable: true,
			craftable: true,
			quality: 'Genuine',
			defindex: 878,
			elevated: true,
			classes: ['Medic'],
			type: 'misc',
			parts: [],
			spells: ['Chromatic Corruption', 'Voices From Below'],
			marketable: true,
			commodity: false,
			level: -1,
		});
	});

	it('Case #7', () => {
		const econItem = parseEconItem(
			{
				assetid: '30125',
				appid: '440',
				classid: '638115890',
				instanceid: '0',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIYwkCSQn3uyxKh8bZBvuYN-wBid0wq8hXjW49lVl_NrC2ZjFjJlPHV6FcDPRj8Am1Cn5i6pE3DIfuoOxReV_x9NyRdNFoUKY',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIYwkCSQn3uyxKh8bZBvuYN-wBid0wq8hXjW49lVl_NrC2ZjFjJlPHV6FcDPRj8Am1Cn5i6pE3DIfuoOxReV_x9NyRdNFoUKY',
				icon_drag_url: '',
				name: "Stockbroker's Scarf Strangifier Chemistry Set Series #2",
				market_hash_name:
					"Stockbroker's Scarf Strangifier Chemistry Set",
				market_name: "Stockbroker's Scarf Strangifier Chemistry Set",
				name_color: '7D6D00',
				background_color: '3C352E',
				type: 'Level 5 Recipe',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: "This item has a set of inputs that, once fulfilled, will\nreward you with what's listed in its outputs.",
					},
					{ value: ' ' },
					{
						value: 'The following are the inputs that must be fulfilled.',
					},
					{ value: 'The Vaccinator x 4', color: '8b8989' },
					{ value: 'The Blutsauger x 1', color: '8b8989' },
					{ value: 'The Disciplinary Action x 1', color: '8b8989' },
					{ value: 'The Sandvich x 1', color: '8b8989' },
					{ value: 'The Candy Cane x 1', color: '8b8989' },
					{
						value: 'Strange Scottish Resistance x 1',
						color: '8b8989',
					},
					{ value: ' ' },
					{
						value: 'You will receive all of the following outputs once all of the inputs are fulfilled.',
					},
					{
						value: "Stockbroker's Scarf Strangifier",
						color: '8b8989',
					},
					{ value: ' ' },
					{
						value: 'This is a limited use item. Uses: 1',
						color: '00a000',
						app_data: { limited: 1 },
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=20005&lang=en_US',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
					},
					{
						internal_name: 'TF_ItemDynamicRecipeTool',
						name: 'Recipe',
						category: 'Type',
						category_name: 'Type',
					},
				],
				app_data: { quantity: '1', def_index: '20005', quality: '6' },
			},
			true,
			true
		);

		assert.deepEqual(econItem, {
			name: 'Chemistry Set',
			fullName: "Stockbroker's Scarf Strangifier Chemistry Set #2",
			id: '30125',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIYwkCSQn3uyxKh8bZBvuYN-wBid0wq8hXjW49lVl_NrC2ZjFjJlPHV6FcDPRj8Am1Cn5i6pE3DIfuoOxReV_x9NyRdNFoUKY/',
			tradable: true,
			craftable: true,
			quality: 6,
			target: "Stockbroker's Scarf",
			output: 'Strangifier',
			outputQuality: 6,
			itemNumber: { type: 'series', value: 2 },
			defindex: 20005,
			outputDefindex: 5661,
			targetDefindex: 336,
			classes: [],
			type: 'TF_ItemDynamicRecipeTool',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false,
			level: 5,
		});
	});

	it('Case #11', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '2625497429',
				instanceid: '4048537137',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYghuZgHPUPUOCacF4w3tG3J86sI7V47mp-JTLQu-vNTGYbh_MNgYHMeFXPHVY139uEk9g_VbK52LqTSvg3pcnpTOhA',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYghuZgHPUPUOCacF4w3tG3J86sI7V47mp-JTLQu-vNTGYbh_MNgYHMeFXPHVY139uEk9g_VbK52LqTSvg3pcnpTOhA',
				icon_drag_url: '',
				name: 'Shell Shocker Rocket Launcher',
				market_hash_name:
					'Strange Specialized Killstreak Shell Shocker Rocket Launcher (Battle Scarred)',
				market_name:
					'Strange Specialized Killstreak Shell Shocker Rocket Launcher (Battle Scarred)',
				name_color: 'CF6A32',
				background_color: '3C352E',
				type: '',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: 'Assassin Grade Rocket Launcher (Battle Scarred)',
						color: 'd32ce6',
					},
					{
						value: 'Strange Stat Clock Attached',
						color: 'CF6A32',
					},
					{
						value: '     Kills: 5121',
						color: '756b5e',
					},
					{
						value: '     Pyros Killed: 712',
						color: '756b5e',
					},
					{
						value: 'Team Colored Decorated Weapon',
					},
					{
						value: 'Halloween: Pumpkin Bombs (spell only active during event)',
						color: '7ea9d1',
					},
					{
						value: 'Sheen: Mean Green',
						color: '7ea9d1',
					},
					{
						value: 'Killstreaks Active',
						color: '7ea9d1',
					},
					{
						value: ' ',
					},
					{
						value: ' ',
					},
					{
						value: 'Powerhouse Collection',
					},
					{
						value: '    Liquid Asset Stickybomb Launcher',
						color: 'eb4b4b',
						app_data: {
							def_index: '15045',
						},
					},
					{
						value: '    Thunderbolt Sniper Rifle',
						color: 'eb4b4b',
						app_data: {
							def_index: '15059',
						},
					},
					{
						value: '    Current Event Scattergun',
						color: 'd32ce6',
						app_data: {
							def_index: '15053',
						},
					},
					{
						value: '    Pink Elephant Stickybomb Launcher',
						color: 'd32ce6',
						app_data: {
							def_index: '15048',
						},
					},
					{
						value: '✔ Shell Shocker Rocket Launcher',
						color: 'd32ce6',
						app_data: {
							def_index: '15052',
						},
					},
					{
						value: '    Flash Fryer Flame Thrower',
						color: '8847ff',
						app_data: {
							def_index: '15049',
						},
					},
					{
						value: '    Spark of Life Medi Gun',
						color: '8847ff',
						app_data: {
							def_index: '15050',
						},
					},
					{
						value: '    Dead Reckoner Revolver',
						color: '8847ff',
						app_data: {
							def_index: '15051',
						},
					},
					{
						value: '    Black Dahlia Pistol',
						color: '8847ff',
						app_data: {
							def_index: '15046',
						},
					},
					{
						value: '    Sandstone Special Pistol',
						color: '8847ff',
						app_data: {
							def_index: '15056',
						},
					},
					{
						value: '    Brick House Minigun',
						color: '4b69ff',
						app_data: {
							def_index: '15055',
						},
					},
					{
						value: '    Aqua Marine Rocket Launcher',
						color: '4b69ff',
						app_data: {
							def_index: '15057',
						},
					},
					{
						value: '    Low Profile SMG',
						color: '4b69ff',
						app_data: {
							def_index: '15058',
						},
					},
					{
						value: '    Turbine Torcher Flame Thrower',
						color: '4b69ff',
						app_data: {
							def_index: '15054',
						},
					},
					{
						value: '    Lightning Rod Shotgun',
						color: '4b69ff',
						app_data: {
							def_index: '15047',
						},
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15052&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D7998211058114246468',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D7998211058114246468',
					},
				],
				tags: [
					{
						internal_name: 'strange',
						name: 'Strange',
						category: 'Quality',
						color: 'CF6A32',
						category_name: 'Quality',
					},
					{
						internal_name: 'primary',
						name: 'Primary weapon',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Soldier',
						name: 'Soldier',
						category: 'Class',
						category_name: 'Class',
					},
					{
						internal_name: 'Rarity_Legendary',
						name: 'Assassin',
						category: 'Rarity',
						color: 'd32ce6',
						category_name: 'Grade',
					},
					{
						internal_name: 'Powerhouse_collection',
						name: 'Powerhouse Collection',
						category: 'Collection',
						category_name: 'Collection',
					},
					{
						internal_name: 'TFUI_InvTooltip_BattleScared',
						name: 'Battle Scarred',
						category: 'Exterior',
						category_name: 'Exterior',
					},
				],
				app_data: {
					def_index: '15052',
					quality: '11',
				},
			},
			false,
			true
		);

		assert.deepEqual(econItem, {
			name: 'Rocket Launcher',
			fullName:
				'Strange Specialized Killstreak Shell Shocker Rocket Launcher (Battle Scarred)',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYghuZgHPUPUOCacF4w3tG3J86sI7V47mp-JTLQu-vNTGYbh_MNgYHMeFXPHVY139uEk9g_VbK52LqTSvg3pcnpTOhA/',
			tradable: true,
			craftable: true,
			quality: 'Strange',
			texture: 'Shell Shocker',
			wear: 'Battle Scarred',
			killstreak: 'Specialized Killstreak',
			classes: ['Soldier'],
			type: 'primary',
			collection: 'Powerhouse Collection',
			grade: 'Assassin',
			parts: ['Pyros Killed'],
			spells: ['Pumpkin Bombs'],
			marketable: true,
			commodity: false,
			defindex: 205,
			sheen: 'Mean Green',
			level: -1,
		});
	});

	it('Case #12', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '1348131292',
				instanceid: '93028938',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwADWBXjvD1Pid3oDvqJGt8Yltsm2pxUyzFu31V9NbPtYTUwdwWbBfkOXfZioFDuWSFku8JnUdLg8ulQLw29tYfCMOQycIYbhNRIXDY',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwADWBXjvD1Pid3oDvqJGt8Yltsm2pxUyzFu31V9NbPtYTUwdwWbBfkOXfZioFDuWSFku8JnUdLg8ulQLw29tYfCMOQycIYbhNRIXDY',
				icon_drag_url: '',
				name: 'Strange Professional Killstreak Festive Grenade Launcher',
				market_hash_name:
					'Strange Professional Killstreak Festive Grenade Launcher',
				market_name:
					'Strange Professional Killstreak Festive Grenade Launcher',
				name_color: 'CF6A32',
				background_color: '3C352E',
				type: 'Limited Strange Grenade Launcher - Kills: 20',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{ value: '(Airborne Enemy Kills: 4)', color: '756b5e' },
					{
						value: 'Halloween: Exorcism (spell only active during event)',
						color: '7ea9d1',
					},
					{ value: 'Killstreaker: Hypno-Beam', color: '7ea9d1' },
					{ value: 'Sheen: Manndarin', color: '7ea9d1' },
					{ value: 'Killstreaks Active', color: '7ea9d1' },
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=1007&lang=en_US',
					},
				],
				tags: [
					{
						internal_name: 'strange',
						name: 'Strange',
						category: 'Quality',
						color: 'CF6A32',
						category_name: 'Quality',
					},
					{
						internal_name: 'primary',
						name: 'Primary weapon',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Demoman',
						name: 'Demoman',
						category: 'Class',
						category_name: 'Class',
					},
				],
				app_data: { def_index: '1007', quality: '11' },
			},
			true,
			true
		);

		assert.deepEqual(econItem, {
			classes: ['Demoman'],
			commodity: false,
			craftable: true,
			fullName:
				'Strange Professional Killstreak Festive Grenade Launcher',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwADWBXjvD1Pid3oDvqJGt8Yltsm2pxUyzFu31V9NbPtYTUwdwWbBfkOXfZioFDuWSFku8JnUdLg8ulQLw29tYfCMOQycIYbhNRIXDY/',
			killstreak: 3,
			killstreaker: 'Hypno-Beam',
			marketable: true,
			name: 'Festive Grenade Launcher',
			parts: ['Airborne Enemy Kills'],
			quality: 11,
			sheen: 'Manndarin',
			spells: ['Exorcism'],
			tradable: true,
			type: 'primary',
			defindex: 1007,
			level: -1,
		});
	});

	it('Case #13', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '11042149',
				instanceid: '19201223',
				icon_url:
					'IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTdcfMQEpRnqWSMU5OD2NoHwHEIkChXOjLx2Sk5MbUqMcbBnQz4ruyeU3n5awjJLjLaE0pXEvYaYzGdkW_0p7rBXG6aQb0rFl9XK_QM8jdIb82PaURv3dUMrT27kxUqSU5_IZIXcl_smSJdIbMiwRlwHyU',
				icon_url_large:
					'IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTdcfMQEpRnqWSMU5OD2NoHwHEIkChXOjLx2Sk5MbUqMcbBnQz4ruyeU3n5awjJLjLaE0pXEvYaYzGdkW_0p7rBXG6aQb0rFl9XK_QM8jdIb82PaURv3dUMrT27kxUqSU5_IZIXcl_smSJdIbMiwRlwHyU',
				icon_drag_url: '',
				name: 'The Essential Accessories',
				market_hash_name: 'The Essential Accessories',
				market_name: 'The Essential Accessories',
				name_color: '7D6D00',
				background_color: '3C352E',
				type: 'Limited Level 10 Apparel',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: "Paint Color: Operator's Overalls",
						color: '756b5e',
					},
					{ value: '' },
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=347&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D2891326522173157497',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D2891326522173157497',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
					},
					{
						internal_name: 'misc',
						name: 'Cosmetic',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Scout',
						name: 'Scout',
						category: 'Class',
						category_name: 'Class',
					},
				],
				app_data: { def_index: '347', quality: '6' },
			},
			true,
			true
		);

		assert.deepEqual(econItem, {
			classes: ['Scout'],
			commodity: false,
			craftable: true,
			fullName: 'The Essential Accessories',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTdcfMQEpRnqWSMU5OD2NoHwHEIkChXOjLx2Sk5MbUqMcbBnQz4ruyeU3n5awjJLjLaE0pXEvYaYzGdkW_0p7rBXG6aQb0rFl9XK_QM8jdIb82PaURv3dUMrT27kxUqSU5_IZIXcl_smSJdIbMiwRlwHyU/',
			marketable: true,
			name: 'The Essential Accessories',
			paint: "Operator's Overalls",
			paintDefindex: 5060,
			parts: [],
			quality: 6,
			spells: [],
			tradable: true,
			type: 'misc',
			defindex: 347,
			level: -1,
		});
	});

	it('Case #14 - bat output', () => {
		class MockSchema extends Schema {
			getDefindex(input) {
				if (input === 'Bat') {
					return 0;
				}

				return super.getDefindex(input);
			}
		}

		const format = createFormat(new MockSchema());
		const econItem = format.parseEconItem(
			{
				assetid: '30125',
				appid: '440',
				classid: '638115890',
				instanceid: '0',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIYwkCSQn3uyxKh8bZBvuYN-wBid0wq8hXjW49lVl_NrC2ZjFjJlPHV6FcDPRj8Am1Cn5i6pE3DIfuoOxReV_x9NyRdNFoUKY',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIYwkCSQn3uyxKh8bZBvuYN-wBid0wq8hXjW49lVl_NrC2ZjFjJlPHV6FcDPRj8Am1Cn5i6pE3DIfuoOxReV_x9NyRdNFoUKY',
				icon_drag_url: '',
				name: 'Bat Strangifier Chemistry Set Series #2',
				market_hash_name: 'Bat Strangifier Chemistry Set',
				market_name: 'Bat Strangifier Chemistry Set',
				name_color: '7D6D00',
				background_color: '3C352E',
				type: 'Level 5 Recipe',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: "This item has a set of inputs that, once fulfilled, will\nreward you with what's listed in its outputs.",
					},
					{ value: ' ' },
					{
						value: 'The following are the inputs that must be fulfilled.',
					},
					{ value: 'The Vaccinator x 4', color: '8b8989' },
					{ value: 'The Blutsauger x 1', color: '8b8989' },
					{ value: 'The Disciplinary Action x 1', color: '8b8989' },
					{ value: 'The Sandvich x 1', color: '8b8989' },
					{ value: 'The Candy Cane x 1', color: '8b8989' },
					{
						value: 'Strange Scottish Resistance x 1',
						color: '8b8989',
					},
					{ value: ' ' },
					{
						value: 'You will receive all of the following outputs once all of the inputs are fulfilled.',
					},
					{ value: 'Bat Strangifier', color: '8b8989' },
					{ value: ' ' },
					{
						value: 'This is a limited use item. Uses: 1',
						color: '00a000',
						app_data: { limited: 1 },
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=20005&lang=en_US',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
					},
					{
						internal_name: 'TF_ItemDynamicRecipeTool',
						name: 'Recipe',
						category: 'Type',
						category_name: 'Type',
					},
				],
				app_data: { quantity: '1', def_index: '20005', quality: '6' },
			},
			false,
			true
		);

		assert.deepEqual(econItem, {
			name: 'Chemistry Set',
			fullName: 'Bat Strangifier Chemistry Set #2',
			id: '30125',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIYwkCSQn3uyxKh8bZBvuYN-wBid0wq8hXjW49lVl_NrC2ZjFjJlPHV6FcDPRj8Am1Cn5i6pE3DIfuoOxReV_x9NyRdNFoUKY/',
			tradable: true,
			craftable: true,
			quality: 'Unique',
			target: 'Bat',
			output: 'Strangifier',
			outputQuality: 'Unique',
			itemNumber: { type: 'series', value: 2 },
			defindex: 20005,
			outputDefindex: 5661,
			targetDefindex: 0,
			classes: [],
			type: 'TF_ItemDynamicRecipeTool',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false,
			level: 5,
		});
	});

	it('Case #15 - bat target', () => {
		class MockSchema extends Schema {
			getDefindex(input) {
				if (input === 'Bat') {
					return 0;
				}

				return super.getDefindex(input);
			}
		}

		const format = createFormat(new MockSchema());
		const econItem = format.parseEconItem(
			{
				appid: '440',
				classid: '638769830',
				instanceid: '11040671',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIYwkCSQn3uyxKh8bZBvuYN-wBid0wq8hXjW49lVl_NrC2ZjFjJlPHV6FcDPRj8Am1Cn5i6pE3DIfuoOxReV_x9NyRdNFoUKY',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIYwkCSQn3uyxKh8bZBvuYN-wBid0wq8hXjW49lVl_NrC2ZjFjJlPHV6FcDPRj8Am1Cn5i6pE3DIfuoOxReV_x9NyRdNFoUKY',
				icon_drag_url: '',
				name: "Collector's Bat Chemistry Set",
				market_hash_name: "Collector's Bat Chemistry Set",
				market_name: "Collector's Bat Chemistry Set",
				name_color: '7D6D00',
				background_color: '3C352E',
				type: 'Level 5 Recipe',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: "This item has a set of inputs that, once fulfilled, will\nreward you with what's listed in its outputs.",
					},
					{ value: ' ' },
					{
						value: 'The following are the inputs that must be fulfilled.',
					},
					{ value: 'Festive Black Box x 198', color: '8b8989' },
					{ value: ' ' },
					{
						value: 'You will receive all of the following outputs once all of the inputs are fulfilled.',
					},
					{ value: "Collector's Festive Black Box", color: '8b8989' },
					{ value: ' ' },
					{
						value: 'This is a limited use item. Uses: 1',
						color: '00a000',
						app_data: { limited: 1 },
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=20007&lang=en_US',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
					},
					{
						internal_name: 'TF_ItemDynamicRecipeTool',
						name: 'Recipe',
						category: 'Type',
						category_name: 'Type',
					},
				],
				app_data: { quantity: '1', def_index: '20007', quality: '6' },
			},
			false,
			true
		);

		assert.deepEqual(econItem, {
			name: 'Chemistry Set',
			fullName: "Collector's Bat Chemistry Set",
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIYwkCSQn3uyxKh8bZBvuYN-wBid0wq8hXjW49lVl_NrC2ZjFjJlPHV6FcDPRj8Am1Cn5i6pE3DIfuoOxReV_x9NyRdNFoUKY/',
			id: undefined,
			tradable: true,
			craftable: true,
			quality: 'Unique',
			output: 'Bat',
			outputQuality: "Collector's",
			defindex: 20005,
			outputDefindex: 0,
			classes: [],
			type: 'TF_ItemDynamicRecipeTool',
			parts: [],
			spells: [],
			marketable: true,
			commodity: false,
			level: 5,
		});
	});

	it('Case #16 - bat', () => {
		class MockSchema extends Schema {
			getDefindex() {
				return 0;
			}
		}

		const format = createFormat(new MockSchema());
		const econItem = format.parseEconItem(
			{
				appid: '440',
				classid: '171635229',
				instanceid: '0',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwUQSSTuuSpEjYbiXaHaCuVSyI9l4MQCjjJvk1IrYbTjMmM2cFyRAPYICqI5pFruWX8wptdtU1jiacVz',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwUQSSTuuSpEjYbiXaHaCuVSyI9l4MQCjjJvk1IrYbTjMmM2cFyRAPYICqI5pFruWX8wptdtU1jiacVz',
				icon_drag_url: '',
				name: 'Bat',
				market_hash_name: 'Bat',
				market_name: 'Bat',
				name_color: '7D6D00',
				background_color: '3C352E',
				type: 'Level 1 Bat',
				tradable: 1,
				marketable: 0,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [{ value: "''lol''" }],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=190&lang=en_US',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
					},
					{
						internal_name: 'melee',
						name: 'Melee weapon',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Scout',
						name: 'Scout',
						category: 'Class',
						category_name: 'Class',
					},
				],
				app_data: { def_index: '0', quality: '6' },
			},
			false,
			true
		);

		assert.deepEqual(econItem, {
			name: 'Bat',
			fullName: 'Bat',
			defindex: 0,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwUQSSTuuSpEjYbiXaHaCuVSyI9l4MQCjjJvk1IrYbTjMmM2cFyRAPYICqI5pFruWX8wptdtU1jiacVz/',
			id: undefined,
			tradable: true,
			craftable: true,
			quality: 'Unique',
			classes: [],
			type: 'melee',
			parts: [],
			spells: [],
			marketable: false,
			commodity: false,
			level: 1,
			classes: ['Scout'],
		});
	});

	it('Case #17 - Strange Normal', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '4676978267',
				instanceid: '4726180620',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEcUxQFVBjpoTpMhcrZAfOZBuMInsgK6ZFH3jMlkAQvYOK0NDQyJVSRV_AOWvRo9125CyFlv5NmAoHj8bgHcQ695oLAMK5sbo8uHAbfiA',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEcUxQFVBjpoTpMhcrZAfOZBuMInsgK6ZFH3jMlkAQvYOK0NDQyJVSRV_AOWvRo9125CyFlv5NmAoHj8bgHcQ695oLAMK5sbo8uHAbfiA',
				icon_drag_url: '',
				name: "''you on BROKE status im on BREAD status''",
				market_hash_name:
					'Strange Professional Killstreak Stickybomb Launcher',
				market_name:
					'Strange Professional Killstreak Stickybomb Launcher',
				name_color: 'B2B2B2',
				background_color: '3C352E',
				type: 'Strange Stickybomb Launcher - Kills: 10527',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				fraudwarnings: [
					'This item has been renamed.\nOriginal name: "Stickybomb Launcher"',
				],
				descriptions: [
					{
						value: '(Damage Dealt: 4195548)',
						color: '756b5e',
					},
					{
						value: '(Medics Killed That Have Full ÜberCharge: 73)',
						color: '756b5e',
					},
					{
						value: '(Dominations: 572)',
						color: '756b5e',
					},
					{
						value: 'Killstreaker: Flames',
						color: '7ea9d1',
					},
					{
						value: 'Sheen: Manndarin',
						color: '7ea9d1',
					},
					{
						value: 'Killstreaks Active',
						color: '7ea9d1',
					},
					{
						value: 'Alt-Fire: Detonate all stickybombs',
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=207&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D14747044437363047765',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D14747044437363047765',
					},
				],
				tags: [
					{
						internal_name: 'Normal',
						name: 'Normal',
						category: 'Quality',
						color: 'B2B2B2',
						category_name: 'Quality',
					},
					{
						internal_name: 'secondary',
						name: 'Secondary weapon',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Demoman',
						name: 'Demoman',
						category: 'Class',
						category_name: 'Class',
					},
				],
				app_data: {
					def_index: '207',
				},
			},
			true,
			true
		);

		assert.deepEqual(econItem, {
			name: 'Stickybomb Launcher',
			fullName: 'Strange Professional Killstreak Stickybomb Launcher',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEcUxQFVBjpoTpMhcrZAfOZBuMInsgK6ZFH3jMlkAQvYOK0NDQyJVSRV_AOWvRo9125CyFlv5NmAoHj8bgHcQ695oLAMK5sbo8uHAbfiA/',
			tradable: true,
			craftable: true,
			elevated: true,
			killstreak: 3,
			quality: 0,
			defindex: 207,
			level: -1,
			classes: ['Demoman'],
			type: 'secondary',
			killstreaker: 'Flames',
			sheen: 'Manndarin',
			parts: [
				'Damage Dealt',
				'Medics Killed That Have Full ÜberCharge',
				'Dominations',
			],
			spells: [],
			marketable: true,
			commodity: false,
		});
	});

	it('Case #18 - Non-Craftable Sticky Jumper', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '9230923',
				instanceid: '11040578',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUxQFVBjpoQdJncX2COCzBOESnN97tJFQ3GIyk1V5MbvmZDE-dgGaUaRcCKw-9gu7XXRgsMI7ANHk8usDLBKv6tUEIS3TYQ',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUxQFVBjpoQdJncX2COCzBOESnN97tJFQ3GIyk1V5MbvmZDE-dgGaUaRcCKw-9gu7XXRgsMI7ANHk8usDLBKv6tUEIS3TYQ',
				icon_drag_url: '',
				name: 'The Sticky Jumper',
				market_hash_name: 'The Sticky Jumper',
				market_name: 'The Sticky Jumper',
				name_color: '7D6D00',
				background_color: '3C352E',
				type: 'Level 1 Stickybomb Launcher',
				tradable: 1,
				marketable: 0,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: '+200% max secondary ammo on wearer',
						color: '7ea9d1',
					},
					{
						value: 'No self inflicted blast damage taken',
						color: '7ea9d1',
					},
					{ value: '-100% damage penalty', color: 'd83636' },
					{ value: 'No random critical hits', color: 'd83636' },
					{ value: '-6 max pipebombs out', color: 'd83636' },
					{
						value: 'Wearer cannot carry the intelligence briefcase or PASS Time JACK',
						color: 'd83636',
					},
					{
						value: 'A special no-damage stickybomb launcher for learning stickybomb jump tricks and patterns.',
					},
					{ value: ' ' },
					{ value: '( Not Usable in Crafting )' },
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=265&lang=en_US',
					},
				],
				tags: [
					{
						internal_name: 'Unique',
						name: 'Unique',
						category: 'Quality',
						color: '7D6D00',
						category_name: 'Quality',
					},
					{
						internal_name: 'secondary',
						name: 'Secondary weapon',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Demoman',
						name: 'Demoman',
						category: 'Class',
						category_name: 'Class',
					},
				],
				app_data: { def_index: '265', quality: '6' },
			},
			true,
			true
		);

		assert.deepEqual(econItem, {
			name: 'Sticky Jumper',
			fullName: 'Non-Craftable Sticky Jumper',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUxQFVBjpoQdJncX2COCzBOESnN97tJFQ3GIyk1V5MbvmZDE-dgGaUaRcCKw-9gu7XXRgsMI7ANHk8usDLBKv6tUEIS3TYQ/',
			tradable: true,
			quality: 6,
			isUniqueHat: true,
			defindex: 265,
			level: 1,
			classes: ['Demoman'],
			type: 'secondary',
			parts: [],
			spells: [],
			marketable: false,
			commodity: false,
			craftable: false,
		});
	});
});

describe('Econ item with true defindex', () => {
	it('Case #1 - skin', () => {
		const econItem = parseEconItem(
			{
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
						value: 'Halloween: Pumpkin Bombs (spell only active during event)',
						color: '7ea9d1',
					},
					{ value: 'Sheen: Agonizing Emerald', color: '7ea9d1' },
					{ value: 'Killstreaks Active', color: '7ea9d1' },
					{
						value: '\nGift from: VLaDOS | S>C.MOON YELLOW BELT',
						color: '7ea9d1',
					},
					{
						value: 'Date Received: Tuesday, September 10, 2019 (9:36:39) GMT',
					},
					{ value: ' ' },
					{ value: ' ' },
					{ value: 'Concealed Killer Collection' },
					{
						value: '    Sand Cannon Rocket Launcher',
						color: 'eb4b4b',
					},
					{ value: '    Red Rock Roscoe Pistol', color: 'eb4b4b' },
					{
						value: '    Psychedelic Slugger Revolver',
						color: 'd32ce6',
					},
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
					{
						value: '    Backwoods Boomstick Shotgun',
						color: '4b69ff',
					},
					{
						value: '    King of the Jungle Minigun',
						color: '4b69ff',
					},
					{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
					{ value: '    Forest Fire Flame Thrower', color: '4b69ff' },
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15006&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D11534198800805877074',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D11534198800805877074',
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
			},
			false,
			true,
			{ useTrueDefindex: true }
		);

		assert.deepEqual(econItem, {
			name: 'Rocket Launcher',
			fullName:
				'Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)',
			id: '8656785508',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffjDz5zdwmTVPAOCsot8Qn-Whg07dR3XcGzuehWe1q65oHFOuQpN4kZGpOECffQZl39vho_1KdefJbbonvq3SvubmwUG028UzYUYzA/',
			tradable: true,
			craftable: true,
			quality: 'Decorated Weapon',
			texture: 'Woodland Warrior',
			wear: 'Field-Tested',
			defindex: 15006,
			festivized: true,
			killstreak: 'Specialized Killstreak',
			classes: ['Soldier'],
			type: 'primary',
			collection: 'Concealed Killer Collection',
			grade: 'Commando',
			parts: [],
			spells: ['Pumpkin Bombs'],
			marketable: true,
			commodity: false,
			sheen: 'Agonizing Emerald',
			level: -1,
		});
	});

	it('Case #2 - skin', () => {
		const econItem = parseEconItem(
			{
				appid: '440',
				classid: '2625497429',
				instanceid: '4048537137',
				icon_url:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYghuZgHPUPUOCacF4w3tG3J86sI7V47mp-JTLQu-vNTGYbh_MNgYHMeFXPHVY139uEk9g_VbK52LqTSvg3pcnpTOhA',
				icon_url_large:
					'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYghuZgHPUPUOCacF4w3tG3J86sI7V47mp-JTLQu-vNTGYbh_MNgYHMeFXPHVY139uEk9g_VbK52LqTSvg3pcnpTOhA',
				icon_drag_url: '',
				name: 'Shell Shocker Rocket Launcher',
				market_hash_name:
					'Strange Specialized Killstreak Shell Shocker Rocket Launcher (Battle Scarred)',
				market_name:
					'Strange Specialized Killstreak Shell Shocker Rocket Launcher (Battle Scarred)',
				name_color: 'CF6A32',
				background_color: '3C352E',
				type: '',
				tradable: 1,
				marketable: 1,
				commodity: 0,
				market_tradable_restriction: '7',
				market_marketable_restriction: '0',
				descriptions: [
					{
						value: 'Assassin Grade Rocket Launcher (Battle Scarred)',
						color: 'd32ce6',
					},
					{
						value: 'Strange Stat Clock Attached',
						color: 'CF6A32',
					},
					{
						value: '     Kills: 5121',
						color: '756b5e',
					},
					{
						value: '     Pyros Killed: 712',
						color: '756b5e',
					},
					{
						value: 'Team Colored Decorated Weapon',
					},
					{
						value: 'Halloween: Pumpkin Bombs (spell only active during event)',
						color: '7ea9d1',
					},
					{
						value: 'Sheen: Mean Green',
						color: '7ea9d1',
					},
					{
						value: 'Killstreaks Active',
						color: '7ea9d1',
					},
					{
						value: ' ',
					},
					{
						value: ' ',
					},
					{
						value: 'Powerhouse Collection',
					},
					{
						value: '    Liquid Asset Stickybomb Launcher',
						color: 'eb4b4b',
						app_data: {
							def_index: '15045',
						},
					},
					{
						value: '    Thunderbolt Sniper Rifle',
						color: 'eb4b4b',
						app_data: {
							def_index: '15059',
						},
					},
					{
						value: '    Current Event Scattergun',
						color: 'd32ce6',
						app_data: {
							def_index: '15053',
						},
					},
					{
						value: '    Pink Elephant Stickybomb Launcher',
						color: 'd32ce6',
						app_data: {
							def_index: '15048',
						},
					},
					{
						value: '✔ Shell Shocker Rocket Launcher',
						color: 'd32ce6',
						app_data: {
							def_index: '15052',
						},
					},
					{
						value: '    Flash Fryer Flame Thrower',
						color: '8847ff',
						app_data: {
							def_index: '15049',
						},
					},
					{
						value: '    Spark of Life Medi Gun',
						color: '8847ff',
						app_data: {
							def_index: '15050',
						},
					},
					{
						value: '    Dead Reckoner Revolver',
						color: '8847ff',
						app_data: {
							def_index: '15051',
						},
					},
					{
						value: '    Black Dahlia Pistol',
						color: '8847ff',
						app_data: {
							def_index: '15046',
						},
					},
					{
						value: '    Sandstone Special Pistol',
						color: '8847ff',
						app_data: {
							def_index: '15056',
						},
					},
					{
						value: '    Brick House Minigun',
						color: '4b69ff',
						app_data: {
							def_index: '15055',
						},
					},
					{
						value: '    Aqua Marine Rocket Launcher',
						color: '4b69ff',
						app_data: {
							def_index: '15057',
						},
					},
					{
						value: '    Low Profile SMG',
						color: '4b69ff',
						app_data: {
							def_index: '15058',
						},
					},
					{
						value: '    Turbine Torcher Flame Thrower',
						color: '4b69ff',
						app_data: {
							def_index: '15054',
						},
					},
					{
						value: '    Lightning Rod Shotgun',
						color: '4b69ff',
						app_data: {
							def_index: '15047',
						},
					},
				],
				actions: [
					{
						name: 'Item Wiki Page...',
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15052&lang=en_US',
					},
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D7998211058114246468',
					},
				],
				market_actions: [
					{
						name: 'Inspect in Game...',
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D7998211058114246468',
					},
				],
				tags: [
					{
						internal_name: 'strange',
						name: 'Strange',
						category: 'Quality',
						color: 'CF6A32',
						category_name: 'Quality',
					},
					{
						internal_name: 'primary',
						name: 'Primary weapon',
						category: 'Type',
						category_name: 'Type',
					},
					{
						internal_name: 'Soldier',
						name: 'Soldier',
						category: 'Class',
						category_name: 'Class',
					},
					{
						internal_name: 'Rarity_Legendary',
						name: 'Assassin',
						category: 'Rarity',
						color: 'd32ce6',
						category_name: 'Grade',
					},
					{
						internal_name: 'Powerhouse_collection',
						name: 'Powerhouse Collection',
						category: 'Collection',
						category_name: 'Collection',
					},
					{
						internal_name: 'TFUI_InvTooltip_BattleScared',
						name: 'Battle Scarred',
						category: 'Exterior',
						category_name: 'Exterior',
					},
				],
				app_data: {
					def_index: '15052',
					quality: '11',
				},
			},
			false,
			true,
			{ useTrueDefindex: true }
		);

		assert.deepEqual(econItem, {
			name: 'Rocket Launcher',
			fullName:
				'Strange Specialized Killstreak Shell Shocker Rocket Launcher (Battle Scarred)',
			id: undefined,
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYghuZgHPUPUOCacF4w3tG3J86sI7V47mp-JTLQu-vNTGYbh_MNgYHMeFXPHVY139uEk9g_VbK52LqTSvg3pcnpTOhA/',
			tradable: true,
			craftable: true,
			quality: 'Strange',
			texture: 'Shell Shocker',
			wear: 'Battle Scarred',
			killstreak: 'Specialized Killstreak',
			classes: ['Soldier'],
			type: 'primary',
			collection: 'Powerhouse Collection',
			grade: 'Assassin',
			parts: ['Pyros Killed'],
			spells: ['Pumpkin Bombs'],
			marketable: true,
			commodity: false,
			defindex: 15052,
			sheen: 'Mean Green',
			level: -1,
		});
	});

	it('Case #3 - bad wiki link', () => {
		const econItem = parseEconItem(
			{
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
						value: 'Afterburn reduces Medi Gun healing and resist shield effects.\nAlt-Fire: Release a blast of air that pushes enemies and projectiles and extinguishes teammates that are on fire.',
					},
					{ value: ' ' },
					{ value: ' ' },
					{ value: 'Concealed Killer Collection' },
					{
						value: '    Sand Cannon Rocket Launcher',
						color: 'eb4b4b',
					},
					{ value: '    Red Rock Roscoe Pistol', color: 'eb4b4b' },
					{
						value: '    Psychedelic Slugger Revolver',
						color: 'd32ce6',
					},
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
					{
						value: '    Backwoods Boomstick Shotgun',
						color: '4b69ff',
					},
					{
						value: '    King of the Jungle Minigun',
						color: '4b69ff',
					},
					{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
					{ value: '★ Forest Fire Flame Thrower', color: '4b69ff' },
				],
				tradable: 1,
				actions: [
					{
						link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15005&lang=en_US',
						name: 'Item Wiki Page...',
					},
					{
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D6922402693932635553',
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
						link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D6922402693932635553',
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
			},
			true,
			true,
			{ useTrueDefindex: true }
		);

		assert.deepEqual(econItem, {
			name: 'Flame Thrower',
			fullName:
				'Cool Festivized Specialized Killstreak Forest Fire Flame Thrower (Minimal Wear)',
			id: '8407830034',
			img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffsDz5zdwmTVPAOCcot8Qn-Wxg07dR3XcGzub5ffwvmttSXYrAlY9xFTMaCUvbXNQz_6EkwiPRYKJaIon-9jHjrOWoUG0280KDki-w/',
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
			commodity: false,
			sheen: 'Agonizing Emerald',
			level: -1,
			defindex: 15005,
		});
	});

	describe('Retrieves crate number', () => {
		it('Retrieves crate number correctly for crate', () => {
			const econItem = parseEconItem(
				{
					appid: '440',
					classid: '4657007866',
					instanceid: '0',
					icon_url:
						'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYQ4CThbjqwcR2Jq3MvGNG-U_l9sn4pUbjjc5xAUjMOfnaGNiKwKVA_IIBPRr8lm1XHEzvMY2DIG3rr9eewnns5yGbeenE9nBew',
					icon_url_large:
						'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYQ4CThbjqwcR2Jq3MvGNG-U_l9sn4pUbjjc5xAUjMOfnaGNiKwKVA_IIBPRr8lm1XHEzvMY2DIG3rr9eewnns5yGbeenE9nBew',
					icon_drag_url: '',
					name: 'Winter 2021 Cosmetic Case',
					market_hash_name: 'Winter 2021 Cosmetic Case',
					market_name: 'Winter 2021 Cosmetic Case',
					name_color: '7D6D00',
					background_color: '3C352E',
					type: '',
					tradable: 1,
					marketable: 1,
					commodity: 1,
					market_tradable_restriction: '7',
					market_marketable_restriction: '0',
					descriptions: [
						{
							value: 'This case is locked and requires a\nWinter 2021 Cosmetic Key to open.\n\nContains a community made item\nfrom the Winter 2021 Cosmetic Collection.',
						},
						{ value: ' ' },
						{
							value: 'Contents may be Strange or an Unusual Winter 2021 Hat',
							color: '7ea9d1',
						},
						{ value: ' ' },
						{ value: ' ' },
						{ value: 'Winter 2021 Cosmetics Collection' },
						{
							value: '    Oh Deer!',
							color: 'eb4b4b',
							app_data: { def_index: '31245' },
						},
						{
							value: '    Jolly Jester',
							color: 'd32ce6',
							app_data: { def_index: '31243' },
						},
						{
							value: '    Merry Cone',
							color: 'd32ce6',
							app_data: { def_index: '31247' },
						},
						{
							value: '    Hat Chocolate',
							color: 'd32ce6',
							app_data: { def_index: '31259' },
						},
						{
							value: '    Elf-Made Bandanna',
							color: '8847ff',
							app_data: { def_index: '31260' },
						},
						{
							value: '    Seasonal Spring',
							color: '8847ff',
							app_data: { def_index: '31244' },
						},
						{
							value: '    Elf Ignition',
							color: '8847ff',
							app_data: { def_index: '31253' },
						},
						{
							value: '    Train Of Thought',
							color: '8847ff',
							app_data: { def_index: '31254' },
						},
						{
							value: '    Seasonal Employee',
							color: '8847ff',
							app_data: { def_index: '31258' },
						},
						{
							value: '    Reindoonihorns',
							color: '8847ff',
							app_data: { def_index: '31249' },
						},
						{
							value: '    Festive Cover-Up',
							color: '4b69ff',
							app_data: { def_index: '31257' },
						},
						{
							value: '    El Fiestibrero',
							color: '4b69ff',
							app_data: { def_index: '31241' },
						},
						{
							value: '    Ominous Offering',
							color: '4b69ff',
							app_data: { def_index: '31251' },
						},
						{
							value: '    Brain Cane',
							color: '4b69ff',
							app_data: { def_index: '31248' },
						},
						{
							value: '    Cozy Catchers',
							color: '4b69ff',
							app_data: { def_index: '31250' },
						},
						{
							value: '    The Giftcrafter',
							color: '4b69ff',
							app_data: { def_index: '31246' },
						},
						{
							value: '    Festive Frames',
							color: '4b69ff',
							app_data: { def_index: '31252' },
						},
						{
							value: '    Mooshanka',
							color: '4b69ff',
							app_data: { def_index: '31255' },
						},
						{
							value: '    Elf Defense',
							color: '4b69ff',
							app_data: { def_index: '31256' },
						},
						{
							value: '    Gnome Dome',
							color: '4b69ff',
							app_data: { def_index: '31242' },
						},
						{ value: ' ' },
						{ value: 'Case Exclusive Bonus Item(s):' },
						{
							value: 'Festivizer',
							color: '6F6A63',
							app_data: { def_index: '5839' },
						},
						{ value: ' ' },
						{ value: 'Case Global Unusual Effect(s)' },
						{
							value: '★ Unusual Effect: Green Confetti',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Purple Confetti',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Haunted Ghosts',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Green Energy',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Purple Energy',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Circling TF Logo',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Massed Flies',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Burning Flames',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Scorching Flames',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Searing Plasma',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Vivid Plasma',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Sunbeams',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Circling Peace Sign',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Circling Heart',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Stormy Storm',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Blizzardy Storm',
							color: 'ffd700',
						},
						{
							value: "★ Unusual Effect: Nuts n' Bolts",
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Orbiting Planets',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Orbiting Fire',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Bubbling',
							color: 'ffd700',
						},
						{ value: '★ Unusual Effect: Smoking', color: 'ffd700' },
						{
							value: '★ Unusual Effect: Steaming',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Kill-a-Watt',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Terror-Watt',
							color: 'ffd700',
						},
						{ value: '★ Unusual Effect: Cloud 9', color: 'ffd700' },
						{
							value: '★ Unusual Effect: Aces High',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Dead Presidents',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Miami Nights',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Disco Beat Down',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Smissmas Tree',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Smissmas Tree',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Smissmas Tree',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Hospitable Festivity',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Condescending Embrace',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Condescending Embrace',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Sparkling Spruce',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Glittering Juniper',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Prismatic Pine',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Spiraling Lights',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Spiraling Lights',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Twisting Lights',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Stardust Pathway',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Flurry Rush',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Spark of Smissmas',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Polar Forecast',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Polar Forecast',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Polar Forecast',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Shining Stag',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Holiday Horns',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Ardent Antlers',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Festive Lights',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Festive Lights',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Festive Lights',
							color: 'ffd700',
						},
						{ value: ' ' },
						{ value: 'Case Global Bonus Item(s)' },
						{
							value: 'Paint Cans!\nTaunt Unusualifiers!\nMvM Tickets!\nAnd TF2 Tools!',
						},
						{
							value: 'Inspect for full list of unusual effects and more details',
						},
					],
					actions: [
						{
							name: 'Item Wiki Page...',
							link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=5935&lang=en_US',
						},
						{
							name: 'Inspect in Game...',
							link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D2496517253638132563',
						},
					],
					market_actions: [
						{
							name: 'Inspect in Game...',
							link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D2496517253638132563',
						},
					],
					tags: [
						{
							internal_name: 'Unique',
							name: 'Unique',
							category: 'Quality',
							color: '7D6D00',
							category_name: 'Quality',
						},
						{
							internal_name: 'Supply Crate',
							name: 'Crate',
							category: 'Type',
							category_name: 'Type',
						},
						{
							internal_name: 'Winter2021Cosmetics_collection',
							name: 'Winter 2021 Cosmetics Collection',
							category: 'Collection',
							category_name: 'Collection',
						},
					],
				},
				false,
				false,
				{ retrieveCrateNumber: true }
			);

			assert.deepEqual(econItem, {
				classes: [],
				commodity: true,
				craftable: true,
				fullName: 'Winter 2021 Cosmetic Case #135',
				id: undefined,
				img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYQ4CThbjqwcR2Jq3MvGNG-U_l9sn4pUbjjc5xAUjMOfnaGNiKwKVA_IIBPRr8lm1XHEzvMY2DIG3rr9eewnns5yGbeenE9nBew/',
				name: 'Winter 2021 Cosmetic Case',
				parts: [],
				quality: 'Unique',
				spells: [],
				tradable: true,
				type: 'Supply Crate',
				level: -1,
				marketable: true,
				collection: 'Winter 2021 Cosmetics Collection',
				itemNumber: {
					type: 'crate',
					value: 135,
				},
			});
		});

		it('Retrieves crate number for non-crate item', () => {
			const econItem = parseEconItem(
				{
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
							value: 'Afterburn reduces Medi Gun healing and resist shield effects.\nAlt-Fire: Release a blast of air that pushes enemies and projectiles and extinguishes teammates that are on fire.',
						},
						{ value: ' ' },
						{ value: ' ' },
						{ value: 'Concealed Killer Collection' },
						{
							value: '    Sand Cannon Rocket Launcher',
							color: 'eb4b4b',
						},
						{ value: '    Red Rock Roscoe Pistol', color: 'eb4b4b' },
						{
							value: '    Psychedelic Slugger Revolver',
							color: 'd32ce6',
						},
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
						{
							value: '    Backwoods Boomstick Shotgun',
							color: '4b69ff',
						},
						{
							value: '    King of the Jungle Minigun',
							color: '4b69ff',
						},
						{ value: '    Masked Mender Medi Gun', color: '4b69ff' },
						{ value: '★ Forest Fire Flame Thrower', color: '4b69ff' },
					],
					tradable: 1,
					actions: [
						{
							link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=15005&lang=en_US',
							name: 'Item Wiki Page...',
						},
						{
							link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D6922402693932635553',
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
							link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D6922402693932635553',
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
				},
				true,
				true,
				{ retrieveCrateNumber: false }
			);
	
			assert.deepEqual(econItem, {
				name: 'Flame Thrower',
				fullName:
					'Cool Festivized Specialized Killstreak Forest Fire Flame Thrower (Minimal Wear)',
				id: '8407830034',
				img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffsDz5zdwmTVPAOCcot8Qn-Wxg07dR3XcGzub5ffwvmttSXYrAlY9xFTMaCUvbXNQz_6EkwiPRYKJaIon-9jHjrOWoUG0280KDki-w/',
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
				commodity: false,
				sheen: 'Agonizing Emerald',
				level: -1,
				defindex: 208,
			});
		});

		it('Retrieves crate number correctly for crate', () => {
			const econItem = parseEconItem(
				{
					appid: '440',
					classid: '4657007866',
					instanceid: '0',
					icon_url:
						'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYQ4CThbjqwcR2Jq3MvGNG-U_l9sn4pUbjjc5xAUjMOfnaGNiKwKVA_IIBPRr8lm1XHEzvMY2DIG3rr9eewnns5yGbeenE9nBew',
					icon_url_large:
						'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYQ4CThbjqwcR2Jq3MvGNG-U_l9sn4pUbjjc5xAUjMOfnaGNiKwKVA_IIBPRr8lm1XHEzvMY2DIG3rr9eewnns5yGbeenE9nBew',
					icon_drag_url: '',
					name: 'Winter 2021 Cosmetic Case',
					market_hash_name: 'Winter 2021 Cosmetic Case',
					market_name: 'Winter 2021 Cosmetic Case',
					name_color: '7D6D00',
					background_color: '3C352E',
					type: '',
					tradable: 1,
					marketable: 1,
					commodity: 1,
					market_tradable_restriction: '7',
					market_marketable_restriction: '0',
					descriptions: [
						{
							value: 'This case is locked and requires a\nWinter 2021 Cosmetic Key to open.\n\nContains a community made item\nfrom the Winter 2021 Cosmetic Collection.',
						},
						{ value: ' ' },
						{
							value: 'Contents may be Strange or an Unusual Winter 2021 Hat',
							color: '7ea9d1',
						},
						{ value: ' ' },
						{ value: ' ' },
						{ value: 'Winter 2021 Cosmetics Collection' },
						{
							value: '    Oh Deer!',
							color: 'eb4b4b',
							app_data: { def_index: '31245' },
						},
						{
							value: '    Jolly Jester',
							color: 'd32ce6',
							app_data: { def_index: '31243' },
						},
						{
							value: '    Merry Cone',
							color: 'd32ce6',
							app_data: { def_index: '31247' },
						},
						{
							value: '    Hat Chocolate',
							color: 'd32ce6',
							app_data: { def_index: '31259' },
						},
						{
							value: '    Elf-Made Bandanna',
							color: '8847ff',
							app_data: { def_index: '31260' },
						},
						{
							value: '    Seasonal Spring',
							color: '8847ff',
							app_data: { def_index: '31244' },
						},
						{
							value: '    Elf Ignition',
							color: '8847ff',
							app_data: { def_index: '31253' },
						},
						{
							value: '    Train Of Thought',
							color: '8847ff',
							app_data: { def_index: '31254' },
						},
						{
							value: '    Seasonal Employee',
							color: '8847ff',
							app_data: { def_index: '31258' },
						},
						{
							value: '    Reindoonihorns',
							color: '8847ff',
							app_data: { def_index: '31249' },
						},
						{
							value: '    Festive Cover-Up',
							color: '4b69ff',
							app_data: { def_index: '31257' },
						},
						{
							value: '    El Fiestibrero',
							color: '4b69ff',
							app_data: { def_index: '31241' },
						},
						{
							value: '    Ominous Offering',
							color: '4b69ff',
							app_data: { def_index: '31251' },
						},
						{
							value: '    Brain Cane',
							color: '4b69ff',
							app_data: { def_index: '31248' },
						},
						{
							value: '    Cozy Catchers',
							color: '4b69ff',
							app_data: { def_index: '31250' },
						},
						{
							value: '    The Giftcrafter',
							color: '4b69ff',
							app_data: { def_index: '31246' },
						},
						{
							value: '    Festive Frames',
							color: '4b69ff',
							app_data: { def_index: '31252' },
						},
						{
							value: '    Mooshanka',
							color: '4b69ff',
							app_data: { def_index: '31255' },
						},
						{
							value: '    Elf Defense',
							color: '4b69ff',
							app_data: { def_index: '31256' },
						},
						{
							value: '    Gnome Dome',
							color: '4b69ff',
							app_data: { def_index: '31242' },
						},
						{ value: ' ' },
						{ value: 'Case Exclusive Bonus Item(s):' },
						{
							value: 'Festivizer',
							color: '6F6A63',
							app_data: { def_index: '5839' },
						},
						{ value: ' ' },
						{ value: 'Case Global Unusual Effect(s)' },
						{
							value: '★ Unusual Effect: Green Confetti',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Purple Confetti',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Haunted Ghosts',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Green Energy',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Purple Energy',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Circling TF Logo',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Massed Flies',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Burning Flames',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Scorching Flames',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Searing Plasma',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Vivid Plasma',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Sunbeams',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Circling Peace Sign',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Circling Heart',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Stormy Storm',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Blizzardy Storm',
							color: 'ffd700',
						},
						{
							value: "★ Unusual Effect: Nuts n' Bolts",
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Orbiting Planets',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Orbiting Fire',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Bubbling',
							color: 'ffd700',
						},
						{ value: '★ Unusual Effect: Smoking', color: 'ffd700' },
						{
							value: '★ Unusual Effect: Steaming',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Kill-a-Watt',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Terror-Watt',
							color: 'ffd700',
						},
						{ value: '★ Unusual Effect: Cloud 9', color: 'ffd700' },
						{
							value: '★ Unusual Effect: Aces High',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Dead Presidents',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Miami Nights',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Disco Beat Down',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Smissmas Tree',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Smissmas Tree',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Smissmas Tree',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Hospitable Festivity',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Condescending Embrace',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Condescending Embrace',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Sparkling Spruce',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Glittering Juniper',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Prismatic Pine',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Spiraling Lights',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Spiraling Lights',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Twisting Lights',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Stardust Pathway',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Flurry Rush',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Spark of Smissmas',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Polar Forecast',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Polar Forecast',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Polar Forecast',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Shining Stag',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Holiday Horns',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Ardent Antlers',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Festive Lights',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Festive Lights',
							color: 'ffd700',
						},
						{
							value: '★ Unusual Effect: Festive Lights',
							color: 'ffd700',
						},
						{ value: ' ' },
						{ value: 'Case Global Bonus Item(s)' },
						{
							value: 'Paint Cans!\nTaunt Unusualifiers!\nMvM Tickets!\nAnd TF2 Tools!',
						},
						{
							value: 'Inspect for full list of unusual effects and more details',
						},
					],
					actions: [
						{
							name: 'Item Wiki Page...',
							link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=5935&lang=en_US',
						},
						{
							name: 'Inspect in Game...',
							link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D2496517253638132563',
						},
					],
					market_actions: [
						{
							name: 'Inspect in Game...',
							link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D2496517253638132563',
						},
					],
					tags: [
						{
							internal_name: 'Unique',
							name: 'Unique',
							category: 'Quality',
							color: '7D6D00',
							category_name: 'Quality',
						},
						{
							internal_name: 'Supply Crate',
							name: 'Crate',
							category: 'Type',
							category_name: 'Type',
						},
						{
							internal_name: 'Winter2021Cosmetics_collection',
							name: 'Winter 2021 Cosmetics Collection',
							category: 'Collection',
							category_name: 'Collection',
						},
					],
				},
				false,
				false,
				{ retrieveCrateNumber: false }
			);

			assert.deepEqual(econItem, {
				classes: [],
				commodity: true,
				craftable: true,
				fullName: 'Winter 2021 Cosmetic Case',
				id: undefined,
				img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEYYQ4CThbjqwcR2Jq3MvGNG-U_l9sn4pUbjjc5xAUjMOfnaGNiKwKVA_IIBPRr8lm1XHEzvMY2DIG3rr9eewnns5yGbeenE9nBew/',
				name: 'Winter 2021 Cosmetic Case',
				parts: [],
				quality: 'Unique',
				spells: [],
				tradable: true,
				type: 'Supply Crate',
				level: -1,
				marketable: true,
				collection: 'Winter 2021 Cosmetics Collection',
			});
		});

		it('Retrieves crate number for munition crate that has it in name', () => {
			const econItem = parseEconItem(
				{
					appid: '440',
					classid: '1848848533',
					instanceid: '4005345694',
					icon_url:
						'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIfgYFWCTxrCpChs_jMuWJCfAPlckK6ZFH3jMlx1kpYbHgNTYyKgGUVPdbCfM_rAm0WiRguJYxBtGzruxReQ3ntoLBZa5sbo_yPNmUMw',
					icon_url_large:
						'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIfgYFWCTxrCpChs_jMuWJCfAPlckK6ZFH3jMlx1kpYbHgNTYyKgGUVPdbCfM_rAm0WiRguJYxBtGzruxReQ3ntoLBZa5sbo_yPNmUMw',
					icon_drag_url: '',
					name: 'Mann Co. Supply Munition Series #103',
					market_hash_name: 'Mann Co. Supply Munition #103',
					market_name: 'Mann Co. Supply Munition #103',
					name_color: '7D6D00',
					background_color: '3C352E',
					type: 'Level 20 Supply Crate',
					tradable: 1,
					marketable: 1,
					commodity: 1,
					market_tradable_restriction: '7',
					market_marketable_restriction: '0',
					descriptions: [
						{ value: 'Crate Series #103', color: '7ea9d1' },
						{
							value: 'You need a Mann Co. Supply Crate Key to open this.\nYou can pick one up at the Mann Co. Store.',
						},
						{ value: '\nGift from: MothmanOfficial', color: '7ea9d1' },
						{
							value: 'Date Received: Sunday, September 20, 2020 (13:59:02) GMT',
						},
						{ value: ' ' },
						{
							value: 'This crate contains one of the following items.\nWeapons will be Strange quality.',
						},
						{
							value: '    The Iron Bomber',
							color: '6F6A63',
							app_data: { def_index: '1151' },
						},
						{
							value: '    The Panic Attack',
							color: '6F6A63',
							app_data: { def_index: '1153' },
						},
						{
							value: '    The Back Scatter',
							color: '6F6A63',
							app_data: { def_index: '1103' },
						},
						{
							value: '    The Quickiebomb Launcher',
							color: '6F6A63',
							app_data: { def_index: '1150' },
						},
						{
							value: '    The Ambassador',
							color: '6F6A63',
							app_data: { def_index: '61' },
						},
						{
							value: '    The Reserve Shooter',
							color: '6F6A63',
							app_data: { def_index: '415' },
						},
						{
							value: '    The Degreaser',
							color: '6F6A63',
							app_data: { def_index: '215' },
						},
						{
							value: '    The Powerjack',
							color: '6F6A63',
							app_data: { def_index: '214' },
						},
						{
							value: '    Natascha',
							color: '6F6A63',
							app_data: { def_index: '41' },
						},
						{
							value: '    The Sandvich',
							color: '6F6A63',
							app_data: { def_index: '42' },
						},
						{
							value: '    Strange Part: Damage Dealt',
							color: '6F6A63',
							app_data: { def_index: '6056' },
						},
						{
							value: '    Strange Part: Allied Healing Done',
							color: '6F6A63',
							app_data: { def_index: '6058' },
						},
						{
							value: '    Strange Part: Critical Kills',
							color: '6F6A63',
							app_data: { def_index: '6021' },
						},
						{
							value: '    Strange Part: Pyros Killed',
							color: '6F6A63',
							app_data: { def_index: '6006' },
						},
						{
							value: '    Strange Part: Heavies Killed',
							color: '6F6A63',
							app_data: { def_index: '6000' },
						},
						{
							value: 'or an Exceedingly Rare Special Item!',
							color: '7ea9d1',
						},
					],
					actions: [
						{
							name: 'Item Wiki Page...',
							link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=5859&lang=en_US',
						},
					],
					tags: [
						{
							internal_name: 'Unique',
							name: 'Unique',
							category: 'Quality',
							color: '7D6D00',
							category_name: 'Quality',
						},
						{
							internal_name: 'Supply Crate',
							name: 'Crate',
							category: 'Type',
							category_name: 'Type',
						},
					],
					app_data: { def_index: '5859', quality: '6' },
				},
				false,
				false,
				{
					retrieveCrateNumber: true,
				}
			);
	
			assert.deepEqual(econItem, {
				classes: [],
				commodity: true,
				craftable: true,
				fullName: 'Mann Co. Supply Munition #103',
				itemNumber: {
					value: 103,
					type: 'crate',
				},
				id: undefined,
				img: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIfgYFWCTxrCpChs_jMuWJCfAPlckK6ZFH3jMlx1kpYbHgNTYyKgGUVPdbCfM_rAm0WiRguJYxBtGzruxReQ3ntoLBZa5sbo_yPNmUMw/',
				name: 'Mann Co. Supply Munition',
				parts: [],
				quality: 'Unique',
				spells: [],
				tradable: true,
				type: 'Supply Crate',
				level: 20,
				marketable: true,
			});
		});
	});
});
