import {test} from 'supertape';
import {tryCatch} from 'try-catch';
import {
    compile,
    parseExpression,
} from './evaluate.js';

const run = (source, a = 'rAma', b = 'iva') => {
    const scope = {
        __a: a,
        __b: b,
    };
    
    return compile(parseExpression(source), new Set())(scope);
};

const fail = (source) => {
    const [error] = tryCatch(run, source);
    
    return error.message;
};

test('shraum: evaluate: string', (t) => {
    const result = run('"x"');
    const expected = 'x';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: words', (t) => {
    const result = run('__a + __b');
    const expected = 'rAmaiva';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: last of __a', (t) => {
    const result = run('__a|1');
    const expected = 'a';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: first of __b', (t) => {
    const result = run('__b|1');
    const expected = 'i';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: drop last of __a', (t) => {
    const result = run('__a / 1');
    const expected = 'rAm';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: drop first of __b', (t) => {
    const result = run('__b / 1');
    const expected = 'va';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: slice of __a slice', (t) => {
    const result = run('(__a / 1)|1');
    const expected = 'm';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: slice of __b slice', (t) => {
    const result = run('(__b / 1)|1');
    const expected = 'v';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: select shortage of __a', (t) => {
    const result = run('__a|2', 's');
    const expected = '';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: select shortage of __b', (t) => {
    const result = run('__b|2', 'a', 'i');
    const expected = '';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: drop shortage', (t) => {
    const result = run('__a / 2', 's');
    const expected = '';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: equal', (t) => {
    const result = run('(__a|2) === "ma"');
    
    t.ok(result);
    t.end();
});

test('shraum: evaluate: not equal', (t) => {
    const result = run('(__a|1) !== "H"');
    
    t.ok(result);
    t.end();
});

test('shraum: evaluate: and, not', (t) => {
    const result = run('__ik(__b|1) && !__ik(__a|1)');
    
    t.ok(result);
    t.end();
});

test('shraum: evaluate: or', (t) => {
    const result = run('__ik(__a|1) || __ik(__b|1)');
    
    t.ok(result);
    t.end();
});

test('shraum: evaluate: predicate on shortage', (t) => {
    const scope = {
        __a: 'nis',
        __b: 'kRta',
    };
    
    const source = '__ik(__a / 1|1)';
    const run = compile(parseExpression(source), new Set());
    const result = run(scope);
    
    t.ok(result);
    t.end();
});

test('shraum: evaluate: lookup', (t) => {
    const result = run('__yan(__b|1)');
    const expected = 'y';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: error: unknown identifier', (t) => {
    const result = fail('x');
    const expected = 'Unknown identifier: x';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: error: unsupported node', (t) => {
    const result = fail('1');
    const expected = 'Unsupported node: NumericLiteral';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: error: unsupported unary', (t) => {
    const result = fail('-__a');
    const expected = 'Unsupported operator: -';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: error: unsupported logical', (t) => {
    const result = fail('__a ?? __b');
    const expected = 'Unsupported operator: ??';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: error: unsupported binary', (t) => {
    const result = fail('__a * __b');
    const expected = 'Unsupported operator: *';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: error: slice without number', (t) => {
    const result = fail('__a|__b');
    const expected = 'Expected __a or __b fragment with number around |';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: error: slice of non-word', (t) => {
    const result = fail('"x"|1');
    const expected = 'Expected __a or __b fragment with number around |';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: error: unknown builtin', (t) => {
    const result = fail('__nope(__a)');
    const expected = 'Expected builtin call with one argument: __nope';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: error: two arguments', (t) => {
    const result = fail('__yan(__a, __b)');
    const expected = 'Expected builtin call with one argument: __yan';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: constant: __avagraha', (t) => {
    const result = run('__a / 2 + "o" + __avagraha + __b / 1', 'naraH', 'api');
    const expected = 'naro__avagraha__pi';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: evaluate: refs', (t) => {
    const refs = new Set();
    
    compile(parseExpression('__a + __b'), refs);
    
    const result = [...refs];
    const expected = [
        '__a',
        '__b',
    ];
    
    t.deepEqual(result, expected);
    t.end();
});
