import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-padantad', plugin],
    ],
});

test('lib: apply-padantad: report', (t) => {
    t.report('apply-padantad', `eṅaḥ padāntād ati`);
    t.end();
});

test('lib: apply-padantad: transform', (t) => {
    t.transform('apply-padantad');
    t.end();
});

test('bindu: sandhi: apply-padantad: apply-padantad: no report: not-e-o-ai-au', (t) => {
    t.noReport('not-e-o-ai-au');
    t.end();
});
