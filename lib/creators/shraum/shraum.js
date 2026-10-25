import {operator} from 'putout';
import {createSandhi} from '#sandhi';
import {
    compile,
    parseExpression,
} from './evaluate.js';

const {remove} = operator;
const {entries} = Object;

const check = (type, value) => {
    if (type !== typeof value)
        throw TypeError(`Expected ${type}, got ${typeof value}`);
    
    return value;
};

const compileEntry = ([condition, replacement]) => {
    const refs = new Set();
    const test = compile(parseExpression(condition), new Set());
    const replace = compile(parseExpression(replacement), refs);
    
    return {
        test: (scope) => check('boolean', test(scope)),
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

export const compileRules = (rules) => entries(rules).map(compileEntry);

export const createShraum = ({rule, options, plugin, msg}) => {
    const rules = compileRules(plugin.shraum());
    
    return createSandhi({
        rule,
        options,
        msg,
        plugin: {
            report: plugin.report,
            when: (ctx) => Boolean(findRule(rules, ctx)),
            then: (ctx) => evaluate(rules, ctx),
            fix,
        },
    });
};
