const itemFormatting = require("./index");

const defaults = { name: 'Attendant',
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

console.log(itemFormatting.stringify(defaults));

const stringDefeaults = "Non-Craftable Strange Jazzy Genuine Green Energy Festivized Specialized Killstreak Australium Attendant (Field-Tested)";

console.log(itemFormatting.parse(stringDefeaults));