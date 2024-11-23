StartupEvents.registry('fluid', (e) => {
    e.create('liquid_conductor')
      .displayName('Liquid Conductor')
      .stillTexture('kubejs:block/liquid_conductor_still')
      .flowingTexture('ntmc:block/liquid_conductor_flow')
      .bucketItem("ntmc:liquid_conductor")
});