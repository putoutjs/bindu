import {test as supertest} from 'supertape';
import {tryCatch} from 'try-catch';
import {createTest} from '#test';
import {
    compileRules,
    evaluate,
    findRule,
} from './shraum.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['merge', {
            report: () => 'shraum',
            shraum: () => ({
                '__ik(__a|1) && __ac(__b|1)': '__a / 1 + __yan(__a|1) + __b',
            }),
        }],
        ['solo', {
            report: () => 'shraum',
            shraum: () => ({
                '__saraphe(__a|1) && __khar(__b|1)': '__a / 1 + "H"',
            }),
        }],
    ],
});

test('shraum: report: merge', (t) => {
    t.report('merge', 'shraum');
    t.end();
});

test('shraum: transform: merge', (t) => {
    t.transform('merge');
    t.end();
});

test('shraum: transform: solo', (t) => {
    t.transform('solo');
    t.end();
});

test('shraum: no report: no-match', (t) => {
    t.noReport('no-match');
    t.end();
});

test('shraum: no report: no-next', (t) => {
    t.noReport('no-next');
    t.end();
});

supertest('shraum: first matching rule wins', (t) => {
    const rules = compileRules({
        '__a === "x"': '"one"',
        '__a === "x" && __b === "y"': '"two"',
    });
    
    const {replacement} = evaluate(rules, {
        name: 'x',
        nextName: 'y',
    });
    
    t.equal(replacement, 'one');
    t.end();
});

supertest('shraum: solo: no __b in replacement', (t) => {
    const [{solo}] = compileRules({
        '__b === "y"': '__a',
    });
    
    t.ok(solo);
    t.end();
});

supertest('shraum: not solo: __b in replacement', (t) => {
    const [{solo}] = compileRules({
        '__a === "x"': '__a + __b',
    });
    
    t.notOk(solo);
    t.end();
});

supertest('shraum: condition must be boolean', (t) => {
    const rules = compileRules({
        '__a|1': '__a',
    });
    
    const [error] = tryCatch(findRule, rules, {
        name: 'x',
        nextName: 'y',
    });
    
    t.equal(error.message, 'Expected boolean, got string');
    t.end();
});

supertest('shraum: replacement must be string', (t) => {
    const rules = compileRules({
        '__a === "x"': '__a === "x"',
    });
    
    const [error] = tryCatch(evaluate, rules, {
        name: 'x',
        nextName: 'y',
    });
    
    t.equal(error.message, 'Expected string, got boolean');
    t.end();
});
