import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-dirgha', plugin],
    ],
});

test('bindu: sandhi: apply-dirgha: report', (t) => {
    t.report('apply-dirgha', `akaḥ savarṇe dīrghaḥ`);
    t.end();
});

// a+a: rAma+asti → rAmAsti
test('bindu: sandhi: apply-dirgha: transform', (t) => {
    t.transform('apply-dirgha');
    t.end();
});

// A+a: rAmA+akaH → rAmAkaH
test('bindu: sandhi: apply-dirgha: transform: dirgha-A', (t) => {
    t.transform('dirgha-A');
    t.end();
});

// i+i: nadi+iva → nadIva
test('bindu: sandhi: apply-dirgha: transform: dirgha-i', (t) => {
    t.transform('dirgha-i');
    t.end();
});

// I+i: rAmI+iva → rAmIva
test('bindu: sandhi: apply-dirgha: transform: dirgha-I', (t) => {
    t.transform('dirgha-I');
    t.end();
});

// u+u: guru+uktam → gurUktam
test('bindu: sandhi: apply-dirgha: transform: dirgha-u', (t) => {
    t.transform('dirgha-u');
    t.end();
});

// U+u: sAdhU+uktam → sAdhUktam
test('bindu: sandhi: apply-dirgha: transform: dirgha-U', (t) => {
    t.transform('dirgha-U');
    t.end();
});

// no report: авьяя (пурварупа обрабатывает)
test('bindu: sandhi: apply-dirgha: no report: avyaya', (t) => {
    t.noReport('avyaya');
    t.end();
});

// no report: нет следующего узла
test('bindu: sandhi: apply-dirgha: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});

// no report: разные гласные (last !== first)
test('bindu: sandhi: apply-dirgha: no report: no-savarNa', (t) => {
    t.noReport('no-savarNa');
    t.end();
});

// no report: last is consonant, not ak (vowel)
test('bindu: sandhi: apply-dirgha: no report: no-ac', (t) => {
    t.noReport('no-ac');
    t.end();
});
