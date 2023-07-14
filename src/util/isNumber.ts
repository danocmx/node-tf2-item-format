export default function (str: string | number): str is number {
	/** Why this works:
	 *  1. Any non-NaN number is not NaN
	 *  2. isNaN considers any numeric string to be not NaN
	 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
	 * for further reference
	 */
	return !isNaN(str as number);
}
