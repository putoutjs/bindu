import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-rori-dirgha', plugin],
    ],
});

test('bindu: sandhi: apply-rori-dirgha: report', (t) => {
    t.report('apply-rori-dirgha', 'ḍhralope pūrvasya dīrgho’ṇaḥ');
    t.end();
});

test('bindu: sandhi: apply-rori-dirgha: transform', (t) => {
    t.transform('apply-rori-dirgha');
    t.end();
});

test('bindu: sandhi: apply-rori-dirgha: transform: rori-dirgha-i', (t) => {
    t.transform('rori-dirgha-i');
    t.end();
});

test('bindu: sandhi: apply-rori-dirgha: no report: no-r', (t) => {
    t.noReport('no-r');
    t.end();
});

test('bindu: sandhi: apply-rori-dirgha: no report: no-r-left', (t) => {
    t.noReport('no-r-left');
    t.end();
});

test('bindu: sandhi: apply-rori-dirgha: no report: no-long', (t) => {
    t.noReport('no-long');
    t.end();
});

test('bindu: sandhi: apply-rori-dirgha: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
