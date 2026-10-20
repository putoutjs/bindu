import {particles} from './particles.js';
import {astiAvyayaSuffix} from './suffixes.js';

const {keys} = Object;

const avyaya = new Set(keys(particles));

// `avyayamAsti` is a sandhi control function, not a grammar classifier:
// it tells whether sandhi should behave differently before this word.
//
// - `apply-dirgha` skips sandhi when the next word is avyaya
// - `apply-purvarupa` applies sandhi only when the next word is avyaya
export const avyayamAsti = (a) => {
    if (avyaya.has(a))
        return true;
    
    return astiAvyayaSuffix(a);
};
