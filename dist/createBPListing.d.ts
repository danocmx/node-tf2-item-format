import { ItemAttributes, BackpackTFListing, StrigifySKUAttributes } from './types';
/**
 * Creates a listing object that you can sent to backpack.tf
 * @todo work with SKU attributes
 */
export default function (item: ItemAttributes | StrigifySKUAttributes): BackpackTFListing;
