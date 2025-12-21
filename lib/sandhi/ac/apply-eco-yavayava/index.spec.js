import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-eco-yavayava', plugin],
    ],
});

test('sandhi: apply-eco-yavayava: report', (t) => {
    t.report('apply-eco-yavayava', `eco yavāyāvaḥ`);
    t.end();
});

test('sandhi: apply-eco-yavayava: transform', (t) => {
    t.transform('apply-eco-yavayava');
    t.end();
});
