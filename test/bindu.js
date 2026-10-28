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

test('bindu: sandhi: vriddhi: devanagari', (t) => {
    const {code} = bindu('राम एष');
    
    t.equal(code, 'रामैष');
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
    
    const expected = `rAmEtad`;
    
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
    
    const expected = `ante'pi`;
    
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
    
    t.equal(code, 'vāg deva');
    t.end();
});

test('bindu: sandhi: hal: jashtva: tat', (t) => {
    const {code} = bindu('तत् अपि', {
        type: 'iast',
    });
    
    t.equal(code, 'tad api');
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
    
    t.equal(code, 'vāg eva');
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

test('bindu: sandhi: hal, apply-shchutva', (t) => {
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

test('bindu: sandhi: hal: topadhasha', (t) => {
    const {code} = bindu('tat labhate', {
        type: 'slp1',
    });
    
    t.equal(code, 'tallabhate');
    t.end();
});

test('bindu: sandhi: hal: topadhasha: d', (t) => {
    const {code} = bindu('tad labhate', {
        type: 'slp1',
    });
    
    t.equal(code, 'tallabhate');
    t.end();
});

test('bindu: sandhi: hal: topadhasha: no dental last', (t) => {
    const {code} = bindu('rAma labhate', {
        type: 'slp1',
    });
    
    t.equal(code, 'rAma labhate');
    t.end();
});

test('bindu: sandhi: ac: pragrhya: e', (t) => {
    const {code} = bindu('kavI api', {
        type: 'slp1',
    });
    
    t.equal(code, 'kavI api');
    t.end();
});

test('bindu: sandhi: ac: pragrhya: o', (t) => {
    const {code} = bindu('sADU api', {
        type: 'slp1',
    });
    
    t.equal(code, 'sADU api');
    t.end();
});

test('bindu: sandhi: ac: pragrhya: not pragrhya', (t) => {
    const {code} = bindu('rAma api', {
        type: 'slp1',
    });
    
    t.equal(code, 'rAmApi');
    t.end();
});

test('bindu: sandhi: hal: natva', (t) => {
    const {code} = bindu('pitar naH', {
        type: 'slp1',
    });
    
    t.equal(code, 'pitarRaH');
    t.end();
});

test('bindu: sandhi: hal: natva: after R', (t) => {
    const {code} = bindu('puR naH', {
        type: 'slp1',
    });
    
    t.equal(code, 'puRRaH');
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
    
    t.equal(code, 'vAk ca');
    t.end();
});

test('bindu: sandhi: hal: charva: g-k', (t) => {
    const {code} = bindu('vAg te', {
        type: 'slp1',
    });
    
    t.equal(code, 'vAk te');
    t.end();
});

test('bindu: sandhi: hal: charva: no voiced last', (t) => {
    const {code} = bindu('vAk deva', {
        type: 'slp1',
    });
    
    t.equal(code, 'vAg deva');
    t.end();
});

test('bindu: sandhi: apply-as-sandhi: rAmas, asti', (t) => {
    const {code} = bindu('rAmas asti', {
        type: 'slp1',
    });
    
    const expected = `rAmo'sti`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: apply-as-sandhi: rAmas, ca (voiced consonant)', (t) => {
    const {code} = bindu('rAmas ca', {
        type: 'slp1',
    });
    
    const expected = `rAmaS ca`;
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: apply-aH-sandhi: rAm, deva (voiced consonant)', (t) => {
    const {code} = bindu('rAm deva', {
        type: 'slp1',
    });
    
    const expected = 'rAndeva';
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: apply-aH-sandhi: no-short rAmaH, asti', (t) => {
    const {code} = bindu('rAmaH asti', {
        type: 'slp1',
    });
    
    const expected = 'rAmarasti';
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: apply-aH-sandhi: no-un rAm, ca', (t) => {
    const {code} = bindu('rAm ca', {
        type: 'slp1',
    });
    
    const expected = 'rAYca';
    
    t.equal(code, expected);
    t.end();
});

test('bindu: sandhi: apply-satvam: no-other-sibilant niS, kRta', (t) => {
    const {code} = bindu('niS kRta', {
        type: 'slp1',
    });
    
    const expected = 'niS kRta';
    
    t.equal(code, expected);
    t.end();
});

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
    
    t.equal(code, 'ramO');
    t.end();
});

test('bindu: iast: input', (t) => {
    const {code} = bindu('rāma eṣa', {
        type: 'iast',
    });
    
    t.equal(code, 'rāmaiṣa');
    t.end();
});

test('bindu: iast: input: from', (t) => {
    const {code} = bindu('rāma eṣa', {
        from: 'iast',
        type: 'iast',
    });
    
    t.equal(code, 'rāmaiṣa');
    t.end();
});

test('bindu: iast: input: combining', (t) => {
    const {code} = bindu('ra\u0304ma e\u1E63a', {
        type: 'iast',
    });
    
    t.equal(code, 'rāmaiṣa');
    t.end();
});

test('bindu: iast: input: devanagari output', (t) => {
    const {code} = bindu('rāma eṣa');
    
    t.equal(code, 'रामैष');
    t.end();
});

const conflicts = [
    ['sat jana', 'sajjana'],
    ['tat jana', 'tajjana'],
    ['tat ca', 'tacca'],
    ['tat lokaH', 'tallokaH'],
    ['vAk eva', 'vAg eva'],
    ['tat api', 'tad api'],
];

const visarga = [
    ['namaH te', 'namas te'],
    ['kaH cit', 'kaS cit'],
    ['agniH ca', 'agniS ca'],
    ['rAmaH karoti', 'rAmaH karoti'],
    ['namaH Siva', 'namaSSiva'],
    ['agniH te', 'agnis te'],
    ['nis kfta', 'nizkfta'],
    ['agniH karoti', 'agniH karoti'],
    ['punar ramate', 'punA ramate'],
    ['rAmAH asti', 'rAmA asti'],
    ['devAH gacCanti', 'devA gacCanti'],
    ['devAH ca', 'devAS ca'],
    ['tat wIkA', 'tawwIkA'],
    ['tat mama', 'tanmama'],
    ['tat Siva', 'tacCiva'],
    ['vAk Siva', 'vAkCiva'],
    ['tat SrI', 'tacSrI'],
    ['aBi sTA', 'aBizTA'],
    ['prati stu', 'pratizwu'],
    ['sam kfta', 'saMskfta'],
    ['pari kfta', 'parizkfta'],
    ['sam gacCati', 'saNgacCati'],
    ['mahAn ca', 'mahAMS ca'],
    ['mahAn wIkA', 'mahAMzwIkA'],
    ['mahAn tatra', 'mahAMs tatra'],
    ['mahAn jayati', 'mahAYjayati'],
    ['ut sTAna', 'utTAna'],
    ['ud sTAna', 'utTAna'],
    ['ud stamB', 'uttamB'],
    ['jagat nAtha', 'jagannAtha'],
    ['vAk mayam', 'vANmayam'],
    ['dfz ti', 'dfzwi'],
    ['kfz ta', 'kfzwa'],
    ['harir wIkA', 'harizwIkA'],
];

for (const [input, expected] of visarga) {
    test(`bindu: conflict: sassa + shchutva: ${input}`, (t) => {
        const {code} = bindu(input, {
            type: 'slp1',
        });
        
        t.equal(code, expected);
        t.end();
    });
}

for (const [input, expected] of conflicts) {
    test(`bindu: conflict: jashtva + shchutva: ${input}`, (t) => {
        const {code} = bindu(input, {
            from: 'slp1',
            type: 'slp1',
        });
        
        t.equal(code, expected);
        t.end();
    });
}
