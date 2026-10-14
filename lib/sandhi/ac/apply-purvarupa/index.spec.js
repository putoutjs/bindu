import {createTest} from '@putout/test';
import * as plugin from './index.js';
import * as applyYan from '../apply-yan/index.js';

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

test('bindu: sandhi: apply-purvarupa: transform: apply-yan', (t) => {
    t.transform('apply-yan', {
        applyYan,
    });
    t.end();
});

test('bindu: sandhi: apply-purvarupa: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: no report: no-avyaya', (t) => {
    t.noReport('no-avyaya');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: no report: no-vowel', (t) => {
    t.noReport('no-vowel');
    t.end();
});

test('bindu: sandhi: apply-purvarupa: no report: no-padantad-o', (t) => {
    t.noReport('no-padantad-o');
    t.end();
});
