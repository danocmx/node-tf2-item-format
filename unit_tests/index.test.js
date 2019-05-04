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
    const item = "Strange Festivized Professional Killstreak Australium Rocket Launcher";
    const parsedItemString = parse(item);
    expect(parsedItemString).toEqual({
        name: "Rocket Launcher",
        originalName: item,
        quality: 11,
        elevated: false,
        craftable: 1,
        australium: 1,
        festivized: true,
        particle: 0,
        killstreak: 3,
        wearTier: null,
        texture: null,
        item_type: null,
        crate: 0,
        craft_number: 0,
        medal: 0
    });
})

test("Skin item test, Object to String.", () => {
    const stringifiedItemObject = stringify({
        name: "Rocket Launcher",
        quality: 15,
        craftable: 1,
        festivized: true,
        killstreak: 3,
        wearTier: 3,
        texture: "Jazzy",
    });
    expect(stringifiedItemObject).toBe("Festivized Professional Killstreak Jazzy Rocket Launcher (Field-Tested)");
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
        crate: 0,
        craft_number: 0,
        medal: 0
    });
})

test("Numeric item test, Object to String.", () => {
    const stringifiedItemObject = stringify({
        name: "Medal",
        quality: 3,
        medal: 1033
    });
    expect(stringifiedItemObject).toBe("Vintage Medal #1033");
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
        item_type: "Kit Fabricator"
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
        item_type: "Strangifier",
        medal: 0,
        craft_number: 0,
        crate: 0
    });
})