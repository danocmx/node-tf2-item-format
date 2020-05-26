# TF2 Item Format
Formatting for TF2  items.

## Features
- Parses item name into attribute object
- Stringifies attribute object into item name same as backpack.tf
- Parses ECON item into attributes

# Instalation
Via NPM: `npm install tf2-item-format`

# Documentation
### parseEconItem(item) => `object`
Param | Type | Description
----- | ---- | -----------
item | `object` | https://github.com/DoctorMcKay/node-steamcommunity/wiki/CEconItem

#### Return
Property | Type | Description
-------- | ---- | -----------
name | `string` | shortened name of the item
id | `string` | item id
img | `string` | image url
tradable | `boolean` | is item tradable?
craftable | `boolean` | is item craftable?
quality | `number` | quality of the item
texture | `string|number` |
[wear] | `number` |
[elevated] | `boolean` |
[australium] | `boolean` |
[festivized] | `boolean` |
[effect] | `number` |
[isUniqueHat] | `boolean` | is item a unique hat?
[killstreak] | `number` |
classes | `string[]` | Array of classes
type | `string` | Type of the item as said by steam
[collection] | `string` |
[grade] | `string` |
[paint] | `string` |
parts | `string[]` | Array of parts
spells | `string[] | Array of spells
marketable | `boolean` |
commodity | `boolean` |

### parseString(name) => `object`
Param | Type | Description
----- | ---- | -----------
name | `string` | name of the item you want parsed

#### Return
Property | Type | Description
-------- | ---- | -----------
name | `string` | shortened name of the item
craftable | `boolean` | is item craftable?
[wear] | `number` |
[elevated] | `boolean` |
[australium] | `boolean` |
[festivized] | `boolean` |
[effect] | `number` |
[isUniqueHat] | `boolean` | is item a unique hat?
[killstreak] | `number` |
[target] | `string` | item target string
[output] | `string` | item output string
[outputQuality] | `string` | output quality
[itemNumber] | `object` | holds the `#123` value that's displayed on crafts, crates, cases and medals
[itemNumber.value] | `number` | value of the number
[itemNumber.type] | `string` | type of the number
quality | `string` | item quality
[elevated] | `boolean` | whether or not has item two qualities

### stringify(item) => `string`
Param | Type | Description
----- | ---- | -----------
item | `object` | See previous return

#### Return
Full name created from the object

### fixName(name) => `string`
Param | Type | Description
----- | ---- | -----------
name | `string` | Name you want to get fixed

#### Return
Fixed name

#### Warning
This method is highly experimental due to the
nature of some attributes being parsed in way
they're put in inside the name.
