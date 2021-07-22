import isUnique from "./isUnique";

export default function isStrangeUnique(quality: string | number, elevated?: boolean) {
	return isUnique(quality) && !!elevated;
}
