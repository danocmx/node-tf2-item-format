"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuality = exports.isQuality = exports.getWear = exports.isWear = void 0;
/**
 * These tags use resources.
 */
const isTag_1 = __importDefault(require("./functions/isTag"));
const getTag_1 = __importDefault(require("./functions/getTag"));
exports.isWear = isTag_1.default('Exterior');
exports.getWear = getTag_1.default('name');
exports.isQuality = isTag_1.default('Quality');
exports.getQuality = getTag_1.default('name');
