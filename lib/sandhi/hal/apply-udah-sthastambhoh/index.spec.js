import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-udah-sthastambhoh', plugin],
    ],
});

test('bindu: sandhi: apply-udah-sthastambhoh: report', (t) => {
    t.report('apply-udah-sthastambhoh', 'udaḥ sthāstambhoḥ pūrvasya');
    t.end();
});

test('bindu: sandhi: apply-udah-sthastambhoh: transform', (t) => {
    t.transform('apply-udah-sthastambhoh');
    t.end();
});

test('bindu: sandhi: apply-udah-sthastambhoh: transform: udah-stambh', (t) => {
    t.transform('udah-stambh');
    t.end();
});

test('bindu: sandhi: apply-udah-sthastambhoh: no report: no-ud', (t) => {
    t.noReport('no-ud');
    t.end();
});

test('bindu: sandhi: apply-udah-sthastambhoh: no report: no-stha', (t) => {
    t.noReport('no-stha');
    t.end();
});

test('bindu: sandhi: apply-udah-sthastambhoh: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
