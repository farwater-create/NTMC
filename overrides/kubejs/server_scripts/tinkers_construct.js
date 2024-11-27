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