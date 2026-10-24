import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-visarga-vowel', plugin],
    ],
});

test('bindu: sandhi: apply-visarga-vowel: report', (t) => {
    t.report('apply-visarga-vowel', `haśi ca`);
    t.end();
});

test('bindu: sandhi: apply-visarga-vowel: transform', (t) => {
    t.transform('apply-visarga-vowel');
    t.end();
});

test('bindu: sandhi: apply-visarga-vowel: transform: vowel-a', (t) => {
    t.transform('vowel-a');
    t.end();
});

test('bindu: sandhi: apply-visarga-vowel: transform: vowel-i', (t) => {
    t.transform('vowel-i');
    t.end();
});

test('bindu: sandhi: apply-visarga-vowel: no report: no-ah', (t) => {
    t.noReport('no-ah');
    t.end();
});

test('bindu: sandhi: apply-visarga-vowel: no report: no-vowel', (t) => {
    t.noReport('no-vowel');
    t.end();
});

test('bindu: sandhi: apply-visarga-vowel: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});

test('bindu: sandhi: apply-visarga-vowel: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
