"use strict";

const defaults = require("defaults");
const objectPrettify = require("object-prettify");
/*  TODO:
    - remake in REGEX
    - add targeted items - support kits, fabricators, stragifiers, unusulifiers, chem kits - https://backpack.tf/classifieds?item_type=target&craftable=-1
*/
const effects = exports.UEffects = require("./resources/UEffects");
const killstreaks = exports.UKillstreaks = require("./resources/UKillstreaks");
const qualities =  exports.UQualities = require("./resources/UQualities");
const skins = exports.UTextures = require("./resources/UTextures");
const wearTiers = exports.UWearTiers = require("./resources/UWearTiers");   

const TEMPLATE = {
    item: "",
    originalName: "",
    quality: 0,
    elevated: false,
    craftable: 1,
    australium: 0,
    festivized: false,
    particle: 0,
    killstreak: 0,
    wearTier: 0,
    texture: null
}

const EXCEPTIONS = [ "Strange Bacon Grease", "Strange Filter: ", "Strange Count Transfer Tool", "Strange Part: " ]

/** Parses item name into item object
 * @param {String} name item string
 * @return {Object} parsed item object
 */
exports.parse = function(name) {
    if (typeof name != "string") {
        throw Error("item must be string got " + typeof itemName + " instead.");
    }
    let itemName = name;

    const item = {
        originalName: name,
        particle: getEffect(itemName),
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
    if (item.particle) {
        itemName = itemName.replace(`${item.particle} `, "");
        item.particle = effects[item.particle];
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
    item.item = itemName;

    const parsedItem = objectPrettify(defaults(item, TEMPLATE), TEMPLATE);

    return parsedItem;
}

/**
 * Stringifies item object into item name
 * @param {String} item pure name of the item
 * @param {Number} quality item quality
 * @param {Number} elevated second item quality
 * @param {Number} australium if item is australium
 * @param {Number} killstreak item killstreak
 * @param {Number} particle item effect
 * @param {Boolean} festivized if item is festivized
 * @param {Object, String, Number} texture item texture
 * @param {Number} wearTier item wear
 * @param {Number} craftable if item is craftable
 * @return {String} item name 
*/
exports.stringify = function({ item, quality, elevated, australium, particle, killstreak, festivized, texture, wearTier, craftable }) {
    let itemName = "";

    if (craftable == 0 || craftable == -1) {
        itemName += "Non-Craftable ";
    }
    if (elevated) {
        itemName += "Strange ";
    }
    const qualityEffectCheckOne = quality != 5 && particle;
    const qualityEffectCheckTwo = quality && !particle;
    if (qualityEffectCheckOne || qualityEffectCheckTwo) {
        itemName += `${qualities[quality]} `;
    }
    if (particle) {
        itemName += `${effects[particle]} `;
    }
    if (festivized) {
        itemName += "Festivized ";
    }
    if (killstreak) {
        itemName += `${killstreaks[killstreak]} `;
    }
    if (australium && australium != -1) {
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
    itemName += item;
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
    let killstreakNames = ["Killstreak", "Specialized Killstreak", "Professional Killstreak"];
    for (let k = 0; k < killstreakNames.length; k++) {
        let killstreak = killstreakNames[k];
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
