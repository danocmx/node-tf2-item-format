"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getType = exports.isType = exports.getGrade = exports.isGrade = exports.getCollection = exports.isCollection = exports.getClass = exports.isClass = void 0;
const isTag_1 = __importDefault(require("./functions/isTag"));
const getTag_1 = __importDefault(require("./functions/getTag"));
/**
 * Used for most tags.
 * @type {Function}
 */
const generalTagGetter = getTag_1.default('name');
exports.isClass = isTag_1.default('Class');
exports.getClass = generalTagGetter;
exports.isCollection = isTag_1.default('Collection');
exports.getCollection = generalTagGetter;
exports.isGrade = isTag_1.default('Rarity');
exports.getGrade = generalTagGetter;
exports.isType = isTag_1.default('Type');
exports.getType = getTag_1.default('internal_name');
