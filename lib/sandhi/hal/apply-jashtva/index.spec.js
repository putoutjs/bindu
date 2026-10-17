import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-jashtva', plugin],
    ],
});

test('bindu: sandhi: apply-jashtva: report', (t) => {
    t.report('apply-jashtva', `jhalāṃ jaśo'nte`);
    t.end();
});

test('bindu: sandhi: apply-jashtva: transform', (t) => {
    t.transform('apply-jashtva');
    t.end();
});

test('bindu: sandhi: apply-jashtva: transform: apply-jashtva-k-g', (t) => {
    t.transform('apply-jashtva-k-g');
    t.end();
});

test('bindu: sandhi: apply-jashtva: transform: apply-jashtva-t-d', (t) => {
    t.transform('apply-jashtva-t-d');
    t.end();
});

test('bindu: sandhi: apply-jashtva: transform: apply-jashtva-p-b', (t) => {
    t.transform('apply-jashtva-p-b');
    t.end();
});

test('bindu: sandhi: apply-jashtva: transform: apply-jashtva-before-vowel', (t) => {
    t.transform('apply-jashtva-before-vowel');
    t.end();
});

test('bindu: sandhi: apply-jashtva: no report: no-car-last', (t) => {
    t.noReport('no-car-last');
    t.end();
});

test('bindu: sandhi: apply-jashtva: no report: car-first', (t) => {
    t.noReport('car-first');
    t.end();
});

test('bindu: sandhi: apply-jashtva: no report: h-first', (t) => {
    t.noReport('h-first');
    t.end();
});
