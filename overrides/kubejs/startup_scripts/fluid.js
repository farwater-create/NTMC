StartupEvents.registry('fluid', (e) => {
    e.create('ntmc:molten_conductor')
      .displayName('Molten Conductor')
      .stillTexture('ntmc:block/molten_conductor_still')
      .flowingTexture('ntmc:block/molten_conductor_flow');

    e.create('ntmc:molten_redstone')
      .displayName('Molten Redstone')
      .stillTexture('ntmc:block/molten_redstone_still')
      .flowingTexture('ntmc:block/molten_redstone_flow');
});