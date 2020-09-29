"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
// 2. From SKU to Listing, from Name to Listing
// 3. From Econ to SKU, From Econ to listing
// 3.1 Fix name?
// 4. Write test from this
// Items:
// Burning Flames Blighted Beak
// Non-Craftable Unusual Taunt: The Trackman's Touchdown Unusualifier 
// Professional Killstreak Kritzkrieg Kit Fabricator
// Stockbroker's Scarf Strangifier Chemistry Set Series #2
// 1. From Name to SKU, from SKU to Name;
// ------> Needs Overload
/*
const item = parseString('Burning Flames Blighted Beak', { useDefindexes: true, inNumbers: true });
const sku = toSKU(item as { defindex: number, quality: number, craftable: boolean });

console.log(sku);
*/
const sku = __1.parseSKU('315;5;u13');
// const item = stringify(sku as { name: string, quality: number, craftable: boolean });
