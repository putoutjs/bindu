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

test('shraum: builtins: __stu: s + tavarga', (t) => {
    const result = builtins.__stu('s');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __stu: k', (t) => {
    const result = builtins.__stu('k');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __scuna: s, c', (t) => {
    const result = builtins.__scuna('s', 'c');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __scuna: k, c', (t) => {
    const result = builtins.__scuna('k', 'c');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __scuna: s, d', (t) => {
    const result = builtins.__scuna('s', 'd');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __shtuna: s, R', (t) => {
    const result = builtins.__shtuna('s', 'R');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __shtuna: k, R', (t) => {
    const result = builtins.__shtuna('k', 'R');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __kupu: k', (t) => {
    const result = builtins.__kupu('k');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __kupu: c', (t) => {
    const result = builtins.__kupu('c');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __shcu: c', (t) => {
    const result = builtins.__shcu('c');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __shcu: t', (t) => {
    const result = builtins.__shcu('t');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __upasarga: nis', (t) => {
    const result = builtins.__upasarga('nis');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __upasarga: agnis', (t) => {
    const result = builtins.__upasarga('agnis');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __apratyaya: niH', (t) => {
    const result = builtins.__apratyaya('niH');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __apratyaya: agniH', (t) => {
    const result = builtins.__apratyaya('agniH');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __nasal: m', (t) => {
    const result = builtins.__nasal('m');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __nasal: g', (t) => {
    const result = builtins.__nasal('g');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __khay: k', (t) => {
    const result = builtins.__khay('k');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __khay: c', (t) => {
    const result = builtins.__khay('c');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __murdhanya: z', (t) => {
    const result = builtins.__murdhanya('z');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __murdhanya: t', (t) => {
    const result = builtins.__murdhanya('t');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __ttva: t -> w', (t) => {
    const result = builtins.__ttva('t');
    
    t.equal(result, 'w');
    t.end();
});

test('shraum: builtins: __ttva: T -> W', (t) => {
    const result = builtins.__ttva('T');
    
    t.equal(result, 'W');
    t.end();
});

test('shraum: builtins: __pararupa: e, a', (t) => {
    const result = builtins.__pararupa('e', 'a');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __pararupa: o, a', (t) => {
    const result = builtins.__pararupa('o', 'a');
    
    t.ok(result);
    t.end();
});

test('shraum: builtins: __pararupa: E, a', (t) => {
    const result = builtins.__pararupa('E', 'a');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __pararupa: e, i', (t) => {
    const result = builtins.__pararupa('e', 'i');
    
    t.notOk(result);
    t.end();
});

test('shraum: builtins: __vriddhi: e -> E', (t) => {
    const result = builtins.__vriddhi('e');
    
    t.equal(result, 'E');
    t.end();
});

test('shraum: builtins: __vriddhi: o -> O', (t) => {
    const result = builtins.__vriddhi('o');
    
    t.equal(result, 'O');
    t.end();
});

test('shraum: builtins: __vriddhi: E -> E', (t) => {
    const result = builtins.__vriddhi('E');
    
    t.equal(result, 'E');
    t.end();
});
