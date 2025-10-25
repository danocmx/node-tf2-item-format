# TF2 Item Format

Formatting for TF2 items.

Install it via `npm install tf2-item-format`

## Features

- Parses item name into attribute object
- Stringifies attribute object into item name same as backpack.tf
- Parses ECON item into attributes
- Parses SKU into attributes
- Makes SKU out of attributes
- Creates backpack.tf compatible format for listing creation

## Support the project

`tf2-item-format` is now used in number of production grade projects for handling item data,
help support the project by donating items [here](https://steamcommunity.com/tradeoffer/new/?partner=162338347&token=Od7J3LIh).

### API

To inject your own schema use this interface:

```ts
export type ISchema = {
	getDefindex(search: number | string): number | null;
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
	isUniqueHat(defindexOrName: string | number): boolean;
	getItems(): SchemaItem[]; // Return GetSchemaItems API response
	getVersion(): number;
};

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

`getVersion` function should return a versioning number for your schema, we recommend incrementing
this whenever you update your schema, so that cached items, like exceptions for item combinations
that cannot co-exist, can be recalculated. Only do this whenever the schema actually changes,
easiest way to do that, is by checking the item count between updates.

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
parseEconItem(econ: EconItem, inNumbers: boolean, useDefindexes: boolean, options?: { useTrueDefindex: boolean }): ParsedEconItem;
```

- `econ` is raw item you receive from the api
- `inNumbers` - changes return type of certain attributes to numbers instead of pure strings, eg. quality, texture, wear, ...
- `useDefindexes` - appends item defindex to the object, adds target & output aswell
- `options`
    - `useTrueDefindex` - returns true defindex item has on this econ, doesn't ask schema.
    - `itemNumberFromFraudWarning` - retrieve item number (crate series or craft number) from `fraudwarning` property
    - `retrieveCrateNumber` - if item is a case, retrieve it's case number
- Returns `ParsedEconItem` which is an object of all attributes the econ gives us

### createBPListing

```ts
createBPListing(attributes: ItemAttributes | StringifySKUAttributes, options?: CreateBPListingOptions): BackpackTFListing
```

- `attributes` - these you get from `parseString`, `parseSKU` or `parseEconItem`, all are compatible
- `options`
    - `unuSkinsToDecorated` - defaults unusual skins to decorated weapon quality, default value is `true`
- Returns `BackpackTFListing` object compatible with `item` object in backpack.tf listing creation api

### stringify

```ts
stringify(attributes: StrigifySKUAttributes | ItemAttributes, options?: StringifyOptions): string
```

- `attributes` - these you get from `parseString`, `parseSKU` or `parseEconItem`, all are compatible
- `options`
    - `determineUniqueHat` - if set it checks in schema if given item should use `The` in name, defaults to `false`
- Returns the item name

> [!INFO] 
> If you are using sku format to store your items and want to use `The` in your names, you have to turn `determineUniqueHat` to `true`.

### parseSKU
```ts
parseSKU(sku: string): SKUAttributes
```

Parse Marketplace.tf's SKU format into `SKUAttributes` object, which is compatible with other methods.

### toSKU
```ts
toSKU(attribute: SKUAttributes): string
```

Get an SKU from `SKUAttributes` object, you can also supply `EconItem` or attributes from `parseString` if you have `inNumbers` and `useDefindexes` set to true.

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
