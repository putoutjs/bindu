import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['apply-padantad', plugin],
    ],
});

test('bindu: sandhi: apply-padantad: report', (t) => {
    t.report('apply-padantad', `eṅaḥ padāntād ati`);
    t.end();
});

test('bindu: sandhi: apply-padantad: transform', (t) => {
    t.transform('apply-padantad');
    t.end();
});

test('bindu: sandhi: apply-padantad: no report: not-e-o-ai-au', (t) => {
    t.noReport('not-e-o-ai-au');
    t.end();
});

test('bindu: sandhi: apply-padantad: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});
