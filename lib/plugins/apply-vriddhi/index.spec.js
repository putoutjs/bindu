import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-vriddhi', plugin],
    ],
});

test('lib: apply-vriddhi: report', (t) => {
    t.report('apply-vriddhi', 'vṛddhirādaic: ie -> ye');
    t.end();
});

test('lib: apply-vriddhi: transform', (t) => {
    t.transform('apply-vriddhi');
    t.end();
});
