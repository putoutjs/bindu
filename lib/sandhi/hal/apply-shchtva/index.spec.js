import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['apply-shchtva', plugin],
    ],
});

test('bindu: sandhi: apply-shchtva: report', (t) => {
    t.report('apply-shchtva', `ṣṭunā ṣṭuḥ`);
    t.end();
});

test('bindu: sandhi: apply-shchtva: transform', (t) => {
    t.transform('apply-shchtva');
    t.end();
});

test('bindu: sandhi: apply-shchtva: transform: shchtva-j', (t) => {
    t.transform('shchtva-j');
    t.end();
});

test('bindu: sandhi: apply-shchtva: transform: shchtva-C', (t) => {
    t.transform('shchtva-C');
    t.end();
});

test('bindu: sandhi: apply-shchtva: transform: shchtva-n', (t) => {
    t.transform('shchtva-n');
    t.end();
});

test('bindu: sandhi: apply-shchtva: no report: no-dental', (t) => {
    t.noReport('no-dental');
    t.end();
});

test('bindu: sandhi: apply-shchtva: no report: no-palatal', (t) => {
    t.noReport('no-palatal');
    t.end();
});

test('bindu: sandhi: apply-shchtva: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});

test('bindu: sandhi: apply-shchtva: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
