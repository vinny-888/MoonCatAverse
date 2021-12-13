import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.125/build/three.module.js';
import {mooncats} from '../resources/mooncats/mooncats.min.js';
import {MoonCatParser} from './mooncatParser.js';

export const texture_defs = (() => {
    let defs = {};
    let count =0;
    mooncats.forEach((mooncat)=>{
        let key =   (mooncat.saturation == 'Pale' ? mooncat.saturation + '_' : '') +
                    mooncat.hue + '_' + 
                    mooncat.pattern + '_' + 
                    mooncat.exp + '_' + 
                    mooncat.pose
                    ;
        if(defs[key] == null){
            let imageData = MoonCatParser.generateMoonCatImage(mooncat.id, 1);
            defs[key] = {
                colour: new THREE.Color(0xFFFFFF),
                textureKey: key,
                texture: imageData
            }
            count++;
        }
    });
    console.log('Textures: ', count);
    return {
        DEFS: defs
    }
}
)();