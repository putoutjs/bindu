import {test} from 'supertape';
import {avyayamAsti} from '#avyaya';
test('bindu: avyaya: particle: api', (t) => {
    const result = avyayamAsti('api');
    
    t.ok(result);
    t.end();
});

test('bindu: avyaya: particle: ca', (t) => {
    const result = avyayamAsti('ca');
    
    t.ok(result);
    t.end();
});

test('bindu: avyaya: particle: iti', (t) => {
    const result = avyayamAsti('iti');
    
    t.ok(result);
    t.end();
});

test('bindu: avyaya: particle: tatra', (t) => {
    const result = avyayamAsti('tatra');
    
    t.ok(result);
    t.end();
});

test('bindu: avyaya: particle: yathA', (t) => {
    const result = avyayamAsti('yathA');
    
    t.ok(result);
    t.end();
});

test('bindu: avyaya: particle: punar', (t) => {
    const result = avyayamAsti('punar');
    
    t.ok(result);
    t.end();
});

test('bindu: avyaya: particle: sakft', (t) => {
    const result = avyayamAsti('sakft');
    
    t.ok(result);
    t.end();
});

test('bindu: avyaya: suffix: kftvA', (t) => {
    const result = avyayamAsti('kftvA');
    
    t.ok(result);
    t.end();
});

test('bindu: avyaya: suffix: Agamya', (t) => {
    const result = avyayamAsti('Agamya');
    
    t.ok(result);
    t.end();
});

test('bindu: avyaya: suffix: gantum', (t) => {
    const result = avyayamAsti('gantum');
    
    t.ok(result);
    t.end();
});

test('bindu: avyaya: pronoun: aham', (t) => {
    const result = avyayamAsti('aham');
    
    t.notOk(result);
    t.end();
});

test('bindu: avyaya: pronoun: tvam', (t) => {
    const result = avyayamAsti('tvam');
    
    t.notOk(result);
    t.end();
});

test('bindu: avyaya: pronoun: saH', (t) => {
    const result = avyayamAsti('saH');
    
    t.notOk(result);
    t.end();
});

test('bindu: avyaya: demonstrative: ayam', (t) => {
    const result = avyayamAsti('ayam');
    
    t.notOk(result);
    t.end();
});

test('bindu: avyaya: demonstrative: iyam', (t) => {
    const result = avyayamAsti('iyam');
    
    t.notOk(result);
    t.end();
});

test('bindu: avyaya: demonstrative: eso', (t) => {
    const result = avyayamAsti('eso');
    
    t.notOk(result);
    t.end();
});

test('bindu: avyaya: demonstrative: esaU', (t) => {
    const result = avyayamAsti('esaU');
    
    t.notOk(result);
    t.end();
});

test('bindu: avyaya: no: rAma', (t) => {
    const result = avyayamAsti('rAma');
    
    t.notOk(result);
    t.end();
});

test('bindu: avyaya: no: deva', (t) => {
    const result = avyayamAsti('deva');
    
    t.notOk(result);
    t.end();
});
