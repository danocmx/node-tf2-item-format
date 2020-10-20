"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseString_1 = __importDefault(require("./parseString"));
const toSKU_1 = __importDefault(require("./toSKU"));
const stringify_1 = __importDefault(require("./stringify"));
const parseSKU_1 = __importDefault(require("./parseSKU"));
const attributes = parseString_1.default('Strange Festive Wrench', true, true);
const sku = toSKU_1.default(attributes);
const skuAttributes = parseSKU_1.default(sku);
const name = stringify_1.default(skuAttributes);
/*
type Defindex = { defindex: string };
type Name = { name: string };
type Options = (Name|Defindex);

function test(opt: Options) {
    if (defindexGuard(opt)) {

    } else {

    }
}

function defindexGuard(data: Options): data is Defindex {
    return Object.prototype.hasOwnProperty.call(data, 'defindex');
}
*/ 
