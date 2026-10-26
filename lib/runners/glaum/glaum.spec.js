import {test as supertest} from 'supertape';
import {tryCatch} from 'try-catch';
import {createTest} from '#test';
import {createGlaum} from './glaum.js';

const report = () => 'glaum';

const nimitta = () => [
    ['-', '__b === "stop"'],
    ['+', '(__a|1) === "e"'],
    ['+', '(__a|1) === "o"'],
];

const karya = () => '__a / 1 + "_" + __b';

const test = createTest(import.meta.url, {
    plugins: [
        ['glaum', {
            report,
            nimitta,
            karya,
        }],
    ],
});

test('glaum: report: alternatives', (t) => {
    t.report('alternatives', 'glaum');
    t.end();
});

test('glaum: transform: alternatives', (t) => {
    t.transform('alternatives');
    t.end();
});

test('glaum: transform: alternatives-o', (t) => {
    t.transform('alternatives-o');
    t.end();
});

test('glaum: no report: guard-blocked', (t) => {
    t.noReport('guard-blocked');
    t.end();
});

test('glaum: no report: no-case', (t) => {
    t.noReport('no-case');
    t.end();
});

supertest('glaum: error: no + line', (t) => {
    const [error] = tryCatch(createGlaum, {
        plugin: {
            nimitta: () => [
                ['-', '__a === "x"'],
            ],
            karya,
        },
    });
    
    t.equal(error.message, 'Expected at least one + line in nimitta');
    t.end();
});

supertest('glaum: error: shraum and karya', (t) => {
    const [error] = tryCatch(createGlaum, {
        plugin: {
            nimitta,
            karya,
            shraum: () => ({}),
        },
    });
    
    t.equal(error.message, 'Expected shraum or karya, not both');
    t.end();
});
