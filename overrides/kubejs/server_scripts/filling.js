ServerEvents.recipes((e) => {
    e.recipes.create.filling(Item.of("create:electron_tube"), [
        Item.of("create:iron_sheet"),
        Fluid.of("ntmc:molten_conductor", 288 * 81),
    ]);
});