"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Template function to check for category.
 * @param {Object} category
 * @return {Function}
 */
function default_1(category) {
    /**
     * @param {Object} tag
     * @return {string|number}
     */
    return (tag) => (tag.category === category);
}
exports.default = default_1;
;
