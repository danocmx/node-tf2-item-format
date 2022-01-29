/**
 * Checks if value is defindex,
 * can be used for textures or item defindexes or quality.
 * @param defindex
 * @returns
 */
export function hasDefindex(
	defindex: number | string | undefined | void | null
): defindex is number | string {
	return !!defindex || defindex === 0;
}
