import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['apply-bhobhago', plugin],
    ],
});

test('sandhi: visarga: apply-bhobhago: report', (t) => {
    t.report('apply-bhobhago', `bhobhago’gho’pūrvasya yo’śi`);
    t.end();
});

test('sandhi: visarga: apply-bhobhago: transform', (t) => {
    t.transform('apply-bhobhago');
    t.end();
});

test('sandhi: visarga: apply-bhobhago: no report: na-ac', (t) => {
    t.noReport('na-ac');
    t.end();
});

// no report: name not in purvasya list
test('sandhi: visarga: apply-bhobhago: no report: no-purvasya', (t) => {
    t.noReport('no-purvasya');
    t.end();
});
