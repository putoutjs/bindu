import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-satvam', plugin],
    ],
});

test('bindu: sandhi: apply-satvam: report', (t) => {
    t.report('apply-satvam', 'ādeśapratyayayoḥ');
    t.end();
});

test('bindu: sandhi: apply-satvam: transform', (t) => {
    t.transform('apply-satvam');
    t.end();
});

test('bindu: sandhi: apply-satvam: report: no-unitype', (t) => {
    t.report('no-unitype', 'ādeśapratyayayoḥ');
    t.end();
});

test('bindu: sandhi: apply-satvam: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});

test('bindu: sandhi: apply-satvam: no report: no-upasarga', (t) => {
    t.noReport('no-upasarga');
    t.end();
});

test('bindu: sandhi: apply-satvam: no report: no-pause', (t) => {
    t.noReport('no-pause');
    t.end();
});
