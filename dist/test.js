"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toSKU_1 = __importDefault(require("./toSKU"));
const parseSKU_1 = __importDefault(require("./parseSKU"));
const parseEconItem_1 = __importDefault(require("./parseEconItem"));
const createBPListing_1 = __importDefault(require("./createBPListing"));
const econ = {
    appid: 440,
    contextid: '2',
    assetid: '8294625611',
    classid: '1336074160',
    instanceid: '3639098153',
    amount: '1',
    currency: 0,
    background_color: '3C352E',
    icon_url: 'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEfezgSUhr2hzVGjMHlMvyJC-sUkt8K6ZFH3jMllVQrZbvkNG8ydFXAWfEICqFjp160CCNivZI3VY_j9u8DfA6-sYSUN65sbo_U7o3qKw',
    icon_url_large: 'fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEfezgSUhr2hzVGjMHlMvyJC-sUkt8K6ZFH3jMllVQrZbvkNG8ydFXAWfEICqFjp160CCNivZI3VY_j9u8DfA6-sYSUN65sbo_U7o3qKw',
    descriptions: [
        { value: 'Style: Tie', color: '756b5e' },
        {
            value: 'Halloween: Chromatic Corruption (spell only active during event)',
            color: '7ea9d1',
        },
        {
            value: 'Halloween: Voices From Below (spell only active during event)',
            color: '7ea9d1',
        },
        {
            value: "Whether you're trepanning a skull to let out the sickness ghosts or attaching enough leeches to a patient that they'll pass out from blood loss before you cut off any suspicious-lookinglimbs, this dapper ruffed shirt and coat will assure your patients that they came to the right place for their dangerously insane 18th century medicine.",
        },
    ],
    tradable: 1,
    actions: [
        {
            link: 'http://wiki.teamfortress.com/scripts/itemredirect.php?id=878&lang=en_US',
            name: 'Item Wiki Page...',
        },
        {
            link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20S%owner_steamid%A%assetid%D434113929687356346',
            name: 'Inspect in Game...',
        },
    ],
    name: 'Strange Genuine Foppish Physician',
    name_color: '4D7455',
    type: 'Strange Apparel - Points Scored: 1',
    market_name: 'Strange Genuine Foppish Physician',
    market_hash_name: 'Strange Genuine Foppish Physician',
    market_actions: [
        {
            link: 'steam://rungame/440/76561202255233023/+tf_econ_item_preview%20M%listingid%A%assetid%D434113929687356346',
            name: 'Inspect in Game...',
        },
    ],
    commodity: 0,
    market_tradable_restriction: 7,
    market_marketable_restriction: 0,
    marketable: 1,
    tags: [
        {
            category: 'Quality',
            internal_name: 'rarity1',
            localized_category_name: 'Quality',
            localized_tag_name: 'Genuine',
            color: '4D7455',
        },
        {
            category: 'Type',
            internal_name: 'misc',
            localized_category_name: 'Type',
            localized_tag_name: 'Cosmetic',
        },
        {
            category: 'Class',
            internal_name: 'Medic',
            localized_category_name: 'Class',
            localized_tag_name: 'Medic',
        },
    ],
};
const parsedEcon = parseEconItem_1.default(econ, true, true);
const sku = toSKU_1.default(parsedEcon);
const attributes = parseSKU_1.default(sku);
const name = createBPListing_1.default(attributes);
console.log(name);
