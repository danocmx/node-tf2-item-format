"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./schema"));
function default_1(item) {
    return {
        killstreak: item.killstreak ? schema_1.default.getKillstreakEnum(item.killstreak) : undefined,
        wear: item.wear ? schema_1.default.getWearEnum(item.wear) : undefined,
        effect: item.effect ? schema_1.default.getEffectEnum(item.effect) : undefined,
        quality: schema_1.default.getQualityEnum(item.quality),
        outputQuality: item.outputQuality ? schema_1.default.getQualityEnum(item.outputQuality) : 0,
        texture: item.texture ? schema_1.default.getTextureEnum(item.texture) : undefined,
    };
}
exports.default = default_1;
;
