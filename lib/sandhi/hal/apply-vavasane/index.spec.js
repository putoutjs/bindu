import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-vavasane', plugin],
    ],
});

test('bindu: sandhi: apply-vavasane: report', (t) => {
    t.report('apply-vavasane', 'vāvasāne');
    t.end();
});

test('bindu: sandhi: apply-vavasane: transform', (t) => {
    t.transform('apply-vavasane');
    t.end();
});

test('bindu: sandhi: apply-vavasane: transform: vavasane-d', (t) => {
    t.transform('vavasane-d');
    t.end();
});

test('bindu: sandhi: apply-vavasane: no report: no-jhash', (t) => {
    t.noReport('no-jhash');
    t.end();
});

test('bindu: sandhi: apply-vavasane: no report: no-pause', (t) => {
    t.noReport('no-pause');
    t.end();
});

test('bindu: sandhi: apply-vavasane: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
