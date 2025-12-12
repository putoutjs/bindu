import {createTest} from '@putout/test';
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

test('bindu: sandhi: apply-vriddhi: no report: purvarupa', (t) => {
    t.noReport('purvarupa');
    t.end();
});
