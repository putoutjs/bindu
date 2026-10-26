import {operator} from 'putout';
import {createSandhi} from '#sandhi';
import {
    compile,
    parseExpression,
} from './evaluate.js';
import {splitNimitta} from './nimitta.js';

const {remove} = operator;
const {entries} = Object;

export {
    splitNimitta,
};

const check = (type, value) => {
    if (type !== typeof value)
        throw TypeError(`Expected ${type}, got ${typeof value}`);
    
    return value;
};

const compileTest = (condition) => {
    const test = compile(parseExpression(condition), new Set());
    
    return (scope) => check('boolean', test(scope));
};

const fires = (scope) => (guard) => guard(scope);

const compileEntry = (guards) => ([condition, replacement]) => {
    const refs = new Set();
    const test = compileTest(condition);
    const replace = compile(parseExpression(replacement), refs);
    
    return {
        test: (scope) => !guards.some(fires(scope)) && test(scope),
        replace: (scope) => check('string', replace(scope)),
        solo: !refs.has('__b'),
    };
};

const createScope = ({name, nextName}) => ({
    __a: name,
    __b: nextName,
});

const matches = (scope) => ({test}) => test(scope);

export const findRule = (rules, ctx) => {
    const scope = createScope(ctx);
    
    return rules.find(matches(scope));
};

export const evaluate = (rules, ctx) => {
    const {replace, solo} = findRule(rules, ctx);
    
    return {
        replacement: replace(createScope(ctx)),
        solo,
    };
};

const fix = ({path, next, replacement, solo}) => {
    path.node.name = replacement;
    
    if (!solo)
        remove(next);
};

export const compilePairs = (pairs, guards = []) => {
    const blockers = guards.map(compileTest);
    
    return pairs.map(compileEntry(blockers));
};

export const compileRules = (rules, guards) => compilePairs(entries(rules), guards);

export const checkRunners = ({shraum, karya}) => {
    if (shraum && karya)
        throw Error('Expected shraum or karya, not both');
};

const getNimitta = ({nimitta}) => nimitta ? nimitta() : [];

export const createWithRules = ({rule, options, msg, report, rules}) => createSandhi({
    rule,
    options,
    msg,
    plugin: {
        report,
        when: (ctx) => Boolean(findRule(rules, ctx)),
        then: (ctx) => evaluate(rules, ctx),
        fix,
    },
});

export const createShraum = ({rule, options, plugin, msg}) => {
    checkRunners(plugin);
    
    const {guards, cases} = splitNimitta(getNimitta(plugin));
    
    if (cases.length)
        throw SyntaxError('Expected - lines only in nimitta with shraum');
    
    return createWithRules({
        rule,
        options,
        msg,
        report: plugin.report,
        rules: compileRules(plugin.shraum(), guards),
    });
};
