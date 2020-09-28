"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decomposeName_1 = __importDefault(require("../../shared/decomposeName"));
const isStrangeTexture_1 = __importDefault(require("./ItemName/isStrangeTexture"));
const isUnusual_1 = __importDefault(require("./ItemName/isUnusual"));
/**
 * Class that handles name.
 */
class ItemName {
    constructor(econ) {
        this.econ = econ;
        this.item = econ.item;
        this.origin = this.getOrigin();
    }
    getOrigin() {
        return this.item.market_name || this.item.market_hash_name || this.item.name;
    }
    getShort() {
        const { australium, wear, killstreak, texture, elevated, festivized, quality, isUniqueHat } = this.econ.getNameAttributes();
        return decomposeName_1.default(this.origin, {
            quality: { value: quality, elevated: !!elevated },
            australium,
            festivized,
            isUniqueHat,
            // We know it's a string here:
            killstreak: killstreak,
            wear: wear,
            texture,
            craftable: true,
        });
    }
    /**
     * Returns full name like backpack.tf
     * @return {string}
     */
    getFull() {
        let name = this.origin;
        const { craftable, tradable, texture, quality, effect } = this.econ.getNameAttributes();
        if (effect) {
            if (isUnusual_1.default(quality))
                name = name.replace('Unusual ', `${effect} `);
            else {
                name = name.replace(`${quality} `, `${quality} ${effect} `);
            }
        }
        if (isStrangeTexture_1.default(quality, texture))
            name = `Strange ${name}`;
        if (!tradable)
            name = `Non-Tradable ${name}`;
        if (!craftable)
            name = `Non-Craftable ${name}`;
        return name;
    }
}
exports.default = ItemName;
