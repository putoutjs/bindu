import putout from 'putout';
import Sanscript from '@indic-transliteration/sanscript';
import * as sandhi from './sandhi/index.js';

export const toSLP1 = (a) => Sanscript.t(a, 'devanagari', 'slp1');
export const toDevanagari = (a) => Sanscript.t(a, 'slp1', 'devanagari');

export const bindu = (text, overrides = {}) => {
    const {fix = true, type} = overrides;
    const source = toSLP1(text)
        .replaceAll(' ', ',')
        .replaceAll('|', '_');
    
    const {code, places} = putout(source, {
        fix,
        plugins: [
            ['sandhi', sandhi],
        ],
    });
    
    const cleanText = code
        .replaceAll(/[,;()]/g, '')
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
    return a.replaceAll('_', '|');
};
