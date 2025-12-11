import putout from 'putout';
import Sanscript from '@indic-transliteration/sanscript';
import * as sandhi from './sandhi/index.js';
import {postProcess, preProcess} from './process.js';

export const toSLP1 = (a) => Sanscript.t(a, 'devanagari', 'slp1');
export const toDevanagari = (a) => Sanscript.t(a, 'slp1', 'devanagari');

export const bindu = (text, overrides = {}) => {
    const {fix = true, type} = overrides;
    const source = preProcess(text);
    
    const {code, places} = putout(source, {
        fix,
        plugins: [
            ['sandhi', sandhi],
        ],
    });
    
    const cleanText = postProcess(code);
    
    if (type === 'slp1')
        return {
            code: cleanText,
            places,
        };
    
    return {
        code: toDevanagari(cleanText),
        places,
    };
};
