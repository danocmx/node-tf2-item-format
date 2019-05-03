const itemFormatting = require("../index");

const objectDefaults = { 
    name: 'Attendant',
    originalName: 'Non-Craftable Strange Jazzy Genuine Green Energy Festivized Specialized Killstreak Australium Attendant (Field-Tested)',
    quality: 1,
    elevated: true,
    craftable: 0,
    australium: 1,
    festivized: true,
    particle: 9,
    killstreak: 2,
    wearTier: 3,
    texture: { id: '230', name: 'Jazzy' },  // or just Jazzy or 230
    item_type: "Kit Fabricator"
}
// output -> stringDefeaults
itemFormatting.stringify(objectDefaults);

const stringDefeaults = "Non-Craftable Strange Jazzy Genuine Green Energy Festivized Specialized Killstreak Australium Attendant (Field-Tested) Kit Fabricator";
// output -> objectDefaults
itemFormatting.parse(stringDefeaults);