import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-visarga-sha', plugin],
    ],
});

test('bindu: sandhi: apply-visarga-sha: report', (t) => {
    t.report('apply-visarga-sha', 'idudupadhasya cāpratyayasya');
    t.end();
});

test('bindu: sandhi: apply-visarga-sha: transform', (t) => {
    t.transform('apply-visarga-sha');
    t.end();
});

test('bindu: sandhi: apply-visarga-sha: transform: visarga-sha-p', (t) => {
    t.transform('visarga-sha-p');
    t.end();
});

test('bindu: sandhi: apply-visarga-sha: no report: no-pratyaya', (t) => {
    t.noReport('no-pratyaya');
    t.end();
});

test('bindu: sandhi: apply-visarga-sha: no report: no-kupu', (t) => {
    t.noReport('no-kupu');
    t.end();
});

test('bindu: sandhi: apply-visarga-sha: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
