import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-guna', plugin],
    ],
});

test('lib: apply-guna: report', (t) => {
    t.report('apply-guna', `ād‑guṇaḥ`);
    t.end();
});

test('lib: apply-guna: transform', (t) => {
    t.transform('apply-guna');
    t.end();
});
