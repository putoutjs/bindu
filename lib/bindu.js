import putout from 'putout';
import Sanscript from '@indic-transliteration/sanscript';
import * as sandhi from './sandhi/index.js';
import {danda, avagraha} from './symbols.js';

export const toSLP1 = (a) => Sanscript.t(a, 'devanagari', 'slp1');
export const toDevanagari = (a) => Sanscript.t(a, 'slp1', 'devanagari');

export const bindu = (text, overrides = {}) => {
    const {fix = true, type} = overrides;
    const source = toSLP1(text)
        .replaceAll(' ', ',')
        .replaceAll(avagraha.spl1, avagraha.code)
        .replaceAll(danda.spl1, danda.code);
    
    const {code, places} = putout(source, {
        fix,
        plugins: [
            ['sandhi', sandhi],
        ],
    });
    
    const cleanText = code
        .replaceAll(/[,;()]/g, '')
        .replaceAll(avagraha.code, avagraha.spl1)
        .replaceAll(danda.code, danda.spl1)
        .slice(0, -1);
    
    if (type === 'slp1')
        return {
            code: convertDashToDanda(cleanText),
            places,
        };
    
    return {
        code: convertDashToDanda(toDevanagari(cleanText)),
        places,
    };
};

const convertDashToDanda = (a) => {
    return a.replaceAll(danda.code, danda.devanagari);
};
