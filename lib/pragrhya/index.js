import {PRAGRHYA} from '#pratyahara';
import {words} from './words.js';

const {keys} = Object;

const pragrhya = new Set(keys(words));

// `pragrhyamAsti` is a sandhi control function, not a grammar classifier:
// it tells whether the word is exempt from sandhi.
//
// - `apply-yan` skips pragrhya words
// - `apply-dirgha` skips pragrhya words
// - `apply-purvarupa` skips pragrhya words
export const pragrhyamAsti = (a) => pragrhya.has(a) && PRAGRHYA.includes(a.at(-1));
