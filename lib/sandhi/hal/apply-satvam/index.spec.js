import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['apply-satvam', plugin],
    ],
});

test('bindu: sandhi: apply-satvam: report', (t) => {
    t.report('apply-satvam', 'ādeśapratyayoḥ');
    t.end();
});

test('bindu: sandhi: apply-satvam: transform', (t) => {
    t.transform('apply-satvam');
    t.end();
});

test('bindu: sandhi: apply-satvam: report: no-unitype', (t) => {
    t.report('no-unitype', 'ādeśapratyayoḥ');
    t.end();
});

test('bindu: sandhi: apply-satvam: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
