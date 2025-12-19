import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-yan', plugin],
    ],
});

test('lib: apply-yan: report', (t) => {
    t.report('apply-yan', `iko yaṇaci`);
    t.end();
});

test('lib: apply-yan: transform', (t) => {
    t.transform('apply-yan');
    t.end();
});

test('lib: apply-yan: no report: not-yan', (t) => {
    t.noReport('not-yan');
    t.end();
});
