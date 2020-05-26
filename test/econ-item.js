const { parseEconItem } = require('../');
const assert = require('assert');

describe('Get exact output', () => {
	it('Case #1', () => {
		const econItem = parseEconItem({
			"appid": 440,
			"contextid": "2",
			"assetid": "8656785508",
			"classid": "3543846179",
			"instanceid": "3516082756",
			"amount": "1",
			"currency": 0,
			"background_color": "3C352E",
			"icon_url": "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffjDz5zdwmTVPAOCsot8Qn-Whg07dR3XcGzuehWe1q65oHFOuQpN4kZGpOECffQZl39vho_1KdefJbbonvq3SvubmwUG028UzYUYzA",
			"icon_url_large": "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffjDz5zdwmTVPAOCsot8Qn-Whg07dR3XcGzuehWe1q65oHFOuQpN4kZGpOECffQZl39vho_1KdefJbbonvq3SvubmwUG028UzYUYzA",
			"descriptions": [
				{
					"value": "Commando Grade Rocket Launcher (Field-Tested)",
					"color": "8847ff"
				},
				{
					"value": "Festivized",
					"color": "ffd700"
				},
				{
					"value": "Halloween: Pumpkin Bombs (spell only active during event)",
					"color": "7ea9d1"
				},
				{
					"value": "Sheen: Agonizing Emerald",
					"color": "7ea9d1"
				},
				{
					"value": "Killstreaks Active",
					"color": "7ea9d1"
				},
				{
					"value": "\nGift from: VLaDOS | S>C.MOON YELLOW BELT",
					"color": "7ea9d1"
				},
				{
					"value": "Date Received: Tuesday, September 10, 2019 (9:36:39) GMT"
				},
				{
					"value": " "
				},
				{
					"value": " "
				},
				{
					"value": "Concealed Killer Collection"
				},
				{
					"value": "    Sand Cannon Rocket Launcher",
					"color": "eb4b4b"
				},
				{
					"value": "    Red Rock Roscoe Pistol",
					"color": "eb4b4b"
				},
				{
					"value": "    Psychedelic Slugger Revolver",
					"color": "d32ce6"
				},
				{
					"value": "    Purple Range Sniper Rifle",
					"color": "d32ce6"
				},
				{
					"value": "    Sudden Flurry Stickybomb Launcher",
					"color": "d32ce6"
				},
				{
					"value": "    Night Terror Scattergun",
					"color": "8847ff"
				},
				{
					"value": "    Carpet Bomber Stickybomb Launcher",
					"color": "8847ff"
				},
				{
					"value": "✔ Woodland Warrior Rocket Launcher",
					"color": "8847ff"
				},
				{
					"value": "    Wrapped Reviver Medi Gun",
					"color": "8847ff"
				},
				{
					"value": "    Night Owl Sniper Rifle",
					"color": "4b69ff"
				},
				{
					"value": "    Woodsy Widowmaker SMG",
					"color": "4b69ff"
				},
				{
					"value": "    Backwoods Boomstick Shotgun",
					"color": "4b69ff"
				},
				{
					"value": "    King of the Jungle Minigun",
					"color": "4b69ff"
				},
				{
					"value": "    Masked Mender Medi Gun",
					"color": "4b69ff"
				},
				{
					"value": "    Forest Fire Flame Thrower",
					"color": "4b69ff"
				}
			],
			"tradable": 1,
			"actions": [
				{
					"link": "http://wiki.teamfortress.com/scripts/itemredirect.php?id=15006&lang=en_US",
					"name": "Item Wiki Page..."
				},
				{
					"link": "steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D11534198800805877074",
					"name": "Inspect in Game..."
				}
			],
			"fraudwarnings": [
				"This item has been renamed.\nOriginal name: \"Rocket Launcher\""
			],
			"name": "''post live spell rocket louncher !!!!!!!''",
			"name_color": "FAFAFA",
			"type": "",
			"market_name": "Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)",
			"market_hash_name": "Festivized Specialized Killstreak Woodland Warrior Rocket Launcher (Field-Tested)",
			"market_actions": [
				{
					"link": "steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D11534198800805877074",
					"name": "Inspect in Game..."
				}
			],
			"commodity": 0,
			"market_tradable_restriction": 7,
			"market_marketable_restriction": 0,
			"marketable": 1,
			"tags": [
				{
					"category": "Quality",
					"internal_name": "paintkitweapon",
					"localized_category_name": "Quality",
					"localized_tag_name": "Decorated Weapon",
					"color": "FAFAFA"
				},
				{
					"category": "Type",
					"internal_name": "primary",
					"localized_category_name": "Type",
					"localized_tag_name": "Primary weapon"
				},
				{
					"category": "Class",
					"internal_name": "Soldier",
					"localized_category_name": "Class",
					"localized_tag_name": "Soldier"
				},
				{
					"category": "Rarity",
					"internal_name": "Rarity_Mythical",
					"localized_category_name": "Grade",
					"localized_tag_name": "Commando",
					"color": "8847ff"
				},
				{
					"category": "Collection",
					"internal_name": "concealedkiller_collection",
					"localized_category_name": "Collection",
					"localized_tag_name": "Concealed Killer Collection"
				},
				{
					"category": "Exterior",
					"internal_name": "TFUI_InvTooltip_FieldTested",
					"localized_category_name": "Exterior",
					"localized_tag_name": "Field-Tested"
				}
			]
		});

		//console.log(econItem);
	})
})