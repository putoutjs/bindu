import {createTest} from '@putout/test';
import * as plugin from './index.js';
import * as applyYan from '../apply-yan/index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-purvarupa', plugin],
    ],
});

test('lib: apply-purvarupa: report', (t) => {
    t.report('apply-purvarupa', `ekaḥ pūrvaparayoḥ`);
    t.end();
});

// dirgha: a+a (rama+api → ramApi)
test('bindu: sandhi: apply-purvarupa: transform', (t) => {
    t.transform('apply-purvarupa');
    t.end();
});

// dirgha: i+i (nadi+iti → nadIti)
test('bindu: sandhi: apply-purvarupa: transform: dirgha-i', (t) => {
    t.transform('dirgha-i');
    t.end();
});

// dirgha: I+i (rAmI+iti → rAmIti)
test('bindu: sandhi: apply-purvarupa: transform: dirgha-II', (t) => {
    t.transform('dirgha-II');
    t.end();
});

// dirgha: A+a (rAmA+api → rAmApi)
test('bindu: sandhi: apply-purvarupa: transform: dirgha-A', (t) => {
    t.transform('dirgha-A');
    t.end();
});

// yan: i+a (kavi+api → kavyapi)
test('bindu: sandhi: apply-purvarupa: transform: apply-yan', (t) => {
    t.transform('apply-yan', {
        applyYan,
    });
    t.end();
});

// yan: i+e (kavi+eva → kavyeva)
test('bindu: sandhi: apply-purvarupa: transform: yan-i-e', (t) => {
    t.transform('yan-i-e');
    t.end();
});

// yan: I+a+I+e (rAmI+api, rAmI+eva)
test('bindu: sandhi: apply-purvarupa: transform: yan-I-e', (t) => {
    t.transform('yan-I-e');
    t.end();
});

// yan: u+a (guru+api → gurvapi)
test('bindu: sandhi: apply-purvarupa: transform: yan-u-a', (t) => {
    t.transform('yan-u-a');
    t.end();
});

// yan: u+e (guru+eva → gurveva)
test('bindu: sandhi: apply-purvarupa: transform: yan-u-e', (t) => {
    t.transform('yan-u-e');
    t.end();
});

// yan: u+i (guru+iti → gurviti)
test('bindu: sandhi: apply-purvarupa: transform: yan-u-i', (t) => {
    t.transform('yan-u-i');
    t.end();
});

// yan: U+a (sAdhU+api → sAdhvapi)
test('bindu: sandhi: apply-purvarupa: transform: yan-U-a', (t) => {
    t.transform('yan-U-a');
    t.end();
});

// yan: f(ṛ)+a (pitf+api → pitrapi)
test('bindu: sandhi: apply-purvarupa: transform: yan-f-a', (t) => {
    t.transform('yan-f-a');
    t.end();
});

// yan: x(ḷ)+a (klx+api → kllapi)
test('bindu: sandhi: apply-purvarupa: transform: yan-x-a', (t) => {
    t.transform('yan-x-a');
    t.end();
});

// no report: слово на e (паданта, не пурварупа)
test('bindu: sandhi: apply-purvarupa: no report: no-e-last', (t) => {
    t.noReport('no-e-last');
    t.end();
});

// no report: не SequenceExpression
test('bindu: sandhi: apply-purvarupa: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});

// no report: следующее не авьяя
test('bindu: sandhi: apply-purvarupa: no report: no-avyaya', (t) => {
    t.noReport('no-avyaya');
    t.end();
});

// no report: согласный в конце
test('bindu: sandhi: apply-purvarupa: no report: no-vowel', (t) => {
    t.noReport('no-vowel');
    t.end();
});
