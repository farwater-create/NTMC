ServerEvents.recipes((e) => {
  e.recipes.create.deploying("ae2:printed_silicon", ["ae2:silicon", "ae2:silicon_press"]).keepHeldItem();
  e.recipes.create.deploying("ae2:printed_logic_processor", ["minecraft:gold_ingot", "ae2:logic_processor_press"]).keepHeldItem();
  e.recipes.create.deploying("ae2:printed_calculation_processor", ["ae2:certus_quartz_crystal", "ae2:calculation_processor_press"]).keepHeldItem();
  e.recipes.create.deploying("ae2:printed_engineering_processor", ["minecraft:diamond", "ae2:engineering_processor_press"]).keepHeldItem();
});