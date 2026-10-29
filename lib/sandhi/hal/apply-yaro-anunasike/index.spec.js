import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-yaro-anunasike', plugin],
    ],
});

test('bindu: sandhi: apply-yaro-anunasike: report', (t) => {
    t.report('apply-yaro-anunasike', 'yaro’nunāsike’nunāsiko vā');
    t.end();
});

test('bindu: sandhi: apply-yaro-anunasike: transform', (t) => {
    t.transform('apply-yaro-anunasike');
    t.end();
});

test('bindu: sandhi: apply-yaro-anunasike: transform: yaro-anunasike-k', (t) => {
    t.transform('yaro-anunasike-k');
    t.end();
});

test('bindu: sandhi: apply-yaro-anunasike: no report: no-khay', (t) => {
    t.noReport('no-khay');
    t.end();
});

test('bindu: sandhi: apply-yaro-anunasike: no report: no-nasal', (t) => {
    t.noReport('no-nasal');
    t.end();
});

test('bindu: sandhi: apply-yaro-anunasike: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});

test('bindu: sandhi: apply-yaro-anunasike: transform: yaro-anunasike-d', (t) => {
    t.transform('yaro-anunasike-d');
    t.end();
});

test('bindu: sandhi: apply-yaro-anunasike: no report: no-semivowel', (t) => {
    t.noReport('no-semivowel');
    t.end();
});
