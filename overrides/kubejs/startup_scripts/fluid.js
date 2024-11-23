StartupEvents.registry('fluid', (e) => {
    e.create('liquid_conductor')
      .displayName('Liquid Conductor')
      .stillTexture('kubejs:block/liquid_conductor_still')
      .flowingTexture('ntmc:block/liquid_conductor_flow')
      .bucketColor(0xffffff);

    e.create('liquid_redstone')
      .displayName('Liquid Redstone')
      .stillTexture('kubejs:block/liquid_redstone_still')
      .flowingTexture('ntmc:block/liquid_redstone_flow')
      .bucketColor(0xffffff);
});