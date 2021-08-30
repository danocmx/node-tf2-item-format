import staticSchema from './static/schema';
import { createFormat } from './';

const format = createFormat(staticSchema);

let {
	parseEconItem,
	parseString,
	stringify,
	fixName,
	createBPListing,
	toSKU,
	parseSKU,
	schema,
} = format;

parseEconItem = parseEconItem.bind(format);
parseString = parseString.bind(format);
stringify = stringify.bind(format);
fixName = fixName.bind(format);
createBPListing = createBPListing.bind(format);
toSKU = toSKU.bind(format);
parseSKU = parseSKU.bind(format);

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
