import {test} from 'supertape';
import {detect} from './detect.js';

test('bindu: detect: devanagari', (t) => {
    const result = detect('राम');
    const expected = 'devanagari';
    
    t.equal(result, expected);
    t.end();
});

test('bindu: detect: iast', (t) => {
    const result = detect('rāma');
    const expected = 'iast';
    
    t.equal(result, expected);
    t.end();
});

test('bindu: detect: iast: combining', (t) => {
    const result = detect('ra\u0304ma');
    const expected = 'iast';
    
    t.equal(result, expected);
    t.end();
});

test('bindu: detect: slp1', (t) => {
    const result = detect('rAma');
    const expected = 'slp1';
    
    t.equal(result, expected);
    t.end();
});
