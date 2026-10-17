import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-anusvara', plugin],
    ],
});

test('bindu: sandhi: apply-anusvara: report', (t) => {
    t.report('apply-anusvara', `anusvārasya yayi parasavarṇaḥ`);
    t.end();
});

test('bindu: sandhi: apply-anusvara: transform', (t) => {
    t.transform('apply-anusvara');
    t.end();
});

test('bindu: sandhi: apply-anusvara: transform: apply-anusvara-g', (t) => {
    t.transform('apply-anusvara-g');
    t.end();
});

test('bindu: sandhi: apply-anusvara: transform: apply-anusvara-y', (t) => {
    t.transform('apply-anusvara-y');
    t.end();
});

test('bindu: sandhi: apply-anusvara: transform: apply-anusvara-t', (t) => {
    t.transform('apply-anusvara-t');
    t.end();
});

test('bindu: sandhi: apply-anusvara: transform: apply-anusvara-p', (t) => {
    t.transform('apply-anusvara-p');
    t.end();
});

test('bindu: sandhi: apply-anusvara: no report: no-m-last', (t) => {
    t.noReport('no-m-last');
    t.end();
});

test('bindu: sandhi: apply-anusvara: no report: no-hal-first', (t) => {
    t.noReport('no-hal-first');
    t.end();
});
