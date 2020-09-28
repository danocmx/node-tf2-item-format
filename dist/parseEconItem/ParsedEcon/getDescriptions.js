"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const festivized_1 = require("./getDescriptions/festivized");
const effect_1 = require("./getDescriptions/effect");
const spell_1 = require("./getDescriptions/spell");
const part_1 = require("./getDescriptions/part");
const paint_1 = require("./getDescriptions/paint");
const craftable_1 = require("./getDescriptions/craftable");
const texture_1 = require("./getDescriptions/texture");
const Killstreak_1 = __importDefault(require("./getDescriptions/Killstreak"));
/**
 * Gets all important attributes from descriptions.
 * Checked in order from steam.
 */
function default_1(econ) {
    const { tags } = econ;
    const { descriptions = [] } = econ.item;
    const killstreak = new Killstreak_1.default();
    /**
     * @type {descriptionAttributes}
     */
    const attributes = {
        craftable: true,
        effect: '',
        killstreak,
        spells: [],
        parts: [],
    };
    for (let i = 0; i < descriptions.length; i++) {
        const description = descriptions[i];
        if (part_1.isPart(description))
            attributes.parts.push(part_1.getPart(description));
        else if (paint_1.isPaint(description))
            attributes.paint = paint_1.getPaint(description);
        else if (effect_1.isEffect(description, tags))
            attributes.effect = effect_1.getEffect(description);
        else if (festivized_1.isFestivized(description))
            attributes.festivized = true;
        else if (spell_1.isSpell(description))
            attributes.spells.push(spell_1.getSpell(description));
        else if (Killstreak_1.default.isKillstreaker(description))
            killstreak.setKillstreaker(description);
        else if (Killstreak_1.default.isSheen(description))
            killstreak.setSheen(description);
        else if (Killstreak_1.default.isKillstreak(description))
            killstreak.setKillstreak();
        else if (texture_1.isItemsTexture(description, econ))
            attributes.texture = texture_1.getTexture(description);
        else if (!craftable_1.isCraftable(description))
            attributes.craftable = false;
    }
    console.log(econ.itemName.origin, attributes.killstreak);
    return attributes;
}
exports.default = default_1;
;
