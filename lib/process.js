import {toSLP1} from './bindu.js';
import {avagraha, danda} from './symbols.js';

export const preProcess = (text) => {
    return toSLP1(text)
        .replaceAll(' ', ',')
        .replaceAll(avagraha.spl1, avagraha.code)
        .replaceAll(danda.spl1, danda.code);
};

export const postProcess = (code) => {
    return code
        .replaceAll(/[,;()]/g, '')
        .replaceAll(avagraha.code, avagraha.spl1)
        .replaceAll(danda.code, danda.spl1)
        .slice(0, -1);
};
