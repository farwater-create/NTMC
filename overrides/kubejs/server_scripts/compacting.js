ServerEvents.recipes((e) => {
    e.recipes.create.compacting(
        [Item.of("ntmc:graphite").withChance(0.9)], 
        [Item.of("ntmc:graphite_powder")]
    ).heated();

    e.recipes.create.compacting(
        [
            Item.of("ntmc:impure_diamond").withChance(0.8),
            Item.of("minecraft:diamond").withChance(0.01),
            Item.of("ntmc:graphite_powder").withChance(0.15)
        ],
        [Item.of("ntmc:graphite")]
    ).superheated();
});