const fs = require('fs');
const path = require('path');
const { assert } = require('chai');

const { Schema, parseEconItem } = require('../dist/static');
const { createFormat } = require('../dist');

const cases = JSON.parse(
	fs.readFileSync(path.join(__dirname, './data/econItem.json'), 'utf8')
);

describe('parseEconItem data', () => {
	describe('Normal cases', () => {
		cases.forEach((testCase, index) => {
			it(`Case #${index + 1}`, () => {
				if (testCase.expected.id === undefined) {
					testCase.expected.id = undefined; // Needs to explicitly be set
				}

				assert.deepEqual(
					parseEconItem(
						testCase.input.item,
						testCase.input.inNumbers,
						testCase.input.useDefindexes,
						testCase.input.options
					),
					testCase.expected
				);
			});
		});
	});

	describe('Special cases', () => {
		it('Case #1 - bat output', () => {
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
						{
							value: 'The Blutsauger x 1',
							color: '8b8989',
						},
						{
							value: 'The Disciplinary Action x 1',
							color: '8b8989',
						},
						{
							value: 'The Sandvich x 1',
							color: '8b8989',
						},
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
					app_data: {
						quantity: '1',
						def_index: '20005',
						quality: '6',
					},
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
				uses: 1,
			});
		});

		it('Case #2 - bat target', () => {
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
						{
							value: "Collector's Festive Black Box",
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
					app_data: {
						quantity: '1',
						def_index: '20007',
						quality: '6',
					},
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
				uses: 1,
			});
		});

		it('Case #3 - bat', () => {
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

		it('Case #4 - Red Rock Roscoe texture', () => {
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
						{
							value: 'Festivized',
							color: 'ffd700',
						},
						{ value: 'Team Colored Decorated Weapon' },
						{
							value: 'Sheen: Hot Rod',
							color: '7ea9d1',
						},
						{
							value: 'Killstreaks Active',
							color: '7ea9d1',
						},
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
});
