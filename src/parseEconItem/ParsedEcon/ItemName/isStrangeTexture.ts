export default function (quality: string, texture?: string | number): boolean {
	return quality === 'Strange' && !!texture;
}
