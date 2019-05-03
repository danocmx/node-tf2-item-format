// string_reformat.js

const itemFormatting = require("../index");

// Obviously this you will never need this kind of item parsed
let item = "Festivized Strange Australium Killstreak Jazzy Attendant (Field-Tested) Kit";
// Output -> Strange Jazzy Festivized Killstreak Australium Attendant Kit (Field-Tested) 
item = itemFormatting.stringify( itemFormatting.parse(item) );
