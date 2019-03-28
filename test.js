const itemFormatting = require("./index");

const defaults = { 
    name: 'Attendant',
    originalName: 'Non-Craftable Strange Genuine Specialized Killstreak Australium Festivized Green Energy Attendant (Field-Tested)',
    quality: 1,
    elevated: true,
    craftable: 0,
    australium: 1,
    festivized: true,
    effect: 9,
    killstreak: 2,
    wearTier: 3,
    texture: null 
}

console.log(itemFormatting.stringify(defaults));

const stringDefeaults = "Non-Craftable Strange Genuine Green Energy Festivized Specialized Killstreak Australium Attendant (Field-Tested)";

console.log(itemFormatting.parse(stringDefeaults));