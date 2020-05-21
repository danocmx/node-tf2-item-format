module.exports = function getOutput(output, outputQuality) {
	return removeQuality(outputQuality) ? `${outputQuality} ${output}` : output;
}

function removeQuality(quality) {
	return quality !== 'Unique';
}
