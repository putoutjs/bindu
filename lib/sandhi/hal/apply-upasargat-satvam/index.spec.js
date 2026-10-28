import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-upasargat-satvam', plugin],
    ],
});

test('bindu: sandhi: apply-upasargat-satvam: report', (t) => {
    t.report('apply-upasargat-satvam', 'upasargāt sunoti-suvati-syati-stauti-stobhati-sthā');
    t.end();
});

test('bindu: sandhi: apply-upasargat-satvam: transform', (t) => {
    t.transform('apply-upasargat-satvam');
    t.end();
});

test('bindu: sandhi: apply-upasargat-satvam: transform: upasargat-satvam-st', (t) => {
    t.transform('upasargat-satvam-st');
    t.end();
});

test('bindu: sandhi: apply-upasargat-satvam: no report: no-upasarga', (t) => {
    t.noReport('no-upasarga');
    t.end();
});

test('bindu: sandhi: apply-upasargat-satvam: no report: no-root', (t) => {
    t.noReport('no-root');
    t.end();
});

test('bindu: sandhi: apply-upasargat-satvam: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
