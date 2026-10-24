import {test} from 'supertape';
import {bindu} from '../lib/bindu.js';

// Test vriddhi with first char not e or o
// This covers lines 20-23 in lib/sandhi/ac/apply-vriddhi/index.js
test('bindu: sandhi: vriddhi: k first', (t) => {
    const {code} = bindu('rama k', {
        type: 'slp1',
    });
    
    t.equal(code, 'rama k');
    t.end();
});

test('bindu: sandhi: vriddhi: g first', (t) => {
    const {code} = bindu('rama g', {
        type: 'slp1',
    });
    
    t.equal(code, 'rama g');
    t.end();
});

test('bindu: sandhi: vriddhi: f first', (t) => {
    const {code} = bindu('rama f', {
        type: 'slp1',
    });
    
    t.equal(code, 'ramar');
    t.end();
});

test('bindu: sandhi: vriddhi: x first', (t) => {
    const {code} = bindu('rama x', {
        type: 'slp1',
    });
    
    t.equal(code, 'ramal');
    t.end();
});

test('bindu: sandhi: vriddhi: o first', (t) => {
    const {code} = bindu('rama o', {
        type: 'slp1',
    });
    
    t.equal(code, 'ramau');
    t.end();
});
