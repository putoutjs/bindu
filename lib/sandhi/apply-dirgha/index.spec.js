import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-dirgha', plugin],
    ],
});

test('bindu: sandhi: apply-dirgha: report', (t) => {
    t.report('apply-dirgha', `akaḥ savarṇe dīrghaḥ`);
    t.end();
});

test('bindu: sandhi: apply-dirgha: transform', (t) => {
    t.transform('apply-dirgha');
    t.end();
});

test('bindu: sandhi: apply-dirgha: no report: avyaya', (t) => {
    t.noReport('avyaya');
    t.end();
});
