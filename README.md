# TF2 Item Format
Formatting for TF2 items.

Use `v5` branch for current version.
Install it via `npm install tf2-item-format`

## Features
- Parses item name into attribute object
- Stringifies attribute object into item name same as backpack.tf
- Parses ECON item into attributes
- Parses SKU into attributes
- Makes SKU out of attributes

## Migrating from v4 to v5
To keep your application working like before with version 5 you have to:
```ts
import { parseString } from 'tf2-item-format/static' // -> from 'tf2-item-format'

const { parseString } = require('tf2-item-format/static') // -> from 'tf2-item-format'
```

### New

To inject your own schema use this interface:
```ts
export type ISchema = {
    getDefindex(search: number | string): number|null;
    getName(search: number | string): string;
    getEffectName(effect: number | string): string;
    getWearName(wear: number | string): string;
    getKillstreakName(killstreak: number | string): string;
    getTextureName(texture: number | string): string;
    getQualityName(quality: number | string): string;
    getEffectEnum(effect: number | string): number;
    getWearEnum(wear: number | string): number;
    getKillstreakEnum(killstreak: number | string): number;
    getTextureEnum(texture: number | string): number;
    getQualityEnum(quality: number | string): number;
    getTextures(): SchemaEnum;
    getEffects(): SchemaEnum;
}

// Extra types you might need:
export type NameToDefindex = { [name: string]: number };
export type DefindexToName = { [defindex: number]: string };
export type SchemaEnum = NameToDefindex & DefindexToName;

// Import these like:
// import { ISchema, NameToDefindex, DefindexToName, SchemaEnum } from 'tf2-item-format'
```
Then you just have to:
```ts
import { createFormat } from 'tf2-item-format';

const format = createFormat(schema);
```
Every method is then export same as before.

You can use `parseSKU` and `toSKU` without schema:
```ts
import { parseSKU, toSKU } from 'tf2-item-format';
```

Please note that static schema has implemented a lot of overwrites for defindexes that simply cannot be obtained by the limited data we have, so when you are implementing it yourself you should use the current `Schema` as your guide.

## Instalation
Via NPM: `npm install tf2-item-format`
Or Yarn: `yarn add tf2-item-format`

## Documentation
Currently there is no full documentation.

We export these methods:
- `parseString`
- `stringify`
- `parseEconItem`
- `toSKU`
- `parseSKU`
- `createBPListing`
- `fixName`

And static schema:
- under property `schema`

Everything is fully typed so you should be able to get this working on your own, until I make a documentation.
Some of the types are a bit confusing which will get fixed in next major version.

### parseEconItem
```ts
parseEconItem(econ: EconItem, inNumbers: boolean, useDefindexes: boolean, options: { useTrueDefindex: boolean }): ParsedEconItem;
```

- `econ` is raw item you receive from the api
- `inNumbers` - changes return type of certain attributes to numbers instead of pure strings, eg. quality, texture, wear, ...
- `useDefindexes` - appends item defindex to the object, adds target & output aswell
- `options`
    - `useTrueDefindex` - returns true defindex item has on this econ, doesn't ask schema.

## Compability usage
```ts
// Have a name, want a sku
const attributes = parseString(name, true, true); // To get defindexes and enums
const sku = toSKU(attributes);

// Have a sku, want a name
const attributes = parseSKU(sku);
const name = stringify(attributes);

// Have a sku, want a bp listing
const attributes = parseSKU(sku);
const listing = createBPListing(attributes);
```
Every method should be interchangable in similar ways.
