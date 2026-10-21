import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['apply-topadhasha', plugin],
    ],
});

test('bindu: sandhi: apply-topadhasha: report', (t) => {
    t.report('apply-topadhasha', `topadhāyāḥ`);
    t.end();
});

test('bindu: sandhi: apply-topadhasha: transform', (t) => {
    t.transform('apply-topadhasha');
    t.end();
});

test('bindu: sandhi: apply-topadhasha: transform: apply-topadhasha-d', (t) => {
    t.transform('apply-topadhasha-d');
    t.end();
});

test('bindu: sandhi: apply-topadhasha: no transform: no-l-first', (t) => {
    t.noTransform('no-l-first');
    t.end();
});

test('bindu: sandhi: apply-topadhasha: no transform: no-dental-last', (t) => {
    t.noTransform('no-dental-last');
    t.end();
});
