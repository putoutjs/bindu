import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-as-sandhi', plugin],
    ],
});

test('bindu: sandhi: apply-as-sandhi: report', (t) => {
    t.report('apply-as-sandhi', 'ato roraplute');
    t.end();
});

test('bindu: sandhi: apply-as-sandhi: transform: vowel-a', (t) => {
    t.transform('vowel-a');
    t.end();
});

test('bindu: sandhi: apply-as-sandhi: transform: vowel-other', (t) => {
    t.transform('vowel-other');
    t.end();
});

test('bindu: sandhi: apply-as-sandhi: transform: voiced-consonant', (t) => {
    t.transform('voiced-consonant');
    t.end();
});

test('bindu: sandhi: apply-as-sandhi: no report: no-as', (t) => {
    t.noReport('no-as');
    t.end();
});

test('bindu: sandhi: apply-as-sandhi: no report: no-voiced', (t) => {
    t.noReport('no-voiced');
    t.end();
});

test('bindu: sandhi: apply-as-sandhi: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});

test('bindu: sandhi: apply-as-sandhi: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
