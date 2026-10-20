import {test} from 'supertape';
import {bindu} from '../lib/bindu.js';

test('bindu: sandhi: hal: natva', (t) => {
    const {code} = bindu('pitar naH', {
        type: 'slp1',
    });
    
    t.equal(code, 'pitarNaH');
    t.end();
});

test('bindu: sandhi: hal: natva: after R', (t) => {
    const {code} = bindu('puR naH', {
        type: 'slp1',
    });
    
    t.equal(code, 'puRNaH');
    t.end();
});

test('bindu: sandhi: hal: natva: no rsh', (t) => {
    const {code} = bindu('gata naH', {
        type: 'slp1',
    });
    
    t.equal(code, 'gata naH');
    t.end();
});

test('bindu: sandhi: hal: charva', (t) => {
    const {code} = bindu('vAg ca', {
        type: 'slp1',
    });
    
    t.equal(code, 'vAkca');
    t.end();
});

test('bindu: sandhi: hal: charva: g-k', (t) => {
    const {code} = bindu('vAg te', {
        type: 'slp1',
    });
    
    t.equal(code, 'vAkte');
    t.end();
});

test('bindu: sandhi: hal: charva: no voiced last', (t) => {
    const {code} = bindu('vAk deva', {
        type: 'slp1',
    });
    
    t.equal(code, 'vAgdeva');
    t.end();
});
