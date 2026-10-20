import {test} from 'supertape';
import {montag} from 'montag';
import {bindu, toSLP1} from '../lib/bindu.js';

test('bindu: places', (t) => {
    const {places} = bindu('प्रति एक', {
        fix: false,
    });
    
    const expected = [{
        message: 'iko yaṇaci',
        position: {
            column: 0,
            line: 1,
        },
        rule: 'sandhi/ac/apply-yan',
    }];
    
    t.deepEqual(places, expected);
    t.end();
});

test('bindu: sandhi: yan', (t) => {
    const {code} = bindu('द्रौपदी अश्वम्', {
        type: 'iast',
    });
    
    const expected = 'draupadyaśvam';
    
    t.equal(code, expected);
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

test('bindu: sandhi: vriddhi', (t) => {
    const {code} = bindu('राम एष', {
        type: 'iast',
    });
    
    const expected = 'rāmaiṣa';
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: ayadaya', (t) => {
    const {code} = bindu('na ulluka', {
        type: 'iast',
    });
    
    const expected = `nolluka`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: ayadaya: not pararupa', (t) => {
    const {code} = bindu('rAma etad', {
        type: 'slp1',
    });
    
    const expected = `rAmaitad`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: pararupa: no dirgha', (t) => {
    const {code} = bindu('rama api', {
        type: 'slp1',
    });
    
    const expected = `ramApi`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: ayadaya: slp1', (t) => {
    const {code} = bindu('अन्ते अपि', {
        type: 'slp1',
    });
    
    const expected = `antaye'pi`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: rori', (t) => {
    const {code} = bindu('punaH api', {
        type: 'slp1',
    });
    
    const expected = `punarapi`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: kharovasana', (t) => {
    const {code} = bindu('punar karoti', {
        type: 'slp1',
    });
    
    const expected = `punaH karoti`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: ac: ec-yava-yava', (t) => {
    const {code} = bindu('nai iti', {
        type: 'slp1',
    });
    
    const expected = `nayiti`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: bhobhago', (t) => {
    const {code} = bindu('namaH asti', {
        type: 'slp1',
    });
    
    const expected = `namo'asti`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: input: spl1', (t) => {
    const {code} = bindu('ante api', {
        type: 'slp1',
    });
    
    const expected = `antaye'pi`;
    
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

test('bindu: sandhi: hal: anusvara', (t) => {
    const {code} = bindu('सम् गच्छति', {
        type: 'iast',
    });
    
    t.equal(code, 'saṅgacchati');
    t.end();
});

test('bindu: sandhi: hal: anusvara: yoga', (t) => {
    const {code} = bindu('सम् योग', {
        type: 'iast',
    });
    
    t.equal(code, 'sañyoga');
    t.end();
});

test('bindu: sandhi: hal: jashtva: vak', (t) => {
    const {code} = bindu('वाक् देव', {
        type: 'iast',
    });
    
    t.equal(code, 'vāgdeva');
    t.end();
});

test('bindu: sandhi: hal: jashtva: tat', (t) => {
    const {code} = bindu('तत् अपि', {
        type: 'iast',
    });
    
    t.equal(code, 'tadapi');
    t.end();
});

test('bindu: sandhi: hal: places', (t) => {
    const {places} = bindu('वाक् देव', {
        fix: false,
    });
    
    t.deepEqual(places[0], {
        message: `jhalāṃ jaśo'nte`,
        position: {
            column: 0,
            line: 1,
        },
        rule: 'sandhi/hal/apply-jashtva',
    });
    t.end();
});

test('bindu: sandhi: hal: chain: jashtva + yan', (t) => {
    const {code} = bindu('वाक् एव', {
        type: 'iast',
    });
    
    t.equal(code, 'vāgeva');
    t.end();
});

test('bindu: sandhi: visarga: voiced', (t) => {
    const {code} = bindu('नरः गच्छति', {
        type: 'iast',
    });
    
    t.equal(code, 'naro gacchati');
    t.end();
});

test('bindu: sandhi: visarga: vowel', (t) => {
    const {code} = bindu('नरः अपि', {
        type: 'iast',
    });
    
    t.equal(code, 'nararapi');
    t.end();
});

test('bindu: sandhi: visarga: sassa: s', (t) => {
    const {code} = bindu('नमः स्मरः', {
        type: 'iast',
    });
    
    t.equal(code, 'namassmaraḥ');
    t.end();
});

test('bindu: sandhi: hal: nasal: m+m', (t) => {
    const {code} = bindu('किम् मलम्', {
        type: 'iast',
    });
    
    t.equal(code, 'kimmalam');
    t.end();
});

test('bindu: sandhi: hal: shchtva', (t) => {
    const {code} = bindu('तत् च', {
        type: 'iast',
    });
    
    t.equal(code, 'tacca');
    t.end();
});

test('bindu: sandhi: hal: cch', (t) => {
    const {code} = bindu('उप छन्द', {
        type: 'iast',
    });
    
    t.equal(code, 'upacchanda');
    t.end();
});

test('bindu: sandhi: dirgha before avyaya is skipped', (t) => {
    const {code} = bindu('rAma api', {
        type: 'slp1',
    });
    
    t.equal(code, 'rAmApi');
    t.end();
});

test('bindu: sandhi: dirgha before non-avyaya is applied', (t) => {
    const {code} = bindu('rAma asti', {
        type: 'slp1',
    });
    
    t.equal(code, 'rAmAsti');
    t.end();
});

test('bindu: sandhi: dirgha before pronoun is applied', (t) => {
    const {code} = bindu('rAma aham', {
        type: 'slp1',
    });
    
    t.equal(code, 'rAmAham');
    t.end();
});

test('bindu: sandhi: avyaya suffix blocks dirgha', (t) => {
    const {code} = bindu('rAma kftvA', {
        type: 'slp1',
    });
    
    t.equal(code, 'rAma kftvA');
    t.end();
});
