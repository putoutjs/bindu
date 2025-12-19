import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-rori', plugin],
    ],
});

test('lib: apply-rori: report', (t) => {
    t.report('apply-rori', `ro ri`);
    t.end();
});

test('lib: apply-rori: transform', (t) => {
    t.transform('apply-rori');
    t.end();
});

test('lib: apply-rori: no report: purvarupa', (t) => {
    t.noReport('purvarupa');
    t.end();
});
