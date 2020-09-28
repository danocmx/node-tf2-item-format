"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @link https://github.com/Nicklason/node-tf2-sku/blob/master/index.js
 */
function default_1(item) {
    let sku = `${item.defindex};${item.quality}`;
    if (item.effect) {
        sku += `;u${item.effect}`;
    }
    if (item.australium) {
        sku += ';australium';
    }
    if (!item.craftable) {
        sku += ';uncraftable';
    }
    if (item.wear) {
        sku += `;w${item.wear}`;
    }
    if (item.texture) {
        sku += `;pk${item.texture}`;
    }
    if (item.elevated) {
        sku += ';strange';
    }
    if (item.killstreak && item.killstreak !== 0) {
        sku += `;kt-${item.killstreak}`;
    }
    if (item.target) {
        sku += `;td-${item.target}`;
    }
    if (item.festive) {
        sku += ';festive';
    }
    if (item.itemNumber) {
        if (item.itemNumber.type === 'craft') {
            sku += `;n${item.itemNumber.value}`;
        }
        else if (item.itemNumber.type === 'crate') {
            sku += `;c${item.itemNumber.value}`;
        }
    }
    if (item.output) {
        sku += `;od-${item.output}`;
    }
    if (item.outputQuality) {
        sku += `;oq-${item.outputQuality}`;
    }
    return sku;
}
exports.default = default_1;
;
