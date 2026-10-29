import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-visarga-voiced', plugin],
    ],
});

test('bindu: sandhi: apply-visarga-voiced: report', (t) => {
    t.report('apply-visarga-voiced', `ato rora plutādaplute`);
    t.end();
});

test('bindu: sandhi: apply-visarga-voiced: transform', (t) => {
    t.transform('apply-visarga-voiced');
    t.end();
});

test('bindu: sandhi: apply-visarga-voiced: transform: voiced-y', (t) => {
    t.transform('voiced-y');
    t.end();
});

test('bindu: sandhi: apply-visarga-voiced: no report: no-ah', (t) => {
    t.noReport('no-ah');
    t.end();
});

test('bindu: sandhi: apply-visarga-voiced: no report: no-r-origin', (t) => {
    t.noReport('no-r-origin');
    t.end();
});

test('bindu: sandhi: apply-visarga-voiced: no report: no-voiced', (t) => {
    t.noReport('no-voiced');
    t.end();
});

test('bindu: sandhi: apply-visarga-voiced: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});

test('bindu: sandhi: apply-visarga-voiced: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});
