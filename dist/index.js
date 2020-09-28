"use strict";
/* eslint-disable global-require */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixName = exports.parseSKU = exports.toSKU = exports.createBPListing = exports.stringify = exports.parseString = exports.parseEconItem = void 0;
const parseEconItem_1 = __importDefault(require("./parseEconItem"));
exports.parseEconItem = parseEconItem_1.default;
const parseString_1 = __importDefault(require("./parseString"));
exports.parseString = parseString_1.default;
const stringify_1 = __importDefault(require("./stringify"));
exports.stringify = stringify_1.default;
const createBPListing_1 = __importDefault(require("./createBPListing"));
exports.createBPListing = createBPListing_1.default;
const toSKU_1 = __importDefault(require("./toSKU"));
exports.toSKU = toSKU_1.default;
const parseSKU_1 = __importDefault(require("./parseSKU"));
exports.parseSKU = parseSKU_1.default;
/**
 * Fixes the order of attributes in your name,
 * 	this is highly exrimental due to the
 * 	nature of attributes being parsed in way
 * 	they're put in inside the name.
 */
const fixName = (name) => stringify_1.default(parseString_1.default(name));
exports.fixName = fixName;
