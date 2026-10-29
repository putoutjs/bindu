import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-pumah-khayyampare', plugin],
    ],
});

test('bindu: sandhi: apply-pumah-khayyampare: report', (t) => {
    t.report('apply-pumah-khayyampare', 'pumaḥ khayyampare');
    t.end();
});

test('bindu: sandhi: apply-pumah-khayyampare: transform', (t) => {
    t.transform('apply-pumah-khayyampare');
    t.end();
});

test('bindu: sandhi: apply-pumah-khayyampare: transform: pumah-tva', (t) => {
    t.transform('pumah-tva');
    t.end();
});

test('bindu: sandhi: apply-pumah-khayyampare: no report: no-pum', (t) => {
    t.noReport('no-pum');
    t.end();
});

test('bindu: sandhi: apply-pumah-khayyampare: no report: no-khay', (t) => {
    t.noReport('no-khay');
    t.end();
});

test('bindu: sandhi: apply-pumah-khayyampare: no report: no-am', (t) => {
    t.noReport('no-am');
    t.end();
});

test('bindu: sandhi: apply-pumah-khayyampare: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
