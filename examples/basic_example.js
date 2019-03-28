const itemFormatting = require("../index");

const objectDefaults = { name: 'Attendant',
    originalName: 'Non-Craftable Strange Jazzy Genuine Green Energy Festivized Specialized Killstreak Australium Attendant (Field-Tested)',
        quality: 1,
    elevated: true,
    craftable: 0,
    australium: 1,
    festivized: true,
    effect: 9,
    killstreak: 2,
    wearTier: 3,
    texture: { id: '230', name: 'Jazzy' } 
}
// outputs stringDefeaults
itemFormatting.stringify(objectDefaults)

const stringDefeaults = "Non-Craftable Strange Jazzy Genuine Green Energy Festivized Specialized Killstreak Australium Attendant (Field-Tested)";
// outpost objectDefaults
itemFormatting.parse(stringDefeaults)