import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-nash-chavy-aprashan', plugin],
    ],
});

test('bindu: sandhi: apply-nash-chavy-aprashan: report', (t) => {
    t.report('apply-nash-chavy-aprashan', 'naś chavy apraśān');
    t.end();
});

test('bindu: sandhi: apply-nash-chavy-aprashan: transform', (t) => {
    t.transform('apply-nash-chavy-aprashan');
    t.end();
});

test('bindu: sandhi: apply-nash-chavy-aprashan: transform: nash-chavy-t', (t) => {
    t.transform('nash-chavy-t');
    t.end();
});

test('bindu: sandhi: apply-nash-chavy-aprashan: no report: no-prashan', (t) => {
    t.noReport('no-prashan');
    t.end();
});

test('bindu: sandhi: apply-nash-chavy-aprashan: no report: no-chav', (t) => {
    t.noReport('no-chav');
    t.end();
});

test('bindu: sandhi: apply-nash-chavy-aprashan: no report: no-n', (t) => {
    t.noReport('no-n');
    t.end();
});

test('bindu: sandhi: apply-nash-chavy-aprashan: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
