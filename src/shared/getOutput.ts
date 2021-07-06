export default function getOutput(output: string, outputQuality: string) {
	return removeQuality(outputQuality) ? `${outputQuality} ${output}` : output;
}

function removeQuality(quality: string) {
	return quality !== 'Unique';
}
