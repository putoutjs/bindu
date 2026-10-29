import {avagraha, hiatus} from '#symbols';
import {detect} from './detect.js';
import {toSLP1} from './bindu.js';

const WORD = /([\p{L}\p{M}']+)/u;

const splitText = (text) => {
    const parts = text.split(WORD);
    const gaps = [parts[0]];
    const chunks = [];
    
    for (let i = 1; i < parts.length; i += 2) {
        const gap = parts[i - 1];
        
        if (i > 1 && gap === ' ') {
            chunks
                .at(-1)
                .push(parts[i]);
            continue;
        }
        
        if (i > 1)
            gaps.push(gap);
        
        chunks.push([parts[i]]);
    }
    
    if (chunks.length)
        gaps.push(parts.at(-1));
    
    return {
        chunks,
        gaps,
    };
};

export const preProcess = (text, from = detect(text)) => {
    const {chunks, gaps} = splitText(text);
    
    const toStatement = (words) => {
        const names = [];
        
        for (const word of words) {
            names.push(
                toSLP1(word, from).replaceAll(avagraha.spl1, avagraha.code),
            );
        }
        
        return `${names.join(',')};`;
    };
    
    return {
        source: chunks
            .map(toStatement)
            .join('\n'),
        gaps,
    };
};

const clean = (statement) => statement
    .replaceAll(/[,()]/g, '')
    .replaceAll(avagraha.code, avagraha.spl1)
    .replaceAll(hiatus.code, hiatus.slp1)
    .trim();

export const postProcess = (code, {gaps, convert}) => {
    const statements = code
        .split(';')
        .slice(0, -1)
        .map(clean)
        .map(convert);
    
    return gaps.reduce((result, gap, i) => `${result}${gap}${statements[i] || ''}`, '');
};
