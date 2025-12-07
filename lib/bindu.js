import putout from 'putout';
import Sanscript from '@indic-transliteration/sanscript';
import * as applyVriddhi from './plugins/apply-vriddhi/index.js';

const toIAST = (a) => Sanscript.t(a, 'devanagari', 'iast');
const toDevanagari = (a) => Sanscript.t(a, 'iast', 'devanagari');

export const bindu = (text, {fix = true} = {}) => {
    const source = toIAST(text).replaceAll(' ', ',');
    const {code, places} = putout(source, {
        fix,
        plugins: [
            ['apply-vriddhi', applyVriddhi],
        ],
    });
    
    const cleanText = code
        .replaceAll(/[,;()]/g, '')
        .slice(0, -1);
    
    return {
        code: toDevanagari(cleanText),
        places,
    };
};
