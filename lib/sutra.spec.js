import {test} from 'supertape';
import {compareSutra, isTripadi} from './sutra.js';

test('sutra: compare: 8.2.39 < 8.4.40', (t) => {
    const result = compareSutra('8.2.39', '8.4.40');
    
    t.ok(result < 0);
    t.end();
});

test('sutra: compare: equal -> 0', (t) => {
    const result = compareSutra('8.2.39', '8.2.39');
    
    t.equal(result, 0);
    t.end();
});

test('sutra: isTripadi: 6.1.113 false', (t) => {
    const result = isTripadi('6.1.113');
    
    t.notOk(result);
    t.end();
});

test('sutra: isTripadi: 8.2.1 true', (t) => {
    const result = isTripadi('8.2.1');
    
    t.ok(result);
    t.end();
});

test('sutra: isTripadi: 8.3.14 true', (t) => {
    const result = isTripadi('8.3.14');
    
    t.ok(result);
    t.end();
});
