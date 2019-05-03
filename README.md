# TF2 Item Format
Formats strings/objects same way backpack.tf does.

# TODO
- thinking of adding more regular expressions, dunno if it has any more use
- idk about item_type naming, maybe should another property with the item_type type (haha) eg. item_type: "target" or "output" && target: "Fabricator Kit"

## Example
```js
// basic_example.js¨

const itemFormatting = require("tf2-item-format");

// Just an example, the string is not possible in TF2
const objectDefaults = { 
    name: 'Attendant',
    originalName: 'Non-Craftable Strange Jazzy Genuine Green Energy Festivized Specialized Killstreak Australium Attendant (Field-Tested)',
    quality: 1,
    elevated: true,
    craftable: 0,
    australium: 1,
    festivized: true,
    particle: 9,
    killstreak: 2,
    wearTier: 3,
    texture: { id: '230', name: 'Jazzy' }  // or just Jazzy or 230
}
// output -> stringDefeaults
itemFormatting.stringify(objectDefaults);

const stringDefeaults = "Non-Craftable Strange Jazzy Genuine Green Energy Festivized Specialized Killstreak Australium Attendant (Field-Tested)";
// output -> objectDefaults
itemFormatting.parse(stringDefeaults);
```

## Reformatting strings
```js
// string_reformat.js

// Obviously this you will never need this kind of item parsed
let item = "Festivized Strange Australium Killstreak Jazzy Attendant (Field-Tested) Kit";
// Output -> Strange Jazzy Festivized Killstreak Australium Attendant Kit (Field-Tested) 
item = itemFormatting.stringify( itemFormatting.parse(item) )

```