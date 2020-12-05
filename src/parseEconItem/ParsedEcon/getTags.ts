import {
	isType,
	getType,
	isClass,
	getClass,
	isGrade,
	getGrade,
	isCollection,
	getCollection,
} from './getTags/tags';
import { isQuality, getQuality, isWear, getWear } from './getTags/resourceTags';

import ParsedEcon from '../ParsedEcon';
import { TagAttributes, EconTag } from '../../types';

export default function ({ item }: ParsedEcon): TagAttributes {
	const { tags = [] } = item;

	const attributes: TagAttributes = {
		quality: 'Unique',
		wear: 0,
		classes: [],
	};

	for (let i = 0; i < tags.length; i++) {
		const tag: EconTag = tags[i];

		// The position is saved.
		if (isClass(tag)) attributes.classes.push(getClass(tag));
		else if (isType(tag)) attributes.type = getType(tag);
		else if (isQuality(tag)) attributes.quality = getQuality(tag);
		else if (isGrade(tag)) attributes.grade = getGrade(tag);
		else if (isCollection(tag)) attributes.collection = getCollection(tag);
		else if (isWear(tag)) attributes.wear = getWear(tag);
	}

	return attributes;
}
