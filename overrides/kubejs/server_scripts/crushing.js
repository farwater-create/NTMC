ServerEvents.recipes((e) => {
    e.recipes.create.crushing(
        [
            Item.of("ntmc:graphite_powder").withChance(0.4),
            Item.of("create:xp_nugget").withChance(0.2)
        ],
        Item.of("ntmc:impure_diamond")
    );
  });