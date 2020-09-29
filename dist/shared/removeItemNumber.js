"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(name, itemNumber) {
    let itemName = name;
    if (itemNumber.type === 'series')
        itemName = itemName.replace(` Series #${itemNumber.value}`, '');
    else
        itemName = itemName.replace(` #${itemNumber.value}`, '');
    return itemName;
}
exports.default = default_1;
