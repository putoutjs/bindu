import putout from 'putout';
import Sanscript from '@indic-transliteration/sanscript';
import * as applyVriddhi from './plugins/apply-vriddhi/index.js';

export const bindu = (text, {fix}) => {
    const source = text.replaceAll(' ', ',');
    
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
        code: code
            .slice(1, -2)
            .replaceAll(',', ''),
        places,
    };
};
