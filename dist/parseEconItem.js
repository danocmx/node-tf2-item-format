"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParsedEcon_1 = __importDefault(require("./parseEconItem/ParsedEcon"));
function parseEconItem(item, inNumbers = false, useDefindexes = false) {
    const parsedEcon = new ParsedEcon_1.default(item);
    const name = parsedEcon.itemName.getShort();
    let attributes;
    if (inNumbers === true) {
        if (useDefindexes)
            attributes = parsedEcon.getAttributes(name, true, true);
        else
            attributes = parsedEcon.getAttributes(name, true, false);
    }
    else if (useDefindexes === true) {
        attributes = parsedEcon.getAttributes(name, false, true);
    }
    else {
        attributes = parsedEcon.getAttributes(name, false, false);
    }
    return Object.assign({ name, fullName: parsedEcon.itemName.getFull(), id: parsedEcon.id, img: parsedEcon.getImageURL() }, attributes);
}
exports.default = parseEconItem;
