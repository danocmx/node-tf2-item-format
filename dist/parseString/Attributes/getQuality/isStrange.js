"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(name) {
    return name.includes('Strange ') && !isStrangeException(name);
}
exports.default = default_1;
;
function isStrangeException(name) {
    return /(Strange Bacon Grease|Strange Filter: |Strange Count Transfer Tool|Strange Part: )/.test(name);
}
