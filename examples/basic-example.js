// basic_example.js

const itemFormatting = require("../index");

// Just an example, the string is not possible in TF2
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
    target_item: null,
    numeric: 0,
    numeric_type: null
}
// output -> stringDefeaults
itemFormatting.stringify(objectDefaults);

const stringDefeaults = "Non-Craftable Strange Jazzy Genuine Green Energy Festivized Specialized Killstreak Australium Attendant (Field-Tested)";
// output -> objectDefaults
itemFormatting.parse(stringDefeaults);