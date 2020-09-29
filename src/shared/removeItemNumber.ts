import { ItemNumber } from "../types";

export default function (name: string, itemNumber: ItemNumber) {
    let itemName = name;
    
    if (itemNumber.type === 'series') itemName = itemName.replace(` Series #${itemNumber.value}`, '');
    else itemName = itemName.replace(` #${itemNumber.value}`, '');
    
    return itemName;
}