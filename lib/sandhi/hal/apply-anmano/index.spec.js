import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-anmano', plugin],
    ],
});

test('bindu: sandhi: apply-anmano: report', (t) => {
    t.report('apply-anmano', 'āṅmāṅoś ca');
    t.end();
});

test('bindu: sandhi: apply-anmano: transform', (t) => {
    t.transform('apply-anmano');
    t.end();
});

test('bindu: sandhi: apply-anmano: transform: anmano-ma', (t) => {
    t.transform('anmano-ma');
    t.end();
});

test('bindu: sandhi: apply-anmano: no report: no-ang', (t) => {
    t.noReport('no-ang');
    t.end();
});

test('bindu: sandhi: apply-anmano: no report: no-ch', (t) => {
    t.noReport('no-ch');
    t.end();
});

test('bindu: sandhi: apply-anmano: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
