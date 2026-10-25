import {parse, types} from 'putout';
import {builtins} from './builtins.js';

const isString = (a) => typeof a === 'string';

const {isBinaryExpression} = types;

const isNumber = ({type}) => type === 'NumericLiteral';
const isWord = (name) => name === '__a' || name === '__b';
const first = (count, text) => text.length < count ? '' : text.slice(0, count);
const last = (count, text) => text.length < count ? '' : text.slice(text.length - count);
const dropFirst = (count, text) => text.slice(count);
const dropLast = (count, text) => text.slice(0, Math.max(text.length - count, 0));

const unsupported = ({type}) => {
    throw SyntaxError(`Unsupported node: ${type}`);
};

const rootOf = (node) => isBinaryExpression(node) ? rootOf(node.left) : node;

const compileSlice = ({operator, left, right}, refs, slice) => {
    const {name} = rootOf(left);
    
    if (!isNumber(right) || !isWord(name))
        throw SyntaxError(`Expected __a or __b fragment with number around ${operator}`);
    
    const text = compile(left, refs);
    const cut = name === '__a' ? slice.end : slice.start;
    
    return (scope) => cut(right.value, text(scope));
};

const concat = (left, right) => (scope) => left(scope) + right(scope);
const equal = (left, right) => (scope) => left(scope) === right(scope);
const notEqual = (left, right) => (scope) => left(scope) !== right(scope);

const operations = {
    '+': concat,
    '===': equal,
    '!==': notEqual,
};

const slices = {
    '|': {
        start: first,
        end: last,
    },
    '/': {
        start: dropFirst,
        end: dropLast,
    },
};

const handlers = {
    Identifier: ({name}, refs) => {
        if (isString(builtins[name]))
            return () => builtins[name];
        
        if (!isWord(name))
            throw SyntaxError(`Unknown identifier: ${name}`);
        
        refs.add(name);
        
        return (scope) => scope[name];
    },
    
    StringLiteral: ({value}) => () => value,
    
    UnaryExpression: ({operator, argument}, refs) => {
        if (operator !== '!')
            throw SyntaxError(`Unsupported operator: ${operator}`);
        
        const value = compile(argument, refs);
        
        return (scope) => !value(scope);
    },
    
    LogicalExpression: ({operator, left, right}, refs) => {
        const one = compile(left, refs);
        const two = compile(right, refs);
        
        if (operator === '&&')
            return (scope) => one(scope) && two(scope);
        
        if (operator === '||')
            return (scope) => one(scope) || two(scope);
        
        throw SyntaxError(`Unsupported operator: ${operator}`);
    },
    
    BinaryExpression: (node, refs) => {
        const {
            operator,
            left,
            right,
        } = node;
        
        if (slices[operator])
            return compileSlice(node, refs, slices[operator]);
        
        if (!operations[operator])
            throw SyntaxError(`Unsupported operator: ${operator}`);
        
        return operations[operator](compile(left, refs), compile(right, refs));
    },
    
    CallExpression: ({callee, arguments: args}, refs) => {
        const builtin = builtins[callee.name];
        
        if (!builtin || args.length !== 1)
            throw SyntaxError(`Expected builtin call with one argument: ${callee.name}`);
        
        const value = compile(args[0], refs);
        
        return (scope) => builtin(value(scope));
    },
};

export const compile = (node, refs) => (handlers[node.type] || unsupported)(node, refs);

export const parseExpression = (source) => parse(`(${source});`).program.body[0].expression;
