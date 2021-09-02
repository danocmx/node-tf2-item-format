const { assert } = require('chai');

const { toSKU, parseSKU } = require('../dist/static');

describe('toSKU', () => {
    it('case #1', () => {
		const sku = toSKU({
			defindex: 5021,
			quality: 6,
			craftable: true,
		});

		assert.equal(sku, '5021;6');
	});

	it('case #2', () => {
        const sku = toSKU({
			defindex: 30094,
			quality: 5,
			craftable: true,
			effect: 62,
        });

		assert.equal(sku, '30094;5;u62');
	});

	it('case #3', () => {
        const sku = toSKU({
			defindex: 17249,
			quality: 11,
			craftable: true,
			effect: 703,
			wear: 5,
			texture: 249,
        });

		assert.equal(sku, '17249;11;u703;w5;pk249');
	});

	it('case #4', () => {
        const sku = toSKU({
			defindex: 30351,
			quality: 5,
			craftable: true,
			effect: 11,
            elevated: true,
        });

		assert.equal(sku, '30351;5;u11;strange');
	});

	it('case #5', () => {
        const sku = toSKU({
			defindex: 20006,
			quality: 6,
			craftable: true,
			outputDefindex: 513,
			outputQuality: 14,
        });

		assert.equal(sku, '20006;6;od-513;oq-14');
	});

	it('case #6', () => {
        const sku = toSKU({
			defindex: 20000,
			quality: 6,
			craftable: true,
			targetDefindex: 486,
			outputDefindex: 6522,
			outputQuality: 6,
        });

		assert.equal(sku, '20000;6;td-486;od-6522;oq-6');
	});

	it('case #7', () => {
        const sku = toSKU({
			defindex: 6526,
			quality: 6,
			craftable: false,
			killstreak: 3,
			targetDefindex: 200,
        });

		assert.equal(sku, '6526;6;uncraftable;kt-3;td-200');
	});

	it('case #8', () => {
        const sku = toSKU({
			defindex: 6526,
			quality: 6,
			craftable: false,
			killstreak: 3,
			targetDefindex: 200,
        });

		assert.equal(sku, '6526;6;uncraftable;kt-3;td-200');
	});

	it('case #9', () => {
        const sku = toSKU({
			defindex: 15010,
			quality: 15,
			craftable: true,
			wear: 5,
			texture: 2,
			elevated: true,
			killstreak: 1,
        });

		assert.equal(sku, '15010;15;w5;pk2;strange;kt-1');
	});

	it('case #10', () => {
        const sku = toSKU({
			defindex: 15085,
			quality: 11,
			craftable: true,
			wear: 3,
			texture: 60,
			killstreak: 2,
        });

		assert.equal(sku, '15085;11;w3;pk60;kt-2');
	});

	it('case #11', () => {        
        const sku = toSKU( {
			defindex: 16308,
			quality: 11,
			craftable: true,
			wear: 3,
			texture: 308,
        });

		assert.equal(sku, '16308;11;w3;pk308');
	});

	it('case #12', () => {
        const sku = toSKU({
			defindex: 5883,
			quality: 6,
			craftable: true,
			itemNumber: { type: 'crate', value: 109 },
        });

		assert.equal(sku, '5883;6;c109');
	});

	it('case #13 - Red Rock Roscoe texture', () => {
		const sku = toSKU({
			defindex: 15013,
			quality: 15,
			wear: 3,
			texture: 0,
			festivized: true,
			killstreak: 2,
			craftable: true
        });

		assert.equal(sku, '15013;15;w3;pk0;kt-2;festive');
	})

	it('case #14 - Bat', () => {
		const sku = toSKU({
			defindex: 0,
			quality: 6,
			craftable: true,
        });

		assert.equal(sku, '0;6');
	})

	it('case #15 - Bat output', () => {
		const sku = toSKU({
			defindex: 20006,
			quality: 6,
			craftable: true,
			outputDefindex: 0,
			outputQuality: 6,
        });

		assert.equal(sku, '20006;6;od-0;oq-6');
	})

	it('case #16 - Bat target', () => {
		const sku = toSKU({
			defindex: 20000,
			quality: 6,
			craftable: true,
			targetDefindex: 0,
			outputDefindex: 6522,
			outputQuality: 6,
        });

		assert.equal(sku, '20000;6;td-0;od-6522;oq-6');
	})
});

describe('parseSKU', () => {
	it('case #1', () => {
		const skuAttrs = parseSKU('5021;6');

		assert.deepEqual(skuAttrs, {
			defindex: 5021,
			quality: 6,
			craftable: true,
		});
	});

	it('case #2', () => {
		const skuAttrs = parseSKU('30094;5;u62');

		assert.deepEqual(skuAttrs, {
			defindex: 30094,
			quality: 5,
			craftable: true,
			effect: 62,
		});
	});

	it('case #3', () => {
		const skuAttrs = parseSKU('17249;11;u703;w5;pk249');

		assert.deepEqual(skuAttrs, {
			defindex: 17249,
			quality: 11,
			craftable: true,
			effect: 703,
			wear: 5,
			texture: 249,
		});
	});

	it('case #4', () => {
		const skuAttrs = parseSKU('30351;5;u11;strange');

		assert.deepEqual(skuAttrs, {
			defindex: 30351,
			quality: 5,
			craftable: true,
			effect: 11,
            elevated: true,
		});
	});

	it('case #5', () => {
		const skuAttrs = parseSKU('20006;6;od-513;oq-14');

		assert.deepEqual(skuAttrs, {
			defindex: 20006,
			quality: 6,
			craftable: true,
			outputDefindex: 513,
			outputQuality: 14,
		});
	});

	it('case #6', () => {
		const skuAttrs = parseSKU('20000;6;td-486;od-6522;oq-6');

		assert.deepEqual(skuAttrs, {
			defindex: 20000,
			quality: 6,
			craftable: true,
			targetDefindex: 486,
			outputDefindex: 6522,
			outputQuality: 6,
		});
	});

	it('case #7', () => {
		const skuAttrs = parseSKU('6526;6;uncraftable;kt-3;td-200');

		assert.deepEqual(skuAttrs, {
			defindex: 6526,
			quality: 6,
			craftable: false,
			killstreak: 3,
			targetDefindex: 200,
		});
	});

	it('case #8', () => {
		const skuAttrs = parseSKU('20003;6;kt-3;td-356;od-6526;oq-6');

		assert.deepEqual(skuAttrs, {
			defindex: 20003,
			quality: 6,
			craftable: true,
			killstreak: 3,
            targetDefindex: 356,
            outputDefindex: 6526,
            outputQuality: 6
		});
	});

	it('case #9', () => {
		const skuAttrs = parseSKU('15010;15;w5;pk2;strange;kt-1');

		assert.deepEqual(skuAttrs, {
			defindex: 15010,
			quality: 15,
			craftable: true,
			wear: 5,
			texture: 2,
			elevated: true,
			killstreak: 1,
		});
	});

	it('case #10', () => {
		const skuAttrs = parseSKU('15085;11;w3;pk60;kt-2');

		assert.deepEqual(skuAttrs, {
			defindex: 15085,
			quality: 11,
			craftable: true,
			wear: 3,
			texture: 60,
			killstreak: 2,
		});
	});

	it('case #11', () => {
		const skuAttrs = parseSKU('16308;11;w3;pk308');

		assert.deepEqual(skuAttrs, {
			defindex: 16308,
			quality: 11,
			craftable: true,
			wear: 3,
			texture: 308,
		});
	});

	it('case #12', () => {
		const skuAttrs = parseSKU('5883;6;c109');

		assert.deepEqual(skuAttrs, {
			defindex: 5883,
			quality: 6,
			craftable: true,
			itemNumber: { type: 'crate', value: 109 },
		});
	});

	it('case #13 - strangifier chemistry set', () => {
		const skuAttrs = parseSKU('20005;6;td-441;od-5783;oq-6');

		assert.deepEqual(skuAttrs, {
			defindex: 20005,
			quality: 6,
			craftable: true,
			targetDefindex: 441,
			outputDefindex: 5783,
			outputQuality: 6
		});
	})

	it('case #14 - Red Rock Roscoe texture', () => {
		const skuAttrs = parseSKU('15013;15;w3;pk0;kt-2;festive');

		assert.deepEqual(skuAttrs, {
			defindex: 15013,
			quality: 15,
			wear: 3,
			texture: 0,
			festivized: true,
			killstreak: 2,
			craftable: true
		});
	})

	it('case #15 - Bat', () => {
		const skuAttrs = parseSKU('0;6');

		assert.deepEqual(skuAttrs, {
			defindex: 0,
			quality: 6,
			craftable: true,
		});
	})

	it('case #16 - Bat output', () => {
		const skuAttrs = parseSKU('20006;6;od-0;oq-6');

		assert.deepEqual(skuAttrs, {
			defindex: 20006,
			quality: 6,
			craftable: true,
			outputDefindex: 0,
			outputQuality: 6,
		});
	})

	it('case #17 - Bat target', () => {
		const skuAttrs = parseSKU('20000;6;td-0;od-6522;oq-6');

		assert.deepEqual(skuAttrs, {
			defindex: 20000,
			quality: 6,
			craftable: true,
			targetDefindex: 0,
			outputDefindex: 6522,
			outputQuality: 6,
		});
	})
});
