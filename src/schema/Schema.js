const { requireStatic } = require('tf2-static-schema');

class Schema {
	getEffect(search) {
		if (!this.effects) this.effects = requireStatic('effects');

		return this.effects[search];
	}

	getWear(search) {
		if (!this.wears) this.wears = requireStatic('wears');

		return this.wears[search];
	}

	getKillstreak(search) {
		if (!this.killstreaks) this.killstreaks = requireStatic('killstreaks');

		return this.killstreaks[search];
	}

	getTexture(search) {
		if (!this.textures) this.textures = requireStatic('paint-kits');

		return this.textures[search];
	}

	getDefindex(search) {
		if (!this.itemNames) this.itemNames = requireStatic('item-names');

		const itemNamesDefindexes = Object.keys(this.itemNames);
		for (let i = 0; i < itemNamesDefindexes.length; i++) {
			const defindex = itemNamesDefindexes[i];
			const name = this.itemNames[defindex];

			if (name === search) return defindex;
		}

		return null;
	}

	getQuality(search) {
		if (!this.qualities) this.qualities = requireStatic('qualities');

		return this.qualities[search];
	}
}

module.exports = new Schema();
