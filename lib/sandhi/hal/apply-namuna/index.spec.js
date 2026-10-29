import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-namuna', plugin],
    ],
});

test('bindu: sandhi: apply-namuna: report', (t) => {
    t.report('apply-namuna', 'ṅamo hrasvād aci ṅamuṇ nityam');
    t.end();
});

test('bindu: sandhi: apply-namuna: transform', (t) => {
    t.transform('apply-namuna');
    t.end();
});

test('bindu: sandhi: apply-namuna: transform: namuna-ng', (t) => {
    t.transform('namuna-ng');
    t.end();
});

test('bindu: sandhi: apply-namuna: no report: no-long', (t) => {
    t.noReport('no-long');
    t.end();
});

test('bindu: sandhi: apply-namuna: no report: no-consonant', (t) => {
    t.noReport('no-consonant');
    t.end();
});

test('bindu: sandhi: apply-namuna: no report: no-nam', (t) => {
    t.noReport('no-nam');
    t.end();
});

test('bindu: sandhi: apply-namuna: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
