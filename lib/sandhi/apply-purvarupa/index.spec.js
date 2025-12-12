import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-purvarupa', plugin],
    ],
});

test('lib: apply-purvarupa: report', (t) => {
    t.report('apply-purvarupa', `ekaḥ pūrvaparayoḥ`);
    t.end();
});

test('bindu: sandhi: apply-purvarupa: transform', (t) => {
    t.transform('apply-purvarupa');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: no report: ayadaya', (t) => {
    t.noReport('ayadaya');
    t.end();
});
