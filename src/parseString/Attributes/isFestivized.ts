export default function (name: string): boolean {
	return name.includes('Festivized ') && !name.includes('Festivized Formation');
}
