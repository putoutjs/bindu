import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-hali-sarvesham', plugin],
    ],
});

test('bindu: sandhi: apply-hali-sarvesham: report', (t) => {
    t.report('apply-hali-sarvesham', 'hali sarveṣām');
    t.end();
});

test('bindu: sandhi: apply-hali-sarvesham: transform', (t) => {
    t.transform('apply-hali-sarvesham');
    t.end();
});

test('bindu: sandhi: apply-hali-sarvesham: transform: hali-sarvesham-bhagoh', (t) => {
    t.transform('hali-sarvesham-bhagoh');
    t.end();
});

test('bindu: sandhi: apply-hali-sarvesham: no report: no-bhoh', (t) => {
    t.noReport('no-bhoh');
    t.end();
});

test('bindu: sandhi: apply-hali-sarvesham: no report: no-voiced', (t) => {
    t.noReport('no-voiced');
    t.end();
});

test('bindu: sandhi: apply-hali-sarvesham: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
