import {avagraha} from '#symbols';

export const report = () => `eṅaḥ padāntād ati`;

export const shraum = () => ({
    '(__b|1) === "a" && ((__a|1) === "e" || (__a|1) === "o" || (__a|2) === "ai" || (__a|2) === "au")': `__a + "${avagraha.code}" + __b / 1`,
});
