import {readFile, writeFile} from 'node:fs/promises';
import {unzipSync} from 'node:zlib';
import {run} from 'madrun';
import tryToCatch from 'try-to-catch';

export default {
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'test': () => `tape 'test/**/*.js' '{lib,bin}/**/*.spec.{js,mjs}'`,
    'watch:test': async () => await run('watcher', `"${await run('test')}"`),
    'watch:tape': () => 'nodemon -w test -w lib --exec tape',
    'watch:lint': async () => await run('watcher', await run('lint')),
    'watcher': () => 'nodemon -w test -w lib -w bin --exec',
    'coverage': async () => `c8 ${await run('test')}`,
    'precoverage': async () => await run('extract'),
    'report': () => 'c8 report --reporter=lcov',
    'wisdom': () => run(['lint', 'coverage']),
    'extract': async () => {
        const [error] = await tryToCatch(readFile, './dictionary/stems.json');
        
        if (!error)
            return 'tape';
        
        const packed = await readFile('./dictionary/stems.json.gz');
        await writeFile('./dictionary/stems.json', unzipSync(packed));
        
        return 'echo "✅ extract"';
    },
};
