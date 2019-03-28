"use strict";

const defaults = require("defaults");
const objectPrettify = require("object-prettify");
/*  TODO:
    - remake in REGEX
*/
const effects = require("./resources/UEffects");
const killstreaks = require("./resources/UKillstreaks");
const qualities = require("./resources/UQualities");
const skins = require("./resources/UTextures");
const wearTiers = require("./resources/UWearTiers");

const TEMPLATE = {
    name: "",
    originalName: "",
    quality: 0,
    elevated: false,
    craftable: 1,
    australium: 0,
    festivized: false,
    effect: 0,
    killstreak: 0,
    wearTier: 0,
    texture: null
}

const EXCEPTIONS = [ "Strange Bacon Grease", "Strange Filter: ", "Strange Count Transfer Tool", "Strange Part: " ]

exports.parse = function(name) {
    if (typeof name != "string") {
        throw Error("item must be string got " + typeof itemName + " instead.");
    }
    let itemName = name;

    const item = {
        originalName: name,
        effect: getEffect(itemName),
        killstreak: getKillstreak(itemName),
        texture: getSkin(itemName),
        wearTier: getWearTier(itemName),
    }
    if (itemName.includes("Non-Craftable ")) {
        item.craftable = 0;
        itemName = itemName.replace("Non-Craftable ", "");
    }
    if (itemName.includes("Australium ") && !itemName.includes("Australium Gold")) {
        item.australium = 1;
        itemName = itemName.replace("Australium ", "");
    }
    if (itemName.includes("Festivized ")) {
        item.festivized = true;
        itemName = itemName.replace("Festivized ", "");
    }
    const quality = getQuality(itemName, item);
    if (quality.quality) {
        itemName = itemName.replace(`${quality.quality} `, "");
        item.quality = qualities[quality.quality];
    }
    if (quality.elevated) {
        itemName = itemName.replace("Strange ", "");
        item.elevated = true;
    }
    if (item.effect) {
        itemName = itemName.replace(`${item.effect} `, "");
        item.effect = effects[item.effect];
    }
    if (item.killstreak) {
        itemName = itemName.replace(`${item.killstreak} `, "");
        item.killstreak = killstreaks[item.killstreak];
    }
    if (item.wearTier) {
        itemName = itemName.replace(` (${item.wearTier})`, "");
        item.wearTier = wearTiers[item.wearTier];
    }
    if (item.texture) {
        itemName = itemName.replace(`${item.texture.name} `, "");
    }
    item.name = itemName;

    const parsedItem = objectPrettify(defaults(item, TEMPLATE), TEMPLATE);

    return parsedItem;
}

exports.stringify = function({ name, quality, elevated, australium, effect, killstreak, festivized, texture, wearTier, craftable }) {
    let itemName = "";

    if (craftable == 0) {
        itemName += "Non-Craftable ";
    }
    if (elevated) {
        itemName += "Strange ";
    }
    const qualityEffectCheckOne = quality != 5 && effect;
    const qualityEffectCheckTwo = quality && !effect;
    if (qualityEffectCheckOne || qualityEffectCheckTwo) {
        itemName += `${qualities[quality]} `;
    }
    if (effect) {
        itemName += `${effects[effect]} `;
    }
    if (festivized) {
        itemName += "Festivized ";
    }
    if (killstreak) {
        itemName += `${killstreaks[killstreak]} `;
    }
    if (australium) {
        itemName += "Australium "
    }
    if (texture) {
        if (typeof texture == "object") {
            texture = texture.id;
        }
        if (isNum(texture)) {
            const skin = findSkin(texture, "id")
            if (skin) texture = skin.name;
        }

        itemName += `${texture} `;
    }
    itemName += name;
    if (wearTier) {
        itemName += ` (${wearTiers[wearTier]})`;
    }

    return itemName
}

// elevated included    
function getQuality(item, attributes) {
    const itemQualities = {quality: null, elevated: null}
    const nameQualities = [ "Normal", "Genuine", "Vintage", "Unique", "Unusual", "Self-Made", "Haunted", "Collector's" ]
    for (let nq = 0; nq < nameQualities.length; nq++) {
        let quality = nameQualities[nq];
        if (!item.includes(quality + " ")) {
            continue;
        }
        itemQualities.quality = quality;
    }
    if (attributes.effect && !itemQualities.quality) {
        itemQualities.quality = "Unusual";
    }
    const strangeCheck = searchExceptions(item);
    if (item.includes("Strange ") && !strangeCheck) {
        if (!itemQualities.quality) {
            itemQualities.quality = "Strange";
        }
        else {
            itemQualities.elevated = true;
        }
    }
    if (!itemQualities.quality && attributes.texture) {
        itemQualities.quality = "Decorated Weapon";
    }
    if (!itemQualities.quality) {
        itemQualities.quality = "Unique";
    }

    return itemQualities;
}

function getEffect(item) {
    let itemEffect = 0;
    for (let e in effects) {
        let effect = effects[e];
        if (isNum(effect)) {
            continue;
        }
        if (!item.includes(effect + " ")) {
            continue;
        }
        itemEffect = effect;
    }
    return itemEffect;
}

function getKillstreak(item) {
    let itemKillstreak = 0;
    for (let k in killstreaks) {
        let killstreak = killstreaks[k];
        if (isNum(killstreak)) {
            continue;
        }
        if (!item.includes(killstreak)) {
            continue;
        }
        itemKillstreak = killstreak;
    }
    return itemKillstreak;
}

function getWearTier(item) {
    let itemWearTier = null
    for (let w in wearTiers) {
        let wearTier = wearTiers[w];
        if (isNum(wearTier)) {
            continue;
        }
        if (!item.includes("(" + wearTier + ")")) {
            continue
        }
        itemWearTier = wearTier;
    }
    return itemWearTier;
}

function getSkin(item) {
    let itemSkin = null
    for (let s = 0; s < skins.length; s++) {
        let skin = skins[s]; // find name of the property
        if (!item.includes(skin.name)) {
            continue;
        }
        itemSkin = skin;
    }
    return itemSkin;
}

function findSkin(search, type) {
    for (let s = 0; s < skins.length; s++) {
        let skin = skins[s];
        if (skin[type] != search) {
            continue;
        }
        return skin;
    }
}

function searchExceptions(search) {
    for (let e = 0; e < EXCEPTIONS.length; e++) {
        let EXCEPTION = EXCEPTIONS[e];
        if (!search.includes(EXCEPTION)) {
            continue;
        }
        return true;
    }
    return false;
}

function isNum (test) {
    return /^-{0,1}\d+$/.test(test);
}
