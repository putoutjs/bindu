import putout from 'putout';
import Sanscript from '@indic-transliteration/sanscript';
import {createSandhi} from '#sandhi';
import {createShraum} from '#shraum';
import {createGlaum} from '#glaum';
import * as acSandhi from './sandhi/ac/index.js';
import * as visargaSandhi from './sandhi/visarga/index.js';
import * as halSandhi from './sandhi/hal/index.js';
import {postProcess, preProcess} from './process.js';
import {detect} from './detect.js';

export const toSLP1 = (a, from = detect(a)) => {
    if (from === 'slp1')
        return a;
    
    return Sanscript.t(a.normalize('NFC'), from, 'slp1');
};
export const toDevanagari = (a) => Sanscript.t(a, 'slp1', 'devanagari');
export const toIAST = (a) => Sanscript.t(a, 'slp1', 'iast');

export const bindu = (text, overrides = {}) => {
    const {
        fix = true,
        type,
        from,
        rules,
    } = overrides;
    
    const source = preProcess(text, from);
    
    const {code, places} = putout(source, {
        fix,
        rules,
        runners: {
            when: createSandhi,
            shraum: createShraum,
            karya: createGlaum,
        },
        plugins: [
            ['sandhi/ac', acSandhi],
            ['sandhi/visarga', visargaSandhi],
            ['sandhi/hal', halSandhi],
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
