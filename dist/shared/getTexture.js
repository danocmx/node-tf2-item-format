"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./schema"));
const isNumber_1 = __importDefault(require("../util/isNumber"));
/**
 * Iterates over effects object to get matching effect.
 */
// eslint-disable-next-line consistent-return
function default_1(name) {
    if (!schema_1.default.textures)
        schema_1.default.loadTextures();
    const textureKeys = Object.keys(schema_1.default.textures);
    for (let i = 0; i < textureKeys.length; i++) {
        const texture = textureKeys[i];
        if (isNumber_1.default(texture) || !name.includes(`${texture} `)) {
            // eslint-disable-next-line no-continue
            continue;
        }
        return texture;
    }
}
exports.default = default_1;
;
