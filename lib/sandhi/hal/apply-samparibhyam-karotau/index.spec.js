import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-samparibhyam-karotau', plugin],
    ],
});

test('bindu: sandhi: apply-samparibhyam-karotau: report', (t) => {
    t.report('apply-samparibhyam-karotau', 'samparibhyāṃ karotau bhūṣaṇe');
    t.end();
});

test('bindu: sandhi: apply-samparibhyam-karotau: transform', (t) => {
    t.transform('apply-samparibhyam-karotau');
    t.end();
});

test('bindu: sandhi: apply-samparibhyam-karotau: transform: samparibhyam-pari', (t) => {
    t.transform('samparibhyam-pari');
    t.end();
});

test('bindu: sandhi: apply-samparibhyam-karotau: no report: no-karotau', (t) => {
    t.noReport('no-karotau');
    t.end();
});

test('bindu: sandhi: apply-samparibhyam-karotau: no report: no-sam', (t) => {
    t.noReport('no-sam');
    t.end();
});

test('bindu: sandhi: apply-samparibhyam-karotau: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
