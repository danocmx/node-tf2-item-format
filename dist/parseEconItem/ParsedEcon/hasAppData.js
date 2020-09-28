"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * If econ contains `app_data` property it means we can set few extra attributes
*/
function default_1(item) {
    return Object.prototype.hasOwnProperty.call(item, 'app_data');
}
exports.default = default_1;
;
