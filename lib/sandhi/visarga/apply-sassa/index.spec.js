import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-sassa', plugin],
    ],
});

test('bindu: sandhi: apply-sassa: report', (t) => {
    t.report('apply-sassa', `visarjanīyasya saḥ`);
    t.end();
});

test('bindu: sandhi: apply-sassa: transform', (t) => {
    t.transform('apply-sassa');
    t.end();
});

test('bindu: sandhi: apply-sassa: transform: sassa-s', (t) => {
    t.transform('sassa-s');
    t.end();
});

test('bindu: sandhi: apply-sassa: transform: sassa-z', (t) => {
    t.transform('sassa-z');
    t.end();
});

test('bindu: sandhi: apply-sassa: no report: no-h', (t) => {
    t.noReport('no-h');
    t.end();
});

test('bindu: sandhi: apply-sassa: no report: no-sibilant', (t) => {
    t.noReport('no-sibilant');
    t.end();
});

test('bindu: sandhi: apply-sassa: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});

test('bindu: sandhi: apply-sassa: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
