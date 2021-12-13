import * as THREE from './libs/three.module.js';


export const defs = (() => {

  return {
      FOG_RANGE: [1500, 2000], // Lowering for performance
      UNDERWATER_RANGE: [0, 50],
      FOG_COLOUR: new THREE.Color(0x111111).convertSRGBToLinear(),
      MOON_COLOUR: new THREE.Color(0x808080).convertSRGBToLinear(),
      UNDERWATER_COLOUR: new THREE.Color(0x3a6fb5).convertSRGBToLinear(),
      SKY_COLOUR: new THREE.Color(0x000000).convertSRGBToLinear(),
      PLAYER_POS: [0, 50, 0],
      PLAYER_ROT: [0.02753162419089479, -0.7573631733845853, 0.031998988835540886, 0.6516280365237096],
  };
})();