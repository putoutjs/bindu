import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-vriddhi', plugin],
    ],
});

test('bindu: sandhi: apply-vriddhi: report', (t) => {
    t.report('apply-vriddhi', `vṛddhireci`);
    t.end();
});

test('bindu: sandhi: apply-vriddhi: transform', (t) => {
    t.transform('apply-vriddhi');
    t.end();
});

test('bindu: sandhi: apply-vriddhi: transform: a-e', (t) => {
    t.transform('a-e');
    t.end();
});

test('bindu: sandhi: apply-vriddhi: transform: a-o', (t) => {
    t.transform('a-o');
    t.end();
});

test('bindu: sandhi: apply-vriddhi: no report: purvarupa', (t) => {
    t.noReport('purvarupa');
    t.end();
});

test('bindu: sandhi: apply-vriddhi: no report: no-a-last', (t) => {
    t.noReport('no-a-last');
    t.end();
});

test('bindu: sandhi: apply-vriddhi: no report: a-last-upari', (t) => {
    t.noReport('a-last-upari');
    t.end();
});

test('bindu: sandhi: apply-vriddhi: no report: a-last-other', (t) => {
    t.noReport('a-last-other');
    t.end();
});
