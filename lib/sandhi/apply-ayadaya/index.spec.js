import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-ayadaya', plugin],
    ],
});

test('bindu: sandhi: apply-ayadaya: report', (t) => {
    t.report('apply-ayadaya', `ayādayaḥ`);
    t.end();
});

test('bindu: sandhi: apply-ayadaya: transform', (t) => {
    t.transform('apply-ayadaya');
    t.end();
});

test('bindu: sandhi: apply-ayadaya: no report: e+k', (t) => {
    t.noReport('e+k');
    t.end();
});

test('bindu: sandhi: apply-ayadaya: no report: o+d', (t) => {
    t.noReport('o+d');
    t.end();
});

test('bindu: sandhi: apply-ayadaya: no report: au+bha', (t) => {
    t.noReport('au+bha');
    t.end();
});

test('bindu: sandhi: apply-ayadaya: no report: i+bha', (t) => {
    t.noReport('i+bha');
    t.end();
});
