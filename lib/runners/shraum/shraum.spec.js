import {test as supertest} from 'supertape';
import {tryCatch} from 'try-catch';
import {createTest} from '#test';
import {
    compileRules,
    createShraum,
    evaluate,
    findRule,
} from '#shraum';

const test = createTest(import.meta.url, {
    plugins: [
        ['merge', {
            report: () => 'shraum',
            shraum: () => ({
                '__ik(__a|1) && __ac(__b|1)': '__a / 1 + __yan(__a|1) + __b',
            }),
        }],
        ['guarded', {
            report: () => 'shraum',
            nimitta: () => [
                ['-', '__b === "stop"'],
            ],
            shraum: () => ({
                '__a === "x"': '__a + "-" + __b',
            }),
        }],
        ['solo', {
            report: () => 'shraum',
            shraum: () => ({
                '__saraphe(__a|1) && __khar(__b|1)': '__a / 1 + "H"',
            }),
        }],
        ['avagraha', {
            report: () => 'shraum',
            shraum: () => ({
                '(__a|2) === "aH" && __ac(__b|1)': '__a / 2 + "o" + __avagraha + __b / 1',
            }),
        }],
        ['pair', {
            report: () => 'shraum',
            shraum: () => ({
                '__a === "k"': ['x', 'y'],
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

test('shraum: transform: avagraha', (t) => {
    t.transform('avagraha');
    t.end();
});

test('shraum: transform: pair', (t) => {
    t.transform('pair');
    t.end();
});

test('shraum: pair: keeps both words', (t) => {
    const [{replace}] = compileRules({
        '__a === "k"': ['x', 'y'],
    });
    
    const result = replace({
        __a: 'k',
        __b: 'z',
    });
    
    const expected = ['x', 'y'];
    
    t.deepEqual(result, expected);
    t.end();
});

test('shraum: pair: not solo', (t) => {
    const [{solo}] = compileRules({
        '__a === "k"': ['x', 'y'],
    });
    
    t.notOk(solo);
    t.end();
});

test('shraum: pair: non-string element throws', (t) => {
    const rules = compileRules({
        '__a === "k"': ['x', 1],
    });
    
    const [error] = tryCatch(evaluate, rules, {
        name: 'k',
        nextName: 'z',
    });
    
    const result = error?.message;
    const expected = 'Expected string, got number';
    
    t.equal(result, expected);
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

test('shraum: transform: guard-open', (t) => {
    t.transform('guard-open');
    t.end();
});

test('shraum: no report: guard-blocked', (t) => {
    t.noReport('guard-blocked');
    t.end();
});

supertest('shraum: guard blocks every case', (t) => {
    const rules = compileRules({
        '__a === "x"': '"one"',
    }, ['__b === "y"']);
    
    const result = findRule(rules, {
        name: 'x',
        nextName: 'y',
    });
    
    t.notOk(result);
    t.end();
});

supertest('shraum: guard must be boolean', (t) => {
    const rules = compileRules({
        '__a === "x"': '"one"',
    }, ['__b']);
    
    const [error] = tryCatch(findRule, rules, {
        name: 'x',
        nextName: 'y',
    });
    
    t.equal(error.message, 'Expected boolean, got string');
    t.end();
});

supertest('shraum: error: + line in nimitta', (t) => {
    const [error] = tryCatch(createShraum, {
        plugin: {
            nimitta: () => [
                ['+', '__a === "x"'],
            ],
            shraum: () => ({}),
        },
    });
    
    t.equal(error.message, 'Expected - lines only in nimitta with shraum');
    t.end();
});

supertest('shraum: error: shraum and karya', (t) => {
    const [error] = tryCatch(createShraum, {
        plugin: {
            shraum: () => ({}),
            karya: () => '__a',
        },
    });
    
    t.equal(error.message, 'Expected shraum or karya, not both');
    t.end();
});
