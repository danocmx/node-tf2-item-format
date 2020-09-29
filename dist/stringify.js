"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./shared/schema"));
const shouldSetNumber_1 = __importDefault(require("./stringify/shouldSetNumber"));
const shouldSetQuality_1 = __importDefault(require("./stringify/shouldSetQuality"));
const addTargetToName_1 = __importDefault(require("./stringify/addTargetToName"));
const getOutput_1 = __importDefault(require("./shared/getOutput"));
/**
 * Stringifies item object into item name
 */
function default_1({ name, craftable, australium, festivized, killstreak, elevated, defindex, quality, wear, texture, effect, target, output, outputQuality, itemNumber, isUniqueHat, }) {
    let itemName = '';
    if (!craftable) {
        itemName += 'Non-Craftable ';
    }
    if (elevated) {
        itemName += 'Strange ';
    }
    if (shouldSetQuality_1.default(quality, elevated, effect)) {
        itemName += `${schema_1.default.getQualityName(quality)} `;
    }
    if (effect) {
        itemName += `${schema_1.default.getEffectName(effect)} `;
    }
    if (festivized) {
        itemName += 'Festivized ';
    }
    if (killstreak && canAddKillstreak(killstreak, target)) {
        itemName += `${schema_1.default.getKillstreakName(killstreak)} `;
    }
    if (isAustralium(australium)) {
        itemName += 'Australium ';
    }
    if (texture) {
        itemName += `${schema_1.default.getTextureName(texture)} `;
    }
    if (target && isKillstreakKitOrFabricator(name, target)) {
        // eslint-disable-next-line no-param-reassign
        name = addTargetToName_1.default(name, target);
    }
    else if (target || (output && outputQuality)) {
        // There can be both target and output, target is prefered thus the check.
        // getOutput constructs full output name if quality present.
        // target has no quality
        itemName += `${output && !target
            ? getOutput_1.default(schema_1.default.getName(output), schema_1.default.getQualityName(outputQuality))
            : schema_1.default.getName(target)} `;
    }
    if (isUniqueHat) {
        itemName += 'The ';
    }
    // Either we have name or defindex.
    itemName += name || schema_1.default.getName(defindex);
    if (wear) {
        itemName += ` (${schema_1.default.getWearName(wear)})`;
    }
    if (itemNumber && shouldSetNumber_1.default(itemNumber)) {
        if (itemNumber.type === 'series')
            itemName += ` Series #${itemNumber.value}`;
        else
            itemName += ` #${itemNumber.value}`;
    }
    return itemName;
}
exports.default = default_1;
function isAustralium(australium) {
    return !!(australium && australium !== -1);
}
/**
 * Checks if we can add killstreak to the name,
 * killstreak stays present on target items such as kits and fabricators.
 * @param {*} killstreak
 * @param {string} target
 * @return {boolean}
 */
function canAddKillstreak(killstreak, target) {
    return !!(killstreak && !target);
}
function isKillstreakKitOrFabricator(name, target) {
    return !!(target && / Kit/.test(name)); // This checks for fabricator too.
}
