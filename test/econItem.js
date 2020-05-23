const ParsedEcon = require('../src/parseEconItem/ParsedEcon');

const econItem = new ParsedEcon({
	"appid": 440,
	"contextid": "2",
	"assetid": "8504616525",
	"classid": "2706169512",
	"instanceid": "2706169513",
	"amount": "1",
	"currency": 0,
	"background_color": "3C352E",
	"icon_url": "IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTee_lNFZ5nqWSMU5OD2N4NzSYImihXOjLx2Sk5MbUqMcbBnQz4ruyeU3X7ZAjBLjPUCVhuDtwdcSGFqzLKubzWFW3XF7wuRwACfvMHp2FINMuLbEdpgdVa_TK5zhUtTRVxK8NEIwm-mSQWMvM1xiZVZxuWVg",
	"icon_url_large": "IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdEH9myp0erksICfTee_lNFZ5nqWSMU5OD2N4NzSYImihXOjLx2Sk5MbUqMcbBnQz4ruyeU3X7ZAjBLjPUCVhuDtwdcSGFqzLKubzWFW3XF7wuRwACfvMHp2FINMuLbEdpgdVa_TK5zhUtTRVxK8NEIwm-mSQWMvM1xiZVZxuWVg",
	"descriptions": [
		{
			"value": "Style: Montreal Style",
			"color": "756b5e"
		},
		{
			"value": "Paint Color: Indubitably Green",
			"color": "756b5e"
		},
		{
			"value": "Halloween: Putrescent Pigmentation (spell only active during event)",
			"color": "7ea9d1"
		},
		{
			"value": "Halloween: Voices From Below (spell only active during event)",
			"color": "7ea9d1"
		},
		{
			"value": "''About the hats of an experienced player''"
		}
	],
	"tradable": 1,
	"actions": [
		{
			"link": "http://wiki.teamfortress.com/scripts/itemredirect.php?id=984&lang=en_US",
			"name": "Item Wiki Page..."
		},
		{
			"link": "steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D5497426306298256046",
			"name": "Inspect in Game..."
		}
	],
	"fraudwarnings": [
		"This item has been renamed.\nOriginal name: \"Tough Stuff Muffs\""
	],
	"name": "''Hats A+''",
	"name_color": "7D6D00",
	"type": "Level 95 Hat",
	"market_name": "Tough Stuff Muffs",
	"market_hash_name": "Tough Stuff Muffs",
	"market_actions": [
		{
			"link": "steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D5497426306298256046",
			"name": "Inspect in Game..."
		}
	],
	"commodity": 0,
	"market_tradable_restriction": 7,
	"market_marketable_restriction": 0,
	"marketable": 0,
	"tags": [
		{
			"category": "Quality",
			"internal_name": "Unique",
			"localized_category_name": "Quality",
			"localized_tag_name": "Unique",
			"color": "7D6D00"
		},
		{
			"category": "Type",
			"internal_name": "misc",
			"localized_category_name": "Type",
			"localized_tag_name": "Cosmetic"
		},
		{
			"category": "Class",
			"internal_name": "Scout",
			"localized_category_name": "Class",
			"localized_tag_name": "Scout"
		},
		{
			"category": "Class",
			"internal_name": "Sniper",
			"localized_category_name": "Class",
			"localized_tag_name": "Sniper"
		},
		{
			"category": "Class",
			"internal_name": "Soldier",
			"localized_category_name": "Class",
			"localized_tag_name": "Soldier"
		},
		{
			"category": "Class",
			"internal_name": "Demoman",
			"localized_category_name": "Class",
			"localized_tag_name": "Demoman"
		},
		{
			"category": "Class",
			"internal_name": "Medic",
			"localized_category_name": "Class",
			"localized_tag_name": "Medic"
		},
		{
			"category": "Class",
			"internal_name": "Heavy",
			"localized_category_name": "Class",
			"localized_tag_name": "Heavy"
		},
		{
			"category": "Class",
			"internal_name": "Pyro",
			"localized_category_name": "Class",
			"localized_tag_name": "Pyro"
		},
		{
			"category": "Class",
			"internal_name": "Spy",
			"localized_category_name": "Class",
			"localized_tag_name": "Spy"
		},
		{
			"category": "Class",
			"internal_name": "Engineer",
			"localized_category_name": "Class",
			"localized_tag_name": "Engineer"
		}
	]
});

console.log(econItem);
