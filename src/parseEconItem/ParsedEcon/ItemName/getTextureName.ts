import schema from '../../../shared/schema';

export default function (texture: number|string): string {
	return schema.getTextureName(texture);
};

function isTextureDefindex(texture: number|string): boolean {
	/**
	 * This way we can check for strings too.
	 */
	return texture >= 0;
}
