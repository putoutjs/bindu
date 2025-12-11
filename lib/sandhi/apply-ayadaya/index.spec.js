import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-ayadaya', plugin],
    ],
});

test('lib: apply-ayadaya: report', (t) => {
    t.report('apply-ayadaya', `ayādayaḥ`);
    t.end();
});

test('lib: apply-ayadaya: transform', (t) => {
    t.transform('apply-ayadaya');
    t.end();
});
