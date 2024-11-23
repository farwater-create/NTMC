const recipeRemovals = [
    { output: "minecraft:iron_pickaxe" },
    { output: "minecraft:iron_axe" },
    { output: "minecraft:iron_shovel" },
    { output: "minecraft:iron_sword" },
    { output: "minecraft:iron_hoe" },
    { output: "create:electron_tube" },
];

ServerEvents.recipes((e) => {
    recipeRemovals.forEach((recipe) => {
        e.remove({ output: recipe.output });
    });
});