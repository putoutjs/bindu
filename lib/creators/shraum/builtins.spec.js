import {test} from 'supertape';
import {builtins} from './builtins.js';

test('shraum: builtins: __ac: A', (t) => {
    const result = builtins.__ac('A');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __ik: k', (t) => {
    const result = builtins.__ik('k');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __ik: empty', (t) => {
    const result = builtins.__ik('');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __jhash: g', (t) => {
    const result = builtins.__jhash('g');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __jhash: k', (t) => {
    const result = builtins.__jhash('k');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __rasha: z', (t) => {
    const result = builtins.__rasha('z');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __saraphe: r', (t) => {
    const result = builtins.__saraphe('r');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __mum: M', (t) => {
    const result = builtins.__mum('M');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __aA: A', (t) => {
    const result = builtins.__aA('A');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __tavarga: n', (t) => {
    const result = builtins.__tavarga('n');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __cavarga: Y', (t) => {
    const result = builtins.__cavarga('Y');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __tad: d', (t) => {
    const result = builtins.__tad('d');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __pragrhya: kavI', (t) => {
    const result = builtins.__pragrhya('kavI');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __avyaya: iti', (t) => {
    const result = builtins.__avyaya('iti');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __inflected: aMSakam', (t) => {
    const result = builtins.__inflected('aMSakam');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __inflected: aMSumaw', (t) => {
    const result = builtins.__inflected('aMSumaw');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __inflected: qqq', (t) => {
    const result = builtins.__inflected('qqq');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __yan: i', (t) => {
    const result = builtins.__yan('i');
    const expected = 'y';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: builtins: __yan: k', (t) => {
    const result = builtins.__yan('k');
    const expected = 'k';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: builtins: __guna: I', (t) => {
    const result = builtins.__guna('I');
    const expected = 'e';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: builtins: __aghosha: g', (t) => {
    const result = builtins.__aghosha('g');
    const expected = 'k';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: builtins: __jash: k', (t) => {
    const result = builtins.__jash('k');
    const expected = 'g';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: builtins: __talavya: t', (t) => {
    const result = builtins.__talavya('t');
    const expected = 'c';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: builtins: __anunasika: K', (t) => {
    const result = builtins.__anunasika('K');
    const expected = 'N';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: builtins: __anunasika: a', (t) => {
    const result = builtins.__anunasika('a');
    const expected = 'a';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: builtins: __upper: a', (t) => {
    const result = builtins.__upper('a');
    const expected = 'A';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: builtins: __lower: A', (t) => {
    const result = builtins.__lower('A');
    const expected = 'a';
    
    t.equal(result, expected);
    t.end();
});

test('shraum: builtins: __savarna: a, A', (t) => {
    const result = builtins.__savarna('a', 'A');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __savarna: a, i', (t) => {
    const result = builtins.__savarna('a', 'i');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __savarna: empty', (t) => {
    const result = builtins.__savarna('a', '');
    
    t.notOk(result);
    t.end();
});
