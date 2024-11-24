ServerEvents.recipes((e) => {
  let ti = Item.of(t)
  let t = "kubejs:incomplete_controller";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:controller")],
      Item.of("create:electron_tube"),
      [
        e.recipes.create.deploying(ti, [ti, Item.of("ae2:certus_quartz_crystal")]),
        e.recipes.create.deploying(ti, [ti, Item.of("ntmc:conduction_ingot")]),
        e.recipes.create.filling(ti, [Fluid.of("kubejs:liquid_conductor", 50 * 81), ti]),
      ]
    )
    .transitionalItem(t)
    .loops(4);
});