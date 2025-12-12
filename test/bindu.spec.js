import {test} from 'supertape';
import montag from 'montag';
import {bindu, toSLP1} from '../lib/bindu.js';

test.skip('bindu: places', (t) => {
    const {places} = bindu('प्रति एक', {
        fix: false,
    });
    
    const expected = [{
        message: 'iko yaṇaci',
        position: {
            column: 0,
            line: 1,
        },
        rule: 'sandhi/apply-yan',
    }];
    
    t.deepEqual(places, expected);
    t.end();
});

test('bindu: result', (t) => {
    const {code} = bindu('प्रति एक');
    const expected = 'प्रत्येक';
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: guna', (t) => {
    const {code} = bindu('राम इव', {
        type: 'slp1',
    });
    
    const expected = 'rAmeva';
    
    t.equal(code, expected);
    t.end();
});

test.skip('bindu: sandhi: vriddhi', (t) => {
    const {code} = bindu('राम एष', {
        type: 'slp1',
    });
    
    const expected = 'rAmaiza';
    
    t.equal(code, expected);
    t.end();
});

test.skip('bindu: sandhi: ayadaya', (t) => {
    const {code} = bindu('no ulluka', {
        type: 'slp1',
    });
    
    const expected = `devau`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: ayadaya: not pararupa', (t) => {
    const {code} = bindu('rama etad', {
        type: 'slp1',
    });
    
    const expected = `ramayetad`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: pararupa: no dirgha', (t) => {
    const {code} = bindu('rama api', {
        type: 'slp1',
    });
    
    const expected = `ramapi`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: purvarupa', (t) => {
    const {code} = bindu('अन्ते अपि', {
        type: 'slp1',
    });
    
    const expected = `ante'pi`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: input: spl1', (t) => {
    const {code} = bindu('ante api', {
        type: 'slp1',
    });
    
    const expected = `ante'pi`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: no report', (t) => {
    const {places} = bindu(`ante'api`, {
        fix: false,
        type: 'slp1',
    });
    
    t.notOk(places.length);
    t.end();
});

test('bindu: couple lines', (t) => {
    const {code} = bindu(montag`
        प्रति एक |
        कॄ आत्मनः ||
    `);
    
    const result = toSLP1(code);
    const expected = montag`
        pratyeka |
        krAtmanaH ||
    `;
    
    t.equal(result, expected);
    t.end();
});
