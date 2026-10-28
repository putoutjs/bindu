import {
    avagraha,
    danda,
    hiatus,
} from '#symbols';
import {toSLP1} from './bindu.js';

export const preProcess = (text, from) => {
    return toSLP1(text, from)
        .replaceAll(' ', ',')
        .replaceAll(avagraha.spl1, avagraha.code)
        .replaceAll(danda.spl1, danda.code);
};

export const postProcess = (code) => {
    return code
        .replaceAll(/[,;()]/g, '')
        .replaceAll(avagraha.code, avagraha.spl1)
        .replaceAll(danda.code, danda.spl1)
        .replaceAll(hiatus.code, hiatus.slp1)
        .slice(0, -1);
};
