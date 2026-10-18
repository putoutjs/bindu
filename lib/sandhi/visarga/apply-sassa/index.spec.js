import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';

const test = createSandhiTest(import.meta.url, {
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

test('bindu: sandhi: apply-sassa: transform: sassa-S', (t) => {
    t.transform('sassa-S');
    t.end();
});

test('bindu: sandhi: apply-sassa: transform: sassa-z', (t) => {
    t.transform('sassa-z');
    t.end();
});

test('bindu: sandhi: apply-sassa: no report: no-H', (t) => {
    t.noReport('no-H');
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