import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['apply-kharovasana', plugin],
    ],
});

test('bindu: sandhi: apply-kharovasana: report', (t) => {
    t.report('apply-kharovasana', `kharavasānayor visarjanīyaḥ`);
    t.end();
});

test('bindu: sandhi: apply-kharovasana: transform', (t) => {
    t.transform('apply-kharovasana');
    t.end();
});

// no report: standalone identifier, not in sequence expression
test('bindu: sandhi: apply-kharovasana: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});
