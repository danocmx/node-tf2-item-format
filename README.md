# TF2 Item Format
Formatting for TF2 items.

## Features
- Parses item name into attribute object
- Stringifies attribute object into item name same as backpack.tf
- Parses ECON item into attributes
- Parses SKU into attributes
- Makes SKU out of attributes

# Instalation
Via NPM: `npm install tf2-item-format`
Or Yarn: `yarn add tf2-item-format`

# Documentation
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

# Compability usage
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