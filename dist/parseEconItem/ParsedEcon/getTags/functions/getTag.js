"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Template function to get a tag.
 */
function default_1(property, getter) {
    /**
     * @param {Object} tag
     * @return {number|string}
     */
    return (tag) => {
        const tagValue = tag[property] || tag.localized_tag_name;
        return (getter && tagValue ? getter(tagValue) : tagValue);
    };
}
exports.default = default_1;
;
