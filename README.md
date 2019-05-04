# TF2 Item Format
Formats strings/objects same way backpack.tf does.

# TODO
- thinking of adding more regular expressions, dunno if it has any more use (test effiency)

## Example
```js
// basic_example.js

const itemFormatting = require("../index");

// Just an example, the string is not possible in TF2
const objectDefaults = { 
    name: 'Attendant',
    originalName: 'Non-Craftable Strange Genuine Green Energy Festivized Specialized Killstreak Australium Jazzy Attendant (Field-Tested)',
    quality: 1,
    elevated: true,
    craftable: 0,
    australium: 1,
    festivized: true,
    particle: 9,
    killstreak: 2,
    wearTier: 3,
    texture: { id: '230', name: 'Jazzy' },  // or just Jazzy or 230
    target_item: null,
    crate: 0,
    medal: 0,
    craft_number: 0
}
// output -> stringDefeaults
itemFormatting.stringify(objectDefaults);

const stringDefeaults = "Non-Craftable Strange Genuine Green Energy Festivized Specialized Killstreak Australium Jazzy Attendant (Field-Tested)";
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

### More examples
Look to the unit tests folder for new examples, if you want to try them out use jest for unit testing