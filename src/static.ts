import staticSchema from './static/schema';
import { createFormat } from './';

const {
	parseEconItem,
	parseString,
	stringify,
	fixName,
	createBPListing,
	toSKU,
    parseSKU,
	schema,
} = createFormat(staticSchema);

export {
	parseEconItem,
	parseString,
	stringify,
	fixName,
	createBPListing,
	toSKU,
    parseSKU,
	schema,
};
