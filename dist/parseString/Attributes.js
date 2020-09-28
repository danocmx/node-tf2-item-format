"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isCraftable_1 = __importDefault(require("./Attributes/isCraftable"));
const isFestivized_1 = __importDefault(require("./Attributes/isFestivized"));
const getWear_1 = __importDefault(require("./Attributes/getWear"));
const getItemNumber_1 = __importDefault(require("./Attributes/getItemNumber"));
const getQuality_1 = __importDefault(require("./Attributes/getQuality"));
const getUsableItem_1 = __importDefault(require("./Attributes/getUsableItem"));
const getEffect_1 = __importDefault(require("./Attributes/getEffect"));
const isUniqueHat_1 = __importDefault(require("../shared/isUniqueHat"));
const isAustralium_1 = __importDefault(require("../shared/isAustralium"));
const getTexture_1 = __importDefault(require("../shared/getTexture"));
const getKillstreak_1 = __importDefault(require("../shared/getKillstreak"));
/**
 * Holds all attributes we received from name.
 */
class Attributes {
    constructor(name) {
        this.craftable = isCraftable_1.default(name);
        this.australium = isAustralium_1.default(name);
        this.festivized = isFestivized_1.default(name);
        this.killstreak = getKillstreak_1.default(name);
        this.wear = getWear_1.default(name);
        this.effect = getEffect_1.default(name);
        this.texture = getTexture_1.default(name);
        this.itemNumber = getItemNumber_1.default(name);
        this.usableItem = getUsableItem_1.default(name);
        this.isUniqueHat = isUniqueHat_1.default(name);
        this.quality = getQuality_1.default(name, this);
    }
}
exports.default = Attributes;
