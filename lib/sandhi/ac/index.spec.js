import {test} from 'supertape';
import * as rules from './index.js';

const isString = (a) => typeof a === 'string';

const group = 'ac';

for (const name of Object.keys(rules.rules)) {
    test(`sandhi/${group}: ${name} exports report and sutra`, (t) => {
        const plugin = rules.rules[name];
        
        t.ok(plugin.report && plugin.sutra && isString(plugin.sutra()), `${name}: report and sutra`);
        t.end();
    });
}
