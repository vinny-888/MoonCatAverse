import {mooncats} from '../resources/mooncats/mooncats.min.js';
import {MoonCatParser} from './mooncatParser.js';

window.addEventListener('DOMContentLoaded', () => {
    let countInput = document.getElementById('count');
    document.getElementById('genesis').onchange = ()=>{onChangeInput()};
    countInput.onkeyup = ()=>{onChangeInput()};
    onChangeInput()
});

function onChangeInput(){
    let count = document.getElementById('count').value;
    generator.generateRandomMoonCats(count);    
}

export const generator = (function () {
    const existingMoonCats = mooncats.map((m) => m.id);
    function randomMoonCatId(size) {
        return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    }
    
    return {
        generateRandomMoonCats: function(count){
            let output = document.getElementById('output');
            let genesis = document.getElementById('genesis').checked;
            let length = 8;
            let prefix = '00';
            if(genesis){
                length = 8;
                prefix = 'ff';
            }
            let log = document.getElementById('log');
            output.innerHTML = '';
            log.value = '';
            for(let i=0; i< count; i++){
                let newMoonCat = randomMoonCatId(length);
                while (existingMoonCats.indexOf('0x' + prefix + newMoonCat) != -1){
                    console.log('Already Exists: 0x' + prefix + newMoonCat)
                    log.value += 'Already Exists Skipping: 0x' + prefix + newMoonCat + '\n';
                    newMoonCat = randomMoonCatId();
                }
                // console.log('New MoonCat Found: 0x00' + newMoonCat)
                log.value += 'New MoonCat Found: 0x' + prefix + newMoonCat + '\n';
                
                output.appendChild(MoonCatParser.generateMoonCatCanvas(prefix + newMoonCat, 4));
            }
        }
    }
})();