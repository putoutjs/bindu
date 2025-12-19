import putout from 'putout';
import Sanscript from '@indic-transliteration/sanscript';
import * as acSandhi from './sandhi/ac/index.js';
import * as visargaSandhi from './sandhi/visarga/index.js';
import {postProcess, preProcess} from './process.js';

export const toSLP1 = (a) => Sanscript.t(a, 'devanagari', 'slp1');
export const toDevanagari = (a) => Sanscript.t(a, 'slp1', 'devanagari');
export const toIAST = (a) => Sanscript.t(a, 'slp1', 'iast');

export const bindu = (text, overrides = {}) => {
    const {fix = true, type} = overrides;
    const source = preProcess(text);
    
    const {code, places} = putout(source, {
        fix,
        plugins: [
            ['sandhi/ac', acSandhi],
            ['sandhi/visarga', visargaSandhi],
        ],
    });
    
    const cleanText = postProcess(code);
    
    if (type === 'slp1')
        return {
            code: cleanText,
            places,
        };
    
    if (type === 'iast')
        return {
            code: toIAST(cleanText),
            places,
        };
    
    return {
        code: toDevanagari(cleanText),
        places,
    };
};
