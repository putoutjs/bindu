import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-guna', plugin],
    ],
});

test('bindu: sandhi: apply-guna: report', (t) => {
    t.report('apply-guna', `ād‑guṇaḥ`);
    t.end();
});

test('bindu: sandhi: apply-guna: transform', (t) => {
    t.transform('apply-guna');
    t.end();
});

test('bindu: sandhi: apply-guna: transform: apply-guna-rishi', (t) => {
    t.transform('apply-guna-rishi');
    t.end();
});

test('bindu: sandhi: apply-guna: transform: apply-guna-la', (t) => {
    t.transform('apply-guna-la');
    t.end();
});

test('bindu: sandhi: apply-guna: transform: apply-guna-maha', (t) => {
    t.transform('apply-guna-maha');
    t.end();
});

// no report: last is not 'a'/'A'
test('bindu: sandhi: apply-guna: no report: no-a-last', (t) => {
    t.noReport('no-a-last');
    t.end();
});

// no report: first is not ik
test('bindu: sandhi: apply-guna: no report: no-ik-first', (t) => {
    t.noReport('no-ik-first');
    t.end();
});
