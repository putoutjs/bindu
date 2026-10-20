import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['apply-natva', plugin],
    ],
});

test('bindu: sandhi: apply-natva: report', (t) => {
    t.report('apply-natva', `raṣābhyāṃ no ṇaḥ samānapade`);
    t.end();
});

test('bindu: sandhi: apply-natva: transform', (t) => {
    t.transform('apply-natva');
    t.end();
});

test('bindu: sandhi: apply-natva: transform: apply-natva-after-r', (t) => {
    t.transform('apply-natva-after-r');
    t.end();
});

test('bindu: sandhi: apply-natva: no report: no-n', (t) => {
    t.noReport('no-n');
    t.end();
});

test('bindu: sandhi: apply-natva: no report: no-rsh', (t) => {
    t.noReport('no-rsh');
    t.end();
});
