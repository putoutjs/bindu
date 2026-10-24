import {PRAGRHYA} from '#pratyahara';
import {words} from './words.js';

const {keys} = Object;

const pragrhya = new Set(keys(words));

export const pragrhyamAsti = (a) => pragrhya.has(a) && PRAGRHYA.includes(a.at(-1));
