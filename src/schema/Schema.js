const staticSchema = require('tf2-static-schema');

class Schema {
	getEffect(search) {
		if (!this.effects) this.effects = staticSchema.static.getEffects();

		return this.effects[search];
	}

	getWear(search) {
		if (!this.wears) this.wears = staticSchema.static.getWears();

		return this.wears[search];
	}

	getKillstreak(search) {
		if (!this.killstreaks) this.killstreaks = staticSchema.static.getKillstreaks();

		return this.killstreaks[search];
	}

	getTexture(search) {
		if (!this.textures) this.textures = staticSchema.static.getPaintKits();

		return this.textures[search];
	}

	getDefindex(search) {
		if (!this.itemNames) this.itemNames = staticSchema.static.getItemNames();

		return this.itemNames[search];
	}

	getQuality(search) {
		if (!this.qualities) this.qualities = staticSchema.static.getQualities();

		return this.qualities[search];
	}
}

module.exports = new Schema();
