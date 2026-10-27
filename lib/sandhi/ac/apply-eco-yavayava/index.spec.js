import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-eco-yavayava', plugin],
    ],
});

test('bindu: sandhi: apply-eco-yavayava: report', (t) => {
    t.report('apply-eco-yavayava', `eco yavāyāvaḥ`);
    t.end();
});

test('bindu: sandhi: apply-eco-yavayava: transform', (t) => {
    t.transform('apply-eco-yavayava');
    t.end();
});

test('bindu: sandhi: apply-eco-yavayava: no report: no-ec-last', (t) => {
    t.noReport('no-ec-last');
    t.end();
});

test('bindu: sandhi: apply-eco-yavayava: transform: go-eva', (t) => {
    t.transform('go-eva');
    t.end();
});

test('bindu: sandhi: apply-eco-yavayava: no report: pararupa', (t) => {
    t.noReport('pararupa');
    t.end();
});

test('bindu: sandhi: apply-eco-yavayava: no report: no-consonant', (t) => {
    t.noReport('no-consonant');
    t.end();
});
