import {particles} from './particles.js';
import {astiAvyayaSuffix} from './suffixes.js';

const {keys} = Object;

const avyaya = new Set(keys(particles));

export const avyayamAsti = (a) => {
    if (avyaya.has(a))
        return true;
    
    return astiAvyayaSuffix(a);
};
