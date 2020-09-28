"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("../schema"));
function default_1(item) {
    return Object.assign(Object.assign({}, item), { killstreak: item.killstreak ? schema_1.default.getKillstreakEnum(item.killstreak) : undefined, wear: schema_1.default.getWearEnum(item.wear), texture: schema_1.default.getTextureEnum(item.texture), effect: schema_1.default.getEffectEnum(item.effect), quality: schema_1.default.getQualityEnum(item.quality) });
}
exports.default = default_1;
;
