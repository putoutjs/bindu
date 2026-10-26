import {test} from 'supertape';
import {tryCatch} from 'try-catch';
import {splitNimitta} from './nimitta.js';

test('shraum: nimitta: split guards and cases', (t) => {
    const result = splitNimitta([
        ['-', 'one'],
        ['-', 'two'],
        ['+', 'three'],
        ['+', 'four'],
    ]);
    
    const expected = {
        guards: ['one', 'two'],
        cases: ['three', 'four'],
    };
    
    t.deepEqual(result, expected);
    t.end();
});

test('shraum: nimitta: only guards', (t) => {
    const result = splitNimitta([
        ['-', 'one'],
    ]);
    
    const expected = {
        guards: ['one'],
        cases: [],
    };
    
    t.deepEqual(result, expected);
    t.end();
});

test('shraum: nimitta: empty', (t) => {
    const result = splitNimitta([]);
    
    const expected = {
        guards: [],
        cases: [],
    };
    
    t.deepEqual(result, expected);
    t.end();
});

test('shraum: nimitta: error: unknown sign', (t) => {
    const [error] = tryCatch(splitNimitta, [
        ['*', 'one'],
    ]);
    
    t.equal(error.message, 'Expected + or - in nimitta, got *');
    t.end();
});

test('shraum: nimitta: error: guard after case', (t) => {
    const [error] = tryCatch(splitNimitta, [
        ['+', 'one'],
        ['-', 'two'],
    ]);
    
    t.equal(error.message, 'Put - lines before + lines in nimitta');
    t.end();
});
