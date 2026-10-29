import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-etat-tadoh', plugin],
    ],
});

test('bindu: sandhi: apply-etat-tadoh: report', (t) => {
    t.report('apply-etat-tadoh', 'etattadoḥ sulopo’koranañsamāse hali');
    t.end();
});

test('bindu: sandhi: apply-etat-tadoh: transform', (t) => {
    t.transform('apply-etat-tadoh');
    t.end();
});

test('bindu: sandhi: apply-etat-tadoh: transform: etat-tadoh-eza', (t) => {
    t.transform('etat-tadoh-eza');
    t.end();
});

test('bindu: sandhi: apply-etat-tadoh: no report: no-vowel', (t) => {
    t.noReport('no-vowel');
    t.end();
});

test('bindu: sandhi: apply-etat-tadoh: no report: no-word', (t) => {
    t.noReport('no-word');
    t.end();
});

test('bindu: sandhi: apply-etat-tadoh: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
