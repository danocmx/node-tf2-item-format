"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOutput(output, outputQuality) {
    return removeQuality(outputQuality) ? `${outputQuality} ${output}` : output;
}
exports.default = getOutput;
;
function removeQuality(quality) {
    return quality !== 'Unique';
}
