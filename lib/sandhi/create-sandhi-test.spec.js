import {operator} from 'putout';
import {createSandhiTest} from '#sandhi-test';

const {remove} = operator;

const test = createSandhiTest(import.meta.url, {
    plugins: [
        ['sandhi-test', {
            report: () => 'sandhi-test',
            when: ({last}) => last === 'i',
            fix: ({path, next, name, nextName}) => {
                path.node.name = `${name}${nextName}`;
                remove(next);
            },
        }],
    ],
});

test('sandhi: create-sandhi-test: report', (t) => {
    t.report('sandhi-test', 'sandhi-test');
    t.end();
});

test('sandhi: create-sandhi-test: transform', (t) => {
    t.transform('sandhi-test');
    t.end();
});

test('sandhi: create-sandhi-test: no report', (t) => {
    t.noReport('sandhi-test-no');
    t.end();
});
