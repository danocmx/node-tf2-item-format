"use strict";

const defaults = require("defaults");
const objectPrettify = require("object-prettify");

/*  item_type:
    - target - fabricators, strangifiers, killstreak kits - Specialized Killstreak Unarmed Combat Kit Fabricator , 
                                                            Cleaner's Carbine Strangifier , 
                                                            Non-Craftable Professional Killstreak Rocket Launcher Kit 
    - output - chemistry sets - Collector's Gunboats Chemistry Set, 
                                Foppish Physician Strangifier Chemistry Set 
*/
const UEffects = exports.UEffects = require("./resources/UEffects");
const UKillstreaks = exports.UKillstreaks = require("./resources/UKillstreaks");
const UQualities =  exports.UQualities = require("./resources/UQualities");
const UTextures = exports.UTextures = require("./resources/UTextures");
const UWearTiers = exports.UWearTiers = require("./resources/UWearTiers");   

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

const TARGET_ITEMS = ["Kit Fabricator", "Strangifier", "Kit"] // end
const OUTPUT_ITEMS = ["Chemistry Set", "Strangifier Chemistry Set"] // end

const STRANGE_EXCEPTIONS = [ "Strange Bacon Grease", "Strange Filter: ", "Strange Count Transfer Tool", "Strange Part: " ]
const VINTAGE_EXCEPTIONS = ["Vintage Tyrolean", "Vintage Merryweather"]

/**
 * Stringifies item object into item name
 * @param {String} itemObject item stats
 * @param {Number} itemObject.item_type item type we want to stringify
 * @param {Number} itemObject.item_type_object has to be included when item_type is output or target, its one of TARGET_ITEMS
 * @return {String} strigified item name
*/
exports.stringify = function(itemObject) {
    if (typeof itemObject == "string") return itemObject;
    else if (typeof itemObject != "object") throw new Error("itemObject has to be object, received " + typeof itemObject + " instead.")

    let item;
    if (itemObject.item_type == "target") {
        item = stringifyTarget(itemObject);
    } else if (itemObject.item_type == "output") {
        item = stringifyOutput(itemObject);
    } else {
        item = stringifyItem(itemObject)
    }

    return item;
}

function stringifyTarget(item) {
    /* {craftable} {killstreak} {item} {target} */
}

function stringifyOutput(item) {

}

/**
 * Stringifies item object into item name
 * @param {String} itemObject.item pure name of the item
 * @param {Number} itemObject.quality item quality
 * @param {Number} itemObject.elevated second item quality
 * @param {Number} itemObject.australium if item is australium
 * @param {Number} itemObject.killstreak item killstreak
 * @param {Number} itemObject.particle item effect
 * @param {Boolean} itemObject.festivized if item is festivized
 * @param {Object, String, Number} itemObject.texture item texture
 * @param {Number} itemObject.wearTier item wear
 * @param {Number} itemObject.craftable if item is craftable
 * @return {String} strigified item name
*/
function stringifyItem(item) {
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
    if (item.wearTier) {
        itemName = itemName.replace(` (${item.wearTier})`, "");
        item.wearTier = UWearTiers[item.wearTier];
    }
    if (item.texture) {
        itemName = itemName.replace(`${item.texture.name} `, "");
    }
    item.item = itemName;
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
