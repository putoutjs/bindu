import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-shchutva', plugin],
    ],
});

test('bindu: sandhi: apply-shchutva: report', (t) => {
    t.report('apply-shchutva', 'stoḥ ścunā ścuḥ');
    t.end();
});

test('bindu: sandhi: apply-shchutva: transform', (t) => {
    t.transform('apply-shchutva');
    t.end();
});

test('bindu: sandhi: apply-shchutva: transform: shchutva-j', (t) => {
    t.transform('shchutva-j');
    t.end();
});

test('bindu: sandhi: apply-shchutva: transform: shchutva-c', (t) => {
    t.transform('shchutva-c');
    t.end();
});

test('bindu: sandhi: apply-shchutva: transform: shchutva-n', (t) => {
    t.transform('shchutva-n');
    t.end();
});

test('bindu: sandhi: apply-shchutva: no report: no-dental', (t) => {
    t.noReport('no-dental');
    t.end();
});

test('bindu: sandhi: apply-shchutva: no report: no-palatal', (t) => {
    t.noReport('no-palatal');
    t.end();
});

test('bindu: sandhi: apply-shchutva: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});

test('bindu: sandhi: apply-shchutva: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});
