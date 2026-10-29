import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-ruh', plugin],
    ],
});

test('bindu: sandhi: apply-ruh: report', (t) => {
    t.report('apply-ruh', 'sasajuṣo ruḥ');
    t.end();
});

test('bindu: sandhi: apply-ruh: transform', (t) => {
    t.transform('apply-ruh');
    t.end();
});

test('bindu: sandhi: apply-ruh: transform: ruh-u', (t) => {
    t.transform('ruh-u');
    t.end();
});

test('bindu: sandhi: apply-ruh: transform: ruh-punar', (t) => {
    t.transform('ruh-punar');
    t.end();
});

test('bindu: sandhi: apply-ruh: no report: no-visarga', (t) => {
    t.noReport('no-visarga');
    t.end();
});

test('bindu: sandhi: apply-ruh: no report: no-long-a', (t) => {
    t.noReport('no-long-a');
    t.end();
});

test('bindu: sandhi: apply-ruh: no report: no-sah', (t) => {
    t.noReport('no-sah');
    t.end();
});

test('bindu: sandhi: apply-ruh: no report: no-voiced', (t) => {
    t.noReport('no-voiced');
    t.end();
});

test('bindu: sandhi: apply-ruh: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
