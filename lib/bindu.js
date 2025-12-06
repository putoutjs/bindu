import putout from 'putout';
import Sanscript from '@indic-transliteration/sanscript';
import * as applyVriddhi from './plugins/apply-vriddhi/index.js';

const toIAST = (a) => Sanscript.t(a, 'devanagari', 'iast');
const toDevanagari = (a) => Sanscript.t(a, 'iast', 'devanagari');

export const bindu = (text, {fix}) => {
    const source = toIAST(text).replaceAll(' ', ',');
    const {code, places} = putout(source, {
        fix,
        plugins: [
            ['apply-vriddhi', applyVriddhi],
        ],
    });
    
    for (const place of places) {
        place.message = Sanscript.t(place.message, 'devanagari', 'iast');
    }
    
    return {
        code: toDevanagari(code)
            .slice(1, -2)
            .replaceAll(',', ''),
        places,
    };
};
