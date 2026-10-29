import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-mo-nusvara', plugin],
    ],
});

test('bindu: sandhi: apply-mo-nusvara: report', (t) => {
    t.report('apply-mo-nusvara', 'mo’nusvāraḥ');
    t.end();
});

test('bindu: sandhi: apply-mo-nusvara: transform', (t) => {
    t.transform('apply-mo-nusvara');
    t.end();
});

test('bindu: sandhi: apply-mo-nusvara: transform: mo-nusvara-k', (t) => {
    t.transform('mo-nusvara-k');
    t.end();
});

test('bindu: sandhi: apply-mo-nusvara: no report: no-m', (t) => {
    t.noReport('no-m');
    t.end();
});

test('bindu: sandhi: apply-mo-nusvara: no report: no-hal', (t) => {
    t.noReport('no-hal');
    t.end();
});

test('bindu: sandhi: apply-mo-nusvara: no report: no-karotau', (t) => {
    t.noReport('no-karotau');
    t.end();
});

test('bindu: sandhi: apply-mo-nusvara: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
