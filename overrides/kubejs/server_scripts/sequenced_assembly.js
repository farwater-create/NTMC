ServerEvents.recipes((e) => {
  let t = "kubejs:incomplete_controller";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:controller")],
      Item.of("create:electron_tube"),
      [
        e.recipes.create.deploying(Item.of(t), [Item.of(t), Item.of("ae2:certus_quartz_crystal")]),
        e.recipes.create.deploying(Item.of(t), [Item.of(t), Item.of("ntmc:conduction_ingot")]),
        e.recipes.create.filling(Item.of(t), [Fluid.of("kubejs:liquid_conductor", 50 * 81), Item.of(t)]),
      ]
    )
    .transitionalItem(t)
    .loops(4);
});