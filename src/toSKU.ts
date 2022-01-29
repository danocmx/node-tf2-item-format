import {
	hasOutputDefindex,
	hasOutputQuality,
	hasTargetDefindex,
	hasTexture,
} from './toSKU/guards';
import { SKUAttributes } from './types';

export default function (item: SKUAttributes): string {
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
	if (hasTexture(item)) {
		sku += `;pk${item.texture}`;
	}
	if (item.elevated) {
		sku += ';strange';
	}
	if (item.killstreak && item.killstreak !== 0) {
		sku += `;kt-${item.killstreak}`;
	}
	if (hasTargetDefindex(item)) {
		sku += `;td-${item.targetDefindex}`;
	}
	if (item.festivized) {
		sku += ';festive';
	}

	if (item.itemNumber) {
		if (item.itemNumber.type === 'craft') {
			sku += `;n${item.itemNumber.value}`;
		} else if (item.itemNumber.type === 'crate') {
			sku += `;c${item.itemNumber.value}`;
		}
	}

	if (hasOutputDefindex(item)) {
		sku += `;od-${item.outputDefindex}`;
	}
	if (hasOutputQuality(item)) {
		sku += `;oq-${item.outputQuality}`;
	}

	return sku;
}
