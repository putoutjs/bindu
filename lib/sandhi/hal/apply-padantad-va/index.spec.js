import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-padantad-va', plugin],
    ],
});

test('bindu: sandhi: apply-padantad-va: report', (t) => {
    t.report('apply-padantad-va', 'padāntād vā');
    t.end();
});

test('bindu: sandhi: apply-padantad-va: transform', (t) => {
    t.transform('apply-padantad-va');
    t.end();
});

test('bindu: sandhi: apply-padantad-va: transform: padantad-va-e', (t) => {
    t.transform('padantad-va-e');
    t.end();
});

test('bindu: sandhi: apply-padantad-va: no report: no-long', (t) => {
    t.noReport('no-long');
    t.end();
});

test('bindu: sandhi: apply-padantad-va: no report: no-ch', (t) => {
    t.noReport('no-ch');
    t.end();
});

test('bindu: sandhi: apply-padantad-va: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
