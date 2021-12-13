import * as THREE from '../libs/three.module.js';
import {mooncats} from './mooncats.min.js';
import {MoonCatParser} from './mooncatParser.js';

export const texture_defs_mooncats = (() => {
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
            // console.log('Texture key: ', key);
        }
    });
    // console.log('Textures: ', defs);
    return {
        DEFS: defs
    }
}
)();