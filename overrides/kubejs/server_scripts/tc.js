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
                fluid: "kubejs:liquid_redstone"
            }
        ],
        result: { fluid: "kubejs:liquid_conductor", amount: 288},
        temperature: 1400
    });

    e.custom({
        type: 'tconstruct:casting_table',
        cast: {
            tag: 'tconstruct:casts/multi_use/ingot'
        },
        cooling_time: 47,
        fluid: {
            amount: 90,
            fluid: 'kubejs:liquid_conductor'
        },
        result: {
            item: 'kubejs:conductor_ingot'
        }
    });

    e.custom({
        type: "tconstruct:melting",
        inputs: [
            {
                tag: "c:redstone_dusts"
            }
        ],
        result: { fluid: "kubejs:liquid_redstone", amount: 144},
        temperature: 700,
        time: 60
    });
});