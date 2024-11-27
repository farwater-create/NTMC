ServerEvents.recipes((e) => {
    e.custom({
        type: "tconstruct:alloy",
        inputs: [
            {
                amount: 144,
                fluid: "hephaestus:molten_gold"
            },
            {
                amount: 144,
                fluid: "ntmc:molten_redstone"
            }
        ],
        result: { fluid: "ntmc:molten_conductor", amount: 288},
        temperature: 1400
    });

    e.custom({
        type: "tconstruct:casting_table",
        cast: {
            tag: "tconstruct:casts/multi_use/ingot"
        },
        cooling_time: 47,
        fluid: {
            amount: 144,
            fluid: "ntmc:molten_conductor"
        },
        result: {
            item: "ntmc:conductor_ingot"
        }
    });

    e.custom({
        type: "tconstruct:melting",
        inputs: [
            {
                tag: "minecraft:redstone_dust"
            }
        ],
        result: { fluid: "ntmc:molten_redstone", amount: 144},
        temperature: 700,
        time: 60
    });
});
