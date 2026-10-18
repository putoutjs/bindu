import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['apply-cch', plugin],
    ],
});

test('bindu: sandhi: apply-cch: report', (t) => {
    t.report('apply-cch', `che ca`);
    t.end();
});

test('bindu: sandhi: apply-cch: transform', (t) => {
    t.transform('apply-cch');
    t.end();
});

test('bindu: sandhi: apply-cch: transform: cch-i', (t) => {
    t.transform('cch-i');
    t.end();
});

test('bindu: sandhi: apply-cch: transform: cch-u', (t) => {
    t.transform('cch-u');
    t.end();
});

test('bindu: sandhi: apply-cch: no report: no-short', (t) => {
    t.noReport('no-short');
    t.end();
});

test('bindu: sandhi: apply-cch: no report: no-C', (t) => {
    t.noReport('no-C');
    t.end();
});

test('bindu: sandhi: apply-cch: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});

test('bindu: sandhi: apply-cch: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
