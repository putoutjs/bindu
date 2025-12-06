import {test} from 'supertape';
import {bindu} from '../lib/bindu.js';

test('bindu: places', (t) => {
    const {places} = bindu('प्रतिएक', {
        fix: false,
    });
    
    const expected = [{
        message: 'vṛddhirādaic: ie -> ye',
        position: {
            column: 0,
            line: 1,
        },
        rule: 'apply-vriddhi',
    }];
    
    t.deepEqual(places, expected);
    t.end();
});
