import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-ah-sandhi', plugin],
    ],
});

test('bindu: sandhi: apply-ah-sandhi: report', (t) => {
    t.report('apply-ah-sandhi', 'lopaḥ śākalyasya');
    t.end();
});

test('bindu: sandhi: apply-ah-sandhi: transform', (t) => {
    t.transform('apply-ah-sandhi');
    t.end();
});

test('bindu: sandhi: apply-ah-sandhi: transform: ah-voiced', (t) => {
    t.transform('ah-voiced');
    t.end();
});

test('bindu: sandhi: apply-ah-sandhi: no report: no-ah', (t) => {
    t.noReport('no-ah');
    t.end();
});

test('bindu: sandhi: apply-ah-sandhi: no report: no-khar', (t) => {
    t.noReport('no-khar');
    t.end();
});

test('bindu: sandhi: apply-ah-sandhi: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
