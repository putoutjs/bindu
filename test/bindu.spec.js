import {test} from 'supertape';
import montag from 'montag';
import {bindu, toSLP1} from '../lib/bindu.js';

test('bindu: places', (t) => {
    const {places} = bindu('प्रति एक', {
        fix: false,
    });
    
    const expected = [{
        message: 'acvaṅgā ya va ra la',
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
