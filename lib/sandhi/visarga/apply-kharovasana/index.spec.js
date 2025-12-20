import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-kharovasana', plugin],
    ],
});

test('sandhi: apply-kharovasana: report', (t) => {
    t.report('apply-kharovasana', `kharavasānayor visarjanīyaḥ`);
    t.end();
});

test('sandhi: apply-kharovasana: transform', (t) => {
    t.transform('apply-kharovasana');
    t.end();
});
