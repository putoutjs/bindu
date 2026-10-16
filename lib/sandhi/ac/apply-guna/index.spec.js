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

test('bindu: sandhi: apply-guna: transform: la', (t) => {
    t.transform('apply-guna-la');
    t.end();
});

test('bindu: sandhi: apply-guna: transform: maha', (t) => {
    t.transform('apply-guna-maha');
    t.end();
});
