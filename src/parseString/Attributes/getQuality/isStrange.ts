export default function (name: string): boolean {
	return name.includes('Strange ') && !isStrangeException(name);
};

function isStrangeException(name: string): boolean {
	return /(Strange Bacon Grease|Strange Filter: |Strange Count Transfer Tool|Strange Part: )/.test(name);
}
