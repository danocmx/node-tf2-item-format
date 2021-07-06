export default function (quality: number, craftable: boolean): boolean {
	return quality === 6 && !craftable;
}
