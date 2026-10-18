import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';
import * as applyYan from '../apply-yan/index.js';

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['apply-purvarupa', plugin],
    ],
});

test('bindu: sandhi: apply-purvarupa: report', (t) => {
    t.report('apply-purvarupa', `ekaḥ pūrvaparayoḥ`);
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform', (t) => {
    t.transform('apply-purvarupa');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform: dirgha-i', (t) => {
    t.transform('dirgha-i');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform: dirgha-II', (t) => {
    t.transform('dirgha-II');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform: dirgha-A', (t) => {
    t.transform('dirgha-A');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform: apply-yan', (t) => {
    t.transform('apply-yan', {
        applyYan: applyYan,
    });
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform: yan-i-e', (t) => {
    t.transform('yan-i-e');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform: yan-I-e', (t) => {
    t.transform('yan-I-e');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform: yan-u-a', (t) => {
    t.transform('yan-u-a');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform: yan-u-e', (t) => {
    t.transform('yan-u-e');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform: yan-u-i', (t) => {
    t.transform('yan-u-i');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform: yan-U-a', (t) => {
    t.transform('yan-U-a');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform: yan-f-a', (t) => {
    t.transform('yan-f-a');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform: yan-x-a', (t) => {
    t.transform('yan-x-a');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: no report: no-e-last', (t) => {
    t.noReport('no-e-last');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: no report: no-avyaya', (t) => {
    t.noReport('no-avyaya');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: no report: no-vowel', (t) => {
    t.noReport('no-vowel');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: no report: no-padantad-o', (t) => {
    t.noReport('no-padantad-o');
    t.end();
});
