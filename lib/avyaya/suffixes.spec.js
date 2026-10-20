import {test} from 'supertape';
import {astiAvyayaSuffix} from './suffixes.js';

test('avyaya: suffixes: kftvA', (t) => {
    const result = astiAvyayaSuffix('kftvA');
    
    t.ok(result);
    t.end();
});

test('avyaya: suffixes: kftvA: gatvA', (t) => {
    const result = astiAvyayaSuffix('gatvA');
    
    t.ok(result);
    t.end();
});

test('avyaya: suffixes: lyap', (t) => {
    const result = astiAvyayaSuffix('Agamya');
    
    t.ok(result);
    t.end();
});

test('avyaya: suffixes: tumun: gantum', (t) => {
    const result = astiAvyayaSuffix('gantum');
    
    t.ok(result);
    t.end();
});

test('avyaya: suffixes: tumun: kartum', (t) => {
    const result = astiAvyayaSuffix('kartum');
    
    t.ok(result);
    t.end();
});

test('avyaya: suffixes: no suffix: rAma', (t) => {
    const result = astiAvyayaSuffix('rAma');
    
    t.notOk(result);
    t.end();
});

test('avyaya: suffixes: no suffix: deva', (t) => {
    const result = astiAvyayaSuffix('deva');
    
    t.notOk(result);
    t.end();
});

test('avyaya: suffixes: no suffix: api', (t) => {
    const result = astiAvyayaSuffix('api');
    
    t.notOk(result);
    t.end();
});

test('avyaya: suffixes: no suffix: empty', (t) => {
    const result = astiAvyayaSuffix('');
    
    t.notOk(result);
    t.end();
});
