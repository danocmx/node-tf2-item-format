"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("../../../shared/schema"));
function default_1(texture) {
    return schema_1.default.getTextureName(texture);
}
exports.default = default_1;
;
function isTextureDefindex(texture) {
    /**
     * This way we can check for strings too.
     */
    return texture >= 0;
}
