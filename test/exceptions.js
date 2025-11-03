const { assert } = require('chai');

const { schema } = require('../dist/static');
const {
	findKitExceptions,
	isKitException,
} = require('../dist/parseString/Attributes/getUsableItem');
const {
	findUniqueHatExceptions,
	isUniqueHatException,
} = require('../dist/shared/isUniqueHat');
const {
	findQualityExceptions,
	isQualityException,
} = require('../dist/parseString/Attributes/getQuality/exceptions');
const {
	findEffectExceptions,
	isEffectException,
} = require('../dist/parseString/Attributes/getEffect');
const {
	findTextureExceptions,
	isTextureException,
} = require('../dist/shared/getTexture');

describe('Exception Generation', () => {
	describe('Kit Exceptions', () => {
		describe('findKitExceptions', () => {
			it('Include old hardcoded ones', () => {
				assert.includeMembers(findKitExceptions(schema), [
					"Killer's Kit",
					'Coffin Kit',
					'Summer Starter Kit',
					"Chiromancer's Kit",
				]);
			});
		});

		describe('isKitException', () => {
			it('Is a correct exception', () => {
				assert.isTrue(
					isKitException(schema, 'Blizzardy Storm Coffin Kit')
				);
			});

			it('Is not an exception', () => {
				assert.isFalse(
					isKitException(
						schema,
						'Non-Craftable Professional Killstreak Kit'
					)
				);
			});
		});
	});

	describe('Unique Hat Exceptions', () => {
		describe('findUniqueHatExceptions', () => {
			it('Include old hardcoded ones', () => {
				assert.includeMembers(findUniqueHatExceptions(schema), [
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
					'The Über Update Bundle',
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
				]);
			});
		});

		describe('isUniqueHatException', () => {
			it('Is a correct exception', () => {
				assert.isTrue(
					isUniqueHatException(schema, "The Emperor's Assortment")
				);
			});

			it('Is not an exception', () => {
				assert.isFalse(isUniqueHatException(schema, 'The War Pig'));
			});
		});
	});

	describe('Quality Exceptions', () => {
		describe('Vintage Exceptions', () => {
			describe('findQualityExceptions', () => {
				it('Include old hardcoded ones', () => {
					assert.includeMembers(
						findQualityExceptions(schema, 'Vintage'),
						['Vintage Merryweather', 'Vintage Tyrolean']
					);
				});
			});

			describe('isUniqueHatException', () => {
				it('Is a correct exception', () => {
					assert.isTrue(
						isQualityException(
							schema,
							'Vintage',
							'Vintage Tyrolean'
						)
					);
				});

				it('Is not an exception', () => {
					assert.isFalse(
						isQualityException(
							schema,
							'Vintage',
							'Vintage Equalizer'
						)
					);
				});
			});
		});

		describe('Haunted Exceptions', () => {
			describe('findQualityExceptions', () => {
				it('Include old hardcoded ones', () => {
					assert.includeMembers(
						findQualityExceptions(schema, 'Haunted'),
						[
							'Haunted Hat',
							'Haunted Ghosts',
							'Haunted Phantasm',
							'Haunted Metal Scrap',
							'Haunted Kraken',
							'Haunted Forever!',
							'Haunted Wick',
							'Haunted Cremation',
							'Haunted Mist',
						]
					);
				});
			});

			describe('isUniqueHatException', () => {
				it('Is a correct exception', () => {
					assert.isTrue(
						isQualityException(
							schema,
							'Haunted',
							'Unusual Haunted Metal Scrap'
						)
					);
				});

				it('Is not an exception', () => {
					assert.isFalse(
						isQualityException(
							schema,
							'Haunted',
							"Haunted Rump-o'-Lantern"
						)
					);
				});
			});
		});

		describe('Strange Exceptions', () => {
			describe('findQualityExceptions', () => {
				it('Include old hardcoded ones', () => {
					const exceptions = findQualityExceptions(schema, 'Strange');

					assert.includeMembers(exceptions, [
						'Strange Bacon Grease',
						'Strange Count Transfer Tool',
					]);

					assert.isTrue(
						exceptions.some((e) => e.startsWith('Strange Part: '))
					);
					assert.isTrue(
						exceptions.some((e) =>
							e.startsWith('Strange Cosmetic Part: ')
						)
					);
					assert.isTrue(
						exceptions.some((e) => e.startsWith('Strange Filter: '))
					);
				});
			});

			describe('isUniqueHatException', () => {
				it('Is a correct exception', () => {
					assert.isTrue(
						isQualityException(
							schema,
							'Strange',
							'Strange Part: Scouts Killed'
						)
					);
				});

				it('Is not an exception', () => {
					assert.isFalse(
						isQualityException(
							schema,
							'Strange',
							'Strange Carbonado Botkiller Minigun Mk.I'
						)
					);
				});
			});
		});
	});

	describe('Effect Exceptions', () => {
		describe('findEffectExceptions', () => {
			const EFFECT_EXCEPTIONS = [
				['Orbiting Fire', 'Eerie Orbiting Fire'],
				['Spellbound', 'Spellbound Aspect'],
				['Haunted Phantasm', 'Haunted Phantasm Jr'],
				['Ghastly Ghosts', 'Ghastly Ghosts Jr'],
			];

			const HAT_NAME_EXCEPTIONS = [
				['Cool Breeze', 'Cool'],
				['Cool Cat Cardigan', 'Cool'],
				['Hot Heels', 'Hot'],
				['Hot Case', 'Hot'],
				['A Head Full of Hot Air', 'Hot'],
				['Hot Hand', 'Hot'],
				['Smoking Jacket', 'Smoking'],
				['Smoking Skid Lid', 'Smoking'],
				['Hot Huaraches', 'Hot'],
				['Cool Capuchon', 'Cool'],
				['Hot Dogger', 'Hot'],
				['Atomic Accolade', 'Atomic'],
				['Bonk! Atomic Punch', 'Atomic'],
				['Accursed Apparition', 'Accursed'],
				['Taunt: The Hot Wheeler', 'Hot'],
				['Frostbite Bonnet', 'Frostbite'],
				['Cool Warm Sweater', 'Cool'],
				['Frostbite Fit', 'Frostbite'],
				['Hot Spaniel', 'Hot'],
			];

			const TEXTURE_EFFECT_EXCEPTION = [
				'Haunted Ghosts',
				'Pumpkin Patch',
				'Stardust',
			];

			it('Include old hardcoded ones', () => {
				const exceptions = findEffectExceptions(schema);

				for (const [hat, effect] of HAT_NAME_EXCEPTIONS) {
					if (
						exceptions.item[effect] &&
						exceptions.item[effect].includes(hat)
					) {
						continue;
					}

					assert.isTrue(
						false,
						`Hat Exception: ${effect} -> ${hat} failed`
					);
				}

				for (const [effect, exceptionEffect] of EFFECT_EXCEPTIONS) {
					if (
						exceptions.effect[effect] &&
						exceptions.effect[effect].includes(exceptionEffect)
					) {
						continue;
					}

					assert.isTrue(
						false,
						`Effect Exception: ${effect} -> ${hat} failed`
					);
				}

				for (const txtEffect of TEXTURE_EFFECT_EXCEPTION) {
					if (
						exceptions.texture[txtEffect] &&
						exceptions.texture[txtEffect].some((e) =>
							e.includes(txtEffect)
						)
					) {
						continue;
					}

					assert.isTrue(
						false,
						`Texture Exception: ${txtEffect} failed`
					);
				}
			});
		});

		describe('isEffectException', () => {
			it('Is a correct exception - no wear', () => {
				assert.deepEqual(
					isEffectException(
						schema,
						'Orbiting Fire',
						'Eerie Orbiting Fire Magnificent Mongolian',
						false
					),
					[true, 'Eerie Orbiting Fire']
				);
			});

			it('Is a correct exception - has wear', () => {
				assert.deepEqual(
					isEffectException(
						schema,
						'Haunted Ghosts',
						'Haunted Ghosts Holy Mackerel (Minimal Wear)',
						true
					),
					[true, null]
				);
			});

			it('Is a correct exception - hat exception', () => {
				assert.deepEqual(
					isEffectException(
						schema,
						'Atomic',
						'Strange Atomic Accolade',
						false
					),
					[true, null]
				);
			});

			it('Is not an exception - no wear', () => {
				assert.deepEqual(
					isEffectException(
						schema,
						'Haunted Ghosts',
						'Haunted Ghosts Bazaar Bauble',
						false
					),
					[false, null]
				);
			});

			it('Is not an exception - has wear', () => {
				assert.deepEqual(
					isEffectException(
						schema,
						'Festive Lights',
						'Festive Lights Coldfront Commander',
						true
					),
					[false, null]
				);
			});
		});
	});

	describe('Texture Exceptions', () => {
		describe('findTextureExceptions', () => {
			const TEXTURE_EXCEPTIONS = [
				['Health and Hell', 'Health and Hell (Green)'],
			];

			const TEXTURE_TO_EFFECT_EXCEPTIONS = [
				['Rainbow', 'Rainbow Reverie'],
				['Stardust', 'Stardust Pathway'],
				['Autumn', 'Autumn Leaves'],
			];

			it('Include old hardcoded ones', () => {
				const exceptions = findTextureExceptions(schema);

				for (const [texture, overlappingTxt] of TEXTURE_EXCEPTIONS) {
					if (
						exceptions.texture[texture] &&
						exceptions.texture[texture].includes(overlappingTxt)
					) {
						continue;
					}

					assert.isTrue(
						false,
						`Texture Exception: ${texture} -> ${overlappingTxt} failed`
					);
				}

				for (const [texture, effect] of TEXTURE_TO_EFFECT_EXCEPTIONS) {
					if (
						exceptions.effect[texture] &&
						exceptions.effect[texture].includes(effect)
					) {
						continue;
					}

					assert.isTrue(
						false,
						`Effect Exception: ${texture} -> ${effect} failed`
					);
				}
			});
		});

		describe('isTextureException', () => {
			it('Is a correct exception - texture to texture', () => {
				assert.deepEqual(
					isTextureException(
						schema,
						'Health and Hell (Green) Shotgun (Well-Worn)',
						'Health and Hell',
						false
					),
					[true, 'Health and Hell (Green)']
				);
			});

			it('Is a correct exception - no wear', () => {
				assert.deepEqual(
					isTextureException(
						schema,
						'Stardust Undercover Brolly',
						'Stardust',
						false
					),
					[true, null]
				);
			});

			it('Is not an exception - has wear', () => {
				assert.deepEqual(
					isTextureException(
						schema,
						'Stardust War Paint (Field-Tested)',
						'Stardust',
						true
					),
					[false, null]
				);
			});
		});
	});
});
