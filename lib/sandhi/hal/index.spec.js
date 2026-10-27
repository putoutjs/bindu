import {test} from 'supertape';
import * as rules from './index.js';

const group = 'hal';

for (const name of Object.keys(rules.rules)) {
    test(`sandhi/${group}: ${name} exports report and sutra`, (t) => {
        const plugin = rules.rules[name];

        t.ok(plugin.report && plugin.sutra && typeof plugin.sutra() === 'string', `${name}: report and sutra`);
        t.end();
    });
}
