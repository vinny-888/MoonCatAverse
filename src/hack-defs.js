

export const hack_defs = (() => {

  const _INTRO = {
    enabled: false,
    foliageEnabled: false,
    introEnabled: false,
    oceanEnabled: false,
    hardcodedFoliageEnabled: true,
    PLAYER_POS: [0,0,0],
    PLAYER_ROT: [-0.0380279893805328, 0.3364980691628503, 0.013601301436886065, 0.9408176901358577],
    CAMERA_POS: [0,0],
    CAMERA_DECCELERATION: [-10, 0, -10],
    INTRO_RATE: 0.0005,
    WORLD_SIZE: 24
  };

  return {
    enabled: false,
    foliageEnabled: false,
    hardcodedFoliageEnabled: false,
    introEnabled: false,
    skipOceans: true,
    skipClouds: false,
    skipFoliageNoise: false,
    skipPruning: false,
    skipExteriorBlocks: false,
    skipAO: false,
    skipVariableLuminance: false,
    skipGravity: false,
    useFlatTerrain: false,
    showTools: true,
    fixedTerrainOrigin: false,
    PLAYER_POS: [0,0,0],
    PLAYER_ROT: [-0.0380279893805328, 0.3364980691628503, 0.013601301436886065, 0.9408176901358577],
    CAMERA_POS: [0,0],
    CAMERA_DECCELERATION: [-10, 0, -10],
    INTRO_RATE: 0.0005,
    WORLD_BLOCK_SIZE: 16,
    WORLD_SIZE: 24,
    WORLD_DISTRICTS_WIDTH: 10,
    DISTRICT_SIZE: 16,
    DISTRICT_SPACING: 30,
    PARCEL_SIZE: 10,
    PARCEL_SPACING: 4,
  };

})();