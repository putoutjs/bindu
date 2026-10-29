import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-jhayo-ho', plugin],
    ],
});

test('bindu: sandhi: apply-jhayo-ho: report', (t) => {
    t.report('apply-jhayo-ho', 'jhayo ho’nyatarasyām');
    t.end();
});

test('bindu: sandhi: apply-jhayo-ho: transform', (t) => {
    t.transform('apply-jhayo-ho');
    t.end();
});

test('bindu: sandhi: apply-jhayo-ho: transform: jhayo-ho-g', (t) => {
    t.transform('jhayo-ho-g');
    t.end();
});

test('bindu: sandhi: apply-jhayo-ho: no report: no-h', (t) => {
    t.noReport('no-h');
    t.end();
});

test('bindu: sandhi: apply-jhayo-ho: no report: no-jhash', (t) => {
    t.noReport('no-jhash');
    t.end();
});

test('bindu: sandhi: apply-jhayo-ho: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
