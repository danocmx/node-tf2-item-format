const { parse, stringify } = require("../index");


test("Regular item test, Object to String.", () => {
    const stringifiedItemObject = stringify({
        name: "Rocket Launcher",
        quality: 11,
        craftable: 1,
        australium: 1,
        festivized: true,
        killstreak: 3,
    });
    expect(stringifiedItemObject).toBe("Strange Festivized Professional Killstreak Australium Rocket Launcher");
});

test("Regular item test, String to Object.", () => {
    const item = "Strange Genuine Anger";
    const parsedItemString = parse(item);
    expect(parsedItemString).toEqual({
        name: "Anger",
        originalName: item,
        quality: 1,
        elevated: true,
        craftable: 1,
        australium: 0,
        festivized: false,
        particle: 0,
        killstreak: 0,
        wearTier: null,
        texture: null,
        item_type: null,
        target_item: null,
        crate: 0,
        craft_number: 0,
        medal: 0
    });
})

test("Skin item test, Object to String.", () => {
    const stringifiedItemObject = stringify({
        name: "Scattergun",
        quality: 11,
        craftable: 0,
        festivized: false,
        killstreak: 1,
        wearTier: 1,
        texture: "Civic Duty Mk.II",
    });
    expect(stringifiedItemObject).toBe("Non-Craftable Strange Killstreak Civic Duty Mk.II Scattergun (Factory New)");
});

test("Skin item test, String to Object.", () => {
    const item = "Festivized Professional Killstreak Jazzy Rocket Launcher";
    const parsedItemString = parse(item);
    expect(parsedItemString).toEqual({
        name: "Rocket Launcher",
        originalName: item,
        quality: 15,
        elevated: false,
        craftable: 1,
        australium: 0   ,
        festivized: true,
        particle: 0,
        killstreak: 3,
        wearTier: null,
        texture: {
            "id": "230",
            "name": "Jazzy"
        },
        item_type: null,
        target_item: null,
        crate: 0,
        craft_number: 0,
        medal: 0
    });
})

test("Numeric item test, Object to String.", () => {
    const stringifiedItemObject = stringify({
        name: "Backwards Ballcap",
        quality: 6,
        medal: 98
    });
    expect(stringifiedItemObject).toBe("Backwards Ballcap #98");
});

test("Numeric item test, String to Object.", () => {
    const item = "Vintage Medal #1033";
    const parsedItemString = parse(item);
    expect(parsedItemString).toEqual({
        name: "Medal",
        originalName: item,
        quality: 3,
        elevated: false,
        craftable: 1,
        australium: 0,
        festivized: false,
        particle: 0,
        killstreak: 0,
        wearTier: null,
        texture: null,
        item_type: null,
        target_item: null,
        medal: "1033",
        craft_number: 0,
        crate: 0
    });
})

test("Item type test, Object to String.", () => {
    const stringifiedItemObject = stringify({
        name: "Gunboats",
        quality: 6,
        killstreak: 2,
        craftable: 0,
        target_item: "Kit Fabricator"
    });
    expect(stringifiedItemObject).toBe("Non-Craftable Specialized Killstreak Gunboats Kit Fabricator");
});

test("Item type test, String to Object.", () => {
    const item = "Professor's Specs Strangifier";
    const parsedItemString = parse(item);
    expect(parsedItemString).toEqual({
        name: "Professor's Specs",
        originalName: item,
        quality: 6,
        elevated: false,
        craftable: 1,
        australium: 0,
        festivized: false,
        particle: 0,
        killstreak: 0,
        wearTier: null,
        texture: null,
        target_item: "Strangifier",
        item_type: "target",
        medal: 0,
        craft_number: 0,
        crate: 0
    });
})