import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-shtutva', plugin],
    ],
});

test('bindu: sandhi: apply-shtutva: report', (t) => {
    t.report('apply-shtutva', 'ṣṭunā ṣṭuḥ');
    t.end();
});

test('bindu: sandhi: apply-shtutva: transform', (t) => {
    t.transform('apply-shtutva');
    t.end();
});

test('bindu: sandhi: apply-shtutva: transform: shtutva-s', (t) => {
    t.transform('shtutva-s');
    t.end();
});

test('bindu: sandhi: apply-shtutva: transform: shtutva-right', (t) => {
    t.transform('shtutva-right');
    t.end();
});

test('bindu: sandhi: apply-shtutva: no report: no-retroflex', (t) => {
    t.noReport('no-retroflex');
    t.end();
});

test('bindu: sandhi: apply-shtutva: no report: no-dental', (t) => {
    t.noReport('no-dental');
    t.end();
});

test('bindu: sandhi: apply-shtutva: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});

test('bindu: sandhi: apply-shtutva: no report: no-stu', (t) => {
    t.noReport('no-stu');
    t.end();
});

test('bindu: sandhi: apply-shtutva: no report: no-naschavy', (t) => {
    t.noReport('no-naschavy');
    t.end();
});
