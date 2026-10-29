import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-omang', plugin],
    ],
});

test('bindu: sandhi: apply-omang: report', (t) => {
    t.report('apply-omang', 'omāṅoś ca');
    t.end();
});

test('bindu: sandhi: apply-omang: transform', (t) => {
    t.transform('apply-omang');
    t.end();
});

test('bindu: sandhi: apply-omang: no report: no-aA', (t) => {
    t.noReport('no-aA');
    t.end();
});

test('bindu: sandhi: apply-omang: no report: no-om', (t) => {
    t.noReport('no-om');
    t.end();
});

test('bindu: sandhi: apply-omang: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
