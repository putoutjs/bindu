import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['apply-charva', plugin],
    ],
});

test('bindu: sandhi: apply-charva: report', (t) => {
    t.report('apply-charva', `khari ca`);
    t.end();
});

test('bindu: sandhi: apply-charva: transform', (t) => {
    t.transform('apply-charva');
    t.end();
});

test('bindu: sandhi: apply-charva: transform: apply-charva-g-k', (t) => {
    t.transform('apply-charva-g-k');
    t.end();
});

test('bindu: sandhi: apply-charva: no report: no-voiced-last', (t) => {
    t.noReport('no-voiced-last');
    t.end();
});

test('bindu: sandhi: apply-charva: no report: no-khar-first', (t) => {
    t.noReport('no-khar-first');
    t.end();
});
