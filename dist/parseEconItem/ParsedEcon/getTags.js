"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tags_1 = require("./getTags/tags");
const resourceTags_1 = require("./getTags/resourceTags");
function default_1({ item }) {
    const { tags = [] } = item;
    const attributes = {
        quality: 'Unique',
        wear: 0,
        classes: [],
    };
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        // The position is saved.
        if (tags_1.isClass(tag))
            attributes.classes.push(tags_1.getClass(tag));
        else if (tags_1.isType(tag))
            attributes.type = tags_1.getType(tag);
        else if (resourceTags_1.isQuality(tag))
            attributes.quality = resourceTags_1.getQuality(tag);
        else if (tags_1.isGrade(tag))
            attributes.grade = tags_1.getGrade(tag);
        else if (tags_1.isCollection(tag))
            attributes.collection = tags_1.getCollection(tag);
        else if (resourceTags_1.isWear(tag))
            attributes.wear = resourceTags_1.getWear(tag);
    }
    return attributes;
}
exports.default = default_1;
;
