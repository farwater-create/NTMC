ServerEvents.recipes((e) => {
    let t = "kubejs:incomplete_controller";
    e.recipes.create
      .sequenced_assembly(
        [Item.of("ae2:controller")],
        Item.of("create:electron_tube"),
        [
          e.recipes.create.deploying(t, [t, Item.of("ae2:certus_quartz_crystal")]),
          e.recipes.create.deploying(t, [t, Item.of("kubejs:conduction_ingot")]),
          e.recipes.create.filling(t, [t, Fluid.of("kubejs:liquid_conductor", 50)]),
        ]
      )
      .transitionalItem(t)
      .loops(4);
  });