
// This line of code registers the custom fluids
ServerEvents.tags("fluid", (e) => {
    e.add("ntmc:molten_redstone", "ntmc:molten_redstone");
    e.add("ntmc:molten_conductor", "ntmc:molten_conductor");
  });

// This Line of Code Registers the custom recipes
  ServerEvents.recipes((e) => {
    //the amount for the fluids are in droplets not in Mb means 9000 droplets are 1 Ingot 
    e.custom({
      type: "tconstruct:alloy",
      inputs: [
        {
          amount: 9000,
          tag: "tconstruct:molten_gold",
        },
        {
          amount: 9000,
          tag: "ntmc:molten_redstone",
        },
      ],
      result: {
        amount: 18000,
        fluid: "ntmc:molten_conductor",
      },
      temperature: 900,
    });
  // This dictates the making of an ingot using an ingot cast
    e.custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/ingot",
      },
      cooling_time: 47,
      fluid: {
        amount: 9000,
        tag: "ntmc:molten_conductor",
      },
      result: "ntmc:conduction_ingot",
    });
  
    e.custom({
      type: "tconstruct:melting",
      ingredient: [
        {
          tag: "c:redstone_dusts",
        },
      ],
      result: {
        amount: 9000,
        fluid: "ntmc:molten_redstone",
      },
      temperature: 700,
      time: 60,
    });
  });