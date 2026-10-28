import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-shash-cho-ati', plugin],
    ],
});

test('bindu: sandhi: apply-shash-cho-ati: report', (t) => {
    t.report('apply-shash-cho-ati', 'śaś cho’ṭi');
    t.end();
});

test('bindu: sandhi: apply-shash-cho-ati: transform', (t) => {
    t.transform('apply-shash-cho-ati');
    t.end();
});

test('bindu: sandhi: apply-shash-cho-ati: transform: shash-cho-ati-k', (t) => {
    t.transform('shash-cho-ati-k');
    t.end();
});

test('bindu: sandhi: apply-shash-cho-ati: no report: no-sha', (t) => {
    t.noReport('no-sha');
    t.end();
});

test('bindu: sandhi: apply-shash-cho-ati: no report: no-ati', (t) => {
    t.noReport('no-ati');
    t.end();
});

test('bindu: sandhi: apply-shash-cho-ati: no report: no-jhay', (t) => {
    t.noReport('no-jhay');
    t.end();
});

test('bindu: sandhi: apply-shash-cho-ati: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
