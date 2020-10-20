import { StrigifySKUAttributes, ItemAttributes } from './';
export declare function nameTypeGuard(attrs: StrigifySKUAttributes | ItemAttributes): attrs is ItemAttributes;
export declare function skuTypeGuard(attrs: StrigifySKUAttributes | ItemAttributes): attrs is StrigifySKUAttributes;
