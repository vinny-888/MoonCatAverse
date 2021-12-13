import * as THREE from './libs/three.module.js';

import {entity} from './entity.js';
import {hack_defs} from './hack-defs.js';
import {math} from './math.js';

import {voxel_shader} from './voxel-shader.js';


export const cloud_controller = (function() {

  class CloudController extends entity.Component {
    constructor() {
      super();
      this.clouds_ = []
    }

    InitEntity() {
      const threejs = this.FindEntity('renderer').GetComponent('ThreeJSController');

      const geo = new THREE.BoxGeometry(1, 1, 1);

      this.group_ = new THREE.Group();

      for (let i = 0; i < 100; ++i) {
        const size = math.rand_int(1, 1) * 5;

        const x = math.rand_int(-1500, 1500);
        const y = math.rand_int(0, 30) * 25;
        const z = math.rand_int(-1500, 1500);

        const mat = new THREE.ShaderMaterial({
            uniforms: {
              cloudMin: {
                value: null,
              },
              cloudMax: {
                value: null,
              },
            },
            vertexShader: voxel_shader.SUN.VS,
            fragmentShader: voxel_shader.SUN.PS,
            side: THREE.FrontSide,
            blending: THREE.AdditiveBlending,
            transparent: true,
        });
        const box = new THREE.Mesh(geo, mat);
        box.position.set(x, y, z);
        box.scale.set(size,size,size);

        this.group_.add(box);
        this.clouds_.push(box);
      }

      this.group_.visible = !hack_defs.skipClouds;

      threejs.scene_.add(this.group_);

      this.CreateSun_();
    }

    CreateSun_() {
      const geo = new THREE.PlaneGeometry(300, 300);

      const mat = new THREE.ShaderMaterial({
          uniforms: {},
          vertexShader: voxel_shader.EARTH.VS,
          fragmentShader: voxel_shader.EARTH.PS,
          side: THREE.FrontSide,
          transparent: true,
          blending: THREE.AdditiveBlending,
      });
      const sun = new THREE.Mesh(geo, mat);
      sun.position.set(2000, 39, -286);
      sun.rotateX(0.5 * 2.0 * Math.PI);
      sun.lookAt(0, 0, 0);

      this.group_.add(sun);
    }

    Update(_) {
      const player = this.FindEntity('player');
      const cameraPosition = player.Position;

      this.group_.position.set(cameraPosition.x, 250, cameraPosition.z);

      for (let i = 0; i < this.clouds_.length; ++i) {
        const cloud = this.clouds_[i];
        cloud.updateMatrixWorld(true);
        const mat = cloud.material;
        mat.uniforms.cloudMin.value = new THREE.Vector3(-0.5, -0.5, -0.5);
        mat.uniforms.cloudMax.value = new THREE.Vector3(0.5, 0.5, 0.5);
        mat.uniforms.cloudMin.value.applyMatrix4(cloud.matrixWorld);
        mat.uniforms.cloudMax.value.applyMatrix4(cloud.matrixWorld);
      }
    }
  }

  return {
      CloudController: CloudController
  };
})();