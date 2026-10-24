import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['apply-dirgha', plugin],
    ],
});

test('bindu: sandhi: apply-dirgha: report', (t) => {
    t.report('apply-dirgha', `akaḥ savarṇe dīrghaḥ`);
    t.end();
});

test('bindu: sandhi: apply-dirgha: transform', (t) => {
    t.transform('apply-dirgha');
    t.end();
});

test('bindu: sandhi: apply-dirgha: transform: dirgha-a', (t) => {
    t.transform('dirgha-a');
    t.end();
});

test('bindu: sandhi: apply-dirgha: transform: dirgha-i', (t) => {
    t.transform('dirgha-i');
    t.end();
});

test('bindu: sandhi: apply-dirgha: transform: dirgha-u', (t) => {
    t.transform('dirgha-u');
    t.end();
});

test('bindu: sandhi: apply-dirgha: no report: avyaya', (t) => {
    t.noReport('avyaya');
    t.end();
});

test('bindu: sandhi: apply-dirgha: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});

test('bindu: sandhi: apply-dirgha: no report: no-savarna', (t) => {
    t.noReport('no-savarna');
    t.end();
});

test('bindu: sandhi: apply-dirgha: no report: no-ac', (t) => {
    t.noReport('no-ac');
    t.end();
});

test('bindu: sandhi: apply-dirgha: no report: no-pragrhya', (t) => {
    t.noReport('no-pragrhya');
    t.end();
});