import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-sadiraprateh', plugin],
    ],
});

test('bindu: sandhi: apply-sadiraprateh: report', (t) => {
    t.report('apply-sadiraprateh', 'sadiraprateḥ');
    t.end();
});

test('bindu: sandhi: apply-sadiraprateh: transform', (t) => {
    t.transform('apply-sadiraprateh');
    t.end();
});

test('bindu: sandhi: apply-sadiraprateh: no report: no-upasarga', (t) => {
    t.noReport('no-upasarga');
    t.end();
});

test('bindu: sandhi: apply-sadiraprateh: no report: no-prati', (t) => {
    t.noReport('no-prati');
    t.end();
});

test('bindu: sandhi: apply-sadiraprateh: no report: no-root', (t) => {
    t.noReport('no-root');
    t.end();
});

test('bindu: sandhi: apply-sadiraprateh: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
