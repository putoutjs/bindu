import {particles} from './particles.js';
import {pronouns} from './pronouns.js';
import {demonstratives} from './demonstratives.js';

const {keys} = Object;

const avyaya = new Set([
    ...keys(particles),
    ...keys(pronouns),
    ...keys(demonstratives),
]);

export const avyayamAsti = (a) => {
    return avyaya.has(a);
};
