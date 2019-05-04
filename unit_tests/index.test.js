const { parse, stringify } = require("../index");

test("Makes item object into a string.", () => {
    stringifiedItemObject = stringify({
        name: "Rocket Launcher",
        quality: 11,
        elevated: false,
        craftable: 1,
        australium: 1,
        festivized: true,
        particle: 0,
        killstreak: 3,
        wearTier: 0,
        item_type: null
    });
    expect(stringifiedItemObject).toBe("Strange Festivized Professional Killstreak Australium Rocket Launcher");
});

test("Item string into item object.", () => {
    parsedItemString = parse("Strange Festivized Professional Killstreak Australium Rocket Launcher");
    expect(parsedItemString).toEqual({
        name: "Rocket Launcher",
        originalName: "Strange Festivized Professional Killstreak Australium Rocket Launcher",
        quality: 11,
        elevated: false,
        craftable: 1,
        australium: 1,
        festivized: true,
        particle: 0,
        killstreak: 3,
        wearTier: null,
        item_type: null
    });
})