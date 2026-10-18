import {createTest} from '@putout/test';
import {operator} from 'putout';
import {createSandhi} from '#sandhi';

const {remove} = operator;

const report = () => 'test';

const makePlugin = (when, then) => createSandhi({
    report,
    when,
    then,
    fix: ({path, next, name, nextName}) => {
        path.node.name = name + nextName;
        remove(next);
    },
});

const test = createTest(import.meta.url, {
    plugins: [
        ['match', makePlugin(({name}) => name === 'a')],
    ],
});

const spreadTest = createTest(import.meta.url, {
    plugins: [
        ['then-spread', createSandhi({
            report,
            when: () => true,
            then: () => ({
                extra: 'extra',
            }),
            fix: ({path, next, name, nextName, extra}) => {
                path.node.name = `${name}${nextName}_${extra}`;
                remove(next);
            },
        })],
    ],
});

test('sandhi: create-sandhi: report: match', (t) => {
    t.report('match', 'test');
    t.end();
});

test('sandhi: create-sandhi: transform: match', (t) => {
    t.transform('match');
    t.end();
});

test('sandhi: create-sandhi: no report: no-when', (t) => {
    t.noReport('no-when');
    t.end();
});

test('sandhi: create-sandhi: no report: no-sequence', (t) => {
    t.noReport('no-sequence');
    t.end();
});

test('sandhi: create-sandhi: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});

spreadTest('sandhi: create-sandhi: transform: then spread', (t) => {
    t.transform('then-spread');
    t.end();
});
