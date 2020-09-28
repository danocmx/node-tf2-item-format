"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getElevated_1 = __importDefault(require("./getPropertyAttributes/getElevated"));
function default_1({ item, tags }) {
    const attributes = {
        elevated: getElevated_1.default(item, tags),
        // Inverts numeric values into booleans
        tradable: !!item.tradable,
        marketable: !!item.marketable,
        commodity: !!item.commodity,
    };
    return attributes;
}
exports.default = default_1;
;
