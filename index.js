"use strict";

const defaults = require("defaults");
const objectPrettify = require("object-prettify");

/*TODO: maybe add a bit more regex syntax */

const UEffects = exports.UEffects = require("./resources/UEffects");
const UKillstreaks = exports.UKillstreaks = require("./resources/UKillstreaks");
const UQualities =  exports.UQualities = require("./resources/UQualities");
const UTextures = exports.UTextures = require("./resources/UTextures");
const UWearTiers = exports.UWearTiers = require("./resources/UWearTiers");   

const TEMPLATE = {
    name: "",
    originalName: "",
    quality: 0,
    elevated: false,
    craftable: 1,
    australium: 0,
    festivized: false,
    particle: 0,
    killstreak: 0,
    wearTier: 0,
    item_type: null
}

const TARGETS = ["Kit Fabricator", "Strangifier", "Kit", "Chemistry Set", "Strangifier Chemistry Set"]

const STRANGE_EXCEPTIONS = [ "Strange Bacon Grease", "Strange Filter: ", "Strange Count Transfer Tool", "Strange Part: " ]
const VINTAGE_EXCEPTIONS = ["Vintage Tyrolean", "Vintage Merryweather"]

/** Stringifies item object into item name
 * @param {String} item.item pure name of the item
 * @param {String} item.item_type target of the item
 * @param {Number} item.quality item quality
 * @param {Number} item.elevated second item quality
 * @param {Number} item.australium if item is australium
 * @param {Number} item.killstreak item killstreak
 * @param {Number} item.particle item effect
 * @param {Boolean} item.festivized if item is festivized
 * @param {Object, String, Number} item.texture item texture
 * @param {Number} item.wearTier item wear
 * @param {Number} item.craftable if item is craftable
 * @return {String} item name with all attributes
*/
exports.stringify = function(item) {
    if (typeof item == "string") return item;
    else if (typeof item != "object") throw new Error("itemObject has to be object, received " + typeof item + " instead.")
    
    let { name, item_type, quality, elevated, australium, particle, 
          killstreak, festivized, texture, wearTier, craftable } = item;

    if (item_type && item_type == "") {}

    let itemName = "";
    if (craftable == 0 || craftable == -1) {
        itemName += "Non-Craftable ";
    }
    if (elevated) {
        itemName += "Strange ";
    }
    // Quality is name with particle when quality is not Unusual
    const qualityEffectCheckOne = quality != 5 && particle; 
    const qualityEffectCheckTwo = quality && !particle; 
    if (((qualityEffectCheckOne || qualityEffectCheckTwo) && (quality != UQualities["Unique"] || elevated)) && quality != UQualities["Decorated Weapon"]) {
        itemName += `${UQualities[quality]} `;
    }
    if (particle) {
        itemName += `${UEffects[particle]} `;
    }
    if (festivized) {
        itemName += "Festivized ";
    }
    if (killstreak) {
        itemName += `${UKillstreaks[killstreak]} `;
    }
    if (australium && australium != -1) {
        itemName += "Australium "
    }
    if (texture) {
        if (typeof texture != "String") texture = typeof texture == "object" ? texture.name : findSkin(texture);
        itemName += `${texture} `;
    }
    itemName += name;
    if (item_type) {
        itemName += ` ${item_type}`;
    }
    if (wearTier) {
        itemName += ` (${UWearTiers[wearTier]})`;
    }

    return itemName
}

/** Parses item name into item object
 * @param {String} name item string
 * @return {Object} parsed item object
 */
exports.parse = function(name) {
    if (typeof name == "object") return name
    else if (typeof name != "string") throw Error("item must be string got " + typeof itemName + " instead.");

    let itemName = name;
    const item = {
        originalName: name,
        particle: getEffect(itemName),
        killstreak: getKillstreak(itemName),
        texture: getSkin(itemName),
        wearTier: getWearTier(itemName),
        item_type: getItemType(itemName)
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
        item.quality = UQualities[quality.quality];
    }
    if (quality.elevated) {
        itemName = itemName.replace("Strange ", "");
        item.elevated = true;
    }
    if (item.particle) {
        itemName = itemName.replace(`${item.particle} `, "");
        item.particle = UEffects[item.particle];
    }
    if (item.killstreak && item.killstreak != "None") {
        itemName = itemName.replace(`${item.killstreak} `, "");
        item.killstreak = UKillstreaks[item.killstreak];
    }
    if (item.item_type) {
        itemName = itemName.replace(` ${item.item_type}`, "");
    }
    if (item.wearTier) {
        itemName = itemName.replace(` (${item.wearTier})`, "");
        item.wearTier = UWearTiers[item.wearTier];
    }
    if (item.texture) {
        itemName = itemName.replace(`${item.texture.name} `, "");
    }
    item.name = itemName;
    const parsedItem = objectPrettify(defaults(item, TEMPLATE), TEMPLATE);

    return parsedItem;
}

function getQuality(item, attributes) {
    const itemQuality = {quality: null, elevated: null}
    const Qualities = (item.match(/(Normal|Genuine|Vintage|Unique|Strange|Unusual|Self-Made|Haunted|Collector's)\s/g) || [])
                      .map(quality => quality.replace(/\s/g, ""));

    if (VINTAGE_EXCEPTIONS.some(EXCEPTION => item.includes(EXCEPTION))) {
        Qualities.splice(Qualities.indexOf("Vintage"), 1);
    }
    if (Qualities.includes("Strange")) {
        if (STRANGE_EXCEPTIONS.some(EXCEPTION => item.includes(EXCEPTION))) {
            Qualities.splice(Qualities.indexOf("Strange"), 1);
        } else if (Qualities.length > 1) {
            itemQuality.elevated = true;
            Qualities.splice(Qualities.indexOf("Strange"), 1);
        }
    }

    if (Qualities.length == 0) {
        if (attributes.texture) itemQuality.quality = "Decorated Weapon";
        else if (attributes.effect) itemQuality.quality = "Unusual";
        else if (!itemQuality.qualityEffectCheckOne) itemQuality.quality = "Unique";
    } else {
        itemQuality.quality = Qualities[0];
    }

    return itemQuality;
}

function getKillstreak(item) {
    let Killstreak = item.match(/(Professional Killstreak|Specialized Killstreak|Killstreak)\s/);
    Killstreak = Killstreak ? Killstreak[0].substring(0, Killstreak[0].length - 1) : "None";
    return Killstreak;
}

function getWearTier(item) { 
    let WearTier = item.match(/\((Factory New|Minimal Wear|Field-Tested|Well-Worn|Battle Scarred)\)/);
    WearTier = WearTier ? WearTier[0].replace(/[()]+/g, "") : null;
    return WearTier;
}

function getEffect(item) {
    let itemEffect = null;
    for (let effect in UEffects) {
        if (isNum(effect)) continue;
        if (!item.includes(effect)) continue;
        itemEffect = effect;
    }
    return itemEffect;
}

function getSkin(item) {
    let itemSkin = null;
    for (let i = 0; i < UTextures.length; i++) {
        let skin = UTextures[i] || {};
        if (!item.includes(skin.name)) continue;
        itemSkin = skin;
    }
    return itemSkin;
}

function getItemType(item) {
    for (let i = 0; i < TARGETS.length; i++) {
        let itemType = TARGETS[i];
        if (!item.endsWith(itemType)) continue;
        return itemType;
    }
}

/**
 * @param {Number, String} search - what are we looking for name or defindex
 * @return {String, Number} returns skin we are looking for
 */
function findSkin(search) {
    const isNumber = isNum(search);

    const current = isNumber ? "id" : "name";
    const opposite = isNumber ? "name" : "id"
    
    for (let i = 0; i < UTextures.length; i++) {
        let texture = UTextures[i] || {};
        if (texture[current] == search) {
            return texture[opposite];
        }
    }
}

function isNum (test) {
    return /^\s*[-+]?[0-9]+[\.\,]?[0-9]*\s*$/.test(test);
}
