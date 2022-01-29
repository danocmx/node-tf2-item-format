import { SKUAttributes } from '../types';

export function hasTargetDefindex(
	attributes: SKUAttributes
): attributes is {
	targetDefindex: number;
	defindex: number;
	quality: number;
	craftable: boolean;
} {
	return Object.prototype.hasOwnProperty.call(attributes, 'targetDefindex');
}

export function hasOutputDefindex(
	attributes: SKUAttributes
): attributes is {
	outputDefindex: number;
	outputQuality: number;
	defindex: number;
	quality: number;
	craftable: boolean;
} {
	return Object.prototype.hasOwnProperty.call(attributes, 'outputDefindex');
}

export function hasOutputQuality(
	attributes: SKUAttributes
): attributes is {
	outputQuality: number;
	defindex: number;
	quality: number;
	craftable: boolean;
} {
	return Object.prototype.hasOwnProperty.call(attributes, 'outputQuality');
}

export function hasTexture(attributes: {
	texture?: string | number | undefined;
}): attributes is { texture: number } {
	return Object.prototype.hasOwnProperty.call(attributes, 'texture');
}
