export default function (str: string | number): str is number {
	// Although it doesn't check for decimals, it is not required here.
	return typeof str === 'number' || /^\d+$/.test(str);
}
