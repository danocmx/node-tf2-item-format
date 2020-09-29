"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("../shared/schema"));
function getDefindexes(name, usableItem) {
    const defindexes = { defindex: schema_1.default.getDefindex(name) };
    if (usableItem) {
        if (usableItem.target) {
            const targetDefindex = schema_1.default.getDefindex(usableItem.target);
            if (targetDefindex)
                defindexes.targetDefindex = targetDefindex;
        }
        if (usableItem.output) {
            const outputDefindex = schema_1.default.getDefindex(usableItem.output);
            if (outputDefindex)
                defindexes.outputDefindex = outputDefindex;
        }
    }
    return defindexes;
}
exports.default = getDefindexes;
