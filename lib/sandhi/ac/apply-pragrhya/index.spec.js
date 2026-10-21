import {createSandhiTest} from '#sandhi-test';
import * as plugin from './index.js';

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['apply-pragrhya', plugin],
    ],
});

test('bindu: sandhi: apply-pragrhya: report', (t) => {
    t.report('apply-pragrhya', `ādguṇaḥ pragṛhya`);
    t.end();
});

test('bindu: sandhi: apply-pragrhya: no transform: pragrhya-e', (t) => {
    t.noTransform('pragrhya-e');
    t.end();
});

test('bindu: sandhi: apply-pragrhya: no transform: pragrhya-o', (t) => {
    t.noTransform('pragrhya-o');
    t.end();
});
