StartupEvents.registry("item", (e) => {
    e.create("ntmc:incomplete_iron_pickaxe").maxStackSize(1);
    e.create("ntmc:incomplete_iron_axe").maxStackSize(1);
    e.create("ntmc:incomplete_iron_shovel").maxStackSize(1);
    e.create("ntmc:incomplete_iron_sword").maxStackSize(1);
    e.create("ntmc:incomplete_iron_hoe").maxStackSize(1);

    e.create("ntmc:conduction_ingot");

    e.create("ntmc:incomplete_controller").displayName("Incomplete ME Controller").maxStackSize(1);
});