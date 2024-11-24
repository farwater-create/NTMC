ServerEvents.recipes((e) => {
  let ti = Item.of(t)
  let t = "ntmc:incomplete_controller";

  e.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:controller")],
      Item.of("create:electron_tube"),
      [
        e.recipes.create.deploying(ti, [ti, Item.of("ae2:certus_quartz_crystal")]),
        e.recipes.create.deploying(ti, [ti, Item.of("ntmc:conduction_ingot")]),
        e.recipes.create.filling(ti, [Fluid.of("ntmc:molten_conductor", 50 * 81), ti]),
      ]
    )
    .transitionalItem(t)
    .loops(4);


  t = "ntmc:incomplete_logic_processor";

  e.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:logic_processor")],
      Item.of("ae2:printed_logic_processor"),
      [
        e.recipes.create.deploying(ti, [ti, Item.of("ae2:printed_silicon")]),
        e.recipes.create.deploying(ti, [ti, Item.of("minecraft:redstone")]),
        e.recipes.create.pressing(ti, ti),
      ]
    )
    .transitionalItem(t)
    .loops(1);


  t = "ntmc:incomplete_engineering_processor";

  e.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:calculation_processor")],
      Item.of("ae2:printed_calculation_processor"),
      [
        e.recipes.create.deploying(ti, [ti, Item.of("ae2:printed_silicon")]),
        e.recipes.create.deploying(ti, [ti, Item.of("minecraft:redstone")]),
        e.recipes.create.pressing(ti, ti),
      ]
    )
    .transitionalItem(t)
    .loops(1);


  t = "ntmc:incomplete_engineering_processor";

  e.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:engineering_processor")],
      Item.of("ae2:printed_engineering_processor"),
      [
        e.recipes.create.deploying(ti, [ti, Item.of("ae2:printed_silicon")]),
        e.recipes.create.deploying(ti, [ti, Item.of("minecraft:redstone")]),
        e.recipes.create.pressing(ti, ti),
      ]
    )
    .transitionalItem(t)
    .loops(1);
});