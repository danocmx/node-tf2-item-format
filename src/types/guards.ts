import { StrigifySKUAttributes, ItemAttributes } from './';

export function nameTypeGuard(attrs: StrigifySKUAttributes|ItemAttributes): attrs is ItemAttributes {
	return Object.prototype.hasOwnProperty.call(attrs, 'name');
}

export function skuTypeGuard(attrs: StrigifySKUAttributes|ItemAttributes): attrs is StrigifySKUAttributes {
	return Object.prototype.hasOwnProperty.call(attrs, 'defindex');
}